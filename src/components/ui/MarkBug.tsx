interface Props { size?: number }

export function MarkBug({ size = 28 }: Props) {
  const half = size / 2;
  const id = `mb-g-${size}`;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: "block" }} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#CFEAD9" />
          <stop offset="100%" stopColor="#CFDFF4" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={size} height={size} rx={size * 0.22} fill={`url(#${id})`} />
      <path
        d={`M ${size * 0.26} ${size * 0.78} L ${half} ${size * 0.22} L ${size * 0.74} ${size * 0.78} M ${size * 0.36} ${size * 0.60} L ${size * 0.64} ${size * 0.60}`}
        fill="none"
        stroke="#0A0A0A"
        strokeWidth={size * 0.07}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
