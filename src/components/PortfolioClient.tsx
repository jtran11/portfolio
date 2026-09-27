"use client";

import CustomCursor from "./CustomCursor";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import MarqueeBar from "./sections/MarqueeBar";
import WorkSection from "./sections/WorkSection";
import About from "./sections/About";
import HowIWork from "./sections/HowIWork";
import Skills from "./sections/Skills";
import ContactSection from "./sections/ContactSection";

function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
      <span className="font-display font-extrabold text-sm text-muted">
        Jenn Tran
      </span>
      <span className="text-muted text-xs">
        © 2026. Designed & built by Jenn Tran.
      </span>
      <div className="flex items-center gap-6">
        <a
          href="[your-linkedin-url]"
          className="text-muted text-sm hover:text-text transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="/resume.pdf"
          className="text-muted text-sm hover:text-text transition-colors"
        >
          Resume ↓
        </a>
      </div>
    </footer>
  );
}

function PortfolioView() {
  return (
    <div
      className="min-h-screen bg-bg text-text font-sans"
      style={{ animation: "fadeIn 0.8s ease forwards" }}
    >
      <Nav />
      <Hero />
      <MarqueeBar />
      <WorkSection />
      <About />
      <HowIWork />
      <Skills />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default function PortfolioClient() {
  return (
    <>
      <CustomCursor />
      <PortfolioView />
    </>
  );
}
