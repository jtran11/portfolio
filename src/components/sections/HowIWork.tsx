import ScrollReveal from "@/components/ScrollReveal";

const principles = [
  {
    number: "01",
    title: "Get close to the problem",
    body: "Research, stakeholder interviews, and competitive analysis before any design work. I find what's actually broken before I try to fix it — and I stay skeptical of my assumptions until data backs them up.",
  },
  {
    number: "02",
    title: "Build conviction, not decks",
    body: "I prototype fast, test with real users, and cut ruthlessly. The goal is a defensible point of view — not a beautiful slide. Conviction kills wasted cycles.",
  },
  {
    number: "03",
    title: "Ship for outcomes",
    body: "Success is a number that changed, not a feature that launched. I stay close to data post-ship, iterate until something actually moves, and document what worked so the team can repeat it.",
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="px-6 md:px-12 py-24 border-t border-border">
      <ScrollReveal>
        <div className="flex items-center gap-6 mb-20">
          <h2 className="font-mono text-accent text-xs tracking-[0.25em] uppercase shrink-0">
            How I Work
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {principles.map((p, i) => (
          <ScrollReveal key={p.number} delay={i * 100}>
            <span className="font-serif italic font-light text-[64px] leading-none text-dim block mb-6">
              {p.number}
            </span>
            <h3 className="font-display font-bold text-xl text-text mb-4">
              {p.title}
            </h3>
            <p className="text-muted text-base leading-relaxed">{p.body}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
