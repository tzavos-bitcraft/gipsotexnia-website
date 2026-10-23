// The six services, each with its own page. Copy describes what the service IS
// (general knowledge about plasterboard). Anything about the company itself
// (prices, timings, guarantees) stays a ⟦placeholder⟧ until the client confirms it.
import { todo } from '../i18n/todo';
import type { ServiceKey } from '../i18n/routes';

export type { ServiceKey };

type L = { el: string; en: string };
type LList = { el: string[]; en: string[] };

export interface Service {
  key: ServiceKey;
  icon: string;
  /** Main photo key (see photos.ts). */
  photo: string;
  title: L;
  /** Card text on the home page / services list. */
  short: L;
  /** Opening paragraphs on the service page. */
  intro: LList;
  /** "Ideal for" bullet list. */
  uses: LList;
  faq: { q: L; a: L }[];
  meta: { title: L; description: L };
  /** Service not confirmed by the client yet: shows a badge. */
  confirm?: boolean;
}

export const services: Service[] = [
  {
    key: 'ceilings',
    icon: 'ceiling',
    photo: 'ceiling-cove-living',
    title: { el: 'Ψευδοροφές', en: 'Suspended ceilings' },
    short: {
      el: 'Επίπεδες ή σε επίπεδα, με σποτ ή κρυφό φωτισμό. Κρύβουν σωλήνες και καλώδια και αλλάζουν όλη την αίσθηση του δωματίου.',
      en: 'Flat or stepped, with spotlights or hidden lighting. They hide pipes and cables and change the whole feel of a room.',
    },
    intro: {
      el: [
        'Μια ψευδοροφή γυψοσανίδας κατεβαίνει λίγα εκατοστά από την πλάκα και δημιουργεί μια καινούργια, τέλεια επίπεδη οροφή. Από πάνω χωράνε καλώδια, σωλήνες κλιματισμού και μόνωση, και από κάτω τα σποτ και ο κρυφός φωτισμός που θέλετε.',
        'Μπορεί να είναι απλή και επίπεδη, ή να έχει επίπεδα, καμπύλες και περιμετρικό φωτισμό, όπως στις φωτογραφίες μας.',
      ],
      en: [
        'A plasterboard ceiling hangs a few centimetres below the slab and creates a new, perfectly level ceiling. Above it go cables, air-conditioning ducts and insulation; below it, the spotlights and hidden lighting you want.',
        'It can be simple and flat, or stepped, curved and lit around the edges, as in our photos.',
      ],
    },
    uses: {
      el: ['Σαλόνια και υπνοδωμάτια', 'Κουζίνες και διάδρομοι', 'Κάλυψη καλωδίων, σωλήνων και κλιματιστικών', 'Γραφεία και καταστήματα'],
      en: ['Living rooms and bedrooms', 'Kitchens and hallways', 'Hiding cables, pipes and air conditioning', 'Offices and shops'],
    },
    faq: [
      {
        q: { el: 'Πόσο κοστίζει μια ψευδοροφή γυψοσανίδας;', en: 'How much does a plasterboard ceiling cost?' },
        a: {
          el: `Ενδεικτικά ${todo('ΣΥΜΠΛΗΡΩΣΗ: τιμή ανά τ.μ.')}. Η τελική τιμή εξαρτάται από τα τετραγωνικά, τα επίπεδα και τον φωτισμό. Στείλτε μας μια φωτογραφία και θα σας πούμε.`,
          en: `Roughly ${todo('TO CONFIRM: price per m²')}. The final price depends on the area, the levels and the lighting. Send us a photo and we'll tell you.`,
        },
      },
      {
        q: { el: 'Πόσο χαμηλώνει το ταβάνι;', en: 'How much lower will the ceiling be?' },
        a: {
          el: 'Μια απλή ψευδοροφή χρειάζεται συνήθως λίγα εκατοστά. Αν θέλουμε χωνευτά σποτ ή κρυφό φωτισμό, χρειάζεται λίγο περισσότερος χώρος. Το βλέπουμε μαζί στον χώρο σας.',
          en: 'A simple suspended ceiling usually needs only a few centimetres. Recessed spotlights or cove lighting need a little more room. We check it together on site.',
        },
      },
    ],
    meta: {
      title: { el: 'Ψευδοροφές γυψοσανίδας | Γυψοτεχνία', en: 'Plasterboard suspended ceilings | Gipsotexnia' },
      description: {
        el: 'Ψευδοροφές γυψοσανίδας επίπεδες ή σε επίπεδα, με σποτ και κρυφό φωτισμό LED. Δείτε έργα μας και ζητήστε δωρεάν προσφορά σε WhatsApp ή Viber.',
        en: 'Flat or stepped plasterboard ceilings with spotlights and hidden LED lighting. See our work and get a free quote on WhatsApp or Viber.',
      },
    },
  },
  {
    key: 'lighting',
    icon: 'light',
    photo: 'ceiling-spots-cove',
    title: { el: 'Κρυφός φωτισμός LED', en: 'Hidden LED lighting' },
    short: {
      el: 'Ταινίες LED μέσα σε σκοτίες, κόγχες και ράφια. Ζεστό, απαλό φως χωρίς να φαίνεται η πηγή του.',
      en: 'LED strips tucked into coves, niches and shelves. Warm, soft light without seeing where it comes from.',
    },
    intro: {
      el: [
        'Ο κρυφός φωτισμός είναι μια ταινία LED τοποθετημένη μέσα σε ένα «αυλάκι» της γυψοσανίδας, στην οροφή, σε μια κόγχη ή κάτω από ένα ράφι. Το φως αντανακλά στους τοίχους και ο χώρος δείχνει μεγαλύτερος και πιο ζεστός.',
        'Σχεδιάζουμε τη θέση του φωτισμού μαζί με την κατασκευή, ώστε η ταινία να μη φαίνεται από καμία γωνία.',
      ],
      en: [
        'Hidden lighting is an LED strip set into a groove in the plasterboard: in the ceiling, in a niche or under a shelf. The light bounces off the walls, making the room feel larger and warmer.',
        'We plan the lighting together with the build, so the strip can’t be seen from any angle.',
      ],
    },
    uses: {
      el: ['Περιμετρικά στην οροφή', 'Κόγχες και ράφια σε συνθέσεις τοίχου', 'Πίσω από την τηλεόραση ή το κρεβάτι', 'Διάδρομοι και σκάλες'],
      en: ['Around the ceiling edge', 'Niches and shelves in wall units', 'Behind the TV or the bed', 'Hallways and stairs'],
    },
    faq: [
      {
        q: { el: 'Τι χρώμα φωτός να διαλέξω;', en: 'Which light colour should I choose?' },
        a: {
          el: 'Για σπίτια προτιμάται συνήθως θερμό λευκό (περίπου 3000K), όπως στη σύνθεση τοίχου στις φωτογραφίες μας. Για κουζίνες και γραφεία ταιριάζει πιο ουδέτερο λευκό.',
          en: 'Homes usually suit warm white (around 3000K), like the wall unit in our photos. Kitchens and offices suit a more neutral white.',
        },
      },
    ],
    meta: {
      title: { el: 'Κρυφός φωτισμός LED με γυψοσανίδα | Γυψοτεχνία', en: 'Hidden LED lighting in plasterboard | Gipsotexnia' },
      description: {
        el: 'Κρυφός φωτισμός LED σε ψευδοροφές, κόγχες και συνθέσεις τοίχου από γυψοσανίδα. Στείλτε μας μήνυμα, απαντάμε γρήγορα.',
        en: 'Hidden LED lighting in plasterboard ceilings, niches and wall units. Message us, we reply fast.',
      },
    },
  },
  {
    key: 'partitions',
    icon: 'wall',
    photo: 'framing-partition',
    title: { el: 'Χωρίσματα', en: 'Partitions' },
    short: {
      el: 'Νέος τοίχος σε λίγες μέρες, χωρίς τούβλα και σοβάδες. Για να φτιάξετε ένα επιπλέον δωμάτιο ή να μοιράσετε έναν χώρο.',
      en: 'A new wall in days, without bricks or plaster. To add a room or divide a space.',
    },
    intro: {
      el: [
        'Ένα χώρισμα γυψοσανίδας στήνεται πάνω σε μεταλλικό σκελετό και ντύνεται με πλάκες από τη μία ή και τις δύο πλευρές. Είναι πολύ ελαφρύτερο από τον τοίχο από τούβλα, γίνεται πιο γρήγορα και με πολύ λιγότερη φασαρία.',
        'Ανάμεσα στις πλάκες μπαίνει μόνωση για ήχο ή θερμοκρασία, και περνάνε εύκολα καλώδια για πρίζες και διακόπτες.',
      ],
      en: [
        'A plasterboard partition is built on a metal frame and boarded on one or both sides. It’s much lighter than a brick wall, goes up faster and with far less mess.',
        'Insulation for sound or heat goes between the boards, and cables for sockets and switches run through easily.',
      ],
    },
    uses: {
      el: ['Ένα επιπλέον δωμάτιο (γραφείο, παιδικό)', 'Διαχωρισμός σαλονιού–κουζίνας', 'Ντουλάπες εντοιχισμού', 'Γραφεία και καταστήματα'],
      en: ['An extra room (study, kids’ room)', 'Separating living room and kitchen', 'Built-in wardrobes', 'Offices and shops'],
    },
    faq: [
      {
        q: { el: 'Ακούγεται ο θόρυβος μέσα από χώρισμα γυψοσανίδας;', en: 'Does sound travel through a plasterboard partition?' },
        a: {
          el: 'Με ηχομονωτικό υλικό ανάμεσα στις πλάκες και διπλή επένδυση, η ηχομόνωση είναι πολύ καλή για σπίτι. Μας λέτε τι χρειάζεστε και προτείνουμε τη σωστή λύση.',
          en: 'With acoustic insulation between the boards and double boarding, sound insulation is very good for a home. Tell us what you need and we’ll suggest the right build.',
        },
      },
      {
        q: { el: 'Μπορώ να κρεμάσω ράφια ή τηλεόραση;', en: 'Can I hang shelves or a TV on it?' },
        a: {
          el: 'Ναι. Αν το ξέρουμε από πριν, ενισχύουμε τον σκελετό στα σημεία που θα κρεμαστεί βάρος.',
          en: 'Yes. If we know beforehand, we reinforce the frame where the weight will hang.',
        },
      },
    ],
    meta: {
      title: { el: 'Χωρίσματα γυψοσανίδας | Γυψοτεχνία', en: 'Plasterboard partition walls | Gipsotexnia' },
      description: {
        el: 'Χωρίσματα γυψοσανίδας με ηχομόνωση για σπίτια και επαγγελματικούς χώρους. Γρήγορα, καθαρά, χωρίς τούβλα. Ζητήστε δωρεάν προσφορά.',
        en: 'Insulated plasterboard partition walls for homes and businesses. Fast and clean, no bricks. Ask for a free quote.',
      },
    },
  },
  {
    key: 'wall-units',
    icon: 'tv',
    photo: 'tv-wall-after',
    title: { el: 'Συνθέσεις τοίχου & TV', en: 'TV & feature walls' },
    short: {
      el: 'Εσοχή για την τηλεόραση, κόγχες, ράφια και φωτισμός σε έναν τοίχο, σχεδιασμένο στα μέτρα του χώρου σας.',
      en: 'A TV recess, niches, shelves and lighting in one wall, designed around your room.',
    },
    intro: {
      el: [
        'Μια σύνθεση τοίχου από γυψοσανίδα είναι ένα «έπιπλο» χτισμένο στον τοίχο: εσοχή για την τηλεόραση, κόγχες για διακοσμητικά, ράφια και κρυφός φωτισμός, όλα σε μία ενιαία επιφάνεια.',
        'Κρύβει καλώδια, πρίζες και ακόμα και το κλιματιστικό ή τον πίνακα του ρεύματος, όπως στο έργο «πριν & μετά» που βλέπετε εδώ.',
      ],
      en: [
        'A plasterboard wall unit is furniture built into the wall: a TV recess, display niches, shelves and hidden lighting in one seamless surface.',
        'It hides cables, sockets and even the air conditioner or the fuse box, as in the before-and-after project shown here.',
      ],
    },
    uses: {
      el: ['Τοίχος τηλεόρασης στο σαλόνι', 'Βιβλιοθήκη με φωτισμένες κόγχες', 'Κεφαλάρι κρεβατιού', 'Κάλυψη κλιματιστικού και πίνακα'],
      en: ['TV wall in the living room', 'Bookcase with lit niches', 'Bed headboard wall', 'Hiding the AC unit and fuse box'],
    },
    faq: [
      {
        q: { el: 'Μπορώ να έχω το δικό μου σχέδιο;', en: 'Can I bring my own design?' },
        a: {
          el: 'Φυσικά. Στείλτε μας μια φωτογραφία ή ένα σκίτσο από κάτι που σας άρεσε και θα το προσαρμόσουμε στις διαστάσεις του τοίχου σας.',
          en: 'Of course. Send us a photo or sketch of something you liked and we’ll adapt it to your wall.',
        },
      },
      {
        q: { el: 'Πόσες μέρες χρειάζεται μια σύνθεση τοίχου;', en: 'How long does a wall unit take?' },
        a: {
          el: `Συνήθως ${todo('ΣΥΜΠΛΗΡΩΣΗ: ημέρες')}, ανάλογα με το μέγεθος και τον φωτισμό.`,
          en: `Usually ${todo('TO CONFIRM: days')}, depending on size and lighting.`,
        },
      },
    ],
    meta: {
      title: { el: 'Συνθέσεις τοίχου & TV από γυψοσανίδα | Γυψοτεχνία', en: 'Plasterboard TV & feature walls | Gipsotexnia' },
      description: {
        el: 'Σύνθεση τοίχου από γυψοσανίδα με θέση τηλεόρασης, κόγχες, ράφια και κρυφό φωτισμό LED. Δείτε πριν & μετά από έργο μας.',
        en: 'Plasterboard wall units with a TV recess, niches, shelves and hidden LED lighting. See a before & after from our work.',
      },
    },
  },
  {
    key: 'custom',
    icon: 'curve',
    photo: 'wave-wall',
    title: { el: 'Ειδικές κατασκευές', en: 'Custom features' },
    short: {
      el: 'Καμπύλες, καμάρες, κύματα, πάγκοι με τόξα. Ό,τι μπορείτε να φανταστείτε, το σχεδιάζουμε και το χτίζουμε.',
      en: 'Curves, arches, waves, arched counters. If you can imagine it, we design and build it.',
    },
    intro: {
      el: [
        'Η γυψοσανίδα λυγίζει, κόβεται και διαμορφώνεται σε σχήματα που με τούβλο θα ήταν δύσκολα ή πολύ ακριβά: καμπύλοι τοίχοι, καμάρες, διακοσμητικά κύματα, πάγκοι και κατασκευές σε επίπεδα.',
        'Είναι η δουλειά που μας αρέσει περισσότερο. Δείτε μερικά παραδείγματα παρακάτω και πολλά περισσότερα σε βίντεο στο TikTok μας.',
      ],
      en: [
        'Plasterboard bends, cuts and shapes into forms that would be hard or very costly in brick: curved walls, arches, decorative waves, counters and tiered structures.',
        'It’s the work we enjoy most. See some examples below and many more on video on our TikTok.',
      ],
    },
    uses: {
      el: ['Καμάρες και περάσματα', 'Καμπύλοι και διακοσμητικοί τοίχοι', 'Πάγκοι, μπαρ και ρεσεψιόν', 'Κατασκευές σε επίπεδα και βαθμίδες'],
      en: ['Arches and openings', 'Curved and decorative walls', 'Counters, bars and reception desks', 'Tiered and stepped structures'],
    },
    faq: [
      {
        q: { el: 'Είναι ανθεκτικές οι καμπύλες κατασκευές;', en: 'Are curved features durable?' },
        a: {
          el: 'Ναι. Στήνονται σε μεταλλικό σκελετό που ακολουθεί την καμπύλη, και οι ακμές προστατεύονται με ειδικά γωνιόκρανα.',
          en: 'Yes. They’re built on a metal frame that follows the curve, and the edges are protected with special corner beads.',
        },
      },
      {
        q: { el: 'Μπορείτε να φτιάξετε κάτι που είδα στο ίντερνετ;', en: 'Can you build something I saw online?' },
        a: {
          el: 'Στείλτε μας τη φωτογραφία στο WhatsApp ή στο Viber. Θα σας πούμε αν γίνεται στον χώρο σας και πώς.',
          en: 'Send us the photo on WhatsApp or Viber. We’ll tell you if and how it can work in your space.',
        },
      },
    ],
    meta: {
      title: { el: 'Καμάρες, καμπύλες & ειδικές κατασκευές γυψοσανίδας | Γυψοτεχνία', en: 'Arches, curves & custom plasterboard features | Gipsotexnia' },
      description: {
        el: 'Καμπύλοι τοίχοι, καμάρες, διακοσμητικά κύματα και πάγκοι από γυψοσανίδα. Πείτε μας την ιδέα σας, τη σχεδιάζουμε και τη χτίζουμε.',
        en: 'Curved walls, arches, decorative waves and counters in plasterboard. Tell us your idea; we design and build it.',
      },
    },
  },
  {
    key: 'commercial',
    icon: 'office',
    photo: 'acoustic-ceiling-office',
    title: { el: 'Επαγγελματικοί χώροι', en: 'Commercial spaces' },
    short: {
      el: 'Οροφές, χωρίσματα και ηχοαπορροφητικές λύσεις για γραφεία, καταστήματα και χώρους εστίασης.',
      en: 'Ceilings, partitions and acoustic solutions for offices, shops and restaurants.',
    },
    intro: {
      el: [
        'Σε γραφεία και καταστήματα η γυψοσανίδα λύνει πολλά μαζί: κρύβει αεραγωγούς και καλώδια, χωρίζει χώρους γρήγορα και, με διάτρητες πλάκες, μειώνει την αντήχηση.',
        'Στη φωτογραφία βλέπετε διάτρητη ηχοαπορροφητική οροφή σε μεγάλο χώρο γραφείων κατά την τοποθέτηση.',
      ],
      en: [
        'In offices and shops plasterboard solves several things at once: it hides ducts and cables, divides space quickly and, with perforated boards, cuts down echo.',
        'The photo shows a perforated acoustic ceiling being installed in a large open-plan office.',
      ],
    },
    uses: {
      el: ['Γραφεία και αίθουσες συσκέψεων', 'Καταστήματα και βιτρίνες', 'Καφέ και εστιατόρια', 'Ιατρεία και κλινικές'],
      en: ['Offices and meeting rooms', 'Shops and displays', 'Cafés and restaurants', 'Practices and clinics'],
    },
    faq: [
      {
        q: { el: 'Τι είναι η ηχοαπορροφητική οροφή;', en: 'What is an acoustic ceiling?' },
        a: {
          el: 'Είναι ψευδοροφή από διάτρητες πλάκες γυψοσανίδας με ηχοαπορροφητικό υλικό από πάνω. Μειώνει την αντήχηση, ώστε ο χώρος να ακούγεται πιο ήσυχος.',
          en: 'It’s a suspended ceiling of perforated plasterboard with sound-absorbing material above it. It reduces echo, so the room sounds calmer.',
        },
      },
    ],
    meta: {
      title: { el: 'Γυψοσανίδα για γραφεία & καταστήματα | Γυψοτεχνία', en: 'Plasterboard for offices & shops | Gipsotexnia' },
      description: {
        el: 'Ψευδοροφές, χωρίσματα και ηχοαπορροφητικές οροφές γυψοσανίδας για γραφεία, καταστήματα και χώρους εστίασης.',
        en: 'Plasterboard ceilings, partitions and acoustic ceilings for offices, shops and restaurants.',
      },
    },
  },
];

export const service = (key: ServiceKey) => services.find((s) => s.key === key)!;
