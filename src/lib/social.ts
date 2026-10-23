// Reads content/social.json and turns post URLs into embed info.
// Entries that aren't valid URLs yet (e.g. "TODO-CLIENT: …") become placeholders.
import data from '../../content/social.json';

export interface Embed {
  url: string | null;
  embed: string | null;
}

const tiktokId = (u: string) => u.match(/tiktok\.com\/@[^/]+\/video\/(\d{8,})/)?.[1];
const igCode = (u: string) => u.match(/instagram\.com\/(?:p|reel|tv)\/([\w-]{5,})/)?.[1];

const isPlaceholder = (u: string) => u.startsWith('TODO') || /0{6,}|X{6,}|Y{6,}|Z{6,}/.test(u);

function tiktok(u: string): Embed {
  const id = !isPlaceholder(u) && tiktokId(u);
  return id
    ? { url: u, embed: `https://www.tiktok.com/player/v1/${id}?music_info=0&description=0&rel=0` }
    : { url: null, embed: null };
}

function instagram(u: string): Embed {
  const code = !isPlaceholder(u) && igCode(u);
  return code ? { url: u, embed: `https://www.instagram.com/p/${code}/embed/` } : { url: null, embed: null };
}

export const tiktokFeatured = data.tiktok.featured.map(tiktok);
export const tiktokLatest = data.tiktok.latest.map(tiktok);
export const instagramPosts = data.instagram.posts.map(instagram);
