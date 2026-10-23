// Structured data (JSON-LD) for Google and AI assistants.
// Unconfirmed facts (⟦placeholders⟧ / null values) are left out, never guessed.
import { contact, business, social, legal } from '../config/site';
import { plain, hasTodo } from '../i18n/todo';
import { path, servicePath, type Lang } from '../i18n/routes';
import { services, type Service } from '../data/services';
import { t } from '../i18n/ui';

const abs = (site: URL, p: string) => new URL(p, site).href;

export function businessSchema(site: URL, lang: Lang) {
  const d = t(lang);
  const id = abs(site, '/#business');
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': id,
    name: business.name,
    alternateName: business.nameLatin,
    slogan: business.tagline[lang],
    description: plain(d.meta.home.description),
    url: abs(site, path('home', lang)),
    logo: abs(site, '/icon-512.png'),
    image: abs(site, '/og-image.jpg'),
    legalName: legal.name,
    vatID: legal.vat,
    address: {
      '@type': 'PostalAddress',
      streetAddress: legal.address.street[lang],
      addressLocality: legal.address.city[lang],
      postalCode: legal.address.postalCode,
      addressRegion: legal.address.region[lang],
      addressCountry: legal.address.country,
    },
    telephone: contact.phone,
    ...(contact.email && { email: contact.email }),
    ...(business.areaServed && { areaServed: business.areaServed[lang] }),
    ...(business.hours && { openingHours: business.hours.schema }),
    ...(business.yearsExperience && {
      foundingDate: String(new Date().getFullYear() - business.yearsExperience),
    }),
    sameAs: [social.tiktok, social.instagram],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: contact.phone,
        contactType: 'customer service',
        availableLanguage: ['el', 'en'],
      },
    ],
    knowsAbout: services.map((s) => s.title[lang]),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: d.nav.services,
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title[lang], url: abs(site, servicePath(s.key, lang)) },
      })),
    },
  };
}

export function websiteSchema(site: URL, lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': abs(site, '/#website'),
    url: abs(site, '/'),
    name: business.name,
    alternateName: business.nameLatin,
    inLanguage: ['el', 'en'],
    publisher: { '@id': abs(site, '/#business') },
  };
}

export function serviceSchema(site: URL, s: Service, lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title[lang],
    serviceType: s.title[lang],
    description: plain(s.intro[lang][0]),
    url: abs(site, servicePath(s.key, lang)),
    provider: { '@id': abs(site, '/#business') },
    ...(business.areaServed && { areaServed: business.areaServed[lang] }),
  };
}

/** FAQ schema: only questions whose answers are fully confirmed. */
export function faqSchema(items: { q: string; a: string }[]) {
  const ok = items.filter((i) => !hasTodo(i.a) && !hasTodo(i.q));
  if (!ok.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ok.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function breadcrumbSchema(site: URL, crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(site, c.path),
    })),
  };
}
