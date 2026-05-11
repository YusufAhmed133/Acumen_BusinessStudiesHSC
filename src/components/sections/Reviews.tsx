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

const REVIEWS = [
  {
    quote:
      "My daughter was struggling to turn Business Studies content into proper exam responses. Acumen helped her understand how to structure her answers and use the syllabus more clearly. The feedback on her practice responses was especially useful because she knew exactly what to improve before her next assessment.",
    name: "Chloe C.",
    school: "Parent of Year 12 student",
  },
  {
    quote:
      "Acumen made Business Studies feel much more manageable. The lessons were clear, and the practice questions helped me understand what the markers were actually looking for. The response feedback was probably the most helpful part because it showed me where I was being too vague.",
    name: "Divya A.",
    school: "Year 12 student",
  },
  {
    quote:
      "The free trial was well organised and gave us a clear idea of what our child needed to work on. It was focused on actual HSC-style questions rather than just going through notes, which we appreciated.",
    name: "Rohan B.",
    school: "Parent of Year 11 student",
  },
  {
    quote:
      "I was already doing okay in Business Studies but wanted to push into the top band. Acumen helped me make my answers more specific and more linked to the syllabus. The marked practice responses were really helpful because the feedback was clear and easy to apply.",
    name: "Sofia F.",
    school: "Year 12 student",
  },
  {
    quote:
      "We noticed a big improvement in our son's confidence after starting Business Studies tutoring with Acumen. He had a better routine each week and was getting detailed feedback on his extended responses, which made a real difference before his trials.",
    name: "Matthew B.",
    school: "Parent of Year 12 student",
  },
  {
    quote:
      "Finance was the topic I found hardest, but the explanations and practice questions made it much easier to approach. I felt a lot more prepared after going through past HSC questions in class.",
    name: "Olivia P.",
    school: "Year 12 student",
  },
];

const DOUBLED = [...REVIEWS, ...REVIEWS];

export function Reviews() {
  return (
    <section
      id="reviews"
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
              aria-hidden={i >= REVIEWS.length}
              style={{
                flexShrink: 0,
                width: "min(320px, calc(100vw - 56px))",
                boxSizing: "border-box",
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
                &ldquo;{r.quote}&rdquo;
              </p>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#6B6B6B",
                  letterSpacing: "0.02em",
                }}
              >
                {r.name}
                {r.school ? ` · ${r.school}` : ""}
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
          .review-track > :nth-child(n+7) { display: none !important; }
        }
      `}</style>
    </section>
  );
}
