import ScrollReveal from "@/components/ScrollReveal";

const tools = [
  "Figma", "Framer", "Maze", "FullStory", "Miro",
  "Notion", "Linear", "SQL (basic)", "User Interviews",
  "Jobs-to-be-Done", "Design Sprints", "A/B Testing",
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 border-t border-border">
      <ScrollReveal>
        <div className="flex items-center gap-6 mb-20">
          <h2 className="font-mono text-accent text-xs tracking-[0.25em] uppercase shrink-0">
            About
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <ScrollReveal delay={100}>
          <h3 className="font-serif italic font-light text-[clamp(36px,4.5vw,64px)] leading-[1.05] text-text mb-10">
            I&rsquo;m a builder
            <br />
            who happens
            <br />
            to design.
          </h3>
          <div className="w-12 h-px bg-accent mb-8" />
          <p className="text-accent text-xs font-mono tracking-widest uppercase">
            Based in Orange County, CA
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col gap-6">
            <p className="text-text text-lg leading-relaxed">
              Most designers work from the brief. I work from the problem.
              The through-line is always the same: get close to users,
              understand the business, and ship something that moves a number.
            </p>
            <p className="text-muted text-base leading-relaxed">
              I&rsquo;m comfortable in ambiguity, fast to build conviction, and
              obsessive about outcomes — not deliverables. I&rsquo;ve led design
              from zero-to-one, scaled systems across large teams, and
              collaborated with PMs and engineers who care about results as
              much as I do.
            </p>

            <div className="pt-4">
              <p className="text-muted text-xs uppercase tracking-widest mb-4 font-mono">
                Tools & Methods
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs border border-border text-muted px-3 py-1.5 hover:border-accent hover:text-text transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
