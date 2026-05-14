import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PRICING_PLANS, type PricingPlan } from "@/lib/pricing";
import { SECTION_ROUTE_MAP } from "@/lib/section-routes";

const INCLUSIONS = [
  {
    t: "Weekly lesson",
    d: "1-hour lesson, small group capped at 4. Live syllabus walkthrough plus timed practice every session.",
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
    d: "Every Section I, II, III and IV question in the 2022-2025 bank, indexed by syllabus dot point.",
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
  plan,
}: {
  plan: PricingPlan;
}) {
  return (
    <div
      className="price-card"
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
          background: plan.tagBg,
          borderBottom: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: plan.tagColor,
          }}
        >
          {plan.tag}
        </span>
      </div>

      {/* Weekly price */}
      <div style={{ padding: "18px 20px 16px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B6B6B", marginBottom: 9 }}>
          Pay weekly
        </div>
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
          {plan.sessionPrice}
        </span>
        <div style={{ marginTop: 6, fontSize: 12, fontWeight: 500, color: "#6B6B6B" }}>
          {plan.sessionUnit}
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
            Term option
          </div>
          <span
            className="price-save-badge"
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#1B6038",
              background: "#C9EFD3",
              padding: "4px 8px",
              borderRadius: 999,
            }}
          >
            Save {plan.termSave}
          </span>
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
            {plan.termPrice}
          </span>
          <span style={{ fontSize: 12, fontWeight: 500, color: "#6B6B6B" }}>/ term</span>
        </div>
        <div style={{ marginTop: 5, fontSize: 11.5, fontWeight: 500, color: "#3A3A3A" }}>
          {plan.termSummary}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "12px 20px" }}>
        <Link
          href={SECTION_ROUTE_MAP.enquire.href}
          prefetch={false}
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
        </Link>
        <div
          style={{
            marginTop: 6,
            fontSize: 11,
            fontWeight: 500,
            color: "#6B6B6B",
            textAlign: "center",
          }}
        >
          First lesson free. No card. No lock-in.
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
            className="pricing-h2"
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
          {PRICING_PLANS.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 80}>
              <PriceCard plan={plan} />
            </Reveal>
          ))}
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
        @media (max-width: 860px) {
          .pricing-h2 { font-size: clamp(28px, 8vw, 42px) !important; margin-bottom: 28px !important; }
          .pricing-cards { gap: 14px !important; }
          .price-card { border-radius: 14px !important; }
          .price-card > div:nth-child(1) { padding: 7px 16px !important; }
          .price-card > div:nth-child(2) { padding: 14px 16px 12px !important; }
          .price-card > div:nth-child(3) { padding: 10px 16px 12px !important; }
          .price-card > div:nth-child(4) { padding: 10px 16px 12px !important; }
          .price-save-badge { font-size: 9px !important; padding: 3px 6px !important; }
          .inclusions-grid { grid-template-columns: 1fr 1fr !important; gap: 0 20px !important; }
          .inclusions-grid > div { padding-top: 16px !important; }
        }
        @media (max-width: 560px) {
          .inclusions-grid { grid-template-columns: 1fr !important; }
          .inclusions-grid > div { padding-top: 14px !important; }
          .inclusions-grid p { font-size: 12px !important; }
        }
        @media (max-width: 480px) {
          .inclusions-grid { grid-template-columns: 1fr !important; }
          .inclusions-grid > div { padding-top: 14px !important; }
        }
      `}</style>
    </section>
  );
}
