const REVIEWS = [
  {
    quote:
      "I was sitting on 63% coming into Term 3 and couldn't figure out why my extended responses kept dropping marks on the last two criteria. After four weeks of weekly essay marking, I scored 46/50 in my trial. The margin feedback showed me exactly which criterion I missed and why — nothing else had done that.",
    name: "Jessica Nguyen",
    label: "Year 12, 2025",
  },
  {
    quote:
      "Finance was my weakest topic because I kept confusing interpretation with analysis. Within three sessions Acumen had a system: state the ratio, compare it, explain the cause, link to a decision. That framework pushed my Finance section from around 55% to 82% by trials.",
    name: "Tom Andreou",
    label: "Year 12, 2024",
  },
  {
    quote:
      "We tried another tutor before Acumen and didn't see much change. What's different here is the structure — my son gets a marked essay back every week with a personalised improvement plan, not just a score. He went up a full band between his school assessment and the HSC.",
    name: "Sophie & David Park",
    label: "Parents, Year 12, 2025",
  },
  {
    quote:
      "I started in Year 11 so I could build good habits early. Every lesson is actual HSC-style questions — not just notes. By the time I sat my Year 11 exam I understood the marking criteria instead of just memorising content. That made a real difference when I needed to write under pressure.",
    name: "Priya Shah",
    label: "Year 11, 2025",
  },
];

const DOUBLED = [...REVIEWS, ...REVIEWS];

const STARS = (
  <span role="img" aria-label="5 stars" style={{ display: "inline-flex", gap: 2 }}>
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
      <div className="sr-only" aria-label="Student and parent reviews">
        {REVIEWS.map((r) => (
          <blockquote key={r.name}>
            <p>{r.quote}</p>
            <footer>{r.name}, {r.label}</footer>
          </blockquote>
        ))}
      </div>

      <div className="review-ticker" aria-hidden="true">
        <div className="review-track">
          {DOUBLED.map((r, i) => (
            <div
              key={`${i}-${r.name}`}
              style={{
                flexShrink: 0,
                width: 340,
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
                  lineHeight: 1.65,
                  color: "#1A1A1A",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{r.quote}&rdquo;
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#111111", letterSpacing: "-0.01em" }}>
                  {r.name}
                </span>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#9A9A9A", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                  {r.label}
                </span>
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
          animation: review-scroll 60s linear infinite;
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
