import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type Props = {
  searchParams: Promise<{ error?: string; from?: string }>;
};

async function authenticate(formData: FormData) {
  "use server";
  const password = formData.get("password") as string;
  const rawFrom = formData.get("from") as string;

  // Guard against open redirect — only allow same-origin paths
  const from = rawFrom?.startsWith("/") && !rawFrom.startsWith("//") ? rawFrom : "/";

  if (password !== process.env.AUTH_PASSWORD) {
    redirect(`/password?error=1&from=${encodeURIComponent(from)}`);
  }

  const cookieStore = await cookies();
  cookieStore.set("auth_session", process.env.AUTH_TOKEN!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  redirect(from);
}

export default async function PasswordPage({ searchParams }: Props) {
  const params = await searchParams;
  const from = params?.from || "/";
  const hasError = !!params?.error;

  return (
    <div
      className="min-h-screen bg-bg flex flex-col items-center justify-center px-6"
      style={{ animation: "fadeIn 0.6s ease forwards" }}
    >
      <div className="w-full max-w-sm flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-serif italic font-light text-4xl text-text">
            Jenn Tran
          </span>
          <p className="text-muted text-sm font-mono tracking-wide">
            This portfolio is password protected.
          </p>
        </div>

        <form action={authenticate} className="flex flex-col gap-3">
          <input type="hidden" name="from" value={from} />
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoFocus
              autoComplete="current-password"
              className="w-full bg-surface border border-border px-4 py-3 text-sm text-text placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
            />
            {hasError && (
              <p className="mt-2 text-xs text-muted font-mono">
                Incorrect password. Try again.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-accent text-bg font-display font-bold text-xs tracking-widest uppercase px-6 py-3 hover:bg-text hover:text-bg transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
