// Downloads title + thumbnail for each TikTok video in content/social.json, using TikTok's
// public oEmbed endpoint (no account or API key needed). Thumbnails are saved as WebP in
// src/assets/social/ so the site can show real previews before the visitor accepts cookies.
// Run after changing content/social.json:  npm run fetch-social
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const social = JSON.parse(await readFile('content/social.json', 'utf8'));
const OUT = 'src/assets/social';
const CACHE = 'content/social-cache.json';
await mkdir(OUT, { recursive: true });

// Keep earlier results if TikTok rate-limits a run (HTTP 429).
const cache = JSON.parse(await readFile(CACHE, 'utf8').catch(() => '{}'));
for (const url of [...social.tiktok.featured, ...social.tiktok.latest]) {
  const id = url.match(/\/video\/(\d+)/)?.[1];
  if (!id) continue;
  const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`);
  if (!res.ok) {
    console.warn('skip', url, res.status);
    continue;
  }
  const o = await res.json();
  const img = await fetch(o.thumbnail_url).then((r) => r.arrayBuffer());
  await sharp(Buffer.from(img)).resize({ width: 480 }).webp({ quality: 78 }).toFile(`${OUT}/tiktok-${id}.webp`);
  cache[id] = { title: (o.title || '').trim() };
  console.log('ok', id, cache[id].title.slice(0, 60));
}
await writeFile(CACHE, JSON.stringify(cache, null, 2) + '\n');
