import type { MetadataRoute } from "next";

const SITE_URL = "https://acumenhsc.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const d = (s: string) => new Date(s);
  return [
    { url: SITE_URL,                                                   lastModified: now,            changeFrequency: "weekly",  priority: 1    },
    { url: `${SITE_URL}/hsc-business-studies-tutor-sydney`,            lastModified: d("2026-05-06"), changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/notes/operations`,                             lastModified: d("2026-05-06"), changeFrequency: "monthly", priority: 0.88 },
    { url: `${SITE_URL}/notes/band-6-essay`,                           lastModified: d("2026-05-06"), changeFrequency: "monthly", priority: 0.88 },
    { url: `${SITE_URL}/notes/past-papers`,                            lastModified: d("2026-05-06"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/courses`,                                      lastModified: d("2026-05-06"), changeFrequency: "monthly", priority: 0.82 },
    { url: `${SITE_URL}/courses/operations`,                           lastModified: d("2026-05-06"), changeFrequency: "monthly", priority: 0.78 },
    { url: `${SITE_URL}/courses/marketing`,                            lastModified: d("2026-05-06"), changeFrequency: "monthly", priority: 0.78 },
    { url: `${SITE_URL}/courses/finance`,                              lastModified: d("2026-05-06"), changeFrequency: "monthly", priority: 0.78 },
    { url: `${SITE_URL}/courses/human-resources`,                      lastModified: d("2026-05-06"), changeFrequency: "monthly", priority: 0.78 },
    { url: `${SITE_URL}/about`,                                        lastModified: d("2026-05-06"), changeFrequency: "monthly", priority: 0.72 },
    { url: `${SITE_URL}/resources`,                                    lastModified: d("2026-05-06"), changeFrequency: "weekly",  priority: 0.70 },
    { url: `${SITE_URL}/pricing`,                                      lastModified: d("2026-05-06"), changeFrequency: "monthly", priority: 0.65 },
    { url: `${SITE_URL}/contact`,                                      lastModified: d("2026-05-06"), changeFrequency: "yearly",  priority: 0.55 },
    { url: `${SITE_URL}/privacy`,                                      lastModified: d("2026-05-06"), changeFrequency: "yearly",  priority: 0.2  },
    { url: `${SITE_URL}/terms`,                                        lastModified: d("2026-05-06"), changeFrequency: "yearly",  priority: 0.2  },
  ];
}
