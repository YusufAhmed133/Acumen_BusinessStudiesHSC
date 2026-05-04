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
      <circle cx="50" cy="50" r="50" fill="#0A0A0A" />
      {/* Single-story geometric "a": stem descending to bowl junction, bowl arcing CCW */}
      <path
        d="M 67 30 L 67 43 A 20 20 0 1 0 67 61"
        fill="none"
        stroke="#FFFCF4"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
