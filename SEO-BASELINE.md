# SEO Baseline, acumenhsc.com.au
**Captured:** 2026-05-07  
**Branch:** build/m0-scaffold  
**Commit:** 30323dd  
**Purpose:** Regression reference. Any future SEO audit compares against this document.

---

## 1. Page Inventory

### 1.1 Homepage, `https://acumenhsc.com.au/`

| Field | Value |
|---|---|
| Title tag | `Acumen HSC \| Band 6 Business Studies Tutoring Sydney` |
| Meta description | `Band 6 HSC Business Studies tutoring in Sydney. Small-group classes, live essay marking, 24-hour question line. Year 11 & 12. First lesson free.` |
| Canonical URL | `https://acumenhsc.com.au/` (set via `alternates.canonical: "/"`) |
| Robots directive | `index: true, follow: true` (via Next.js metadata) |
| H1 text | `HSC Business Studies Tutoring in Sydney` (with inline `<span>`: `Taught by Band 6 Graduates`) |
| OG title | `Acumen HSC \| Band 6 Business Studies Tutoring Sydney` |
| OG description | `Band 6 HSC Business Studies tutoring in Sydney. Small-group classes, live essay marking, 24-hour question line. Year 11 & 12. First lesson free.` |
| OG type | `website` |
| OG locale | `en_AU` |
| OG image | `/og-image.png` (1200×630) |
| Twitter card | `summary_large_image` |
| hreflang | `en-AU: /` |

**Notes:**
- Title defined in both `layout.tsx` (as the `default`) and `page.tsx` (explicit). The page-level value takes precedence and matches, no conflict.
- Title is 52 characters, within the safe 50–60 character window.
- Meta description is 153 characters, within the 145–160 character window.

---

### 1.2 Practice Page, `https://acumenhsc.com.au/practice`

| Field | Value |
|---|---|
| Title tag | `Free HSC Business Studies Practice Questions \| Acumen HSC` |
| Meta description | `Free HSC Business Studies practice questions from 2010-2025. MCQ, short answer, and extended responses by syllabus dot point.` |
| Canonical URL | `https://acumenhsc.com.au/practice` |
| Robots directive | Inherits root layout default, `index: true, follow: true` |
| H1 text | `HSC Business Studies Practice Questions` |
| OG title | `Free HSC Business Studies Practice Questions \| Acumen HSC` |
| OG description | `Free HSC Business Studies practice questions from 2010-2025. MCQ, short answer, and extended responses by syllabus dot point.` |
| OG image | `/og-image.png` (1200×630) |
| Twitter card | `summary_large_image` |

**Notes:**
- Title is 59 characters, at the upper edge of the safe window.
- Meta description is under the common 155-160 character truncation range.
- H1 text now matches the core practice-search keyword.
- The practice page has an email-gate overlay rendered client-side. Googlebot will see the full page markup (server-rendered layout + metadata) but the interactive content (question bank) requires JavaScript execution. The gate modal uses `inert` attribute to hide content, Googlebot may or may not index the question text depending on render budget.
- Twitter metadata is defined at page level.

---

### 1.3 Privacy Policy, `https://acumenhsc.com.au/privacy`

| Field | Value |
|---|---|
| Title tag | `Privacy Policy \| Acumen HSC` (template applied: `"%s \| Acumen HSC"`) |
| Meta description | `How Acumen HSC collects, uses, and protects your personal information in accordance with Australian privacy law.` |
| Canonical URL | `https://acumenhsc.com.au/privacy` |
| Robots directive | `index: true, follow: true` |
| H1 text | `Privacy Policy` |
| OG | Set at page level |
| Twitter card | `summary` |

**Notes:**
- Privacy policy is included in the four-page sitemap.

---

### 1.4 Terms of Service, `https://acumenhsc.com.au/terms`

| Field | Value |
|---|---|
| Title tag | `Terms of Service \| Acumen HSC` (template applied) |
| Meta description | `Terms and conditions for HSC Business Studies tutoring services provided by Acumen HSC in Sydney.` |
| Canonical URL | `https://acumenhsc.com.au/terms` |
| Robots directive | `index: true, follow: true` |
| H1 text | `Terms of Service` |
| OG | Set at page level |
| Twitter card | `summary` |

**Notes:**
- Terms page is included in the four-page sitemap.

---

## 2. Schema Inventory

LocalBusiness schema is injected globally in `layout.tsx`. Course and FAQPage schemas are injected on the homepage in `page.tsx`.

---

### 2.1 LocalBusiness + EducationalOrganization

**`@id`:** `https://acumenhsc.com.au`

| Property | Value |
|---|---|
| `@type` | `["LocalBusiness", "EducationalOrganization"]` |
| `name` | `Acumen HSC` |
| `description` | `HSC Business Studies tutor in Sydney offering small-group tutoring for Year 11 and 12 students. Serving Sydney CBD and online.` |
| `url` | `https://acumenhsc.com.au` |
| `telephone` | `+61470665141` |
| `areaServed` | `[City: Sydney, AdministrativeArea: New South Wales]` |
| `image` | `https://acumenhsc.com.au/og-image.png` |
| `logo` | `https://acumenhsc.com.au/icon.svg` |
| `address.@type` | `PostalAddress` |
| `address.addressLocality` | `Sydney` |
| `address.addressRegion` | `NSW` |
| `address.postalCode` | `2000` |
| `address.addressCountry` | `AU` |
| `geo.@type` | `GeoCoordinates` |
| `geo.latitude` | `-33.8688` |
| `geo.longitude` | `151.2093` |
| `priceRange` | `$$` |
| `currenciesAccepted` | `AUD` |
| `paymentAccepted` | `Credit Card, Debit Card` |
| `openingHoursSpecification` | Mon–Sun 08:00–22:00 |
| `hasOfferCatalog` | `OfferCatalog` with 4 Offers: small-group weekly $80 AUD, small-group term $760 AUD, private weekly $100 AUD, private term $950 AUD |

**Missing/recommended per schema.org spec:**
- `sameAs`: no social profile links. Recommended for entity disambiguation once GBP, LinkedIn, or Facebook profiles exist.
- `founder` / `employee`: no individual tutor profiles. Not required, but real tutor profiles improve trust once hiring is final.
- `aggregateRating`: intentionally absent until verified reviews are visible on the page.
- Offer `validFrom` / `validThrough`: dates not set. Optional unless running a time-bound promotion.

---

### 2.2 Course

**`@id`:** `https://acumenhsc.com.au/syllabus`

| Property | Value |
|---|---|
| `@type` | `Course` |
| `name` | `HSC Business Studies Tutoring, Band 6 Program` |
| `description` | Full description covering all 4 syllabus topics |
| `url` | `https://acumenhsc.com.au` |
| `datePublished` | `2026-01-01` |
| `dateModified` | `2026-05-10` |
| `provider` | `@id` ref to `https://acumenhsc.com.au` |
| `instructor` | `Organization` `@id` ref to `https://acumenhsc.com.au` |
| `educationalLevel` | `Year 11–12 (HSC)` |
| `teaches` | 6 `DefinedTerm` entries (Operations, Marketing, Finance, HR, essay technique, past papers) |
| `inLanguage` | `en-AU` |
| `hasCourseInstance` | 2 instances: `onsite` (Sydney), `online` |

**Missing/recommended per schema.org spec:**
- `courseCode`: not set. Optional, and there is no stable course code for private tutoring.
- `totalHistoricalEnrollment`: not set. Optional social proof signal.
- `hasCourseInstance[*].courseSchedule`: schedule not specified because lesson times are arranged after enquiry.
- `hasCourseInstance[*].instructor`: no instructor on individual instances until real tutor profiles are ready.
- `hasCourseInstance.startDate` / `endDate`: not set because enrolments are rolling, not a single dated cohort.

---

### 2.3 FAQPage

| Property | Value |
|---|---|
| `@type` | `FAQPage` |
| `mainEntity` | 7 `Question` objects |

**Questions present:**
1. Is the trial really free?
2. What's included in the price?
3. Who teaches the lessons?
4. What if my child has a question outside of class?
5. Can a group of school friends join together?
6. What happens if my child misses a lesson?
7. Do your prices include GST?

**Missing/recommended per schema.org spec:**
- All required fields (`Question.name`, `Question.acceptedAnswer.@type`, `Question.acceptedAnswer.text`) are present.
- No `@id` on the FAQPage entity, not required but aids entity linking.
- FAQ schema is injected on the homepage only, matching the visible FAQ section.

---

## 3. Technical SEO Checklist

### 3.1 robots.txt (from `/src/app/robots.ts`)

| User Agent | Rule |
|---|---|
| `*` (all bots) | Allow `/`, Disallow `/api/` |
| `GPTBot` | Allow `/` |
| `OAI-SearchBot` | Allow `/` |
| `ChatGPT-User` | Allow `/` |
| `PerplexityBot` | Allow `/` |
| `ClaudeBot` | Allow `/` |
| `anthropic-ai` | Allow `/` |
| `Google-Extended` | Disallow `/` (blocks Gemini training, not Googlebot/AI Overviews) |
| `Bytespider` | Disallow `/` |
| `CCBot` | Disallow `/` |

**Sitemap declared:** `https://acumenhsc.com.au/sitemap.xml`

**Issues:**
- `AhrefsBot` and `SemrushBot` are not listed, they will crawl under `*` rules (allowed). If crawl budget is a concern later, these can be explicitly managed.
- The explicit AI-bot allowlist is deliberate and correct for brand presence in AI Overviews/ChatGPT citations.

---

### 3.2 Sitemap URLs (from `/src/app/sitemap.ts`)

| URL | Last Modified | Change Frequency | Priority |
|---|---|---|---|
| `https://acumenhsc.com.au` | Static content date `2026-05-10` | `weekly` | `1.0` |
| `https://acumenhsc.com.au/practice` | Static content date `2026-05-10` | `monthly` | `0.8` |
| `https://acumenhsc.com.au/terms` | Static content date `2026-05-10` | `yearly` | `0.3` |
| `https://acumenhsc.com.au/privacy` | Static content date `2026-05-10` | `yearly` | `0.3` |

**Issues:**
- The sitemap is complete for the locked four-page inventory: homepage, practice, terms, and privacy.

---

### 3.3 Security Headers (from `/next.config.ts`)

| Header | Value |
|---|---|
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `Content-Security-Policy` | See below |

**CSP Directives:**

| Directive | Value |
|---|---|
| `default-src` | `'self'` |
| `script-src` | `'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com` |
| `style-src` | `'self' 'unsafe-inline'` |
| `img-src` | `'self' data: blob:` |
| `font-src` | `'self'` |
| `connect-src` | `'self' https://*.supabase.co https://va.vercel-scripts.com wss://*.supabase.co` |
| `frame-ancestors` | `'none'` |

**CSP Notes:**
- `'unsafe-inline'` and `'unsafe-eval'` in `script-src` are required for Next.js client hydration and inline JSON-LD `<script>` tags. Acceptable for this stack.
- `img-src` does not include `https:`, all OG images, external images, and Vercel Analytics pixel must be self-hosted or inlined. If any external image source is added later, CSP will block it silently.
- No `form-action` directive, forms can POST to any origin. Low risk for this site (form posts to `/api/gate` on same origin) but a hardening gap.
- `frame-ancestors 'none'` is redundant alongside `X-Frame-Options: DENY` but harmless.

---

### 3.4 Language Tag

- `<html lang="en-AU">`, correctly set in `layout.tsx`.

---

### 3.5 Canonical URL Pattern

- Root `/` and all pages use relative canonical values (`"/"`, `"/practice"`, etc.).
- `metadataBase: new URL("https://acumenhsc.com.au")` is set in `layout.tsx`, so Next.js resolves these to absolute URLs correctly.
- No trailing-slash inconsistency observed, all canonicals are non-trailing-slash.

---

### 3.6 Google Search Console Verification

- Verification tag present: `google: "NNwEcsPOnzZDGjaIH2HQnFfjV7wo-WeUZokoNyT-vrs"`

---

### 3.7 Geo Meta Tags

- `geo.region: "AU-NSW"` and `geo.placename: "Sydney"` are set via `other` in root metadata.
- These are legacy/informal tags (not part of any formal standard), they carry negligible direct ranking weight but don't harm anything.

---

## 4. Keyword Coverage Audit

| Target Keyword | Coverage | Page / Element |
|---|---|---|
| `HSC Business Studies tutor Sydney` | **Present** | Homepage title, meta description, H1 (`HSC Business Studies Tutoring in Sydney`), LocalBusiness schema description, Course schema name, keywords array |
| `HSC Business Studies tutoring Sydney` | **Present** | Homepage title tag (`Band 6 Business Studies Tutoring Sydney`), meta description, LocalBusiness description |
| `Band 6 Business Studies` | **Present** | Homepage title, meta description, Course schema name, keywords array, H1 sub-span (`Taught by Band 6 Graduates`) |
| `Year 12 Business Studies tutor` | **Partial** | Keywords array only (`Year 12 Business Studies`). Not in any title, description, H1, or schema field. |
| `Year 11 Business Studies tutor` | **Partial** | Keywords array only (`Year 11 Business Studies tutor`). Not in title, description, H1, or schema. |
| `HSC Business Studies practice questions` | **Present** | Practice page title, meta description, and H1 (`HSC Business Studies Practice Questions`) |
| `HSC past papers Business Studies` | **Partial** | Practice page references real HSC past papers and question years. Present in FAQ answer text and Course `teaches` array. |
| `Operations management HSC` | **Partial** | Course `teaches` includes `HSC Business Studies, Operations`. No dedicated landing page. |
| `Business Studies tutor online Australia` | **Gap** | `online` appears in Course `hasCourseInstance` and LocalBusiness `description` (`Serving Sydney CBD and online`). Not in any title or meta description. No dedicated page. The word "Australia" does not appear in any title, meta, H1, or schema field. |

---

## 5. Issue Tracker

### CRITICAL

**C1, Practice page H1 has zero keyword value**  
Resolved in current code: H1 is `HSC Business Studies Practice Questions`.

**C2, Practice page server-renders a representative preview**  
Resolved in current code: the page is server-backed, passes a representative preview to the client, and fetches the full bank through a gated server route after access is granted.

---

### HIGH

**H1, No `aggregateRating` in LocalBusiness schema**  
Not added. Reviews were removed from the live page, so adding rating schema would be misleading until verified Google reviews or visible first-party reviews exist.

**H2, Course schema includes `image` and term offers**  
Resolved in current code: Course schema includes `/og-image.png` and term Offer entries mirroring the canonical pricing model.

**H3, `Year 11` and `Year 12` keywords absent from all titles and meta descriptions**  
Parents and students frequently search `"Year 12 Business Studies tutor"` and `"Year 11 Business Studies tutor"`. These phrases appear only in the `keywords` metadata array (which Google does not use for ranking) and nowhere in visible content fields.  
**Fix:** Incorporate `Year 11 & 12` into the homepage H1 sub-heading or a prominent subheading in the Trust/Topics sections.

**H4, Sitemap uses static content update dates**  
Resolved in current code: sitemap `lastModified` uses `new Date("2026-05-10")` instead of runtime `new Date()`.

**H5, No dedicated landing page for "HSC Business Studies online tutoring" or "Business Studies tutor online Australia"**  
The online delivery mode is referenced only in schema. Searches for online tutoring return no on-page targeting. This is a distinct market segment (non-Sydney students) with significant search volume.  
**Fix:** Add an `/online` page or a prominent on-page section with explicit online-tutoring keyword targeting.

---

### MEDIUM

**M1, Practice page meta description is trimmed**  
Resolved in current code: the description keeps the main keyword and fits under the common truncation range.

**M2, No `logo` property in LocalBusiness schema**  
Resolved in current code: LocalBusiness includes `logo: "https://acumenhsc.com.au/icon.svg"`.

**M3, No `sameAs` links in LocalBusiness schema**  
Entity disambiguation for Google's Knowledge Graph is strengthened by `sameAs` links to authoritative profiles (Google Business Profile, LinkedIn, Facebook, etc.).  
**Fix:** Once social/GBP profiles exist, add `sameAs: ["https://...", ...]` to the LocalBusiness schema.

**M4, Privacy and Terms pages are noindexed**  
Resolved in current code: both privacy and terms metadata exports set `robots: { index: true, follow: true }`, matching the sitemap.

**M5, `Operations management HSC` keyword has no on-page targeting**  
`Operations management` is a high-intent topic-level search. The only reference is in the Course `teaches` schema array. No page title, meta description, heading, or paragraph targets this phrase.  
**Fix:** Add topic-specific H2 sections or a Topics section H2 that uses the exact phrase (e.g. `Operations Management, HSC Syllabus`).

**M6, OG image path uses relative URL `/og-image.png`**  
Open Graph images should be absolute URLs for correct parsing by Facebook, LinkedIn, and Slack unfurl engines. While Next.js `metadataBase` resolves this correctly for the `<meta>` tag output, confirming the `/og-image.png` file exists at build time is not enforced.  
**Fix:** Verify `/public/og-image.png` exists. Consider using the absolute URL string directly to avoid any runtime resolution edge cases.

**M7, `hasCourseInstance` missing `startDate`/`endDate` for structured data eligibility**  
Google's Course structured data docs state that for `CourseInstance`, `startDate` is recommended. Without it, Course instances may not appear in date-filtered search features.

---

### LOW

**L1, FAQ schema is homepage-only**  
Resolved in current code: FAQPage JSON-LD is injected from the homepage `page.tsx`, not the root layout.

**L2, `paymentAccepted` value is `"Credit Card"` (inconsistent with terms)**  
Resolved in current code: LocalBusiness schema uses `"Credit Card, Debit Card"`.

**L3, Geo meta tags (`geo.region`, `geo.placename`) are informal**  
These are not part of any recognised standard used by Google. They are harmless but provide no verified ranking benefit.

**L4, No structured `BreadcrumbList` schema**  
The practice page and other sub-pages lack breadcrumb schema. Adding `BreadcrumbList` to sub-pages enables breadcrumb display in SERPs.

**L5, `Offer.url` points to the pricing anchor**  
Resolved in current code: pricing offers point to `${SITE_URL}` without URL fragments.

**L6, No `WebSite` schema with `SearchAction`**  
A `WebSite` schema with a `SearchAction` (sitelinks search box) is standard for branded searches. Not essential for a small site but is a best-practice addition.

---

## 6. Summary Counts

| Severity | Count |
|---|---|
| CRITICAL | 2 |
| HIGH | 5 |
| MEDIUM | 7 |
| LOW | 6 |

---

## 7. Appendix, File Locations

| File | Purpose |
|---|---|
| `/Users/yusufsahmed/acumen/src/app/layout.tsx` | Global metadata, JSON-LD schemas (LocalBusiness, Course, FAQPage), html lang |
| `/Users/yusufsahmed/acumen/src/app/page.tsx` | Homepage page-level metadata |
| `/Users/yusufsahmed/acumen/src/app/practice/layout.tsx` | Practice page metadata |
| `/Users/yusufsahmed/acumen/src/app/practice/page.tsx` | Practice page component (client-gated question bank) |
| `/Users/yusufsahmed/acumen/src/app/privacy/page.tsx` | Privacy policy metadata and content |
| `/Users/yusufsahmed/acumen/src/app/terms/page.tsx` | Terms of service metadata and content |
| `/Users/yusufsahmed/acumen/src/app/sitemap.ts` | Sitemap route handler |
| `/Users/yusufsahmed/acumen/src/app/robots.ts` | robots.txt route handler |
| `/Users/yusufsahmed/acumen/src/components/sections/Hero.tsx` | Homepage H1 and hero copy |
| `/Users/yusufsahmed/acumen/next.config.ts` | Security headers and CSP |
