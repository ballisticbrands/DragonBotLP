/* Text-only page copy, in a JSX-free module so BOTH the React page and the
 * build-time prerender (scripts/postbuild-spa-routes.mjs) read the SAME strings.
 *
 * ⚠️ WHY (2026-08-10): the prerender can only import JSX-free data, and this
 * page's copy lived inside LandingV4.jsx next to icon components — so crawlers
 * saw a 44-WORD homepage. On the sibling DragonRefunds site that pinned Google
 * Ads landing-page experience at BELOW_AVERAGE on 24/27 keywords and Quality
 * Score at 2/10. Per-route <title>s alone do not fix it.
 *
 * RULE: page copy lives HERE; LandingV4.jsx supplies icons and layout. Never
 * inline new marketing copy in the JSX — the prerender cannot see it. */


export const AUDIT_POINTS_COPY = [
  { title: 'Every claim type', desc: 'Lost, damaged, short-received, fee overcharges, customer returns — across FBA, AWD, and every region you sell in.' },
  { title: 'What expires first', desc: "Amazon's filing windows are short and unforgiving. We rank by deadline, not by dollar value, so nothing ages out unclaimed." },
  { title: 'What you already recovered', desc: 'Your whole reimbursement history, reconciled — including what your current process quietly missed.' },
  { title: 'A real number', desc: 'Not a range and not a teaser. The exact figure Amazon owes you right now, itemized down to the shipment.' },
];

export const CLAIM_TYPES_COPY = [
  { headline: 'A refund went out. The item never came back.', blurb: 'Amazon should charge the customer and repay you 45 days after a refund — and often doesn’t. We match every refund to its return and surface the ones that never closed.' },
  { headline: 'Units leave Amazon and the clock starts.', blurb: 'Removals aren’t auto-reimbursed, and lost-in-transit claims die 75 days after the ship date. We reconcile what left against what landed, rank by what expires first, and open a dispute that already knows what kind of removal it’s looking at.' },
  { headline: 'Amazon measured your box. It measured wrong.', blurb: 'A few millimeters over a size-tier line bumps the pick-and-pack fee on every unit you sell. We flag SKUs sitting just over a boundary — you confirm the real dimensions.' },
  { headline: 'Amazon pays your cost, not your price.', blurb: 'Since March 2025, lost units are repaid at sourcing cost. If yours isn’t on file, Amazon’s estimate is the number they’ll keep paying — link a sheet and we show the gap.' },
];
