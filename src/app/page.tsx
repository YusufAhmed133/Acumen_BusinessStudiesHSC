import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Topics } from "@/components/sections/Topics";
import { Pricing } from "@/components/sections/Pricing";
import { FAQS } from "@/lib/faqs";
import { PRICING_PLANS } from "@/lib/pricing";
import { Reviews } from "@/components/sections/Reviews";
import { ResourcesTeaser } from "@/components/sections/ResourcesTeaser";
import { FaqSection } from "@/components/sections/FaqSection";
import { CanonicalizeSectionHash } from "@/components/ui/CanonicalizeSectionHash";

const PracticeDemo = dynamic(() => import("@/components/sections/PracticeDemo").then((m) => m.PracticeDemo));

const SITE_URL = "https://acumenhsc.com.au";

const toJsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Acumen HSC | Band 6 Business Studies Tutoring Sydney",
  },
  description:
    "Band 6 HSC Business Studies tutoring in Sydney. Small-group classes, timed HSC practice, 24-hour question line. Year 11 & 12. First lesson free.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Acumen HSC | Band 6 Business Studies Tutoring Sydney",
    description:
      "Band 6 HSC Business Studies tutoring in Sydney. Small-group classes, timed HSC practice, 24-hour question line. Year 11 & 12. First lesson free.",
    url: "https://acumenhsc.com.au",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Acumen HSC, Band 6 Business Studies Tutoring Sydney" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acumen HSC | Band 6 Business Studies Tutoring Sydney",
    description:
      "Band 6 HSC Business Studies tutoring in Sydney. Small-group classes, timed HSC practice, 24-hour question line. Year 11 & 12. First lesson free.",
    images: ["/og-image.png"],
  },
};

const COURSE_JSON = toJsonLd({
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE_URL}/syllabus`,
  name: "HSC Business Studies Tutoring, Band 6 Program",
  description: "Small-group HSC Business Studies tutoring for Year 11 and 12 students in Sydney. Covers all four syllabus topics: Operations, Marketing, Finance, and Human Resources. Taught by Band 6 graduates.",
  url: SITE_URL,
  datePublished: "2026-01-01",
  dateModified: "2026-05-10",
  image: `${SITE_URL}/og-image.png`,
  provider: {
    "@id": SITE_URL,
  },
  offers: PRICING_PLANS.flatMap((plan) => [
    {
      "@type": "Offer",
      price: String(plan.sessionPriceAud),
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      url: SITE_URL,
      name: plan.schemaSessionName,
      description: plan.schemaSessionDescription,
    },
    {
      "@type": "Offer",
      price: String(plan.termPriceAud),
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      url: SITE_URL,
      name: plan.schemaTermName,
      description: plan.schemaTermDescription,
    },
  ]),
  instructor: {
    "@type": "Organization",
    "@id": SITE_URL,
  },
  educationalLevel: "Year 11-12 (HSC)",
  teaches: [
    { "@type": "DefinedTerm", name: "HSC Business Studies, Operations", inDefinedTermSet: "https://curriculum.nsw.edu.au/learning-areas/business-studies/business-studies-11-12-2021" },
    { "@type": "DefinedTerm", name: "HSC Business Studies, Marketing", inDefinedTermSet: "https://curriculum.nsw.edu.au/learning-areas/business-studies/business-studies-11-12-2021" },
    { "@type": "DefinedTerm", name: "HSC Business Studies, Finance", inDefinedTermSet: "https://curriculum.nsw.edu.au/learning-areas/business-studies/business-studies-11-12-2021" },
    { "@type": "DefinedTerm", name: "HSC Business Studies, Human Resources", inDefinedTermSet: "https://curriculum.nsw.edu.au/learning-areas/business-studies/business-studies-11-12-2021" },
    { "@type": "DefinedTerm", name: "HSC extended response essay technique", inDefinedTermSet: "https://curriculum.nsw.edu.au/learning-areas/business-studies/business-studies-11-12-2021" },
    { "@type": "DefinedTerm", name: "HSC past paper analysis and Band 6 marking criteria", inDefinedTermSet: "https://curriculum.nsw.edu.au/learning-areas/business-studies/business-studies-11-12-2021" },
  ],
  inLanguage: "en-AU",
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: "onsite",
      location: {
        "@type": "Place",
        name: "Sydney",
        address: { "@type": "PostalAddress", addressLocality: "Sydney", addressRegion: "NSW", addressCountry: "AU" },
      },
    },
    {
      "@type": "CourseInstance",
      courseMode: "online",
    },
  ],
});

const FAQ_JSON = toJsonLd({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
});

export default function HomePage() {
  return (
    <>
      <CanonicalizeSectionHash />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: COURSE_JSON }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_JSON }} />
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
