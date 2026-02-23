export default {
  title: '# product-launches',
  messages: [
    { role: 'user', name: 'Sofia', text: 'We have 3 new products in the pipeline for Q2. Dragon, can you create a launch timeline?' },
    { role: 'bot', name: 'DragonBot', text: 'Here\'s the proposed Q2 launch timeline:\n\n1. Silicone Spatula Set - April 15\n   \u2022 Listing copy: ready\n   \u2022 Images: in progress\n   \u2022 PPC plan: not started\n\n2. Bamboo Cutting Board - May 1\n   \u2022 Listing copy: not started\n   \u2022 Images: not started\n   \u2022 PPC plan: not started\n\n3. Stainless Steel Mixing Bowls - June 1\n   \u2022 Listing copy: not started\n   \u2022 Images: not started\n   \u2022 PPC plan: not started\n\nWant me to start on keyword research for these?' },
    { role: 'user', name: 'Gershon', text: 'Yes, start with the spatula set since that\'s launching first.' },
    { role: 'bot', name: 'DragonBot', text: 'Starting keyword research for Silicone Spatula Set now. I\'ll have the full report ready within the hour.' },
    { role: 'user', name: 'Liam', text: 'I can handle the product photography for the spatula set this week. Should have shots ready by Friday.' },
    { role: 'user', name: 'Sofia', text: 'Perfect. Dragon, add that to the timeline and notify me when Liam uploads the photos.' },
    { role: 'bot', name: 'DragonBot', text: 'Updated! Timeline now shows spatula set photos expected by Friday. I\'ll ping you in this channel when they\'re uploaded to Google Drive.' },
  ],
};
