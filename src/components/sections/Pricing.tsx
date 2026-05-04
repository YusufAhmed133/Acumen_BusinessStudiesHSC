"use client";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const INCLUSIONS = [
  { t: "1.5-hour weekly lesson", d: "Small group, capped at 6. Live syllabus walkthrough plus timed practice every session." },
  { t: "Marked essay every week", d: "You write one extended response per week. A tutor returns it within 48 hours, marked against NESA criteria." },
  { t: "24-hour question line", d: "Stuck at 11pm? Send a question. A tutor responds within 24 hours, every day of the week." },
  { t: "Band 6 notes", d: "Topic notes written by 99.95+ Business Studies graduates. Updated each year for syllabus changes." },
  { t: "Past-paper bank", d: "Every Section I, II, III and IV question from 2010 onward, indexed by syllabus dot point." },
  { t: "Mock exam + report", d: "Full timed mock before each major school exam, marked and returned with a personalised improvement plan." },
  { t: "Lesson recordings", d: "Full recordings of every session available within 24 hours for revision on demand." },
];

export function Pricing() {
  const [mode, setMode] = useState<"casual" | "term">("term");

  return (
    <section id="pricing" style={{ background: "#CFDFF4", padding: "100px 0 110px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
        <Reveal>
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#2A4F94", marginBottom: 18 }}>
              Pricing
            </div>
            <h2 style={{
              fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 62px)",
              lineHeight: 1.02, letterSpacing: "-0.04em",
              margin: 0, color: "#0A0A0A", maxWidth: 860,
            }}>
              One price. Everything included.
            </h2>
            <p style={{ fontSize: 17, color: "#1A1A1A", maxWidth: 580, margin: "16px 0 0", lineHeight: 1.5 }}>
              Pay per lesson or lock in a full term. First trial lesson is free — no card required.
            </p>
          </div>
        </Reveal>

        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "minmax(300px, 1fr) 1.6fr", gap: 36, alignItems: "start" }} className="pricing-grid">
          <Reveal>
            <div style={{
              borderRadius: 28, padding: "40px 36px",
              background: "#FFFCF4",
              boxShadow: "0 30px 70px rgba(20,40,80,0.14)",
              border: "1px solid rgba(10,10,10,0.06)",
              position: "sticky",
              top: 90,
            }}>
              {/* Toggle */}
              <div style={{
                display: "inline-flex",
                border: "1px solid rgba(10,10,10,0.14)",
                borderRadius: 999,
                padding: 4,
                gap: 4,
                marginBottom: 28,
                background: "#F4F0E8",
              }}>
                {(["casual", "term"] as const).map((m) => (
                  <button key={m} onClick={() => setMode(m)} style={{
                    padding: "8px 16px",
                    borderRadius: 999,
                    border: "none",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    background: mode === m ? "#0A0A0A" : "transparent",
                    color: mode === m ? "#FFFCF4" : "#5C5C5C",
                    transition: "all 220ms ease",
                  }}>
                    {m === "casual" ? "Per lesson" : "Per term"}
                  </button>
                ))}
              </div>

              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#2A4F94" }}>
                Year 11 · Year 12
              </div>

              <div style={{
                fontWeight: 600,
                fontSize: "clamp(90px, 11vw, 160px)",
                lineHeight: 0.9,
                letterSpacing: "-0.06em",
                color: "#0A0A0A",
                marginTop: 10,
              }}>
                {mode === "casual" ? "$110" : "$950"}
              </div>

              <div style={{ fontSize: 15, fontWeight: 500, color: "#1A1A1A", marginTop: 6 }}>
                {mode === "casual" ? "per 1.5-hour lesson" : "per 10-week term"}
              </div>

              {mode === "term" && (
                <div style={{
                  marginTop: 14,
                  padding: "10px 14px",
                  display: "inline-block",
                  background: "#CFEAD9",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#1F6B40",
                }}>
                  Save $150 vs casual rate
                </div>
              )}

              {mode === "casual" && (
                <div style={{
                  marginTop: 14,
                  padding: "10px 14px",
                  display: "inline-block",
                  background: "#F4F0E8",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#5C5C5C",
                }}>
                  No lock-in · book and cancel anytime
                </div>
              )}

              <a href="#enquire" style={{
                display: "block",
                textAlign: "center",
                padding: "15px 18px",
                marginTop: 24,
                borderRadius: 999,
                background: "#0A0A0A",
                color: "#FFFCF4",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}>
                Book free trial lesson →
              </a>

              <div style={{ marginTop: 14, fontSize: 12, fontWeight: 500, color: "#5C5C5C", textAlign: "center" }}>
                Same price online or in-person.
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1A1A1A", marginBottom: 18 }}>
                What&apos;s included
              </div>
              <div style={{ display: "grid", gap: 0 }}>
                {INCLUSIONS.map((v, i) => (
                  <div key={v.t} style={{
                    display: "flex",
                    gap: 16,
                    padding: "18px 0",
                    borderBottom: i < INCLUSIONS.length - 1 ? "1px solid rgba(10,10,10,0.1)" : "none",
                    alignItems: "flex-start",
                  }}>
                    {/* Checkmark */}
                    <span style={{
                      width: 22, height: 22, borderRadius: 999,
                      background: "#CFEAD9",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 1,
                    }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#1F6B40" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 16, letterSpacing: "-0.015em", color: "#0A0A0A" }}>
                        {v.t}
                      </div>
                      <p style={{ margin: "4px 0 0", fontSize: 13.5, lineHeight: 1.55, color: "#3A3A3A" }}>
                        {v.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
