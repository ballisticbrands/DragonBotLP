export default {
  title: '# ppc-strategy',
  messages: [
    { role: 'user', name: 'Maya', text: 'Dragon, pull up the PPC performance for last week across all brands.' },
    { role: 'bot', name: 'DragonBot', text: 'Here\'s your weekly PPC summary:\n\nBrand #1 - Kitchen Tools:\n\u2022 Spend: $847\n\u2022 Sales: $3,241\n\u2022 ACoS: 26.1%\n\u2022 TACoS: 12.3%\n\nBrand #2 - Home Essentials:\n\u2022 Spend: $523\n\u2022 Sales: $1,890\n\u2022 ACoS: 27.7%\n\u2022 TACoS: 15.1%\n\nBrand #3 - Pet Supplies:\n\u2022 Spend: $312\n\u2022 Sales: $1,456\n\u2022 ACoS: 21.4%\n\u2022 TACoS: 9.8%' },
    { role: 'user', name: 'Gershon', text: 'Pet Supplies is doing really well. Can we increase budget there by 20%?' },
    { role: 'bot', name: 'DragonBot', text: 'Done! Increased Pet Supplies daily budget from $45 to $54. I\'ll monitor performance closely over the next 3 days and alert you if ACoS rises above 25%.' },
    { role: 'user', name: 'Maya', text: 'Also, let\'s pause the underperforming keywords on Brand #2. Anything with ACoS above 40%.' },
    { role: 'bot', name: 'DragonBot', text: 'Paused 12 keywords on Brand #2 with ACoS > 40%. Estimated weekly savings: $89. Full list added to your PPC sheet.' },
  ],
};
