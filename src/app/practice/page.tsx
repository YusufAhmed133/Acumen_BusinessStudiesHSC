"use client";
import { useEffect, useState } from "react";
import { QUIZ_BANK, TOPICS_MAP, type TopicKey, type McqQuestion, type ShortQuestion, type Question } from "@/lib/quiz-bank";

function EmailGate({ onUnlock }: { onUnlock: () => void }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json() as { ok: boolean; message?: string };
      if (data.ok) {
        onUnlock();
      } else {
        setError(data.message ?? "Access denied.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "rgba(13,13,13,0.72)", backdropFilter: "blur(8px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "24px",
    }}>
      <form onSubmit={submit} style={{
        background: "#FFFCF4", borderRadius: 20, padding: "40px 36px",
        maxWidth: 420, width: "100%",
        boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
      }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C5C5C", marginBottom: 14 }}>
          Acumen · Practice bank
        </div>
        <h2 style={{ fontWeight: 700, fontSize: 26, letterSpacing: "-0.04em", margin: "0 0 8px", color: "#0A0A0A" }}>
          Enter your email to access
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "#5C5C5C", margin: "0 0 28px" }}>
          Your tutor will add your email to the access list after your trial lesson.
        </p>

        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#5C5C5C" }}>
            Email address
          </span>
          <input
            type="email" required autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{
              width: "100%", padding: "12px 14px", borderRadius: 10,
              border: "1.5px solid rgba(0,0,0,0.14)", fontSize: 15,
              background: "#F9F9F7", outline: "none", color: "#111111",
              boxSizing: "border-box",
            }}
          />
        </label>

        {error && (
          <p style={{ fontSize: 13, color: "#923333", margin: "10px 0 0" }}>{error}</p>
        )}

        <button
          type="submit" disabled={loading}
          style={{
            marginTop: 20, width: "100%", padding: "13px 18px", borderRadius: 999,
            background: loading ? "#6B6B6B" : "#C9EFD3",
            color: loading ? "#ffffff" : "#0A2E1A",
            border: "none", cursor: loading ? "wait" : "pointer",
            fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em",
          }}
        >
          {loading ? "Checking..." : "Access practice questions →"}
        </button>
      </form>
    </div>
  );
}

type TypeFilter = "all" | "mcq" | "short" | "extended";

const TYPE_LABELS: Record<TypeFilter, string> = {
  all: "All types",
  mcq: "Multiple Choice",
  short: "Short Answer",
  extended: "Extended Response",
};

function QuestionCard({ q }: { q: Question }) {
  const [picked, setPicked] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [checked, setChecked] = useState<number[]>([]);
  const [response, setResponse] = useState("");

  const topic = TOPICS_MAP[q.topic];
  const reset = () => { setPicked(null); setRevealed(false); setChecked([]); setResponse(""); };

  const typeLabel = q.type === "mcq" ? "Multiple Choice" : q.type === "short" ? "Short Answer" : "Extended Response";

  return (
    <div style={{
      background: "#FFFCF4", borderRadius: 14, overflow: "hidden",
      boxShadow: "0 8px 32px rgba(0,0,0,0.12)", marginBottom: 24,
    }}>
      {/* Header */}
      <div style={{
        padding: "16px 24px", borderBottom: "1px solid rgba(10,10,10,0.1)",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap",
        background: "#FFFCF4",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            background: topic.tint, color: topic.accent,
          }}>
            {topic.label}
          </span>
          <span style={{ fontSize: 12, color: "#5C5C5C", fontWeight: 500 }}>{typeLabel} · {q.marks} mark{q.marks !== 1 ? "s" : ""}</span>
        </div>
        <span style={{ fontSize: 11, color: "#9B9B9B", letterSpacing: "0.06em" }}>{q.src}</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px" }} className="qcard-cols">
        {/* Question */}
        <div style={{ padding: "28px 32px" }}>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "#1A1A1A", margin: "0 0 20px", fontWeight: 500 }}>
            {q.stem}
          </p>

          {q.type === "mcq" && (
            <div style={{ display: "grid", gap: 8 }}>
              {(q as McqQuestion).options.map((opt, i) => {
                const letter = String.fromCharCode(65 + i);
                const isCorrect = i === (q as McqQuestion).answer;
                const bg = revealed
                  ? isCorrect ? "#CFEAD9" : picked === i ? "#F4CFCF" : "#F5F5F3"
                  : picked === i ? topic.tint : "#F5F5F3";
                const border = revealed
                  ? isCorrect ? "#1F6B40" : picked === i ? "#923333" : "transparent"
                  : picked === i ? topic.accent : "transparent";
                return (
                  <button
                    key={i}
                    onClick={() => !revealed && setPicked(i)}
                    style={{
                      textAlign: "left", padding: "11px 14px", borderRadius: 10, cursor: revealed ? "default" : "pointer",
                      border: `1.5px solid ${border}`, background: bg,
                      fontSize: 14, color: "#1A1A1A", transition: "all 160ms ease", display: "flex", gap: 10,
                    }}
                  >
                    <span style={{ fontWeight: 600, flexShrink: 0, color: "#5C5C5C" }}>{letter}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {(q.type === "short" || q.type === "extended") && (
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder={q.type === "extended" ? "Write your business report response here..." : "Write your answer here..."}
              style={{
                width: "100%", minHeight: q.type === "extended" ? 240 : 120,
                padding: "12px 14px", borderRadius: 10, border: "1.5px solid rgba(0,0,0,0.12)",
                fontSize: 14, lineHeight: 1.6, color: "#1A1A1A", background: "#F9F9F7",
                resize: "vertical", boxSizing: "border-box", outline: "none",
                fontFamily: "inherit",
              }}
            />
          )}

          <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
            {!revealed ? (
              <button
                onClick={() => setRevealed(true)}
                disabled={q.type === "mcq" && picked === null}
                style={{
                  padding: "10px 20px", borderRadius: 10, fontWeight: 600, fontSize: 14,
                  background: topic.accent, color: "#ffffff", border: "none",
                  cursor: q.type === "mcq" && picked === null ? "not-allowed" : "pointer",
                  opacity: q.type === "mcq" && picked === null ? 0.4 : 1,
                }}
              >
                Check answer
              </button>
            ) : (
              <button
                onClick={reset}
                style={{
                  padding: "10px 20px", borderRadius: 10, fontWeight: 600, fontSize: 14,
                  background: "transparent", color: "#5C5C5C",
                  border: "1.5px solid rgba(0,0,0,0.14)", cursor: "pointer",
                }}
              >
                Try again
              </button>
            )}
          </div>
        </div>

        {/* Marker margin */}
        <div style={{ padding: "28px 24px", background: "#F8F4E8", borderLeft: "1px solid rgba(10,10,10,0.08)" }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#5C5C5C", marginBottom: 12 }}>
            Marker margin
          </div>

          {q.type === "mcq" ? (
            revealed ? (
              <div>
                <div style={{
                  fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 10,
                  color: picked === (q as McqQuestion).answer ? "#1F6B40" : "#923333",
                }}>
                  {picked === (q as McqQuestion).answer ? "Correct." : "Not quite."}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#1A1A1A", margin: "0 0 12px" }}>
                  {(q as McqQuestion).explain}
                </p>
                <p style={{ margin: 0, fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", color: "#5C5C5C" }}>
                  Answer · ({String.fromCharCode(65 + (q as McqQuestion).answer)}) {(q as McqQuestion).options[(q as McqQuestion).answer]}
                </p>
              </div>
            ) : (
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#5C5C5C", margin: 0 }}>
                Pick an option and check your answer. We explain the marker&apos;s reasoning, not just the letter.
              </p>
            )
          ) : (
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A3A3A", marginBottom: 10 }}>
                Marking criteria · {q.marks} marks
              </div>
              <div style={{ display: "grid", gap: 8, marginBottom: 16 }}>
                {(q as ShortQuestion).criteria.map((c, i) => {
                  const on = checked.includes(i);
                  return (
                    <label key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer", fontSize: 13, lineHeight: 1.5, color: "#1A1A1A" }}>
                      <input
                        type="checkbox" checked={on}
                        onChange={() => setChecked((a) => on ? a.filter((x) => x !== i) : [...a, i])}
                        style={{ marginTop: 2, accentColor: topic.accent, flexShrink: 0 }}
                      />
                      {c}
                    </label>
                  );
                })}
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0A0A0A" }}>
                {checked.length} / {(q as ShortQuestion).criteria.length} criteria
              </div>
              {revealed && (
                <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px dashed rgba(10,10,10,0.18)", fontSize: 13, lineHeight: 1.65, color: "#1A1A1A" }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C5C5C", marginBottom: 8 }}>
                    Sample response
                  </div>
                  {(q as ShortQuestion).sample}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type AccessStatus = "locked" | "unlocked";

export default function PracticePage() {
  // No localStorage — gate shows on every page load and reload.
  // Removing an email from Supabase locks them out immediately.
  const [access, setAccess] = useState<AccessStatus>("locked");
  const [topic, setTopic] = useState<TopicKey | "all">("all");
  const [type, setType] = useState<TypeFilter>("all");

  const unlock = () => {
    setAccess("unlocked");
  };

  const filtered = QUIZ_BANK.filter((q) => {
    const topicMatch = topic === "all" || q.topic === topic;
    const typeMatch = type === "all" || q.type === type;
    return topicMatch && typeMatch;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#F9F9F7" }}>
      {access === "locked" && <EmailGate onUnlock={unlock} />}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <div {...(access === "locked" ? { inert: true as any } : {})}>
      {/* Filter bar */}
      <div style={{
        background: "rgba(249,249,247,0.96)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "12px 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {(["all", "operations", "marketing", "finance", "hr"] as const).map((t) => {
            const label = t === "all" ? "All topics" : TOPICS_MAP[t].label;
            const active = topic === t;
            const accent = t === "all" ? "#111111" : TOPICS_MAP[t].accent;
            const tint = t === "all" ? "#EBEBEB" : TOPICS_MAP[t].tint;
            return (
              <button
                key={t}
                onClick={() => setTopic(t)}
                style={{
                  padding: "7px 14px", borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: "pointer",
                  background: active ? accent : tint,
                  color: active ? "#ffffff" : accent,
                  border: "none", transition: "all 160ms ease",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {(["all", "mcq", "short", "extended"] as TypeFilter[]).map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              style={{
                padding: "7px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600, cursor: "pointer",
                background: type === t ? "#111111" : "#EBEBEB",
                color: type === t ? "#ffffff" : "#5C5C5C",
                border: "none", transition: "all 160ms ease",
              }}
            >
              {TYPE_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 28px 80px" }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.04em", margin: "0 0 8px", color: "#111111" }}>
            Practice Questions
          </h1>
          <p style={{ margin: 0, fontSize: 15, color: "#5C5C5C" }}>
            {filtered.length} question{filtered.length !== 1 ? "s" : ""} · real HSC past papers, annotated by syllabus dot point
          </p>
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#9B9B9B", fontSize: 15 }}>
            No questions match this filter yet.
          </div>
        ) : (
          filtered.map((q) => <QuestionCard key={q.id} q={q} />)
        )}

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <a
            href="/#enquire"
            onClick={(e) => { e.preventDefault(); window.location.href = "/#enquire"; }}
            style={{
              display: "inline-flex", padding: "14px 28px", borderRadius: 12,
              background: "#C9EFD3", color: "#0A2E1A",
              textDecoration: "none", fontSize: 15, fontWeight: 600,
            }}
          >
            Book a free trial lesson →
          </a>
        </div>
      </div>

      <style>{`
        .qcard-cols { grid-template-columns: 1fr 340px !important; }
        @media (max-width: 760px) {
          .qcard-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
      </div>{/* end inert wrapper */}
    </div>
  );
}
