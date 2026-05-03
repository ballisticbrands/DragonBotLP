/* ═══════════════════════════════════════════════════════════════
   Competitor comparison page data.
   Each entry powers a /vs/:slug page (e.g. /vs/helium-10).
   ═══════════════════════════════════════════════════════════════ */

export const competitors = {
  'helium-10': {
    name: 'Helium 10',
    category: 'amazon',
    logo: '/logo-helium10.png',
    metaTitle: 'DragonBot vs Helium 10: AI Amazon Operator vs Tools Suite (2026)',
    metaDescription:
      'Honest comparison of DragonBot and Helium 10. Helium 10 gives you data. DragonBot does the work — keyword research, PPC, customer support, all in Slack.',
    eyebrow: 'DragonBot vs Helium 10',
    h1: { plain: 'Helium 10 gives you data.', accent: 'DragonBot does the work.' },
    subhead:
      'Helium 10 is a tools suite. DragonBot is an AI operator that uses tools — and finishes the job. Here is an honest, side-by-side breakdown so you can pick the right one.',
    pricing: { monthly: '$279/mo', plan: 'Diamond plan' },
    tldr: {
      them: 'Choose Helium 10 if you want a polished dashboard with deep keyword and competitor data — and you have time to dig through it yourself.',
      us: 'Choose DragonBot if you want the work done for you — keyword research, PPC, listings, customer support — delivered as finished output, in Slack.',
    },
    comparisonTable: [
      { feature: 'Keyword research', them: 'yes', us: 'yes' },
      { feature: 'Product research', them: 'yes', us: 'yes' },
      { feature: 'Listing optimization tools', them: 'yes', us: 'yes' },
      { feature: 'Does the work for you (not just data)', them: 'no', us: 'yes' },
      { feature: 'PPC management (auto-negate, bid adjust)', them: 'partial', us: 'yes' },
      { feature: 'Customer support automation', them: 'no', us: 'yes' },
      { feature: 'Process refunds', them: 'no', us: 'yes' },
      { feature: 'Daily/weekly automated reports', them: 'partial', us: 'yes' },
      { feature: 'Lives in Slack', them: 'no', us: 'yes' },
      { feature: 'Connects to non-Amazon tools (Notion, Gmail, etc.)', them: 'no', us: 'yes' },
      { feature: 'Custom skills for your business', them: 'no', us: 'yes' },
      { feature: 'Full audit trail of every action', them: 'partial', us: 'yes' },
      { feature: 'Amazon SP-API compliant', them: 'yes', us: 'yes' },
      { feature: 'Starting price', them: '$279/mo', us: { main: '$50/mo', sub: '+ $100 in free credits' } },
    ],
    workflows: [
      {
        task: 'Keyword Research',
        them: [
          { t: 'Open Cerebro, paste competitor ASINs one at a time.', h: true },
          { t: 'Manually filter results by search volume / competition.' },
          { t: 'Export raw keyword lists to CSV.' },
          { t: 'Build sheets yourself to organize, dedupe, find roots.', h: true },
        ],
        us: [
          { t: 'Tell DragonBot the competitor ASINs.', h: true },
          { t: 'It pulls all keywords automatically.' },
          { t: 'Filters, organizes, identifies roots and negatives.' },
          { t: 'Delivers a finished Google Sheet.', h: true },
        ],
      },
      {
        task: 'PPC Management',
        them: [
          { t: 'Use Adtomic dashboards to view performance.', h: true },
          { t: 'Manually identify wasted spend in search term reports.' },
          { t: 'Manually pause keywords, adjust bids.', h: true },
          { t: 'Repeat weekly. Forever.' },
        ],
        us: [
          { t: 'DragonBot audits campaigns on a schedule.', h: true },
          { t: 'Surfaces bleeding keywords, suggests negations.' },
          { t: 'Pauses underperformers and rebalances bids.' },
          { t: 'Reports back in Slack with what changed and why.', h: true },
        ],
      },
      {
        task: 'Product Research',
        them: [
          { t: 'Use Black Box to filter by criteria.', h: true },
          { t: 'Manually browse hundreds of products.' },
          { t: 'Export data, build pivot tables.' },
          { t: 'Manually analyze gaps and opportunities.', h: true },
        ],
        us: [
          { t: 'Describe the niche or category to DragonBot.', h: true },
          { t: 'It crawls competitors, pulls sales/review/keyword data.' },
          { t: 'Builds a finished competitive analysis.' },
          { t: 'Highlights the actual gap to exploit.', h: true },
        ],
      },
      {
        task: 'Customer Support',
        them: [
          { t: 'Helium 10 does not handle this.', h: true },
          { t: 'You log into Seller Central.' },
          { t: 'Manually read and reply to each buyer message.' },
          { t: 'Manually issue refunds.', h: true },
        ],
        us: [
          { t: 'DragonBot reads incoming buyer messages.', h: true },
          { t: 'Drafts a reply based on your policies (from Notion).' },
          { t: 'Asks for approval, then sends and processes refund.' },
          { t: 'Logs every action with full audit trail.', h: true },
        ],
      },
    ],
    themWins: [
      {
        title: 'More polished dashboard for power users',
        desc:
          'Helium 10 has years of UI refinement. If you live in dashboards and want to slice keyword data 10 ways, their interface is hard to beat.',
      },
      {
        title: 'Deep ad-hoc keyword exploration',
        desc:
          'Cerebro and Magnet are genuinely best-in-class for raw keyword data exploration. If your job is "spend hours digging through keyword data," Helium 10 is built for it.',
      },
      {
        title: 'Established brand and big community',
        desc:
          'Helium 10 has been around for years. If you want courses, YouTube tutorials, and a big seller community already using it, they have all of that.',
      },
    ],
    usWins: [
      {
        title: 'It does the work, not just data',
        desc:
          'Helium 10 gives you reports and dashboards. DragonBot delivers finished outputs — Google Sheets, completed audits, processed refunds, posted replies.',
      },
      {
        title: 'Lives in Slack',
        desc:
          'Your team is already in Slack. DragonBot answers there, posts reports there, asks for approvals there. No new dashboard to log into.',
      },
      {
        title: 'Bundles 3,000+ tools',
        desc:
          'Helium 10 connects to Amazon. DragonBot connects to Amazon, Notion, Gmail, Google Sheets, Shopify, your 3PL, and 3,000 more — so it can finish whole workflows.',
      },
      {
        title: 'Customer support, refunds, daily reports',
        desc:
          "Helium 10 doesn't touch these at all. DragonBot triages buyer messages, drafts replies, processes refunds, and sends scheduled reports automatically.",
      },
      {
        title: 'Custom skills for your business',
        desc:
          'Every business is different. DragonBot lets you define custom skills — "audit my listings every Monday," "research 5 new niches a week" — that match your actual workflow.',
      },
      {
        title: 'Cheaper than the H10 + JS + Keepa stack',
        desc:
          'Most serious sellers stack Helium 10 + Jungle Scout + Keepa = $200+/mo. DragonBot bundles equivalent capabilities starting at $50/mo.',
      },
    ],
    pricingComparison: {
      themItems: [
        { label: 'Helium 10 Diamond', price: '$279/mo' },
        { label: 'Helium 10 + Jungle Scout + Keepa stack', price: '$400+/mo' },
        { label: 'Adtomic (PPC add-on)', price: '+$200/mo' },
      ],
      usItem: { label: 'DragonBot', price: '$50/mo', note: '+ $100 in free credits to start' },
      footnote:
        "And Helium 10 doesn't include PPC management automation, customer support, or refunds. DragonBot does.",
    },
    youtubeId: 'o0-_6Vu3Kv4',
    youtubeTitle: 'Why I Stopped Using Helium 10 for Amazon Keyword Research',
    youtubeDuration: '20:45',
    faq: [
      {
        q: 'Can I import my Helium 10 data into DragonBot?',
        a: "Not directly — and you don't need to. DragonBot pulls fresh data from Amazon's official SP-API and from Jungle Scout's API. You can drop Helium 10 entirely without losing access to keyword data, sales estimates, or competitor intel.",
      },
      {
        q: 'Is DragonBot Amazon-compliant like Helium 10?',
        a: 'Yes. DragonBot uses the official Amazon Selling-Partner API (SP-API). No scraping, no gray areas. 100% Amazon Terms of Service compliant.',
      },
      {
        q: "What if I still want Cerebro for ad-hoc keyword exploration?",
        a: "You can absolutely keep using it. Many sellers use both. But for actual workflows — weekly keyword harvesting, PPC negation, scheduled reports — DragonBot replaces the manual Cerebro work entirely.",
      },
      {
        q: 'How do you compare on price?',
        a: "Helium 10 Diamond is $279/mo. DragonBot starts at $50/mo and includes $100 in free credits. No credit card required to try.",
      },
      {
        q: "Does DragonBot replace Adtomic for PPC?",
        a: "Yes — and it goes further. Adtomic gives you a PPC dashboard. DragonBot actively audits your campaigns, pauses bleeding keywords, rebalances bids, and reports the changes back to you in Slack. No clicking around required.",
      },
      {
        q: 'How long does it take to set up?',
        a: 'Minutes. Connect DragonBot to your Slack workspace, link Amazon Seller Central via the official OAuth flow, and start asking questions. DragonBot guides you through onboarding itself.',
      },
    ],
  },

  'jungle-scout': {
    name: 'Jungle Scout',
    category: 'amazon',
    logo: '/logo-junglescout.png',
    metaTitle: 'DragonBot vs Jungle Scout: AI Amazon Operator vs Tools Suite (2026)',
    metaDescription:
      'Honest comparison of DragonBot and Jungle Scout. Jungle Scout finds the products. DragonBot does the work — research, PPC, customer support, all in Slack.',
    eyebrow: 'DragonBot vs Jungle Scout',
    h1: { plain: 'Jungle Scout finds the products.', accent: 'DragonBot runs the business.' },
    subhead:
      'Jungle Scout is one of the best product-research tools on the market. DragonBot is an AI operator that uses tools — including the same data sources Jungle Scout pulls from — and finishes whole workflows. Here is an honest, side-by-side breakdown.',
    pricing: { monthly: '$129/mo', plan: 'Brand Owner plan' },
    tldr: {
      them:
        'Choose Jungle Scout if you want the most established product-database and opportunity-finder UI in the space — and you have time to dig through the data yourself.',
      us:
        'Choose DragonBot if you want the work done for you — product research, keyword work, PPC, customer support — delivered as finished output, in Slack.',
    },
    comparisonTable: [
      { feature: 'Product database / opportunity finder', them: 'yes', us: 'yes' },
      { feature: 'Keyword research', them: 'yes', us: 'yes' },
      { feature: 'Sales estimates', them: 'yes', us: 'yes' },
      { feature: 'Supplier database', them: 'yes', us: 'partial' },
      { feature: 'Does the work for you (not just data)', them: 'no', us: 'yes' },
      { feature: 'PPC management (auto-negate, bid adjust)', them: 'no', us: 'yes' },
      { feature: 'Customer support automation', them: 'no', us: 'yes' },
      { feature: 'Process refunds', them: 'no', us: 'yes' },
      { feature: 'Daily/weekly automated reports', them: 'partial', us: 'yes' },
      { feature: 'Lives in Slack', them: 'no', us: 'yes' },
      { feature: 'Connects to non-Amazon tools (Notion, Gmail, etc.)', them: 'no', us: 'yes' },
      { feature: 'Custom skills for your business', them: 'no', us: 'yes' },
      { feature: 'Full audit trail of every action', them: 'no', us: 'yes' },
      { feature: 'Amazon SP-API compliant', them: 'yes', us: 'yes' },
      { feature: 'Starting price', them: '$49/mo', us: { main: '$50/mo', sub: '+ $100 in free credits' } },
    ],
    workflows: [
      {
        task: 'Product Research',
        them: [
          { t: 'Open Opportunity Finder, set filters.', h: true },
          { t: 'Manually browse hundreds of niches.' },
          { t: 'Open Product Database for each candidate.' },
          { t: 'Export CSVs and analyze in spreadsheets yourself.', h: true },
        ],
        us: [
          { t: 'Describe the niche or category to DragonBot.', h: true },
          { t: 'It crawls competitors, pulls sales/review/keyword data.' },
          { t: 'Builds a finished competitive analysis.' },
          { t: 'Highlights the actual gap to exploit.', h: true },
        ],
      },
      {
        task: 'Keyword Research',
        them: [
          { t: 'Open Keyword Scout, paste competitor ASIN.', h: true },
          { t: 'Manually filter results.' },
          { t: 'Export keywords to a sheet.' },
          { t: 'Manually find roots, negatives, organize.', h: true },
        ],
        us: [
          { t: 'Tell DragonBot the competitor ASINs.', h: true },
          { t: 'It pulls all keywords automatically.' },
          { t: 'Filters, organizes, identifies roots and negatives.' },
          { t: 'Delivers a finished Google Sheet.', h: true },
        ],
      },
      {
        task: 'PPC Management',
        them: [
          { t: 'Jungle Scout does not manage PPC.', h: true },
          { t: 'You log into Seller Central or use a separate tool.' },
          { t: 'Manually identify wasted spend, pause keywords.' },
          { t: 'Repeat weekly. Forever.', h: true },
        ],
        us: [
          { t: 'DragonBot audits campaigns on a schedule.', h: true },
          { t: 'Surfaces bleeding keywords, suggests negations.' },
          { t: 'Pauses underperformers and rebalances bids.' },
          { t: 'Reports back in Slack with what changed and why.', h: true },
        ],
      },
      {
        task: 'Customer Support',
        them: [
          { t: 'Jungle Scout does not handle this.', h: true },
          { t: 'You log into Seller Central.' },
          { t: 'Manually read and reply to each buyer message.' },
          { t: 'Manually issue refunds.', h: true },
        ],
        us: [
          { t: 'DragonBot reads incoming buyer messages.', h: true },
          { t: 'Drafts a reply based on your policies (from Notion).' },
          { t: 'Asks for approval, then sends and processes refund.' },
          { t: 'Logs every action with full audit trail.', h: true },
        ],
      },
    ],
    themWins: [
      {
        title: 'Best-in-class product database',
        desc:
          'Jungle Scout has been refining its product database since 2015. The Opportunity Finder UI is genuinely excellent for visual browsing and ad-hoc exploration.',
      },
      {
        title: 'Strong supplier database',
        desc:
          "Jungle Scout's Supplier Database is one of its underrated features — it surfaces real supplier data tied to ASINs. If you're doing private label sourcing, this is a real edge.",
      },
      {
        title: 'Established brand and education',
        desc:
          'Jungle Scout has years of free courses, YouTube content, and a huge seller community. If you want a tool with the most beginner-friendly onboarding, they have it.',
      },
    ],
    usWins: [
      {
        title: 'It does the work, not just data',
        desc:
          'Jungle Scout gives you a database. DragonBot delivers finished outputs — Google Sheets, completed audits, processed refunds, posted replies.',
      },
      {
        title: 'Goes far beyond product research',
        desc:
          "Jungle Scout's product research is great. But that's where it stops. DragonBot also handles PPC, listing optimization, customer support, refunds, and weekly reports.",
      },
      {
        title: 'Lives in Slack',
        desc:
          'Your team is already in Slack. DragonBot answers there, posts reports there, asks for approvals there. No new dashboard to log into.',
      },
      {
        title: 'Bundles 3,000+ tools',
        desc:
          'Jungle Scout connects to Amazon. DragonBot connects to Amazon, Notion, Gmail, Google Sheets, Shopify, your 3PL, and 3,000 more — so it can finish whole workflows.',
      },
      {
        title: 'Custom skills for your business',
        desc:
          'Every business is different. DragonBot lets you define custom skills — "audit my listings every Monday," "research 5 new niches a week" — that match your actual workflow.',
      },
      {
        title: 'Cheaper than the Jungle Scout + Helium 10 + Keepa stack',
        desc:
          'Most serious sellers stack Jungle Scout + Helium 10 + Keepa = $300+/mo. DragonBot bundles equivalent capabilities starting at $50/mo.',
      },
    ],
    pricingComparison: {
      themItems: [
        { label: 'Jungle Scout Starter', price: '$49/mo' },
        { label: 'Jungle Scout Brand Owner', price: '$129/mo' },
        { label: 'Jungle Scout + Helium 10 + Keepa stack', price: '$400+/mo' },
      ],
      usItem: { label: 'DragonBot', price: '$50/mo', note: '+ $100 in free credits to start' },
      footnote:
        "And Jungle Scout doesn't include PPC management, customer support, or refunds. DragonBot does.",
    },
    faq: [
      {
        q: 'Can I import my Jungle Scout data into DragonBot?',
        a: "Not directly — and you don't need to. DragonBot pulls fresh data from Amazon's official SP-API and from Jungle Scout's own API. You can drop the Jungle Scout subscription entirely without losing access to keyword data, sales estimates, or competitor intel.",
      },
      {
        q: 'Is DragonBot Amazon-compliant like Jungle Scout?',
        a: 'Yes. DragonBot uses the official Amazon Selling-Partner API (SP-API). No scraping, no gray areas. 100% Amazon Terms of Service compliant.',
      },
      {
        q: 'What if I still want Opportunity Finder for ad-hoc browsing?',
        a: "You can absolutely keep using it. Many sellers use both. But for actual workflows — running niche research on a schedule, harvesting keywords weekly, building competitive analyses — DragonBot replaces the manual Opportunity Finder work entirely.",
      },
      {
        q: 'How do you compare on price?',
        a: "Jungle Scout starts at $49/mo and goes up to $129/mo for the Brand Owner plan. DragonBot starts at $50/mo and includes $100 in free credits. No credit card required to try.",
      },
      {
        q: "Does DragonBot replace Jungle Scout's supplier database?",
        a: "Not exactly — Jungle Scout's Supplier Database is a unique data source. If sourcing is core to your workflow, you may keep Jungle Scout's lowest tier just for that. DragonBot replaces everything else.",
      },
      {
        q: 'How long does it take to set up?',
        a: 'Minutes. Connect DragonBot to your Slack workspace, link Amazon Seller Central via the official OAuth flow, and start asking questions. DragonBot guides you through onboarding itself.',
      },
    ],
  },

  'sellerise': {
    name: 'Sellerise',
    category: 'amazon',
    logo: '/logo-sellerise.png',
    metaTitle: 'DragonBot vs Sellerise: AI Amazon Operator vs AI-Assisted Tools (2026)',
    metaDescription:
      'Honest comparison of DragonBot and Sellerise. Sellerise gives you AI-assisted dashboards. DragonBot is an autonomous AI operator that does the work — in Slack.',
    eyebrow: 'DragonBot vs Sellerise',
    h1: { plain: 'Sellerise has AI features.', accent: 'DragonBot is the AI.' },
    subhead:
      "Sellerise is a strong all-in-one suite with AI assistance bolted onto a traditional dashboard. DragonBot is an autonomous AI operator built around the work itself — and lives in Slack. Here's an honest, side-by-side breakdown.",
    pricing: { monthly: '$80+/mo', plan: 'Pro plan' },
    tldr: {
      them:
        'Choose Sellerise if you want a polished all-in-one dashboard with strong Smart Alerts, profit tracking, and a chatbot-style AI assistant that helps you make decisions.',
      us:
        'Choose DragonBot if you want an AI that actually does the work — research, PPC, customer support, refunds — and reports back in Slack instead of asking you to log into another dashboard.',
    },
    comparisonTable: [
      { feature: 'Listing/account smart alerts', them: 'yes', us: 'yes' },
      { feature: 'Profit dashboard', them: 'yes', us: 'yes' },
      { feature: 'Keyword research', them: 'yes', us: 'yes' },
      { feature: 'Reimbursement tool', them: 'yes', us: 'partial' },
      { feature: 'AI features', them: 'partial', us: 'yes' },
      { feature: 'AI does the work autonomously (not just suggests)', them: 'no', us: 'yes' },
      { feature: 'PPC management (auto-negate, bid adjust)', them: 'partial', us: 'yes' },
      { feature: 'Customer support automation', them: 'partial', us: 'yes' },
      { feature: 'Process refunds with custom policy', them: 'no', us: 'yes' },
      { feature: 'Daily/weekly automated reports', them: 'partial', us: 'yes' },
      { feature: 'Lives in Slack', them: 'no', us: 'yes' },
      { feature: 'Connects to non-Amazon tools (Notion, Gmail, etc.)', them: 'no', us: 'yes' },
      { feature: 'Custom skills for your business', them: 'no', us: 'yes' },
      { feature: 'Full audit trail of every action', them: 'partial', us: 'yes' },
      { feature: 'Amazon SP-API compliant', them: 'yes', us: 'yes' },
      { feature: 'Starting price', them: '$25/mo', us: { main: '$50/mo', sub: '+ $100 in free credits' } },
    ],
    workflows: [
      {
        task: 'Listing Suppression Alert',
        them: [
          { t: 'Sellerise sends you a Smart Alert email/notification.', h: true },
          { t: 'You click through to the dashboard.' },
          { t: 'Manually diagnose the cause (image, content, compliance).' },
          { t: 'Manually fix the issue and request reinstatement.', h: true },
        ],
        us: [
          { t: 'DragonBot detects the suppression in Slack.', h: true },
          { t: 'Diagnoses the cause automatically.' },
          { t: 'Fixes the issue (re-uploads images, edits listing).' },
          { t: 'Submits reinstatement and reports back in Slack.', h: true },
        ],
      },
      {
        task: 'PPC Management',
        them: [
          { t: 'Sellerise PPC tools surface metrics and AI suggestions.', h: true },
          { t: 'You review the suggestions in the dashboard.' },
          { t: 'You manually approve and apply each change.', h: true },
          { t: 'Repeat weekly. Forever.' },
        ],
        us: [
          { t: 'DragonBot audits campaigns on a schedule.', h: true },
          { t: 'Pauses bleeding keywords, rebalances bids autonomously.' },
          { t: 'Asks for approval only on high-stakes changes.' },
          { t: 'Reports back in Slack with what changed and why.', h: true },
        ],
      },
      {
        task: 'Customer Support',
        them: [
          { t: 'Sellerise has Review Requester for review automation.', h: true },
          { t: 'But you still log into Seller Central for buyer messages.' },
          { t: 'Manually read and reply to each buyer message.' },
          { t: 'Manually issue refunds.', h: true },
        ],
        us: [
          { t: 'DragonBot reads incoming buyer messages.', h: true },
          { t: 'Drafts a reply based on your policies (from Notion).' },
          { t: 'Asks for approval, then sends and processes refund.' },
          { t: 'Logs every action with full audit trail.', h: true },
        ],
      },
      {
        task: 'Custom Workflows',
        them: [
          { t: 'Sellerise gives you the features they built.', h: true },
          { t: 'No way to define your own workflows.' },
          { t: 'No way to connect non-Amazon data sources.' },
          { t: 'You adapt to the tool.', h: true },
        ],
        us: [
          { t: "Tell DragonBot what you want — in plain English.", h: true },
          { t: '"Audit my listings every Monday and post results to #ops."' },
          { t: '"Cross-reference reviews with our internal QA in Notion."' },
          { t: 'It builds the workflow and runs it on schedule.', h: true },
        ],
      },
    ],
    themWins: [
      {
        title: 'Excellent Smart Alerts',
        desc:
          "Sellerise's Smart Alerts for listing suppressions, BSR drops, and account health are genuinely best-in-class. The detection is fast and the email/Telegram notifications are clean.",
      },
      {
        title: 'Built-in Reimbursement tool',
        desc:
          "Sellerise's Reimbursement Manager actively finds money Amazon owes you for lost or damaged inventory. It's a real differentiator — a clear ROI win for sellers with FBA volume.",
      },
      {
        title: 'Polished all-in-one dashboard',
        desc:
          'If you prefer one tool with a unified UI for profit tracking, keyword research, and PPC — Sellerise has refined it well over multiple years. Lower price point than Helium 10 too.',
      },
    ],
    usWins: [
      {
        title: 'AI that does the work, not just suggests',
        desc:
          "Sellerise's AI is a chatbot-style assistant that surfaces insights and recommends actions. DragonBot is an autonomous operator that executes — runs audits, pauses keywords, processes refunds, drafts and sends replies.",
      },
      {
        title: 'Lives in Slack',
        desc:
          "Sellerise is yet another dashboard. DragonBot lives where your team already works. Alerts, approvals, reports, and conversations all happen in Slack — no context switching.",
      },
      {
        title: 'Bundles 3,000+ tools beyond Amazon',
        desc:
          "Sellerise is Amazon-only. DragonBot connects to Notion, Gmail, Google Sheets, Shopify, your 3PL, and 3,000 more — so it can finish whole cross-tool workflows.",
      },
      {
        title: 'Custom skills for your business',
        desc:
          'Sellerise gives you the features they built. DragonBot lets you define custom skills in plain English — "research 5 new niches a week and put them in this sheet" — that match your actual workflow.',
      },
      {
        title: 'Customer support, refunds, daily reports',
        desc:
          "Sellerise has Review Requester, but doesn't actually handle buyer message responses or process refunds based on your policies. DragonBot does — end to end.",
      },
      {
        title: 'Full audit trail of autonomous actions',
        desc:
          'Because DragonBot acts on your behalf, every action is logged with what, when, and why. You always know what changed and can roll it back.',
      },
    ],
    pricingComparison: {
      themItems: [
        { label: 'Sellerise Starter', price: '$25/mo' },
        { label: 'Sellerise Pro', price: '$80/mo' },
        { label: 'Sellerise Enterprise', price: '$150+/mo' },
      ],
      usItem: { label: 'DragonBot', price: '$50/mo', note: '+ $100 in free credits to start' },
      footnote:
        "Sellerise's pricing is competitive — but you're paying for a dashboard with AI features, not an autonomous AI that does the work.",
    },
    faq: [
      {
        q: "How is DragonBot different from Sellerise's AI features?",
        a: "Sellerise's AI is a chatbot-style assistant that helps you understand your data and recommends actions inside their dashboard. DragonBot is an autonomous operator — it runs the audit, pauses the keyword, processes the refund, sends the report. The difference is suggestions vs. execution.",
      },
      {
        q: 'Does DragonBot replace the Sellerise Reimbursement tool?',
        a: "Not directly — Sellerise's Reimbursement Manager is a specialized tool that's genuinely good at what it does. DragonBot can identify reimbursement opportunities and pursue them, but if you have heavy FBA volume, you may want to keep Sellerise's Reimbursement Manager for that one feature.",
      },
      {
        q: "Will I still get Smart Alerts for listing suppressions?",
        a: "Yes — DragonBot monitors your listings and detects suppressions, BSR drops, and account-health issues the same way. The difference: instead of just alerting you, it diagnoses the cause and starts fixing the problem before pinging you.",
      },
      {
        q: 'Is DragonBot Amazon-compliant like Sellerise?',
        a: 'Yes. DragonBot uses the official Amazon Selling-Partner API (SP-API). No scraping, no gray areas. 100% Amazon Terms of Service compliant.',
      },
      {
        q: 'How do you compare on price?',
        a: 'Sellerise Pro is around $80/mo, with Enterprise tiers higher. DragonBot starts at $50/mo and includes $100 in free credits. No credit card required to try.',
      },
      {
        q: 'How long does it take to set up?',
        a: 'Minutes. Connect DragonBot to your Slack workspace, link Amazon Seller Central via the official OAuth flow, and start asking questions. DragonBot guides you through onboarding itself.',
      },
    ],
  },

  'sellerapp': {
    name: 'SellerApp',
    category: 'amazon',
    logo: '/logo-sellerapp.svg',
    metaTitle: 'DragonBot vs SellerApp: AI Amazon Operator vs Analytics Platform (2026)',
    metaDescription:
      "Honest comparison of DragonBot and SellerApp. SellerApp gives you analytics with AI insights. DragonBot is an autonomous AI operator that does the work — in Slack.",
    eyebrow: 'DragonBot vs SellerApp',
    h1: { plain: 'SellerApp shows you the data.', accent: 'DragonBot acts on it.' },
    subhead:
      "SellerApp is a strong analytics-first platform with AI-powered insights and decent PPC automation. DragonBot is an autonomous AI operator — it lives in Slack, runs whole workflows, and finishes the job. Here's an honest, side-by-side breakdown.",
    pricing: { monthly: '$99/mo', plan: 'Pro plan' },
    tldr: {
      them:
        "Choose SellerApp if you want a polished analytics platform with strong product/keyword research, PPC automation features, and AI-generated insights you can act on yourself.",
      us:
        "Choose DragonBot if you want an AI that actually executes — runs the audits, makes the changes, processes refunds, sends the reports — and reports back in Slack.",
    },
    comparisonTable: [
      { feature: 'Product research', them: 'yes', us: 'yes' },
      { feature: 'Keyword research', them: 'yes', us: 'yes' },
      { feature: 'Listing optimization tools', them: 'yes', us: 'yes' },
      { feature: 'PPC automation (rules-based)', them: 'yes', us: 'yes' },
      { feature: 'AI-driven autonomous workflows', them: 'no', us: 'yes' },
      { feature: 'Customer support automation', them: 'no', us: 'yes' },
      { feature: 'Process refunds with custom policy', them: 'no', us: 'yes' },
      { feature: 'Daily/weekly automated reports', them: 'partial', us: 'yes' },
      { feature: 'Lives in Slack', them: 'no', us: 'yes' },
      { feature: 'Connects to non-Amazon tools (Notion, Gmail, etc.)', them: 'no', us: 'yes' },
      { feature: 'Custom skills for your business', them: 'no', us: 'yes' },
      { feature: 'Full audit trail of every action', them: 'partial', us: 'yes' },
      { feature: 'Amazon SP-API compliant', them: 'yes', us: 'yes' },
      { feature: 'Starting price', them: '$49/mo', us: { main: '$50/mo', sub: '+ $100 in free credits' } },
    ],
    workflows: [
      {
        task: 'PPC Management',
        them: [
          { t: "SellerApp's PPC Automation runs rule-based bid changes.", h: true },
          { t: "You configure rules in their dashboard." },
          { t: "Review reports and adjust rules manually as performance shifts.", h: true },
          { t: "Repeat." },
        ],
        us: [
          { t: 'DragonBot audits campaigns autonomously.', h: true },
          { t: 'Identifies bleeding keywords across changing conditions.' },
          { t: 'Pauses, rebalances, and surfaces new opportunities.' },
          { t: 'Reports back in Slack with reasoning, not just numbers.', h: true },
        ],
      },
      {
        task: 'Product Research',
        them: [
          { t: 'Use SellerApp Product Research to filter by criteria.', h: true },
          { t: 'Browse results in their dashboard.' },
          { t: 'Export data, build pivot tables.' },
          { t: 'Manually analyze gaps and opportunities.', h: true },
        ],
        us: [
          { t: 'Describe the niche or category to DragonBot.', h: true },
          { t: 'It crawls competitors, pulls sales/review/keyword data.' },
          { t: 'Builds a finished competitive analysis.' },
          { t: 'Highlights the actual gap to exploit.', h: true },
        ],
      },
      {
        task: 'Customer Support',
        them: [
          { t: 'SellerApp does not handle buyer support.', h: true },
          { t: 'You log into Seller Central.' },
          { t: 'Manually read and reply to each buyer message.' },
          { t: 'Manually issue refunds.', h: true },
        ],
        us: [
          { t: 'DragonBot reads incoming buyer messages.', h: true },
          { t: 'Drafts a reply based on your policies (from Notion).' },
          { t: 'Asks for approval, then sends and processes refund.' },
          { t: 'Logs every action with full audit trail.', h: true },
        ],
      },
      {
        task: 'Custom Workflows',
        them: [
          { t: "SellerApp gives you the dashboards they built.", h: true },
          { t: 'Limited custom alerting and reporting.' },
          { t: "Can't connect non-Amazon data sources.", h: true },
        ],
        us: [
          { t: 'Tell DragonBot what you want — in plain English.', h: true },
          { t: '"Audit my listings every Monday and post results to #ops."' },
          { t: '"Cross-reference reviews with our QA notes in Notion."' },
          { t: 'It builds the workflow and runs it on schedule.', h: true },
        ],
      },
    ],
    themWins: [
      {
        title: 'Strong rule-based PPC automation',
        desc:
          "SellerApp's PPC Automation is a real product, not a feature checkbox. If your team is comfortable defining rules and monitoring them in a dashboard, it works well.",
      },
      {
        title: 'Comprehensive analytics dashboard',
        desc:
          "SellerApp covers a lot of ground in one UI — product research, listing optimization, PPC, advertising, sales analytics. If you prefer one screen with everything, it's well-executed.",
      },
      {
        title: 'AI insights inside the dashboard',
        desc:
          "SellerApp's AI surfaces opportunities and anomalies in your data clearly. It's a step beyond raw analytics — though it stops short of acting on its own.",
      },
    ],
    usWins: [
      {
        title: 'Autonomous AI vs. AI insights',
        desc:
          "SellerApp's AI shows you opportunities. DragonBot acts on them — pauses keywords, rebalances bids, drafts replies, processes refunds. The difference is insight vs. execution.",
      },
      {
        title: 'Lives in Slack',
        desc:
          'SellerApp is yet another dashboard. DragonBot lives where your team already works. Alerts, approvals, reports, and conversations all happen in Slack — no context switching.',
      },
      {
        title: 'Bundles 3,000+ tools beyond Amazon',
        desc:
          "SellerApp is Amazon-only. DragonBot connects to Notion, Gmail, Google Sheets, Shopify, your 3PL, and 3,000 more — so it can finish whole cross-tool workflows.",
      },
      {
        title: 'Custom skills, not just custom rules',
        desc:
          "SellerApp lets you configure rules. DragonBot lets you describe goals in plain English and builds the workflow itself. It's the difference between writing if/then statements and hiring a smart employee.",
      },
      {
        title: 'Customer support, refunds, daily reports',
        desc:
          "SellerApp doesn't touch buyer messages or refunds. DragonBot handles them end-to-end with full audit trails.",
      },
      {
        title: 'Cheaper than the SellerApp + research tool stack',
        desc:
          'Most sellers using SellerApp also pay for Helium 10 or Jungle Scout for deeper research. DragonBot bundles everything starting at $50/mo.',
      },
    ],
    pricingComparison: {
      themItems: [
        { label: 'SellerApp Starter', price: '$49/mo' },
        { label: 'SellerApp Pro', price: '$99/mo' },
        { label: 'SellerApp Enterprise', price: '$199+/mo' },
      ],
      usItem: { label: 'DragonBot', price: '$50/mo', note: '+ $100 in free credits to start' },
      footnote:
        "And SellerApp doesn't include customer support automation, refund processing, or non-Amazon integrations. DragonBot does.",
    },
    faq: [
      {
        q: "How is DragonBot different from SellerApp's AI features?",
        a: "SellerApp's AI surfaces insights and opportunities inside their dashboard. DragonBot is an autonomous operator — it runs the audit, pauses the keyword, processes the refund, sends the report. The difference is insight vs. execution.",
      },
      {
        q: "Does DragonBot replace SellerApp's PPC automation?",
        a: "Yes — and goes further. SellerApp's PPC automation runs rules you've configured. DragonBot evaluates campaign health holistically and adjusts on the fly, then explains its reasoning in Slack.",
      },
      {
        q: 'Is DragonBot Amazon-compliant like SellerApp?',
        a: 'Yes. DragonBot uses the official Amazon Selling-Partner API (SP-API). No scraping, no gray areas. 100% Amazon Terms of Service compliant.',
      },
      {
        q: 'How do you compare on price?',
        a: 'SellerApp Pro is around $99/mo. DragonBot starts at $50/mo and includes $100 in free credits. No credit card required to try.',
      },
      {
        q: 'How long does it take to set up?',
        a: 'Minutes. Connect DragonBot to your Slack workspace, link Amazon Seller Central via the official OAuth flow, and start asking questions.',
      },
    ],
  },

  'sellerboard': {
    name: 'Sellerboard',
    category: 'amazon',
    logo: '/logo-sellerboard.png',
    metaTitle: 'DragonBot vs Sellerboard: AI Operator vs Profit Analytics (2026)',
    metaDescription:
      "Honest comparison of DragonBot and Sellerboard. Sellerboard tracks your profit. DragonBot runs the business — research, PPC, customer support, all in Slack.",
    eyebrow: 'DragonBot vs Sellerboard',
    h1: { plain: 'Sellerboard tracks the profit.', accent: 'DragonBot runs the business.' },
    subhead:
      "Sellerboard is best-in-class for profit analytics, real-time financial tracking, and FBA reimbursements. DragonBot is an AI operator that does the actual work — research, PPC, customer support — and lives in Slack. They're not the same kind of tool. Here's the honest comparison.",
    pricing: { monthly: '$29/mo', plan: 'Professional plan' },
    tldr: {
      them:
        "Choose Sellerboard if you want the best real-time profit dashboard for Amazon sellers — accurate fees, COGS tracking, and a strong reimbursement tool — at a hard-to-beat price.",
      us:
        "Choose DragonBot if you want an AI that runs your business — research, PPC, customer support, refunds — instead of just reporting on it. (Many sellers use both.)",
    },
    comparisonTable: [
      { feature: 'Real-time profit dashboard', them: 'yes', us: 'partial' },
      { feature: 'COGS / FBA fee tracking', them: 'yes', us: 'partial' },
      { feature: 'Reimbursement tool', them: 'yes', us: 'partial' },
      { feature: 'Inventory management', them: 'yes', us: 'partial' },
      { feature: 'Email automation (review requests)', them: 'yes', us: 'yes' },
      { feature: 'Product research', them: 'no', us: 'yes' },
      { feature: 'Keyword research', them: 'no', us: 'yes' },
      { feature: 'PPC management (auto-negate, bid adjust)', them: 'no', us: 'yes' },
      { feature: 'Customer support automation', them: 'no', us: 'yes' },
      { feature: 'AI-driven autonomous workflows', them: 'no', us: 'yes' },
      { feature: 'Lives in Slack', them: 'no', us: 'yes' },
      { feature: 'Connects to non-Amazon tools', them: 'no', us: 'yes' },
      { feature: 'Custom skills for your business', them: 'no', us: 'yes' },
      { feature: 'Amazon SP-API compliant', them: 'yes', us: 'yes' },
      { feature: 'Starting price', them: '$19/mo', us: { main: '$50/mo', sub: '+ $100 in free credits' } },
    ],
    workflows: [
      {
        task: 'Profit Tracking',
        them: [
          { t: "Sellerboard's profit dashboard is genuinely best-in-class.", h: true },
          { t: 'Real-time updates with FBA fees, COGS, refunds factored in.' },
          { t: 'Granular per-SKU and per-day breakdown.', h: true },
        ],
        us: [
          { t: "DragonBot can pull and summarize profit data on demand.", h: true },
          { t: '"What was our net profit on B0CK5LRQX7 last week?"' },
          { t: 'But Sellerboard\'s dedicated dashboard goes deeper.' },
          { t: 'Many sellers run both side by side.', h: true },
        ],
      },
      {
        task: 'Product Research',
        them: [
          { t: "Sellerboard does not do product research.", h: true },
          { t: 'You use a separate tool (Helium 10, Jungle Scout, etc.).' },
        ],
        us: [
          { t: 'Describe the niche or category to DragonBot.', h: true },
          { t: 'It crawls competitors, pulls sales/review/keyword data.' },
          { t: 'Builds a finished competitive analysis.' },
          { t: 'Highlights the actual gap to exploit.', h: true },
        ],
      },
      {
        task: 'PPC Management',
        them: [
          { t: 'Sellerboard does not manage PPC.', h: true },
          { t: "You use Seller Central or a separate PPC tool." },
        ],
        us: [
          { t: 'DragonBot audits campaigns on a schedule.', h: true },
          { t: 'Surfaces bleeding keywords, suggests negations.' },
          { t: 'Pauses underperformers and rebalances bids.' },
          { t: 'Reports back in Slack with what changed and why.', h: true },
        ],
      },
      {
        task: 'Customer Support',
        them: [
          { t: 'Sellerboard has email autoresponders for review requests.', h: true },
          { t: 'But buyer message replies are still manual.' },
          { t: 'Manually issue refunds.', h: true },
        ],
        us: [
          { t: 'DragonBot reads incoming buyer messages.', h: true },
          { t: 'Drafts a reply based on your policies (from Notion).' },
          { t: 'Asks for approval, then sends and processes refund.' },
          { t: 'Logs every action with full audit trail.', h: true },
        ],
      },
    ],
    themWins: [
      {
        title: 'Best-in-class profit dashboard',
        desc:
          "Sellerboard's real-time profit tracking is genuinely excellent. Accurate fee calculation, granular per-SKU data, refund handling — it's hard to beat at any price.",
      },
      {
        title: 'Aggressive reimbursement recovery',
        desc:
          "Sellerboard's reimbursement tool actively finds money Amazon owes you for lost or damaged FBA inventory. For high-volume FBA sellers, this alone pays for the subscription.",
      },
      {
        title: 'Unbeatable price point',
        desc:
          "Sellerboard starts at $19/mo. For pure profit analytics, you won't find a better deal anywhere.",
      },
    ],
    usWins: [
      {
        title: 'Different kind of tool',
        desc:
          "Sellerboard reports on your business. DragonBot runs the work. Many sellers use both — Sellerboard for the profit dashboard, DragonBot for everything else.",
      },
      {
        title: 'Research, PPC, listings, support',
        desc:
          "Sellerboard does none of these. DragonBot does product research, keyword research, PPC management, listing work, and customer support — end to end.",
      },
      {
        title: 'Lives in Slack',
        desc:
          'Sellerboard is a dashboard you log into. DragonBot lives where your team already works. Alerts, approvals, reports, and conversations all happen in Slack.',
      },
      {
        title: 'Bundles 3,000+ tools beyond Amazon',
        desc:
          "Sellerboard is Amazon-only. DragonBot connects to Notion, Gmail, Google Sheets, Shopify, your 3PL, and 3,000 more — so it can finish whole cross-tool workflows.",
      },
      {
        title: 'Custom skills for your business',
        desc:
          'Sellerboard gives you their dashboards. DragonBot lets you define custom skills in plain English — workflows specific to your business.',
      },
      {
        title: "Can summarize Sellerboard's data on demand",
        desc:
          "Even if you keep using Sellerboard, DragonBot can pull and summarize profit data conversationally — \"what was our net profit on this SKU last week?\" — without logging into another tool.",
      },
    ],
    pricingComparison: {
      themItems: [
        { label: 'Sellerboard Standard', price: '$19/mo' },
        { label: 'Sellerboard Professional', price: '$29/mo' },
        { label: 'Sellerboard Business', price: '$39/mo' },
      ],
      usItem: { label: 'DragonBot', price: '$50/mo', note: '+ $100 in free credits to start' },
      footnote:
        "Sellerboard is genuinely cheaper for what it does — but it doesn't do research, PPC, listings, or customer support. Many sellers run both side by side.",
    },
    faq: [
      {
        q: 'Does DragonBot replace Sellerboard?',
        a: "Not exactly — they solve different problems. Sellerboard is a profit-analytics dashboard. DragonBot is an AI operator that runs work across your business. Many sellers use both: Sellerboard for the profit dashboard, DragonBot for research, PPC, customer support, and reports.",
      },
      {
        q: 'Can DragonBot show me my profit numbers?',
        a: "Yes. DragonBot can pull profit data from Amazon SP-API and summarize it in Slack. But Sellerboard's purpose-built dashboard goes deeper if you need granular per-SKU profit tracking with COGS factored in.",
      },
      {
        q: 'Is the reimbursement tool the same?',
        a: "Sellerboard's reimbursement tool is dedicated and battle-tested. DragonBot can identify reimbursement opportunities and pursue them, but if you have heavy FBA volume, Sellerboard's specialized tool will likely recover more.",
      },
      {
        q: 'Is DragonBot Amazon-compliant like Sellerboard?',
        a: 'Yes. DragonBot uses the official Amazon Selling-Partner API (SP-API). 100% Amazon Terms of Service compliant.',
      },
      {
        q: 'How do you compare on price?',
        a: "Sellerboard starts at $19/mo for profit analytics only. DragonBot starts at $50/mo and includes $100 in free credits — but it does research, PPC, customer support, and more.",
      },
      {
        q: 'How long does it take to set up?',
        a: 'Minutes. Connect DragonBot to your Slack workspace, link Amazon Seller Central via the official OAuth flow, and start asking questions.',
      },
    ],
  },

  'datadive': {
    name: 'DataDive',
    category: 'amazon',
    logo: '/logo-datadive.png',
    metaTitle: 'DragonBot vs DataDive: AI Amazon Operator vs Keyword Research (2026)',
    metaDescription:
      "Honest comparison of DragonBot and DataDive. DataDive has the deepest keyword data. DragonBot is an autonomous AI operator that does the work — in Slack.",
    eyebrow: 'DragonBot vs DataDive',
    h1: { plain: 'DataDive has the keyword data.', accent: 'DragonBot uses it to do the work.' },
    subhead:
      "DataDive is widely regarded as having the most powerful keyword and reverse-ASIN data tools for serious Amazon sellers. DragonBot is an AI operator that takes that kind of data and runs whole workflows — research, PPC, listings, customer support — autonomously, in Slack. Here's the honest breakdown.",
    pricing: { monthly: '$99/mo', plan: 'Pro plan' },
    tldr: {
      them:
        "Choose DataDive if you want the deepest, most flexible keyword research and reverse-ASIN tools on the market — and you have a power user on your team who lives in keyword data.",
      us:
        "Choose DragonBot if you want an AI that takes that kind of data and turns it into finished work — keyword research deliverables, PPC changes, listing optimization, customer support — without a power user driving it.",
    },
    comparisonTable: [
      { feature: 'Reverse-ASIN keyword extraction', them: 'yes', us: 'yes' },
      { feature: 'Advanced keyword filters', them: 'yes', us: 'partial' },
      { feature: 'Search frequency rank (SFR)', them: 'yes', us: 'yes' },
      { feature: 'Niche / market analysis', them: 'yes', us: 'yes' },
      { feature: 'Does the work for you (not just data)', them: 'no', us: 'yes' },
      { feature: 'PPC management (auto-negate, bid adjust)', them: 'no', us: 'yes' },
      { feature: 'Customer support automation', them: 'no', us: 'yes' },
      { feature: 'Process refunds', them: 'no', us: 'yes' },
      { feature: 'Listing optimization workflows', them: 'partial', us: 'yes' },
      { feature: 'Daily/weekly automated reports', them: 'no', us: 'yes' },
      { feature: 'Lives in Slack', them: 'no', us: 'yes' },
      { feature: 'Connects to non-Amazon tools', them: 'no', us: 'yes' },
      { feature: 'Custom skills for your business', them: 'no', us: 'yes' },
      { feature: 'Amazon SP-API compliant', them: 'yes', us: 'yes' },
      { feature: 'Starting price', them: '$49/mo', us: { main: '$50/mo', sub: '+ $100 in free credits' } },
    ],
    workflows: [
      {
        task: 'Keyword Research',
        them: [
          { t: "DataDive's reverse-ASIN tool is genuinely powerful.", h: true },
          { t: 'You paste competitor ASINs, configure filters.' },
          { t: 'You analyze the dense data and decide what matters.', h: true },
          { t: 'You build the deliverable yourself.' },
        ],
        us: [
          { t: 'Tell DragonBot the competitor ASINs.', h: true },
          { t: 'It pulls all keywords, applies smart filters.' },
          { t: 'Identifies roots, negatives, opportunities.' },
          { t: 'Delivers a finished Google Sheet ready for PPC.', h: true },
        ],
      },
      {
        task: 'PPC Management',
        them: [
          { t: 'DataDive does not manage PPC.', h: true },
          { t: 'Use the keyword data to manually build campaigns.' },
          { t: 'Manually negate and adjust bids.', h: true },
        ],
        us: [
          { t: 'DragonBot audits campaigns autonomously.', h: true },
          { t: 'Pauses bleeding keywords, rebalances bids.' },
          { t: 'Surfaces new keyword opportunities (using DataDive-style logic).' },
          { t: 'Reports back in Slack with reasoning.', h: true },
        ],
      },
      {
        task: 'Listing Optimization',
        them: [
          { t: "DataDive provides keyword data for listing optimization.", h: true },
          { t: 'You manually craft titles, bullets, backend keywords.' },
          { t: 'You make the changes in Seller Central.', h: true },
        ],
        us: [
          { t: 'DragonBot pulls keyword data the same way.', h: true },
          { t: 'Drafts optimized titles, bullets, backend.' },
          { t: 'Asks for approval, then makes changes via SP-API.' },
          { t: 'Logs every change with full audit trail.', h: true },
        ],
      },
      {
        task: 'Customer Support',
        them: [
          { t: 'DataDive does not handle this.', h: true },
          { t: 'You log into Seller Central.' },
          { t: 'Manually read and reply to each buyer message.' },
          { t: 'Manually issue refunds.', h: true },
        ],
        us: [
          { t: 'DragonBot reads incoming buyer messages.', h: true },
          { t: 'Drafts a reply based on your policies (from Notion).' },
          { t: 'Asks for approval, then sends and processes refund.' },
          { t: 'Logs every action with full audit trail.', h: true },
        ],
      },
    ],
    themWins: [
      {
        title: 'Deepest keyword data on the market',
        desc:
          "DataDive's reverse-ASIN and niche analysis tools are widely considered the most powerful for advanced Amazon sellers. If your team has a power user who lives in keyword data, DataDive gives them the best playground.",
      },
      {
        title: 'Strong educational ecosystem',
        desc:
          "DataDive comes with one of the most active educational communities in the Amazon space — courses, content, and a clear point of view on keyword strategy. If you want a tool that doubles as a learning environment for keyword research, that's a real edge.",
      },
      {
        title: 'Best-in-class for ad-hoc keyword exploration',
        desc:
          "If you want to slice keyword data 20 different ways and find non-obvious opportunities yourself, DataDive's UI is hard to beat.",
      },
    ],
    usWins: [
      {
        title: 'Goes far beyond keyword research',
        desc:
          "DataDive's keyword research is excellent — but that's where it stops. DragonBot also handles PPC, listing optimization, customer support, refunds, and weekly reports.",
      },
      {
        title: "Doesn't require a power user",
        desc:
          "DataDive rewards expertise — you need someone who knows how to filter, group, and interpret. DragonBot delivers finished work without a power user driving it.",
      },
      {
        title: 'Lives in Slack',
        desc:
          'DataDive is a dashboard. DragonBot lives where your team already works. Alerts, approvals, reports, and conversations all happen in Slack.',
      },
      {
        title: 'Bundles 3,000+ tools beyond Amazon',
        desc:
          "DataDive is keyword-research-focused. DragonBot connects to Notion, Gmail, Google Sheets, Shopify, your 3PL, and 3,000 more — so it can finish whole cross-tool workflows.",
      },
      {
        title: 'Autonomous workflows on a schedule',
        desc:
          'Define a custom skill once — "every Monday, harvest keywords from these competitor ASINs and post negatives to my PPC campaigns" — and DragonBot runs it on schedule.',
      },
      {
        title: 'Customer support, refunds, daily reports',
        desc:
          "DataDive doesn't touch any of these. DragonBot handles them end-to-end with full audit trails.",
      },
    ],
    pricingComparison: {
      themItems: [
        { label: 'DataDive Lite', price: '$49/mo' },
        { label: 'DataDive Pro', price: '$99/mo' },
        { label: 'DataDive + Helium 10 stack (typical)', price: '$300+/mo' },
      ],
      usItem: { label: 'DragonBot', price: '$50/mo', note: '+ $100 in free credits to start' },
      footnote:
        "Power users on serious teams sometimes keep DataDive for ad-hoc deep dives and run DragonBot for everything else.",
    },
    faq: [
      {
        q: 'Is DragonBot as deep as DataDive on keyword research?',
        a: "DragonBot pulls the same kinds of data DataDive does (reverse-ASIN keywords, search volume, competition metrics) and turns it into finished deliverables — Google Sheets, PPC negative lists, listing copy. DataDive's UI gives a power user more granular ad-hoc control. DragonBot delivers more finished output with less hands-on work.",
      },
      {
        q: 'Can I use both DataDive and DragonBot?',
        a: "Yes — many serious sellers do. DataDive for ad-hoc deep dives and exploration, DragonBot for scheduled workflows, PPC, customer support, and everything else.",
      },
      {
        q: 'Is DragonBot Amazon-compliant like DataDive?',
        a: 'Yes. DragonBot uses the official Amazon Selling-Partner API (SP-API). 100% Amazon Terms of Service compliant.',
      },
      {
        q: 'How do you compare on price?',
        a: "DataDive Pro is around $99/mo. DragonBot starts at $50/mo and includes $100 in free credits. No credit card required to try.",
      },
      {
        q: 'How long does it take to set up?',
        a: 'Minutes. Connect DragonBot to your Slack workspace, link Amazon Seller Central via the official OAuth flow, and start asking questions.',
      },
    ],
  },

  'threecolts': {
    name: 'Threecolts',
    category: 'amazon',
    logo: '/logo-threecolts.png',
    metaTitle: 'DragonBot vs Threecolts: AI Operator vs Tools Suite (2026)',
    metaDescription:
      "Honest comparison of DragonBot and Threecolts. Threecolts is a stack of acquired tools. DragonBot is one AI operator that does the work — in Slack.",
    eyebrow: 'DragonBot vs Threecolts',
    h1: { plain: 'Threecolts is a stack of tools.', accent: 'DragonBot is the AI that uses them.' },
    subhead:
      "Threecolts has acquired and bundled dozens of Amazon seller tools — FeedbackWhiz, Tactical Arbitrage, Refunds Manager, BetterAMS, and more. DragonBot is one autonomous AI operator that does the work those many tools imply. Here's the honest comparison.",
    pricing: { monthly: '$99-$299+/mo', plan: 'varies by suite' },
    tldr: {
      them:
        "Choose Threecolts if you want best-of-breed specialized tools — a dedicated tool for review automation, another for refunds, another for sourcing, another for ad management — and you have the time to learn and operate each one.",
      us:
        "Choose DragonBot if you want one AI operator that handles all of those workflows in plain English, lives in Slack, and adapts to your custom needs without a separate tool per task.",
    },
    comparisonTable: [
      { feature: 'Review / feedback automation', them: 'yes', us: 'yes' },
      { feature: 'Reimbursement recovery', them: 'yes', us: 'partial' },
      { feature: 'Sourcing / arbitrage tools', them: 'yes', us: 'partial' },
      { feature: 'PPC management', them: 'yes', us: 'yes' },
      { feature: 'Inventory / restock tools', them: 'yes', us: 'partial' },
      { feature: 'Customer support automation', them: 'partial', us: 'yes' },
      { feature: 'AI-driven autonomous workflows', them: 'no', us: 'yes' },
      { feature: 'One unified operator (vs. many tools)', them: 'no', us: 'yes' },
      { feature: 'Lives in Slack', them: 'no', us: 'yes' },
      { feature: 'Connects to non-Amazon tools (Notion, Gmail, etc.)', them: 'partial', us: 'yes' },
      { feature: 'Custom skills for your business', them: 'no', us: 'yes' },
      { feature: 'Single login, single billing', them: 'partial', us: 'yes' },
      { feature: 'Amazon SP-API compliant', them: 'yes', us: 'yes' },
      { feature: 'Starting price (suite)', them: '$99/mo', us: { main: '$50/mo', sub: '+ $100 in free credits' } },
    ],
    workflows: [
      {
        task: 'Customer Support & Refunds',
        them: [
          { t: 'Use FeedbackWhiz for review requests.', h: true },
          { t: 'Use Refunds Manager for reimbursements.' },
          { t: 'Use Onsite Support for buyer messages.' },
          { t: 'Switch between three dashboards. Manually decide what each one needs.', h: true },
        ],
        us: [
          { t: 'DragonBot reads buyer messages, drafts replies.', h: true },
          { t: 'Pursues reimbursements proactively.' },
          { t: 'Triggers review requests on the right cadence.' },
          { t: 'All in Slack. One operator, one conversation.', h: true },
        ],
      },
      {
        task: 'PPC Management',
        them: [
          { t: 'BetterAMS provides PPC management within Threecolts.', h: true },
          { t: 'Configure rules, monitor in their UI.' },
          { t: 'Your team manually pulls insights and adjusts.', h: true },
        ],
        us: [
          { t: 'DragonBot audits campaigns autonomously.', h: true },
          { t: 'Pauses bleeding keywords, rebalances bids.' },
          { t: 'Surfaces new opportunities, explains reasoning.' },
          { t: 'Reports back in Slack.', h: true },
        ],
      },
      {
        task: 'Sourcing / Product Research',
        them: [
          { t: 'Tactical Arbitrage and other Threecolts tools find products.', h: true },
          { t: 'Each has its own UI, filters, exports.' },
          { t: 'Power users get value — newcomers face a learning curve.', h: true },
        ],
        us: [
          { t: 'Describe what you want to research in plain English.', h: true },
          { t: 'DragonBot crawls competitors, pulls data, builds analysis.' },
          { t: "It can use Tactical-Arbitrage-style logic where it makes sense." },
          { t: 'Delivers a finished sheet, not raw data.', h: true },
        ],
      },
      {
        task: 'Custom Workflows',
        them: [
          { t: "Threecolts gives you the features each acquired tool shipped with.", h: true },
          { t: 'Customization within each tool.' },
          { t: "No way to chain tools into custom workflows.", h: true },
        ],
        us: [
          { t: 'Tell DragonBot what you want — in plain English.', h: true },
          { t: '"Every Monday, harvest keywords from these ASINs and post negatives to PPC."' },
          { t: '"Cross-reference reviews with our QA notes in Notion."' },
          { t: 'It builds the workflow and runs it on schedule.', h: true },
        ],
      },
    ],
    themWins: [
      {
        title: 'Best-of-breed in each category',
        desc:
          "Threecolts has acquired tools that were category leaders before being bundled — FeedbackWhiz for reviews, Tactical Arbitrage for sourcing, Refunds Manager for reimbursements. Each was best-in-class before the acquisition.",
      },
      {
        title: 'Specialized depth',
        desc:
          "If your workflow needs deep specialization in one area (e.g., FBA reimbursement recovery, tactical arbitrage sourcing), the dedicated tool from Threecolts likely goes deeper than DragonBot's general-purpose handling.",
      },
      {
        title: 'Single billing across many tools',
        desc:
          "Threecolts offers a unified subscription that bundles tools you'd otherwise license separately. For sellers using 4-5 specialized tools, that's a meaningful savings.",
      },
    ],
    usWins: [
      {
        title: 'One operator, not many tools',
        desc:
          "Threecolts is a stack — you log into different products, learn different UIs, configure different things. DragonBot is one AI operator you talk to in Slack. Less context switching, less training.",
      },
      {
        title: 'AI does the work, not just exposes features',
        desc:
          "Threecolts gives you tools to use. DragonBot is the AI that uses them. One asks you to be the operator; the other IS the operator.",
      },
      {
        title: 'Custom skills, not fixed feature sets',
        desc:
          'Each Threecolts tool ships what it shipped. DragonBot lets you describe custom workflows in plain English — including ones that span multiple "tool" categories.',
      },
      {
        title: 'Lives in Slack',
        desc:
          'Threecolts has many dashboards. DragonBot lives where your team already works. Alerts, approvals, reports, and conversations all happen in Slack.',
      },
      {
        title: 'Connects to YOUR tools, not just Amazon',
        desc:
          "Threecolts is Amazon-centric. DragonBot connects to Notion, Gmail, Google Sheets, Shopify, your 3PL, and 3,000 more — so it can finish whole cross-tool workflows.",
      },
      {
        title: 'Cheaper than running the full Threecolts stack',
        desc:
          'The Threecolts suite typically runs $99-$299+/mo. DragonBot starts at $50/mo with $100 in free credits.',
      },
    ],
    pricingComparison: {
      themItems: [
        { label: 'Threecolts Starter (limited tools)', price: '$99/mo' },
        { label: 'Threecolts full suite', price: '$199-$299+/mo' },
        { label: 'Individual tools (à la carte)', price: 'varies' },
      ],
      usItem: { label: 'DragonBot', price: '$50/mo', note: '+ $100 in free credits to start' },
      footnote:
        "Threecolts can make sense if you specifically need 4-5 of their specialized tools. For everyone else, DragonBot delivers the same workflows with less complexity and lower cost.",
    },
    faq: [
      {
        q: 'Is DragonBot a "tools suite" like Threecolts?',
        a: 'No — and that\'s the point. Threecolts is a portfolio of specialized tools. DragonBot is one AI operator that handles the workflows those tools enable. You talk to DragonBot in Slack instead of switching between FeedbackWhiz, BetterAMS, Refunds Manager, etc.',
      },
      {
        q: 'Does DragonBot replace FeedbackWhiz / Onsite Support / Refunds Manager?',
        a: "For most workflows, yes. DragonBot reads buyer messages, drafts replies, sends review requests, and pursues reimbursements. For high-FBA-volume sellers needing the deepest reimbursement recovery, Refunds Manager's specialized engine may still recover more.",
      },
      {
        q: 'What about Tactical Arbitrage for sourcing?',
        a: "Tactical Arbitrage has years of refinement specifically for arbitrage and online sourcing. If that's a core part of your business, you may keep TA. DragonBot can complement it by automating the analysis and decision steps after sourcing.",
      },
      {
        q: 'Is DragonBot Amazon-compliant like Threecolts tools?',
        a: 'Yes. DragonBot uses the official Amazon Selling-Partner API (SP-API). 100% Amazon Terms of Service compliant.',
      },
      {
        q: 'How do you compare on price?',
        a: 'The Threecolts suite typically runs $99-$299+/mo. DragonBot starts at $50/mo and includes $100 in free credits.',
      },
      {
        q: 'How long does it take to set up?',
        a: 'Minutes. Connect DragonBot to your Slack workspace, link Amazon Seller Central via the official OAuth flow, and start asking questions.',
      },
    ],
  },

  'keepa': {
    name: 'Keepa',
    category: 'amazon',
    logo: '/logo-keepa.png',
    metaTitle: 'DragonBot vs Keepa: AI Amazon Operator vs Price Tracker (2026)',
    metaDescription:
      "Honest comparison of DragonBot and Keepa. Keepa is best-in-class price/sales data. DragonBot uses Keepa-style data to actually run the work — in Slack.",
    eyebrow: 'DragonBot vs Keepa',
    h1: { plain: 'Keepa is the data feed.', accent: 'DragonBot uses it to do the work.' },
    subhead:
      "Keepa is the gold standard for Amazon historical price, sales rank, and product data — used as a data source by virtually every other tool in the space, including DragonBot. They're not really competitors. Here's the honest breakdown so you can pick the right tool (or both).",
    pricing: { monthly: '$19/mo', plan: 'standard subscription' },
    tldr: {
      them:
        "Choose Keepa if you want the most accurate, longest-running historical Amazon data — price history, sales rank, review counts — surfaced through a browser extension and API for power users to consume.",
      us:
        "Choose DragonBot if you want an AI operator that uses Keepa-style data (we pull from Keepa internally) and acts on it — running research, optimizing PPC, handling customer support, all in Slack.",
    },
    comparisonTable: [
      { feature: 'Historical price data', them: 'yes', us: 'yes' },
      { feature: 'Sales rank tracking', them: 'yes', us: 'yes' },
      { feature: 'Browser extension for ad-hoc lookup', them: 'yes', us: 'no' },
      { feature: 'Public API access', them: 'yes', us: 'no' },
      { feature: 'Does the work for you (not just data)', them: 'no', us: 'yes' },
      { feature: 'Product research workflows', them: 'no', us: 'yes' },
      { feature: 'PPC management', them: 'no', us: 'yes' },
      { feature: 'Customer support automation', them: 'no', us: 'yes' },
      { feature: 'Process refunds', them: 'no', us: 'yes' },
      { feature: 'Listing optimization workflows', them: 'no', us: 'yes' },
      { feature: 'Daily/weekly automated reports', them: 'no', us: 'yes' },
      { feature: 'Lives in Slack', them: 'no', us: 'yes' },
      { feature: 'Connects to non-Amazon tools', them: 'no', us: 'yes' },
      { feature: 'Custom skills for your business', them: 'no', us: 'yes' },
      { feature: 'Starting price', them: '$19/mo', us: { main: '$50/mo', sub: '+ $100 in free credits' } },
    ],
    workflows: [
      {
        task: 'Price History Lookup',
        them: [
          { t: "Keepa's browser extension overlays charts on Amazon pages.", h: true },
          { t: 'Best-in-class for ad-hoc product research.' },
          { t: "API access for power users / developers.", h: true },
        ],
        us: [
          { t: '"@DragonBot — what\'s the BSR history for B0CK5LRQX7?"', h: true },
          { t: 'DragonBot pulls Keepa data and summarizes in Slack.' },
          { t: "Useful for conversational lookup — but Keepa's chart UI is more visual.", h: true },
        ],
      },
      {
        task: 'Product Research',
        them: [
          { t: 'Keepa gives you the data feed.', h: true },
          { t: "You combine it with other tools (Helium 10, Jungle Scout) to build a research workflow." },
          { t: 'Manually analyze, decide, document.', h: true },
        ],
        us: [
          { t: 'DragonBot runs the entire research workflow.', h: true },
          { t: 'Pulls Keepa-style data + competitor analysis + keyword research.' },
          { t: 'Builds a finished competitive analysis.' },
          { t: 'Highlights the actual gap to exploit.', h: true },
        ],
      },
      {
        task: 'PPC Management',
        them: [
          { t: 'Keepa does not manage PPC.', h: true },
          { t: "You use Seller Central or a separate PPC tool." },
        ],
        us: [
          { t: 'DragonBot audits campaigns on a schedule.', h: true },
          { t: 'Surfaces bleeding keywords, suggests negations.' },
          { t: 'Pauses underperformers and rebalances bids.' },
          { t: 'Reports back in Slack with what changed and why.', h: true },
        ],
      },
      {
        task: 'Customer Support',
        them: [
          { t: 'Keepa does not handle this.', h: true },
          { t: 'You log into Seller Central.' },
          { t: 'Manually read and reply to each buyer message.' },
          { t: 'Manually issue refunds.', h: true },
        ],
        us: [
          { t: 'DragonBot reads incoming buyer messages.', h: true },
          { t: 'Drafts a reply based on your policies (from Notion).' },
          { t: 'Asks for approval, then sends and processes refund.' },
          { t: 'Logs every action with full audit trail.', h: true },
        ],
      },
    ],
    themWins: [
      {
        title: 'The gold standard for Amazon historical data',
        desc:
          "Keepa has been tracking Amazon prices, BSR, and review counts since 2011. The depth and accuracy of their historical data is genuinely unmatched — most other tools (including DragonBot) pull from Keepa under the hood.",
      },
      {
        title: 'Browser extension is incredibly useful',
        desc:
          "Overlaying Keepa charts directly on Amazon product pages is a brilliant UX. For ad-hoc \"is this product worth selling?\" lookups while you're already browsing Amazon, nothing beats it.",
      },
      {
        title: 'Unbeatable price for raw data',
        desc:
          "Keepa is $19/mo. For what you get — the most reliable Amazon data feed in existence — it's almost absurdly affordable.",
      },
    ],
    usWins: [
      {
        title: "Different kind of tool",
        desc:
          "Keepa shows you data. DragonBot does the work. Many sellers run both — Keepa for ad-hoc browser-overlay lookups, DragonBot for actual workflows like research, PPC, and customer support.",
      },
      {
        title: 'DragonBot uses Keepa-style data internally',
        desc:
          "When DragonBot does product research or pulls historical price/BSR data, it uses Keepa data under the hood (alongside SP-API and other sources). You're not choosing between Keepa data and DragonBot — DragonBot uses it.",
      },
      {
        title: 'Lives in Slack',
        desc:
          'Keepa is a browser extension and API. DragonBot lives where your team already works. Alerts, approvals, reports, and conversations all happen in Slack.',
      },
      {
        title: 'Goes far beyond data',
        desc:
          "Keepa is data only. DragonBot does product research, keyword research, PPC management, listing optimization, customer support, refunds, and weekly reports.",
      },
      {
        title: 'Custom skills for your business',
        desc:
          'Keepa is the same for everyone. DragonBot lets you define custom skills in plain English — workflows specific to your business.',
      },
      {
        title: 'Conversational data access',
        desc:
          'Ask DragonBot in Slack: "What\'s the BSR trend on B0CK5LRQX7 over the last 90 days?" — and get a summary. No browser extension required.',
      },
    ],
    pricingComparison: {
      themItems: [
        { label: 'Keepa subscription', price: '$19/mo' },
        { label: 'Keepa Standard API key', price: 'tokens-based' },
      ],
      usItem: { label: 'DragonBot', price: '$50/mo', note: '+ $100 in free credits to start' },
      footnote:
        "Keepa is genuinely cheaper for what it does — but it's a data feed, not a workflow engine. Many serious sellers keep their Keepa subscription for browser-overlay lookups while running DragonBot for actual workflows.",
    },
    faq: [
      {
        q: 'Does DragonBot replace Keepa?',
        a: "Not exactly — they solve different problems. Keepa is a data feed (with a great browser extension). DragonBot is an AI operator that uses data (including Keepa data) to run workflows. Many sellers keep Keepa for ad-hoc browser-overlay lookups and run DragonBot for actual workflows.",
      },
      {
        q: 'Does DragonBot use Keepa data?',
        a: "Yes. When DragonBot does product research, sales-rank trend analysis, or competitor evaluation, it pulls historical data from Keepa under the hood (alongside SP-API and other sources). You don't have to choose between them.",
      },
      {
        q: 'Can I get the Keepa browser-extension experience with DragonBot?',
        a: "Not in the same form factor. DragonBot's interface is Slack — you ask conversational questions and get summaries. If you want at-a-glance charts overlaid on Amazon product pages while you browse, Keepa's extension is unmatched.",
      },
      {
        q: 'Is DragonBot Amazon-compliant like Keepa?',
        a: 'Yes. DragonBot uses the official Amazon Selling-Partner API (SP-API). 100% Amazon Terms of Service compliant.',
      },
      {
        q: 'How do you compare on price?',
        a: "Keepa is $19/mo for raw data. DragonBot starts at $50/mo with $100 in free credits — but it does the work, not just shows data.",
      },
      {
        q: 'How long does it take to set up?',
        a: 'Minutes. Connect DragonBot to your Slack workspace, link Amazon Seller Central via the official OAuth flow, and start asking questions.',
      },
    ],
  },

  'chatgpt': {
    name: 'ChatGPT',
    category: 'ai',
    logo: '/logo-chatgpt.svg',
    metaTitle: 'DragonBot vs ChatGPT for Amazon Sellers: General AI vs AI Operator (2026)',
    metaDescription:
      "Honest comparison of DragonBot and ChatGPT for Amazon sellers. ChatGPT gives you general AI. DragonBot is AI plugged into Amazon Seller Central — and it takes actions.",
    eyebrow: 'DragonBot vs ChatGPT',
    h1: { plain: "ChatGPT gives you general AI.", accent: 'DragonBot is AI plugged into Amazon.' },
    subhead:
      "ChatGPT is incredible for chatting, drafting, and brainstorming. But for Amazon sellers, it can't see your Seller Central, can't pull your real numbers, can't take actions on your behalf, and doesn't know your business. DragonBot does. Here's the honest breakdown.",
    pricing: { monthly: '$20/mo', plan: 'ChatGPT Plus' },
    tldr: {
      them:
        "Choose ChatGPT if you want a general-purpose AI assistant for writing, brainstorming, and answering questions across any domain — and you're comfortable copy-pasting your Amazon data into a chat each time.",
      us:
        "Choose DragonBot if you want AI that connects to your Amazon Seller Central, pulls real numbers, takes actions, runs scheduled workflows, and lives in Slack with your team.",
    },
    comparisonTable: [
      { feature: 'General-purpose AI chat', them: 'yes', us: 'yes' },
      { feature: 'Connects to Amazon Seller Central', them: 'no', us: 'yes' },
      { feature: 'Pulls real-time Amazon data', them: 'no', us: 'yes' },
      { feature: 'Takes actions on your account', them: 'no', us: 'yes' },
      { feature: 'Runs scheduled workflows', them: 'partial', us: 'yes' },
      { feature: 'Customer support automation (real buyer messages)', them: 'no', us: 'yes' },
      { feature: 'Process refunds', them: 'no', us: 'yes' },
      { feature: 'Multi-step task execution end-to-end', them: 'partial', us: 'yes' },
      { feature: 'Built-in Amazon-specific knowledge & skills', them: 'partial', us: 'yes' },
      { feature: 'Lives in Slack', them: 'partial', us: 'yes' },
      { feature: 'Connects to your business tools (Notion, Gmail, etc.)', them: 'partial', us: 'yes' },
      { feature: 'Custom skills tailored to your workflow', them: 'partial', us: 'yes' },
      { feature: 'Full audit trail of every action', them: 'no', us: 'yes' },
      { feature: 'Amazon TOS-compliant SP-API connection', them: 'no', us: 'yes' },
      { feature: 'Starting price', them: '$20/mo', us: { main: '$50/mo', sub: '+ $100 in free credits' } },
    ],
    workflows: [
      {
        task: 'PPC Analysis',
        them: [
          { t: 'You log into Seller Central, download the PPC report.', h: true },
          { t: 'Paste it (or upload CSV) into ChatGPT.' },
          { t: 'ChatGPT gives you analysis and suggestions.' },
          { t: 'You manually go back to Seller Central and apply each change.', h: true },
        ],
        us: [
          { t: 'DragonBot pulls PPC data directly from Amazon.', h: true },
          { t: 'Audits campaigns, identifies bleeding keywords.' },
          { t: 'Pauses underperformers and rebalances bids autonomously.' },
          { t: 'Reports back in Slack with what changed and why.', h: true },
        ],
      },
      {
        task: 'Customer Support',
        them: [
          { t: 'You see a buyer message in Seller Central.', h: true },
          { t: 'Copy the message into ChatGPT, ask for a draft reply.' },
          { t: 'Copy the reply back into Seller Central, paste, send.' },
          { t: 'Manually issue the refund.', h: true },
        ],
        us: [
          { t: 'DragonBot reads incoming buyer messages automatically.', h: true },
          { t: 'Drafts a reply based on YOUR policies (from Notion).' },
          { t: 'Asks for approval, then sends and processes refund directly.' },
          { t: 'Logs every action with full audit trail.', h: true },
        ],
      },
      {
        task: 'Listing Optimization',
        them: [
          { t: 'Manually pull keyword data and competitor info.', h: true },
          { t: 'Paste it into ChatGPT, ask for a better title and bullets.' },
          { t: 'Copy the result back to Seller Central.', h: true },
          { t: 'Repeat for every listing.' },
        ],
        us: [
          { t: 'DragonBot pulls keyword data and competitor analysis.', h: true },
          { t: 'Drafts optimized title, bullets, backend keywords.' },
          { t: 'Asks for approval, then makes changes via SP-API.' },
          { t: 'Logs every change with full audit trail.', h: true },
        ],
      },
      {
        task: 'Scheduled Reports',
        them: [
          { t: 'ChatGPT does not run on a schedule.', h: true },
          { t: 'You manually export reports each week.' },
          { t: 'Upload to ChatGPT, ask for analysis.' },
          { t: "Copy the response into your team's tools.", h: true },
        ],
        us: [
          { t: '"Send me a weekly sales report every Monday."', h: true },
          { t: 'DragonBot confirms and runs it on schedule.' },
          { t: 'Pulls fresh data, builds the report, posts in Slack.' },
          { t: 'No copy-paste, no manual exports, no missed weeks.', h: true },
        ],
      },
    ],
    themWins: [
      {
        title: 'Best general-purpose AI assistant',
        desc:
          "ChatGPT is genuinely the most polished general-purpose AI on the market. For writing, brainstorming, summarizing, and answering questions across any domain, it's hard to beat.",
      },
      {
        title: 'Massive ecosystem and Custom GPTs',
        desc:
          "OpenAI's ecosystem — Custom GPTs, plugins, the GPT Store — is huge. If your needs span far beyond Amazon (legal research, code, science, design), ChatGPT shines as a generalist.",
      },
      {
        title: 'Cheap and easy to start',
        desc:
          'ChatGPT Plus is $20/mo. Even the free tier is genuinely useful. For one-off tasks where you have time to copy-paste data in and out, the price-to-power ratio is excellent.',
      },
    ],
    usWins: [
      {
        title: 'Connected to your Amazon account',
        desc:
          "ChatGPT can't see your Seller Central. DragonBot connects via the official Amazon SP-API and pulls live data — sales, ads, inventory, buyer messages — without you copy-pasting anything.",
      },
      {
        title: 'Takes actions, not just suggestions',
        desc:
          "ChatGPT suggests what you should do. DragonBot does it — pauses keywords, sends replies, processes refunds, edits listings — with your approval and a full audit trail.",
      },
      {
        title: 'Runs on schedule, autonomously',
        desc:
          '"Audit my listings every Monday." "Send me a weekly PPC report." DragonBot remembers, runs, and reports back. ChatGPT requires you to start every conversation from scratch.',
      },
      {
        title: 'Lives in Slack with your team',
        desc:
          "ChatGPT is a separate website you visit alone. DragonBot lives in your team's Slack workspace — anyone can mention @DragonBot, see the responses, and benefit from shared context.",
      },
      {
        title: 'Knows Amazon-specific best practices',
        desc:
          "DragonBot is built around Amazon workflows — SP-API, PPC structure, listing requirements, FBA fees, buyer messages, A+ content. ChatGPT knows about Amazon, but it doesn't know YOUR Amazon.",
      },
      {
        title: 'Connects to YOUR tools',
        desc:
          'DragonBot integrates with Notion (for your policies), Gmail (for emails), Google Sheets (for reports), Shopify, your 3PL, and 3,000 more — so workflows actually finish.',
      },
    ],
    pricingComparison: {
      themItems: [
        { label: 'ChatGPT Free', price: '$0' },
        { label: 'ChatGPT Plus', price: '$20/mo' },
        { label: 'ChatGPT Team', price: '$25/user/mo' },
        { label: 'ChatGPT Pro', price: '$200/mo' },
      ],
      usItem: { label: 'DragonBot', price: '$50/mo', note: '+ $100 in free credits to start' },
      footnote:
        "ChatGPT is cheaper because it's a chat interface — you do the work. DragonBot costs a bit more because it does the work for you, including all the Amazon-specific integrations and infrastructure.",
    },
    faq: [
      {
        q: "Why not just use ChatGPT to manage my Amazon business?",
        a: "ChatGPT is excellent for one-off conversations — but it can't see your Seller Central, can't pull real numbers, can't take actions, and forgets everything between sessions. For Amazon work specifically, you'd be copy-pasting data in and out all day. DragonBot is wired into Amazon and your tools so the work actually gets done.",
      },
      {
        q: "Can't I just build a Custom GPT for Amazon?",
        a: "You can wire up Custom GPTs with Actions, but you'd be building from scratch — Seller Central OAuth, SP-API, PPC structure, Slack integration, scheduling, audit trails. DragonBot is the finished product: an Amazon-specialized AI operator that already does all of this.",
      },
      {
        q: 'Is DragonBot as smart as ChatGPT?',
        a: "DragonBot uses frontier AI for its reasoning. The intelligence comes from the same generation of models powering today's best assistants — but it's been specifically configured and connected to Amazon-specific tools and data sources. For Amazon work, that focus produces better results.",
      },
      {
        q: 'How do you compare on price?',
        a: 'ChatGPT Plus is $20/mo. DragonBot starts at $50/mo and includes $100 in free credits. The price difference reflects what each does: ChatGPT chats, DragonBot operates.',
      },
      {
        q: 'How long does it take to set up DragonBot?',
        a: 'Minutes. Connect DragonBot to your Slack workspace, link Amazon Seller Central via the official OAuth flow, and start asking questions.',
      },
      {
        q: 'Can I use both ChatGPT and DragonBot?',
        a: "Yes — many people do. ChatGPT for general chat, writing, brainstorming. DragonBot for Amazon work that actually needs to get done.",
      },
    ],
  },

  'claude': {
    name: 'Claude',
    category: 'ai',
    logo: '/logo-claude.png',
    metaTitle: 'DragonBot vs Claude for Amazon Sellers: General AI vs AI Operator (2026)',
    metaDescription:
      "Honest comparison of DragonBot and Claude for Amazon sellers. Claude is a brilliant general AI. DragonBot is AI plugged into Amazon Seller Central — and it takes actions.",
    eyebrow: 'DragonBot vs Claude',
    h1: { plain: 'Claude is brilliant at thinking.', accent: 'DragonBot is AI plugged into Amazon.' },
    subhead:
      "Claude is excellent for analysis, writing, and reasoning. But for Amazon sellers, Claude can't see your Seller Central, can't pull your real numbers, and can't take actions on your behalf. DragonBot is an autonomous AI operator wired into Amazon, your tools, and your workflows. Here's the honest breakdown.",
    pricing: { monthly: '$20/mo', plan: 'Claude Pro' },
    tldr: {
      them:
        "Choose Claude if you want a general-purpose AI assistant with best-in-class reasoning, long context windows, and excellent writing — and you're comfortable copy-pasting your Amazon data into chat for analysis.",
      us:
        "Choose DragonBot if you want a frontier-AI operator specifically wired into Amazon Seller Central, your tools, and Slack — running real workflows and taking real actions.",
    },
    comparisonTable: [
      { feature: 'General-purpose AI chat', them: 'yes', us: 'yes' },
      { feature: 'Long context windows', them: 'yes', us: 'yes' },
      { feature: 'Connects to Amazon Seller Central', them: 'no', us: 'yes' },
      { feature: 'Pulls real-time Amazon data', them: 'no', us: 'yes' },
      { feature: 'Takes actions on your account', them: 'partial', us: 'yes' },
      { feature: 'Runs scheduled workflows', them: 'no', us: 'yes' },
      { feature: 'Customer support automation (real buyer messages)', them: 'no', us: 'yes' },
      { feature: 'Process refunds', them: 'no', us: 'yes' },
      { feature: 'Built-in Amazon-specific knowledge & skills', them: 'partial', us: 'yes' },
      { feature: 'Lives in Slack', them: 'partial', us: 'yes' },
      { feature: 'Connects to your business tools (Notion, Gmail, etc.)', them: 'partial', us: 'yes' },
      { feature: 'Custom skills tailored to your workflow', them: 'partial', us: 'yes' },
      { feature: 'Full audit trail of every action', them: 'no', us: 'yes' },
      { feature: 'Amazon TOS-compliant SP-API connection', them: 'no', us: 'yes' },
      { feature: 'Starting price', them: '$20/mo', us: { main: '$50/mo', sub: '+ $100 in free credits' } },
    ],
    workflows: [
      {
        task: 'PPC Analysis',
        them: [
          { t: 'You log into Seller Central, download the PPC report.', h: true },
          { t: 'Paste it (or upload CSV) into Claude.' },
          { t: "Claude's analysis is genuinely excellent — clear, nuanced, well-reasoned." },
          { t: 'You manually go back to Seller Central and apply each change.', h: true },
        ],
        us: [
          { t: 'DragonBot pulls PPC data directly from Amazon.', h: true },
          { t: 'Audits campaigns, identifies bleeding keywords.' },
          { t: 'Pauses underperformers and rebalances bids autonomously.' },
          { t: 'Reports back in Slack with what changed and why.', h: true },
        ],
      },
      {
        task: 'Customer Support',
        them: [
          { t: 'You see a buyer message in Seller Central.', h: true },
          { t: 'Copy the message into Claude, ask for a draft reply.' },
          { t: 'Copy the reply back into Seller Central, paste, send.' },
          { t: 'Manually issue the refund.', h: true },
        ],
        us: [
          { t: 'DragonBot reads incoming buyer messages automatically.', h: true },
          { t: 'Drafts a reply based on YOUR policies (from Notion).' },
          { t: 'Asks for approval, then sends and processes refund directly.' },
          { t: 'Logs every action with full audit trail.', h: true },
        ],
      },
      {
        task: 'Strategic Analysis',
        them: [
          { t: "Paste your sales data, ad data, inventory data into Claude.", h: true },
          { t: "Claude's reasoning is excellent — long context, careful analysis." },
          { t: "But you have to gather and assemble the data each time.", h: true },
          { t: 'And the analysis is in chat — not connected to actions.' },
        ],
        us: [
          { t: 'Ask DragonBot the same question in Slack.', h: true },
          { t: "It pulls all the relevant data automatically." },
          { t: "Frontier-grade reasoning, applied to YOUR Amazon data." },
          { t: 'Plus it can act on the conclusions, not just describe them.', h: true },
        ],
      },
      {
        task: 'Scheduled Workflows',
        them: [
          { t: 'Claude does not run on a schedule.', h: true },
          { t: 'You manually start each conversation.' },
          { t: 'Re-paste context every time.', h: true },
        ],
        us: [
          { t: '"Audit my listings every Monday."', h: true },
          { t: 'DragonBot confirms and runs it on schedule.' },
          { t: 'Pulls fresh data, builds the report, posts in Slack.' },
          { t: 'Remembers context, learns your business over time.', h: true },
        ],
      },
    ],
    themWins: [
      {
        title: 'Best-in-class reasoning and writing',
        desc:
          "Claude has a reputation among AI power users for the most thoughtful reasoning, the most nuanced analysis, and the best writing of any general AI. For complex strategic thinking, Claude is genuinely excellent.",
      },
      {
        title: 'Massive context windows',
        desc:
          "Claude can hold huge amounts of context in a single conversation — entire books, codebases, or document sets. If you need to analyze massive datasets in one go, this is a real advantage.",
      },
      {
        title: 'Honest and grounded',
        desc:
          "Claude is widely regarded as the most honest about its limits — it's less prone to confidently making things up than other AI assistants. For high-stakes analysis, that calibration matters.",
      },
    ],
    usWins: [
      {
        title: "AI with hands, not just a brain",
        desc:
          "Claude is brilliant reasoning in a chat box. DragonBot is an AI operator with all the parts that turn intelligence into work: Amazon SP-API, your Notion docs, your Gmail, Slack, scheduling, custom skills, audit trails. Claude alone is the brain. DragonBot is the brain with hands.",
      },
      {
        title: 'Connected to your Amazon account',
        desc:
          "Claude can't see your Seller Central. DragonBot connects via the official Amazon SP-API and pulls live data — sales, ads, inventory, buyer messages — without you copy-pasting anything.",
      },
      {
        title: 'Takes actions, not just analysis',
        desc:
          "Claude analyzes and recommends. DragonBot acts — pauses keywords, sends replies, processes refunds, edits listings — with your approval and a full audit trail.",
      },
      {
        title: 'Runs on schedule, autonomously',
        desc:
          '"Audit my listings every Monday." "Send me a weekly PPC report." DragonBot remembers, runs, and reports back. Claude requires you to start every conversation from scratch.',
      },
      {
        title: 'Lives in Slack with your team',
        desc:
          "Claude is a chat website you visit alone. DragonBot lives in your team's Slack workspace — anyone can mention @DragonBot, see the responses, and benefit from shared context.",
      },
      {
        title: 'Knows Amazon-specific workflows',
        desc:
          "DragonBot is built around Amazon — SP-API, PPC structure, listing requirements, FBA fees, buyer messages, A+ content. Claude knows about Amazon, but doesn't know YOUR Amazon.",
      },
    ],
    pricingComparison: {
      themItems: [
        { label: 'Claude Free', price: '$0' },
        { label: 'Claude Pro', price: '$20/mo' },
        { label: 'Claude Max', price: '$100-$200/mo' },
        { label: 'Claude Team', price: '$25/user/mo' },
      ],
      usItem: { label: 'DragonBot', price: '$50/mo', note: '+ $100 in free credits to start' },
      footnote:
        "Claude is cheaper because it's a chat interface. DragonBot costs a bit more because it includes Amazon SP-API integration, Slack infrastructure, scheduling, custom skills, and the workflow engine that turns AI into real work on your Amazon business.",
    },
    faq: [
      {
        q: "Why not just use Claude to manage my Amazon business?",
        a: "Claude is brilliant for analysis — but it can't see your Seller Central, can't pull real numbers, can't take actions, and doesn't run on a schedule. For Amazon work, you'd be copy-pasting data in and out all day. DragonBot is wired into Amazon, your tools, and Slack so the work actually gets done.",
      },
      {
        q: "What about Claude's tool use / Computer Use features?",
        a: "Claude has powerful tool-use APIs, but consuming them productively requires building an entire integration layer yourself: Seller Central OAuth, SP-API, PPC handling, Slack integration, scheduling, audit trails, custom skills. DragonBot is that finished product, purpose-built for Amazon sellers.",
      },
      {
        q: 'How do you compare on price?',
        a: 'Claude Pro is $20/mo. DragonBot starts at $50/mo and includes $100 in free credits. The difference reflects what each does: Claude reasons, DragonBot reasons AND operates.',
      },
      {
        q: 'How long does it take to set up DragonBot?',
        a: 'Minutes. Connect DragonBot to your Slack workspace, link Amazon Seller Central via the official OAuth flow, and start asking questions.',
      },
      {
        q: 'Can I use both Claude and DragonBot?',
        a: 'Yes — many people do. Claude for general analysis, writing, and brainstorming. DragonBot for Amazon work that actually needs to get done.',
      },
    ],
  },

  'viktor': {
    name: 'Viktor',
    category: 'ai',
    logo: '/logo-viktor.png',
    metaTitle: 'DragonBot vs Viktor: Amazon-Specialized AI vs General AI Coworker (2026)',
    metaDescription:
      "Honest comparison of DragonBot and Viktor. Viktor is a brilliant general-purpose AI coworker. DragonBot is the same architecture, specialized for Amazon sellers — built by 10-year, 8-figure operators.",
    eyebrow: 'DragonBot vs Viktor',
    h1: { plain: "Viktor is the generalist.", accent: 'DragonBot is built for Amazon.' },
    subhead:
      "Viktor is a powerful general-purpose AI coworker — Slack-native, 3,000+ integrations, $100 free credits, $50/mo. DragonBot follows the same playbook, specialized for Amazon sellers — with Amazon SP-API, FBA / PPC / listing skills, and Amazon-specific operator knowledge baked in. Here's the honest comparison.",
    pricing: { monthly: '$50/mo', plan: 'paid plan' },
    tldr: {
      them:
        "Choose Viktor if your work spans many domains — engineering, marketing, finance, ops — and you need a flexible AI coworker that can pick up tasks across all of them.",
      us:
        "Choose DragonBot if you're an Amazon seller and you want an AI coworker that already knows Amazon — SP-API connection, PPC management, listing optimization, FBA workflows, buyer support — out of the box.",
    },
    comparisonTable: [
      { feature: 'Lives in Slack natively', them: 'yes', us: 'yes' },
      { feature: 'Connects to 3,000+ tools', them: 'yes', us: 'yes' },
      { feature: 'Custom skills in plain English', them: 'yes', us: 'yes' },
      { feature: '$100 in free credits to start', them: 'yes', us: 'yes' },
      { feature: 'Permission modes (read-only / supervised / autonomous)', them: 'yes', us: 'yes' },
      { feature: 'General-purpose business automation', them: 'yes', us: 'partial' },
      { feature: 'Built by Amazon sellers', them: 'no', us: 'yes' },
      { feature: 'Amazon SP-API connection out of the box', them: 'partial', us: 'yes' },
      { feature: 'Pre-built Amazon-specific skills (PPC, FBA, listings)', them: 'no', us: 'yes' },
      { feature: 'Amazon domain knowledge baked in', them: 'no', us: 'yes' },
      { feature: 'Buyer-message + refund automation', them: 'partial', us: 'yes' },
      { feature: 'Built-in reports tailored to Amazon sellers', them: 'partial', us: 'yes' },
      { feature: 'Built-by-real-Amazon-operators credibility', them: 'no', us: 'yes' },
      { feature: 'Starting price', them: '$50/mo', us: { main: '$50/mo', sub: '+ $100 in free credits' } },
    ],
    workflows: [
      {
        task: 'Connecting Amazon Seller Central',
        them: [
          { t: "Viktor connects via the SP-API integration in their tool catalog.", h: true },
          { t: 'You configure auth, scopes, and what data flows where.' },
          { t: 'Powerful, but you bring the Amazon expertise.', h: true },
        ],
        us: [
          { t: 'DragonBot connects to Amazon SP-API in 2 minutes via OAuth.', h: true },
          { t: 'Pre-configured for the data and actions Amazon sellers actually need.' },
          { t: 'No setup decisions to make — Amazon-specific defaults are already right.', h: true },
        ],
      },
      {
        task: 'Running a PPC Audit',
        them: [
          { t: 'Tell Viktor what you want a PPC audit to look like.', h: true },
          { t: "It pulls data, runs analysis based on your description." },
          { t: "Quality depends on how well you describe Amazon PPC structure.", h: true },
        ],
        us: [
          { t: 'Ask DragonBot to run a PPC audit.', h: true },
          { t: 'It already knows what a good Amazon PPC audit looks like — match types, search term harvesting, negation patterns, dayparting.' },
          { t: 'Delivers an audit that reflects 10 years of selling experience.', h: true },
        ],
      },
      {
        task: 'Customer Support Workflows',
        them: [
          { t: 'Configure Viktor with your buyer-message workflow.', h: true },
          { t: 'Describe Amazon-specific buyer message conventions, refund policies, response templates.' },
          { t: 'Generalist — depends on the configuration you provide.', h: true },
        ],
        us: [
          { t: "DragonBot already knows Amazon's buyer-message format.", h: true },
          { t: 'Pre-built workflows for refunds, returns, A-to-Z claims, negative reviews.' },
          { t: 'Plug in YOUR policies (from Notion) — DragonBot handles the Amazon-specific parts.', h: true },
        ],
      },
      {
        task: 'Domain Knowledge',
        them: [
          { t: "Viktor is a generalist that learns your domain through use.", h: true },
          { t: 'Excellent if your work spans many domains.' },
          { t: 'For Amazon: you teach it the conventions over time.', h: true },
        ],
        us: [
          { t: "DragonBot is built around Amazon out of the box.", h: true },
          { t: 'BSR, ACOS, TACoS, FBA fees, listing suppressions, A+ content — already understood.' },
          { t: 'Built by sellers who hit 8 figures on Amazon over 10 years.', h: true },
        ],
      },
    ],
    themWins: [
      {
        title: 'Best-in-class general-purpose AI coworker',
        desc:
          "Viktor is genuinely impressive. If your business spans engineering, marketing, finance, sales, and ops — Viktor handles all of it. Same architecture as DragonBot, broader scope.",
      },
      {
        title: 'More flexibility for non-Amazon work',
        desc:
          "If you sell on Amazon AND run a SaaS, do consulting, manage a content business, etc. — Viktor's generalist nature is a real advantage. DragonBot focuses on Amazon, so non-Amazon work is less native.",
      },
      {
        title: 'Mature general platform',
        desc:
          "Viktor has invested heavily in being good at everything — engineering, finance, marketing, ops. If your needs cut across all of those, that breadth is real value.",
      },
    ],
    usWins: [
      {
        title: 'Built by Amazon sellers, not for them',
        desc:
          "Viktor was built for general business automation. DragonBot was built by sellers who've been on Amazon for 10 years and hit 8 figures. Every skill reflects scars from real selling — listing suppressions at 2am, ACOS spirals, exhausting customer support.",
      },
      {
        title: 'Amazon-specific skills out of the box',
        desc:
          "PPC audits, listing optimization, keyword research, FBA reimbursements, buyer-message handling, refund workflows — all built in. With Viktor, you'd configure these from scratch.",
      },
      {
        title: 'Speaks Amazon natively',
        desc:
          "BSR, ACOS, TACoS, COGS, FBA fees, A+ content, brand registry, search-term reports — DragonBot understands Amazon vocabulary as a first-class citizen, not as something it learned.",
      },
      {
        title: 'Faster time-to-value for Amazon sellers',
        desc:
          "Viktor is a powerful blank slate — you bring the Amazon expertise. DragonBot ships with the expertise. Connect Amazon, ask a question, get useful answers in minutes.",
      },
      {
        title: 'Built-in reports tailored to sellers',
        desc:
          "Weekly sales by SKU, profit by ASIN, ACOS trends, restock alerts — pre-built. Viktor can build these for you, but you describe what they should look like.",
      },
      {
        title: 'Dedicated to one customer',
        desc:
          "Viktor serves every kind of business. DragonBot serves only Amazon sellers — every product decision, integration, skill, and conversation is sharpened for that one customer.",
      },
    ],
    pricingComparison: {
      themItems: [
        { label: 'Viktor Free', price: '$100 in credits' },
        { label: 'Viktor paid plans', price: 'from $50/mo' },
      ],
      usItem: { label: 'DragonBot', price: '$50/mo', note: '+ $100 in free credits to start' },
      footnote:
        "Pricing is essentially identical — same model, same starter credit, same paid tier. The difference is what you get for that $50: a generalist (Viktor) or an Amazon specialist (DragonBot).",
    },
    faq: [
      {
        q: "Aren't Viktor and DragonBot basically the same product?",
        a: "Same architecture, different specialization. Both live in Slack, connect to 3,000+ tools, offer custom skills, and start at $50/mo with $100 in free credits. The difference: Viktor is a generalist for any kind of business; DragonBot is purpose-built for Amazon sellers — with SP-API, PPC skills, FBA workflows, and Amazon domain knowledge baked in.",
      },
      {
        q: 'When does it make sense to choose Viktor instead?',
        a: "If your work spans many domains (engineering, finance, marketing, ops), Viktor's generalist scope is the right fit. If you sell on Amazon AND run multiple unrelated businesses, you may end up using Viktor for the broader work. DragonBot is the right call if Amazon is your primary business.",
      },
      {
        q: 'Why does it matter that DragonBot is built by Amazon sellers?',
        a: "Because every product decision reflects what real operators actually need. We've spent 10 years selling on Amazon, hit 8 figures, and felt every pain point — listing suppressions at 2am, ACOS spirals, exhausting customer support, weekly reports that took 4 hours. DragonBot is the employee we always wished we had.",
      },
      {
        q: 'Can I do everything Viktor does in DragonBot?',
        a: "For Amazon-related work, yes — and faster. For non-Amazon work (writing code, managing engineering ops, etc.), DragonBot is less specialized. If those are core to your business, Viktor is the better fit.",
      },
      {
        q: 'Is DragonBot Amazon-compliant?',
        a: 'Yes. DragonBot uses the official Amazon Selling-Partner API (SP-API). 100% Amazon Terms of Service compliant.',
      },
      {
        q: 'How long does it take to set up?',
        a: 'Minutes. Connect DragonBot to your Slack workspace, link Amazon Seller Central via the official OAuth flow, and start asking questions.',
      },
      {
        q: 'Can I try DragonBot before paying?',
        a: 'Yes. $100 in free credits to start. No credit card required. No sales call.',
      },
    ],
  },

  // Add more competitors here using the same structure:
  // 'perpetua': { ... },
};

export function getCompetitor(slug) {
  return competitors[slug] || null;
}

export function getAllCompetitorSlugs() {
  return Object.keys(competitors);
}