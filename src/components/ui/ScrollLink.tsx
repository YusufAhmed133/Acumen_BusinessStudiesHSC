"use client";

export function ScrollLink({
  sectionId,
  children,
  style,
  className,
  onNavigate,
}: {
  sectionId: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onNavigate?: () => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById(sectionId);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
    onNavigate?.();
  };

  return (
    <a href={`/#${sectionId}`} onClick={handleClick} style={style} className={className}>
      {children}
    </a>
  );
}
