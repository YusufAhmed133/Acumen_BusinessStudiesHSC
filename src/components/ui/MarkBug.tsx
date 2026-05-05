interface Props { size?: number }

export function MarkBug({ size = 28 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ display: "block" }}
      aria-hidden
    >
      {/* Green circle — primary brand colour */}
      <circle cx="50" cy="50" r="50" fill="#1F6B40" />
      {/*
        Single-story geometric "a":
        Stem from (67,30) down to (67,43), then bowl arcing
        sweep=1 (visually CCW) so the bowl opens to the LEFT,
        centre sits at ~(48,52), creating the correct "a" shape.
      */}
      <path
        d="M 67 30 L 67 43 A 20 20 0 1 1 67 61"
        fill="none"
        stroke="#FFFCF4"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
