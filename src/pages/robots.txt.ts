// robots.txt: open to search engines and AI assistants (ChatGPT, Gemini, Claude, Perplexity…)
// once ALLOW_INDEXING=true. The prototype blocks everything until then.
import type { APIRoute } from 'astro';

const aiBots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'Google-Extended', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Applebot-Extended', 'Bingbot'];

export const GET: APIRoute = ({ site }) => {
  const allow = import.meta.env.ALLOW_INDEXING === 'true';
  const sitemap = new URL('sitemap-index.xml', site).href;
  const body = allow
    ? [
        ...aiBots.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
        'User-agent: *',
        'Allow: /',
        '',
        `Sitemap: ${sitemap}`,
        '',
      ].join('\n')
    : ['# Prototype: not indexed yet (set ALLOW_INDEXING=true to open)', 'User-agent: *', 'Disallow: /', ''].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
