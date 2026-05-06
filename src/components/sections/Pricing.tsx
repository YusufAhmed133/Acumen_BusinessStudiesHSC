"use client";
import { Reveal } from "@/components/ui/Reveal";

const INCLUSIONS = [
  {
    t: "1.5-hour weekly lesson",
    d: "Small group, capped at 6. Live syllabus walkthrough plus timed practice every session.",
  },
  {
    t: "Marked essay every week",
    d: "Write one extended response per week. Returned within 48 hours, marked against NESA criteria.",
  },
  {
    t: "24-hour question line",
    d: "Send a question any time. A tutor responds within 24 hours, every day of the week.",
  },
  {
    t: "Band 6 notes",
    d: "Topic notes written by a 99.95 ATAR Business Studies graduate. Written for the current NESA syllabus.",
  },
  {
    t: "Past-paper bank",
    d: "Every Section I, II, III and IV question from 2010 onward, indexed by syllabus dot point.",
  },
  {
    t: "Mock exam + report",
    d: "Full timed mock before each major school exam, marked and returned with a personalised improvement plan.",
  },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <circle cx="8" cy="8" r="8" fill="#C9EFD3" />
    <path
      d="M4.5 8l2.5 2.5 4.5-4.5"
      stroke="#1B6038"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Pricing() {
  return (
    <section
      id="pricing"
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
              margin: "0 0 48px",
              color: "#111111",
            }}
          >
            Pricing
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "400px 1fr",
            gap: 48,
            alignItems: "start",
          }}
          className="pricing-grid"
        >
          {/* Price card */}
          <Reveal>
            <div
              style={{
                borderRadius: 24,
                border: "1.5px solid rgba(0,0,0,0.1)",
                overflow: "hidden",
                background: "#ffffff",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                position: "sticky",
                top: 88,
              }}
            >
              {/* Per lesson */}
              <div
                style={{
                  padding: "32px 32px 28px",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#6B6B6B",
                    marginBottom: 16,
                  }}
                >
                  Per lesson
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "clamp(72px, 8vw, 100px)",
                      lineHeight: 0.9,
                      letterSpacing: "-0.05em",
                      color: "#111111",
                    }}
                  >
                    $110
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: "#6B6B6B",
                    }}
                  >
                    / 1.5 hrs
                  </span>
                </div>
                <div
                  style={{
                    marginTop: 10,
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#6B6B6B",
                  }}
                >
                  No lock-in. Book and cancel anytime.
                </div>
              </div>

              {/* Per term — best value */}
              <div
                style={{
                  padding: "28px 32px",
                  background: "#F9F9F7",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#6B6B6B",
                    }}
                  >
                    Per term · 10 weeks
                  </div>
                  <div
                    style={{
                      padding: "5px 11px",
                      borderRadius: 999,
                      background: "#C9EFD3",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#1B6038",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Save $150
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "clamp(72px, 8vw, 100px)",
                      lineHeight: 0.9,
                      letterSpacing: "-0.05em",
                      color: "#111111",
                    }}
                  >
                    $950
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: "#6B6B6B",
                    }}
                  >
                    / term
                  </span>
                </div>
                <div
                  style={{
                    marginTop: 10,
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#1A1A1A",
                  }}
                >
                  Most students choose this.
                </div>
              </div>

              {/* CTA */}
              <div style={{ padding: "24px 32px" }}>
                <a
                  href="/#enquire"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "15px 20px",
                    borderRadius: 12,
                    background: "#C9EFD3",
                    color: "#0A2E1A",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Book a free trial lesson →
                </a>
                <div
                  style={{
                    marginTop: 12,
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#6B6B6B",
                    textAlign: "center",
                  }}
                >
                  No card required. First lesson is free.
                </div>
              </div>
            </div>
          </Reveal>

          {/* Inclusions */}
          <Reveal delay={120}>
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#6B6B6B",
                  marginBottom: 20,
                }}
              >
                Everything included
              </div>
              <div style={{ display: "grid", gap: 0 }}>
                {INCLUSIONS.map((v, i) => (
                  <div
                    key={v.t}
                    style={{
                      display: "flex",
                      gap: 16,
                      padding: "20px 0",
                      borderBottom:
                        i < INCLUSIONS.length - 1
                          ? "1px solid rgba(0,0,0,0.07)"
                          : "none",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ marginTop: 2, flexShrink: 0 }}>
                      <CheckIcon />
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: 16,
                          letterSpacing: "-0.015em",
                          color: "#111111",
                          marginBottom: 4,
                        }}
                      >
                        {v.t}
                      </div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: 13.5,
                          lineHeight: 1.55,
                          color: "#3A3A3A",
                        }}
                      >
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
