"use client";

import { useState, useRef } from "react";

const PASSWORD = "opensesame";
const SESSION_KEY = "jt-portfolio-auth";

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(SESSION_KEY) === "1";
}

export function setAuthenticated() {
  sessionStorage.setItem(SESSION_KEY, "1");
}

export default function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value === PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setValue("");
      setTimeout(() => setShake(false), 500);
      inputRef.current?.focus();
    }
  }

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

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div
            style={
              shake
                ? { animation: "shake 0.45s cubic-bezier(.36,.07,.19,.97) both" }
                : {}
            }
          >
            <input
              ref={inputRef}
              type="password"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              placeholder="Password"
              autoFocus
              autoComplete="current-password"
              className="w-full bg-surface border border-border px-4 py-3 text-sm text-text placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
            />
            {error && (
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
