import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

export function Reveal({ children, delay = 0 }: Props) {
  return (
    <div
      className="reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
