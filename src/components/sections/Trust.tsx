import Image from "next/image";

const SCHOOLS = [
  { name: "Sydney Boys High School", src: "/logos/sydney-boys.webp" },
  { name: "Sydney Girls High School", src: "/logos/sydney-girls.webp" },
  { name: "North Sydney Boys High School", src: "/logos/nsbhs.webp" },
  { name: "North Sydney Girls High School", src: "/logos/north-sydney-girls.webp" },
  { name: "Baulkham Hills High School", src: "/logos/balkaum.webp" },
  { name: "Normanhurst Boys High School", src: "/logos/normanhurst.webp" },
  { name: "Hornsby Girls High School", src: "/logos/hornsby-girls.webp" },
  { name: "Epping Boys High School", src: "/logos/epping-boys.webp" },
  { name: "Sydney Grammar School", src: "/logos/sydney-grammar.webp" },
  { name: "Knox Grammar School", src: "/logos/knox-grammar.webp" },
];

const ITEMS = [...SCHOOLS, ...SCHOOLS];

export function Trust() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "32px 0",
        overflow: "hidden",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 28px 18px",
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#6B6B6B",
            whiteSpace: "nowrap",
          }}
        >
          Trusted by students from
        </div>
        <div
          style={{
            flex: 1,
            height: 1,
            background: "rgba(0,0,0,0.08)",
          }}
        />
      </div>

      <div className="ticker">
        <div className="ticker-track">
          {ITEMS.map((s, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "0 32px",
              }}
            >
              <Image
                src={s.src}
                alt={s.name}
                title={s.name}
                width={56}
                height={36}
                style={{ width: 56, height: 36, objectFit: "contain" }}
              />
              <span style={{
                fontSize: 13,
                fontWeight: 500,
                color: "#1A1A1A",
                whiteSpace: "nowrap",
                letterSpacing: "-0.01em",
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
