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
