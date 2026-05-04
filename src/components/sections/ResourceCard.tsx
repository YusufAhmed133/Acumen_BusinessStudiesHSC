import { FileText, Lock, Download } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  topicLabel: string;
  kindLabel: string;
  pageCount: number;
  isPreview: boolean;
}

export function ResourceCard({
  title,
  description,
  topicLabel,
  kindLabel,
  pageCount,
  isPreview,
}: ResourceCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-surface-raised p-5 shadow-xs">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1">
          <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-600">
            {topicLabel}
          </span>
          <span className="rounded-full bg-surface-sunken px-2 py-0.5 text-xs font-medium text-ink-500">
            {kindLabel}
          </span>
        </div>
        <FileText size={16} className="shrink-0 text-ink-300" aria-hidden="true" />
      </div>

      <h3 className="font-display text-sm font-semibold text-ink-900 leading-snug">
        {title}
      </h3>
      <p className="mt-1.5 flex-1 text-xs leading-relaxed text-ink-500">
        {description}
      </p>

      <p className="mt-3 text-xs text-ink-300">{pageCount} pages</p>

      <div className="mt-4">
        {isPreview ? (
          <button
            type="button"
            className="flex w-full items-center justify-center gap-1.5 rounded-md bg-accent-500 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-accent-600"
            aria-label={`Download ${title} — email required`}
          >
            <Download size={13} aria-hidden="true" />
            Download free
          </button>
        ) : (
          <div className="flex items-center gap-1.5 text-xs text-ink-400">
            <Lock size={12} aria-hidden="true" />
            <span>For enrolled students</span>
          </div>
        )}
      </div>
    </div>
  );
}
