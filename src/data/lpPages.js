/* ═══════════════════════════════════════════════════════════════
   Google Ads landing pages (v2 campaigns).

   Two templates:
     template: 'feature' → rendered by LandingV4 (the main-LP template)
       with a custom hero + "Your <feature> with DragonBot" chat demo.
       Fields: hero.segments [{text, color:'orange'|'white'|'green'}],
               hero.paragraph, demo.feature, demo.script.
     template: 'alt'     → rendered by LpPage (alternative/comparison
       layout with bullets + price-anchor + FAQ).

   Chat demo script messages: { who:'user'|'host', text, tool?:{name,args},
   stats?:[{v,l}] }. KEEP THIS FILE JSX-FREE — it is imported by
   scripts/postbuild-spa-routes.mjs under plain Node.

   Paths must match the ad-group Final URLs in
   DragonBot-marketing/landing_page_map_v2.csv.
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

/* ─── shared color shorthands ─── */
const O = 'orange', W = 'white', G = 'green';

export const lpPages = [
  /* ═══════════════════ C3 — FEATURE PAGES (main-LP template) ═══════════════════ */
  {
    path: '/amazon-ppc',
    template: 'feature',
    metaTitle: 'Amazon PPC. Run by AI. Free Forever | DragonBot',
    metaDescription: 'DragonBot audits your Amazon PPC, cuts wasted spend, and manages bids with AI. Free forever — no percentage of ad spend.',
    hero: {
      segments: [{ text: 'Amazon PPC.', color: O }, { text: 'Run by AI.', color: W }, { text: 'Free forever.', color: G }],
      paragraph: 'DragonBot audits every campaign, finds the wasted spend, proposes the fixes, and — with your approval — executes them. Unlimited audits, free forever. Never a percentage of your ad spend.',
    },
    demo: {
      feature: 'PPC monitoring',
      script: [
        { who: 'user', text: "How's my PPC doing? Anything bleeding?" },
        { who: 'host', text: 'Auditing all campaigns…', tool: { name: 'dragonbot.run_skill', args: 'ppc_audit(window="30d")' } },
        { who: 'host', text: 'Found it. 19 keywords are burning spend with zero conversions:', stats: [ { v: '$1,420', l: 'wasted / mo' }, { v: '19', l: 'zero-sale keywords' }, { v: '41%', l: 'current ACoS' }, { v: '28%', l: 'projected ACoS' } ] },
        { who: 'user', text: 'Pause them, and set up a weekly cleanup.' },
        { who: 'host', text: 'Scheduling…', tool: { name: 'dragonbot.run_skill', args: 'schedule(ppc_cleanup, weekly)' } },
        { who: 'host', text: 'Done. 19 keywords paused (logged in your audit trail). Every Monday 9am I\'ll re-audit, negate new bleeders, and post the summary to Slack — you approve anything non-routine.' },
      ],
    },
  },
  {
    path: '/amazon-seller-software',
    template: 'feature',
    metaTitle: 'All the Amazon Seller Tools You Need, in One. Free Forever | DragonBot',
    metaDescription: 'Replace the tool stack. DragonBot runs PPC, inventory, listings, analytics, and messages with AI — free forever, no credit card.',
    hero: {
      segments: [{ text: 'All of the Amazon seller tools you need', color: O }, { text: 'in one tool.', color: W }, { text: 'Free forever.', color: G }],
      paragraph: 'Most sellers pay for three or four tools that each do one job. DragonBot is one AI across the whole account — PPC, inventory, listings, analytics, customer messages — free forever.',
    },
    demo: {
      feature: 'Amazon operations',
      script: [
        { who: 'user', text: 'Give me the full picture — sales, ads, inventory. Anything on fire?' },
        { who: 'host', text: 'Pulling everything…', tool: { name: 'dragonbot.run_skill', args: 'account_overview()' } },
        { who: 'host', text: 'Here\'s your account right now:', stats: [ { v: '$48.2k', l: 'sales (30d, ↑12%)' }, { v: '26%', l: 'ACoS' }, { v: '2 SKUs', l: 'restock needed' }, { v: '1', l: 'suppressed listing' } ] },
        { who: 'user', text: 'Fix the suppressed listing and plan the restocks.' },
        { who: 'host', text: 'Working…', tool: { name: 'dragonbot.run_skill', args: 'fix_suppression() + restock_plan()' } },
        { who: 'host', text: 'Suppression fixed — image URL 404, re-uploaded, reinstatement submitted. Restock plan drafted: 320 units SKU-A, 180 SKU-B, ship by Friday to avoid stockout. Want this overview every morning at 8?' },
      ],
    },
  },
  {
    path: '/amazon-inventory',
    template: 'feature',
    metaTitle: 'Never Stock Out Again — AI Amazon Inventory. Free Forever | DragonBot',
    metaDescription: 'The only Amazon inventory tool you need. AI demand forecasts and restock alerts from your real sales data — free forever.',
    hero: {
      segments: [{ text: 'Never stock out again.', color: W }, { text: 'The only Amazon inventory tool you need.', color: O }, { text: 'Free forever.', color: G }],
      paragraph: 'DragonBot watches your inventory like a good ops manager — days of cover per SKU, seasonality-aware forecasts, restock flags with your lead times built in. Free forever.',
    },
    demo: {
      feature: 'inventory management',
      script: [
        { who: 'user', text: 'When do I run out of my top sellers?' },
        { who: 'host', text: 'Forecasting from your live velocity…', tool: { name: 'dragonbot.run_skill', args: 'inventory_forecast(top_skus)' } },
        { who: 'host', text: 'Two need attention:', stats: [ { v: '18 days', l: 'Garlic Press — cover left' }, { v: '42 days', l: 'Peeler Set — cover left' }, { v: '320 units', l: 'reorder now (lead time 25d)' }, { v: 'Oct 3', l: 'projected stockout' } ] },
        { who: 'user', text: 'Draft the PO and remind me when the others get close.' },
        { who: 'host', text: 'On it…', tool: { name: 'dragonbot.run_skill', args: 'draft_po() + watch_inventory(all)' } },
        { who: 'host', text: 'PO drafted for 320 units — in your Slack for approval. I\'m watching every SKU daily; you\'ll get a flag whenever cover drops below lead time + 2 weeks.' },
      ],
    },
  },
  {
    path: '/amazon-listing-optimization',
    template: 'feature',
    metaTitle: 'Amazon Listing Optimization. Run by AI. Free Forever | DragonBot',
    metaDescription: 'DragonBot optimizes titles, bullets, and keywords from your real search-term and conversion data — free forever.',
    hero: {
      segments: [{ text: 'Amazon listing optimization.', color: O }, { text: 'Run by AI.', color: W }, { text: 'Free forever.', color: G }],
      paragraph: 'Generic AI writes plausible copy. DragonBot writes copy aimed at the search terms you actually win — grounded in your real query, click, and conversion data. Free forever.',
    },
    demo: {
      feature: 'listing optimization',
      script: [
        { who: 'user', text: 'Why is my garlic press getting clicks but no sales?' },
        { who: 'host', text: 'Diagnosing…', tool: { name: 'dragonbot.run_skill', args: 'listing_diagnose(B001CUWUO7)' } },
        { who: 'host', text: 'Three findings:', stats: [ { v: '+12%', l: 'priced above market' }, { v: '9', l: 'high-value keywords missing' }, { v: '2.1%', l: 'CVR (niche avg 4.3%)' }, { v: '#4 image', l: 'weakest vs competitors' } ] },
        { who: 'user', text: 'Rewrite the title and bullets with those keywords.' },
        { who: 'host', text: 'Rewriting from your search-term data…', tool: { name: 'dragonbot.run_skill', args: 'rewrite_listing(B001CUWUO7)' } },
        { who: 'host', text: 'Draft ready — title now covers all 9 missing terms, bullets lead with the benefits your reviews actually praise. Approve in Slack and I\'ll push it live with full rollback.' },
      ],
    },
  },
  {
    path: '/amazon-listing-generator',
    template: 'feature',
    metaTitle: 'Amazon Listing Generation. Run by AI. Free Forever | DragonBot',
    metaDescription: 'Generate Amazon titles, bullets, and descriptions with AI grounded in real search data — free forever with a DragonBot account.',
    hero: {
      segments: [{ text: 'Amazon listing generation.', color: O }, { text: 'Run by AI.', color: W }, { text: 'Free forever.', color: G }],
      paragraph: 'Free-floating generators write from vibes. DragonBot generates titles, bullets, and descriptions from real Amazon search data — the queries your niche actually types. Free forever.',
    },
    demo: {
      feature: 'listing generation',
      script: [
        { who: 'user', text: 'Write a full listing for my new bamboo cutting board — 3-piece set, juice grooves.' },
        { who: 'host', text: 'Researching the niche first…', tool: { name: 'dragonbot.run_skill', args: 'generate_listing(niche="bamboo cutting board")' } },
        { who: 'host', text: 'Generated from real demand data:', stats: [ { v: '1,240', l: 'queries analyzed' }, { v: '184 chars', l: 'title (fully indexed)' }, { v: '5', l: 'benefit-led bullets' }, { v: '38', l: 'backend keywords' } ] },
        { who: 'user', text: 'Make the second bullet about easy cleanup and add "knife-friendly".' },
        { who: 'host', text: 'Updated. Bullet 2 now leads with one-rinse cleanup, "knife-friendly" worked into the title and bullet 4 — it has 2.9k monthly searches in this niche. Want the A+ content brief too?' },
      ],
    },
  },
  {
    path: '/amazon-profit-analytics',
    template: 'feature',
    metaTitle: 'Amazon Profit Analytics. Know Your Real Margin. Free Forever | DragonBot',
    metaDescription: 'See your real Amazon profit after every fee, ad, and cost. Per-SKU P&L, scheduled reports, margin alerts — free forever.',
    hero: {
      segments: [{ text: 'Amazon profit analytics.', color: O }, { text: 'Know your real margin.', color: W }, { text: 'Free forever.', color: G }],
      paragraph: 'Seller Central shows revenue. DragonBot shows what you kept — after referral fees, FBA fees, storage, refunds, ads, and your COGS — per SKU, per day. Free forever.',
    },
    demo: {
      feature: 'profit analytics',
      script: [
        { who: 'user', text: 'What was my real profit last month?' },
        { who: 'host', text: 'Computing true P&L…', tool: { name: 'dragonbot.run_skill', args: 'pnl(month="last")' } },
        { who: 'host', text: 'After everything:', stats: [ { v: '$52.4k', l: 'revenue' }, { v: '−$18.1k', l: 'Amazon fees' }, { v: '−$6.2k', l: 'ad spend' }, { v: '$9.8k', l: 'net profit (18.7%)' } ] },
        { who: 'user', text: 'Which SKU dropped the most, and why?' },
        { who: 'host', text: 'Digging…', tool: { name: 'dragonbot.run_skill', args: 'margin_drivers(delta="mom")' } },
        { who: 'host', text: 'Garlic Press: margin fell 23% → 16%. Two causes: FBA fee tier change on June 1 (+$0.42/unit) and ad spend creep (+$380 on a broad campaign). Fix the campaign and you recover ~4 points. Want the P&L in Slack every Monday?' },
      ],
    },
  },
  {
    path: '/amazon-fba-calculator',
    template: 'feature',
    metaTitle: 'Amazon FBA Calculator — Real Fees, Real Profit. Free Forever | DragonBot',
    metaDescription: 'Skip the calculator — DragonBot computes actual FBA fees and true per-unit profit from your account, free forever.',
    hero: {
      segments: [{ text: 'Skip the FBA calculator.', color: O }, { text: 'Know your real number.', color: W }, { text: 'Free forever.', color: G }],
      paragraph: 'Calculators make you type in guesses. DragonBot computes actual profitability — real fees, real ad costs, real returns — per SKU, continuously. Free forever.',
    },
    demo: {
      feature: 'FBA economics',
      script: [
        { who: 'user', text: 'If I sell the cutting board at $24.99, what do I actually keep?' },
        { who: 'host', text: 'Pulling your real fee stack…', tool: { name: 'dragonbot.run_skill', args: 'unit_economics(sku, price=24.99)' } },
        { who: 'host', text: 'Per unit, with your actual fees:', stats: [ { v: '−$3.75', l: 'referral fee (15%)' }, { v: '−$5.86', l: 'FBA fulfillment' }, { v: '−$0.42', l: 'storage (avg)' }, { v: '$6.71', l: 'net / unit (26.8%)' } ] },
        { who: 'user', text: 'And at $22.99 if volume goes up 15%?' },
        { who: 'host', text: 'Modeled: $5.21/unit margin × 1.15 volume ≈ 11% less total profit — the price cut doesn\'t pay for itself unless volume rises 29%+. I\'d test the higher price with better images first (your #4 image underperforms).' },
      ],
    },
  },
  {
    path: '/ai-amazon-agent',
    template: 'feature',
    metaTitle: 'An AI Agent That Runs Your Amazon Account. Free Forever | DragonBot',
    metaDescription: 'DragonBot is an AI agent for Amazon sellers: PPC, inventory, listings, messages — free forever, actions at a flat $50/mo.',
    hero: {
      segments: [{ text: 'An AI agent that runs your Amazon account.', color: O }, { text: 'Free forever.', color: G }],
      paragraph: 'Not a dashboard. Not a chatbot with opinions. DragonBot connects to Seller Central and Amazon Ads through the official APIs and works your account — supervised or autonomous, with a full audit trail.',
    },
    demo: {
      feature: 'AI employee',
      script: [
        { who: 'user', text: "You're my new Amazon employee. What needs doing today?" },
        { who: 'host', text: 'Reviewing your account…', tool: { name: 'dragonbot.run_skill', args: 'daily_review()' } },
        { who: 'host', text: 'Three things need attention:', stats: [ { v: '$47/day', l: 'bleeding keyword found' }, { v: '11 days', l: 'cover left on top SKU' }, { v: '2', l: 'buyer messages waiting' }, { v: '1', l: 'new negative review' } ] },
        { who: 'user', text: 'Handle all of it. Ask me before anything irreversible.' },
        { who: 'host', text: 'Executing in supervised mode…', tool: { name: 'dragonbot.run_skill', args: 'execute(supervised=true)' } },
        { who: 'host', text: 'Keyword paused ✓. Restock PO drafted → your approval. Both buyer replies drafted from your policies → your approval. Review response suggested. Everything logged — check the audit trail anytime.' },
      ],
    },
  },
  {
    path: '/amazon-mcp',
    template: 'feature',
    metaTitle: 'Free Amazon MCP Server — Your Account in Claude. Free Forever | DragonBot',
    metaDescription: 'Connect Claude, ChatGPT, or Cursor to your Amazon seller account with DragonBot\'s free MCP server. Free forever.',
    hero: {
      segments: [{ text: 'Your Amazon account, in Claude.', color: O }, { text: 'Or ChatGPT. Or Cursor.', color: W }, { text: 'Free forever.', color: G }],
      paragraph: 'DragonBot\'s MCP server connects Seller Central and Amazon Ads to any MCP client — clean, always-fresh, ETL\'d data and guardrailed write actions. Free forever.',
    },
    demo: {
      feature: 'Amazon MCP',
      script: [
        { who: 'user', text: 'What can you see now that DragonBot is connected?' },
        { who: 'host', text: 'Listing available tools…', tool: { name: 'dragonbot.list_tools', args: '' } },
        { who: 'host', text: 'Full access, sub-second reads:', stats: [ { v: 'Orders', l: '+ sales & refunds' }, { v: 'Ads', l: 'campaigns & search terms' }, { v: 'Inventory', l: '+ fees & finance' }, { v: 'Listings', l: '+ reviews & messages' } ] },
        { who: 'user', text: 'Pull last week\'s orders by SKU and flag anything with refund rate over 5%.' },
        { who: 'host', text: 'Querying…', tool: { name: 'dragonbot.query', args: 'orders(7d, by="sku") | refund_rate > 5%' } },
        { who: 'host', text: '312 orders across 14 SKUs. One flag: Peeler Set at 7.1% refunds (9 of 126) — reason codes say "handle broke". Worth a supplier QC check before your next PO. Want me to watch this weekly?' },
      ],
    },
  },
  {
    path: '/amazon-repricer',
    template: 'feature',
    metaTitle: 'Amazon Repricing. Run by AI. Free Forever | DragonBot',
    metaDescription: 'AI Amazon repricing with margin guardrails — win the Buy Box without racing to the bottom. Free forever.',
    hero: {
      segments: [{ text: 'Amazon repricing.', color: O }, { text: 'Run by AI.', color: W }, { text: 'Free forever.', color: G }],
      paragraph: 'Repricers charge $25 to $800 a month. DragonBot reprices with margin guardrails — it knows your true break-even after every fee, so it never wins the Buy Box at a loss. Free forever.',
    },
    demo: {
      feature: 'Amazon repricing',
      script: [
        { who: 'user', text: 'Reprice my catalog to win the Buy Box — but never below 15% margin.' },
        { who: 'host', text: 'Setting guardrails from your true unit economics…', tool: { name: 'dragonbot.run_skill', args: 'repricer(min_margin=15%)' } },
        { who: 'host', text: 'Configured:', stats: [ { v: '84', l: 'SKUs monitored' }, { v: '15%', l: 'margin floor (after ALL fees)' }, { v: '12', l: 'price moves proposed' }, { v: '3', l: 'held — floor would break' } ] },
        { who: 'user', text: 'What did you change today?' },
        { who: 'host', text: 'Three moves: Garlic Press $26.99→$25.49 (competitor restocked, Buy Box recovered), Peeler Set $18.99→$19.49 (no competition, margin up), Cutting Board held — the only path to the Buy Box was below your floor. Every move is in the audit trail.' },
      ],
    },
  },
  {
    path: '/amazon-review-automation',
    template: 'feature',
    metaTitle: 'Amazon Review Automation — Every Order, Every Account. Free Forever | DragonBot',
    metaDescription: 'Automate compliant Amazon review requests across all your accounts, with a summary in your inbox. Free forever.',
    hero: {
      segments: [{ text: 'Amazon review automation.', color: O }, { text: 'Every order. Every account.', color: W }, { text: 'Free forever.', color: G }],
      paragraph: 'DragonBot fires Amazon\'s official Request-a-Review on every eligible order across all your accounts, and reports back on a schedule. 100% TOS-compliant. Free forever.',
    },
    demo: {
      feature: 'review automation',
      script: [
        { who: 'user', text: 'Send review requests for all eligible orders across all my accounts, and email me a weekly summary.' },
        { who: 'host', text: 'Setting it up…', tool: { name: 'dragonbot.run_skill', args: 'review_automation(accounts="all", summary="weekly email")' } },
        { who: 'host', text: 'Live across your whole surface:', stats: [ { v: '3', l: 'accounts connected' }, { v: '412', l: 'eligible orders this week' }, { v: 'Day 8', l: 'optimal request timing' }, { v: 'Mondays', l: 'summary → your inbox' } ] },
        { who: 'user', text: 'Skip any order with an open complaint or return.' },
        { who: 'host', text: 'Already the default — orders with open buyer messages, returns, or refunds are excluded automatically. First summary lands Monday: requests sent, reviews received, and rating movement per account.' },
      ],
    },
  },
  {
    path: '/amazon-reimbursement',
    template: 'feature',
    metaTitle: 'Amazon FBA Reimbursements — Keep 100%. Free Forever | DragonBot',
    metaDescription: 'Find money Amazon owes you — lost inventory, damaged units, fee overcharges — and keep 100%. No commission. Free forever.',
    hero: {
      segments: [{ text: 'Amazon FBA reimbursements.', color: O }, { text: 'Keep 100% of your money.', color: W }, { text: 'Free forever.', color: G }],
      paragraph: 'Reimbursement services take 10–25% of every dollar they recover. DragonBot scans your own data for lost inventory, damaged units, and fee overcharges — you file with prepared evidence and keep everything.',
    },
    demo: {
      feature: 'Amazon reimbursements',
      script: [
        { who: 'user', text: 'Is Amazon holding money they owe me?' },
        { who: 'host', text: 'Scanning inventory ledger, fees, and shipments…', tool: { name: 'dragonbot.run_skill', args: 'reimbursement_scan(window="18mo")' } },
        { who: 'host', text: 'Yes — here\'s what I found:', stats: [ { v: '23 units', l: 'lost in FC, never reimbursed' }, { v: '11 units', l: 'damaged, no credit' }, { v: '$1,284', l: 'fee overcharges' }, { v: '$3,912', l: 'total recoverable' } ] },
        { who: 'user', text: 'Prepare the claims.' },
        { who: 'host', text: 'Preparing evidence…', tool: { name: 'dragonbot.run_skill', args: 'prepare_claims(all)' } },
        { who: 'host', text: 'Done — 9 claim packets with transaction IDs, shipment reconciliation, and fee documentation, ready to submit. A commission service would keep $978 of this. You keep all $3,912.' },
      ],
    },
  },
  {
    path: '/amazon-product-research',
    template: 'feature',
    metaTitle: 'Amazon Product Research. Real Data. Free Forever | DragonBot',
    metaDescription: 'Research products and niches with AI grounded in real Amazon data — no $129/mo research suite. Free forever.',
    hero: {
      segments: [{ text: 'Amazon product research.', color: O }, { text: 'Without the $129/mo suite.', color: W }, { text: 'Free forever.', color: G }],
      paragraph: 'DragonBot researches niches and products in conversation — market structure, competition, differentiation gaps — grounded in real Amazon data. Free forever.',
    },
    demo: {
      feature: 'product research',
      script: [
        { who: 'user', text: 'Is the "silicone baking mat" niche winnable at my budget?' },
        { who: 'host', text: 'Mapping the niche…', tool: { name: 'dragonbot.run_skill', args: 'niche_scan("silicone baking mat")' } },
        { who: 'host', text: 'The honest picture:', stats: [ { v: '$18–24', l: 'winning price band' }, { v: '4,200+', l: 'reviews on top 3 (moat)' }, { v: '2', l: 'top-10 spots under 500 reviews' }, { v: '$12k+', l: 'est. launch ad budget' } ] },
        { who: 'user', text: 'Where\'s the differentiation gap?' },
        { who: 'host', text: 'Review mining shows two: mats that stay flat in storage (top complaint, 340 mentions) and true half-sheet sizing for EU ovens. Nobody in the top 10 owns either. That\'s your wedge if you go in.' },
      ],
    },
  },

  /* ═══════════════════ C1 clusters + C2 — ALTERNATIVE PAGES ═══════════════════ */
  {
    path: '/vs/ai-operators',
    template: 'alt',
    metaTitle: 'The Free AI Amazon Operator — DragonBot vs Paid AI Agents (2026)',
    metaDescription: 'Every AI operator for Amazon sellers charges $49–$698/mo. DragonBot does the job free forever. See the comparison.',
    eyebrow: 'AI operators, compared',
    hero: { segments: [{ text: 'Every AI Amazon operator charges.', color: W }, { text: 'Except this one.', color: O }, { text: 'Free forever.', color: G }] },
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
    template: 'alt',
    metaTitle: 'Free Amazon MCP Server vs Paid MCP Tools — DragonBot (2026)',
    metaDescription: 'Paid Amazon MCPs charge $39–$397/mo to connect your seller account to Claude. DragonBot\'s Amazon MCP is free forever.',
    eyebrow: 'Amazon MCPs, compared',
    hero: { segments: [{ text: 'Paid Amazon MCPs charge rent.', color: W }, { text: 'Ours doesn\'t.', color: O }, { text: 'Free forever.', color: G }] },
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
  {
    path: '/research-tools',
    template: 'alt',
    metaTitle: 'Free Alternative to Amazon Research Tools — Free Forever | DragonBot',
    metaDescription: 'Keyword and product research tools charge $49–$279/mo. DragonBot answers the same questions from real Amazon data — free forever.',
    eyebrow: 'Free research-tool alternative',
    hero: { segments: [{ text: 'Research tools charge $50–$279/mo.', color: W }, { text: 'Get answers instead.', color: O }, { text: 'Free forever.', color: G }] },
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
    template: 'alt',
    metaTitle: 'Free Alternative to Amazon Analytics Tools — Free Forever | DragonBot',
    metaDescription: 'Profit dashboards charge $20–$100/mo. DragonBot tracks your real profit — every fee, ad, and cost — free forever.',
    eyebrow: 'Free analytics alternative',
    hero: { segments: [{ text: 'Profit dashboards charge monthly.', color: W }, { text: 'Yours shouldn\'t.', color: O }, { text: 'Free forever.', color: G }] },
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
    template: 'alt',
    metaTitle: 'Free Alternative to Amazon PPC Tools — Free Forever | DragonBot',
    metaDescription: 'Amazon PPC software charges $78–$799/mo. DragonBot audits and manages your ads with AI — free forever.',
    eyebrow: 'Free PPC-tool alternative',
    hero: { segments: [{ text: 'PPC tools cost $78–$799/mo.', color: W }, { text: 'This one doesn\'t.', color: O }, { text: 'Free forever.', color: G }] },
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
    template: 'alt',
    metaTitle: 'Free Amazon Repricer Alternative — Free Forever | DragonBot',
    metaDescription: 'Repricers charge $25–$800/mo. DragonBot reprices with margin guardrails — free forever.',
    eyebrow: 'Free repricer alternative',
    hero: { segments: [{ text: 'Repricers charge up to $800/mo.', color: W }, { text: 'Ours doesn\'t.', color: O }, { text: 'Free forever.', color: G }] },
    subhead: 'Rule-based repricers race you to the bottom and bill you monthly for it. DragonBot reprices with margin guardrails — it knows your true break-even after every fee, so it never wins the Buy Box at a loss. Free forever.',
    bullets: [
      { t: 'Margin-guarded repricing', d: 'Set a margin floor once — DragonBot never prices below your true break-even.' },
      { t: 'Buy Box strategy', d: 'Win when it\'s profitable, hold when it isn\'t — and raise prices when competition disappears.' },
      { t: 'Price-impact analysis', d: 'See exactly how every price change moved units, margin, and profit.' },
      { t: 'Full audit trail', d: 'Every price move logged with the reasoning behind it.' },
      { t: 'The rest of the account too', d: 'PPC, inventory, listings, messages — one AI, same free plan.' },
    ],
    anchor: {
      title: 'What repricers charge',
      items: [
        { label: 'Budget repricers', price: '$25–$100/mo' },
        { label: 'AI repricers', price: '$250–$800/mo' },
        { label: 'Enterprise repricing', price: '$1,000+/mo' },
      ],
      usNote: 'DragonBot: free forever.',
    },
    faq: [
      { q: 'How is this different from Amazon\'s free Automate Pricing?', a: 'Amazon\'s native tool follows simple rules with no idea what you actually keep per unit. DragonBot reprices against your true economics — every fee, ad cost, and your COGS — and explains every move it makes.' },
      STD_FAQ_FREE, STD_FAQ_SAFE,
    ],
  },
  {
    path: '/inventory',
    template: 'alt',
    metaTitle: 'Free Alternative to Amazon Inventory Tools — Free Forever | DragonBot',
    metaDescription: 'Restock and forecasting tools charge $97–$399/mo. DragonBot forecasts demand and flags restocks with AI — free forever.',
    eyebrow: 'Free inventory-tool alternative',
    hero: { segments: [{ text: 'Restock tools charge $97+/mo.', color: W }, { text: 'Never stock out.', color: O }, { text: 'Free forever.', color: G }] },
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
    template: 'alt',
    metaTitle: 'Free Alternative to Amazon Listing Tools — Free Forever | DragonBot',
    metaDescription: 'Listing optimization tools charge $29–$165/mo. DragonBot optimizes titles, bullets, and keywords from your real search data — free forever.',
    eyebrow: 'Free listing-tool alternative',
    hero: { segments: [{ text: 'Listing tools charge monthly.', color: W }, { text: 'Optimize yours instead.', color: O }, { text: 'Free forever.', color: G }] },
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
    template: 'alt',
    metaTitle: 'Free Alternative to Amazon Feedback & Review Tools — Free Forever | DragonBot',
    metaDescription: 'Review-request tools charge $10–$100/mo. DragonBot automates compliant review requests and buyer messages — free forever.',
    eyebrow: 'Free feedback-tool alternative',
    hero: { segments: [{ text: 'Review tools charge monthly.', color: W }, { text: 'Automate reviews instead.', color: O }, { text: 'Free forever.', color: G }] },
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
    template: 'alt',
    metaTitle: 'Free FBA Reimbursement Alternative — Keep 100%. Free Forever | DragonBot',
    metaDescription: 'Reimbursement services take 10–25% of your recovery. DragonBot finds what Amazon owes you and you keep everything. Free forever.',
    eyebrow: 'Free reimbursement alternative',
    hero: { segments: [{ text: 'They take 25% of your money.', color: W }, { text: 'Keep 100% instead.', color: O }, { text: 'Free forever.', color: G }] },
    subhead: 'Reimbursement services charge 10–25% commission on money Amazon already owes you. DragonBot scans your own data — lost inventory, damaged units, fee overcharges — and prepares the claims. You file, you keep every dollar.',
    bullets: [
      { t: 'Full-account scan', d: 'Lost inventory, damaged units, and fee overcharges surfaced from your inventory ledger and fee data.' },
      { t: 'Keep 100%', d: 'No commission. The recovery is yours — you file with the evidence DragonBot prepares.' },
      { t: 'Claim-ready evidence', d: 'Transaction IDs, shipment reconciliation, and fee documentation packaged per claim.' },
      { t: 'Shipment reconciliation', d: 'Sent vs received quantities compared automatically — discrepancies flagged.' },
      { t: 'The rest of the account too', d: 'PPC, inventory, listings, messages — one AI, same free plan.' },
    ],
    anchor: {
      title: 'What reimbursement services take',
      items: [
        { label: 'Typical commission', price: '25% of recovery' },
        { label: 'Discounted tiers', price: '10–18%' },
        { label: 'On $100k recovered', price: 'they keep $25,000' },
      ],
      usNote: 'DragonBot: free — you keep 100%.',
    },
    faq: [
      { q: 'Why free when everyone charges commission?', a: 'Because it\'s your money. Detection from your own data is exactly what an AI operator should do as part of the job — and Amazon\'s 2025 policy changes squeezed the commission model anyway.' },
      STD_FAQ_FREE, STD_FAQ_SAFE,
    ],
  },
  {
    path: '/discontinued',
    template: 'alt',
    metaTitle: 'Your Amazon Tool Shut Down? Free Replacement, Free Forever | DragonBot',
    metaDescription: 'Viral Launch, Sellics, Fetcher, and more have shut down or been absorbed. Replace your discontinued Amazon tool with one free AI.',
    eyebrow: 'For sellers whose tool died',
    hero: { segments: [{ text: 'Your tool shut down.', color: W }, { text: 'Your replacement is here.', color: O }, { text: 'Free forever.', color: G }] },
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
];

export function getLpPage(path) {
  return lpPages.find(p => p.path === path) || null;
}
