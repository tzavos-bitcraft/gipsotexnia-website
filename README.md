# Γυψοτεχνία: website (prototype)

Bilingual (Greek first, English under `/en/`) static website for a plasterboard business.
It is built for visitors arriving from TikTok/Instagram on phones. The site's one job is to
get them to message the business on WhatsApp or Viber.

- **Stack:** [Astro](https://astro.build) 7, fully static. It ships almost no JavaScript (only the menu, the
  floating contact button and the before/after slider), so pages load fast on mobile data. Images are
  optimized at build time. It deploys anywhere; the chosen host is Vercel.
- **Status:** prototype. Facts the client hasn't confirmed show on the page as yellow
  **⟦ΣΥΜΠΛΗΡΩΣΗ⟧ / ⟦TO CONFIRM⟧** boxes. Search engines are blocked until `ALLOW_INDEXING=true`.
- **Client checklist** (Greek, to forward): see [CLIENT-CHECKLIST.md](CLIENT-CHECKLIST.md).

---

## 1. Run it locally

Requires Node 20+ (tested on Node 22).

```bash
npm install
npm run dev          # http://localhost:4321  (live reload)
npm run build        # production build into ./dist
npm run preview      # serve ./dist locally
```

### Media pipeline

Original photos, logos and videos live in `./media-and-logos/` and are **never modified**.
`npm run prepare-media` creates the web versions:

| Output | What |
| --- | --- |
| `src/assets/photos/*.webp` | Photos, auto-rotated, max 2000px, WebP. At build time Astro generates smaller WebP sizes per screen (`srcset`). |
| `src/assets/brand/*.webp` | Logo variants (full, mark, horizontal header logo with transparent background). |
| `public/media/*.mp4` + `*-poster.webp` | Video clips: 8–10 s, 540px, no audio, ~0.45 MB each (originals: 192 MB and 98 MB). They play inline by themselves (muted, looping) once scrolled into view, with no download option. They pause off-screen, have a pause button, and don't autoplay for visitors who prefer reduced motion. |
| `public/favicon.png`, `apple-touch-icon.png`, `icon-512.png`, `og-image.jpg` | These stay PNG/JPEG on purpose. iOS home-screen icons and WhatsApp/Facebook link previews don't reliably support WebP. |

Keep the generated files in the repo; you only need to re-run this when adding media.
To add a photo, put the original in `media-and-logos/` and add it to the `photos` map in
`scripts/prepare-media.mjs`. Run `npm run prepare-media`, then add an entry with Greek and
English alt text to `src/data/photos.ts`.

---

## 2. Update contact numbers & business details

**Everything is in one file: [`src/config/site.ts`](src/config/site.ts).**

```ts
export const contact = {
  whatsappNumber: '306995667463', // digits only, with country code
  viberNumber:    '306995667463',
  phone:          '+306995667463',
  phoneDisplay:   '699 566 7463',
  email:          '',             // empty = hidden on the site
};
```

The WhatsApp (`https://wa.me/…?text=…`), Viber (`viber://chat?number=%2B…`) and phone (`tel:`)
links on every page, the floating button, the footer and Google's structured data are all
built from these values. The prefilled WhatsApp messages (Greek/English) are in the same file.

Legal details (name, ΑΦΜ, ΔΟΥ, address) are in `legal` in the same file. They're shown in the
footer and in the structured data.

Business facts (`areaServed`, `hours`, `yearsExperience`, `projectsCompleted`, `replyTime`) are
`null` until the client confirms them. While `null`, the site shows a ⟦placeholder⟧ and leaves
the fact out of the structured data. Fill one in, for example `yearsExperience: 12`, and it appears everywhere.

Where the other text lives:

| What | File |
| --- | --- |
| All page copy and interface text (GR + EN) | `src/i18n/ui.ts` |
| Services: text, FAQ, page titles/descriptions | `src/data/services.ts` |
| Photos, captions and alt texts | `src/data/photos.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Page URLs (Greek / English slugs) | `src/i18n/routes.ts` |

---

## 3. Update the TikTok & Instagram posts

No API keys or account access are needed: everything uses TikTok's and Instagram's official
embeds of the (public) accounts. It is configured in **[`content/social.json`](content/social.json)**:

```json
{
  "tiktok": {
    "featured": ["https://www.tiktok.com/@gipsotexnia/video/7690990014183820566", "…"],
    "latest": []
  },
  "instagram": { "posts": [] }
}
```

| Section on the site | Source | Updates |
| --- | --- | --- |
| **Ξεχωριστά βίντεο** (featured) | the video URLs in `tiktok.featured`. These are currently the 3 videos pinned on their profile. | by hand |
| **Πρόσφατα** (latest TikTok) | `tiktok.latest` empty → official TikTok **creator embed** (profile card + newest videos) | **automatic** |
| **Instagram** | `instagram.posts` empty → official Instagram **profile embed** (newest 6 posts) | **automatic** |

To hand-pick posts instead, put full post URLs in `latest` / `posts`. Use **Share → Copy link**;
on a phone, open short `vm.tiktok.com` links in a browser first to get the full URL.

To change the featured videos:
1. Paste the video URLs into `tiktok.featured`.
2. Run `npm run fetch-social`. It downloads each video's thumbnail through TikTok's public oEmbed
   into `src/assets/social/`. If TikTok answers `429` (rate limit), try again later or from another network.
3. Commit and push. Vercel redeploys.

**Cookies:** embeds set third-party cookies, so nothing from TikTok/Instagram loads before consent.
Featured videos show their thumbnail with a play button and load the real player when tapped.
After "Αποδοχή" on the cookie banner, the profile embeds load automatically.

---

## 4. Deploy (Vercel)

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket). The `.gitignore` leaves out the
   300 MB original videos.
2. In Vercel, choose **Add New → Project**, import the repo, and keep the Astro defaults
   (`npm run build`, output `dist`). `vercel.json` adds long cache headers for images and video.
3. Deploy. You get a `*.vercel.app` URL for the prototype. While no `SITE_URL` is set, canonical links,
   the sitemap and social previews automatically use Vercel's production URL.

**When the final domain is chosen** (`gipsotexnia.gr` is taken, so this is TODO-CLIENT):

1. Vercel: go to **Project → Settings → Domains**, add the domain, and set the DNS records Vercel shows at the registrar.
2. **Project → Settings → Environment Variables** (see `.env.example`):
   - `SITE_URL` = `https://<the-domain>` (no trailing slash)
   - `ALLOW_INDEXING` = `true` (opens the site to Google and AI crawlers, and removes `noindex`)
   - `PUBLIC_GA_ID` = `G-XXXXXXXXXX` (Google Analytics, see section 5)
3. Redeploy.

### Go-live checklist (Google + AI assistants)

The site is technically ready for search and AI answers. It has:
- Greek/English `hreflang`, a sitemap with language alternates, and canonical URLs
- `HomeAndConstructionBusiness`, `Service`, `FAQPage` and `BreadcrumbList` JSON-LD
- one page per service with its own FAQ
- `/llms.txt` for AI assistants
- a `robots.txt` that explicitly allows GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot,
  Google-Extended and Bingbot

Rankings and AI mentions for a local trade mostly depend on things outside the code:

- [ ] Google Business Profile created/verified (service-area business), linking to the site. **Most important.**
- [ ] Google Search Console: add the domain and submit `/sitemap-index.xml`
- [ ] Bing Webmaster Tools (import from Search Console) + Bing Places. ChatGPT search relies on Bing.
- [ ] Apple Business Connect
- [ ] Same name / phone / website on vrisko.gr, xo.gr, 11888.gr, Facebook, TikTok & Instagram bios
- [ ] Real Google reviews (aim for 10+ in the first month) and replies to each
- [ ] Fill the ⟦placeholders⟧, especially prices, timings and areas, which AI answers like to quote
- [ ] Later: area pages (only for areas the client really serves) and a monthly project/tips article

---

## 5. Google Analytics

1. In Google Analytics, open **Admin → Data streams → Web** and copy the **Measurement ID**
   (`G-XXXXXXXXXX`). This is not the numeric account or property ID.
2. Set it **either** in `src/config/site.ts` (`analytics.gaMeasurementId`) **or** as the Vercel
   environment variable `PUBLIC_GA_ID`, then redeploy.

How it behaves (GDPR/ePrivacy, required in Greece/EU):
- A small GR/EN cookie banner (equal "Αποδοχή / Απόρριψη" buttons) handles consent. It is
  always active, because the TikTok/Instagram embeds need consent too, and its text mentions
  analytics only when a GA ID is set. **GA loads only after "Accept".** The choice is stored in the browser, and visitors can change it any time
  via "Ρυθμίσεις cookies" in the footer. Rejecting after accepting removes the `_ga` cookies.
- Every WhatsApp / Viber / Call button sends a GA4 event **`contact_click`** with `method`
  (`whatsapp`/`viber`/`call`) and `place` (`hero`, `floating`, `header`, `service-…`, …). In GA, mark
  `contact_click` as a **key event** (Admin → Events) to count leads.
- The privacy & cookies page (`/prostasia-dedomenon/`, `/en/privacy/`) describes exactly this. Have it reviewed
  by the client before go-live.

---

## 6. Security

The site is static HTML on Vercel: no server code, database, forms, logins or admin panel. That
removes the usual attack routes (SQL injection, form spam, brute-force logins, plugin exploits).
On top of that:

| Measure | Where |
| --- | --- |
| Content-Security-Policy: only this site's own hashed scripts, plus Google Tag Manager; frames only from TikTok/Instagram; no plugins (`object-src 'none'`), no `<base>` hijacking | `astro.config.mjs` → `security.csp` (meta tag on every page) |
| No inline scripts, styles or event handlers that the CSP would have to allow | components |
| Clickjacking protection (`frame-ancestors 'none'`, `X-Frame-Options: DENY`) | `vercel.json` |
| HTTPS forced (HSTS, 2 years), `nosniff`, strict `Referrer-Policy`, `Permissions-Policy` (no camera/mic/location), `Cross-Origin-Opener-Policy` | `vercel.json` |
| All copy is HTML-escaped; structured data is JSON-escaped | `src/i18n/todo.ts`, `src/layouts/Base.astro` |
| External links use `rel="noopener"` | components |
| DDoS / TLS / edge protection | Vercel platform |
| Dependencies: `npm audit` reported 0 vulnerabilities | run `npm audit` before each release |

If you add a new third-party service (chat widget, map, other analytics), add its domains to the
CSP in `astro.config.mjs` or the browser will block it.

---

## 7. TODO-CLIENT items

Find them all with:

```bash
grep -rn "TODO-CLIENT\|todo(" src content astro.config.mjs
```

Visible on the site as yellow ⟦ΣΥΜΠΛΗΡΩΣΗ⟧ / ⟦TO CONFIRM⟧ boxes or "Δείγμα κειμένου" / "Προς επιβεβαίωση" badges.

| # | Item | Where |
| --- | --- | --- |
| 1 | Final domain (gipsotexnia.gr is taken) | Vercel settings + `SITE_URL` (`astro.config.mjs`) |
| 2 | Confirm 699 566 7463 is right for calls, WhatsApp **and** Viber | `src/config/site.ts` |
| 3 | Service area(s) | `src/config/site.ts` → `areaServed` |
| 4 | Business hours | `src/config/site.ts` → `hours` |
| 5 | Years in business | `src/config/site.ts` → `yearsExperience` |
| 6 | Number of completed projects | `src/config/site.ts` → `projectsCompleted` |
| 7 | Typical reply time | `src/config/site.ts` → `replyTime` |
| 8 | Company story (About page) | `src/i18n/ui.ts` → `about.story` |
| 9 | Three company values (About page) | `src/i18n/ui.ts` → `about.values` |
| 10 | Confirm "Clean work" and "On time" claims (badged "Προς επιβεβαίωση") | `src/i18n/ui.ts` → `why.items` (remove `confirm: true`) |
| 11 | Free site visit? | `src/i18n/ui.ts` → `steps` |
| 12 | Handed over ready to paint or painted? | `src/i18n/ui.ts` → `steps` |
| 13 | Indicative prices (general + ceilings per m²) | `src/i18n/ui.ts` → `faq`; `src/data/services.ts` → ceilings FAQ |
| 14 | Typical duration (rooms, wall units) | `src/i18n/ui.ts` → `faq`; `src/data/services.ts` → wall-units FAQ |
| 15 | Who does the lighting electrics | `src/data/services.ts` → lighting FAQ |
| 16 | Commercial work: do they work outside opening hours? | `src/data/services.ts` → commercial FAQ |
| 17 | Whether to keep andrywallconstruction@gmail.com or create a new address | `src/config/site.ts` → `contact.email` |
| 18 | What exactly was built in the two villa living-room photos (for better captions) | `src/data/photos.ts` |
| 19 | Real testimonials (client is collecting them) | `src/data/testimonials.ts` (set `placeholder: false`) |
| 22 | Opt-in for Google Analytics (+ which Gmail gets access); approve the cookie banner + privacy text | `PUBLIC_GA_ID`, `src/views/Privacy.astro` |
| 20 | Team / owner photo (strongest trust signal, currently missing) | new photo → `media-and-logos/` |
| 21 | Logo source file (SVG/AI/PDF) to replace the raster logo | `src/assets/brand/` |

---

## Project structure

```
content/social.json          TikTok / Instagram post links (client-editable)
media-and-logos/             originals (untouched)
scripts/prepare-media.mjs    originals → WebP photos, logos, small videos, icons
src/config/site.ts           contact numbers & business facts (ONE place)
src/i18n/                    routes (GR/EN slugs), all copy, placeholder helper
src/data/                    services, photos, testimonials
src/components/              header, floating contact, hero, sections…
src/views/                   page templates shared by both languages
src/pages/                   routes: / , /ypiresies/… , /en/… , robots.txt, llms.txt
src/lib/                     structured data (JSON-LD), social embeds
```
