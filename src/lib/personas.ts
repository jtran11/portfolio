export type PersonaId = "recruiter" | "collaborator" | "explorer";

export interface PersonaConfig {
  id: PersonaId;
  entryLabel: string;
  entrySub: string;
  navCta: { label: string; href: string };
  hero: {
    badge: string;
    headline: string[];
    subhead: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  work: {
    maxProjects: number | null;
    showTags: boolean;
  };
  contact: {
    badge: string;
    headline: string;
    body: string;
  };
}

export const personas: Record<PersonaId, PersonaConfig> = {
  recruiter: {
    id: "recruiter",
    entryLabel: "I'm looking to hire",
    entrySub: "Highlights, resume & availability",
    navCta: { label: "Download Resume →", href: "/resume.pdf" },
    hero: {
      badge: "Open to Roles · Product Design Leader",
      headline: ["The designer", "who ships."],
      subhead:
        "8 years shipping B2B SaaS, most recently voice AI. I move fast, work close to engineering, and I'm looking for a role where design has real leverage.",
      primaryCta: { label: "Download Resume ↓", href: "/resume.pdf" },
      secondaryCta: { label: "See my work →", href: "#work" },
    },
    work: {
      maxProjects: 2,
      showTags: false,
    },
    contact: {
      badge: "Open to new roles",
      headline: "Let's find out\nif we're a fit.",
      body: "I'm looking for a thoughtful, well-run team where design has a seat at the table from day one. Send me a note — happy to chat.",
    },
  },

  collaborator: {
    id: "collaborator",
    entryLabel: "I want to collaborate",
    entrySub: "Process, thinking & approach",
    navCta: { label: "Let's build together →", href: "mailto:jenntranux@gmail.com" },
    hero: {
      badge: "Product Design Leader · Builder",
      headline: ["I work closest", "to the problem."],
      subhead:
        "Not the brief. I get close to users, pressure-test assumptions early, and ship things that move numbers. Tell me what you're trying to build.",
      primaryCta: { label: "See My Work ↓", href: "#work" },
      secondaryCta: { label: "How I work →", href: "#how-i-work" },
    },
    work: {
      maxProjects: null,
      showTags: true,
    },
    contact: {
      badge: "Open to collaboration",
      headline: "Got something\nworth building?",
      body: "I'm most useful when I'm in the problem early — before the brief is written. If you're building something ambitious and need a design partner, let's talk.",
    },
  },

  explorer: {
    id: "explorer",
    entryLabel: "I'm just curious",
    entrySub: "Full portfolio, no filter",
    navCta: { label: "Let's work together →", href: "mailto:jenntranux@gmail.com" },
    hero: {
      badge: "Product Design Leader",
      headline: ["Design that", "moves the", "needle."],
      subhead:
        "I work closest to the problem — not the brief. I research fast, build conviction quickly, and ship products that change how businesses grow.",
      primaryCta: { label: "View Work ↓", href: "#work" },
      secondaryCta: { label: "About me →", href: "#about" },
    },
    work: {
      maxProjects: null,
      showTags: true,
    },
    contact: {
      badge: "Available for new roles",
      headline: "Got a problem\nworth solving?",
      body: "I'm looking for a thoughtful, well-run team building AI-powered products — where design has a real seat at the table.",
    },
  },
};
