export default function Hero() {
  return (
    <section className="min-h-svh flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 pt-28">
      <p className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-8">
        Product Designer · Available Now
      </p>

      <h1
        className="font-serif italic font-light leading-[0.88] tracking-tight text-[clamp(64px,10vw,160px)] text-text mb-12"
        style={{ textShadow: "0 0 120px rgba(196,154,60,0.15), 0 0 60px rgba(139,92,246,0.08)" }}
      >
        Design that
        <br />
        moves the
        <br />
        needle.
      </h1>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <p className="text-muted text-lg leading-relaxed max-w-[440px]">
          I research fast, build conviction, and ship products that change how
          businesses perform. 5+ years across early-stage and scaled teams.
        </p>
        <div className="flex items-center gap-6 shrink-0">
          <a
            href="#work"
            className="bg-accent text-bg font-display font-bold text-sm px-7 py-3.5 hover:bg-text hover:text-bg transition-colors"
          >
            View Work ↓
          </a>
          <a
            href="/resume.pdf"
            className="text-sm text-muted hover:text-text transition-colors"
          >
            Resume ↓
          </a>
        </div>
      </div>
    </section>
  );
}
