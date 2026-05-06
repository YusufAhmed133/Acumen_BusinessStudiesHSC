import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

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
  ],
  alternates: { canonical: "/" },
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Acumen HSC | Band 6 Business Studies Tutoring Sydney",
    description:
      "Band 6 HSC Business Studies tutoring in Sydney. Small-group classes, live essay marking, 24-hour question line. Year 11 & 12. First lesson free.",
  },
  other: {
    "geo.region": "AU-NSW",
    "geo.placename": "Sydney",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
        <ScrollProgress />
        <a href="#main" className="skip-link">Skip to content</a>
        <Nav />
        <main id="main" style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
