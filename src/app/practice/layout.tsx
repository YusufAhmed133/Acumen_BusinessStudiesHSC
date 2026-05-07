import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free HSC Business Studies Practice Questions | Acumen HSC",
  description:
    "Free HSC Business Studies practice questions from 2010 to 2025. MCQ, short answer and extended response, indexed by syllabus dot point. Operations, Marketing, Finance, Human Resources.",
  keywords: [
    "HSC Business Studies practice questions",
    "HSC Business Studies past papers",
    "HSC Business Studies MCQ",
    "HSC Business Studies short answer questions",
    "HSC Business Studies extended response",
    "Operations practice questions HSC",
    "Marketing practice questions HSC",
    "Finance practice questions HSC",
    "Human Resources practice questions HSC",
    "HSC Business Studies 2025",
  ],
  alternates: {
    canonical: "/practice",
    languages: {
      "en-AU": "/practice",
      "x-default": "/practice",
    },
  },
  openGraph: {
    title: "Free HSC Business Studies Practice Questions | Acumen HSC",
    description:
      "Free HSC Business Studies practice questions from 2010 to 2025. MCQ, short answer and extended response, indexed by syllabus dot point.",
    url: "https://acumenhsc.com.au/practice",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Acumen HSC — Free HSC Business Studies Practice Questions" }],
  },
};

export default function PracticeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
