// Constant-time string comparison (avoids leaking how many characters matched).
export function safeEqual(
  a: string | null | undefined,
  b: string | null | undefined
): boolean {
  if (typeof a !== "string" || typeof b !== "string") return false;
  const len = Math.max(a.length, b.length);
  let diff = a.length ^ b.length;
  for (let i = 0; i < len; i++) {
    diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  }
  return diff === 0;
}

// The gate is only "configured" when both secrets exist.
export function authConfigured(): boolean {
  return Boolean(process.env.AUTH_PASSWORD && process.env.AUTH_TOKEN);
}
