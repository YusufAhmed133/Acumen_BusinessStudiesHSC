import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Tutors | Acumen HSC",
  description:
    "Meet the Band 6 Business Studies graduates who teach at Acumen HSC. UNSW, USYD, UTS and Macquarie students with top ATARs and proven HSC results.",
  alternates: { canonical: "/tutors" },
};

type Achievement = {
  rank: string;
  subject: string;
  context: string;
};

type Tutor = {
  name: string;
  role?: string;
  photo: string | null;
  university: string;
  course: string;
  atar: string;
  bandBusiness: number;
  bio: string;
  achievements: Achievement[];
};

const TUTORS: Tutor[] = [
  {
    name: "Tutor Name",
    role: "Lead Tutor",
    photo: null,
    university: "UNSW",
    course: "B. Commerce (Finance)",
    atar: "99.xx",
    bandBusiness: 6,
    bio: "Bio coming soon — send through your details and we'll fill this in.",
    achievements: [
      { rank: "Band 6", subject: "Business Studies", context: "HSC 2024" },
      { rank: "99+ ATAR", subject: "", context: "2024" },
    ],
  },
];

function InitialPlaceholder({ name }: { name: string }) {
  const initials = name.split(" ").map((w) => w[0] ?? "").join("").slice(0, 2).toUpperCase();
  return (
    <div
      aria-hidden
      style={{
        width: "100%",
        aspectRatio: "3 / 4",
        background: "linear-gradient(160deg, #C9EFD3 0%, #CFDFF4 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 56,
        fontWeight: 700,
        letterSpacing: "-0.04em",
        color: "rgba(30,75,153,0.35)",
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
        border: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.07)",
        borderRadius: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Photo with ATAR badge */}
      <div style={{ position: "relative" }}>
        {t.photo ? (
          <div style={{ position: "relative", aspectRatio: "3 / 4" }}>
            <Image
              src={t.photo}
              alt={`${t.name}, Acumen HSC tutor`}
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw"
            />
          </div>
        ) : (
          <InitialPlaceholder name={t.name} />
        )}

        {/* ATAR badge */}
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "#111111",
            color: "#C9EFD3",
            borderRadius: 999,
            padding: "6px 14px",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
          }}
        >
          {t.atar} ATAR
        </div>

        {/* Role label if provided */}
        {t.role && (
          <div
            style={{
              position: "absolute",
              bottom: 14,
              left: 14,
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              borderRadius: 6,
              padding: "4px 10px",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#111111",
            }}
          >
            {t.role}
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", gap: 0, flex: 1 }}>
        <h2 style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-0.03em", color: "#111111", margin: "0 0 3px" }}>
          {t.name}
        </h2>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#5C5C5C", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 14 }}>
          {t.university} &ndash; {t.course}
        </div>

        {/* Achievement chips */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
          <span
            style={{
              padding: "4px 11px", borderRadius: 999,
              background: "#C9EFD3", color: "#0E3A1C",
              fontSize: 11, fontWeight: 700, letterSpacing: "0.04em",
            }}
          >
            Band {t.bandBusiness} Business Studies
          </span>
          {t.achievements.map((a, i) => (
            <span
              key={i}
              style={{
                padding: "4px 11px", borderRadius: 999,
                background: "#F0F0EE", color: "#3A3A3A",
                fontSize: 11, fontWeight: 600, letterSpacing: "0.02em",
              }}
            >
              {a.rank}{a.subject ? ` in ${a.subject}` : ""}{a.context ? ` (${a.context})` : ""}
            </span>
          ))}
        </div>

        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: "#3A3A3A", flex: 1 }}>
          {t.bio}
        </p>
      </div>
    </article>
  );
}

export default function TutorsPage() {
  const cols = TUTORS.length === 1 ? 1 : TUTORS.length === 2 ? 2 : TUTORS.length <= 4 ? 4 : 3;

  return (
    <main style={{ background: "#ffffff", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "radial-gradient(ellipse at 10% 50%, rgba(201,239,211,0.2) 0%, transparent 55%), #ffffff",
          padding: "88px 0 80px",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#5C5C5C", margin: "0 0 18px" }}>
            Acumen HSC
          </p>
          <h1
            style={{
              fontWeight: 700,
              fontSize: "clamp(40px, 5.5vw, 76px)",
              lineHeight: 1.03,
              letterSpacing: "-0.04em",
              color: "#111111",
              margin: "0 0 22px",
              maxWidth: 600,
            }}
          >
            Meet your tutors
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#3D3D3D", margin: "0 0 36px", maxWidth: 500, fontWeight: 400 }}>
            Every Acumen tutor scored Band 6 in Business Studies and is currently studying at a Group of Eight university. They sat the same exams your student is preparing for.
          </p>
          <Link
            href="/#enquire"
            style={{
              display: "inline-block", padding: "13px 28px", borderRadius: 999,
              background: "#C9EFD3", color: "#0A2E1A",
              textDecoration: "none", fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em",
            }}
          >
            Book a free trial lesson →
          </Link>
        </div>
      </section>

      {/* Tutor cards */}
      <section style={{ padding: "80px 0 112px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gap: 24,
              alignItems: "start",
            }}
            className="tutors-grid"
          >
            {TUTORS.map((t) => (
              <TutorCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA bar */}
      <section
        style={{
          background: "#111111",
          padding: "56px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1320, margin: "0 auto", padding: "0 28px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 24, flexWrap: "wrap",
          }}
        >
          <div>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.04em", color: "#ffffff", margin: "0 0 6px" }}>
              Learn directly from a Band 6 graduate
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", margin: 0 }}>
              First lesson is free. No card required.
            </p>
          </div>
          <Link
            href="/#enquire"
            style={{
              display: "inline-block", padding: "14px 28px", borderRadius: 999,
              background: "#C9EFD3", color: "#0A2E1A",
              textDecoration: "none", fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
            }}
          >
            Book a free trial lesson →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) {
          .tutors-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 760px) {
          .tutors-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .tutors-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
