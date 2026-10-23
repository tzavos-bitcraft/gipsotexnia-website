// Page slugs per language. Greek is the default (no prefix), English lives under /en/.
export type Lang = 'el' | 'en';
export type PageKey = 'home' | 'services' | 'projects' | 'about' | 'contact' | 'privacy';

export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { el: '/', en: '/en/' },
  services: { el: '/ypiresies/', en: '/en/services/' },
  projects: { el: '/erga/', en: '/en/projects/' },
  about: { el: '/sxetika/', en: '/en/about/' },
  contact: { el: '/epikoinonia/', en: '/en/contact/' },
  privacy: { el: '/prostasia-dedomenon/', en: '/en/privacy/' },
};

// Dedicated page per service (Greek and English slugs).
export const serviceSlugs = {
  ceilings: { el: 'psevdorofes-gypsosanidas', en: 'suspended-ceilings' },
  lighting: { el: 'kryfos-fotismos-led', en: 'hidden-led-lighting' },
  partitions: { el: 'xorismata-gypsosanidas', en: 'plasterboard-partitions' },
  'wall-units': { el: 'syntheseis-toixou-tv', en: 'tv-wall-units' },
  custom: { el: 'eidikes-kataskeves', en: 'custom-features' },
  commercial: { el: 'epaggelmatikoi-xoroi', en: 'commercial-spaces' },
} as const satisfies Record<string, Record<Lang, string>>;

export type ServiceKey = keyof typeof serviceSlugs;

export const servicePath = (key: ServiceKey, lang: Lang) => `${routes.services[lang]}${serviceSlugs[key][lang]}/`;

export const hreflang: Record<Lang, string> = { el: 'el-GR', en: 'en' };

export const path = (page: PageKey, lang: Lang) => routes[page][lang];

/** hreflang alternates for a given pathname (used by the sitemap). */
export function alternatesFor(pathname: string) {
  const all: Record<Lang, string>[] = [
    ...Object.values(routes),
    ...(Object.keys(serviceSlugs) as ServiceKey[]).map((k) => ({ el: servicePath(k, 'el'), en: servicePath(k, 'en') })),
  ];
  const entry = all.find((r) => r.el === pathname || r.en === pathname);
  if (!entry) return null;
  return (Object.keys(entry) as Lang[]).map((lang) => ({ lang: hreflang[lang], path: entry[lang] }));
}
