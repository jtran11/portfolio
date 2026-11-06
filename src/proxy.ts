import { NextRequest, NextResponse } from "next/server";
import { authConfigured, safeEqual } from "@/lib/auth";

const isProd = process.env.NODE_ENV === "production";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Fail CLOSED in production: if the secrets are missing, nobody gets in.
  // (Local dev without .env.local is still allowed through.)
  if (!authConfigured()) {
    if (!isProd) return NextResponse.next();
    return new NextResponse("This site is not configured yet.", {
      status: 503,
      headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
    });
  }

  // Only the login page itself is public (plus Next dev internals in dev).
  if (pathname === "/password" || pathname.startsWith("/password/")) {
    return NextResponse.next();
  }
  if (!isProd && pathname.startsWith("/_next/")) return NextResponse.next();

  const cookie = request.cookies.get("auth_session")?.value;
  if (safeEqual(cookie, process.env.AUTH_TOKEN)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/password";
  url.search = "";
  url.searchParams.set("from", pathname);
  return NextResponse.redirect(url);
}

// Protect EVERYTHING (including /public images, SVGs and PDFs) except the
// hashed build assets the login page needs to render.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
