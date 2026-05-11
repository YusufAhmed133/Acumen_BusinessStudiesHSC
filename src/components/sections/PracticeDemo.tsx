import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { QUIZ_TOTAL } from "@/lib/quiz-teaser";

const DEMO_Q = {
  topic: "Marketing",
  tint: "#FDE9B0",
  accent: "#8A5200",
  src: "2022 HSC, Section I",
  stem: "What is an economic factor that could influence customer choice?",
  options: ["Perception", "Recession", "Regulation", "Subculture"],
  answer: 1,
  explain:
    "A recession reduces disposable income, making it an economic factor. Perception is psychological, regulation is legal, and subculture is sociocultural.",
};

export function PracticeDemo() {
  return (
    <section
      id="practice"
      style={{
        background: "#0D0D0D",
        padding: "80px 0 96px",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px", position: "relative" }}>
        <Reveal>
          <h2 style={{ fontWeight: 700, fontSize: "clamp(32px, 3.8vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.04em", margin: "0 0 48px", color: "#ffffff" }}>
            Practice
          </h2>
        </Reveal>

        <Reveal>
          <div
            className="practice-video"
            style={{
              aspectRatio: "16 / 9",
              maxWidth: 980,
              margin: "0 auto",
              background: "#161616",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 8,
              padding: 8,
              boxShadow: "0 44px 100px rgba(0,0,0,0.55), 0 16px 40px rgba(0,0,0,0.45)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ height: 30, background: "#242426", borderRadius: "4px 4px 0 0", display: "flex", alignItems: "center", padding: "0 14px" }}>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontWeight: 500, letterSpacing: "0.04em" }}>
                Acumen practice paper, {DEMO_Q.src}
              </span>
            </div>

            <div className="practice-screen" style={{ background: "#FFFCF4", position: "relative", flex: 1, overflow: "hidden" }} aria-hidden="true">
              <div style={{ height: 2, background: "#F0EDE4" }}>
                <div
                  style={{
                    height: "100%",
                    width: "25%",
                    background: `linear-gradient(90deg, ${DEMO_Q.accent}, #2A4F94)`,
                  }}
                />
              </div>

              <div style={{ padding: "14px 24px", borderBottom: "1px solid rgba(10,10,10,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ padding: "3px 10px", borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: DEMO_Q.tint, color: DEMO_Q.accent }}>
                    {DEMO_Q.topic}
                  </span>
                  <span style={{ fontSize: 11, color: "#5C5C5C", fontWeight: 500 }}>Multiple Choice, 1 mark</span>
                </div>
                <span style={{ fontSize: 11, color: "#9A9A9A", fontWeight: 500 }}>
                  Q1 / 4 &nbsp; Score 1/1
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr" }} className="demo-cols">
                <div style={{ padding: "24px 28px 28px", borderRight: "1px solid rgba(10,10,10,0.07)" }}>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#0A0A0A", margin: "0 0 18px", fontWeight: 500 }}>
                    {DEMO_Q.stem}
                  </p>
                  <div style={{ display: "grid", gap: 7 }}>
                    {DEMO_Q.options.map((opt, i) => {
                      const letter = String.fromCharCode(65 + i);
                      const isCorrect = i === DEMO_Q.answer;
                      return (
                        <div
                          key={opt}
                          style={{
                            padding: "9px 13px",
                            borderRadius: 9,
                            border: `1.5px solid ${isCorrect ? "#1F6B40" : "rgba(10,10,10,0.12)"}`,
                            background: isCorrect ? "#CFEAD9" : "#FFFCF4",
                            display: "flex",
                            gap: 10,
                            alignItems: "flex-start",
                            fontSize: 13,
                            color: "#0A0A0A",
                          }}
                        >
                          <span style={{ fontWeight: 700, minWidth: 20, color: "#5C5C5C", fontSize: 11, flexShrink: 0 }}>({letter})</span>
                          {opt}
                        </div>
                      );
                    })}
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <div
                      style={{
                        display: "inline-flex",
                        padding: "9px 18px",
                        borderRadius: 8,
                        background: "#C9EFD3",
                        color: "#0A2E1A",
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      Check answer
                    </div>
                  </div>
                </div>

                <div style={{ padding: "24px 20px", background: "#F8F4E8" }}>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#5C5C5C", marginBottom: 12 }}>
                    Marker margin
                  </div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 10, color: "#1B6038" }}>
                      Correct.
                    </div>
                    <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "#1A1A1A", margin: "0 0 12px" }}>
                      {DEMO_Q.explain}
                    </p>
                    <p style={{ margin: 0, fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: "#5C5C5C" }}>
                      Answer: (B) Recession
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <Link
              href="/practice"
              prefetch={false}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 26px",
                borderRadius: 8,
                background: "#C9EFD3",
                color: "#0A2E1A",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                boxShadow: "0 4px 20px rgba(201,239,211,0.3)",
              }}
            >
              See all {QUIZ_TOTAL} questions →
            </Link>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .practice-video {
            aspect-ratio: auto !important;
            min-height: 620px !important;
          }
          .demo-cols { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .practice-video {
            min-height: 700px !important;
          }
          .practice-screen > div:nth-child(2) {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
