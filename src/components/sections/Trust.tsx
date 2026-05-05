"use client";
const SCHOOLS = [
  { name: "James Ruse Agricultural High School", src: "https://upload.wikimedia.org/wikipedia/en/d/df/James_Ruse_Agricultural_High_School_logo.png" },
  { name: "Sydney Boys High School", src: "https://upload.wikimedia.org/wikipedia/en/0/04/Sydney_Boys_High_School_crest.png" },
  { name: "Sydney Girls High School", src: "https://upload.wikimedia.org/wikipedia/en/8/8f/Sydneygirlshighschoolcrest.jpg" },
  { name: "North Sydney Boys High School", src: "https://upload.wikimedia.org/wikipedia/en/d/de/North_Sydney_Boys_High_School_crest.png" },
  { name: "North Sydney Girls High School", src: "https://upload.wikimedia.org/wikipedia/en/9/9a/Nsghs_crest.png" },
  { name: "Baulkham Hills High School", src: "https://upload.wikimedia.org/wikipedia/en/2/2a/Baulkham_Hills_High_School_crest.png" },
  { name: "Normanhurst Boys High School", src: "https://upload.wikimedia.org/wikipedia/en/2/2f/Normanhurstboyscrest.gif" },
  { name: "Hornsby Girls High School", src: "https://upload.wikimedia.org/wikipedia/en/4/45/HornsbyGirlsHighSchoolCrest.png" },
  { name: "Fort Street High School", src: "https://upload.wikimedia.org/wikipedia/en/0/01/Fort_Street_High_School_crest.png" },
  { name: "Sydney Grammar School", src: "https://upload.wikimedia.org/wikipedia/en/d/d3/Sydney_Grammar_School_arms.png" },
  { name: "Knox Grammar School", src: "https://upload.wikimedia.org/wikipedia/en/9/97/Knox_Grammar_School_crest.png" },
  { name: "PLC Sydney", src: "https://upload.wikimedia.org/wikipedia/en/5/55/PLC_Sydney_crest.png" },
  { name: "SCEGGS Darlinghurst", src: "https://upload.wikimedia.org/wikipedia/en/f/fc/SCEGGS_Darlinghurst_crest.png" },
  { name: "Trinity Grammar School", src: "https://upload.wikimedia.org/wikipedia/en/8/8a/TrinityGrammarSchoolSydneyCrest.png" },
];

const ITEMS = [...SCHOOLS, ...SCHOOLS];

export function Trust() {
  return (
    <section style={{ background: "radial-gradient(ellipse at 25% 50%, rgba(31,107,64,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(42,79,148,0.12) 0%, transparent 55%), #0D0D0D", padding: "42px 0", overflow: "hidden" }}>
      <div style={{
        maxWidth: 1320,
        margin: "0 auto",
        padding: "0 28px 22px",
        display: "flex",
        alignItems: "baseline",
        gap: 14,
      }}>
        <div style={{
          fontSize: 11, fontWeight: 600, letterSpacing: "0.22em",
          textTransform: "uppercase", color: "#FBE6BD", whiteSpace: "nowrap",
        }}>
          Tutoring students from
        </div>
        <div style={{ flex: 1, height: 1, background: "rgba(255,252,244,0.12)" }} />
      </div>

      <div className="ticker">
        <div className="ticker-track">
          {ITEMS.map((s, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 14, padding: "4px 14px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                alt={s.name}
                style={{
                  height: 52,
                  width: "auto",
                  maxWidth: 78,
                  objectFit: "contain",
                  filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.35))",
                }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <span style={{
                fontSize: 14, fontWeight: 500, color: "#FFFCF4",
                letterSpacing: "-0.005em", whiteSpace: "nowrap",
              }}>
                {s.name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
