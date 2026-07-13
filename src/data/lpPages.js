/* ═══════════════════════════════════════════════════════════════
   Google Ads landing pages (v2 campaigns).
   Each entry powers a route rendered by src/pages/LpPage.jsx.
   Paths must match the ad-group Final URLs in
   DragonBot-marketing/landing_page_map_v2.csv.

   comingSoon: true → capability isn't shipped yet (smoke-test ad
   groups). The page frames it as early access, honestly.
   ═══════════════════════════════════════════════════════════════ */

const STD_FAQ_FREE = {
  q: 'Is it actually free?',
  a: 'Yes. The Basic plan is free forever — unlimited data, analyses, and reports, no credit card. When you want DragonBot taking actions on your account (pausing campaigns, editing listings, sending refunds), that\'s a flat $50/mo — currently in private beta.',
};
const STD_FAQ_SAFE = {
  q: 'Is it Amazon TOS compliant?',
  a: 'Yes. DragonBot connects through Amazon\'s official Selling-Partner API and Advertising API via OAuth — the same mechanism every legitimate tool uses. No scraping, no gray areas. You can revoke access anytime from Seller Central.',
};
const STD_FAQ_SETUP = {
  q: 'How long does setup take?',
  a: 'About 2 minutes. Sign up free, connect your Amazon account through the official OAuth flow, and DragonBot starts syncing. First answers and reports the same day.',
};

export const lpPages = [
  /* ═══════════ C1 clusters ═══════════ */
  {
    path: '/vs/ai-operators',
    metaTitle: 'The Free AI Amazon Operator — DragonBot vs Paid AI Agents (2026)',
    metaDescription: 'Every AI operator for Amazon sellers charges $49–$698/mo. DragonBot does the job free forever. See the comparison.',
    eyebrow: 'AI operators, compared',
    h1: { plain: 'Every AI Amazon operator charges.', accent: 'Except this one.' },
    subhead: 'The "AI that runs your Amazon account" category is exploding — and every player prices it $49 to $698+ a month. DragonBot gives you unlimited AI access to your account free forever, with a flat $50/mo when you want it taking actions.',
    bullets: [
      { t: 'PPC on autopilot', d: 'Audits campaigns, flags wasted spend, proposes negations and bid changes — you approve in Slack.' },
      { t: 'Inventory watched', d: 'Restock alerts and demand forecasts before you stock out.' },
      { t: 'Listings handled', d: 'Optimization suggestions and edits, grounded in your real search-term data.' },
      { t: 'Messages answered', d: 'Buyer messages triaged with policy-based draft replies.' },
      { t: 'Reports that arrive', d: 'P&L, PPC, and inventory summaries scheduled into Slack.' },
      { t: 'Your AI, your choice', d: 'Works in Slack, Claude, ChatGPT, and Cursor via MCP.' },
    ],
    anchor: {
      title: 'What the category charges',
      items: [
        { label: 'Typical AI-agent tools', price: '$49–$499/mo' },
        { label: '"AI employee" platforms', price: '$299–$698/mo' },
        { label: 'Managed AI programs', price: 'Contact sales' },
      ],
      usNote: 'DragonBot: free forever (unlimited reads) · flat $50/mo action plan.',
    },
    faq: [
      { q: 'How is DragonBot different from other AI Amazon agents?', a: 'Two ways: price model (free forever read tier + one flat action price, instead of credits or usage tiers) and surface (it lives in Slack and speaks MCP, so it works inside Claude, ChatGPT, and Cursor rather than locking you into another app).' },
      STD_FAQ_FREE, STD_FAQ_SAFE,
    ],
  },
  {
    path: '/vs/mcp-tools',
    metaTitle: 'Free Amazon MCP Server vs Paid MCP Tools — DragonBot (2026)',
    metaDescription: 'Paid Amazon MCPs charge $39–$397/mo to connect your seller account to Claude. DragonBot\'s Amazon MCP is free forever.',
    eyebrow: 'Amazon MCPs, compared',
    h1: { plain: 'Paid Amazon MCPs charge rent.', accent: 'Ours is free.' },
    subhead: 'Connecting your Seller Central and Ads data to Claude or ChatGPT shouldn\'t cost $39–$397 a month. DragonBot\'s Amazon MCP is free forever — clean data, guardrailed write actions, and Slack on top.',
    bullets: [
      { t: 'Full MCP server', d: 'Sales, ads, inventory, listings, finance, and messages exposed to any MCP client.' },
      { t: 'Claude, ChatGPT, Cursor', d: 'One connection, every AI client you use.' },
      { t: 'Write-back with guardrails', d: 'Approval-gated actions with a full audit trail (action plan).' },
      { t: 'Always-fresh data', d: 'ETL\'d and cleaned continuously from the official APIs.' },
      { t: 'No per-order pricing', d: 'Your bill doesn\'t grow because your business did.' },
      { t: 'Slack included', d: 'Teammates without an MCP client still get reports and approvals.' },
    ],
    anchor: {
      title: 'What hosted Amazon MCPs charge',
      items: [
        { label: 'Order-tiered MCPs', price: '$39–$199/mo' },
        { label: 'Flat-fee data layers', price: '$97/mo' },
        { label: 'Claude-workflow suites', price: '$97–$397/mo' },
      ],
      usNote: 'DragonBot MCP: free forever · action plan $50/mo flat.',
    },
    faq: [
      { q: 'Which MCP clients are supported?', a: 'Anything that speaks MCP — Claude Desktop and claude.ai connectors, ChatGPT, Cursor, and custom agents. Setup is a copy-paste config.' },
      STD_FAQ_FREE, STD_FAQ_SAFE,
    ],
  },

  /* ═══════════ C2 — free alternatives by tool niche ═══════════ */
  {
    path: '/research-tools',
    metaTitle: 'Free Alternative to Amazon Research Tools — DragonBot',
    metaDescription: 'Keyword and product research tools charge $49–$279/mo. DragonBot answers the same questions from real Amazon data — free forever.',
    eyebrow: 'Free research-tool alternative',
    h1: { plain: 'Research tools charge $50–$279/mo.', accent: 'Get answers free.' },
    subhead: 'Keyword suites sell you dashboards and make you do the digging. DragonBot pulls your real Amazon data — Search Query Performance, Brand Analytics, search terms — and hands you finished research, free forever.',
    bullets: [
      { t: 'Keyword research, finished', d: 'Give it competitor ASINs — get back an organized keyword sheet with roots and negatives, not a raw export.' },
      { t: 'Real data, not estimates', d: 'Your Search Query Performance and Brand Analytics via the official API — not modeled guesses.' },
      { t: 'Competitive analysis', d: 'Describe a niche; DragonBot builds the landscape and highlights the actual gap.' },
      { t: 'Ask follow-ups forever', d: 'It\'s a conversation, not an export. Unlimited questions on the free tier.' },
      { t: 'Works in your AI', d: 'Slack, Claude, ChatGPT, Cursor — wherever you think.' },
      { t: 'No seat, no meter', d: 'Free forever. No credit card. No trial clock.' },
    ],
    anchor: {
      title: 'What research suites charge',
      items: [
        { label: 'Entry research plans', price: '$49–$99/mo' },
        { label: 'Full-suite plans', price: '$129–$279/mo' },
        { label: 'Suite + PPC add-ons', price: '$300+/mo' },
      ],
      usNote: 'DragonBot: free forever.',
    },
    faq: [
      { q: 'Can DragonBot really replace my research tool?', a: 'For workflow research — keywords, competitors, niche analysis from your real account data — yes, and it finishes the work instead of handing you a CSV. If you love a specific dashboard for ad-hoc browsing, keep it; many sellers run both and let DragonBot do the recurring work.' },
      STD_FAQ_FREE, STD_FAQ_SETUP,
    ],
  },
  {
    path: '/analytics',
    metaTitle: 'Free Alternative to Amazon Analytics Tools — DragonBot',
    metaDescription: 'Profit dashboards charge $20–$100/mo. DragonBot tracks your real profit — every fee, ad, and cost — free forever.',
    eyebrow: 'Free analytics alternative',
    h1: { plain: 'Profit dashboards charge monthly.', accent: 'Yours is free.' },
    subhead: 'Sellerboard-style analytics run $20–$100/mo for numbers that come from your own account. DragonBot computes true profit — after every Amazon fee, ad dollar, and cost — and delivers it free, on schedule, in Slack.',
    bullets: [
      { t: 'True P&L per SKU', d: 'Revenue minus every fee, refund, ad dollar, and your COGS — the real margin, not the Seller Central illusion.' },
      { t: 'Scheduled reports', d: '"P&L every Monday morning" — done. Posted to Slack, formatted.' },
      { t: 'Ask anything', d: '"Which SKU lost margin this month and why?" — answered from your data in seconds.' },
      { t: 'PPC economics included', d: 'TACOS, ACoS, and wasted-spend analysis in the same brain.' },
      { t: 'Alerts that matter', d: 'Margin drops, fee changes, refund spikes — flagged before they compound.' },
      { t: 'Free forever', d: 'Unlimited reads and reports. No credit card.' },
    ],
    anchor: {
      title: 'What profit dashboards charge',
      items: [
        { label: 'Entry analytics plans', price: '$19–$40/mo' },
        { label: 'Full-featured plans', price: '$60–$100/mo' },
        { label: 'Multi-account tiers', price: '$150+/mo' },
      ],
      usNote: 'DragonBot: free forever.',
    },
    faq: [
      { q: 'How does DragonBot know my real profit?', a: 'It pulls every transaction, fee, and ad cost from the official APIs, and you add your COGS once. From there, true per-SKU profit is computed continuously.' },
      STD_FAQ_FREE, STD_FAQ_SETUP,
    ],
  },
  {
    path: '/ppc-tools',
    metaTitle: 'Free Alternative to Amazon PPC Tools — DragonBot',
    metaDescription: 'Amazon PPC software charges $78–$799/mo. DragonBot audits and manages your ads with AI — free to start, flat $50/mo for actions.',
    eyebrow: 'Free PPC-tool alternative',
    h1: { plain: 'PPC tools cost $78–$799/mo.', accent: 'This one starts free.' },
    subhead: 'Bid-management software charges hundreds a month — often a percentage of your ad spend. DragonBot audits your campaigns, finds the waste, and manages the fixes for a flat price that starts at $0.',
    bullets: [
      { t: 'Full-account PPC audits', d: 'Every campaign, ad group, and search term — waste surfaced automatically, free.' },
      { t: 'Negation & bid proposals', d: 'Bleeding keywords flagged with proposed negations and bid changes.' },
      { t: 'You approve, it executes', d: 'Approval-gated changes with a full audit trail (action plan).' },
      { t: 'No % of ad spend', d: 'Your success isn\'t our billing model. Flat pricing, period.' },
      { t: 'Search-term intelligence', d: 'Harvest winners into exact match, kill junk — on a schedule.' },
      { t: 'Reports in Slack', d: 'ACoS, TACOS, and spend summaries where your team already is.' },
    ],
    anchor: {
      title: 'What PPC software charges',
      items: [
        { label: 'Entry PPC tools', price: '$78–$199/mo' },
        { label: 'Mid-market platforms', price: '$299–$799/mo' },
        { label: 'Enterprise / % of spend', price: '3–4% of ad spend' },
      ],
      usNote: 'DragonBot: audits free forever · actions $50/mo flat.',
    },
    faq: [
      { q: 'Can it actually manage bids, or just report?', a: 'Both. The free tier gives you unlimited audits and analysis. The $50/mo action plan (private beta) lets DragonBot execute — pause keywords, adjust bids, add negatives — with your approval and a full log.' },
      STD_FAQ_FREE, STD_FAQ_SAFE,
    ],
  },
  {
    path: '/repricer',
    comingSoon: true,
    metaTitle: 'Free Amazon Repricer Alternative — DragonBot (Early Access)',
    metaDescription: 'Repricers charge $25–$800/mo. DragonBot is bringing free AI repricing — join early access, and get free profit analytics today.',
    eyebrow: 'Repricing · early access',
    h1: { plain: 'Repricers charge up to $800/mo.', accent: 'Ours will be free.' },
    subhead: 'AI repricing is coming to DragonBot — and like everything else, it\'ll start free. Join now and you\'ll be first in line. Meanwhile, DragonBot already watches your pricing\'s real effect: margin, Buy Box economics, and per-SKU profit, free.',
    bullets: [
      { t: 'Repricing — coming soon', d: 'AI-driven price optimization is on the roadmap. Early-access members get it first, free.' },
      { t: 'Price-impact analysis, today', d: 'See exactly how price changes moved units, margin, and profit per SKU.' },
      { t: 'Margin guardrails, today', d: 'Know your true break-even after every fee — before you cut price.' },
      { t: 'Competitor context, today', d: 'Ask how your pricing sits against the market in your niche.' },
      { t: 'The rest of the account, today', d: 'PPC, inventory, listings, messages — already handled, free.' },
    ],
    anchor: {
      title: 'What repricers charge',
      items: [
        { label: 'Budget repricers', price: '$25–$100/mo' },
        { label: 'AI repricers', price: '$250–$800/mo' },
        { label: 'Enterprise repricing', price: '$1,000+/mo' },
      ],
      usNote: 'DragonBot repricing: free at launch — join early access.',
    },
    faq: [
      { q: 'When does repricing launch?', a: 'It\'s in development. Sign up free now and you\'re automatically on the early-access list — we\'ll notify you when it goes live. Everything else DragonBot does is available today.' },
      STD_FAQ_FREE, STD_FAQ_SAFE,
    ],
  },
  {
    path: '/inventory',
    metaTitle: 'Free Alternative to Amazon Inventory Tools — DragonBot',
    metaDescription: 'Restock and forecasting tools charge $97–$399/mo. DragonBot forecasts demand and flags restocks with AI — free forever.',
    eyebrow: 'Free inventory-tool alternative',
    h1: { plain: 'Restock tools charge $97+/mo.', accent: 'Never stock out, free.' },
    subhead: 'Inventory software bills you monthly to watch your own stock levels. DragonBot forecasts demand from your real sales velocity, flags restocks before you run dry, and answers every inventory question — free.',
    bullets: [
      { t: 'Restock alerts', d: 'Days-of-cover computed per SKU from real velocity — flagged in Slack before it\'s urgent.' },
      { t: 'Demand forecasting', d: 'Seasonality-aware projections from your actual sales history.' },
      { t: 'Shipment planning', d: '"What should go in my next FBA shipment?" — answered with quantities.' },
      { t: 'Stranded & aging stock', d: 'Excess, stranded, and aging inventory surfaced before the fees bite.' },
      { t: 'Ask anything', d: '"How many units of X do I need for Q4?" — real answer, real data.' },
      { t: 'Free forever', d: 'Unlimited inventory intelligence. No credit card.' },
    ],
    anchor: {
      title: 'What inventory tools charge',
      items: [
        { label: 'Restock tools', price: '$97–$250/mo' },
        { label: 'Forecasting platforms', price: '$249–$999/mo' },
        { label: 'Bundled ops suites', price: '$69+/mo' },
      ],
      usNote: 'DragonBot: free forever.',
    },
    faq: [
      { q: 'Where does the forecast come from?', a: 'Your own sales history via the official SP-API — velocity, seasonality, and trend — not category averages. You can adjust assumptions in plain English.' },
      STD_FAQ_FREE, STD_FAQ_SETUP,
    ],
  },
  {
    path: '/listing-tools',
    metaTitle: 'Free Alternative to Amazon Listing Tools — DragonBot',
    metaDescription: 'Listing optimization tools charge $29–$165/mo. DragonBot optimizes titles, bullets, and keywords from your real search data — free.',
    eyebrow: 'Free listing-tool alternative',
    h1: { plain: 'Listing tools charge monthly.', accent: 'Optimize yours free.' },
    subhead: 'Listing software sells AI copy and keyword scores behind a subscription. DragonBot does listing optimization grounded in your real search-term and conversion data — and on the action plan, applies the edits too.',
    bullets: [
      { t: 'Data-grounded rewrites', d: 'Titles and bullets built from what actually converts in your niche — your search terms, not generic AI fluff.' },
      { t: 'Keyword coverage audits', d: 'Which high-value terms your listing misses, ranked by opportunity.' },
      { t: 'Conversion diagnostics', d: '"Clicks but no sales" — DragonBot finds why and proposes fixes.' },
      { t: 'A+ content direction', d: 'Briefs for your designer grounded in customer language from reviews.' },
      { t: 'Apply edits with approval', d: 'On the action plan, DragonBot pushes the edits — logged and reversible.' },
      { t: 'Free forever', d: 'Unlimited audits and rewrites on the free tier.' },
    ],
    anchor: {
      title: 'What listing tools charge',
      items: [
        { label: 'AI listing generators', price: '$29–$99/mo' },
        { label: 'Optimization platforms', price: '$99–$165/mo' },
        { label: 'Agency per-listing fees', price: '$300–$1,000/listing' },
      ],
      usNote: 'DragonBot: free forever · edits applied on the $50/mo action plan.',
    },
    faq: [
      { q: 'Is this just ChatGPT writing my listing?', a: 'No — that\'s the difference. DragonBot grounds every rewrite in your account\'s real search-term, conversion, and competitor data pulled from the official APIs. Generic AI writes plausible copy; DragonBot writes copy aimed at the queries you actually win.' },
      STD_FAQ_FREE, STD_FAQ_SETUP,
    ],
  },
  {
    path: '/feedback-tools',
    metaTitle: 'Free Alternative to Amazon Feedback & Review Tools — DragonBot',
    metaDescription: 'Review-request tools charge $10–$100/mo. DragonBot automates compliant review requests and buyer messages — free forever.',
    eyebrow: 'Free feedback-tool alternative',
    h1: { plain: 'Review tools charge monthly.', accent: 'Automate reviews free.' },
    subhead: 'Feedback software charges a subscription to click Amazon\'s own Request-a-Review button on a schedule. DragonBot automates that — plus the buyer messages the other tools ignore — free.',
    bullets: [
      { t: 'Request-a-Review automation', d: 'Compliant, official-API review requests on every eligible order.' },
      { t: 'Buyer message triage', d: 'Incoming messages read, categorized, and drafted for reply from your policies.' },
      { t: 'Negative feedback alerts', d: 'Flagged immediately with a recommended response path.' },
      { t: 'Review intelligence', d: 'What your reviews say about your product — themes, complaints, copy angles.' },
      { t: '100% TOS-compliant', d: 'Official Amazon mechanisms only. No incentivized-review gray areas.' },
      { t: 'Free forever', d: 'No per-email pricing, no order-volume tiers.' },
    ],
    anchor: {
      title: 'What feedback tools charge',
      items: [
        { label: 'Entry review tools', price: '$10–$34/mo' },
        { label: 'Suite bundles', price: '$49–$100/mo' },
        { label: 'Per-email pricing', price: 'scales with orders' },
      ],
      usNote: 'DragonBot: free forever.',
    },
    faq: [
      { q: 'Is automated review requesting allowed?', a: 'Yes — DragonBot uses Amazon\'s official Request-a-Review mechanism through the API, which is explicitly TOS-compliant. It never sends incentivized or manipulative review solicitations.' },
      STD_FAQ_FREE, STD_FAQ_SETUP,
    ],
  },
  {
    path: '/reimbursement',
    comingSoon: true,
    metaTitle: 'Free FBA Reimbursement Alternative — Keep 100% — DragonBot (Early Access)',
    metaDescription: 'Reimbursement services take 10–25% of your recovery. DragonBot is bringing free reimbursement detection — keep everything Amazon owes you.',
    eyebrow: 'Reimbursements · early access',
    h1: { plain: 'They take 25% of your money.', accent: 'Keep 100% instead.' },
    subhead: 'Reimbursement services charge 10–25% commission on money Amazon already owes you. DragonBot is bringing free reimbursement detection — flag lost, damaged, and fee-error cases from your own data, keep every dollar. Join early access.',
    bullets: [
      { t: 'Reimbursement detection — coming soon', d: 'Lost inventory, damaged units, and fee overcharges surfaced from your data. Early-access members first.' },
      { t: 'Keep 100%', d: 'No commission. The recovery is yours — you file with the evidence DragonBot prepares.' },
      { t: 'Fee auditing, today', d: 'DragonBot already analyzes your fees and flags anomalies worth investigating.' },
      { t: 'Shipment reconciliation, today', d: 'Ask what Amazon received vs what you sent — discrepancies surfaced.' },
      { t: 'The rest of the account, today', d: 'PPC, inventory, listings, messages — already handled, free.' },
    ],
    anchor: {
      title: 'What reimbursement services take',
      items: [
        { label: 'Typical commission', price: '25% of recovery' },
        { label: 'Discounted tiers', price: '10–18%' },
        { label: 'On $100k recovered', price: 'they keep $25,000' },
      ],
      usNote: 'DragonBot: free — you keep 100%. Join early access.',
    },
    faq: [
      { q: 'When does reimbursement detection launch?', a: 'It\'s in development. Sign up free now and you\'re automatically on the early-access list. Fee auditing and shipment reconciliation are available today on the free tier.' },
      { q: 'Why free when everyone charges commission?', a: 'Because it\'s your money. Amazon\'s 2025 policy changes squeezed the commission model anyway — detection from your own data is exactly what an AI operator should do as part of the job.' },
      STD_FAQ_SAFE,
    ],
  },
  {
    path: '/discontinued',
    metaTitle: 'Your Amazon Tool Shut Down? DragonBot Is Free — Migration Guide',
    metaDescription: 'Viral Launch, Sellics, Fetcher, and more have shut down or been absorbed. Replace your discontinued Amazon tool with one free AI.',
    eyebrow: 'For sellers whose tool died',
    h1: { plain: 'Your tool shut down.', accent: 'Your replacement is free.' },
    subhead: 'Viral Launch closed. Sellics dissolved into Perpetua. Fetcher, Splitly, Sellzone, Quantify Ninja — gone or absorbed into bundles you didn\'t ask for. DragonBot replaces the job they did — research, analytics, PPC, alerts — with one free AI.',
    bullets: [
      { t: 'Research tools → covered', d: 'Keyword and competitor research from your real Amazon data, finished for you.' },
      { t: 'Profit dashboards → covered', d: 'True per-SKU P&L after every fee, scheduled into Slack.' },
      { t: 'PPC tools → covered', d: 'Audits, negations, and bid management with approval gates.' },
      { t: 'Alert tools → covered', d: 'Listing changes, margin drops, restock warnings — flagged automatically.' },
      { t: 'Nothing to migrate', d: 'DragonBot pulls fresh data straight from Amazon. Connect and your history is there.' },
      { t: 'Free forever', d: 'The last migration you\'ll do because a subscription died.' },
    ],
    anchor: {
      title: 'Recently discontinued or absorbed',
      items: [
        { label: 'Viral Launch', price: 'closed Jan 2026' },
        { label: 'Sellics / Sonar', price: 'dissolved into Perpetua' },
        { label: 'Fetcher, Splitly, Sellzone…', price: 'sunset' },
      ],
      usNote: 'DragonBot: free forever — and not going anywhere.',
    },
    faq: [
      { q: 'Can I import data from my dead tool?', a: 'You won\'t need to. DragonBot pulls your full history directly from Amazon\'s official APIs — sales, ads, inventory, messages. The moment you connect, the data your old tool showed you is back.' },
      { q: 'How do I know DragonBot won\'t shut down too?', a: 'Fair question in this market. DragonBot is built by active 8-figure Amazon sellers who run their own brands on it — it exists because we need it ourselves.' },
      STD_FAQ_FREE,
    ],
  },

  /* ═══════════ C3 — niche pages ═══════════ */
  {
    path: '/amazon-ppc',
    metaTitle: 'Amazon PPC, Run by AI — Free | DragonBot',
    metaDescription: 'DragonBot audits your Amazon PPC, cuts wasted spend, and manages bids with AI. Free forever to start. Lower your ACoS.',
    eyebrow: 'Amazon PPC on autopilot',
    h1: { plain: 'Amazon PPC,', accent: 'run by AI.' },
    subhead: 'DragonBot audits every campaign, finds the wasted spend, proposes the fixes, and — with your approval — executes them. Unlimited audits free forever. No percentage of your ad spend, ever.',
    bullets: [
      { t: 'Full-account audit, free', d: 'Every campaign and search term analyzed — bleeders, gaps, and structure issues surfaced.' },
      { t: 'ACoS down, methodically', d: 'Negation candidates, bid adjustments, and budget shifts proposed with the data behind them.' },
      { t: 'Search-term harvesting', d: 'Winners promoted to exact match, junk negated — on a schedule.' },
      { t: 'You stay in control', d: 'Supervised mode: DragonBot proposes, you approve in Slack, it executes and logs.' },
      { t: 'Weekly PPC reports', d: 'ACoS, TACOS, spend, and what changed — posted to Slack automatically.' },
      { t: 'Flat pricing', d: 'Free tier + $50/mo action plan. Never a % of spend.' },
    ],
    anchor: {
      title: 'The going rate for PPC management',
      items: [
        { label: 'PPC software', price: '$78–$799/mo' },
        { label: 'Agencies', price: '$500–$3,000/mo' },
        { label: '% of spend models', price: '3–4% of ad spend' },
      ],
      usNote: 'DragonBot: audits free · management $50/mo flat.',
    },
    faq: [
      { q: 'How does DragonBot lower my ACoS?', a: 'The classic levers, executed relentlessly: negate irrelevant search terms, cut bids on bleeders, harvest converting terms into exact match, and rebalance budget toward what works — every week, with receipts.' },
      STD_FAQ_FREE, STD_FAQ_SAFE,
    ],
  },
  {
    path: '/amazon-seller-software',
    metaTitle: 'Free Amazon Seller Software — One AI for Your Whole Account | DragonBot',
    metaDescription: 'Replace the tool stack. DragonBot runs PPC, inventory, listings, and messages with AI — free forever, no credit card.',
    eyebrow: 'One AI, whole account',
    h1: { plain: 'Amazon seller software,', accent: 'free forever.' },
    subhead: 'Most sellers pay for three or four tools that each do one job. DragonBot is one AI across the whole account — PPC, inventory, listings, analytics, messages — free forever on the read tier.',
    bullets: [
      { t: 'PPC', d: 'Audits, negations, bids — proposed free, executed on the action plan.' },
      { t: 'Inventory', d: 'Restock alerts and forecasts from real velocity.' },
      { t: 'Listings', d: 'Optimization grounded in your search-term data.' },
      { t: 'Analytics', d: 'True per-SKU P&L after every fee, on schedule.' },
      { t: 'Messages', d: 'Buyer messages triaged and drafted from your policies.' },
      { t: 'Everywhere you work', d: 'Slack, Claude, ChatGPT, Cursor — one brain, every surface.' },
    ],
    anchor: {
      title: 'What the typical stack costs',
      items: [
        { label: 'Research suite', price: '$129/mo' },
        { label: 'Profit dashboard', price: '$29/mo' },
        { label: 'PPC tool', price: '$199/mo' },
      ],
      usNote: 'DragonBot replaces the stack: free forever · actions $50/mo.',
    },
    faq: [
      { q: 'What\'s the catch with free?', a: 'No catch — the free tier is unlimited read access: data, analyses, reports, alerts. The $50/mo action plan adds write operations (pause campaigns, edit listings, send refunds) with approvals and an audit trail.' },
      STD_FAQ_SAFE, STD_FAQ_SETUP,
    ],
  },
  {
    path: '/amazon-inventory',
    metaTitle: 'AI Amazon Inventory Management — Free | DragonBot',
    metaDescription: 'Never stock out again. DragonBot forecasts demand and flags restocks from your real sales data — free forever.',
    eyebrow: 'Inventory, watched by AI',
    h1: { plain: 'Never stock out', accent: 'again.' },
    subhead: 'DragonBot watches your inventory the way a good ops manager would — days of cover per SKU, seasonality-aware forecasts, restock flags before it\'s urgent — free forever.',
    bullets: [
      { t: 'Restock alerts in Slack', d: 'Per-SKU days-of-cover with lead-time awareness. Flagged early, not late.' },
      { t: 'Demand forecasts', d: 'Projections from your actual velocity and seasonality.' },
      { t: 'Shipment planning', d: 'What to send, how much, and when — answered with numbers.' },
      { t: 'Aging & stranded stock', d: 'Storage-fee risks surfaced before they hit your P&L.' },
      { t: 'Ask anything', d: '"Do I have enough of SKU X for Prime Day?" — instant answer.' },
      { t: 'Free forever', d: 'No per-SKU pricing, no order-volume tiers.' },
    ],
    anchor: null,
    faq: [
      { q: 'Does it account for supplier lead times?', a: 'Yes — tell DragonBot your lead times once (or per supplier) and restock flags fire with enough runway to reorder, produce, and ship.' },
      STD_FAQ_FREE, STD_FAQ_SETUP,
    ],
  },
  {
    path: '/amazon-listing-optimization',
    metaTitle: 'AI Amazon Listing Optimization — Free | DragonBot',
    metaDescription: 'DragonBot optimizes your Amazon listings from real search-term and conversion data — titles, bullets, keywords. Free forever.',
    eyebrow: 'Listings, optimized by AI',
    h1: { plain: 'Listing optimization,', accent: 'grounded in your data.' },
    subhead: 'Generic AI writes plausible copy. DragonBot writes copy aimed at the search terms you actually win — because it can see your real query, click, and conversion data through the official API.',
    bullets: [
      { t: 'Keyword coverage audit', d: 'High-value terms your listing misses, ranked by opportunity — free.' },
      { t: 'Titles & bullets, rewritten', d: 'Built from converting queries and customer review language.' },
      { t: 'Conversion diagnostics', d: 'Traffic but no sales? DragonBot isolates whether it\'s price, images, copy, or reviews.' },
      { t: 'Rank tracking context', d: 'Where you index and rank for the terms that matter.' },
      { t: 'Edits applied for you', d: 'On the action plan, approved changes go live — logged and reversible.' },
      { t: 'Free forever', d: 'Unlimited audits and rewrites.' },
    ],
    anchor: null,
    faq: [
      { q: 'What data does it use for optimization?', a: 'Your Search Query Performance, search-term reports, conversion data, and competitor context via official APIs — plus the language your customers use in reviews. That grounding is what generic AI copy tools don\'t have.' },
      STD_FAQ_FREE, STD_FAQ_SETUP,
    ],
  },
  {
    path: '/amazon-listing-generator',
    comingSoon: true,
    metaTitle: 'Free Amazon Listing Generator — AI Titles & Bullets | DragonBot',
    metaDescription: 'Generate Amazon titles, bullets, and descriptions with AI grounded in real search data. Free with a DragonBot account.',
    eyebrow: 'Listing generator',
    h1: { plain: 'Generate your listing', accent: 'from real data.' },
    subhead: 'Free-floating AI generators write from vibes. DragonBot generates titles, bullets, and descriptions from your actual search-term and conversion data — sign up free and generate inside Slack or your AI client.',
    bullets: [
      { t: 'Titles that index', d: 'Built from the queries your niche actually searches.' },
      { t: 'Bullets that convert', d: 'Benefit-led copy using your customers\' own review language.' },
      { t: 'Backend keywords', d: 'Coverage-gap terms slotted into search terms fields.' },
      { t: 'Whole listing in minutes', d: 'Describe the product, get the draft, iterate in conversation.' },
      { t: 'Free with your account', d: 'Generation runs on the free tier — no per-listing fees.' },
    ],
    anchor: null,
    faq: [
      { q: 'Is there a standalone generator I can use without signing up?', a: 'Generation runs inside DragonBot (Slack or your AI client) so it can use your real account data — that\'s what makes the output good. Signup is free with no card, so the barrier is 2 minutes, not $2.' },
      STD_FAQ_FREE, STD_FAQ_SETUP,
    ],
  },
  {
    path: '/amazon-profit-analytics',
    metaTitle: 'Amazon Profit Analytics, Free — True P&L per SKU | DragonBot',
    metaDescription: 'See your real Amazon profit after every fee, ad, and cost. Per-SKU P&L, scheduled reports, margin alerts — free forever.',
    eyebrow: 'Profit, actually known',
    h1: { plain: 'Your real profit,', accent: 'not the illusion.' },
    subhead: 'Seller Central shows revenue. DragonBot shows what you kept — after referral fees, FBA fees, storage, refunds, ads, and your COGS — per SKU, per day, free forever.',
    bullets: [
      { t: 'True per-SKU P&L', d: 'Every fee line accounted for. Add COGS once, know your margin forever.' },
      { t: 'Scheduled into Slack', d: '"P&L every Monday" — formatted, on time, discussed where your team is.' },
      { t: 'Margin-drop alerts', d: 'Fee changes and creeping costs flagged before they compound.' },
      { t: 'TACOS & ad economics', d: 'Ad spend integrated into profitability, not a separate silo.' },
      { t: 'Ask anything', d: '"Why did March margin dip?" — answered with the actual drivers.' },
      { t: 'Free forever', d: 'Unlimited reports. No credit card.' },
    ],
    anchor: {
      title: 'What profit dashboards charge',
      items: [
        { label: 'Sellerboard-class tools', price: '$19–$79/mo' },
        { label: 'Full analytics platforms', price: '$97+/mo' },
        { label: 'Accounting integrations', price: '$29–$115/mo' },
      ],
      usNote: 'DragonBot: free forever.',
    },
    faq: [
      { q: 'How is this different from Seller Central reports?', a: 'Seller Central scatters your economics across a dozen reports and never subtracts your COGS. DragonBot unifies every fee, ad dollar, refund, and cost into one true per-SKU P&L — and explains changes in plain English.' },
      STD_FAQ_FREE, STD_FAQ_SETUP,
    ],
  },
  {
    path: '/amazon-fba-calculator',
    comingSoon: true,
    metaTitle: 'Free Amazon FBA Calculator — Real Fees, Real Profit | DragonBot',
    metaDescription: 'Calculate FBA fees and true profit — not estimates. DragonBot computes real per-SKU profitability from your account, free.',
    eyebrow: 'FBA profit, computed',
    h1: { plain: 'Skip the calculator.', accent: 'Know your real number.' },
    subhead: 'FBA calculators make you type in guesses. DragonBot connects to your account and computes actual profitability — real fees, real ad costs, real returns — per SKU, continuously, free.',
    bullets: [
      { t: 'Real fees, not estimates', d: 'Your actual referral, FBA, and storage fees from the API — not a lookup table.' },
      { t: 'Profit per SKU, live', d: 'Margin after everything, updated as fees and costs change.' },
      { t: 'What-if analysis', d: '"What happens to margin if I drop price 10%?" — modeled on your real economics.' },
      { t: 'New-product sizing', d: 'Evaluating a launch? DragonBot estimates fees and break-even from comparable listings.' },
      { t: 'Free forever', d: 'A calculator you never have to re-open — it just knows.' },
    ],
    anchor: null,
    faq: [
      { q: 'Can I calculate fees for a product I don\'t sell yet?', a: 'Yes — give DragonBot the category, dimensions, weight, and target price and it estimates the full fee stack and break-even. For products you already sell, it uses your real fees automatically.' },
      STD_FAQ_FREE, STD_FAQ_SETUP,
    ],
  },
  {
    path: '/ai-amazon-agent',
    metaTitle: 'An AI Agent That Runs Your Amazon Account — Free | DragonBot',
    metaDescription: 'DragonBot is an AI agent for Amazon sellers: PPC, inventory, listings, messages — monitored free forever, actions from $50/mo flat.',
    eyebrow: 'The AI Amazon operator',
    h1: { plain: 'An AI agent that', accent: 'runs your Amazon account.' },
    subhead: 'Not a dashboard. Not a chatbot with opinions. DragonBot connects to Seller Central and Amazon Ads through the official APIs and works your account — free forever to start.',
    bullets: [
      { t: 'It does, not dashboards', d: 'Finished keyword sheets, executed PPC fixes, drafted replies — output, not homework.' },
      { t: 'Supervised or autonomous', d: 'Approve every action in Slack, or automate the routine ones. Full audit trail either way.' },
      { t: 'Whole-account scope', d: 'PPC, inventory, listings, analytics, customer messages — one agent.' },
      { t: 'Your AI, your surface', d: 'Slack-native, plus MCP for Claude, ChatGPT, and Cursor.' },
      { t: 'Built by 8-figure sellers', d: '10 years on Amazon. DragonBot is the employee we always wanted.' },
      { t: 'Free forever', d: 'Unlimited reads. Actions at a flat $50/mo. No credit card to start.' },
    ],
    anchor: {
      title: 'What AI operators charge',
      items: [
        { label: 'Credit-metered agents', price: '$49–$499/mo' },
        { label: '"AI employee" platforms', price: '$299–$698/mo' },
        { label: 'Managed AI programs', price: 'contact sales' },
      ],
      usNote: 'DragonBot: free forever · actions $50/mo flat.',
    },
    faq: [
      { q: 'What can it actually do without me?', a: 'On the free tier: monitor, analyze, report, alert — unlimited. On the action plan: execute approved changes (bids, negations, listing edits, refunds) in supervised mode, or handle pre-approved routine actions autonomously. Everything is logged.' },
      STD_FAQ_FREE, STD_FAQ_SAFE,
    ],
  },
  {
    path: '/amazon-mcp',
    metaTitle: 'Free Amazon MCP Server — Connect Claude to Seller Central | DragonBot',
    metaDescription: 'Connect Claude, ChatGPT, or Cursor to your Amazon seller account with DragonBot\'s free MCP server. Clean data, guardrailed actions.',
    eyebrow: 'Amazon MCP server',
    h1: { plain: 'Your Amazon account,', accent: 'in Claude.' },
    subhead: 'DragonBot\'s MCP server connects Seller Central and Amazon Ads to any MCP client — Claude, ChatGPT, Cursor — with clean, always-fresh data and guardrailed write actions. Free forever.',
    bullets: [
      { t: 'Two-minute setup', d: 'Sign up, connect Amazon via OAuth, paste one config into your MCP client.' },
      { t: 'Clean, ETL\'d data', d: 'Sales, ads, inventory, fees, messages — structured for AI, not raw API sludge.' },
      { t: 'Every major client', d: 'Claude Desktop, claude.ai connectors, ChatGPT, Cursor, custom agents.' },
      { t: 'Guardrailed writes', d: 'Approval-gated actions with full audit trail on the action plan.' },
      { t: 'Slack as a bonus', d: 'Teammates without MCP clients get the same brain in Slack.' },
      { t: 'Free forever', d: 'No trial clock, no per-order tiers, no card.' },
    ],
    anchor: {
      title: 'What hosted Amazon MCPs charge',
      items: [
        { label: 'Order-tiered MCPs', price: '$39–$199/mo' },
        { label: 'Flat-fee data layers', price: '$97/mo' },
        { label: 'Claude-suite products', price: '$97–$397/mo' },
      ],
      usNote: 'DragonBot MCP: free forever.',
    },
    faq: [
      { q: 'How do I connect it to Claude?', a: 'Sign up free, link your Amazon account via the official OAuth flow, then add DragonBot as a connector in Claude (or paste the MCP config into Claude Desktop/Cursor). Under 5 minutes end to end.' },
      STD_FAQ_FREE, STD_FAQ_SAFE,
    ],
  },
  {
    path: '/amazon-repricer',
    comingSoon: true,
    metaTitle: 'Free Amazon Repricer — Early Access | DragonBot',
    metaDescription: 'AI repricing is coming to DragonBot — free, unlike the $25–$800/mo incumbents. Join early access and get free profit analytics today.',
    eyebrow: 'Repricing · early access',
    h1: { plain: 'A free Amazon repricer', accent: 'is coming.' },
    subhead: 'Repricers charge $25 to $800 a month. DragonBot\'s AI repricing will start free — join early access now, and use the free profit analytics that make repricing decisions smarter today.',
    bullets: [
      { t: 'AI repricing — on the roadmap', d: 'Margin-aware price optimization, early-access members first.' },
      { t: 'Margin guardrails, today', d: 'True break-even per SKU so you never reprice below profit.' },
      { t: 'Price-impact analysis, today', d: 'How every price change moved units and margin.' },
      { t: 'Full operator included', d: 'PPC, inventory, listings, messages — free while you wait.' },
    ],
    anchor: {
      title: 'What repricers charge',
      items: [
        { label: 'Rule-based repricers', price: '$25–$100/mo' },
        { label: 'AI repricers', price: '$250–$800/mo' },
        { label: 'Enterprise', price: '$1,000+/mo' },
      ],
      usNote: 'DragonBot repricing: free at launch.',
    },
    faq: [
      { q: 'When does repricing launch?', a: 'In development now. Sign up free and you\'re automatically first in line — we\'ll email when it\'s live. Everything else DragonBot does works today.' },
      STD_FAQ_FREE, STD_FAQ_SAFE,
    ],
  },
  {
    path: '/amazon-review-automation',
    metaTitle: 'Automate Amazon Review Requests, Free — TOS-Safe | DragonBot',
    metaDescription: 'DragonBot automates compliant Request-a-Review on every eligible order and handles buyer messages — free forever.',
    eyebrow: 'Reviews on autopilot',
    h1: { plain: 'More reviews,', accent: 'zero clicking.' },
    subhead: 'DragonBot fires Amazon\'s official Request-a-Review on every eligible order, triages buyer messages, and flags negative feedback the moment it lands — free forever, fully TOS-compliant.',
    bullets: [
      { t: 'Every eligible order', d: 'Official Request-a-Review, automatically, at the optimal window.' },
      { t: 'Buyer messages drafted', d: 'Incoming messages triaged with policy-based reply drafts for approval.' },
      { t: 'Negative feedback alerts', d: 'Instant Slack flag with the recommended response path.' },
      { t: 'Review mining', d: 'Themes and complaints from your reviews turned into listing and product fixes.' },
      { t: '100% compliant', d: 'Official Amazon mechanisms only — nothing that risks your account.' },
      { t: 'Free forever', d: 'No per-message or per-order pricing.' },
    ],
    anchor: null,
    faq: [
      { q: 'Will this get my account in trouble?', a: 'No — DragonBot only uses Amazon\'s own Request-a-Review mechanism via the official API, which Amazon explicitly provides for this purpose. It never sends off-policy review solicitations.' },
      STD_FAQ_FREE, STD_FAQ_SETUP,
    ],
  },
  {
    path: '/amazon-reimbursement',
    comingSoon: true,
    metaTitle: 'Free Amazon FBA Reimbursement — Keep 100% | DragonBot (Early Access)',
    metaDescription: 'Stop paying 25% commission to recover money Amazon owes you. DragonBot\'s free reimbursement detection is coming — join early access.',
    eyebrow: 'Reimbursements · early access',
    h1: { plain: 'Recover FBA money.', accent: 'Keep all of it.' },
    subhead: 'Reimbursement services take 10–25% of every dollar they recover for you. DragonBot is bringing free detection — lost inventory, damaged units, fee overcharges — so you file with evidence and keep 100%. Join early access.',
    bullets: [
      { t: 'Detection — coming soon', d: 'Discrepancies surfaced from your own inventory and fee data.' },
      { t: 'Keep 100%', d: 'No commission model. Your recovery is yours.' },
      { t: 'Fee auditing, today', d: 'Anomalous fees flagged for investigation on the free tier.' },
      { t: 'Shipment reconciliation, today', d: 'Sent vs received quantities compared automatically.' },
      { t: 'Full operator included', d: 'PPC, inventory, listings, messages — free today.' },
    ],
    anchor: {
      title: 'The commission you\'d avoid',
      items: [
        { label: 'Typical services', price: '25% of recovery' },
        { label: 'On $20k recovered', price: 'they keep $5,000' },
        { label: 'DragonBot', price: '$0' },
      ],
      usNote: 'Join free — early access when detection ships.',
    },
    faq: [
      { q: 'When does this launch?', a: 'Detection is in development. Sign up free now — you\'re automatically on the early-access list, and fee auditing + shipment reconciliation work today.' },
      STD_FAQ_FREE, STD_FAQ_SAFE,
    ],
  },
  {
    path: '/amazon-product-research',
    comingSoon: true,
    metaTitle: 'Free Amazon Product Research — Real Data | DragonBot',
    metaDescription: 'Research products and niches with AI grounded in real Amazon data — free with a DragonBot account.',
    eyebrow: 'Product research',
    h1: { plain: 'Product research', accent: 'without the $129/mo suite.' },
    subhead: 'DragonBot researches niches and products in conversation — market structure, competition, differentiation gaps — grounded in real Amazon data, free with your account.',
    bullets: [
      { t: 'Niche landscapes', d: 'Describe a category; get the competitive map and where the gap is.' },
      { t: 'Your data advantage', d: 'Existing sellers: Search Query Performance and Brand Analytics sharpen every answer.' },
      { t: 'Validation questions', d: '"Is this niche winnable at my budget?" — answered honestly, with numbers.' },
      { t: 'Free with your account', d: 'No research-suite subscription required.' },
    ],
    anchor: null,
    faq: [
      { q: 'Do I need to be selling already?', a: 'No — anyone can research niches conversationally. Active sellers get sharper answers because DragonBot can ground research in their real account data.' },
      STD_FAQ_FREE, STD_FAQ_SETUP,
    ],
  },
];

export function getLpPage(path) {
  return lpPages.find(p => p.path === path) || null;
}
