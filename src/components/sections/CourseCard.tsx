import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
  slug: string;
  title: string;
  description: string;
  weight: string;
  icon: string;
}

export function CourseCard({ slug, title, description, weight, icon }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${slug}`}
      className="group flex flex-col rounded-xl border border-border bg-surface-raised p-5 shadow-xs transition-all hover:border-brand-600 hover:shadow-md"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-2xl" role="img" aria-label={title}>
          {icon}
        </span>
        <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-600">
          {weight}
        </span>
      </div>
      <h3 className="font-display text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{description}</p>
      <p className="mt-4 flex items-center gap-1 text-xs font-medium text-brand-600 transition-colors group-hover:text-brand-800">
        Explore topic
        <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
      </p>
    </Link>
  );
}
