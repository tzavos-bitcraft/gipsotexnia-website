// ─────────────────────────────────────────────────────────────
//  ONE place for all contact details and business facts.
//  Change a value here and it updates everywhere on the site
//  (buttons, floating menu, footer, structured data for Google).
// ─────────────────────────────────────────────────────────────

export const contact = {
  /** International format, digits only, no "+" or spaces. Used for WhatsApp and Viber links. */
  whatsappNumber: '306995667463',
  viberNumber: '306995667463',
  /** Number used for "Call" buttons, in E.164 format. */
  phone: '+306995667463',
  /** How the phone number is shown as text. */
  phoneDisplay: '699 566 7463',
  // Current email; the client may create a new one later.
  email: 'andrywallconstruction@gmail.com',
};

// Leave a value as null until the client confirms it. The site then shows a
// highlighted ⟦ΣΥΜΠΛΗΡΩΣΗ⟧ placeholder and leaves it out of Google's structured data.
export const business = {
  name: 'Γυψοτεχνία',
  nameLatin: 'Gipsotexnia',
  /** Tagline from the company van. */
  tagline: { el: 'Επαγγελματικές Κατασκευές Γυψοσανίδας', en: 'Professional Plasterboard Construction' },
  /** Shown on the site; `schema` = place names given to Google/AI as service areas. */
  areaServed: { el: 'Σε όλη την Αττική', en: 'All of Attica', schema: ['Αθήνα', 'Αττική'] } as null | {
    el: string;
    en: string;
    schema: string[];
  },
  // TODO-CLIENT: hours, e.g. { el: 'Δευτέρα – Σάββατο, 08:00 – 20:00', en: '…', schema: ['Mo-Sa 08:00-20:00'] }
  hours: null as null | { el: string; en: string; schema: string[] },
  // TODO-CLIENT: years in business (number), e.g. 12
  yearsExperience: null as null | number,
  // TODO-CLIENT: completed projects (number), e.g. 300
  projectsCompleted: null as null | number,
  /** Reply promise shown under the contact buttons. */
  replyTime: { el: 'Άμεση απάντηση', en: 'Quick reply' } as null | { el: string; en: string },
};

/** Legal details (from the tax registry). Shown in the footer and in Google's structured data. */
export const legal = {
  name: 'DINE ALBIN EDMOND',
  vat: '164566374',
  taxOffice: 'ΚΕΦΟΔΕ Αττικής',
  activity: {
    el: 'Εργασίες τοποθέτησης κινητών χωρισμάτων και ψευδοροφών σε κατασκευές',
    en: 'Installation of partitions and suspended ceilings',
  },
  address: {
    street: { el: 'Κορδελιού 55', en: 'Kordeliou 55' },
    city: { el: 'Καισαριανή', en: 'Kaisariani' },
    postalCode: '16121',
    region: { el: 'Αττική', en: 'Attica' },
    country: 'GR',
  },
};

/**
 * Google Analytics 4. Paste the Measurement ID (starts with "G-", found in GA under
 * Admin → Data streams → Web). It can also be set with the PUBLIC_GA_ID environment variable.
 * Empty = no analytics. Analytics only loads after the visitor accepts cookies.
 */
export const analytics = {
  gaMeasurementId: (import.meta.env.PUBLIC_GA_ID as string | undefined) || '', // TODO: G-XXXXXXXXXX
};

export const social = {
  tiktok: 'https://www.tiktok.com/@gipsotexnia',
  tiktokHandle: '@gipsotexnia',
  instagram: 'https://www.instagram.com/gipsotexnia/',
  instagramHandle: '@gipsotexnia',
};

/** Pre-filled WhatsApp messages. */
const whatsappText = {
  el: 'Γεια σας! Βρήκα τη σελίδα σας και θα ήθελα πληροφορίες για μια κατασκευή με γυψοσανίδα.',
  en: 'Hello! I found your website and would like some information about a plasterboard project.',
};

export type Lang = 'el' | 'en';

export const links = {
  whatsapp: (lang: Lang) => `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(whatsappText[lang])}`,
  viber: () => `viber://chat?number=%2B${contact.viberNumber}`,
  call: () => `tel:${contact.phone}`,
  email: () => (contact.email ? `mailto:${contact.email}` : ''),
};
