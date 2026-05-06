import type { MetadataRoute } from "next";

const SITE_URL = "https://acumenhsc.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL,                                        lastModified: now,                    changeFrequency: "weekly",  priority: 1    },
    { url: `${SITE_URL}/hsc-business-studies-tutor-sydney`, lastModified: new Date("2026-05-06"), changeFrequency: "monthly", priority: 0.95 },
  ];
}
