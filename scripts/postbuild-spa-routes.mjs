/* Post-build: turn the single-page-app build into per-route STATIC HTML.
 *
 * Two jobs, and the second is why this file matters:
 *
 *  1. Give every SPA route a real index.html so GitHub Pages serves it with
 *     HTTP 200 instead of the 404.html fallback (renders fine but returns a
 *     404 status — bad for Google Ads destination checks and SEO).
 *
 *  2. PRERENDER each route's <title>, meta description, canonical, OG tags and
 *     a real content block into #root.
 *
 *     ⚠️ WHY (ported from DragonRefunds-LP 2026-08-06): every route used to be
 *     a byte-identical copy of the same shell. On dragonrefunds.com the same
 *     defect scored landing page experience BELOW_AVERAGE on 16 of 18
 *     keywords, pinning Quality Scores at 1–3/10, which inflates CPC and
 *     suppresses impressions. Server speed was never the problem — the pages
 *     were empty. Same defect makes every URL identical to Google's index.
 *
 *     The injected block is built from the SAME data files the React app
 *     renders from, so this is prerendering, not cloaking. React's
 *     createRoot().render() replaces #root's children on mount, so real users
 *     get the app; crawlers and no-JS clients get the content.
 */
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { lpPages } from '../src/data/lpPages.js';
import { competitors } from '../src/data/competitors.js';
import { AUDIT_POINTS_COPY, CLAIM_TYPES_COPY } from '../src/data/lpCopy.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const srcFile = join(dist, 'index.html');

if (!existsSync(srcFile)) {
  console.error('postbuild: dist/index.html not found — run vite build first');
  process.exit(1);
}
const SHELL = readFileSync(srcFile, 'utf8');
const SITE = 'https://getdragonbot.com';
const SIGNUP = 'https://app.getdragonbot.com/sign-up';

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const flat = (s = '') => String(s).replace(/\s+/g, ' ').trim();

/* ── Route → { title, description, eyebrow, h1, intro, bullets[], sections[] } ── */
const meta = {};

/* Product copy the main LP renders, from ../src/data/lpCopy.js — the SAME module
 * LandingV4.jsx reads, so this is prerendering, not cloaking. Without it the
 * homepage prerendered at 44 crawler-visible words. */
const PRODUCT_SECTIONS = [
  { h: 'What the free audit finds', items: AUDIT_POINTS_COPY.map(p => `${p.title}. ${p.desc}`) },
  { h: 'What DragonBot recovers', items: CLAIM_TYPES_COPY.map(c => `${c.headline} ${c.blurb}`) },
];

const STATIC = {
  '/':        { title: 'DragonBot — Your AI Amazon Operator',
                description: 'DragonBot is an AI operator for Amazon sellers. It runs your PPC, finds reimbursements, answers customers, and researches keywords — finished work delivered in Slack, not another dashboard. Free forever.' },
  '/pricing': { title: 'Pricing — Free Forever, No Percentage Fees | DragonBot',
                description: 'DragonBot is free forever for unlimited audits and reports. Optional paid tier executes the work with your approval. Never a percentage of your revenue or ad spend.' },
  '/privacy': { title: 'Privacy Policy | DragonBot', description: 'How DragonBot collects, uses, and protects your data.' },
  '/tos':     { title: 'Terms of Service | DragonBot', description: 'The terms governing your use of DragonBot.' },
  '/support': { title: 'Support | DragonBot', description: 'Help and documentation for DragonBot.' },
  '/beta':    { title: 'Join the Beta | DragonBot', description: 'Get early access to DragonBot — the AI operator for Amazon sellers.' },
};
for (const [path, m] of Object.entries(STATIC)) {
  meta[path] = { ...m, h1: m.title.split(/[—|]/)[0].trim(), intro: m.description };
}
for (const r of ['/', '/pricing']) if (meta[r]) meta[r].sections = PRODUCT_SECTIONS;

/* Data-driven LP pages (feature / alt templates). */
for (const p of lpPages) {
  const h1 = p.hero?.segments?.map(s => s.text).join(' ') || p.metaTitle || '';
  meta[p.path] = {
    title: p.metaTitle || h1,
    description: p.metaDescription || flat(p.hero?.paragraph),
    eyebrow: p.hero?.eyebrow,
    h1,
    intro: flat(p.hero?.paragraph),
    sections: PRODUCT_SECTIONS,
  };
}

/* /vs/ comparison pages (visible competitors only). */
for (const [slug, c] of Object.entries(competitors)) {
  if (c.hidden) continue;
  const name = c.name || slug;
  meta[`/vs/${slug}`] = {
    title: c.metaTitle || `DragonBot vs ${name}`,
    description: c.metaDescription || flat(c.subhead),
    eyebrow: c.eyebrow,
    h1: c.h1 ? [c.h1.plain, c.h1.accent].filter(Boolean).join(' ') : `DragonBot vs ${name}`,
    intro: flat(c.subhead),
    bullets: [c.tldr?.us, c.tldr?.them].filter(Boolean).map(flat),
    /* Full comparison copy, not just the TL;DR (2026-08-10). These entries already
     * hold themWins / usWins / comparisonTable / faq; emitting only the h1 left the
     * pages at ~65 crawler-visible words, and a page that thin cannot earn a decent
     * Google Ads landing-page-experience score. Rendered from this same object by
     * the /vs/ component, so it is prerendering, not cloaking. */
    sections: [
      { h: `Where ${c.name || slug} wins`, items: (c.themWins || []).map(w => flat(`${w.title || ''}. ${w.desc || ''}`)) },
      { h: 'Where DragonBot wins', items: (c.usWins || []).map(w => flat(`${w.title || ''}. ${w.desc || ''}`)) },
      { h: 'Comparison', items: (c.comparisonTable || []).map(r =>
          flat(`${r.feature || r.label || ''} — DragonBot: ${r.us ?? ''}; ${c.name || slug}: ${r.them ?? ''}`)) },
      { h: 'Frequently asked questions', items: (c.faq || []).map(f => flat(`${f.q || ''} ${f.a || ''}`)) },
    ].filter(sec => sec.items.filter(i => i.replace(/[—;:.\s]/g, '')).length),
  };
}

/* Support sub-pages + legacy landing versions. */
for (const r of ['/support/getting-started', '/support/billing-credits', '/support/amazon-integration',
                 '/support/security-privacy', '/support/account-management', '/support/feature-requests']) {
  const name = r.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, m => m.toUpperCase());
  meta[r] = { title: `${name} | DragonBot Support`, description: `${name} — DragonBot help documentation.`, h1: name, intro: '' };
}
for (const r of ['/v1', '/v2', '/v3', '/chats']) {
  if (!meta[r]) meta[r] = { ...STATIC['/'], h1: 'DragonBot', intro: STATIC['/'].description };
}

/* ── Build one route's HTML from the shell ───────────────────────────── */
function buildHtml(route, m) {
  const url = SITE + (route === '/' ? '/' : route + '/');
  const title = m.title || STATIC['/'].title;
  const desc = m.description || STATIC['/'].description;

  const head = [
    `<meta name="description" content="${esc(desc)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(desc)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ].join('\n    ');

  /* Mirrors the copy React renders. Replaced on mount. */
  const body = [
    m.eyebrow ? `<p>${esc(m.eyebrow)}</p>` : '',
    `<h1>${esc(m.h1 || title)}</h1>`,
    m.intro ? `<p>${esc(m.intro)}</p>` : '',
    Array.isArray(m.bullets) && m.bullets.length
      ? `<ul>${m.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>` : '',
    ...(m.sections || []).map(sec =>
      `<h2>${esc(sec.h)}</h2>\n        <ul>${sec.items.map(i => `<li>${esc(flat(i))}</li>`).join('')}</ul>`),
    `<p><a href="${SIGNUP}">Get it free — no card required</a></p>`,
  ].filter(Boolean).join('\n        ');

  let html = SHELL;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>\n    ${head}`);
  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root"><div data-prerender="1" style="max-width:44rem;margin:0 auto;padding:4rem 1.5rem;font-family:system-ui,sans-serif">\n        ${body}\n      </div></div>`
  );
  return html;
}

/* ── Write every route ───────────────────────────────────────────────── */
const routes = [...new Set(['/', ...Object.keys(meta)])];
let n = 0;
for (const route of routes) {
  const m = meta[route];
  if (!m) continue;
  const dir = route === '/' ? dist : join(dist, ...route.split('/').filter(Boolean));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), buildHtml(route, m));
  n++;
}
/* ── Guard: a thin page cannot earn a decent Ads landing-page score ──────
 * 2026-08-10: per-route titles alone left the homepage at 44 crawler-visible
 * words; on the sibling refunds site that meant Quality Score 2/10. Fail the
 * build rather than ship thin pages. Raise MIN_WORDS, never lower it. */
const MIN_WORDS = 120;
const EXEMPT = r => r.startsWith('/support') || ['/privacy', '/tos', '/v1', '/v2', '/v3', '/chats', '/beta'].includes(r);
const thin = [];
for (const route of routes) {
  if (!meta[route] || EXEMPT(route)) continue;
  const dir = route === '/' ? dist : join(dist, ...route.split('/').filter(Boolean));
  const text = readFileSync(join(dir, 'index.html'), 'utf8')
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  if (words < MIN_WORDS) thin.push(`${route} (${words}w)`);
}
if (thin.length) {
  console.error(`postbuild: ${thin.length} route(s) under ${MIN_WORDS} crawler-visible words:\n  ${thin.join('\n  ')}`);
  console.error('Add real copy to a JSX-free data module and emit it here — see src/data/lpCopy.js');
  process.exit(1);
}

console.log(`postbuild: prerendered ${n} routes (title + description + canonical + OG + content), all >= ${MIN_WORDS} words`);
