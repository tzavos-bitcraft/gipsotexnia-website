// Every project photo used on the site, with bilingual alt text and captions.
// To add a photo: put the original in ./media-and-logos, add it to scripts/prepare-media.mjs,
// run `npm run prepare-media`, then add an entry here.
import type { ImageMetadata } from 'astro';
import tvWallAfter from '../assets/photos/tv-wall-after.webp';
import tvWallBefore from '../assets/photos/tv-wall-before.webp';
import ceilingCoveLiving from '../assets/photos/ceiling-cove-living.webp';
import ceilingSpotsCove from '../assets/photos/ceiling-spots-cove.webp';
import waveWall from '../assets/photos/wave-wall.webp';
import officeDesk from '../assets/photos/office-desk.webp';
import archEntrance from '../assets/photos/arch-entrance.webp';
import archedCounter1 from '../assets/photos/arched-counter-1.webp';
import archedCounter2 from '../assets/photos/arched-counter-2.webp';
import tvWallCurvesWip from '../assets/photos/tv-wall-curves-wip.webp';
import acousticCeilingOffice from '../assets/photos/acoustic-ceiling-office.webp';
import framingSteps from '../assets/photos/framing-steps.webp';
import framingPartition from '../assets/photos/framing-partition.webp';
import vanTools from '../assets/photos/van-tools.webp';
import villaLiving1 from '../assets/photos/villa-living-1.webp';
import villaLiving2 from '../assets/photos/villa-living-2.webp';
import type { ServiceKey } from './services';

type L = { el: string; en: string };

export interface Photo {
  key: string;
  src: ImageMetadata;
  alt: L;
  caption: L;
  service: ServiceKey | null;
  /** Shows an "In progress" label. */
  wip?: boolean;
}

export const photos: Photo[] = [
  {
    key: 'villa-living-1',
    src: villaLiving1,
    service: null,
    alt: {
      el: 'Ευρύχωρο σαλόνι κατοικίας με πέτρινο τοίχο, λευκούς καναπέδες και κρεμαστά φωτιστικά, ολοκληρωμένο έργο',
      en: 'Spacious living room with a stone wall, white sofas and pendant lights, finished project',
    },
    caption: { el: 'Ολοκληρωμένο έργο σε κατοικία', en: 'Finished project in a home' },
  },
  {
    key: 'villa-living-2',
    src: villaLiving2,
    service: null,
    alt: {
      el: 'Το ίδιο σαλόνι από άλλη γωνία, με κρεμαστά φωτιστικά και γυάλινο τραπέζι',
      en: 'The same living room from another angle, with pendant lights and a glass table',
    },
    caption: { el: 'Το ίδιο έργο από άλλη γωνία', en: 'The same project from another angle' },
  },
  {
    key: 'tv-wall-after',
    src: tvWallAfter,
    service: 'wall-units',
    alt: {
      el: 'Σύνθεση τοίχου από γυψοσανίδα με εσοχή για τηλεόραση, ράφια και ζεστό κρυφό φωτισμό LED',
      en: 'Plasterboard wall unit with a TV recess, shelving niches and warm hidden LED lighting',
    },
    caption: { el: 'Σύνθεση τοίχου με φωτισμένες κόγχες', en: 'Wall unit with lit niches' },
  },
  {
    key: 'ceiling-cove-living',
    src: ceilingCoveLiving,
    service: 'ceilings',
    alt: {
      el: 'Ψευδοροφή γυψοσανίδας σε σαλόνι με περιμετρικό κρυφό φωτισμό και χωνευτά σποτ',
      en: 'Plasterboard ceiling in a living room with perimeter cove lighting and recessed spotlights',
    },
    caption: { el: 'Ψευδοροφή με κρυφό φωτισμό σε σαλόνι', en: 'Living-room ceiling with cove lighting' },
  },
  {
    key: 'wave-wall',
    src: waveWall,
    service: 'custom',
    alt: {
      el: 'Διακοσμητικός τοίχος με καμπύλα επάλληλα κύματα από γυψοσανίδα',
      en: 'Decorative wall with layered curved waves made of plasterboard',
    },
    caption: { el: 'Καμπύλος διακοσμητικός τοίχος «κύμα»', en: 'Curved “wave” feature wall' },
  },
  {
    key: 'ceiling-spots-cove',
    src: ceilingSpotsCove,
    service: 'lighting',
    alt: {
      el: 'Οροφή με κρυφό φωτισμό LED σε δύο επίπεδα και σειρές από χωνευτά σποτ',
      en: 'Two-level ceiling with hidden LED strip lighting and rows of recessed spotlights',
    },
    caption: { el: 'Κρυφός φωτισμός και σποτ σε δύο επίπεδα', en: 'Two-level cove and spotlights' },
  },
  {
    key: 'office-desk',
    src: officeDesk,
    service: 'custom',
    wip: true,
    alt: {
      el: 'Γραφείο υπό κατασκευή με γεωμετρικό πάγκο, επένδυση τοίχου και καμπύλη ψευδοροφή',
      en: 'Office under construction with a geometric desk, wall cladding and a curved ceiling step',
    },
    caption: { el: 'Γεωμετρικός πάγκος και ψευδοροφή σε γραφείο', en: 'Geometric desk and ceiling in an office' },
  },
  {
    key: 'arch-entrance',
    src: archEntrance,
    service: 'custom',
    wip: true,
    alt: {
      el: 'Μεγάλη καμάρα με επένδυση ξύλου και ψευδοροφή σε επίπεδα σε χώρο υποδοχής',
      en: 'Large wood-clad arch and a stepped tray ceiling in an entrance area',
    },
    caption: { el: 'Καμάρα και ψευδοροφή σε επίπεδα', en: 'Arch and stepped ceiling' },
  },
  {
    key: 'arched-counter-1',
    src: archedCounter1,
    service: 'custom',
    wip: true,
    alt: {
      el: 'Μακρύς πάγκος από γυψοσανίδα με τοξωτά ανοίγματα στη βάση',
      en: 'Long plasterboard counter with arched openings along its base',
    },
    caption: { el: 'Πάγκος με τοξωτά ανοίγματα', en: 'Counter with arched openings' },
  },
  {
    key: 'arched-counter-2',
    src: archedCounter2,
    service: 'custom',
    wip: true,
    alt: {
      el: 'Ο ίδιος πάγκος με τόξα από άλλη γωνία, με τοποθετημένη ξύλινη επιφάνεια',
      en: 'The same arched counter from another angle, with its wooden top in place',
    },
    caption: { el: 'Ο πάγκος από άλλη γωνία', en: 'The counter from another angle' },
  },
  {
    key: 'tv-wall-curves-wip',
    src: tvWallCurvesWip,
    service: 'wall-units',
    wip: true,
    alt: {
      el: 'Σύνθεση τοίχου με καμπύλα ανοίγματα και ράφια, πριν το σπατουλάρισμα',
      en: 'Wall unit with curved openings and shelves, before filling and finishing',
    },
    caption: { el: 'Σύνθεση με καμπύλες, πριν το φινίρισμα', en: 'Curved wall unit, before finishing' },
  },
  {
    key: 'acoustic-ceiling-office',
    src: acousticCeilingOffice,
    service: 'commercial',
    wip: true,
    alt: {
      el: 'Διάτρητη ηχοαπορροφητική ψευδοροφή σε μεγάλο χώρο γραφείων κατά την τοποθέτηση',
      en: 'Perforated acoustic plasterboard ceiling being installed in a large open-plan office',
    },
    caption: { el: 'Ηχοαπορροφητική οροφή σε γραφεία', en: 'Acoustic ceiling in offices' },
  },
  {
    key: 'framing-steps',
    src: framingSteps,
    service: 'custom',
    wip: true,
    alt: {
      el: 'Μεταλλικός σκελετός με πλάκες Knauf GuardEX για κατασκευή σε σκαλωτά επίπεδα',
      en: 'Metal framing with Knauf GuardEX boards for a stepped, tiered structure',
    },
    caption: { el: 'Σκελετός για κατασκευή σε επίπεδα', en: 'Framing for a tiered structure' },
  },
  {
    key: 'framing-partition',
    src: framingPartition,
    service: 'partitions',
    wip: true,
    alt: {
      el: 'Μεταλλικός σκελετός χωρίσματος με τις πρώτες πλάκες Knauf GuardEX',
      en: 'Metal stud partition frame with the first Knauf GuardEX boards fitted',
    },
    caption: { el: 'Χώρισμα: ο σκελετός', en: 'Partition: the frame' },
  },
];

export const tvWallBeforePhoto = tvWallBefore;
export const vanToolsPhoto = vanTools;

export const photo = (key: string) => {
  const p = photos.find((x) => x.key === key);
  if (!p) throw new Error(`Unknown photo: ${key}`);
  return p;
};

