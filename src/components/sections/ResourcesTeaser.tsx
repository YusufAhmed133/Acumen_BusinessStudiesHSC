import { Reveal } from "@/components/ui/Reveal";
import { ScrollLink } from "@/components/ui/ScrollLink";

const PUBLIC_RESOURCES = [
  {
    topic: "Operations",
    kind: "Essay scaffold",
    title: "Sample Band 6 Operations essay scaffold",
    description: "A marked HSC Section III Operations response showing exactly how to structure a business report — which headings to use, how many marks per criterion, and where students lose marks.",
    tint: "#C9EFD3",
    accent: "#1B6038",
    cta: "Download sample PDF",
    href: "/resources/sample-operations-scaffold.pdf",
  },
  {
    topic: "Finance",
    kind: "Practice questions",
    title: "5 Finance ratio calculation drills",
    description: "Five worked examples covering profitability, liquidity, and efficiency ratios — each with the formula, a full calculation, and a one-paragraph analysis linking the result to a business decision.",
    tint: "#C9DCFB",
    accent: "#1E4B99",
    cta: "Download sample PDF",
    href: "/resources/sample-finance-drills.pdf",
  },
];

const LOCKED_RESOURCES = [
  { topic: "Marketing", kind: "Past paper bank", title: "Section II: all marketing responses 2010–2025", tint: "#FDE9B0", accent: "#9A6300" },
  { topic: "Operations", kind: "Past paper bank", title: "Section III: all operations essays 2010–2025", tint: "#C9EFD3", accent: "#1B6038" },
  { topic: "Human Resources", kind: "Notes", title: "Full HR topic notes — 99.95 ATAR graduate", tint: "#FADADA", accent: "#8B2929" },
  { topic: "Finance", kind: "Notes", title: "Ratio analysis: 40 full worked examples", tint: "#C9DCFB", accent: "#1E4B99" },
];

const LockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
    <rect x="3" y="7" width="10" height="8" rx="2" stroke="#111111" strokeWidth="1.5" />
    <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M8 2v8m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 13h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export function ResourcesTeaser() {
  return (
    <section
      id="resources"
      style={{
        background: "#ffffff",
        padding: "96px 0 104px",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
        <Reveal>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(32px, 3.8vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              margin: "0 0 12px",
              color: "#111111",
              maxWidth: 700,
            }}
          >
            HSC Business Studies Study Materials
          </h2>
        </Reveal>
        <Reveal delay={50}>
          <p style={{ fontSize: 16, color: "#5C5C5C", margin: "0 0 48px", maxWidth: 560, lineHeight: 1.6 }}>
            Two samples are free to download. The full library — past-paper banks, topic notes, essay scaffolds, and calculation drills — is available to enrolled students.
          </p>
        </Reveal>

        {/* Public previews */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}
          className="resources-public-grid"
        >
          {PUBLIC_RESOURCES.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <div
                style={{
                  borderRadius: 18,
                  padding: "28px",
                  background: r.tint,
                  border: `1px solid ${r.accent}22`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <span
                    style={{
                      padding: "3px 10px", borderRadius: 999, fontSize: 10, fontWeight: 700,
                      letterSpacing: "0.1em", textTransform: "uppercase", background: "#ffffff99",
                      color: r.accent,
                    }}
                  >
                    {r.topic}
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: r.accent, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.7 }}>
                    {r.kind}
                  </span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 17, letterSpacing: "-0.02em", color: "#111111", lineHeight: 1.3 }}>
                  {r.title}
                </div>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "#3A3A3A", flex: 1 }}>
                  {r.description}
                </p>
                <a
                  href={r.href}
                  download
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    padding: "10px 18px", borderRadius: 999,
                    background: r.accent, color: "#ffffff",
                    textDecoration: "none", fontSize: 13, fontWeight: 600,
                    letterSpacing: "-0.01em", alignSelf: "flex-start",
                    marginTop: 4,
                  }}
                >
                  <DownloadIcon />
                  {r.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Locked resources */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}
          className="resources-locked-grid"
        >
          {LOCKED_RESOURCES.map((r, i) => (
            <Reveal key={r.title} delay={120 + i * 50}>
              <div
                style={{
                  borderRadius: 14,
                  padding: "20px",
                  background: "#F9F9F7",
                  border: "1px solid rgba(0,0,0,0.07)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute", inset: 0,
                    backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)",
                    background: "rgba(249,249,247,0.72)",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    borderRadius: 14, zIndex: 2, gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 32, height: 32, borderRadius: 999,
                      background: "#F0F0EE", border: "1px solid rgba(0,0,0,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <LockIcon />
                  </span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#111111", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    Students only
                  </span>
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, color: r.accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {r.topic}
                </span>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9A9A9A", margin: "4px 0" }}>
                  {r.kind}
                </div>
                <div style={{ fontWeight: 600, fontSize: 14, letterSpacing: "-0.01em", color: "#111111", lineHeight: 1.35 }}>
                  {r.title}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={380}>
          <div style={{ marginTop: 32 }}>
            <ScrollLink
              sectionId="enquire"
              style={{
                display: "inline-block", padding: "13px 24px", borderRadius: 12,
                background: "#C9EFD3", color: "#0A2E1A", textDecoration: "none",
                fontSize: 14, fontWeight: 600, letterSpacing: "-0.01em",
              }}
            >
              Book a trial to unlock all resources →
            </ScrollLink>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .resources-public-grid { grid-template-columns: 1fr !important; }
          .resources-locked-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .resources-locked-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
