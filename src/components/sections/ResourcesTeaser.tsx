import { Reveal } from "@/components/ui/Reveal";

const PREVIEWS = [
  { topic: "Operations", kind: "Notes", title: "Lean production + global operations", tint: "#C9EFD3", accent: "#1B6038" },
  { topic: "Marketing", kind: "Past paper bank", title: "Section II: all marketing responses 2010–2025", tint: "#FDE9B0", accent: "#9A6300" },
  { topic: "Finance", kind: "Notes", title: "Ratio analysis: full worked examples", tint: "#C9DCFB", accent: "#1E4B99" },
  { topic: "HR", kind: "Scaffold", title: "Section III HR essay scaffold", tint: "#FADADA", accent: "#8B2929" },
  { topic: "Operations", kind: "Past paper bank", title: "Section III: all operations essays 2010–2025", tint: "#C9EFD3", accent: "#1B6038" },
  { topic: "Finance", kind: "Practice questions", title: "Working capital: 40 calculation drills", tint: "#C9DCFB", accent: "#1E4B99" },
];

const LockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
    <rect x="3" y="7" width="10" height="8" rx="2" stroke="#111111" strokeWidth="1.5" />
    <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
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
              margin: "0 0 44px",
              color: "#111111",
              maxWidth: 700,
            }}
          >
            Resources
          </h2>
        </Reveal>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}
          className="resources-grid"
        >
          {PREVIEWS.map((r, i) => (
            <Reveal key={i} delay={i * 55}>
              <div
                style={{
                  borderRadius: 16,
                  padding: "22px",
                  background: "#F9F9F7",
                  border: "1px solid rgba(0,0,0,0.07)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Lock overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                    background: "rgba(249,249,247,0.72)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 16,
                    zIndex: 2,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <span
                      style={{
                        width: 34, height: 34, borderRadius: 999,
                        background: "#F0F0EE",
                        border: "1px solid rgba(0,0,0,0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      <LockIcon />
                    </span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "#111111", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      Students only
                    </span>
                  </div>
                </div>

                {/* Content behind lock */}
                <div
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    padding: "4px 10px", borderRadius: 999, background: r.tint, marginBottom: 12,
                  }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: 999, background: r.accent, display: "inline-block" }} />
                  <span style={{ fontSize: 10, fontWeight: 700, color: r.accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {r.topic}
                  </span>
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9A9A9A", marginBottom: 6 }}>
                  {r.kind}
                </div>
                <div style={{ fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em", color: "#111111", lineHeight: 1.35 }}>
                  {r.title}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={380}>
          <div style={{ marginTop: 36 }}>
            <a
              href="/#enquire"
              style={{
                display: "inline-block",
                padding: "13px 24px",
                borderRadius: 12,
                background: "#C9EFD3",
                color: "#0A2E1A",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              Book a trial to unlock resources →
            </a>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .resources-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .resources-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
