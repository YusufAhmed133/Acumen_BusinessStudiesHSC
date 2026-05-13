import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PRICING_PLANS } from "@/lib/pricing";

const SITE_URL = "https://acumenhsc.com.au";

const toJsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Acumen HSC | Band 6 Business Studies Tutoring Sydney",
    template: "%s | Acumen HSC",
  },
  description:
    "Band 6 HSC Business Studies tutoring in Sydney. Small-group classes, timed HSC practice, 24-hour question line. Year 11 & 12. First lesson free.",
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
    "HSC Business Studies past papers",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-AU": "/",
      "x-default": "/",
    },
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
      "Band 6 HSC Business Studies tutoring in Sydney. Small-group classes, timed HSC practice, 24-hour question line. Year 11 & 12. First lesson free.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Acumen HSC, Band 6 Business Studies Tutoring Sydney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acumen HSC | Band 6 Business Studies Tutoring Sydney",
    description:
      "Band 6 HSC Business Studies tutoring in Sydney. Small-group classes, timed HSC practice, 24-hour question line. Year 11 & 12. First lesson free.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "NNwEcsPOnzZDGjaIH2HQnFfjV7wo-WeUZokoNyT-vrs",
  },
  other: {
    "geo.region": "AU-NSW",
    "geo.placename": "Sydney, NSW, Australia",
    "geo.position": "-33.8688;151.2093",
    "ICBM": "-33.8688, 151.2093",
  },
};

const LOCAL_BUSINESS_JSON = toJsonLd({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  "@id": SITE_URL,
  name: "Acumen HSC",
  description:
    "HSC Business Studies tutor in Sydney offering small-group tutoring for Year 11 and 12 students. Serving Sydney CBD and online.",
  url: SITE_URL,
  telephone: "+61470665141",
  areaServed: [
    { "@type": "City", name: "Sydney" },
    { "@type": "AdministrativeArea", name: "New South Wales" },
  ],
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/icon.svg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    postalCode: "2000",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  priceRange: "$$",
  currenciesAccepted: "AUD",
  paymentAccepted: "Credit Card, Debit Card",
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
    itemListElement: PRICING_PLANS.flatMap((plan) => [
      {
        "@type": "Offer",
        price: String(plan.sessionPriceAud),
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
        url: SITE_URL,
        itemOffered: {
          "@type": "Service",
          name: plan.schemaSessionName,
          description: plan.schemaSessionDescription,
          areaServed: { "@type": "City", name: "Sydney" },
          url: SITE_URL,
        },
      },
      {
        "@type": "Offer",
        price: String(plan.termPriceAud),
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
        url: SITE_URL,
        itemOffered: {
          "@type": "Service",
          name: plan.schemaTermName,
          description: plan.schemaTermDescription,
          areaServed: { "@type": "City", name: "Sydney" },
          url: SITE_URL,
        },
      },
    ]),
  },
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={GeistSans.variable}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: LOCAL_BUSINESS_JSON }} />
      </head>
      <body style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
        <div
          aria-hidden
          className="scroll-progress-bar"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "linear-gradient(90deg, #1F6B40, #2A4F94)",
            transformOrigin: "left center",
            transform: "scaleX(0)",
            zIndex: 9999,
            pointerEvents: "none",
          }}
        />
        <a href="#main" className="skip-link">Skip to content</a>
        <Nav />
        <main id="main" style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var id = 'AW-18150257568';
                function loadTag(){
                  if (window.__acumenGtagLoaded) return;
                  window.__acumenGtagLoaded = true;
                  window.dataLayer = window.dataLayer || [];
                  window.gtag = function(){ window.dataLayer.push(arguments); };
                  var s = document.createElement('script');
                  s.async = true;
                  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
                  document.head.appendChild(s);
                  window.gtag('js', new Date());
                  window.gtag('config', id);
                }
                function onInteraction(){
                  ['mousedown','keydown','touchstart','scroll'].forEach(function(e){
                    window.removeEventListener(e, onInteraction, {capture:true});
                  });
                  loadTag();
                }
                ['mousedown','keydown','touchstart','scroll'].forEach(function(e){
                  window.addEventListener(e, onInteraction, {once:true, capture:true, passive:true});
                });
                // fallback: load after 4s even with no interaction
                window.setTimeout(loadTag, 4000);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
