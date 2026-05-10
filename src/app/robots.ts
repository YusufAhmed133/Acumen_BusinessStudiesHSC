import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      // Allow AI search assistants, brand visibility in AI Overviews / ChatGPT / Perplexity
      { userAgent: "GPTBot",         allow: "/", disallow: ["/api/"] },
      { userAgent: "OAI-SearchBot",  allow: "/", disallow: ["/api/"] },
      { userAgent: "ChatGPT-User",   allow: "/", disallow: ["/api/"] },
      { userAgent: "PerplexityBot",  allow: "/", disallow: ["/api/"] },
      { userAgent: "ClaudeBot",      allow: "/", disallow: ["/api/"] },
      { userAgent: "anthropic-ai",   allow: "/", disallow: ["/api/"] },
      // Block Gemini model training (separate from Googlebot / AI Overviews)
      { userAgent: "Google-Extended", disallow: "/" },
      // Block scraper-only bots with no search benefit
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "CCBot",      disallow: "/" },
    ],
    sitemap: "https://acumenhsc.com.au/sitemap.xml",
  };
}
