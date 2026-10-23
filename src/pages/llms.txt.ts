// /llms.txt: a plain-text summary of the business for AI assistants (llmstxt.org convention).
// Built from the same data as the site; unconfirmed facts are left out.
import type { APIRoute } from 'astro';
import { contact, business, social, links, legal } from '../config/site';
import { services } from '../data/services';
import { plain } from '../i18n/todo';
import { path, servicePath } from '../i18n/routes';
import { t } from '../i18n/ui';

export const GET: APIRoute = ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  const el = t('el');
  const en = t('en');
  const facts = [
    `- Τηλέφωνο / WhatsApp / Viber: ${contact.phone}`,
    `- WhatsApp: ${links.whatsapp('el').split('?')[0]}`,
    contact.email && `- Email: ${contact.email}`,
    business.areaServed && `- Περιοχές: ${business.areaServed.el}`,
    business.hours && `- Ωράριο: ${business.hours.el}`,
    `- Επωνυμία: ${legal.name} (ΑΦΜ ${legal.vat})`,
    `- Έδρα: ${legal.address.street.el}, ${legal.address.postalCode} ${legal.address.city.el}, ${legal.address.region.el}`,
    `- TikTok: ${social.tiktok}`,
    `- Instagram: ${social.instagram}`,
    `- Δωρεάν προσφορά, χωρίς υποχρέωση. Γρήγορη απάντηση σε WhatsApp και Viber.`,
  ].filter(Boolean);

  const body = `# ${business.name} (${business.nameLatin})

> ${business.tagline.el}. ${plain(el.meta.home.description)}

${plain(en.meta.home.description)}

## Στοιχεία / Key facts
${facts.join('\n')}

## Υπηρεσίες / Services
${services.map((s) => `- [${s.title.el}](${u(servicePath(s.key, 'el'))}): ${plain(s.short.el)}`).join('\n')}

## Services (English)
${services.map((s) => `- [${s.title.en}](${u(servicePath(s.key, 'en'))}): ${plain(s.short.en)}`).join('\n')}

## Σελίδες / Pages
- [Αρχική](${u(path('home', 'el'))})
- [Έργα / Projects](${u(path('projects', 'el'))})
- [Ποιοι είμαστε / About](${u(path('about', 'el'))})
- [Επικοινωνία / Contact](${u(path('contact', 'el'))})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
