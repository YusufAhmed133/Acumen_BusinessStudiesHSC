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
      "Section III Operations essay appeared in 2022, 2023, and 2024 — it is your most likely 20-mark question.",
      "Performance objectives: examiners expect at least two integrated objectives, not a single-objective list.",
      "Lean production distinguishes itself from traditional production through waste reduction across all inputs — know the difference precisely.",
      "Offshoring vs outsourcing: a common Section II trap; students who confuse them lose marks across 4–8 mark responses.",
    ],
  },
  {
    key: "marketing",
    label: "Marketing",
    tint: "#FBE6BD",
    accent: "#A66E12",
    ink: "#5A3F0A",
    detail: [
      "Section II allocates 8–10 marks to marketing most years — often the single highest-mark question on the paper.",
      "Marketing mix: product, price, promotion, place. For services marketing, extend with people, process, and physical evidence.",
      "Price strategies (skimming vs penetration) appeared as a Section I MCQ in both 2023 and 2024 — know the definitions cold.",
      "Ethical marketing and e-marketing are near-guaranteed Section II targets, commonly worth 4–6 marks.",
    ],
  },
  {
    key: "finance",
    label: "Finance",
    tint: "#CFDFF4",
    accent: "#2A4F94",
    ink: "#0F2E5C",
    detail: [
      "Ratio analysis is tested across Sections I, II, and III — it is the most reliably examined Finance skill.",
      "GPM, NPM, ROE, current ratio, gearing: know each formula and what a deteriorating trend signals for the business.",
      "Working capital calculation is straightforward; Band 6 responses explain when to act and which strategy fits the situation.",
      "Global finance: exchange rate impact on imports and exports, and hedging strategies for Section III essays.",
    ],
  },
  {
    key: "hr",
    label: "Human Resources",
    tint: "#F4CFCF",
    accent: "#923333",
    ink: "#5C1818",
    detail: [
      "Section III was an HR case study in 2024 — the 20-mark response where most students leave marks on the table.",
      "Full employment cycle: acquisition through separation, with specific strategies at each stage.",
      "Employment relations: modern awards, enterprise agreements, and individual contracts — know them side-by-side.",
      "Effectiveness measures (benchmarking and KPIs) must appear in every extended HR response to reach Band 5–6.",
    ],
  },
] as const;

export function Topics() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section
      id="syllabus"
      style={{
        background: [
          "radial-gradient(ellipse at 90% 10%, rgba(207,234,217,0.4) 0%, transparent 50%)",
          "radial-gradient(ellipse at 10% 90%, rgba(251,230,189,0.3) 0%, transparent 50%)",
          "#F8F7F4",
        ].join(", "),
        padding: "100px 0 110px",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
        <Reveal>
          <div style={{ marginBottom: 14 }}>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "#1F6B40", marginBottom: 18,
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
              fontSize: 17, color: "#3A3A3A", maxWidth: 600,
              margin: "16px 0 0", lineHeight: 1.5,
            }}>
              Click any topic to see the exam patterns that separate Band 5 from Band 6.
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
                <div
                  style={{
                    width: "100%",
                    background: t.tint,
                    borderRadius: 22,
                    overflow: "hidden",
                    boxShadow: isOpen
                      ? "0 30px 60px rgba(10,30,20,0.14), inset 0 1px 0 rgba(255,255,255,0.5)"
                      : "0 12px 28px rgba(10,30,20,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
                    transform: isOpen ? "translateY(-6px)" : "translateY(0)",
                    transition: "all 460ms cubic-bezier(.2,.7,.2,1)",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : t.key)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      cursor: "pointer",
                      border: "none",
                      background: "transparent",
                      padding: "24px 22px 22px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
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
                    </div>

                    <div style={{
                      fontSize: 12.5, fontWeight: 600, color: t.ink,
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                    }}>
                      <span>{isOpen ? "Close" : "Exam breakdown"}</span>
                      <span style={{
                        display: "inline-block",
                        transition: "transform 360ms cubic-bezier(.2,.7,.2,1)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        fontSize: 18,
                      }}>+</span>
                    </div>
                  </button>

                  {/* Expanded content — outside the button */}
                  <div style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? 400 : 0,
                    transition: "max-height 460ms cubic-bezier(.2,.7,.2,1)",
                  }}>
                    <div style={{ padding: "0 22px 22px" }}>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                        {t.detail.map((p) => (
                          <li key={p} style={{
                            display: "flex", gap: 10, alignItems: "flex-start",
                            fontSize: 13.5, lineHeight: 1.45, color: t.ink,
                          }}>
                            <span style={{
                              width: 5, height: 5, marginTop: 7, borderRadius: 999,
                              background: t.accent, flexShrink: 0, display: "inline-block",
                            }} />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#practice"
                        style={{
                          display: "inline-block",
                          marginTop: 18,
                          padding: "10px 16px",
                          borderRadius: 999,
                          background: t.accent,
                          color: "#FFFCF4",
                          textDecoration: "none",
                          fontSize: 13,
                          fontWeight: 600,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Practice {t.label} questions →
                      </a>
                    </div>
                  </div>
                </div>
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
