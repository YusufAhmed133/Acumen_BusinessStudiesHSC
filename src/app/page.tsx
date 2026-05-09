import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Topics } from "@/components/sections/Topics";
import { Pricing } from "@/components/sections/Pricing";

const PracticeDemo = dynamic(() => import("@/components/sections/PracticeDemo").then((m) => m.PracticeDemo));
import { Reviews } from "@/components/sections/Reviews";
import { ResourcesTeaser } from "@/components/sections/ResourcesTeaser";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Acumen HSC | Band 6 Business Studies Tutoring Sydney",
  description:
    "Band 6 HSC Business Studies tutoring in Sydney. Small-group classes, live essay marking, 24-hour question line. Year 11 & 12. First lesson free.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Acumen HSC | Band 6 Business Studies Tutoring Sydney",
    description:
      "Band 6 HSC Business Studies tutoring in Sydney. Small-group classes, live essay marking, 24-hour question line. Year 11 & 12. First lesson free.",
    url: "https://acumenhsc.com.au",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Acumen HSC — Band 6 Business Studies Tutoring Sydney" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acumen HSC | Band 6 Business Studies Tutoring Sydney",
    description:
      "Band 6 HSC Business Studies tutoring in Sydney. Small-group classes, live essay marking, 24-hour question line. Year 11 & 12. First lesson free.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Topics />
      <PracticeDemo />
      <Pricing />
      <Reviews />
      <ResourcesTeaser />
      <FaqSection />
    </>
  );
}
