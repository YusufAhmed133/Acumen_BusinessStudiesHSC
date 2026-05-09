import { Reveal } from "@/components/ui/Reveal";
import { ScrollLink } from "@/components/ui/ScrollLink";

const INCLUSIONS = [
  {
    t: "1.5-hour weekly lesson",
    d: "Small group capped at 4. Live syllabus walkthrough plus timed practice every session.",
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


function PriceCard({
  tag,
  tagColor,
  tagBg,
  hourlyRate,
  sessionPrice,
  termPrice,
  termSave,
}: {
  tag: string;
  tagColor: string;
  tagBg: string;
  hourlyRate: string;
  sessionPrice: string;
  termPrice: string;
  termSave: string;
}) {
  return (
    <div
      style={{
        borderRadius: 18,
        border: "1.5px solid rgba(0,0,0,0.1)",
        overflow: "hidden",
        background: "#ffffff",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
      }}
    >
      {/* Tag */}
      <div
        style={{
          padding: "9px 20px",
          background: tagBg,
          borderBottom: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: tagColor,
          }}
        >
          {tag}
        </span>
      </div>

      {/* Hourly rate — lead */}
      <div style={{ padding: "14px 20px 12px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <span
          style={{
            fontWeight: 700,
            fontSize: "clamp(36px, 4vw, 52px)",
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            color: "#111111",
            display: "block",
          }}
        >
          {hourlyRate}
        </span>
        <div style={{ marginTop: 6, fontSize: 12, fontWeight: 500, color: "#6B6B6B" }}>
          90-minute sessions
        </div>
        <div style={{ fontSize: 12, fontWeight: 500, color: "#6B6B6B" }}>
          {sessionPrice} per session
        </div>
      </div>

      {/* Upfront term */}
      <div
        style={{
          padding: "12px 20px 14px",
          background: "#F4FCF7",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 6,
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
            Upfront · 10 sessions
          </div>
          <div
            style={{
              padding: "3px 9px",
              borderRadius: 999,
              background: "#C9EFD3",
              fontSize: 10,
              fontWeight: 700,
              color: "#1B6038",
              letterSpacing: "0.02em",
            }}
          >
            Save {termSave}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
          <span
            style={{
              fontWeight: 700,
              fontSize: "clamp(28px, 3vw, 38px)",
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
              color: "#111111",
            }}
          >
            {termPrice}
          </span>
          <span style={{ fontSize: 12, fontWeight: 500, color: "#6B6B6B" }}>/ term</span>
        </div>
        <div style={{ marginTop: 5, fontSize: 11.5, fontWeight: 500, color: "#3A3A3A" }}>
          Pay for 9 sessions, receive 10.
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "12px 20px" }}>
        <ScrollLink
          sectionId="enquire"
          style={{
            display: "block",
            textAlign: "center",
            padding: "11px 20px",
            borderRadius: 10,
            background: "#C9EFD3",
            color: "#0A2E1A",
            textDecoration: "none",
            fontSize: 13.5,
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          Book a free trial lesson →
        </ScrollLink>
        <div
          style={{
            marginTop: 6,
            fontSize: 11,
            fontWeight: 500,
            color: "#6B6B6B",
            textAlign: "center",
          }}
        >
          No card required. First lesson is free.
        </div>
      </div>
    </div>
  );
}

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
            HSC Business Studies Tutoring Pricing
          </h2>
        </Reveal>

        {/* Two cards side by side */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 56 }}
          className="pricing-cards"
        >
          <Reveal>
            <PriceCard
              tag="Small Group · Max 4 Students"
              tagBg="#F0FAF3"
              tagColor="#1B6038"
              hourlyRate="$80/hr"
              sessionPrice="$120"
              termPrice="$1,080"
              termSave="$120"
            />
          </Reveal>
          <Reveal delay={80}>
            <PriceCard
              tag="Private 1:1"
              tagBg="#F9F9F7"
              tagColor="#3A3A3A"
              hourlyRate="$100/hr"
              sessionPrice="$150"
              termPrice="$1,350"
              termSave="$150"
            />
          </Reveal>
        </div>

        {/* Inclusions full-width grid */}
        <Reveal delay={140}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#6B6B6B",
              marginBottom: 24,
            }}
          >
            Everything included
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0 32px" }}
            className="inclusions-grid"
          >
            {INCLUSIONS.map((v) => (
              <div
                key={v.t}
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.08)",
                  paddingTop: 20,
                }}
              >
                <div style={{ marginBottom: 8 }}>
                  <CheckIcon />
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 14,
                    letterSpacing: "-0.015em",
                    color: "#111111",
                    marginBottom: 6,
                  }}
                >
                  {v.t}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 12.5,
                    lineHeight: 1.55,
                    color: "#3A3A3A",
                  }}
                >
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-cards { grid-template-columns: 1fr !important; }
          .inclusions-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .inclusions-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
