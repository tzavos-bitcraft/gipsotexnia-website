// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { alternatesFor } from './src/i18n/routes.ts';

// The public URL of the site. Set SITE_URL when the final domain is chosen (see README).
// On Vercel it falls back to the project's production URL; locally to localhost.
// TODO-CLIENT: final domain (gipsotexnia.gr is taken).
const SITE_URL =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:4321');

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  markdown: { syntaxHighlight: false },
  // Content-Security-Policy (as a <meta> tag on every page). Astro hashes its own scripts and
  // styles; everything else is denied unless listed here. Add a host here if you embed something new.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com",
        "font-src 'self'",
        "media-src 'self'",
        "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
        'frame-src https://www.tiktok.com https://www.instagram.com',
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        'upgrade-insecure-requests',
      ],
      scriptDirective: {
        resources: ["'self'", 'https://www.googletagmanager.com'],
      },
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      // Greek and English pages use different slugs, so hreflang links come from our route map.
      serialize(item) {
        const links = alternatesFor(new URL(item.url).pathname);
        if (links) item.links = links.map(({ lang, path }) => ({ lang, url: new URL(path, SITE_URL).href }));
        return item;
      },
    }),
  ],
});
