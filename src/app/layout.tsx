import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: {
    default: "Acumen | HSC Business Studies Tutoring Sydney",
    template: "%s | Acumen",
  },
  description:
    "HSC Business Studies tutoring in Sydney. Small-group classes for Year 11 and Year 12. Live marking, 24-hour question line. First lesson free.",
  keywords: [
    "HSC Business Studies tutoring",
    "HSC Business tutoring Sydney",
    "Business Studies Band 6",
    "HSC tutoring Sydney",
    "Year 12 Business Studies",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Acumen HSC",
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
