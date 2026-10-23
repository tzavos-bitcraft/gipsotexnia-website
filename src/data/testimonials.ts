// Customer reviews. The entries below are PLACEHOLDERS (placeholder: true shows a visible
// "Sample text" badge and keeps them out of Google's structured data).
// TODO-CLIENT: replace with real reviews (name + area + permission to publish), then set placeholder: false.
type L = { el: string; en: string };
export interface Testimonial {
  text: L;
  name: string;
  area: L;
  placeholder: boolean;
}

const sample: Testimonial = {
  text: {
    el: 'Εδώ θα μπει η κριτική ενός πραγματικού πελάτη: τι φτιάξατε, πώς ήταν η συνεργασία και πώς του φάνηκε το αποτέλεσμα.',
    en: 'A real customer review goes here: what you built, how the collaboration went and how they liked the result.',
  },
  name: 'Όνομα Π.',
  area: { el: 'Περιοχή', en: 'Area' },
  placeholder: true,
};

export const testimonials: Testimonial[] = [sample, { ...sample, name: 'Όνομα Κ.' }, { ...sample, name: 'Όνομα Μ.' }];
