import ScrollReveal from "@/components/ScrollReveal";

const tools = [
  "Figma", "Framer", "Maze", "FullStory", "Miro",
  "Notion", "Linear", "SQL (basic)",
];

const methods = [
  "User Interviews", "Jobs-to-be-Done", "Design Sprints",
  "A/B Testing", "Usability Testing", "Competitive Analysis",
];

const facts = [
  { value: "5+", label: "Years in product design" },
  { value: "[X]", label: "Products shipped end-to-end" },
  { value: "[X]", label: "Team size led" },
];

export default function Skills() {
  return (
    <section className="px-6 md:px-12 py-24 border-t border-border">
      <ScrollReveal>
        <div className="flex items-center gap-6 mb-20">
          <h2 className="font-mono text-accent text-xs tracking-[0.25em] uppercase shrink-0">
            Skills & Tools
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        <ScrollReveal delay={0}>
          <p className="text-muted text-xs uppercase tracking-widest mb-8 font-mono">
            At a glance
          </p>
          <div className="flex flex-col gap-8">
            {facts.map((f) => (
              <div key={f.label}>
                <div className="font-serif italic font-light text-5xl text-text mb-1">
                  {f.value}
                </div>
                <div className="text-muted text-sm">{f.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-muted text-xs uppercase tracking-widest mb-8 font-mono">
            Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="text-xs border border-border text-muted px-3 py-1.5 hover:border-accent hover:text-text transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-muted text-xs uppercase tracking-widest mb-8 font-mono">
            Methods
          </p>
          <div className="flex flex-wrap gap-2">
            {methods.map((m) => (
              <span
                key={m}
                className="text-xs border border-border text-muted px-3 py-1.5 hover:border-accent hover:text-text transition-colors"
              >
                {m}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
