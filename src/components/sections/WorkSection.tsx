import Link from "next/link";
import { projects } from "@/lib/projects";
import ScrollReveal from "@/components/ScrollReveal";

export default function WorkSection() {
  return (
    <section id="work" className="px-6 md:px-12 py-24">
      <ScrollReveal>
        <div className="flex items-center gap-6 mb-16">
          <h2 className="font-mono text-accent text-xs tracking-[0.25em] uppercase shrink-0">
            Selected Work
          </h2>
          <div className="flex-1 h-px bg-border" />
          <span className="text-muted text-xs shrink-0">
            {projects.length} projects
          </span>
        </div>
      </ScrollReveal>

      <div>
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 80}>
            <Link
              href={`/work/${project.slug}`}
              className="group relative block border-t border-border py-10 md:py-14 -mx-6 md:-mx-12 px-6 md:px-12 hover:bg-surface transition-colors duration-300"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col md:flex-row md:gap-12">
                <span className="font-serif italic font-light text-[64px] leading-none text-dim group-hover:text-accent transition-colors duration-300 shrink-0 w-20 mb-4 md:mb-0">
                  {project.number}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-sm text-muted">
                    <span>{project.company}</span>
                    <span className="text-border">·</span>
                    <span>{project.role}</span>
                    <span className="text-border">·</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif italic font-light text-[clamp(28px,3.5vw,52px)] leading-tight text-text mb-3">
                    {project.name}
                  </h3>
                  <p className="text-muted text-base mb-8 max-w-2xl">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-x-10 gap-y-4 mb-8">
                    {project.metrics.map((metric, j) => (
                      <div key={j}>
                        <div className="font-display font-bold text-2xl text-text">
                          {metric.value}
                        </div>
                        <div className="text-muted text-xs mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-xs border border-border text-muted px-3 py-1.5 group-hover:border-dim transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="font-display font-bold text-sm text-muted group-hover:text-accent transition-colors shrink-0">
                      View case study{" "}
                      <span className="inline-block group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}
