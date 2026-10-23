// Prepares web-ready media from ./media-and-logos (originals are never modified).
// - Photos: auto-rotated (EXIF), capped at 2000px, saved as WebP in src/assets/photos.
//   Astro then generates smaller WebP sizes for each screen at build time.
// - Logo: trimmed copies + favicons + Open Graph image.
// - Video: short, muted, small (540px) MP4 clips + WebP posters.
// Run with: npm run prepare-media
import { mkdir, access, unlink } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import sharp from 'sharp';
import ffmpegPath from 'ffmpeg-static';

const run = promisify(execFile);
const SRC = 'media-and-logos';
const PHOTOS = 'src/assets/photos';
const BRAND = 'src/assets/brand';

// original file -> clean name used by the site
const photos = {
  '31FE081F-EFAA-4988-A839-EF0D511B0FCD.png': 'tv-wall-after',
  'IMG_7790.jpeg': 'tv-wall-before',
  'IMG_1509.jpeg': 'ceiling-cove-living',
  'IMG_1252.jpeg': 'ceiling-spots-cove',
  'IMG_20210527_134424.jpeg': 'wave-wall',
  'IMG_0379.jpeg': 'villa-living-1',
  'IMG_0387.jpeg': 'villa-living-2',
  'IMG_0723.jpeg': 'office-desk',
  'IMG_0724.jpeg': 'arch-entrance',
  'IMG_0726.jpeg': 'arched-counter-1',
  'IMG_0730 (1).jpeg': 'arched-counter-2',
  'IMG_2421.jpeg': 'tv-wall-curves-wip',
  'IMG_20211106_131958.jpeg': 'acoustic-ceiling-office',
  'IMG_0859.jpeg': 'framing-steps',
  'IMG_1003.jpeg': 'framing-partition',
  'IMG_2136.jpeg': 'van-tools',
};

const exists = (p) => access(p).then(() => true, () => false);

async function preparePhotos() {
  await mkdir(PHOTOS, { recursive: true });
  for (const [file, name] of Object.entries(photos)) {
    const out = path.join(PHOTOS, `${name}.webp`);
    await sharp(path.join(SRC, file))
      .rotate()
      .resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true })
      .flatten({ background: '#ffffff' })
      .webp({ quality: 82, effort: 6 })
      .toFile(out);
    console.log('photo', out);
  }
}

async function prepareBrand() {
  await mkdir(BRAND, { recursive: true });
  await mkdir('public', { recursive: true });
  const logoSrc = path.join(SRC, '79a4e6ca-4346-4eb2-9d3b-49c3ee2e7798.jpeg');

  // Full logo (mark + wordmark), whitespace trimmed.
  const full = await sharp(logoSrc).trim({ threshold: 30 }).png().toBuffer({ resolveWithObject: true });
  await sharp(full.data).webp({ quality: 90 }).toFile(path.join(BRAND, 'logo-full.webp'));

  // Mark only: split at the widest all-white band of rows between the icon and the wordmark.
  const { data: px, info } = await sharp(full.data).greyscale().raw().toBuffer({ resolveWithObject: true });
  const blank = (y) => {
    for (let x = 0; x < info.width; x++) if (px[y * info.width + x] < 235) return false;
    return true;
  };
  let best = { start: 0, len: 0 };
  for (let y = Math.round(info.height * 0.4), start = -1; y < info.height; y++) {
    if (blank(y)) {
      if (start < 0) start = y;
      if (y - start + 1 > best.len) best = { start, len: y - start + 1 };
    } else start = -1;
  }
  const markH = best.start + Math.round(best.len / 2);
  const mark = await sharp(full.data)
    .extract({ left: 0, top: 0, width: full.info.width, height: markH })
    .trim({ threshold: 30 })
    .png()
    .toBuffer();
  await sharp(mark).webp({ quality: 90 }).toFile(path.join(BRAND, 'logo-mark.webp'));

  // Horizontal logo for the header: mark on the left, wordmark on the right.
  const word = await sharp(full.data)
    .extract({ left: 0, top: markH, width: full.info.width, height: full.info.height - markH })
    .trim({ threshold: 30 })
    .png()
    .toBuffer();
  const H = 160;
  const markS = await sharp(mark).resize({ height: H }).png().toBuffer();
  const wordS = await sharp(word).resize({ height: Math.round(H * 0.42) }).png().toBuffer();
  const [mm, wm] = await Promise.all([sharp(markS).metadata(), sharp(wordS).metadata()]);
  const gap = Math.round(H * 0.16);
  // Turn the white JPEG background transparent so the logo sits on any background.
  const clearWhite = async (buf) => {
    const { data, info: i } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    for (let k = 0; k < data.length; k += 4) {
      const m = Math.min(data[k], data[k + 1], data[k + 2]);
      if (m > 200) data[k + 3] = Math.round(255 * (1 - (m - 200) / 55));
    }
    return sharp(data, { raw: { width: i.width, height: i.height, channels: 4 } }).png().toBuffer();
  };
  await sharp({ create: { width: mm.width + gap + wm.width, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([
      { input: await clearWhite(markS), left: 0, top: 0 },
      { input: await clearWhite(wordS), left: mm.width + gap, top: Math.round((H - wm.height) / 2) },
    ])
    .webp({ quality: 92 })
    .toFile(path.join(BRAND, 'logo-horizontal.webp'));

  const square = (size, pad) =>
    sharp(mark)
      .resize(size - pad * 2, size - pad * 2, { fit: 'contain', background: '#ffffff' })
      .extend({ top: pad, bottom: pad, left: pad, right: pad, background: '#ffffff' });
  await square(512, 48).png().toFile('public/icon-512.png');
  await square(180, 18).png().toFile('public/apple-touch-icon.png');
  await square(48, 3).png().toFile('public/favicon.png');

  // Favicons and the Open Graph image stay PNG/JPEG on purpose: iOS home-screen icons and
  // WhatsApp/Facebook link previews do not reliably support WebP.
  // Open Graph image 1200x630: finished TV wall + logo card.
  const photo = await sharp(path.join(SRC, '31FE081F-EFAA-4988-A839-EF0D511B0FCD.png'))
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .toBuffer();
  const logo = await sharp(full.data).resize({ height: 300 }).png().toBuffer();
  const logoMeta = await sharp(logo).metadata();
  const card = await sharp({
    create: { width: logoMeta.width + 80, height: 380, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 0.94 } },
  })
    .composite([{ input: logo, top: 40, left: 40 }])
    .png()
    .toBuffer();
  await sharp(photo)
    .composite([{ input: card, top: 125, left: 60 }])
    .jpeg({ quality: 85 })
    .toFile('public/og-image.jpg');
  console.log('brand assets done');
}

const videos = [
  // [source, output name, start second, duration seconds]
  ['IMG_1615.mov', 'walkthrough', 0, 10],
  ['IMG_2326.MOV', 'van', 20, 8],
];

async function prepareVideo() {
  await mkdir('public/media', { recursive: true });
  // HDR (iPhone) -> SDR tone mapping, 540px wide, 24fps, no audio, high compression.
  const tonemap = 'zscale=t=linear:npl=100,format=gbrpf32le,zscale=p=bt709,tonemap=hable:desat=0,zscale=t=bt709:m=bt709:r=tv,';
  for (const [file, name, ss, t] of videos) {
    const out = `public/media/${name}.mp4`;
    if (await exists(out)) { console.log('video exists, skipping', out); continue; }
    const input = path.join(SRC, file);
    const encode = (pre) => run(ffmpegPath, [
      '-y', '-ss', String(ss), '-t', String(t), '-i', input,
      '-vf', `${pre}scale=540:-2,fps=24,format=yuv420p`,
      '-an', '-c:v', 'libx264', '-profile:v', 'main', '-preset', 'veryslow', '-crf', '31',
      '-movflags', '+faststart', out,
    ]);
    await encode(tonemap).catch(() => encode(''));
    const poster = `public/media/${name}-poster.jpg`;
    await run(ffmpegPath, ['-y', '-ss', '1', '-i', out, '-frames:v', '1', '-q:v', '3', poster]);
    await sharp(poster).webp({ quality: 75 }).toFile(`public/media/${name}-poster.webp`);
    await unlink(poster);
    console.log('video', out);
  }
}

await preparePhotos();
await prepareBrand();
await prepareVideo();
