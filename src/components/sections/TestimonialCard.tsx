interface TestimonialCardProps {
  quote: string;
  name: string;
  school: string;
  result: string;
}

export function TestimonialCard({ quote, name, school, result }: TestimonialCardProps) {
  return (
    <figure className="flex flex-col rounded-xl border border-border bg-surface-raised p-6 shadow-xs">
      <div className="mb-3 text-accent-500 text-sm font-medium">★★★★★</div>
      <blockquote className="flex-1 text-sm leading-relaxed text-ink-700">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 border-t border-border pt-4">
        <p className="text-sm font-semibold text-ink-900">{name}</p>
        <p className="text-xs text-ink-500">{school}</p>
        <p className="mt-1 text-xs font-medium text-brand-600">{result}</p>
      </figcaption>
    </figure>
  );
}
