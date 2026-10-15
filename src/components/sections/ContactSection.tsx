import ScrollReveal from "@/components/ScrollReveal";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 md:px-12 py-32 border-t border-border">
      <ScrollReveal>
        <div className="max-w-5xl">
          <p className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-6">
            Open to new roles
          </p>
          <h2 className="font-serif italic font-light leading-[0.9] text-[clamp(44px,6.5vw,104px)] text-text mb-10">
            Got a problem
            <br />
            worth solving?
          </h2>
          <p className="text-muted text-lg max-w-lg mb-12 leading-relaxed">
            I&rsquo;m looking for a thoughtful, well-run team building AI-powered
            products — where design has a real seat at the table and people
            do their best work at a sustainable pace.
          </p>
          <a
            href="mailto:jenntranux@gmail.com"
            className="inline-flex items-center gap-4 font-display font-bold text-2xl md:text-3xl text-text hover:text-accent transition-colors group"
          >
            jenntranux@gmail.com
            <span className="text-accent group-hover:translate-x-2 transition-transform inline-block">
              →
            </span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
