const items = [
  "Product Strategy",
  "UX Research",
  "Interaction Design",
  "Design Systems",
  "Prototyping",
  "Stakeholder Alignment",
  "Zero-to-One",
  "User Interviews",
  "Cross-functional Leadership",
  "Mobile",
  "Web App",
  "B2B SaaS",
];

export default function MarqueeBar() {
  return (
    <div className="overflow-hidden border-y border-border py-4">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-muted text-sm font-mono mx-10">
            {item}
            <span className="text-accent mx-10">☾</span>
          </span>
        ))}
      </div>
    </div>
  );
}
