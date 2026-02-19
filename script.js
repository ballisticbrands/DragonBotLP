// ===========================
// CHAT ANIMATION DATA
// ===========================

const heroMessages = [
  { type: 'user', text: 'Hey Dragon, can you check how my main product is ranking for "organic dog treats"?' },
  { type: 'bot', text: 'On it! Let me pull up the latest ranking data from Amazon... 🐉' },
  { type: 'bot', text: 'Your product "Natural Paws Organic Treats" is currently ranking #14 for "organic dog treats" — up 3 spots from last week!' },
  { type: 'user', text: 'Nice! Can you also check the top 5 competitors and see what keywords they rank for?' },
  { type: 'bot', text: 'Researching top 5 competitors now...' },
  { type: 'bot', text: 'Done! I found 47 keywords your competitors rank for that you don\'t. I\'ve uploaded a full breakdown to your Google Drive. <a href="#">View Sheet →</a>' },
];

const featureMessages = {
  'kw-research': [
    { type: 'user', text: 'Yo dragon here are 10 competitor ASINs, plz do keyword research on them and upload the result as a google sheet to the project\'s folder.\n\nB08N5WRWNW, B07PXGQC1Q, B09KMRYYZR, B08DFPZG71, B07W97XS4L, B09BF35LYS, B08HJ5FXLR, B07PPGWQ9C, B08YWJHG2P, B09RT5LHXM' },
    { type: 'bot', text: 'Researching competitor ASINs... 🔍' },
    { type: 'bot', text: 'Checking which keywords they rank for...' },
    { type: 'bot', text: 'Finding root keywords...' },
    { type: 'bot', text: 'Finding newer keywords with low competition...' },
    { type: 'bot', text: 'Creating sheet...' },
    { type: 'bot', text: 'Done! <a href="#">drive.google.com/sheets/kw-research-feb-2026</a>\n\nPlz have a look and let me know your thoughts! 🐉' },
  ],
  'product-research': [
    { type: 'user', text: 'Dragon, I want to find a new product to launch in the pet supplies niche. Can you do some research?' },
    { type: 'bot', text: 'Absolutely! Let me scan the pet supplies category for opportunities... 🔍' },
    { type: 'bot', text: 'Analyzing market demand and competition levels...' },
    { type: 'bot', text: 'Checking profit margins and FBA fees...' },
    { type: 'bot', text: 'Found 12 product opportunities with high demand and low competition. I\'ve ranked them by estimated profit margin.' },
    { type: 'bot', text: 'Full report uploaded! <a href="#">drive.google.com/sheets/product-research-feb-2026</a>\n\nTop pick: Collapsible silicone dog bowls — estimated 45% margin, growing 22% MoM! 🐉' },
  ],
  'customer-support': [
    { type: 'user', text: 'Dragon, a customer just left a 1-star review saying the product arrived damaged. Can you draft a response and handle the refund?' },
    { type: 'bot', text: 'I\'m on it! Let me pull up the order details... 📦' },
    { type: 'bot', text: 'Found the order. I\'ve drafted a professional, empathetic response and submitted it as a seller comment on the review.' },
    { type: 'bot', text: 'I\'ve also initiated a replacement shipment through FBA and sent the customer a direct message apologizing for the experience.' },
    { type: 'bot', text: 'Everything\'s handled! The customer should receive the replacement in 2 days. I\'ll follow up with them automatically to see if they\'d update their review. 🐉' },
  ],
  'photo-gen': [
    { type: 'user', text: 'Hey Dragon, I need a lifestyle photo of my stainless steel water bottle being used at a gym. Can you generate some options?' },
    { type: 'bot', text: 'Generating lifestyle photos for your water bottle... 🎨' },
    { type: 'bot', text: 'Creating 4 variations: gym bench setting, treadmill holder, post-workout, and locker room...' },
    { type: 'bot', text: 'Done! I\'ve generated 4 high-quality lifestyle images and uploaded them to your Drive. <a href="#">drive.google.com/photos/bottle-lifestyle</a>\n\nLet me know which ones you like and I can refine them! 🐉' },
  ],
  'ppc': [
    { type: 'user', text: 'Dragon, my ACoS has been climbing. Can you audit my PPC campaigns and optimize them?' },
    { type: 'bot', text: 'Let me pull up your Seller Central ad data... 📊' },
    { type: 'bot', text: 'Analyzing campaign performance across all ad groups...' },
    { type: 'bot', text: 'Found the issues: 23 keywords have ACoS above 45% and 8 campaigns have overlapping targeting. I\'ve paused the underperformers and adjusted bids on the rest.' },
    { type: 'bot', text: 'Optimization complete! Estimated savings: $340/month. I\'ll monitor performance this week and make further adjustments. Full report: <a href="#">drive.google.com/sheets/ppc-audit</a> 🐉' },
  ],
  'acc-mgmt': [
    { type: 'user', text: 'Dragon, can you give me a daily summary of my seller account? Any issues I should know about?' },
    { type: 'bot', text: 'Pulling your daily account overview... 📋' },
    { type: 'bot', text: 'Here\'s your daily summary:\n\n• Revenue: $2,847 (↑12% vs yesterday)\n• Orders: 94\n• Account Health: Excellent\n• 2 new customer messages (both answered)\n• 1 return request (auto-approved per your settings)\n• Inventory alert: "Organic Dog Treats" — 12 days of stock remaining' },
    { type: 'bot', text: 'Action needed: You should reorder "Organic Dog Treats" soon to avoid stockouts. Want me to draft a PO for your supplier? 🐉' },
  ],
};

// ===========================
// CHAT ANIMATION ENGINE
// ===========================

function createMessage(msg) {
  const div = document.createElement('div');
  div.className = `chat-msg ${msg.type === 'user' ? 'user' : ''}`;

  const avatar = document.createElement('div');
  avatar.className = `chat-msg-avatar ${msg.type === 'user' ? 'user-avatar' : ''}`;
  if (msg.type === 'user') {
    avatar.textContent = 'U';
  } else {
    avatar.innerHTML = '<img src="logos/dragonbot_fire.png" alt="DragonBot">';
  }

  const bubble = document.createElement('div');
  bubble.className = 'chat-msg-bubble';
  bubble.innerHTML = msg.text.replace(/\n/g, '<br>');

  div.appendChild(avatar);
  div.appendChild(bubble);
  return div;
}

function createTypingIndicator() {
  const div = document.createElement('div');
  div.className = 'chat-msg';

  const avatar = document.createElement('div');
  avatar.className = 'chat-msg-avatar';
  avatar.innerHTML = '<img src="logos/dragonbot_fire.png" alt="DragonBot">';

  const typing = document.createElement('div');
  typing.className = 'chat-msg-bubble';
  typing.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';

  div.appendChild(avatar);
  div.appendChild(typing);
  return div;
}

function animateChat(container, messages, onComplete) {
  container.innerHTML = '';
  let i = 0;

  function showNext() {
    if (i >= messages.length) {
      if (onComplete) onComplete();
      return;
    }

    const msg = messages[i];

    if (msg.type === 'bot') {
      // Show typing indicator first
      const typing = createTypingIndicator();
      container.appendChild(typing);
      container.scrollTop = container.scrollHeight;

      setTimeout(() => {
        container.removeChild(typing);
        const el = createMessage(msg);
        container.appendChild(el);
        container.scrollTop = container.scrollHeight;
        i++;
        setTimeout(showNext, 800 + Math.random() * 600);
      }, 1000 + Math.random() * 500);
    } else {
      const el = createMessage(msg);
      container.appendChild(el);
      container.scrollTop = container.scrollHeight;
      i++;
      setTimeout(showNext, 600 + Math.random() * 400);
    }
  }

  showNext();
}

// ===========================
// HERO CHAT ANIMATION
// ===========================

function startHeroChat() {
  const body = document.getElementById('hero-chat-body');
  if (!body) return;

  animateChat(body, heroMessages, () => {
    // Restart after a pause
    setTimeout(() => startHeroChat(), 4000);
  });
}

// ===========================
// FEATURES TABS & CHAT
// ===========================

let currentFeature = 'kw-research';
let featureChatTimeout = null;

function startFeatureChat(feature) {
  const body = document.getElementById('feature-chat-body');
  if (!body) return;

  // Clear any pending timeouts
  if (featureChatTimeout) {
    clearTimeout(featureChatTimeout);
  }

  currentFeature = feature;
  const messages = featureMessages[feature];
  if (!messages) return;

  animateChat(body, messages, () => {
    // Restart after a pause
    featureChatTimeout = setTimeout(() => {
      if (currentFeature === feature) {
        startFeatureChat(feature);
      }
    }, 4000);
  });
}

function initFeatureTabs() {
  const tabs = document.querySelectorAll('.feature-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const feature = tab.getAttribute('data-feature');
      startFeatureChat(feature);
    });
  });
}

// ===========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.offer-card, .step, .plan-card, .ai-stat').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
}

// Add CSS for scroll animations
const scrollStyle = document.createElement('style');
scrollStyle.textContent = `
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .animate-on-scroll.in-view {
    opacity: 1;
    transform: translateY(0);
  }
  .animate-on-scroll:nth-child(2) { transition-delay: 0.1s; }
  .animate-on-scroll:nth-child(3) { transition-delay: 0.2s; }
  .animate-on-scroll:nth-child(4) { transition-delay: 0.3s; }
`;
document.head.appendChild(scrollStyle);

// ===========================
// MOBILE MENU
// ===========================

function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    links.classList.toggle('mobile-open');
    btn.classList.toggle('open');
  });

  // Close menu on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('mobile-open');
      btn.classList.remove('open');
    });
  });
}

// Add mobile menu styles
const mobileStyle = document.createElement('style');
mobileStyle.textContent = `
  @media (max-width: 768px) {
    .nav-links.mobile-open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba(255,255,255,0.98);
      backdrop-filter: blur(12px);
      padding: 24px;
      gap: 16px;
      border-bottom: 1px solid var(--gray-200);
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
    .mobile-menu-btn.open span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    .mobile-menu-btn.open span:nth-child(2) {
      opacity: 0;
    }
    .mobile-menu-btn.open span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }
`;
document.head.appendChild(mobileStyle);

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)';
    } else {
      navbar.style.boxShadow = 'none';
    }
    lastScroll = currentScroll;
  });
}

// ===========================
// FEATURE SECTION OBSERVER
// ===========================

function initFeatureSectionObserver() {
  const featuresSection = document.getElementById('features');
  if (!featuresSection) return;

  let started = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        startFeatureChat('kw-research');
      }
    });
  }, { threshold: 0.3 });

  observer.observe(featuresSection);
}

// ===========================
// INIT
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  startHeroChat();
  initFeatureTabs();
  initScrollAnimations();
  initMobileMenu();
  initNavbarScroll();
  initFeatureSectionObserver();
});