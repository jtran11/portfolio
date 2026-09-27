import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the password page and Next.js internals through
  if (pathname.startsWith("/password") || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  // If no AUTH_TOKEN is configured (e.g. local dev without .env.local), let through
  const authToken = process.env.AUTH_TOKEN;
  if (!authToken) return NextResponse.next();

  const cookie = request.cookies.get("auth_session");
  if (cookie?.value === authToken) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/password";
  url.searchParams.set("from", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|.*\\.svg$|.*\\.png$|.*\\.pdf$).*)"],
};
