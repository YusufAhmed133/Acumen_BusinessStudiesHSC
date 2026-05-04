import type { Metadata } from "next";
import { CourseCard } from "@/components/sections/CourseCard";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "HSC Business Studies tutoring for all four topics: Operations, Marketing, Finance, and Human Resources.",
};

const courses = [
  {
    slug: "operations",
    title: "Operations",
    description:
      "Supply chain management, quality management (TQM, quality assurance, control), lean production, technology, and global operations strategies.",
    weight: "~25%",
    icon: "⚙️",
  },
  {
    slug: "marketing",
    title: "Marketing",
    description:
      "The marketing process, market research, consumer behaviour, marketing strategies (price, product, place, promotion), and global marketing approaches.",
    weight: "~25%",
    icon: "📊",
  },
  {
    slug: "finance",
    title: "Finance",
    description:
      "Financial statements, ratio analysis, working capital management, cash flow management, and global financial management.",
    weight: "~25%",
    icon: "💹",
  },
  {
    slug: "human-resources",
    title: "Human Resources",
    description:
      "Workforce planning, recruitment and selection, training and development, motivation theories, performance management, and industrial relations.",
    weight: "~25%",
    icon: "👥",
  },
];

export default function CoursesPage() {
  return (
    <>
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              HSC Business Studies
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-ink-900 sm:text-5xl">
              The four HSC topics, taught the way they&apos;re marked.
            </h1>
            <p className="mt-5 text-lg text-ink-500">
              Each module is taught by a tutor who has marked that topic for NESA.
              You learn what the marker wants to see — not just what the syllabus says.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((c) => (
              <CourseCard key={c.slug} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* How courses are structured */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-ink-900">
          How every lesson is structured
        </h2>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-ink-700">
          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">
              1
            </span>
            <div>
              <p className="font-semibold text-ink-900">Warm-up question (10 min)</p>
              <p className="mt-1 text-ink-500">
                A past-paper style question from the previous lesson. We mark it live.
                You see immediately where your answer diverges from the marking criteria.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">
              2
            </span>
            <div>
              <p className="font-semibold text-ink-900">Concept delivery (40 min)</p>
              <p className="mt-1 text-ink-500">
                New syllabus content taught through case studies and real exam examples.
                We show the vocabulary markers expect and the sentence structures that get full marks.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">
              3
            </span>
            <div>
              <p className="font-semibold text-ink-900">Extended practice (35 min)</p>
              <p className="mt-1 text-ink-500">
                Students attempt a Section II or Section III style question. Timer running.
                No notes. We collect and mark with written feedback returned within 48 hours.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">
              4
            </span>
            <div>
              <p className="font-semibold text-ink-900">Debrief + next lesson preview (5 min)</p>
              <p className="mt-1 text-ink-500">
                Summary of what was covered, what to review before the next session,
                and a preview of next lesson&apos;s topic.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
