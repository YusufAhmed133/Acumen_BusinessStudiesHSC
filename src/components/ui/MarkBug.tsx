interface Props { size?: number }

// Four-quadrant diamond: each quarter = one HSC topic (ops/mkt/fin/hr).
// Diamond apex = sharpness of mind (Latin: acumen = sharp point).
// The syllabus is literally the mark.
export function MarkBug({ size = 32 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      style={{ display: "block" }}
      aria-hidden
    >
      {/* Top-left quadrant — Operations mint */}
      <polygon points="50,4 8,60 50,60" fill="#C9EFD3" />
      {/* Top-right quadrant — Marketing butter */}
      <polygon points="50,4 92,60 50,60" fill="#FDE9B0" />
      {/* Bottom-left quadrant — Finance sky */}
      <polygon points="50,60 8,60 50,116" fill="#C9DCFB" />
      {/* Bottom-right quadrant — HR blush */}
      <polygon points="50,60 92,60 50,116" fill="#FBD3D7" />
      {/* Division lines — crisp white hairlines */}
      <line x1="50" y1="4" x2="50" y2="116" stroke="#fff" strokeWidth="2.5" />
      <line x1="8" y1="60" x2="92" y2="60" stroke="#fff" strokeWidth="2.5" />
      {/* Diamond outline */}
      <polygon
        points="50,4 92,60 50,116 8,60"
        fill="none"
        stroke="#111111"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
