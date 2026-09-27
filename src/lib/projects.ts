export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  number: string;
  company: string;
  name: string;
  tagline: string;
  role: string;
  year: string;
  tags: string[];
  metrics: Metric[];
  overview: string;
  problem: string;
  approach: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "service-concierge",
    number: "01",
    company: "myKaarma",
    name: "Service Concierge",
    tagline:
      "Designed a conversational Voice AI that answers dealership calls, books appointments, and routes customers automatically — turning missed calls into captured revenue.",
    role: "Manager, Product Design",
    year: "2025",
    tags: ["Voice AI", "Conversational UX", "0→1", "Automotive"],
    metrics: [
      { value: "[X]", label: "Calls handled to date" },
      { value: "[X%]", label: "Improvement in call answer rate" },
      { value: "[X]", label: "Appointments booked without human involvement" },
    ],
    overview:
      "Automotive dealerships lose thousands of dollars a month to unanswered calls. High staff turnover means phones go unattended, and customers who don't get through rarely call back — they go to a competitor. myKaarma's Service Concierge answers every call, greets customers by name, and routes them to the right workflow automatically. I led design as Manager of Product Design alongside senior designer Ruth, taking the product from kickoff in January 2025 to an Alpha launch at a live dealership on February 24, 2025 — eight weeks from concept to production calls.",
    problem:
      "Dealers operate with chronic understaffing and average service advisor tenures under a year. The result: calls go unanswered, new staff don't know how to route them correctly, and real business walks out the door. The opportunity was clear. The design challenge was harder — making an AI feel natural enough that customers would trust it with something as personal as their car, and configurable enough that it could adapt to how each dealership actually operates.",
    approach:
      "We scoped the Alpha deliberately to a single workflow: appointment booking. Rather than build everything at once, we needed real call data to understand how customers actually talk before we could expand. That constraint proved right — the edge cases we hadn't anticipated showed up fast. We quickly discovered we had no visibility into why individual calls routed the way they did. When a call landed in the wrong funnel, we couldn't trace it. I designed a call debugging interface that visualized every call's path through the routing logic — this became the core tool for iterating on the model. We also had to solve for dealer variability: every dealership has different departments, staff configurations, and routing preferences. The system needed to be fully configurable without requiring any technical knowledge from the dealer side. After launch we expanded to vehicle status updates and open-ended Q&A, and built a human-in-the-loop review workflow that let our team flag and retrain from misinterpreted calls — critical for handling accent variability and ambiguous caller input.",
    outcome:
      "Service Concierge is now live across multiple dealerships, handling appointment booking, vehicle status inquiries, and general call routing. [X] calls handled to date. Dealer call answer rate improved from [X%] to [X%]. [X] appointments booked without human involvement. The call debugging tooling we built cut average time to diagnose a routing issue from [X] to [X].",
  },
  {
    slug: "mk-blue",
    number: "02",
    company: "myKaarma",
    name: "mK Blue",
    tagline:
      "Migrated 500 acquired dealerships to a new unified customer hub in one month — making the hardest call first: what to port, what to kill, and how to move dealers who hate change.",
    role: "Product Designer II",
    year: "2021",
    tags: ["0→1", "Acquisition", "Communication Platform", "Automotive"],
    metrics: [
      { value: "500", label: "Dealerships migrated within one month" },
      { value: "[X]", label: "Features scoped, triaged, and shipped" },
      { value: "[X]", label: "Support ticket volume vs. projection" },
    ],
    overview:
      "In June 2021, myKaarma acquired PocketExpert — a communication and digital inspection company with 500 active dealerships on their platform. The acquisition filled a critical gap: myKaarma handled dealer-to-customer communication via text, email, and phone, but had no unified customer-facing hub. PocketExpert had that hub, plus a digital multipoint inspection workflow customers used to approve or decline repair recommendations on their vehicles. Their platform was being deprecated entirely, and every one of their dealerships needed to be live on mK Blue within one month. I led the design effort to define, scope, and ship it in that window.",
    problem:
      "The one-month deadline wasn't negotiable — it was set by the deprecation of PocketExpert's platform. The real design problem was layered: we needed to build a new product, migrate users who had trained habits around a completely different workflow, and do it without triggering the wave of support tickets that hits any time dealer software changes. PocketExpert's MPI workflow was fundamentally different from myKaarma's. A straight port wasn't possible. A full redesign wasn't possible either. We had to make fast, high-stakes calls about what to translate, what to redesign, and what to cut — with 500 dealerships watching.",
    approach:
      "The first and most consequential decision was feature triage. We mapped PocketExpert's feature set against myKaarma's existing suite and scored everything on two axes: daily usage and migration complexity. Features that were high-usage and translatable became the core of mK Blue. Features with low usage or fundamentally incompatible workflows were deprecated, with a clear rationale we could communicate to dealers. The MPI workflow was the hardest call — their approach was entirely different from ours, and we couldn't replicate it in time. We designed a transition path that leveraged myKaarma's existing MPI system while preserving the customer-facing actions dealers cared most about: approvals, declines, and the ability to see inspection videos. Knowing that dealer users resist change strongly, we built the migration experience to minimize surprise — familiar interaction patterns where possible, proactive communication about what changed, and self-service answers to the most predictable support questions baked directly into the UI.",
    outcome:
      "500 dealerships migrated to mK Blue within the one-month deadline. [X] features ported, [X] deprecated. Support ticket volume came in at [X] — [above/below] our pre-launch projection. mK Blue became the foundation for myKaarma's expanded customer suite, with payments, MPI videos, and document collection for warranty, insurance, and loaner vehicles integrated in the months that followed.",
  },
  {
    slug: "claude-sutras",
    number: "03",
    company: "myKaarma",
    name: "claude-sutras",
    tagline:
      "Instead of writing specs a developer might ignore, I encoded myKaarma's design judgment directly into an AI coding agent — a structured library of UX rules that fixes years of known issues at scale, automatically.",
    role: "Manager, Product Design",
    year: "2026",
    tags: ["Design Systems", "AI", "Replatforming", "Automotive"],
    metrics: [
      { value: "[X]", label: "UX skills documented" },
      { value: "[X]", label: "Known issues addressed at scale" },
      { value: "[X]", label: "Screens replatformed to date" },
    ],
    overview:
      "claude-sutras started as a personal experiment: could I encode my own design process — user interview guides, research plans, synthesis frameworks — into Claude skills so I could scale my output without scaling headcount? It worked. When myKaarma decided in June 2026 to replatform its entire dealer application using an AI coding agent, I had a head start. I redirected the system toward a harder problem: teaching the agent to recognize and fix every known usability issue in our product as it rewrites each component. I'm the sole designer on this — I have the most cross-functional context, having spent years watching the same problems surface in support tickets, LogRocket sessions, and UserVoice feedback.",
    problem:
      "Legacy codebases don't just accumulate technical debt — they accumulate design debt. Ours had years of it: inconsistent patterns, missing empty states, broken navigation, inaccessible interactions, and workflow gaps we could see clearly in user feedback but couldn't fix without touching code that was too fragile to change. A full replatform was the chance to fix everything at once. The risk was the same one that haunts every rewrite: designers write specs, developers interpret them inconsistently, and the same issues resurface in new code. I wanted to close that gap at the source.",
    approach:
      "I built a structured intake system that pulls from every feedback channel we have — support tickets, LogRocket session recordings, UserVoice submissions, and cross-functional input from support, product, and engineering. Each issue is triaged by severity (Critical, Gap, or Consider) and documented in a consistent format: what to look for in the code, why it's a failure from the user's perspective, exactly how to fix it, what not to do, and a before/after code example. The agent reads these skill files while rewriting components and applies every relevant fix automatically. Beyond individual issues, I also used the replatform to define the foundational interaction framework we never had — fixing navigation architecture and establishing consistent patterns for how our app handles modals and popups across every surface. The rewrite is intentionally phased by product, starting with the communication module and shell. Every component it touches comes out the other side with years of known issues resolved.",
    outcome:
      "claude-sutras now contains [X] skills across [X] categories. The agent applies them automatically as it rewrites components — fixing in minutes what would have taken months of manual design review. The communication module and shell are currently in progress, with the full platform to follow product by product. Issues that sat in the backlog for years are being resolved at scale without an additional design cycle per component.",
  },
];
