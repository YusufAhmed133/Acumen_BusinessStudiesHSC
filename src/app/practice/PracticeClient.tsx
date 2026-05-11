"use client";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Link from "next/link";
import {
  TOPICS_MAP,
  type TopicKey,
  type McqQuestion,
  type ShortQuestion,
  type Question,
  type RichContentBlock,
} from "@/lib/quiz-types";

type UnlockResult = { ok: true } | { ok: false; message: string };
type TypeFilter = "all" | "mcq" | "short" | "extended";
type PracticeClientProps = {
  initialQuestions: Question[];
  totalCount: number;
  filterCounts: Record<string, number>;
};

const TYPE_LABELS: Record<TypeFilter, string> = {
  all: "All types",
  mcq: "Multiple Choice",
  short: "Short Answer",
  extended: "Extended Response",
};

function EmailGate({
  onUnlock,
  onClose,
}: {
  onUnlock: () => Promise<UnlockResult>;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

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
        const result = await onUnlock();
        if (!result.ok) {
          setError(result.message);
        }
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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gate-title"
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(13,13,13,0.72)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
      }}
    >
      <form onSubmit={submit} onClick={(event) => event.stopPropagation()} style={{
        background: "#FFFCF4", borderRadius: 20, padding: "40px 36px",
        maxWidth: 420, width: "100%",
        boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
        position: "relative",
      }}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close practice access dialog"
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 34,
            height: 34,
            borderRadius: 999,
            border: "1px solid rgba(0,0,0,0.12)",
            background: "#ffffff",
            color: "#111111",
            cursor: "pointer",
            fontSize: 20,
            lineHeight: 1,
          }}
        >
          x
        </button>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C5C5C", marginBottom: 14 }}>
          Acumen Practice Bank
        </div>
        <h2 id="gate-title" style={{ fontWeight: 700, fontSize: 26, letterSpacing: "-0.04em", margin: "0 0 8px", color: "#0A0A0A" }}>
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
          <p role="alert" style={{ fontSize: 13, color: "#923333", margin: "10px 0 0" }}>{error}</p>
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

const PREVIEW_COUNT = 5;

function GateCard({ onUnlock, remaining }: { onUnlock: () => void; remaining: number }) {
  return (
    <div style={{
      background: "#FFFCF4", borderRadius: 14,
      boxShadow: "0 8px 32px rgba(0,0,0,0.12)", marginBottom: 24,
      padding: "48px 32px", textAlign: "center",
    }}>
      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5C5C", marginBottom: 14 }}>
        {remaining} more question{remaining !== 1 ? "s" : ""} available
      </div>
      <h2 style={{ fontWeight: 700, fontSize: 26, letterSpacing: "-0.04em", margin: "0 0 10px", color: "#0A0A0A" }}>
        Unlock the full question bank
      </h2>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: "#5C5C5C", margin: "0 auto 28px", maxWidth: 380 }}>
        Enter your email to access all questions. Your tutor will add you after your free trial lesson.
      </p>
      <button
        onClick={onUnlock}
        style={{
          padding: "13px 32px", borderRadius: 999, fontWeight: 700, fontSize: 15,
          background: "#111111", color: "#ffffff", border: "1px solid #111111", cursor: "pointer",
          letterSpacing: "-0.01em",
        }}
      >
        Unlock {remaining} questions →
      </button>
      <div style={{ marginTop: 14 }}>
        <Link
          href="/enquire"
          prefetch={false}
          style={{
            display: "inline-block", padding: "11px 24px", borderRadius: 999,
            background: "#C9EFD3", color: "#0A2E1A",
            textDecoration: "none", fontSize: 14, fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          Book a free trial lesson →
        </Link>
      </div>
    </div>
  );
}

function formatStemForDisplay(text: string): string {
  if (text.length < 220 && !text.includes("[") && !text.includes(" / ")) {
    return text;
  }

  return text
    .replace(/\. (SWOT:|Features of the business include:|The business has provided|Below is|You have been hired|In your report:)/g, ".\n\n$1")
    .replace(/ (Strengths,|Weaknesses,|Opportunities,|Threats,|Role:|Responsibilities:|General information:|Hours of work are)/g, "\n$1")
    .replace(/ \[/g, "\n\n[")
    .replace(/\] /g, "]\n\n")
    .replace(/ \/ /g, " /\n")
    .replace(/; /g, ";\n")
    .replace(/\n{3,}/g, "\n\n");
}

function RichContentBlocks({ blocks, compact = false }: { blocks: RichContentBlock[]; compact?: boolean }) {
  return (
    <div style={{ display: "grid", gap: compact ? 8 : 12, marginBottom: compact ? 0 : 20 }}>
      {blocks.map((block, blockIndex) => {
        if (block.type === "heading") {
          return (
            <h3
              key={blockIndex}
              style={{
                margin: 0,
                fontSize: compact ? 13 : 15,
                lineHeight: 1.35,
                fontWeight: 700,
                letterSpacing: "0",
                color: "#1A1A1A",
              }}
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={blockIndex} style={{ margin: 0, fontSize: compact ? 13 : 15, lineHeight: 1.65, color: "#1A1A1A" }}>
              {block.text}
            </p>
          );
        }

        if (block.type === "note") {
          return (
            <p
              key={blockIndex}
              style={{
                margin: 0,
                padding: compact ? "8px 10px" : "10px 12px",
                borderRadius: 8,
                background: "#F5F5F3",
                border: "1px solid rgba(10,10,10,0.08)",
                fontSize: compact ? 12 : 13,
                lineHeight: 1.55,
                color: "#3A3A3A",
              }}
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={blockIndex} style={{ margin: 0, paddingLeft: 20, display: "grid", gap: 6 }}>
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} style={{ fontSize: compact ? 13 : 15, lineHeight: 1.55, color: "#1A1A1A" }}>
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "lineChart") {
          const width = 560;
          const height = 260;
          const padLeft = 54;
          const padRight = 130;
          const padTop = 34;
          const padBottom = 42;
          const plotWidth = width - padLeft - padRight;
          const plotHeight = height - padTop - padBottom;
          const yTicks = Array.from(
            { length: Math.floor((block.yMax - block.yMin) / block.yStep) + 1 },
            (_, tickIndex) => block.yMin + tickIndex * block.yStep
          );
          const xPosition = (index: number) => padLeft + (plotWidth / Math.max(block.xLabels.length - 1, 1)) * index;
          const yPosition = (value: number) => padTop + ((block.yMax - value) / (block.yMax - block.yMin)) * plotHeight;

          return (
            <figure key={blockIndex} style={{ margin: 0, overflowX: "auto" }}>
              <svg
                role="img"
                aria-label={`${block.title}. ${block.series.map((series) => `${series.label}: ${series.values.join(", ")}`).join(". ")}`}
                viewBox={`0 0 ${width} ${height}`}
                style={{ width: "100%", minWidth: compact ? 420 : 560, height: "auto", display: "block" }}
              >
                <text x={width / 2} y={18} textAnchor="middle" style={{ fontSize: 15, fontWeight: 700, fill: "#1A1A1A" }}>
                  {block.title}
                </text>
                {yTicks.map((tick) => {
                  const y = yPosition(tick);
                  return (
                    <g key={tick}>
                      <line x1={padLeft} x2={padLeft + plotWidth} y1={y} y2={y} stroke="rgba(10,10,10,0.18)" />
                      <text x={padLeft - 10} y={y + 4} textAnchor="end" style={{ fontSize: 11, fill: "#3A3A3A" }}>
                        {tick}
                      </text>
                    </g>
                  );
                })}
                <line x1={padLeft} x2={padLeft + plotWidth} y1={padTop + plotHeight} y2={padTop + plotHeight} stroke="#1A1A1A" />
                <line x1={padLeft} x2={padLeft} y1={padTop} y2={padTop + plotHeight} stroke="#1A1A1A" />
                <text x={18} y={padTop + plotHeight / 2} textAnchor="middle" transform={`rotate(-90 18 ${padTop + plotHeight / 2})`} style={{ fontSize: 12, fill: "#1A1A1A" }}>
                  {block.yLabel}
                </text>
                {block.xLabels.map((label, labelIndex) => (
                  <text key={label} x={xPosition(labelIndex)} y={padTop + plotHeight + 24} textAnchor="middle" style={{ fontSize: 11, fill: "#1A1A1A" }}>
                    {label}
                  </text>
                ))}
                {block.series.map((series) => {
                  const points = series.values.map((value, valueIndex) => `${xPosition(valueIndex)},${yPosition(value)}`).join(" ");
                  return (
                    <g key={series.label}>
                      <polyline
                        points={points}
                        fill="none"
                        stroke={series.stroke}
                        strokeWidth={3}
                        strokeDasharray={series.dash}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {series.values.map((value, valueIndex) => (
                        <circle key={valueIndex} cx={xPosition(valueIndex)} cy={yPosition(value)} r={3.5} fill={series.stroke} />
                      ))}
                    </g>
                  );
                })}
                {block.series.map((series, seriesIndex) => (
                  <g key={series.label} transform={`translate(${padLeft + plotWidth + 28} ${padTop + 22 + seriesIndex * 24})`}>
                    <line x1={0} x2={34} y1={0} y2={0} stroke={series.stroke} strokeWidth={3} strokeDasharray={series.dash} strokeLinecap="round" />
                    <text x={42} y={4} style={{ fontSize: 12, fill: "#1A1A1A" }}>
                      {series.label}
                    </text>
                  </g>
                ))}
              </svg>
            </figure>
          );
        }

        if (block.type === "gantt") {
          return (
            <div key={blockIndex} style={{ overflowX: "auto", border: "1px solid rgba(10,10,10,0.1)", borderRadius: 10 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: compact ? 520 : 700, background: "#FFFCF4" }}>
                <caption style={{ captionSide: "top", textAlign: "center", padding: "10px 12px", fontSize: 12, fontWeight: 700, color: "#1A1A1A" }}>
                  {block.caption}
                </caption>
                <thead>
                  <tr>
                    <th style={{ padding: "9px 10px", background: "#F8F4E8", borderTop: "1px solid rgba(10,10,10,0.1)", borderRight: "1px solid rgba(10,10,10,0.08)", fontSize: 12, textAlign: "left" }}>
                      Activity/sequence
                    </th>
                    {block.columns.map((column) => (
                      <th key={column} style={{ padding: "9px 10px", background: "#F8F4E8", borderTop: "1px solid rgba(10,10,10,0.1)", borderRight: "1px solid rgba(10,10,10,0.08)", fontSize: 12, textAlign: "center" }}>
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row" style={{ padding: "9px 10px", borderTop: "1px solid rgba(10,10,10,0.08)", borderRight: "1px solid rgba(10,10,10,0.08)", fontSize: 12, lineHeight: 1.35, textAlign: "left", fontWeight: 500 }}>
                        {row.label}
                      </th>
                      {block.columns.map((column) => {
                        const active = row.active.includes(column);
                        return (
                          <td key={column} style={{ padding: 6, borderTop: "1px solid rgba(10,10,10,0.08)", borderRight: "1px solid rgba(10,10,10,0.08)", textAlign: "center" }}>
                            <span
                              aria-label={active ? `${row.label}: ${column}` : undefined}
                              style={{
                                display: "block",
                                height: 18,
                                borderRadius: 4,
                                background: active ? "#1A1A1A" : "transparent",
                              }}
                            />
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (block.type === "networkDiagram") {
          const width = block.width ?? 640;
          const height = block.height ?? 300;
          const nodeById = new Map(block.nodes.map((node) => [node.id, node]));

          return (
            <figure key={blockIndex} style={{ margin: 0, overflowX: "auto" }}>
              <svg
                role="img"
                aria-label={`${block.caption ? `${block.caption}. ` : ""}${block.edges.map((edge) => `${edge.from}${edge.to}: ${edge.label}`).join(". ")}`}
                viewBox={`0 0 ${width} ${height}`}
                style={{ width: "100%", minWidth: compact ? 420 : 560, height: "auto", display: "block" }}
              >
                {block.caption && (
                  <text x={width / 2} y={24} textAnchor="middle" style={{ fontSize: 14, fontWeight: 700, fill: "#1A1A1A" }}>
                    {block.caption}
                  </text>
                )}
                {block.edges.map((edge, edgeIndex) => {
                  const from = nodeById.get(edge.from);
                  const to = nodeById.get(edge.to);
                  if (!from || !to) return null;
                  const labelX = edge.labelX ?? (from.x + to.x) / 2;
                  const labelY = edge.labelY ?? (from.y + to.y) / 2 - 10;

                  return (
                    <g key={`${edge.from}-${edge.to}-${edgeIndex}`}>
                      <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="#1A1A1A" strokeWidth={2} />
                      <text x={labelX} y={labelY} textAnchor="middle" style={{ fontSize: 14, fill: "#1A1A1A" }}>
                        {edge.label}
                      </text>
                    </g>
                  );
                })}
                {block.nodes.map((node) => (
                  <g key={node.id}>
                    <circle cx={node.x} cy={node.y} r={7} fill="#1A1A1A" />
                    <text x={node.labelX ?? node.x - 12} y={node.labelY ?? node.y + 27} textAnchor="middle" style={{ fontSize: 18, fontStyle: "italic", fill: "#1A1A1A" }}>
                      {node.label ?? node.id}
                    </text>
                  </g>
                ))}
              </svg>
            </figure>
          );
        }

        return (
          <div key={blockIndex} style={{ overflowX: "auto", border: "1px solid rgba(10,10,10,0.1)", borderRadius: 10 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: compact ? 320 : 520, background: "#FFFCF4" }}>
              {block.caption && (
                <caption style={{ captionSide: "top", textAlign: "left", padding: "10px 12px", fontSize: 12, fontWeight: 700, color: "#3A3A3A" }}>
                  {block.caption}
                </caption>
              )}
              {block.headers && (
                <thead>
                  <tr>
                    {block.headers.map((header, headerIndex) => (
                      <th
                        key={headerIndex}
                        scope="col"
                        style={{
                          padding: compact ? "8px 9px" : "10px 12px",
                          borderBottom: "1px solid rgba(10,10,10,0.1)",
                          borderRight: headerIndex === block.headers!.length - 1 ? "none" : "1px solid rgba(10,10,10,0.08)",
                          background: "#F8F4E8",
                          textAlign: "left",
                          fontSize: compact ? 11 : 12,
                          lineHeight: 1.35,
                          fontWeight: 700,
                          color: "#1A1A1A",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        style={{
                          padding: compact ? "8px 9px" : "10px 12px",
                          borderTop: block.headers || rowIndex > 0 ? "1px solid rgba(10,10,10,0.08)" : "none",
                          borderRight: cellIndex === row.length - 1 ? "none" : "1px solid rgba(10,10,10,0.08)",
                          fontSize: compact ? 12 : 13,
                          lineHeight: 1.45,
                          color: "#1A1A1A",
                          verticalAlign: "top",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

function QuestionStimulus({ blocks }: { blocks: RichContentBlock[] }) {
  return (
    <section
      aria-label="Question stimulus"
      style={{
        marginBottom: 20,
        padding: "16px 18px",
        borderRadius: 12,
        border: "1px solid rgba(10,10,10,0.1)",
        background: "#FFF9E8",
      }}
    >
      <RichContentBlocks blocks={blocks} />
    </section>
  );
}

function QuestionStem({ text }: { text: string }) {
  const formatted = formatStemForDisplay(text);
  const isLong = formatted !== text;

  return (
    <p
      style={{
        fontSize: 16,
        lineHeight: isLong ? 1.78 : 1.65,
        color: "#1A1A1A",
        margin: "0 0 20px",
        fontWeight: 500,
        whiteSpace: "pre-line",
        background: isLong ? "#FFF9E8" : "transparent",
        border: isLong ? "1px solid rgba(10,10,10,0.08)" : "none",
        borderRadius: isLong ? 12 : 0,
        padding: isLong ? "16px 18px" : 0,
      }}
    >
      {formatted}
    </p>
  );
}

function getMcqAnswers(q: McqQuestion): number[] {
  return Array.isArray(q.answer) ? q.answer : [q.answer];
}

function formatMcqAnswer(q: McqQuestion): string {
  return getMcqAnswers(q)
    .map((answerIndex) => `(${String.fromCharCode(65 + answerIndex)}) ${q.options[answerIndex]}`)
    .join(" and ");
}

function getCriteriaItems(q: ShortQuestion): string[] {
  return q.criteriaBands?.flatMap((band) => band.criteria) ?? q.criteria;
}

function QuestionCard({ q }: { q: Question }) {
  const [picked, setPicked] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [checked, setChecked] = useState<number[]>([]);
  const [response, setResponse] = useState("");

  const primaryTopic = TOPICS_MAP[q.topic];
  const topicKeys = q.topics ?? [q.topic];
  const markerAccent = primaryTopic.accent;
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
            background: primaryTopic.tint, color: primaryTopic.accent,
          }}>
            {TOPICS_MAP[topicKeys[0]].label}
          </span>
          {topicKeys.slice(1).map((topicKey) => {
            const topic = TOPICS_MAP[topicKey];
            return (
              <span
                key={topicKey}
                style={{
                  padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 600,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  background: topic.tint, color: topic.accent,
                }}
              >
                {topic.label}
              </span>
            );
          })}
          <span style={{ fontSize: 12, color: "#5C5C5C", fontWeight: 500 }}>{typeLabel}, {q.marks} mark{q.marks !== 1 ? "s" : ""}</span>
        </div>
        <span style={{ fontSize: 11, color: "#9B9B9B", letterSpacing: "0.06em" }}>{q.src}</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px" }} className="qcard-cols">
        {/* Question */}
        <div style={{ padding: "28px 32px" }}>
          {q.stimulus && <QuestionStimulus blocks={q.stimulus} />}
          <QuestionStem text={q.stem} />

          {q.type === "mcq" && (
            <div style={{ display: "grid", gap: 8 }}>
              {(q as McqQuestion).options.map((opt, i) => {
                const letter = String.fromCharCode(65 + i);
                const mcq = q as McqQuestion;
                const isCorrect = getMcqAnswers(mcq).includes(i);
                const optionBlocks = mcq.optionBlocks?.[i];
                const bg = revealed
                  ? isCorrect ? "#CFEAD9" : picked === i ? "#F4CFCF" : "#F5F5F3"
                  : picked === i ? "#EAF7EE" : "#F5F5F3";
                const border = revealed
                  ? isCorrect ? "#1F6B40" : picked === i ? "#923333" : "transparent"
                  : picked === i ? "#1B6038" : "transparent";
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
                    <span style={{ display: "grid", gap: optionBlocks ? 8 : 0, flex: 1 }}>
                      {!optionBlocks && opt}
                      {optionBlocks && <RichContentBlocks blocks={optionBlocks} compact />}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {(q.type === "short" || q.type === "extended") && (
            <textarea
              aria-label={`Your answer for: ${q.stem}`}
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
                  background: "#C9EFD3", color: "#0A2E1A", border: "none",
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
                  color: picked !== null && getMcqAnswers(q as McqQuestion).includes(picked) ? "#1F6B40" : "#923333",
                }}>
                  {picked !== null && getMcqAnswers(q as McqQuestion).includes(picked) ? "Correct." : "Not quite."}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#1A1A1A", margin: "0 0 12px" }}>
                  {(q as McqQuestion).explain}
                </p>
                <p style={{ margin: 0, fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", color: "#5C5C5C" }}>
                  Answer: {formatMcqAnswer(q as McqQuestion)}
                </p>
              </div>
            ) : (
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#5C5C5C", margin: 0 }}>
                Pick an option and check your answer.
              </p>
            )
          ) : (
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#3A3A3A", marginBottom: 10 }}>
                Marking criteria, {q.marks} marks
              </div>
              <CriteriaChecklist
                question={q as ShortQuestion}
                checked={checked}
                setChecked={setChecked}
                accent={markerAccent}
              />
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0A0A0A" }}>
                {checked.length} / {getCriteriaItems(q as ShortQuestion).length} criteria
              </div>
              {revealed && (
                <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px dashed rgba(10,10,10,0.18)", fontSize: 13, lineHeight: 1.65, color: "#1A1A1A" }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C5C5C", marginBottom: 8 }}>
                    {(q as ShortQuestion).sample ? "Sample response" : "Marking guidance"}
                  </div>
                  {(q as ShortQuestion).sample && (
                    <p style={{ margin: (q as ShortQuestion).sampleBlocks ? "0 0 10px" : 0 }}>
                      {(q as ShortQuestion).sample}
                    </p>
                  )}
                  {(q as ShortQuestion).sampleBlocks && <RichContentBlocks blocks={(q as ShortQuestion).sampleBlocks!} compact />}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CriteriaChecklist({
  question,
  checked,
  setChecked,
  accent,
}: {
  question: ShortQuestion;
  checked: number[];
  setChecked: Dispatch<SetStateAction<number[]>>;
  accent: string;
}) {
  const toggle = (index: number) => {
    setChecked((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  };

  if (!question.criteriaBands) {
    return (
      <div style={{ display: "grid", gap: 8, marginBottom: 16 }}>
        {question.criteria.map((criterion, index) => {
          const on = checked.includes(index);
          return (
            <label key={index} style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer", fontSize: 13, lineHeight: 1.5, color: "#1A1A1A" }}>
              <input
                type="checkbox"
                checked={on}
                onChange={() => toggle(index)}
                style={{ marginTop: 2, accentColor: accent, flexShrink: 0 }}
              />
              {criterion}
            </label>
          );
        })}
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gap: 12, marginBottom: 16 }}>
      {question.criteriaBands.map((band, bandIndex) => (
        <div key={bandIndex} style={{ display: "grid", gap: 7 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#0A0A0A" }}>{band.marks}</div>
          {band.criteria.map((criterion, criterionIndex) => {
            const previousCriteriaCount = question.criteriaBands!
              .slice(0, bandIndex)
              .reduce((total, previousBand) => total + previousBand.criteria.length, 0);
            const currentIndex = previousCriteriaCount + criterionIndex;
            const on = checked.includes(currentIndex);
            return (
              <label key={currentIndex} style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer", fontSize: 13, lineHeight: 1.5, color: "#1A1A1A" }}>
                <input
                  type="checkbox"
                  checked={on}
                  onChange={() => toggle(currentIndex)}
                  style={{ marginTop: 2, accentColor: accent, flexShrink: 0 }}
                />
                {criterion}
              </label>
            );
          })}
        </div>
      ))}
    </div>
  );
}

const PAGE_SIZE = 20;
type AccessStatus = "preview" | "unlocked";

function filterKey(topic: TopicKey | "all", type: TypeFilter): string {
  return `${topic}:${type}`;
}

export function PracticeClient({ initialQuestions, totalCount, filterCounts }: PracticeClientProps) {
  const [access, setAccess] = useState<AccessStatus>("preview");
  const [showGate, setShowGate] = useState(false);
  const [topic, setTopic] = useState<TopicKey | "all">("all");
  const [type, setType] = useState<TypeFilter>("all");
  const [page, setPage] = useState(1);
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);

  const unlock = async (): Promise<UnlockResult> => {
    const response = await fetch("/api/practice/questions", { cache: "no-store" });
    const data = await response.json() as { ok: boolean; message?: string; questions?: unknown };

    if (!response.ok || !data.ok || !Array.isArray(data.questions)) {
      return {
        ok: false,
        message: data.message ?? "Could not load the full practice bank. Please try again.",
      };
    }

    setQuestions(data.questions as Question[]);
    setAccess("unlocked");
    setShowGate(false);
    setPage(1);
    return { ok: true };
  };

  const filtered = questions.filter((q) => {
    const topicMatch = topic === "all" || q.topic === topic || (q.topics?.includes(topic) ?? false);
    const typeMatch = type === "all" || q.type === type;
    return topicMatch && typeMatch;
  });

  const filteredTotal = filterCounts[filterKey(topic, type)] ?? totalCount;
  const visible = filtered.slice(0, page * PAGE_SIZE);
  const previewQuestions = filtered.slice(0, PREVIEW_COUNT);
  const remainingPreviewCount = Math.max(filteredTotal - previewQuestions.length, 0);
  const hasMore = access === "unlocked" && visible.length < filtered.length;
  const gatedContentProps = showGate ? { inert: true, "aria-hidden": true } : {};

  return (
    <div style={{ minHeight: "100vh", background: "#F9F9F7" }}>
      {showGate && <EmailGate onUnlock={unlock} onClose={() => setShowGate(false)} />}
      <div {...gatedContentProps}>
      {/* Filter bar */}
      <div style={{
        background: "rgba(249,249,247,0.96)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "12px 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {(["all", "operations", "marketing", "finance", "human_resources"] as const).map((t) => {
            const topicMeta = t === "all" ? null : TOPICS_MAP[t];
            const label = topicMeta?.label ?? "All topics";
            const active = topic === t;
            const accent = topicMeta?.accent ?? "#111111";
            const tint = topicMeta?.tint ?? "#EBEBEB";
            return (
              <button
                key={t}
                onClick={() => { setTopic(t); setPage(1); }}
                aria-pressed={active}
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
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {(["all", "mcq", "short", "extended"] as TypeFilter[]).map((t) => (
            <button
              key={t}
              onClick={() => { setType(t); setPage(1); }}
              aria-pressed={type === t}
              style={{
                padding: "7px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600, cursor: "pointer",
                background: type === t ? "#111111" : "#F0F0EE",
                color: type === t ? "#ffffff" : "#5C5C5C",
                border: "1px solid rgba(0,0,0,0.08)", transition: "all 160ms ease",
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
            HSC Business Studies Practice Questions
          </h1>
          <p style={{ margin: 0, fontSize: 15, color: "#5C5C5C" }}>
            {filteredTotal} question{filteredTotal !== 1 ? "s" : ""} from real HSC past papers, annotated by syllabus dot point
          </p>
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#9B9B9B", fontSize: 15 }}>
            No questions match this filter yet.
          </div>
        ) : access === "preview" ? (
          <>
            {previewQuestions.map((q) => <QuestionCard key={q.id} q={q} />)}
            {remainingPreviewCount > 0 && (
              <GateCard onUnlock={() => setShowGate(true)} remaining={remainingPreviewCount} />
            )}
          </>
        ) : (
          <>
            {visible.map((q) => <QuestionCard key={q.id} q={q} />)}
            {hasMore && (
              <div style={{ textAlign: "center", marginTop: 8, marginBottom: 24 }}>
                <button
                  onClick={() => setPage((p) => p + 1)}
                  style={{
                    padding: "13px 32px", borderRadius: 12, fontWeight: 600, fontSize: 15,
                    background: "#C9EFD3", color: "#0A2E1A", border: "1.5px solid #B8E4C4",
                    cursor: "pointer",
                  }}
                >
                  Load more ({filtered.length - visible.length} remaining)
                </button>
              </div>
            )}
          </>
        )}


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
