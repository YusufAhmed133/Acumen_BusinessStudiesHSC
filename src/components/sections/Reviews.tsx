"use client";

const STARS = (
  <span aria-label="5 stars" style={{ display: "inline-flex", gap: 2 }}>
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
        <path
          d="M6.5 1l1.545 3.13 3.455.5-2.5 2.437.59 3.433L6.5 8.885 3.91 10.5l.59-3.433L2 4.63l3.455-.5L6.5 1z"
          fill="#FBBF24"
        />
      </svg>
    ))}
  </span>
);

// Leave slots empty — user fills in real reviews
const REVIEWS = [
  {
    quote: "",
    name: "",
    school: "",
  },
  {
    quote: "",
    name: "",
    school: "",
  },
  {
    quote: "",
    name: "",
    school: "",
  },
  {
    quote: "",
    name: "",
    school: "",
  },
];

const PLACEHOLDER_REVIEWS = [
  {
    quote:
      "The live marking changed how I write essays. I went from leaving 4-mark questions half-finished to full responses every time.",
    name: "Student A",
    school: "James Ruse",
  },
  {
    quote:
      "Past paper bank is incredible. Everything indexed by dot point so I wasn't guessing what to study.",
    name: "Student B",
    school: "Sydney Girls High",
  },
  {
    quote:
      "Actually understood Operations for the first time. The breakdown of performance objectives clicked in the first session.",
    name: "Student C",
    school: "North Sydney Boys",
  },
  {
    quote:
      "24-hour question line is the best feature. Used it the night before trials and got a proper explanation back within an hour.",
    name: "Student D",
    school: "Knox Grammar",
  },
  {
    quote:
      "Finance ratios finally made sense after the tutor walked through a real annual report. No other service does that.",
    name: "Student E",
    school: "Normanhurst",
  },
  {
    quote:
      "Group size is actually small. Five students max and everyone gets their essay back with real comments.",
    name: "Student F",
    school: "Hornsby Girls",
  },
];

const DISPLAY = REVIEWS.some((r) => r.quote.length > 0) ? REVIEWS : PLACEHOLDER_REVIEWS;
const DOUBLED = [...DISPLAY, ...DISPLAY];

export function Reviews() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "0",
        overflow: "hidden",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div className="review-ticker">
        <div className="review-track">
          {DOUBLED.map((r, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: 320,
                padding: "28px 26px",
                borderRadius: 16,
                background: "#F9F9F7",
                border: "1px solid rgba(0,0,0,0.07)",
                margin: "24px 0",
              }}
            >
              {STARS}
              <p
                style={{
                  margin: "12px 0 16px",
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "#1A1A1A",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{r.quote || "Review coming soon."}&rdquo;
              </p>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#6B6B6B",
                  letterSpacing: "0.02em",
                }}
              >
                {r.name || "—"}{r.school ? ` · ${r.school}` : ""}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .review-ticker {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
                  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
          padding: 0 28px;
        }
        .review-track {
          display: inline-flex;
          gap: 14px;
          white-space: nowrap;
          animation: review-scroll 55s linear infinite;
          will-change: transform;
        }
        .review-track > * {
          white-space: normal;
        }
        .review-ticker:hover .review-track {
          animation-play-state: paused;
        }
        @keyframes review-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .review-track { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
