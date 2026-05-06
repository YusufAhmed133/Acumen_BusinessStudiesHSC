import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/sections/LeadForm";

const TOPICS = {
  operations: {
    title: "Operations",
    icon: "⚙️",
    tagline: "The topic every Section III essay asks about.",
    description:
      "Operations covers how a business transforms inputs into outputs. In the HSC, this means understanding the role of operations, supply chain, technology, quality management, and global strategies — and being able to apply them to any business in 8–20 mark responses.",
    syllabusPoints: [
      "Role of operations management",
      "Influences on operations management",
      "Operations processes: inputs, transformation, outputs",
      "Supply chain management",
      "Quality management: TQM, quality assurance, quality control",
      "Technology, task design and the work environment",
      "Overcoming resistance to change",
      "Global operations strategies",
    ],
    commonPitfalls: [
      "Using 'quality' loosely instead of naming the specific strategy (TQM vs. assurance vs. control)",
      "Not linking operations decisions to business objectives",
      "Writing about a specific business without tying back to the syllabus concept",
      "Confusing lean production with just-in-time",
    ],
    sampleQ:
      "Assess the effectiveness of TWO operations strategies used by a business of your choice to improve competitiveness. (8 marks)",
  },
  marketing: {
    title: "Marketing",
    icon: "📊",
    tagline: "Heavy on 8-mark responses and consumer theory.",
    description:
      "Marketing is about how businesses identify customer needs and create, communicate, and deliver value. The HSC tests your ability to analyse the marketing mix, interpret situational analysis, and apply global marketing strategies to real-world businesses.",
    syllabusPoints: [
      "Role of marketing",
      "Influences on marketing: social/ethical, legal, economic",
      "Marketing process: situational analysis, marketing objectives, strategies, implementation",
      "Market research: types, data analysis",
      "Product/service management: product life cycle, branding, packaging",
      "Price: pricing strategies, factors affecting price",
      "Promotion: elements of the promotional mix",
      "Place/distribution: distribution channels, supply chain",
      "People, processes and physical evidence",
      "Global marketing: standardisation vs customisation",
    ],
    commonPitfalls: [
      "Treating 'the marketing mix' as a static checklist rather than an integrated strategy",
      "Forgetting the 'extended' 7Ps (people, process, physical evidence) in service businesses",
      "Not contextualising marketing responses to the business scenario given",
      "Superficial treatment of global marketing — just naming strategies without evaluating trade-offs",
    ],
    sampleQ:
      "Analyse how a business of your choice has used the marketing mix to achieve its marketing objectives. (8 marks)",
  },
  finance: {
    title: "Finance",
    icon: "💹",
    tagline: "The most calculation-heavy topic. Master the ratios.",
    description:
      "Finance is about how businesses source, manage, and report on funds. The HSC tests both computational skills (ratio analysis, budgets, cash flow) and conceptual understanding of financial management strategies and their appropriateness for different business situations.",
    syllabusPoints: [
      "Role of financial management",
      "Influences on financial management",
      "Financial planning: short and long term",
      "Financial statements: income statement, balance sheet, cash flow",
      "Ratio analysis: profitability, liquidity, efficiency, solvency, investment",
      "Working capital management: cash, receivables, payables, inventories",
      "Cash flow management",
      "Profitability management: cost controls, revenue controls",
      "Global financial management: exchange rates, risk management, hedging, derivatives",
    ],
    commonPitfalls: [
      "Computing ratios correctly but interpreting them incorrectly (e.g., higher current ratio = always better)",
      "Ignoring the business context when recommending financial strategies",
      "Treating cash flow and profit as interchangeable",
      "Not being able to compare two years of ratios — examiners always provide two periods",
    ],
    sampleQ:
      "Using the financial statements provided, evaluate the financial performance of the business and recommend TWO strategies for improvement. (12 marks)",
  },
  "human-resources": {
    title: "Human Resources",
    icon: "👥",
    tagline: "Case study goldmine. Know your motivation theories cold.",
    description:
      "Human Resources covers how businesses acquire, develop, and maintain their workforce. The HSC expects you to evaluate HR strategies against business outcomes, apply motivation theories to specific scenarios, and understand the legal framework of employment in Australia.",
    syllabusPoints: [
      "Role of human resource management",
      "Influences on human resource management: legal, economic, social, technological",
      "Key functions: acquisition, development, maintenance, separation",
      "Workforce planning: HR audit, forecasting",
      "Recruitment and selection: internal/external, selection process",
      "Training and development: types, on/off-the-job",
      "Performance management: appraisal, reward, discipline",
      "Motivation: Maslow, Taylor, Herzberg, Douglas, Mayo",
      "Workplace health and safety",
      "Employee relations: industrial relations framework, negotiation",
    ],
    commonPitfalls: [
      "Naming a motivation theory without applying it to the specific scenario in the question",
      "Treating 'employee relations' as just 'keeping employees happy' — the industrial relations framework is a legal structure",
      "Not knowing the difference between training and development",
      "Forgetting that HR strategies must link back to business objectives",
    ],
    sampleQ:
      "Evaluate the effectiveness of TWO motivational strategies a business of your choice has used to improve employee performance. (8 marks)",
  },
} as const;

type TopicSlug = keyof typeof TOPICS;

export async function generateStaticParams() {
  return Object.keys(TOPICS).map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const data = TOPICS[topic as TopicSlug];
  if (!data) return {};
  return {
    title: `HSC Business Studies ${data.title} — Band 6 Tutoring Sydney`,
    description: `HSC Business Studies ${data.title} tutoring in Sydney. ${data.tagline} Small groups, Band 6 results guaranteed.`,
    alternates: { canonical: `/courses/${topic}` },
    openGraph: {
      title: `HSC Business Studies ${data.title} — Band 6 Tutoring Sydney`,
      description: `HSC Business Studies ${data.title} tutoring in Sydney. ${data.tagline} Small groups, Band 6 results guaranteed.`,
      url: `https://acumenhsc.com.au/courses/${topic}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function CourseTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const data = TOPICS[topic as TopicSlug];
  if (!data) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            HSC Business Studies
          </p>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-4xl" aria-hidden="true">
              {data.icon}
            </span>
            <h1 className="font-display text-4xl font-bold text-ink-900 sm:text-5xl">
              HSC Business Studies: {data.title}
            </h1>
          </div>
          <p className="mt-2 text-sm font-medium text-brand-600">{data.tagline}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">
            {data.description}
          </p>
        </div>
      </section>

      {/* Syllabus + pitfalls */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-bold text-ink-900">
              Syllabus coverage
            </h2>
            <ul className="mt-5 space-y-2">
              {data.syllabusPoints.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-ink-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-ink-900">
              Common student pitfalls
            </h2>
            <ul className="mt-5 space-y-3">
              {data.commonPitfalls.map((p) => (
                <li
                  key={p}
                  className="rounded-lg border border-red-100 bg-red-50 p-3 text-sm text-ink-700"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sample question */}
        <div className="mt-12 rounded-xl border border-border bg-surface-raised p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Sample exam question
          </p>
          <p className="mt-3 text-base font-medium text-ink-900">{data.sampleQ}</p>
          <p className="mt-3 text-sm text-ink-500">
            We work through questions exactly like this in every lesson — with a timer,
            no notes, and live marking afterwards.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-800">
        <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">
            Get started with {data.title}
          </h2>
          <p className="mt-3 text-brand-100/70">
            First lesson free. We&apos;ll place you in the right {data.title} group.
          </p>
          <LeadForm source="hero_form" className="mx-auto mt-8 max-w-md text-left" />
        </div>
      </section>
    </>
  );
}
