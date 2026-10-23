// Reads content/social.json and turns it into embed info for the social section.
// - TikTok "featured": individual videos (with thumbnails from `npm run fetch-social`).
// - TikTok "latest" / Instagram "posts": if empty, the official profile embeds are used,
//   which always show the account's newest posts (no API keys needed).
import type { ImageMetadata } from 'astro';
import data from '../../content/social.json';
import cache from '../../content/social-cache.json';
import { social } from '../config/site';

export interface Video {
  id: string;
  url: string;
  embed: string;
  thumb: ImageMetadata | null;
  title: string;
}

const thumbs = import.meta.glob<{ default: ImageMetadata }>('../assets/social/*.webp', { eager: true });
const handle = social.tiktokHandle.replace(/^@/, '');
const igUser = social.instagram.match(/instagram\.com\/([^/?#]+)/)?.[1] ?? '';

function tiktok(url: string): Video | null {
  const id = url.match(/tiktok\.com\/@[^/]+\/video\/(\d{8,})/)?.[1];
  if (!id) return null;
  return {
    id,
    url,
    embed: `https://www.tiktok.com/player/v1/${id}?music_info=0&description=0&rel=0`,
    thumb: thumbs[`../assets/social/tiktok-${id}.webp`]?.default ?? null,
    title: (cache as Record<string, { title: string }>)[id]?.title ?? '',
  };
}

const igPost = (url: string) => {
  const code = url.match(/instagram\.com\/(?:p|reel|tv)\/([\w-]{5,})/)?.[1];
  return code ? `https://www.instagram.com/p/${code}/embed/` : null;
};

export const tiktokFeatured = data.tiktok.featured.map(tiktok).filter((v): v is Video => !!v);
export const tiktokLatest = (data.tiktok.latest as string[]).map(tiktok).filter((v): v is Video => !!v);
/** Official TikTok creator embed: profile card + newest videos, always up to date. */
export const tiktokProfileEmbed = `https://www.tiktok.com/embed/@${handle}`;

export const instagramPosts = (data.instagram.posts as string[]).map(igPost).filter((u): u is string => !!u);
/** Official Instagram profile embed: newest posts grid, always up to date. */
export const instagramProfileEmbed = igUser ? `https://www.instagram.com/${igUser}/embed/` : null;

/** Social embeds set third-party cookies, so the consent banner is needed whenever any are shown. */
export const hasRealEmbeds = tiktokFeatured.length > 0 || tiktokLatest.length > 0 || !!instagramProfileEmbed || instagramPosts.length > 0;
