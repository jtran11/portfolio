export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-bg/90 backdrop-blur-sm border-b border-border/60">
      <span className="font-display font-extrabold text-sm tracking-widest uppercase text-text">
        Jenn Tran
      </span>
      <div className="hidden md:flex items-center gap-8">
        <a href="#work" className="text-sm text-muted hover:text-text transition-colors">
          Work
        </a>
        <a href="#about" className="text-sm text-muted hover:text-text transition-colors">
          About
        </a>
        <a
          href="mailto:jenntranux@gmail.com"
          className="text-sm text-accent font-display font-bold hover:underline"
        >
          Get in touch →
        </a>
      </div>
    </nav>
  );
}
