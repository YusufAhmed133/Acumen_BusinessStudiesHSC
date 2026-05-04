import { Reveal } from "@/components/ui/Reveal";

const PREVIEWS = [
  { topic: "Operations", kind: "Notes", title: "Lean production + global operations", tint: "#CFEAD9", accent: "#1F6B40" },
  { topic: "Marketing",  kind: "Past paper bank", title: "Section II: all marketing responses 2010-2025", tint: "#FBE6BD", accent: "#A66E12" },
  { topic: "Finance",    kind: "Notes", title: "Ratio analysis: full worked examples", tint: "#CFDFF4", accent: "#2A4F94" },
  { topic: "HR",         kind: "Scaffold", title: "Section III HR essay scaffold", tint: "#F4CFCF", accent: "#923333" },
  { topic: "Operations", kind: "Past paper bank", title: "Section III: all operations essays 2010-2025", tint: "#CFEAD9", accent: "#1F6B40" },
  { topic: "Finance",    kind: "Practice questions", title: "Working capital: 40 calculation drills", tint: "#CFDFF4", accent: "#2A4F94" },
];

export function ResourcesTeaser() {
  return (
    <section id="resources" style={{ background: "#CFEAD9", padding: "100px 0 110px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
        <Reveal>
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#1F6B40", marginBottom: 18 }}>
              Resources
            </div>
            <h2 style={{
              fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 62px)",
              lineHeight: 1.02, letterSpacing: "-0.04em",
              margin: 0, color: "#0A0A0A", maxWidth: 860,
            }}>
              Notes, past papers, and scaffolds. Locked to enrolled students.
            </h2>
            <p style={{ fontSize: 17, color: "#1A1A1A", maxWidth: 600, margin: "16px 0 0", lineHeight: 1.5 }}>
              Every resource stays on-site. Nothing is downloadable. Enrolled students get a private login.
            </p>
          </div>
        </Reveal>

        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }} className="resources-grid">
          {PREVIEWS.map((r, i) => (
            <Reveal key={i} delay={i * 60}>
              <div style={{
                borderRadius: 18, padding: "22px 22px",
                background: "#FFFCF4",
                border: "1px solid rgba(10,10,10,0.08)",
                boxShadow: "0 8px 24px rgba(10,30,20,0.06)",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Locked overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backdropFilter: "blur(3px)",
                  WebkitBackdropFilter: "blur(3px)",
                  background: "rgba(255,252,244,0.65)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 18,
                  zIndex: 2,
                }}>
                  <div style={{
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                  }}>
                    <span style={{
                      width: 36, height: 36, borderRadius: 999,
                      background: "#0A0A0A",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <rect x="3" y="7" width="10" height="8" rx="2" stroke="#FFFCF4" strokeWidth="1.5" />
                        <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="#FFFCF4" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#0A0A0A", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Students only
                    </span>
                  </div>
                </div>

                {/* Card content (behind blur) */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "4px 10px", borderRadius: 999,
                  background: r.tint,
                  marginBottom: 12,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: r.accent, display: "inline-block" }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: r.accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {r.topic}
                  </span>
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A9A9A", marginBottom: 6 }}>
                  {r.kind}
                </div>
                <div style={{ fontWeight: 600, fontSize: 16, letterSpacing: "-0.01em", color: "#0A0A0A", lineHeight: 1.3 }}>
                  {r.title}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <a href="#enquire" style={{
              display: "inline-block",
              padding: "14px 28px",
              borderRadius: 999,
              background: "#0A0A0A",
              color: "#FFFCF4",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}>
              Book a trial to unlock resources →
            </a>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .resources-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .resources-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
