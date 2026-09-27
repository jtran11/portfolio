import { projects } from "@/lib/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Jenn Tran`,
    description: project.tagline,
  };
}

export default async function CaseStudy(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-bg text-text font-sans">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-bg/90 backdrop-blur-sm">
        <Link
          href="/"
          className="font-display font-bold text-sm text-muted hover:text-text transition-colors"
        >
          ← Jenn Tran
        </Link>
        <a
          href="mailto:jenntranux@gmail.com"
          className="text-sm text-accent font-display font-bold hover:underline"
        >
          Let's work together →
        </a>
      </nav>

      {/* Project Header */}
      <header className="px-6 md:px-12 pt-36 pb-20">
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs border border-border text-muted px-3 py-1.5"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-start gap-8 mb-6">
          <span className="font-display font-extrabold text-[80px] leading-none text-border pt-2 hidden md:block shrink-0">
            {project.number}
          </span>
          <div>
            <p className="text-muted text-sm mb-3">
              {project.company} · {project.role} · {project.year}
            </p>
            <h1 className="font-display font-extrabold text-[clamp(40px,5.5vw,88px)] leading-[0.92] text-text mb-6">
              {project.name}
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex flex-wrap gap-12 md:gap-20 pt-16 border-t border-border mt-16">
          {project.metrics.map((metric, i) => (
            <div key={i}>
              <div className="font-display font-extrabold text-4xl text-accent">
                {metric.value}
              </div>
              <div className="text-muted text-sm mt-2">{metric.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Cover image placeholder */}
      <div className="mx-6 md:mx-12 bg-surface border border-border aspect-video flex items-center justify-center mb-20">
        <span className="text-muted text-sm font-mono">
          [Project cover image or hero mockup]
        </span>
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 pb-32">
        <div className="max-w-3xl space-y-20">
          <div>
            <h2 className="font-display font-bold text-xs tracking-[0.25em] uppercase text-accent mb-6">
              Overview
            </h2>
            <p className="text-text text-xl leading-relaxed">
              {project.overview}
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xs tracking-[0.25em] uppercase text-accent mb-6">
              The Problem
            </h2>
            <p className="text-text text-xl leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Artifact placeholder */}
          <div className="bg-surface border border-border aspect-[4/3] flex items-center justify-center">
            <span className="text-muted text-sm font-mono">
              [Research artifacts, user flows, or early explorations]
            </span>
          </div>

          <div>
            <h2 className="font-display font-bold text-xs tracking-[0.25em] uppercase text-accent mb-6">
              Approach
            </h2>
            <p className="text-text text-xl leading-relaxed">
              {project.approach}
            </p>
          </div>

          {/* Design placeholder */}
          <div className="bg-surface border border-border aspect-video flex items-center justify-center">
            <span className="text-muted text-sm font-mono">
              [Final designs or product screens]
            </span>
          </div>

          <div>
            <h2 className="font-display font-bold text-xs tracking-[0.25em] uppercase text-accent mb-6">
              Outcome & Impact
            </h2>
            <p className="text-text text-xl leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>
      </div>

      {/* Next project */}
      <div className="border-t border-border">
        <Link
          href={`/work/${nextProject.slug}`}
          className="group flex items-center justify-between px-6 md:px-12 py-16 hover:bg-surface transition-colors"
        >
          <div>
            <p className="text-muted text-xs uppercase tracking-widest font-mono mb-3">
              Next Project
            </p>
            <h3 className="font-display font-extrabold text-3xl md:text-4xl text-text group-hover:text-accent transition-colors">
              {nextProject.name} →
            </h3>
          </div>
          <span className="font-display font-extrabold text-7xl text-border group-hover:text-muted transition-colors hidden md:block">
            {nextProject.number}
          </span>
        </Link>
      </div>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display font-extrabold text-sm text-muted hover:text-text transition-colors"
        >
          Jenn Tran
        </Link>
        <span className="text-muted text-xs">© 2026.</span>
        <a
          href="mailto:jenntranux@gmail.com"
          className="text-muted text-sm hover:text-text transition-colors"
        >
          jenntranux@gmail.com
        </a>
      </footer>
    </div>
  );
}
