"use client";

import { useEffect, useRef } from "react";

// Password input that reliably grabs focus as soon as the page is ready,
// so the visitor can start typing immediately.
export default function PasswordField() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const focus = () => ref.current?.focus();
    focus();
    // Re-try once after the fade-in / hydration settles, and when the tab regains focus.
    const t = setTimeout(focus, 150);
    window.addEventListener("focus", focus);
    return () => {
      clearTimeout(t);
      window.removeEventListener("focus", focus);
    };
  }, []);

  return (
    <input
      ref={ref}
      type="password"
      name="password"
      placeholder="Password"
      autoFocus
      autoComplete="current-password"
      className="w-full bg-surface border border-border px-4 py-3 text-sm text-text placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
    />
  );
}
