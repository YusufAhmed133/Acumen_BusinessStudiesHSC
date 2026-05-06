import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSC Business Studies Practice Questions",
  description:
    "Free HSC Business Studies practice questions from 2022 to 2025. MCQ, short answer and extended response. Email required.",
  alternates: { canonical: "/practice" },
  robots: { index: false, follow: false },
};

export default function PracticeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
