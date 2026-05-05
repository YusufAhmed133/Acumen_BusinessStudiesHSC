"use client";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const TOPICS = [
  {
    key: "operations",
    label: "Operations",
    tint: "#CFEAD9",
    accent: "#1F6B40",
    ink: "#0E3A1C",
    detail: [
      "Role, influences, operations strategies",
      "Performance objectives + supply chain management",
      "Quality management, lean production, global operations",
      "Highest essay frequency in Section III",
    ],
  },
  {
    key: "marketing",
    label: "Marketing",
    tint: "#FBE6BD",
    accent: "#A66E12",
    ink: "#5A3F0A",
    detail: [
      "Marketing process, influences, approaches",
      "Marketing strategies: the 7 Ps in full",
      "Consumer behaviour, e-marketing, ethics",
      "Heavy in Section II 8-mark responses",
    ],
  },
  {
    key: "finance",
    label: "Finance",
    tint: "#CFDFF4",
    accent: "#2A4F94",
    ink: "#0F2E5C",
    detail: [
      "Role, influences, financial processes",
      "Financial statements + ratio analysis",
      "Working capital management + global finance",
      "Most calculation-heavy topic",
    ],
  },
  {
    key: "hr",
    label: "Human Resources",
    tint: "#F4CFCF",
    accent: "#923333",
    ink: "#5C1818",
    detail: [
      "Role, influences, processes",
      "Acquisition, development, maintenance + separation",
      "Employment relations + effectiveness measures",
      "Case-study favourite in Section III and IV",
    ],
  },
] as const;

export function Topics() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="syllabus" style={{ background: "radial-gradient(ellipse at 90% 10%, rgba(207,234,217,0.45) 0%, transparent 50%), radial-gradient(ellipse at 10% 90%, rgba(251,230,189,0.35) 0%, transparent 50%), #FFFCF4", padding: "100px 0 110px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
        <Reveal>
          <div style={{ marginBottom: 14 }}>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "#5C5C5C", marginBottom: 18,
            }}>
              The syllabus
            </div>
            <h2 style={{
              fontWeight: 600,
              fontSize: "clamp(34px, 4.2vw, 62px)",
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              margin: 0,
              color: "#0A0A0A",
              maxWidth: 860,
            }}>
              Four topics. Equal weighting. Every dot point covered.
            </h2>
            <p style={{
              fontSize: 17, color: "#1A1A1A", maxWidth: 600,
              margin: "16px 0 0", lineHeight: 1.5,
            }}>
              Click any topic to see exactly how we teach it and where marks come from.
            </p>
          </div>
        </Reveal>

        <div style={{
          marginTop: 48,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
        }} className="topics-grid">
          {TOPICS.map((t, i) => {
            const isOpen = open === t.key;
            return (
              <Reveal key={t.key} delay={i * 80}>
                <button
                  onClick={() => setOpen(isOpen ? null : t.key)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                    border: "none",
                    background: t.tint,
                    borderRadius: 22,
                    padding: "24px 22px 22px",
                    minHeight: isOpen ? 360 : 240,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 14,
                    boxShadow: isOpen
                      ? "0 30px 60px rgba(10,30,20,0.14), inset 0 1px 0 rgba(255,255,255,0.5)"
                      : "0 12px 28px rgba(10,30,20,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
                    transform: isOpen ? "translateY(-6px)" : "translateY(0)",
                    transition: "all 460ms cubic-bezier(.2,.7,.2,1)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{
                      fontSize: 11, fontWeight: 600,
                      letterSpacing: "0.18em", textTransform: "uppercase",
                      color: t.ink, opacity: 0.7,
                    }}>
                      0{i + 1}
                    </div>
                    <div style={{
                      width: 30, height: 30, borderRadius: 8,
                      background: t.accent,
                      boxShadow: `0 8px 16px ${t.accent}55, inset 0 -3px 0 rgba(0,0,0,0.18)`,
                    }} />
                  </div>

                  <div>
                    <div style={{
                      fontWeight: 600,
                      fontSize: "clamp(64px, 5vw, 90px)",
                      lineHeight: 0.85,
                      letterSpacing: "-0.05em",
                      color: t.ink,
                      marginBottom: 8,
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div style={{
                      fontWeight: 600, fontSize: 22,
                      letterSpacing: "-0.02em", color: t.ink,
                    }}>
                      {t.label}
                    </div>

                    <div style={{
                      overflow: "hidden",
                      maxHeight: isOpen ? 240 : 0,
                      transition: "max-height 460ms cubic-bezier(.2,.7,.2,1)",
                      marginTop: 12,
                    }}>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 7 }}>
                        {t.detail.map((p) => (
                          <li key={p} style={{
                            display: "flex", gap: 8, alignItems: "flex-start",
                            fontSize: 13.5, lineHeight: 1.4, color: t.ink, opacity: 0.92,
                          }}>
                            <span style={{
                              width: 5, height: 5, marginTop: 7, borderRadius: 999,
                              background: t.accent, flexShrink: 0, display: "inline-block",
                            }} />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{
                    fontSize: 12.5, fontWeight: 600, color: t.ink,
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <span>{isOpen ? "Hide" : "See dot points"}</span>
                    <span style={{
                      display: "inline-block",
                      transition: "transform 360ms cubic-bezier(.2,.7,.2,1)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      fontSize: 18,
                    }}>+</span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .topics-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .topics-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
