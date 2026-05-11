import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSC Business Studies Practice Question Bank Preview",
  description:
    "Preview HSC Business Studies practice questions from 2022-2025. MCQ, short answer, and extended responses by syllabus dot point.",
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
    title: "HSC Business Studies Practice Question Bank Preview | Acumen HSC",
    description:
      "Preview HSC Business Studies practice questions from 2022-2025. MCQ, short answer, and extended responses by syllabus dot point.",
    url: "https://acumenhsc.com.au/practice",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Acumen HSC, HSC Business Studies Practice Question Bank Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HSC Business Studies Practice Question Bank Preview | Acumen HSC",
    description:
      "Preview HSC Business Studies practice questions from 2022-2025. MCQ, short answer, and extended responses by syllabus dot point.",
    images: ["/og-image.png"],
  },
};

export default function PracticeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
