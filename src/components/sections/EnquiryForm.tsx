"use client";
import { useState } from "react";

type Fields = {
  parent: string;
  student: string;
  email: string;
  phone: string;
  year: "Year 11" | "Year 12";
  avail: string[];
  concern: string;
};

const TIMES = ["Weekday afternoons", "Weekday evenings", "Saturday", "Sunday"];

const inp: React.CSSProperties = {
  width: "100%",
  padding: "12px 13px",
  borderRadius: 11,
  border: "1px solid rgba(10,10,10,0.14)",
  fontSize: 14,
  background: "#FFFCF4",
  outline: "none",
  color: "#0A0A0A",
  boxSizing: "border-box",
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "grid", gap: 5 }}>
      <span style={{
        fontSize: 11,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "#5C5C5C",
        fontWeight: 600,
      }}>
        {label}
      </span>
      {children}
    </label>
  );
}

export function EnquiryForm() {
  const [f, setF] = useState<Fields>({
    parent: "", student: "", email: "", phone: "",
    year: "Year 12", avail: [], concern: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) =>
    setF((s) => ({ ...s, [k]: v }));

  const toggleAvail = (a: string) =>
    setF((s) => ({
      ...s,
      avail: s.avail.includes(a) ? s.avail.filter((x) => x !== a) : [...s.avail, a],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const message = [
        f.student ? `Student: ${f.student}` : "",
        f.avail.length ? `Availability: ${f.avail.join(", ")}` : "",
        f.concern ? `Concern: ${f.concern}` : "",
      ].filter(Boolean).join("\n");

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.parent,
          email: f.email,
          phone: f.phone,
          year_group: f.year,
          source: "hero_form",
          message,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSent(true);
    } catch {
      setError("Something went wrong — please email hello@acumenhsc.com.au");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div style={{
        borderRadius: 22,
        padding: "36px 30px",
        background: "#CFEAD9",
        boxShadow: "0 24px 60px rgba(10,30,20,0.1)",
        border: "1px solid rgba(10,10,10,0.06)",
        minHeight: 480,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <div style={{
          fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
          textTransform: "uppercase", color: "#1F6B40",
          marginBottom: 18, display: "flex", alignItems: "center", gap: 10,
        }}>
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#1F6B40", display: "inline-block" }} />
          Enquiry received
        </div>
        <div style={{ fontWeight: 600, fontSize: 36, lineHeight: 1.05, letterSpacing: "-0.035em", color: "#0A0A0A" }}>
          Thanks, {f.parent.split(" ")[0] || "we appreciate it"}.
        </div>
        <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.55, color: "#1A1A1A" }}>
          A senior tutor will reply within one business day with available trial slots
          {f.student ? ` for ${f.student}` : ""} and a short call to discuss goals.
        </p>
        <p style={{ marginTop: 18, fontSize: 12, color: "#5C5C5C", letterSpacing: "0.06em" }}>
          Reference · ACU-{Math.random().toString(36).slice(2, 7).toUpperCase()}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{
      borderRadius: 22,
      padding: "24px 22px",
      background: "#FFFCF4",
      boxShadow: "0 24px 60px rgba(10,30,20,0.1)",
      border: "1px solid rgba(10,10,10,0.08)",
      display: "grid",
      gap: 12,
    }}>
      <div style={{
        fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
        textTransform: "uppercase", color: "#5C5C5C",
      }}>
        Free trial enquiry · 1 business day reply
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <Field label="Parent name">
          <input required value={f.parent} onChange={(e) => set("parent", e.target.value)} style={inp} />
        </Field>
        <Field label="Student name">
          <input required value={f.student} onChange={(e) => set("student", e.target.value)} style={inp} />
        </Field>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <Field label="Parent email">
          <input type="email" required value={f.email} onChange={(e) => set("email", e.target.value)} style={inp} />
        </Field>
        <Field label="Parent phone">
          <input type="tel" required value={f.phone} onChange={(e) => set("phone", e.target.value)} style={inp} />
        </Field>
      </div>

      <Field label="Year level">
        <div style={{ display: "flex", gap: 8 }}>
          {(["Year 11", "Year 12"] as const).map((y) => (
            <button
              key={y} type="button" onClick={() => set("year", y)}
              style={{
                flex: 1, padding: "11px 12px", borderRadius: 12, cursor: "pointer",
                border: `1px solid ${f.year === y ? "#0A0A0A" : "rgba(10,10,10,0.18)"}`,
                background: f.year === y ? "#0A0A0A" : "#FFFCF4",
                color: f.year === y ? "#FFFCF4" : "#0A0A0A",
                fontSize: 14, fontWeight: 500,
              }}
            >
              {y}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Preferred times">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {TIMES.map((a) => {
            const on = f.avail.includes(a);
            return (
              <button
                key={a} type="button" onClick={() => toggleAvail(a)}
                style={{
                  padding: "8px 13px", borderRadius: 999, cursor: "pointer",
                  border: `1px solid ${on ? "#0A0A0A" : "rgba(10,10,10,0.18)"}`,
                  background: on ? "#0A0A0A" : "#FFFCF4",
                  color: on ? "#FFFCF4" : "#0A0A0A",
                  fontSize: 13, fontWeight: 500,
                }}
              >
                {a}
              </button>
            );
          })}
        </div>
      </Field>

      <Field label="Specific concern or goal (optional)">
        <textarea
          value={f.concern}
          onChange={(e) => set("concern", e.target.value)}
          placeholder="e.g. Currently 72 in trials, struggling with finance ratios."
          style={{ ...inp, minHeight: 80, resize: "vertical" }}
        />
      </Field>

      {error && (
        <p style={{ fontSize: 13, color: "#923333", margin: 0 }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        style={{
          fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em",
          padding: "14px 18px", borderRadius: 999,
          background: loading ? "#5C5C5C" : "#0A0A0A",
          color: "#FFFCF4", border: "none", cursor: loading ? "wait" : "pointer",
          textAlign: "center",
        }}
      >
        {loading ? "Sending…" : "Request trial lesson →"}
      </button>
    </form>
  );
}
