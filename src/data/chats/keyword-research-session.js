export default {
  title: 'Keyword Research Session',
  messages: [
    { role: 'user', name: 'Gershon', text: 'Hey Dragon, can you do keyword research for my new garlic press listing? Here are some competitor ASINs: B0C7X9LQ2M, B09Q4T7K8R, B0B2M5N8P3' },
    { role: 'bot', name: 'DragonBot', text: 'Researching competitor ASINs... 🔍' },
    { role: 'bot', name: 'DragonBot', text: 'Checking which keywords they rank for on Amazon...' },
    { role: 'bot', name: 'DragonBot', text: 'Found 847 unique keywords. Filtering by relevance and search volume...' },
    { role: 'bot', name: 'DragonBot', text: 'Creating your keyword research spreadsheet...' },
    { role: 'bot', name: 'DragonBot', text: "Done! ✅ Here's your sheet: docs.google.com/spreadsheet/d/1a2b3c4d5e\n\nKey findings:\n• 23 high-volume keywords with low competition\n• Top keyword: \"garlic press stainless steel\" (14,800 searches/mo)\n• Suggested PPC budget: $35-45/day for launch\n\nWant me to write the listing copy based on these keywords? 🐉" },
    { role: 'user', name: 'Gershon', text: 'Yes please! Also optimize for the top 5 keywords.' },
    { role: 'bot', name: 'DragonBot', text: "Writing optimized listing copy using top 5 keywords...\n\nTitle: \"Premium Stainless Steel Garlic Press - Heavy Duty Professional Garlic Mincer & Crusher...\"\n\nI've added the full listing (title, bullets, description, search terms) to a new tab in your sheet. Check it out! 🐉🔥" },
    { role: 'user', name: 'Gershon', text: 'This is perfect, thanks Dragon!' },
    { role: 'bot', name: 'DragonBot', text: "Happy to help! Let me know when you're ready to set up the PPC campaigns for launch. 🐉" },
  ],
};
