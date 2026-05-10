import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { TUTOR_PROFILES, type TutorProfile } from "@/lib/tutors";

const CAROUSEL_TUTORS = [...TUTOR_PROFILES, ...TUTOR_PROFILES];

function HeadshotSlot({ tutor }: { tutor: TutorProfile }) {
  return (
    <div
      style={{
        aspectRatio: "4 / 5",
        background: tutor.tint,
        borderRadius: "8px 8px 0 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {tutor.headshot ? (
        <Image
          src={tutor.headshot}
          alt={`${tutor.name} headshot`}
          fill
          sizes="(max-width: 680px) 252px, 292px"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      ) : (
        <>
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: "50%",
              bottom: "16%",
              width: "48%",
              height: "27%",
              transform: "translateX(-50%)",
              background: tutor.accent,
              borderRadius: "54% 54% 18px 18px",
              opacity: 0.9,
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: "50%",
              bottom: "40%",
              width: "36%",
              height: "36%",
              transform: "translateX(-50%)",
              background: "rgba(255,255,255,0.72)",
              borderRadius: "48%",
              boxShadow: "0 14px 28px rgba(0,0,0,0.08)",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 14,
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: 6,
            }}
          />
          <span
            style={{
              position: "absolute",
              left: 18,
              right: 18,
              bottom: 18,
              padding: "8px 10px",
              background: "rgba(255,255,255,0.82)",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 6,
              color: "#111111",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 0,
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Headshot coming soon
          </span>
        </>
      )}
    </div>
  );
}

function TutorCard({ tutor }: { tutor: TutorProfile }) {
  return (
    <article
      style={{
        height: "100%",
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.09)",
        borderRadius: 8,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
      }}
    >
      <HeadshotSlot tutor={tutor} />
      <div style={{ padding: "18px 18px 20px", flex: 1 }}>
        <h3
          style={{
            margin: "0 0 6px",
            color: "#111111",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 0,
            lineHeight: 1.15,
          }}
        >
          {tutor.name}
        </h3>
        <p
          style={{
            margin: "0 0 14px",
            color: "#747474",
            fontSize: 13,
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          {tutor.course}
        </p>
        {tutor.bio ? (
          <p
            style={{
              margin: 0,
              color: "#3D3D3D",
              fontSize: 13.5,
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            {tutor.bio}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export function TutorShowcase() {
  return (
    <section
      id="tutors"
      style={{
        background: "#ffffff",
        padding: "96px 0 104px",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
        <Reveal>
          <div style={{ marginBottom: 36 }}>
            <h2
              style={{
                margin: 0,
                color: "#111111",
                fontSize: "clamp(32px, 3.8vw, 56px)",
                fontWeight: 700,
                letterSpacing: 0,
                lineHeight: 1.05,
              }}
            >
              Tutors
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div
            style={{
              overflow: "hidden",
              padding: "6px 0 18px",
            }}
            aria-label="Tutor carousel"
            className="tutor-carousel"
          >
            <div className="tutor-track">
              {CAROUSEL_TUTORS.map((tutor, i) => (
                <div key={`${i}-${tutor.tint}`} className="tutor-slide">
                  <TutorCard tutor={tutor} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .tutor-carousel {
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
                  mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
        }
        .tutor-track {
          display: inline-flex;
          gap: 18px;
          width: max-content;
          animation: tutor-scroll 42s linear infinite;
          will-change: transform;
        }
        .tutor-carousel:hover .tutor-track {
          animation-play-state: paused;
        }
        .tutor-slide {
          width: 292px;
          flex: 0 0 292px;
        }
        @keyframes tutor-scroll {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(calc(-50% - 9px), 0, 0); }
        }
        @media (max-width: 680px) {
          .tutor-slide {
            width: 252px;
            flex-basis: 252px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .tutor-carousel {
            overflow-x: auto;
            -webkit-mask-image: none;
                    mask-image: none;
          }
          .tutor-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
