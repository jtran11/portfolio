"use client";

import { useState } from "react";
import type { PersonaId } from "@/lib/personas";

const options: { id: PersonaId; label: string; sub: string }[] = [
  {
    id: "recruiter",
    label: "I'm looking to hire",
    sub: "Highlights, resume & availability",
  },
  {
    id: "collaborator",
    label: "I want to collaborate",
    sub: "Process, thinking & approach",
  },
  {
    id: "explorer",
    label: "I'm just curious",
    sub: "Full portfolio, no filter",
  },
];

export default function EntryScreen({
  onSelect,
}: {
  onSelect: (p: PersonaId) => void;
}) {
  const [leaving, setLeaving] = useState(false);
  const [chosen, setChosen] = useState<PersonaId | null>(null);

  function handlePick(id: PersonaId) {
    if (leaving) return;
    setChosen(id);
    setLeaving(true);
    setTimeout(() => onSelect(id), 650);
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center px-6 md:px-12"
      style={{ opacity: leaving ? 0 : 1, transition: "opacity 0.65s ease" }}
    >
      <span className="absolute top-7 left-8 font-display font-bold text-xs tracking-widest uppercase text-muted">
        Jenn Tran
      </span>

      <div className="w-full max-w-4xl">
        <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-muted mb-5 font-sans">
          Portfolio · 2026
        </p>
        <h1 className="font-display font-bold text-[clamp(28px,3.5vw,48px)] text-text mb-10">
          What brings you here?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {options.map((opt, i) => (
            <button
              key={opt.id}
              onClick={() => handlePick(opt.id)}
              style={{
                opacity: chosen && chosen !== opt.id ? 0.2 : 1,
                transition:
                  "opacity 0.3s ease, border-color 0.2s ease, background-color 0.2s ease",
              }}
              className="group text-left border border-border bg-surface p-8 flex flex-col cursor-pointer hover:border-accent hover:bg-bg"
            >
              <span className="text-[11px] text-muted font-sans mb-10 block">
                0{i + 1}
              </span>

              <div className="flex-1">
                <h3 className="font-display font-bold text-xl text-text leading-snug mb-3 group-hover:text-accent transition-colors duration-200">
                  {opt.label}
                </h3>
                <p className="text-sm text-muted font-sans leading-relaxed">
                  {opt.sub}
                </p>
              </div>

              <div className="mt-10 flex justify-end">
                <span className="text-border group-hover:text-accent transition-colors duration-200 text-base font-sans">
                  →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
