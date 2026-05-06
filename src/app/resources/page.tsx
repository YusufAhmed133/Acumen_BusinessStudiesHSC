import type { Metadata } from "next";
import { ResourceCard } from "@/components/sections/ResourceCard";
import { LeadForm } from "@/components/sections/LeadForm";

export const metadata: Metadata = {
  title: "Free HSC Business Studies Resources — Notes, Essays & Past Papers",
  description:
    "Free HSC Business Studies notes, essay templates, past paper analyses, and practice questions written by Band 6 graduates. Download instantly.",
  alternates: { canonical: "/resources" },
};

const resources = [
  {
    topic: "operations" as const,
    kind: "notes" as const,
    title: "Operations Management Complete Notes",
    description: "Full syllabus coverage for the Operations topic with case study examples.",
    pageCount: 28,
    isPreview: false,
  },
  {
    topic: "marketing" as const,
    kind: "notes" as const,
    title: "Marketing Complete Notes",
    description: "The marketing mix, consumer behaviour, and global marketing in full.",
    pageCount: 24,
    isPreview: false,
  },
  {
    topic: "finance" as const,
    kind: "notes" as const,
    title: "Finance Complete Notes",
    description: "Ratio analysis, financial statements, working capital, and global finance.",
    pageCount: 30,
    isPreview: false,
  },
  {
    topic: "human-resources" as const,
    kind: "notes" as const,
    title: "Human Resources Complete Notes",
    description: "Workforce planning, motivation theories, employee relations and more.",
    pageCount: 26,
    isPreview: false,
  },
  {
    topic: "operations" as const,
    kind: "case_study" as const,
    title: "2024 HSC Operations Case Study Breakdown",
    description: "Examiner-style analysis of how the 2024 exam used the Operations case study.",
    pageCount: 8,
    isPreview: true,
  },
  {
    topic: "finance" as const,
    kind: "practice_question" as const,
    title: "Ratio Analysis Practice Pack",
    description: "20 ratio analysis questions with fully worked solutions.",
    pageCount: 14,
    isPreview: true,
  },
  {
    topic: "marketing" as const,
    kind: "syllabus_summary" as const,
    title: "Marketing Syllabus Checklist",
    description: "One-page checklist of every marketing dot point with self-assessment.",
    pageCount: 4,
    isPreview: true,
  },
  {
    topic: "human-resources" as const,
    kind: "practice_question" as const,
    title: "Motivation Theory Essay Templates",
    description: "Essay scaffold templates for Maslow, Herzberg, and Taylor questions.",
    pageCount: 6,
    isPreview: true,
  },
];

const topicLabels: Record<string, string> = {
  operations: "Operations",
  marketing: "Marketing",
  finance: "Finance",
  "human-resources": "Human Resources",
};

const kindLabels: Record<string, string> = {
  notes: "Full Notes",
  case_study: "Case Study",
  past_paper: "Past Paper",
  practice_question: "Practice Q",
  syllabus_summary: "Summary",
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Free resources
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink-900 sm:text-5xl">
            Free HSC Business Studies notes.
            <br />
            Email required, no spam.
          </h1>
          <p className="mt-5 text-lg text-ink-500">
            Notes written by HSC markers, updated for the 2025–2026 syllabus.
            Download any resource by entering your email.
          </p>
        </div>
      </section>

      {/* Resource grid */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {resources.map((r) => (
            <ResourceCard
              key={r.title}
              {...r}
              topicLabel={topicLabels[r.topic] ?? r.topic}
              kindLabel={kindLabels[r.kind] ?? r.kind}
            />
          ))}
        </div>
      </section>

      {/* CTA sidebar prompt */}
      <section className="bg-brand-50 border-y border-brand-100">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink-900">
                Want these explained live?
              </h2>
              <p className="mt-2 text-base text-ink-500">
                Notes tell you what the syllabus says. Lessons show you how markers want
                it written. Book a free call to see the difference.
              </p>
            </div>
            <LeadForm source="resource_gate" compact />
          </div>
        </div>
      </section>
    </>
  );
}
