import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Tutors | Acumen HSC",
  description:
    "Meet the Band 6 Business Studies graduates who teach at Acumen HSC. UNSW, USYD, UTS and Macquarie students with top ATARs and real HSC experience.",
  alternates: { canonical: "/tutors" },
};

type Tutor = {
  name: string;
  photo: string | null;
  university: string;
  course: string;
  atar: string;
  bandBusiness: number;
  bio: string;
};

const TUTORS: Tutor[] = [
  {
    name: "Tutor 1",
    photo: null,
    university: "University",
    course: "Course",
    atar: "99.xx",
    bandBusiness: 6,
    bio: "Bio coming soon.",
  },
];

function PhotoPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      aria-hidden
      style={{
        width: "100%",
        aspectRatio: "3 / 4",
        background: "linear-gradient(135deg, #C9EFD3 0%, #A8C8FC 100%)",
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 52,
        fontWeight: 700,
        letterSpacing: "-0.04em",
        color: "#1B6038",
      }}
    >
      {initials}
    </div>
  );
}

function TutorCard({ t }: { t: Tutor }) {
  return (
    <article
      style={{
        background: "#ffffff",
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {t.photo ? (
        <div style={{ position: "relative", aspectRatio: "3 / 4" }}>
          <Image
            src={t.photo}
            alt={`Photo of ${t.name}`}
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
          />
        </div>
      ) : (
        <PhotoPlaceholder name={t.name} />
      )}

      <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column", gap: 0 }}>
        <h2
          style={{
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: "-0.03em",
            color: "#111111",
            margin: "0 0 4px",
          }}
        >
          {t.name}
        </h2>

        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#5C5C5C",
            marginBottom: 16,
            letterSpacing: "-0.01em",
          }}
        >
          {t.university}, {t.course}
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            marginBottom: 18,
          }}
        >
          <span
            style={{
              padding: "5px 12px",
              borderRadius: 999,
              background: "#C9EFD3",
              color: "#0E3A1C",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            ATAR {t.atar}
          </span>
          <span
            style={{
              padding: "5px 12px",
              borderRadius: 999,
              background: "#CFDFF4",
              color: "#0F2E5C",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            Band {t.bandBusiness} Business Studies
          </span>
        </div>

        <p
          style={{
            margin: 0,
            fontSize: 14,
            lineHeight: 1.65,
            color: "#3A3A3A",
            flex: 1,
          }}
        >
          {t.bio}
        </p>
      </div>
    </article>
  );
}

export default function TutorsPage() {
  return (
    <main style={{ background: "#ffffff", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "radial-gradient(ellipse at 0% 60%, rgba(201,239,211,0.18) 0%, transparent 52%), #ffffff",
          padding: "80px 0 72px",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#5C5C5C",
              margin: "0 0 18px",
            }}
          >
            Acumen HSC
          </p>
          <h1
            style={{
              fontWeight: 700,
              fontSize: "clamp(36px, 5vw, 72px)",
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
              color: "#111111",
              margin: "0 0 20px",
              maxWidth: 640,
            }}
          >
            Meet your tutors
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "#3D3D3D",
              margin: "0 0 36px",
              maxWidth: 520,
            }}
          >
            Every tutor at Acumen is a Band 6 Business Studies graduate studying at a Group of Eight university. No marking clerks, no offshore contractors.
          </p>
          <Link
            href="/#enquire"
            style={{
              display: "inline-block",
              padding: "13px 26px",
              borderRadius: 999,
              background: "#C9EFD3",
              color: "#0A2E1A",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Book a free trial lesson →
          </Link>
        </div>
      </section>

      {/* Tutor grid */}
      <section style={{ padding: "80px 0 104px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
            className="tutors-grid"
          >
            {TUTORS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <TutorCard t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) {
          .tutors-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 760px) {
          .tutors-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .tutors-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
