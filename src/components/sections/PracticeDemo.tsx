"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { QUIZ_TOTAL } from "@/lib/quiz-teaser";

const DEMO_QS = [
  {
    topic: "Marketing", tint: "#FDE9B0", accent: "#9A6300", src: "2022 HSC, Section I",
    stem: "What is an economic factor that could influence customer choice?",
    options: ["Perception", "Recession", "Regulation", "Subculture"],
    answer: 1,
    explain: "A recession reduces disposable income, making it an economic factor. Perception is psychological, regulation is legal, and subculture is sociocultural.",
  },
  {
    topic: "Human Resources", tint: "#FADADA", accent: "#8B2929", src: "2022 HSC, Section I",
    stem: "Which of the following is a type of voluntary separation in the workplace?",
    options: ["Dismissal", "Layoff", "Resignation", "Retrenchment"],
    answer: 2,
    explain: "Resignation is the only voluntary separation, the employee chooses to leave. Dismissal, layoff, and retrenchment are all employer-initiated.",
  },
  {
    topic: "Operations", tint: "#C9EFD3", accent: "#1B6038", src: "2022 HSC, Section I",
    stem: "A large clothing manufacturer in NSW wants to reduce input costs. Which strategy achieves this?",
    options: ["Increasing product variety", "Increasing employee training", "Implementing global sourcing", "Implementing sustainable packaging"],
    answer: 2,
    explain: "Global sourcing accesses lower-cost international inputs, directly cutting costs. The other three options all increase costs.",
  },
  {
    topic: "Finance", tint: "#CFDFF4", accent: "#2A4F94", src: "2022 HSC, Section I",
    stem: "The owner of a private investment company illegally uses client funds for personal use. Which body would take legal action?",
    options: ["Australian Taxation Office", "Australian Securities Exchange", "Australian Prudential Regulation Authority", "Australian Securities and Investments Commission"],
    answer: 3,
    explain: "ASIC enforces laws against financial fraud including misappropriation of client funds. APRA regulates banks; ASX operates the stock exchange.",
  },
];

type CursorTarget = `opt${0 | 1 | 2 | 3}` | "check" | "next" | "margin" | "none";

type Phase = {
  qIdx: number;
  picked: number | null;
  revealed: boolean;
  cursor: CursorTarget;
  clicking: boolean;
  ms: number;
};

const PHASES: Phase[] = [
  // Q1 Marketing, correct (opt1 = Recession)
  { qIdx: 0, picked: null, revealed: false, cursor: "opt1", clicking: false, ms: 1100 },
  { qIdx: 0, picked: null, revealed: false, cursor: "opt1", clicking: true,  ms: 160  },
  { qIdx: 0, picked: 1,    revealed: false, cursor: "check", clicking: false, ms: 760 },
  { qIdx: 0, picked: 1,    revealed: false, cursor: "check", clicking: true,  ms: 160 },
  { qIdx: 0, picked: 1,    revealed: true,  cursor: "next",  clicking: false, ms: 2000 },
  { qIdx: 0, picked: 1,    revealed: true,  cursor: "next",  clicking: true,  ms: 160  },
  // Q2 HR, wrong (picks opt0 = Dismissal, correct is opt2 = Resignation)
  { qIdx: 1, picked: null, revealed: false, cursor: "opt0", clicking: false, ms: 900  },
  { qIdx: 1, picked: null, revealed: false, cursor: "opt0", clicking: true,  ms: 160  },
  { qIdx: 1, picked: 0,    revealed: false, cursor: "check", clicking: false, ms: 700 },
  { qIdx: 1, picked: 0,    revealed: false, cursor: "check", clicking: true,  ms: 160 },
  { qIdx: 1, picked: 0,    revealed: true,  cursor: "margin", clicking: false, ms: 700 },
  { qIdx: 1, picked: 0,    revealed: true,  cursor: "margin", clicking: false, ms: 2400 },
  { qIdx: 1, picked: 0,    revealed: true,  cursor: "next",  clicking: false, ms: 600  },
  { qIdx: 1, picked: 0,    revealed: true,  cursor: "next",  clicking: true,  ms: 160  },
  // Q3 Operations, correct (opt2 = Global sourcing)
  { qIdx: 2, picked: null, revealed: false, cursor: "opt2", clicking: false, ms: 900  },
  { qIdx: 2, picked: null, revealed: false, cursor: "opt2", clicking: true,  ms: 160  },
  { qIdx: 2, picked: 2,    revealed: false, cursor: "check", clicking: false, ms: 700 },
  { qIdx: 2, picked: 2,    revealed: false, cursor: "check", clicking: true,  ms: 160 },
  { qIdx: 2, picked: 2,    revealed: true,  cursor: "next",  clicking: false, ms: 1800 },
  { qIdx: 2, picked: 2,    revealed: true,  cursor: "next",  clicking: true,  ms: 160  },
  // Q4 Finance, correct (opt3 = ASIC)
  { qIdx: 3, picked: null, revealed: false, cursor: "opt3", clicking: false, ms: 900  },
  { qIdx: 3, picked: null, revealed: false, cursor: "opt3", clicking: true,  ms: 160  },
  { qIdx: 3, picked: 3,    revealed: false, cursor: "check", clicking: false, ms: 700 },
  { qIdx: 3, picked: 3,    revealed: false, cursor: "check", clicking: true,  ms: 160 },
  { qIdx: 3, picked: 3,    revealed: true,  cursor: "none",  clicking: false, ms: 2600 },
];

const CursorSVG = ({ clicking }: { clicking: boolean }) => (
  <svg
    width="20" height="20" viewBox="0 0 20 20" fill="none"
    style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))", transform: clicking ? "scale(0.82)" : "scale(1)", transition: "transform 80ms ease" }}
    aria-hidden
  >
    <path d="M3 2l14 7-7 1-4 6z" fill="#111111" />
    <path d="M3 2l14 7-7 1-4 6z" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
  </svg>
);

export function PracticeDemo() {
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [cursorXY, setCursorXY] = useState<{ x: number; y: number } | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const phase = PHASES[phaseIdx] ?? PHASES[0];
  const q = DEMO_QS[phase.qIdx];

  const updateCursor = useCallback((target: CursorTarget) => {
    const screen = screenRef.current;
    if (!screen || target === "none") { setCursorXY(null); return; }
    requestAnimationFrame(() => {
      const el = screen.querySelector(`[data-demo="${target}"]`) as HTMLElement | null;
      if (!el) return;
      const sr = screen.getBoundingClientRect();
      const er = el.getBoundingClientRect();
      setCursorXY({ x: er.left - sr.left + er.width * 0.3, y: er.top - sr.top + er.height * 0.5 });
    });
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }
    updateCursor(phase.cursor);
    if (!isActive) return;
    timerRef.current = setTimeout(() => {
      setPhaseIdx((i) => (i >= PHASES.length - 1 ? 0 : i + 1));
    }, phase.ms);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [isActive, phaseIdx, phase.cursor, phase.ms, reducedMotion, updateCursor]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
        if (entry.isIntersecting) setPhaseIdx(0);
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const answered = new Map<number, boolean>();
  for (const p of PHASES.slice(0, phaseIdx + 1)) {
    if (p.revealed && p.picked !== null) {
      answered.set(p.qIdx, p.picked === DEMO_QS[p.qIdx].answer);
    }
  }
  const attempted = answered.size;
  const score = Array.from(answered.values()).filter(Boolean).length;

  return (
    <section
      id="practice"
      ref={sectionRef}
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
                Acumen practice paper, {q.src}
              </span>
            </div>

            <div ref={screenRef} className="practice-screen" style={{ background: "#FFFCF4", position: "relative", flex: 1, overflow: "hidden" }} aria-hidden="true">
              <div style={{ height: 2, background: "#F0EDE4" }}>
                <div style={{
                  height: "100%",
                  width: `${((phase.qIdx + (phase.revealed ? 1 : 0)) / DEMO_QS.length) * 100}%`,
                  background: `linear-gradient(90deg, ${q.accent}, #2A4F94)`,
                  transition: "width 600ms ease",
                }} />
              </div>

              <div style={{ padding: "14px 24px", borderBottom: "1px solid rgba(10,10,10,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ padding: "3px 10px", borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: q.tint, color: q.accent }}>
                    {q.topic}
                  </span>
                  <span style={{ fontSize: 11, color: "#5C5C5C", fontWeight: 500 }}>Multiple Choice, 1 mark</span>
                </div>
                <span style={{ fontSize: 11, color: "#9A9A9A", fontWeight: 500 }}>
                  Q{phase.qIdx + 1} / {DEMO_QS.length} &nbsp; Score {score}/{attempted}
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr" }} className="demo-cols">
                <div style={{ padding: "24px 28px 28px", borderRight: "1px solid rgba(10,10,10,0.07)" }}>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#0A0A0A", margin: "0 0 18px", fontWeight: 500 }}>
                    {q.stem}
                  </p>
                  <div style={{ display: "grid", gap: 7 }}>
                    {q.options.map((opt, i) => {
                      const letter = String.fromCharCode(65 + i);
                      const isSel = phase.picked === i;
                      const isCorrect = phase.revealed && i === q.answer;
                      const isWrong = phase.revealed && isSel && i !== q.answer;
                      return (
                        <div
                          key={i}
                          data-demo={`opt${i}` as CursorTarget}
                          style={{
                            padding: "9px 13px",
                            borderRadius: 9,
                            border: `1.5px solid ${isCorrect ? "#1F6B40" : isWrong ? "#923333" : isSel ? "#1B6038" : "rgba(10,10,10,0.12)"}`,
                            background: isCorrect ? "#CFEAD9" : isWrong ? "#F4CFCF" : isSel ? "#EAF7EE" : "#FFFCF4",
                            display: "flex", gap: 10, alignItems: "flex-start",
                            fontSize: 13, color: "#0A0A0A",
                            transition: "background 280ms ease, border-color 280ms ease",
                            cursor: "default",
                          }}
                        >
                          <span style={{ fontWeight: 700, minWidth: 20, color: "#5C5C5C", fontSize: 11, flexShrink: 0 }}>({letter})</span>
                          {opt}
                        </div>
                      );
                    })}
                  </div>
                  <div style={{ marginTop: 16 }}>
                    {!phase.revealed ? (
                      <div
                        data-demo="check"
                        style={{
                          display: "inline-flex", padding: "9px 18px", borderRadius: 8,
                          background: phase.picked !== null ? "#C9EFD3" : "#EBEBEB",
                          color: phase.picked !== null ? "#0A2E1A" : "#9A9A9A",
                          fontSize: 13, fontWeight: 600, cursor: "default",
                          transition: "background 200ms ease",
                        }}
                      >
                        Check answer
                      </div>
                    ) : (
                      <div
                        data-demo="next"
                        style={{
                          display: "inline-flex", padding: "9px 18px", borderRadius: 8,
                          background: "#C9EFD3", color: "#0A2E1A",
                          fontSize: 13, fontWeight: 600, cursor: "default",
                        }}
                      >
                        {phase.qIdx < DEMO_QS.length - 1 ? "Next question →" : "See all questions →"}
                      </div>
                    )}
                  </div>
                </div>

                <div data-demo="margin" style={{ padding: "24px 20px", background: "#F8F4E8" }}>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#5C5C5C", marginBottom: 12 }}>
                    Marker margin
                  </div>
                  {!phase.revealed ? (
                    <p style={{ fontSize: 13, lineHeight: 1.6, color: "#9A9A9A", margin: 0 }}>
                      Pick an option and check your answer.
                    </p>
                  ) : (
                    <div>
                      <div style={{
                        fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 10,
                        color: phase.picked === q.answer ? "#1B6038" : "#923333",
                      }}>
                        {phase.picked === q.answer ? "Correct." : "Not quite."}
                      </div>
                      <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "#1A1A1A", margin: "0 0 12px" }}>
                        {q.explain}
                      </p>
                      {phase.picked !== q.answer && (
                        <p style={{ margin: 0, fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: "#5C5C5C" }}>
                          Answer: ({String.fromCharCode(65 + q.answer)}) {q.options[q.answer]}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {cursorXY && !reducedMotion && (
                <div
                  style={{
                    position: "absolute",
                    left: cursorXY.x,
                    top: cursorXY.y,
                    pointerEvents: "none",
                    zIndex: 10,
                    transform: "translate(-4px, -4px)",
                    transition: "left 480ms cubic-bezier(.25,.1,.25,1), top 480ms cubic-bezier(.25,.1,.25,1)",
                  }}
                >
                  <CursorSVG clicking={phase.clicking} />
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <Link
              href="/practice"
              prefetch={false}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 26px", borderRadius: 8,
                background: "#C9EFD3", color: "#0A2E1A",
                textDecoration: "none", fontSize: 15, fontWeight: 700,
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
