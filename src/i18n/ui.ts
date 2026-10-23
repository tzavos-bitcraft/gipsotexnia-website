// All interface text and page copy, in Greek (primary) and English.
// Greek is written for a Greek audience, not translated word-for-word.
// Unconfirmed facts are written as ⟦…⟧ placeholders (see ./todo.ts) and come from
// src/config/site.ts once the client fills them in.
import { business } from '../config/site';
import { todo } from './todo';
import type { Lang } from './routes';

const years = business.yearsExperience;
const projects = business.projectsCompleted;
const v = <T,>(x: T | null, el: string, en: string) => ({
  el: x ?? todo(`ΣΥΜΠΛΗΡΩΣΗ: ${el}`),
  en: x ?? todo(`TO CONFIRM: ${en}`),
});
const area = {
  el: business.areaServed?.el ?? todo('ΣΥΜΠΛΗΡΩΣΗ: περιοχές'),
  en: business.areaServed?.en ?? todo('TO CONFIRM: areas'),
};
const reply = {
  el: business.replyTime?.el ?? todo('ΣΥΜΠΛΗΡΩΣΗ: χρόνος'),
  en: business.replyTime?.en ?? todo('TO CONFIRM: time'),
};
const yearsV = v(years === null ? null : `${years}+`, 'χρόνια', 'years');
const projectsV = v(projects === null ? null : `${projects}+`, 'αριθμός', 'number');

const el = {
  meta: {
    siteName: 'Γυψοτεχνία',
    home: {
      title: 'Γυψοτεχνία | Ψευδοροφές, κρυφός φωτισμός & κατασκευές γυψοσανίδας',
      description:
        'Ψευδοροφές, κρυφός φωτισμός, χωρίσματα και συνθέσεις τοίχου από γυψοσανίδα. Στείλτε μας μήνυμα σε WhatsApp ή Viber, απαντάμε γρήγορα. Δωρεάν προσφορά.',
    },
    services: {
      title: 'Υπηρεσίες γυψοσανίδας | Γυψοτεχνία',
      description:
        'Ψευδοροφές, κρυφοί φωτισμοί LED, χωρίσματα, συνθέσεις TV, καμπύλες και ειδικές κατασκευές. Δείτε τι φτιάχνουμε και ζητήστε δωρεάν προσφορά.',
    },
    projects: {
      title: 'Τα έργα μας | Γυψοτεχνία',
      description: 'Πραγματικές φωτογραφίες από έργα μας με γυψοσανίδα: οροφές, φωτισμοί, συνθέσεις τοίχου, καμάρες και πάγκοι.',
    },
    about: {
      title: 'Ποιοι είμαστε | Γυψοτεχνία',
      description: 'Γνωρίστε τη Γυψοτεχνία: επαγγελματικές κατασκευές γυψοσανίδας, σχεδιασμένες στα μέτρα σας.',
    },
    contact: {
      title: 'Επικοινωνία | Γυψοτεχνία',
      description: 'Στείλτε μας μήνυμα σε WhatsApp ή Viber ή πάρτε τηλέφωνο. Απαντάμε γρήγορα, η προσφορά είναι δωρεάν και χωρίς υποχρέωση.',
    },
    privacy: {
      title: 'Προστασία προσωπικών δεδομένων & cookies | Γυψοτεχνία',
      description: 'Πώς η ιστοσελίδα της Γυψοτεχνίας χειρίζεται προσωπικά δεδομένα και cookies.',
    },
    notFound: { title: 'Η σελίδα δεν βρέθηκε | Γυψοτεχνία', description: 'Η σελίδα που ψάχνετε δεν υπάρχει.' },
  },

  nav: {
    home: 'Αρχική',
    services: 'Υπηρεσίες',
    projects: 'Έργα',
    about: 'Ποιοι είμαστε',
    contact: 'Επικοινωνία',
    privacy: 'Προστασία δεδομένων',
    menu: 'Μενού',
    close: 'Κλείσιμο',
    skip: 'Μετάβαση στο περιεχόμενο',
    switchLang: 'English',
    switchLangLabel: 'View this page in English',
    homeLabel: 'Γυψοτεχνία, αρχική σελίδα',
  },

  cta: {
    whatsapp: 'WhatsApp',
    viber: 'Viber',
    call: 'Κλήση',
    whatsappLong: 'Μήνυμα στο WhatsApp',
    viberLong: 'Μήνυμα στο Viber',
    callLong: 'Τηλεφωνήστε μας',
    reassure: 'Στείλτε μας μήνυμα, απαντάμε γρήγορα',
    reassureSub: `Δωρεάν προσφορά · Χωρίς υποχρέωση · Απάντηση ${reply.el}`,
    photoTip: 'Tip: στείλτε μας μια φωτογραφία του χώρου, βοηθάει να σας απαντήσουμε πιο γρήγορα.',
    floatingOpen: 'Επικοινωνία',
    floatingTitle: 'Μιλήστε μαζί μας',
    floatingSub: 'Διαλέξτε όπως σας βολεύει, απαντάμε γρήγορα.',
    viberNote: 'Το Viber ανοίγει αν είναι εγκατεστημένο στη συσκευή σας.',
    seeAllServices: 'Όλες οι υπηρεσίες',
    seeAllProjects: 'Δείτε όλα τα έργα',
    getQuote: 'Ζητήστε δωρεάν προσφορά',
  },

  hero: {
    eyebrow: `Επαγγελματικές κατασκευές γυψοσανίδας · ${area.el}`,
    title: 'Δίνουμε σχήμα και φως στον χώρο σας',
    lead: 'Ψευδοροφές, κρυφοί φωτισμοί, χωρίσματα και συνθέσεις τοίχου, σχεδιασμένα στα μέτρα σας και φτιαγμένα με μεράκι.',
    imageAlt: 'Σύνθεση τοίχου από γυψοσανίδα με θέση για τηλεόραση, ράφια και ζεστό κρυφό φωτισμό LED',
  },

  trust: [
    { value: yearsV.el, label: 'χρόνια εμπειρίας' },
    { value: projectsV.el, label: 'ολοκληρωμένα έργα' },
    { value: 'Δωρεάν', label: 'προσφορά, χωρίς υποχρέωση' },
    { value: area.el, label: 'περιοχές που εξυπηρετούμε' },
  ],

  services: {
    title: 'Τι φτιάχνουμε',
    lead: 'Από ένα απλό χώρισμα μέχρι έναν ολόκληρο τοίχο-έργο τέχνης. Πείτε μας τι έχετε στο μυαλό σας.',
    pageTitle: 'Υπηρεσίες',
    pageLead:
      'Η γυψοσανίδα είναι γρήγορη, καθαρή και απίστευτα ευέλικτη. Με αυτήν αλλάζει η όψη ενός χώρου χωρίς μεγάλες επεμβάσεις. Διαλέξτε μια υπηρεσία για να δείτε λεπτομέρειες και έργα μας.',
  },

  beforeAfter: {
    title: 'Πριν & μετά',
    lead: 'Ο ίδιος τοίχος: πρώτα η γυψοσανίδα με τα γωνιόκρανα, μετά το τελικό αποτέλεσμα με κρυφό φωτισμό.',
    before: 'Πριν',
    after: 'Μετά',
    beforeAlt: 'Σύνθεση τοίχου από γυψοσανίδα κατά την κατασκευή, με γωνιόκρανα και ανοίγματα για ράφια',
    afterAlt: 'Η ίδια σύνθεση τοίχου ολοκληρωμένη, βαμμένη, με ζεστό φωτισμό LED στα ράφια',
    sliderLabel: 'Σύρετε για να συγκρίνετε πριν και μετά',
  },

  work: {
    title: 'Δουλειές μας',
    lead: 'Πραγματικές φωτογραφίες από έργα μας, τελειωμένα αλλά και την ώρα της κατασκευής.',
    pageTitle: 'Τα έργα μας',
    pageLead: 'Μια μικρή γεύση από όσα έχουμε φτιάξει. Πολλά περισσότερα, και σε βίντεο, θα βρείτε στο TikTok μας.',
    wip: 'Κατά την κατασκευή',
    filterAll: 'Όλα',
    videoTitle: 'Δείτε το από κοντά',
    videoLead: 'Σύντομη περιήγηση σε ολοκληρωμένο έργο: γραφείο με γεωμετρικό πάγκο και κρυφό φωτισμό στην οροφή.',
    videoLabel: 'Βίντεο: περιήγηση σε ολοκληρωμένο γραφείο',
    play: 'Αναπαραγωγή βίντεο',
  },

  tiktok: {
    title: 'Μας βλέπετε στο TikTok',
    lead: 'Εκεί θα δείτε τη δουλειά μας από την αρχή ως το τέλος: πώς στήνεται μια οροφή, πώς «ανάβει» ένας κρυφός φωτισμός, πώς γίνεται ένας τοίχος από το μηδέν.',
    featured: 'Ξεχωριστά βίντεο',
    latest: 'Πρόσφατα',
    latestCard: 'Τα πιο πρόσφατα βίντεό μας',
    play: 'Αναπαραγωγή βίντεο TikTok',
    follow: 'Ακολουθήστε μας στο TikTok',
    placeholder: 'Το βίντεο θα εμφανιστεί εδώ',
    placeholderSub: 'Δείτε το στο προφίλ μας',
    embedTitle: 'Βίντεο TikTok της Γυψοτεχνίας',
  },

  instagram: {
    title: 'Και στο Instagram',
    lead: 'Φωτογραφίες από τελειωμένα έργα και ιδέες για τον χώρο σας.',
    follow: 'Ακολουθήστε μας στο Instagram',
    latestCard: 'Οι τελευταίες μας αναρτήσεις',
    placeholder: 'Η ανάρτηση θα εμφανιστεί εδώ',
    embedTitle: 'Ανάρτηση Instagram της Γυψοτεχνίας',
  },

  why: {
    title: 'Γιατί να μας εμπιστευτείτε',
    // Items marked confirm: true show a "to confirm" badge until the client approves them.
    items: [
      { icon: 'chat', title: 'Απαντάμε γρήγορα', text: 'Στείλτε μήνυμα σε WhatsApp ή Viber όποτε σας βολεύει. Δεν θα περιμένετε μέρες για μια απάντηση.' },
      { icon: 'tag', title: 'Δωρεάν προσφορά', text: 'Ρωτήστε ό,τι θέλετε. Η προσφορά είναι δωρεάν και δεν σας δεσμεύει σε τίποτα.' },
      { icon: 'ruler', title: 'Στα μέτρα σας', text: 'Σχεδιάζουμε, κατασκευάζουμε και τοποθετούμε κάθε κατασκευή ειδικά για τον δικό σας χώρο.' },
      { icon: 'eye', title: 'Δείτε πρώτα τη δουλειά μας', text: 'Πραγματικές φωτογραφίες και βίντεο από τα έργα μας, εδώ και στο TikTok.' },
      { icon: 'broom', title: 'Καθαρή δουλειά', text: 'Προστατεύουμε δάπεδα και έπιπλα και μαζεύουμε πριν φύγουμε.', confirm: true },
      { icon: 'clock', title: 'Στην ώρα μας', text: 'Λέμε πότε θα τελειώσουμε και το τηρούμε.', confirm: true },
    ],
  },

  steps: {
    title: 'Πώς δουλεύουμε',
    lead: 'Απλά, χωρίς γραφειοκρατία.',
    items: [
      { title: 'Στείλτε μήνυμα', text: 'Σε WhatsApp ή Viber, με λίγα λόγια και, αν θέλετε, μια φωτογραφία του χώρου.' },
      { title: 'Τα λέμε από κοντά', text: `Συζητάμε την ιδέα σας και παίρνουμε μέτρα. ${todo('ΣΥΜΠΛΗΡΩΣΗ: δωρεάν αυτοψία;')}` },
      { title: 'Παίρνετε προσφορά', text: 'Δωρεάν και χωρίς υποχρέωση. Αποφασίζετε με την ησυχία σας.' },
      { title: 'Φτιάχνουμε & παραδίδουμε', text: `Κατασκευάζουμε και τοποθετούμε. ${todo('ΣΥΜΠΛΗΡΩΣΗ: παράδοση έτοιμο για βάψιμο ή βαμμένο;')}` },
    ],
  },

  testimonials: {
    title: 'Τι λένε οι πελάτες μας',
    placeholderBadge: 'Δείγμα κειμένου, θα αντικατασταθεί',
    confirmBadge: 'Προς επιβεβαίωση',
  },

  faq: {
    title: 'Συχνές ερωτήσεις',
    items: [
      {
        q: 'Πόσο κοστίζει μια κατασκευή με γυψοσανίδα;',
        a: `Εξαρτάται από το μέγεθος, το σχέδιο και τον φωτισμό. Στείλτε μας μια φωτογραφία και περίπου διαστάσεις για μια πρώτη εκτίμηση. Η προσφορά είναι δωρεάν. ${todo('ΣΥΜΠΛΗΡΩΣΗ: ενδεικτικές τιμές')}`,
      },
      {
        q: 'Πόσες μέρες κρατάει η δουλειά;',
        a: `Μια ψευδοροφή ή ένα χώρισμα σε ένα δωμάτιο συνήθως ολοκληρώνεται σε ${todo('ΣΥΜΠΛΗΡΩΣΗ: ημέρες')}. Για μεγαλύτερες κατασκευές θα σας πούμε μετά από μια ματιά στον χώρο.`,
      },
      {
        q: 'Γιατί γυψοσανίδα και όχι τούβλο;',
        a: 'Είναι ελαφριά, στήνεται γρήγορα, κάνει πολύ λιγότερη φασαρία και σκόνη, και επιτρέπει σχήματα, κόγχες και κρυφό φωτισμό που με τούβλο είναι δύσκολα.',
      },
      {
        q: 'Αντέχει η γυψοσανίδα στην υγρασία;',
        a: 'Ναι, με το σωστό υλικό. Για μπάνια και κουζίνες υπάρχουν ειδικές ανθυγρές πλάκες, και για χώρους εκτεθειμένους στον καιρό πλάκες όπως η Knauf GuardEX που φαίνεται στις φωτογραφίες μας.',
      },
      {
        q: 'Σε ποιες περιοχές δουλεύετε;',
        a: `${area.el}. Αν είστε αλλού, στείλτε μας μήνυμα και θα το δούμε.`,
      },
    ],
  },

  contactSection: {
    title: 'Ας μιλήσουμε για τον χώρο σας',
    lead: 'Όλα ξεκινούν με ένα απλό μήνυμα. Ρωτήστε ό,τι θέλετε, δεν σας δεσμεύει σε τίποτα.',
    pageTitle: 'Επικοινωνία',
    pageLead: 'Ο πιο γρήγορος τρόπος είναι ένα μήνυμα σε WhatsApp ή Viber. Αν προτιμάτε, πάρτε μας τηλέφωνο.',
    phone: 'Τηλέφωνο',
    email: 'Email',
    area: 'Περιοχές',
    hours: 'Ωράριο',
    followUs: 'Ακολουθήστε μας',
  },

  about: {
    title: 'Ποιοι είμαστε',
    lead: 'Η Γυψοτεχνία σχεδιάζει, κατασκευάζει και τοποθετεί λύσεις γυψοσανίδας στα μέτρα σας: ψευδοροφές, χωρίσματα, κρυφούς φωτισμούς, συνθέσεις τοίχου και ειδικές κατασκευές.',
    story: [
      todo('ΣΥΜΠΛΗΡΩΣΗ: η ιστορία της επιχείρησης (πώς ξεκινήσατε, από πότε, ποιοι είστε). 2–3 σύντομες παράγραφοι.'),
      'Αν μας βρήκατε στο TikTok ή στο Instagram, εκεί θα δείτε ακριβώς πώς δουλεύουμε. Και αν σας άρεσε κάτι, απλά στείλτε μας μήνυμα.',
    ],
    vanAlt: 'Το βαν της Γυψοτεχνίας με τα εργαλεία μας, έτοιμο για το επόμενο έργο',
    vanVideoLabel: 'Βίντεο: το βαν της Γυψοτεχνίας με τις υπηρεσίες μας',
    valuesTitle: 'Τι μας νοιάζει',
    values: [
      { title: todo('ΣΥΜΠΛΗΡΩΣΗ: αξία 1'), text: todo('ΣΥΜΠΛΗΡΩΣΗ: με δικά σας λόγια') },
      { title: todo('ΣΥΜΠΛΗΡΩΣΗ: αξία 2'), text: todo('ΣΥΜΠΛΗΡΩΣΗ: με δικά σας λόγια') },
      { title: todo('ΣΥΜΠΛΗΡΩΣΗ: αξία 3'), text: todo('ΣΥΜΠΛΗΡΩΣΗ: με δικά σας λόγια') },
    ],
  },

  consent: {
    title: 'Cookies',
    text: 'Με τη συγκατάθεσή σας χρησιμοποιούμε cookies για στατιστικά επισκεψιμότητας (Google Analytics) και για να εμφανίζουμε βίντεο από TikTok και Instagram.',
    textNoGa: 'Τα βίντεο από TikTok και Instagram χρησιμοποιούν cookies. Με τη συγκατάθεσή σας εμφανίζονται αυτόματα.',
    accept: 'Αποδοχή',
    reject: 'Απόρριψη',
    more: 'Περισσότερα',
    settings: 'Ρυθμίσεις cookies',
    embedNote: 'Το βίντεο φορτώνει από το TikTok, που χρησιμοποιεί cookies.',
    embedNoteIg: 'Η ανάρτηση φορτώνει από το Instagram, που χρησιμοποιεί cookies.',
    embedLoad: 'Εμφάνιση',
  },

  footer: {
    tagline: 'Επαγγελματικές κατασκευές γυψοσανίδας.',
    pages: 'Σελίδες',
    contact: 'Επικοινωνία',
    rights: 'Με επιφύλαξη παντός δικαιώματος.',
  },

  notFound: { title: 'Ωχ, αυτή η σελίδα δεν υπάρχει', text: 'Ίσως ο σύνδεσμος να άλλαξε. Πάμε πίσω στην αρχή;', back: 'Στην αρχική' },
};

type Dict = typeof el;

const en: Dict = {
  meta: {
    siteName: 'Gipsotexnia',
    home: {
      title: 'Gipsotexnia | Plasterboard ceilings, lighting & feature walls',
      description:
        'Suspended ceilings, hidden LED lighting, partitions and feature walls in plasterboard. Message us on WhatsApp or Viber for a fast reply and a free quote.',
    },
    services: {
      title: 'Plasterboard services | Gipsotexnia',
      description:
        'Suspended ceilings, LED lighting coves, partitions, TV wall units, curves and custom builds. See what we make and ask for a free quote.',
    },
    projects: {
      title: 'Our projects | Gipsotexnia',
      description: 'Real photos from our plasterboard projects: ceilings, lighting, wall units, arches and counters.',
    },
    about: {
      title: 'About us | Gipsotexnia',
      description: 'Meet Gipsotexnia: professional plasterboard work, designed around you.',
    },
    contact: {
      title: 'Contact | Gipsotexnia',
      description: 'Message us on WhatsApp or Viber, or give us a call. We reply fast; quotes are free with no obligation.',
    },
    privacy: {
      title: 'Privacy & cookies | Gipsotexnia',
      description: 'How the Gipsotexnia website handles personal data and cookies.',
    },
    notFound: { title: 'Page not found | Gipsotexnia', description: 'The page you are looking for does not exist.' },
  },

  nav: {
    home: 'Home',
    services: 'Services',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy',
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to content',
    switchLang: 'Ελληνικά',
    switchLangLabel: 'Δείτε τη σελίδα στα ελληνικά',
    homeLabel: 'Gipsotexnia, home page',
  },

  cta: {
    whatsapp: 'WhatsApp',
    viber: 'Viber',
    call: 'Call',
    whatsappLong: 'Message us on WhatsApp',
    viberLong: 'Message us on Viber',
    callLong: 'Give us a call',
    reassure: 'Send us a message, we reply fast',
    reassureSub: `Free quote · No obligation · Reply ${reply.en}`,
    photoTip: 'Tip: send us a photo of the space, it helps us reply faster.',
    floatingOpen: 'Contact',
    floatingTitle: 'Talk to us',
    floatingSub: 'Pick whatever suits you, we reply fast.',
    viberNote: 'Viber opens if it’s installed on your device.',
    seeAllServices: 'All services',
    seeAllProjects: 'See all projects',
    getQuote: 'Get a free quote',
  },

  hero: {
    eyebrow: `Professional plasterboard work · ${area.en}`,
    title: 'We give your space shape and light',
    lead: 'Suspended ceilings, hidden lighting, partitions and feature walls, designed around you and built with care.',
    imageAlt: 'Plasterboard feature wall with a TV recess, shelving niches and warm hidden LED lighting',
  },

  trust: [
    { value: yearsV.en, label: 'years of experience' },
    { value: projectsV.en, label: 'projects completed' },
    { value: 'Free', label: 'quote, no obligation' },
    { value: area.en, label: 'areas we serve' },
  ],

  services: {
    title: 'What we build',
    lead: 'From a simple partition to a full statement wall. Tell us what you have in mind.',
    pageTitle: 'Services',
    pageLead:
      'Plasterboard is fast, clean and remarkably versatile. It transforms a room without major building work. Pick a service to see details and our work.',
  },

  beforeAfter: {
    title: 'Before & after',
    lead: 'The same wall: first the boards and corner beads, then the finished result with hidden lighting.',
    before: 'Before',
    after: 'After',
    beforeAlt: 'Plasterboard wall unit under construction, with corner beads and shelf openings',
    afterAlt: 'The same wall unit finished and painted, with warm LED lighting in the shelves',
    sliderLabel: 'Drag to compare before and after',
  },

  work: {
    title: 'Our work',
    lead: 'Real photos from our projects, finished and mid-build.',
    pageTitle: 'Our projects',
    pageLead: 'A small taste of what we’ve built. You’ll find much more, including videos, on our TikTok.',
    wip: 'In progress',
    filterAll: 'All',
    videoTitle: 'See it up close',
    videoLead: 'A short walk through a finished project: an office with a geometric desk and a hidden-light ceiling.',
    videoLabel: 'Video: walkthrough of a finished office',
    play: 'Play video',
  },

  tiktok: {
    title: 'Find us on TikTok',
    lead: 'See our work from start to finish: how a ceiling goes up, how a lighting cove comes alive, how a wall is built from scratch.',
    featured: 'Featured videos',
    latest: 'Latest',
    latestCard: 'Our latest videos',
    play: 'Play TikTok video',
    follow: 'Follow us on TikTok',
    placeholder: 'Video will appear here',
    placeholderSub: 'Watch it on our profile',
    embedTitle: 'Gipsotexnia TikTok video',
  },

  instagram: {
    title: 'And on Instagram',
    lead: 'Photos of finished projects and ideas for your space.',
    follow: 'Follow us on Instagram',
    latestCard: 'Our latest posts',
    placeholder: 'Post will appear here',
    embedTitle: 'Gipsotexnia Instagram post',
  },

  why: {
    title: 'Why people trust us',
    items: [
      { icon: 'chat', title: 'Fast replies', text: 'Message us on WhatsApp or Viber whenever it suits you. You won’t wait days for an answer.' },
      { icon: 'tag', title: 'Free quote', text: 'Ask anything. The quote is free and there’s no obligation.' },
      { icon: 'ruler', title: 'Made to measure', text: 'We design, build and install every piece specifically for your space.' },
      { icon: 'eye', title: 'See our work first', text: 'Real photos and videos of our projects, here and on TikTok.' },
      { icon: 'broom', title: 'Clean work', text: 'We protect floors and furniture and tidy up before we leave.', confirm: true },
      { icon: 'clock', title: 'On time', text: 'We tell you when we’ll finish and we stick to it.', confirm: true },
    ],
  },

  steps: {
    title: 'How it works',
    lead: 'Simple, no paperwork maze.',
    items: [
      { title: 'Send a message', text: 'On WhatsApp or Viber, with a few words and, if you like, a photo of the space.' },
      { title: 'We talk it through', text: `We discuss your idea and take measurements. ${todo('TO CONFIRM: free site visit?')}` },
      { title: 'You get a quote', text: 'Free and with no obligation. Decide in your own time.' },
      { title: 'We build & hand over', text: `We build and install. ${todo('TO CONFIRM: handed over ready to paint, or painted?')}` },
    ],
  },

  testimonials: {
    title: 'What our clients say',
    placeholderBadge: 'Sample text, to be replaced',
    confirmBadge: 'To confirm',
  },

  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'How much does plasterboard work cost?',
        a: `It depends on size, design and lighting. Send us a photo and rough dimensions for a first estimate. The quote is free. ${todo('TO CONFIRM: indicative prices')}`,
      },
      {
        q: 'How long does it take?',
        a: `A ceiling or partition in one room usually takes ${todo('TO CONFIRM: days')}. For larger projects we’ll tell you after a look at the space.`,
      },
      {
        q: 'Why plasterboard instead of brick?',
        a: 'It’s light, quick to install, far less messy and dusty, and allows shapes, niches and hidden lighting that are hard to do in brick.',
      },
      {
        q: 'Can plasterboard handle moisture?',
        a: 'Yes, with the right board. Bathrooms and kitchens use moisture-resistant boards, and weather-exposed areas use boards such as the Knauf GuardEX seen in our photos.',
      },
      {
        q: 'Which areas do you cover?',
        a: `${area.en}. If you’re elsewhere, send us a message and we’ll see.`,
      },
    ],
  },

  contactSection: {
    title: 'Let’s talk about your space',
    lead: 'It all starts with a simple message. Ask anything, there’s no commitment.',
    pageTitle: 'Contact',
    pageLead: 'The fastest way is a message on WhatsApp or Viber. If you prefer, give us a call.',
    phone: 'Phone',
    email: 'Email',
    area: 'Areas',
    hours: 'Hours',
    followUs: 'Follow us',
  },

  about: {
    title: 'About us',
    lead: 'Gipsotexnia designs, builds and installs made-to-measure plasterboard solutions: suspended ceilings, partitions, hidden lighting, feature walls and custom builds.',
    story: [
      todo('TO CONFIRM: the company story (how you started, since when, who you are). 2–3 short paragraphs.'),
      'If you found us on TikTok or Instagram, that’s exactly how we work. And if you liked something, just send us a message.',
    ],
    vanAlt: 'The Gipsotexnia van loaded with our tools, ready for the next job',
    vanVideoLabel: 'Video: the Gipsotexnia van listing our services',
    valuesTitle: 'What we care about',
    values: [
      { title: todo('TO CONFIRM: value 1'), text: todo('TO CONFIRM: in your own words') },
      { title: todo('TO CONFIRM: value 2'), text: todo('TO CONFIRM: in your own words') },
      { title: todo('TO CONFIRM: value 3'), text: todo('TO CONFIRM: in your own words') },
    ],
  },

  consent: {
    title: 'Cookies',
    text: 'With your consent we use cookies for visitor statistics (Google Analytics) and to show videos from TikTok and Instagram.',
    textNoGa: 'Videos from TikTok and Instagram use cookies. With your consent they are shown automatically.',
    accept: 'Accept',
    reject: 'Reject',
    more: 'Learn more',
    settings: 'Cookie settings',
    embedNote: 'This video loads from TikTok, which uses cookies.',
    embedNoteIg: 'This post loads from Instagram, which uses cookies.',
    embedLoad: 'Show',
  },

  footer: {
    tagline: 'Professional plasterboard construction.',
    pages: 'Pages',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },

  notFound: { title: 'Oops, this page doesn’t exist', text: 'The link may have changed. Back to the start?', back: 'Go home' },
};

export const ui: Record<Lang, Dict> = { el, en };
export const t = (lang: Lang) => ui[lang];
