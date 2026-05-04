"use client";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const TOPICS_MAP = {
  operations: { label: "Operations", accent: "#1F6B40", tint: "#CFEAD9" },
  marketing:  { label: "Marketing",  accent: "#A66E12", tint: "#FBE6BD" },
  finance:    { label: "Finance",    accent: "#2A4F94", tint: "#CFDFF4" },
  hr:         { label: "Human Resources", accent: "#923333", tint: "#F4CFCF" },
} as const;

type TopicKey = keyof typeof TOPICS_MAP;

type McqQuestion = {
  id: string; topic: TopicKey; type: "mcq"; marks: number; src: string;
  stem: string; options: string[]; answer: number; explain: string;
};
type ShortQuestion = {
  id: string; topic: TopicKey; type: "short" | "extended"; marks: number; src: string;
  stem: string; criteria: string[]; sample: string;
};
type Question = McqQuestion | ShortQuestion;

const QUIZ_BANK: Question[] = [
  {
    id: "q1", topic: "hr", type: "mcq", marks: 1,
    src: "2024 HSC · Section I · Q1",
    stem: "Who is most likely to represent employees for an increase in wages?",
    options: ["A trade union", "Fair Work Australia", "An employer association", "Federal Court of Australia"],
    answer: 0,
    explain: "A trade union is formed to represent employees in wage negotiations. Fair Work Australia (now the Fair Work Commission) and the Federal Court are dispute-resolution bodies; an employer association represents the employer side.",
  },
  {
    id: "q2", topic: "finance", type: "mcq", marks: 1,
    src: "2024 HSC · Section I · Q10",
    stem: "A business has: Sales $800,000 · COGS $200,000 · Gross profit $600,000 · Net profit $250,000. Expense ratio = total expenses ÷ sales. What is the expense ratio?",
    options: ["25%", "31%", "35%", "44%"],
    answer: 3,
    explain: "Total expenses = Gross profit − Net profit = $600,000 − $250,000 = $350,000. Expense ratio = $350,000 ÷ $800,000 = 43.75% ≈ 44%.",
  },
  {
    id: "q3", topic: "marketing", type: "mcq", marks: 1,
    src: "2024 HSC · Section I · Q4",
    stem: "A retailer sells new sunglasses at a significantly higher price for the first month they are sold. What pricing strategy is being used?",
    options: ["Price skimming", "Price penetration", "Price discrimination", "Price and quality interaction"],
    answer: 0,
    explain: "Price skimming sets a high initial price to capture less price-sensitive customers, then reduces it over time. Penetration pricing is the reverse — entering at a low price to capture market share.",
  },
  {
    id: "q4", topic: "operations", type: "short", marks: 3,
    src: "2024 HSC · Section II · Q21(a)",
    stem: "A manufacturer of flags has seen a steady increase in sales coinciding with a major sporting event. The operations manager increased working hours to meet demand. Explain the interdependence between operations and ONE other key business function.",
    criteria: [
      "Identifies one other key business function (Finance / HR / Marketing)",
      "Explains how operations depends on that function in this scenario",
      "Explains how that function depends on operations in this scenario",
    ],
    sample: "Operations is dependent on finance, which provides the funds to pay for increased overtime and higher variable costs. Finance in turn relies on operations' demand forecasts to budget for those variable costs during the sporting event period.",
  },
  {
    id: "q5", topic: "hr", type: "extended", marks: 20,
    src: "2024 HSC · Section III · Q25",
    stem: "Hans-Made Watches is a family-run business with autocratic leadership that has seen declining sales. The owner is retiring; his children want to improve performance. An expression of interest for Assistant Manager has been distributed only to family and friends — award wages, no experience required. Write a business report: (a) product differentiation strategy, (b) critique of the current acquisition process, (c) recommended HR strategies.",
    criteria: [
      "Describes a product differentiation strategy specific to this watch business",
      "Discusses the acquisition process and its limitations (family/friends only, no criteria)",
      "Recommends at least two HR strategies (e.g. leadership style, training, rewards)",
      "Uses stimulus material (lifetime warranty, autocratic style, family-run)",
      "Presents response in business-report format with relevant terminology",
    ],
    sample: "Hans-Made Watches can differentiate by leaning into its craftsmanship narrative — hand-made, lifetime warranty — positioning the range as luxury with premium packaging and bespoke engraving. The current acquisition process is a closed expression of interest to family and friends with no criteria. This narrows the talent pool, risks nepotism, and is unlikely to deliver the digital retail skills the business needs. Recommended HR strategies: (1) shift from autocratic to participative leadership to retain skilled employees and capture their input; (2) invest in training so employees can grow the brand online; (3) introduce performance-based rewards to retain key staff through the ownership transition.",
  },
];

export function Practice() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [response, setResponse] = useState("");
  const [checked, setChecked] = useState<number[]>([]);
  const [score, setScore] = useState({ c: 0, a: 0 });
  const [t, setT] = useState(0);
  const paperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setT((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = paperRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      el.style.transform = `perspective(1600px) rotateX(${-y * 1.5}deg) rotateY(${x * 1.8}deg)`;
    };
    const onLeave = () => { el.style.transform = "perspective(1600px) rotateX(0deg) rotateY(0deg)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);

  const q = QUIZ_BANK[idx];
  const topic = TOPICS_MAP[q.topic];
  const mm = String(Math.floor(t / 60)).padStart(2, "0");
  const ss = String(t % 60).padStart(2, "0");

  const reset = () => { setPicked(null); setRevealed(false); setResponse(""); setChecked([]); };
  const next = () => { if (idx < QUIZ_BANK.length - 1) { setIdx(idx + 1); reset(); } };
  const prev = () => { if (idx > 0) { setIdx(idx - 1); reset(); } };
  const submit = () => {
    if (q.type === "mcq" && picked != null)
      setScore((s) => ({ c: s.c + (picked === (q as McqQuestion).answer ? 1 : 0), a: s.a + 1 }));
    setRevealed(true);
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
    <section id="practice" style={{ background: "#0A0A0A", padding: "100px 0 110px", position: "relative", overflow: "hidden" }}>
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
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#FBE6BD", marginBottom: 18 }}>
              Live practice
            </div>
            <h2 style={{
              fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 62px)",
              lineHeight: 1.02, letterSpacing: "-0.04em",
              margin: 0, color: "#FFFCF4", maxWidth: 860,
            }}>
              Real questions. Real marker margins.
            </h2>
            <p style={{ fontSize: 17, color: "#CFEAD9", maxWidth: 600, margin: "16px 0 0", lineHeight: 1.5 }}>
              From the 2024 HSC Business Studies paper. Section I, II and III. Live timer, marking criteria, and sample responses from the NESA marking guide.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div ref={paperRef} style={{
            marginTop: 48, background: "#FFFCF4", borderRadius: 14, overflow: "hidden",
            boxShadow: "0 60px 120px rgba(0,0,0,0.55), 0 24px 60px rgba(0,0,0,0.4)",
            transition: "transform 260ms cubic-bezier(.2,.7,.2,1)",
            transformStyle: "preserve-3d",
          }}>
            {/* Paper header */}
            <div style={{
              padding: "20px 30px", borderBottom: "1px solid rgba(10,10,10,0.1)",
              background: "#FFFCF4", display: "flex", alignItems: "center",
              justifyContent: "space-between", gap: 12, flexWrap: "wrap",
            }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#5C5C5C" }}>
                  Acumen practice paper · {q.src}
                </div>
                <div style={{ fontWeight: 600, fontSize: 22, letterSpacing: "-0.025em", marginTop: 4, color: "#0A0A0A" }}>
                  HSC Business Studies
                </div>
              </div>
              <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap", fontSize: 13, fontWeight: 500, color: "#1A1A1A" }}>
                <span>Q {idx + 1} / {QUIZ_BANK.length}</span>
                <span style={{ fontVariantNumeric: "tabular-nums" }}>⏱ {mm}:{ss}</span>
                <span>Score {score.c}/{score.a}</span>
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ height: 3, background: "#F0F0F0" }}>
              <div style={{
                height: "100%",
                width: `${((idx + (revealed ? 1 : 0)) / QUIZ_BANK.length) * 100}%`,
                background: `linear-gradient(90deg, ${TOPICS_MAP.operations.accent}, ${TOPICS_MAP.finance.accent})`,
                transition: "width 600ms cubic-bezier(.2,.7,.2,1)",
              }} />
            </div>

            {/* Body — paper + margin */}
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
                  Section {q.type === "mcq" ? "I" : q.type === "short" ? "II" : "III"} · {topic.label}
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
                          border: `1.5px solid ${correct ? TOPICS_MAP.operations.accent : wrong ? TOPICS_MAP.hr.accent : sel ? "#0A0A0A" : "rgba(10,10,10,0.14)"}`,
                          background: correct ? TOPICS_MAP.operations.tint : wrong ? TOPICS_MAP.hr.tint : sel ? "#F4F4F0" : "#FFFCF4",
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
                  ) : (
                    <button onClick={next} disabled={idx === QUIZ_BANK.length - 1} style={{ ...pill, opacity: idx === QUIZ_BANK.length - 1 ? 0.4 : 1 }}>
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
                        color: picked === (q as McqQuestion).answer ? TOPICS_MAP.operations.accent : TOPICS_MAP.hr.accent,
                      }}>
                        {picked === (q as McqQuestion).answer ? "Correct." : "Not quite."}
                      </div>
                      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#1A1A1A", margin: 0 }}>
                        {(q as McqQuestion).explain}
                      </p>
                      <p style={{ marginTop: 14, fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", color: "#5C5C5C" }}>
                        Answer · ({String.fromCharCode(65 + (q as McqQuestion).answer)}) {(q as McqQuestion).options[(q as McqQuestion).answer]}
                      </p>
                    </div>
                  ) : (
                    <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#5C5C5C", margin: 0 }}>
                      Pick an option and reveal the answer. We explain the marker&apos;s reasoning, not just the letter.
                    </p>
                  )
                ) : (
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A3A3A", marginBottom: 12 }}>
                      Marking criteria · {q.marks} marks
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
                          Sample response · NESA marking guide
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
      </div>

      <style>{`
        @media (max-width: 900px) {
          .paper-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
