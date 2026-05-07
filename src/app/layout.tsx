import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SpeedInsights } from "@vercel/speed-insights/next";

const SITE_URL = "https://acumenhsc.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Acumen HSC | Band 6 Business Studies Tutoring Sydney",
    template: "%s | Acumen HSC",
  },
  description:
    "Band 6 HSC Business Studies tutoring in Sydney. Small-group classes, live essay marking, 24-hour question line. Year 11 & 12. First lesson free.",
  keywords: [
    "HSC Business Studies tutor Sydney",
    "HSC Business Studies tutoring",
    "Band 6 Business Studies HSC",
    "HSC tutoring Sydney",
    "Year 12 Business Studies",
    "Business Studies Band 6 Sydney",
    "HSC Business Studies classes",
    "small group HSC tutoring Sydney",
    "Year 11 Business Studies tutor",
    "HSC Band 6 essay marking",
  ],
  alternates: {
    canonical: "/",
    languages: { "en-AU": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Acumen HSC",
    url: SITE_URL,
    title: "Acumen HSC | Band 6 Business Studies Tutoring Sydney",
    description:
      "Band 6 HSC Business Studies tutoring in Sydney. Small-group classes, live essay marking, 24-hour question line. Year 11 & 12. First lesson free.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Acumen HSC — Band 6 Business Studies Tutoring Sydney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acumen HSC | Band 6 Business Studies Tutoring Sydney",
    description:
      "Band 6 HSC Business Studies tutoring in Sydney. Small-group classes, live essay marking, 24-hour question line. Year 11 & 12. First lesson free.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "NNwEcsPOnzZDGjaIH2HQnFfjV7wo-WeUZokoNyT-vrs",
  },
  other: {
    "geo.region": "AU-NSW",
    "geo.placename": "Sydney",
  },
};

const LOCAL_BUSINESS_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  "@id": `${SITE_URL}/#business`,
  name: "Acumen HSC",
  description:
    "HSC Business Studies tutor in Sydney offering small-group tutoring for Year 11 and 12 students. Serving Sydney CBD, Parramatta, and online.",
  url: SITE_URL,
  telephone: "+61470665141",
  areaServed: [
    { "@type": "City", name: "Sydney" },
    { "@type": "City", name: "Parramatta" },
    { "@type": "AdministrativeArea", name: "New South Wales" },
  ],
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Sydney CBD",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Parramatta",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "AUD",
  paymentAccepted: "Credit Card",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "08:00",
    closes: "22:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "HSC Tutoring Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "HSC Business Studies Tutoring Sydney",
          description: "Small-group Year 11 and Year 12 Business Studies tutoring in Sydney CBD, targeting Band 5-6 results.",
          areaServed: { "@type": "City", name: "Sydney" },
          url: SITE_URL,
        },
      },
    ],
  },
});

const FAQ_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the trial lesson really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One full lesson at no cost, no credit card required. No obligation if it is not the right fit.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The $950 term rate covers every lesson across the school term (approximately 10 sessions), all HSC past papers from 2010 to 2025 annotated by syllabus dot point, weekly essay feedback, and the full online question bank. The $110 casual rate covers a single one-hour session.",
      },
    },
    {
      "@type": "Question",
      name: "Who teaches the lessons?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All tutors are Band 6 graduates who have sat the HSC Business Studies exam and scored in the top band.",
      },
    },
    {
      "@type": "Question",
      name: "What if my child has a question outside of class?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We run a 24-hour question line where students can send through any concept, essay paragraph, or past paper question and receive a written response.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my child misses a lesson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cancellations with more than 24 hours notice are fully refunded or credited. Cancellations inside 24 hours are charged in full. Every student who misses receives the full notes and worked solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Do your prices include GST?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all prices shown on this site are inclusive of GST.",
      },
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={GeistSans.variable}>
      <head>
        {/* JSON-LD: static site data, no user input */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: LOCAL_BUSINESS_JSON }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_JSON }} />
      </head>
      <body style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
        <ScrollProgress />
        <a href="#main" className="skip-link">Skip to content</a>
        <Nav />
        <main id="main" style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
