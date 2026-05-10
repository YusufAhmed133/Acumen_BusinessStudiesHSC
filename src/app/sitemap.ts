import type { MetadataRoute } from "next";

const SITE_URL = "https://acumenhsc.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const contentUpdated = new Date("2026-05-10");
  return [
    { url: SITE_URL,                       lastModified: contentUpdated, changeFrequency: "weekly",  priority: 1   },
    { url: `${SITE_URL}/practice`,         lastModified: contentUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/terms`,            lastModified: contentUpdated, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE_URL}/privacy`,          lastModified: contentUpdated, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
