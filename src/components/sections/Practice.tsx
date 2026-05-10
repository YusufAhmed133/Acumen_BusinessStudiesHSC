"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { QUIZ_TEASER, QUIZ_TOTAL, TOPICS_MAP, type McqQuestion, type ShortQuestion } from "@/lib/quiz-teaser";

const TEASER = QUIZ_TEASER;

export function Practice() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [response, setResponse] = useState("");
  const [checked, setChecked] = useState<number[]>([]);
  const [score, setScore] = useState({ c: 0, a: 0 });
  const [linkReady, setLinkReady] = useState(false);
  const paperRef = useRef<HTMLDivElement>(null);
  const linkTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const q = TEASER[idx];
  const topic = TOPICS_MAP[q.topic];
  const isLast = idx === TEASER.length - 1;

  const reset = () => {
    setPicked(null); setRevealed(false); setResponse(""); setChecked([]); setLinkReady(false);
    if (linkTimerRef.current) clearTimeout(linkTimerRef.current);
  };
  const next = () => { if (idx < TEASER.length - 1) { setIdx(idx + 1); reset(); } };
  const prev = () => { if (idx > 0) { setIdx(idx - 1); reset(); } };
  const submit = () => {
    if (q.type === "mcq" && picked != null)
      setScore((s) => ({ c: s.c + (picked === (q as McqQuestion).answer ? 1 : 0), a: s.a + 1 }));
    setRevealed(true);
    if (isLast) {
      linkTimerRef.current = setTimeout(() => setLinkReady(true), 500);
    }
  };

  const pill: React.CSSProperties = {
    fontWeight: 600, fontSize: 13, letterSpacing: "-0.01em",
    padding: "11px 18px", borderRadius: 999,
    background: "#0A0A0A", color: "#FFFCF4",
    border: "1px solid #0A0A0A", cursor: "pointer",
  };
  const pillGhost: React.CSSProperties = {
    ...pill, background: "transparent", color: "#0A0A0A",
  };

  return (
    <section id="practice" style={{ background: "radial-gradient(ellipse at 15% 30%, rgba(31,107,64,0.16) 0%, transparent 50%), radial-gradient(ellipse at 85% 70%, rgba(251,230,189,0.10) 0%, transparent 50%), #0D0D0D", padding: "80px 0 96px", position: "relative", overflow: "hidden" }}>
      {/* Faint pastel orbs */}
      <div style={{
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(207,234,217,0.14) 0%, transparent 60%)",
        top: -200, right: -200, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(251,230,189,0.10) 0%, transparent 60%)",
        bottom: -150, left: -150, pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px", position: "relative" }}>
        <Reveal>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(32px, 3.8vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              margin: "0 0 48px",
              color: "#ffffff",
            }}
          >
            Practice
          </h2>
        </Reveal>
        <Reveal>
          <div ref={paperRef} style={{
            marginTop: 0, background: "#FFFCF4", borderRadius: 14, overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 12px 32px rgba(0,0,0,0.3)",
          }}>
            {/* Paper header */}
            <div style={{
              padding: "20px 30px", borderBottom: "1px solid rgba(10,10,10,0.1)",
              background: "#FFFCF4", display: "flex", alignItems: "center",
              justifyContent: "space-between", gap: 12, flexWrap: "wrap",
            }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#5C5C5C" }}>
                  Acumen practice paper, {q.src}
                </div>
                <div style={{ fontWeight: 600, fontSize: 22, letterSpacing: "-0.025em", marginTop: 4, color: "#0A0A0A" }}>
                  HSC Business Studies
                </div>
              </div>
              <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap", fontSize: 13, fontWeight: 500, color: "#1A1A1A" }}>
                <span>Q {idx + 1} / {TEASER.length}</span>
                <span>Score {score.c}/{score.a}</span>
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ height: 3, background: "#F0F0F0" }}>
              <div style={{
                height: "100%",
                width: `${((idx + (revealed ? 1 : 0)) / TEASER.length) * 100}%`,
                background: `linear-gradient(90deg, ${TOPICS_MAP.operations.accent}, ${TOPICS_MAP.finance.accent})`,
                transition: "width 600ms cubic-bezier(.2,.7,.2,1)",
              }} />
            </div>

            {/* Body, paper + margin */}
            <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr" }} className="paper-cols">
              {/* Question */}
              <div style={{
                padding: "40px 40px 36px",
                borderRight: "1px solid rgba(10,10,10,0.08)",
                background: `repeating-linear-gradient(180deg, transparent 0, transparent 31px, rgba(10,10,10,0.035) 31px, rgba(10,10,10,0.035) 32px)`,
              }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 10, marginBottom: 24,
                  fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1A1A1A",
                }}>
                  <span style={{
                    width: 11, height: 11, borderRadius: 3, background: topic.accent,
                    boxShadow: `0 4px 8px ${topic.accent}55`, display: "inline-block",
                  }} />
                  Section {q.type === "mcq" ? "I" : q.type === "short" ? "II" : "III"}, {topic.label}
                  <span style={{ flex: 1, height: 1, background: "rgba(10,10,10,0.08)" }} />
                  <span style={{ color: "#5C5C5C" }}>({q.marks} mark{q.marks > 1 ? "s" : ""})</span>
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ fontWeight: 600, fontSize: 24, color: "#0A0A0A", minWidth: 36 }}>{idx + 1}.</div>
                  <div style={{ fontSize: 17.5, lineHeight: 1.55, color: "#0A0A0A", flex: 1 }}>{q.stem}</div>
                </div>

                {q.type === "mcq" && (
                  <div style={{ marginTop: 24, display: "grid", gap: 10, paddingLeft: 52 }}>
                    {(q as McqQuestion).options.map((o, i) => {
                      const correct = revealed && i === (q as McqQuestion).answer;
                      const wrong = revealed && picked === i && i !== (q as McqQuestion).answer;
                      const sel = picked === i;
                      return (
                        <button key={i} disabled={revealed} onClick={() => setPicked(i)} style={{
                          textAlign: "left", cursor: revealed ? "default" : "pointer",
                          padding: "13px 16px", borderRadius: 11,
                          border: `1.5px solid ${correct ? TOPICS_MAP.operations.accent : wrong ? TOPICS_MAP.human_resources.accent : sel ? "#0A0A0A" : "rgba(10,10,10,0.14)"}`,
                          background: correct ? TOPICS_MAP.operations.tint : wrong ? TOPICS_MAP.human_resources.tint : sel ? "#F4F4F0" : "#FFFCF4",
                          display: "flex", gap: 14, alignItems: "flex-start",
                          fontSize: 14.5, color: "#0A0A0A", transition: "all 220ms ease",
                        }}>
                          <span style={{ fontWeight: 600, fontSize: 13, minWidth: 20 }}>({String.fromCharCode(65 + i)})</span>
                          <span>{o}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {(q.type === "short" || q.type === "extended") && (
                  <div style={{ marginTop: 22, paddingLeft: 52 }}>
                    <textarea
                      value={response}
                      onChange={(e) => setResponse(e.target.value)}
                      placeholder="Write your response here. Self-mark against the criteria on the right."
                      style={{
                        width: "100%", minHeight: q.type === "extended" ? 260 : 160,
                        padding: "14px 16px", borderRadius: 11,
                        border: "1.5px solid rgba(10,10,10,0.14)",
                        fontSize: 14.5, lineHeight: 1.6,
                        resize: "vertical", outline: "none",
                        background: "#FFFCF4", color: "#0A0A0A", boxSizing: "border-box",
                      }}
                    />
                    <div style={{
                      marginTop: 8, fontSize: 11, fontWeight: 600,
                      letterSpacing: "0.16em", textTransform: "uppercase", color: "#5C5C5C",
                      display: "flex", justifyContent: "space-between",
                    }}>
                      <span>{response.trim().split(/\s+/).filter(Boolean).length} words</span>
                      <span>Suggested {q.type === "extended" ? "500–700" : "80–140"}</span>
                    </div>
                  </div>
                )}

                <div style={{ marginTop: 32, display: "flex", gap: 10, paddingLeft: 52 }}>
                  <button onClick={prev} disabled={idx === 0} style={{ ...pillGhost, opacity: idx === 0 ? 0.4 : 1 }}>
                    ← Prev
                  </button>
                  {!revealed ? (
                    <button
                      onClick={submit}
                      disabled={q.type === "mcq" && picked == null}
                      style={{ ...pill, opacity: q.type === "mcq" && picked == null ? 0.4 : 1 }}
                    >
                      {q.type === "mcq" ? "Reveal answer" : "Show marking"}
                    </button>
                  ) : isLast ? (
                    <Link href="/practice" style={{
                      ...pill,
                      background: "#C9EFD3", color: "#0A2E1A",
                      border: "1px solid #C9EFD3", textDecoration: "none",
                      pointerEvents: linkReady ? "auto" : "none",
                      opacity: linkReady ? 1 : 0.55,
                      transition: "opacity 300ms ease",
                    }}>
                      See all {QUIZ_TOTAL} questions →
                    </Link>
                  ) : (
                    <button onClick={next} style={pill}>
                      Next question →
                    </button>
                  )}
                </div>
              </div>

              {/* Marker margin */}
              <div style={{ padding: "40px 32px", background: "#F8F4E8" }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#5C5C5C", marginBottom: 14 }}>
                  Marker margin
                </div>
                {q.type === "mcq" ? (
                  revealed ? (
                    <div>
                      <div style={{
                        fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 10,
                        color: picked === (q as McqQuestion).answer ? TOPICS_MAP.operations.accent : TOPICS_MAP.human_resources.accent,
                      }}>
                        {picked === (q as McqQuestion).answer ? "Correct." : "Not quite."}
                      </div>
                      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#1A1A1A", margin: 0 }}>
                        {(q as McqQuestion).explain}
                      </p>
                      <p style={{ marginTop: 14, fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", color: "#5C5C5C" }}>
                        Answer: ({String.fromCharCode(65 + (q as McqQuestion).answer)}) {(q as McqQuestion).options[(q as McqQuestion).answer]}
                      </p>
                    </div>
                  ) : (
                    <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#5C5C5C", margin: 0 }}>
                      Pick an option and reveal the answer.
                    </p>
                  )
                ) : (
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A3A3A", marginBottom: 12 }}>
                      Marking criteria, {q.marks} marks
                    </div>
                    <div style={{ display: "grid", gap: 9 }}>
                      {(q as ShortQuestion).criteria.map((c, i) => {
                        const on = checked.includes(i);
                        return (
                          <label key={i} style={{ display: "flex", gap: 11, alignItems: "flex-start", cursor: "pointer", fontSize: 13.5, lineHeight: 1.5, color: "#1A1A1A" }}>
                            <input
                              type="checkbox" checked={on}
                              onChange={() => setChecked((a) => on ? a.filter((x) => x !== i) : [...a, i])}
                              style={{ marginTop: 3 }}
                            />
                            <span style={{ textDecoration: on ? "line-through" : "none", opacity: on ? 0.55 : 1 }}>{c}</span>
                          </label>
                        );
                      })}
                    </div>
                    <div style={{ marginTop: 14, fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0A0A0A" }}>
                      {checked.length} / {(q as ShortQuestion).criteria.length} criteria
                    </div>
                    {revealed && (
                      <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px dashed rgba(10,10,10,0.18)", fontSize: 13.5, lineHeight: 1.65, color: "#1A1A1A" }}>
                        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C5C5C", marginBottom: 10 }}>
                          Sample response, based on NESA marking criteria
                        </div>
                        {(q as ShortQuestion).sample}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ marginTop: 48, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <Link
              href="/practice"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 28px", borderRadius: 12,
                background: "#C9EFD3", color: "#0A2E1A",
                textDecoration: "none", fontSize: 15, fontWeight: 700,
                letterSpacing: "-0.01em",
                boxShadow: "0 4px 20px rgba(201,239,211,0.35)",
              }}
            >
              See all {QUIZ_TOTAL} questions →
            </Link>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", letterSpacing: "0.01em" }}>
              Filter by topic: MCQ, short answer, extended response
            </span>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .paper-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
