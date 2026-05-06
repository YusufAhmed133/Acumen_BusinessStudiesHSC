import type { MetadataRoute } from "next";

const SITE_URL = "https://acumenhsc.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL,                                                   lastModified: new Date("2026-05-06"), changeFrequency: "weekly",  priority: 1   },
    { url: `${SITE_URL}/hsc-business-studies-tutor-sydney`,            lastModified: new Date("2026-05-06"), changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/hsc-business-studies-tutor-parramatta`,        lastModified: new Date("2026-05-06"), changeFrequency: "monthly", priority: 0.9  },
    { url: `${SITE_URL}/courses`,                                      lastModified: new Date("2026-05-06"), changeFrequency: "monthly", priority: 0.9  },
    { url: `${SITE_URL}/courses/operations`,                           lastModified: new Date("2026-05-06"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${SITE_URL}/courses/marketing`,                            lastModified: new Date("2026-05-06"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${SITE_URL}/courses/finance`,                              lastModified: new Date("2026-05-06"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${SITE_URL}/courses/human-resources`,                      lastModified: new Date("2026-05-06"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${SITE_URL}/about`,                                        lastModified: new Date("2026-05-06"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${SITE_URL}/pricing`,                                      lastModified: new Date("2026-05-06"), changeFrequency: "monthly", priority: 0.7  },
    { url: `${SITE_URL}/practice`,                                     lastModified: new Date("2026-05-06"), changeFrequency: "weekly",  priority: 0.7  },
    { url: `${SITE_URL}/resources`,                                    lastModified: new Date("2026-05-06"), changeFrequency: "weekly",  priority: 0.7  },
    { url: `${SITE_URL}/contact`,                                      lastModified: new Date("2026-05-06"), changeFrequency: "yearly",  priority: 0.6  },
    { url: `${SITE_URL}/privacy`,                                      lastModified: new Date("2026-05-06"), changeFrequency: "yearly",  priority: 0.2  },
    { url: `${SITE_URL}/terms`,                                        lastModified: new Date("2026-05-06"), changeFrequency: "yearly",  priority: 0.2  },
  ];
}
