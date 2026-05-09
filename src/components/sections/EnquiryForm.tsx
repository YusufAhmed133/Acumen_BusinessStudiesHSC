"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@vercel/analytics";

type Fields = {
  parent: string;
  student: string;
  email: string;
  phone: string;
  year: "Year 11" | "Year 12";
  avail: string;
  concern: string;
};

const inp: React.CSSProperties = {
  width: "100%",
  padding: "12px 13px",
  borderRadius: 10,
  border: "1px solid rgba(0,0,0,0.12)",
  fontSize: 14,
  background: "#F9F9F7",
  outline: "none",
  color: "#111111",
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
    year: "Year 12", avail: "", concern: "",
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) =>
    setF((s) => ({ ...s, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const message = [
        f.student ? `Student: ${f.student}` : "",
        f.avail ? `Preferred times: ${f.avail}` : "",
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
      track('enquiry_submitted', { year_group: f.year });
      router.push('/thank-you');
    } catch {
      setError("Something went wrong. Please call us on 0470 665 141.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      borderRadius: 20,
      padding: "28px 26px",
      background: "#ffffff",
      boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
      border: "1px solid rgba(0,0,0,0.08)",
      display: "grid",
      gap: 14,
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

      <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
        <legend style={{
          fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
          color: "#5C5C5C", fontWeight: 600, marginBottom: 5, padding: 0,
        }}>
          Year level
        </legend>
        <div style={{ display: "flex", gap: 8 }}>
          {(["Year 11", "Year 12"] as const).map((y) => (
            <button
              key={y} type="button" onClick={() => set("year", y)}
              aria-pressed={f.year === y}
              style={{
                flex: 1, padding: "11px 12px", borderRadius: 12, cursor: "pointer",
                border: `1px solid ${f.year === y ? "#111111" : "rgba(0,0,0,0.14)"}`,
                background: f.year === y ? "#111111" : "#ffffff",
                color: f.year === y ? "#ffffff" : "#111111",
                fontSize: 14, fontWeight: 500,
              }}
            >
              {y}
            </button>
          ))}
        </div>
      </fieldset>

      <Field label="Preferred times">
        <input
          value={f.avail}
          onChange={(e) => set("avail", e.target.value)}
          placeholder="e.g. Weekday evenings, Saturday mornings"
          style={inp}
        />
      </Field>

      <Field label="What are you working on? (optional)">
        <textarea
          value={f.concern}
          onChange={(e) => set("concern", e.target.value)}
          placeholder="e.g. Currently 72 in trials, struggling with finance ratios."
          style={{ ...inp, minHeight: 88, resize: "vertical" }}
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
          background: loading ? "#6B6B6B" : "#C9EFD3",
          color: loading ? "#ffffff" : "#0A2E1A", border: "none", cursor: loading ? "wait" : "pointer",
          textAlign: "center",
        }}
      >
        {loading ? "Sending..." : "Book a free trial lesson →"}
      </button>
    </form>
  );
}
