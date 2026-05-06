import type { MetadataRoute } from "next";

const SITE_URL = "https://acumenhsc.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL,                             lastModified: new Date(), changeFrequency: "weekly",  priority: 1   },
    { url: `${SITE_URL}/about`,                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/courses`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/courses/operations`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/courses/marketing`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/courses/finance`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/courses/human-resources`,lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/pricing`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/practice`,               lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${SITE_URL}/resources`,              lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${SITE_URL}/contact`,                lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: `${SITE_URL}/privacy`,                lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
    { url: `${SITE_URL}/terms`,                  lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
  ];
}
