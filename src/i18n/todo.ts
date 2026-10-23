// Placeholders for facts the client still has to confirm.
// In text, write ⟦label⟧. On the page it renders as a highlighted box so nothing
// unconfirmed passes as fact. In meta tags and structured data it is removed.
// Find all of them with: grep -rn "⟦" src content

const MARK = /⟦([^⟧]*)⟧/g;

export const todo = (label: string) => `⟦${label}⟧`;

export const hasTodo = (s: string | undefined | null) => !!s && s.includes('⟦');

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** HTML for visible text: escapes, then turns ⟦…⟧ into a highlighted placeholder. */
export const rich = (s: string) =>
  escape(s).replace(MARK, (_, label) => `<mark class="todo" title="TODO-CLIENT">${label}</mark>`);

/** Plain text for meta tags / JSON-LD: drops placeholders and tidies spacing. */
export const plain = (s: string) =>
  s.replace(MARK, '').replace(/\s+([,.·])/g, '$1').replace(/\s{2,}/g, ' ').trim();
