import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import CompareDropdown from '../components/CompareDropdown';

const sysFont = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const monoFont = "'Roboto Mono', monospace";

const monoLink = document.querySelector('link[data-roboto-mono]');
if (!monoLink) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap';
  link.dataset.robotoMono = '';
  document.head.appendChild(link);
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="font-medium">{q}</span>
        <ChevronDown className={`w-5 h-5 text-white/65 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pb-5 text-white/70 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const pricingFaq = [
  { q: 'Is the free plan really free forever?', a: 'Yes. Read-only access is $0 per month with no credit card required. You get every skill, always-fresh ETL\'d data, and the Amazon SP-API connection. There is no trial clock on it.' },
  { q: "What's the difference between Free and Read + Write?", a: 'Free is read-only — your AI can pull data, run analyses, and build reports. Read + Write adds the ability to act on Seller Central: pause campaigns, issue refunds, edit listings, and more. Read + Write is $50 per month and currently in private beta.' },
  { q: 'Which AI clients does it work with?', a: 'Any MCP client. Claude, ChatGPT, and Cursor are the common ones. DragonBot is an MCP server, so anything that speaks the Model Context Protocol can connect.' },
  { q: 'Do you charge a percentage of my revenue or ad spend?', a: 'Never. DragonBot is a flat monthly price. We do not take a percentage of your revenue, your ad spend, or anything we recover for you.' },
  { q: 'How does DragonBot connect to my Amazon account?', a: 'Through the official Amazon Selling Partner API (SP-API) over OAuth. DragonBot is an authorized Amazon SP-API application. Nothing is scraped, and you can revoke access from Seller Central at any time.' },
  { q: 'Can my AI take actions without asking me?', a: 'Only if you choose that. Read + Write has a supervised mode where every write is approval-gated, and an autonomous mode for routine actions. Both keep a full audit trail of everything that ran.' },
  { q: 'What data does it cover?', a: 'Orders, advertising, inventory, search query performance, reviews, buyer messages, and account health — ETL\'d continuously so answers are fast instead of waiting on SP-API.' },
];


export default function Pricing() {
  return (
    <div className="db-page min-h-screen bg-[#0F0F0F] text-white" style={{ fontFamily: sysFont }}>
      <style>{`.db-page h1,.db-page h2,.db-page h3,.db-page h4,.db-page h5,.db-page h6{font-family:inherit!important}`}</style>
      {/* Nav */}
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <motion.img src="/DragonBot-logo.png" alt="DragonBot" className="h-10"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }} />
            <span className="font-bold text-[28px] text-white" style={{ lineHeight: '1' }}>get<span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">DragonBot</span><span className="text-white">.com</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-[13px] font-medium text-white/70 hover:text-[#98CC65] transition-colors" style={{ fontFamily: monoFont }}>Product</a>
            <a href="/pricing" className="text-[13px] font-medium text-white bg-white/10 px-3 py-1.5 rounded-md" style={{ fontFamily: monoFont }}>Pricing</a>
            <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-white/70 hover:text-[#98CC65] transition-colors" style={{ fontFamily: monoFont }}>Privacy</a>
            <a href="/support" target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-white/70 hover:text-[#98CC65] transition-colors" style={{ fontFamily: monoFont }}>Support</a>
            <CompareDropdown />
          </div>
          <a href="/beta"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#F5F3F1] to-[#F5F3F1] hover:from-[#2F7D4F] hover:to-[#98CC65] text-[#0F0F0F] text-sm font-semibold uppercase tracking-wide rounded-lg transition-all">
            Request Access
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-extrabold text-[48px] sm:text-[64px] lg:text-[80px] leading-[1.05] tracking-[-0.035em] mb-6">
            Start <span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">free.</span>
            <br />Upgrade when you're ready.
          </h1>
          <p className="text-[17px] text-white/60 max-w-2xl mx-auto leading-relaxed mb-6">
            Connect your Amazon account to Claude, ChatGPT, Cursor, or any MCP client. Read-only
            access is free forever — no credit card, no trial clock.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-[13px] font-medium text-white/65 tracking-[-0.01em] mb-4">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#2F7D4F]" /> Free forever, read-only
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#2F7D4F]" /> No credit card required
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#2F7D4F]" /> Never a % of revenue or ad spend
            </span>
          </div>
        </div>
      </section>

      {/* Plans — mirrors the #plans section on the homepage; keep the two in sync */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Free forever */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
              <div className="mb-6">
                <p className="text-[11px] font-bold text-white/65 uppercase tracking-[0.2em] mb-3" style={{ fontFamily: monoFont }}>Basic</p>
                <h3 className="font-extrabold text-2xl text-white mb-1">Free forever</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white">$0</span>
                  <span className="text-white/65 text-sm">/ month</span>
                </div>
                <p className="mt-3 text-sm text-white/55 leading-relaxed">
                  Read-only access. Pull data, run analyses, build reports — as much as you want.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Every skill, read-only',
                  "Always-fresh ETL'd data",
                  'Amazon SP-API connection',
                  'Works with Claude, ChatGPT, Cursor, any MCP client',
                  'No credit card required',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/75">
                    <Check className="w-4 h-4 text-[#98CC65] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://app.getdragonbot.com/sign-up"
                className="block text-center px-6 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-white/30 font-semibold uppercase tracking-wide rounded-lg transition-all">
                Get it free
              </a>
            </div>

            {/* Read + Write (private beta) */}
            <div className="relative bg-gradient-to-b from-[#2F7D4F]/15 to-[#0F0F0F] border-2 border-[#2F7D4F]/50 rounded-2xl p-8 flex flex-col shadow-2xl shadow-[#2F7D4F]/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] text-[#0F0F0F] text-[10px] font-bold uppercase tracking-widest rounded-full" style={{ fontFamily: monoFont }}>
                Private beta
              </div>
              <div className="mb-6">
                <p className="text-[11px] font-bold text-[#98CC65] uppercase tracking-[0.2em] mb-3" style={{ fontFamily: monoFont }}>Read + Write</p>
                <h3 className="font-extrabold text-2xl text-white mb-1">Take actions on Amazon</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">$50</span>
                  <span className="text-white/65 text-sm">/ month</span>
                </div>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">
                  Everything in Free, plus your AI can take action — pause campaigns, send refunds,
                  edit listings, and more.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Everything in Free forever',
                  'Write operations on Seller Central',
                  'Supervised mode (approval-gated)',
                  'Autonomous mode for routine actions',
                  'Full audit trail',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/80">
                    <Check className="w-4 h-4 text-[#98CC65] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/beta"
                className="block text-center px-6 py-3 bg-gradient-to-r from-[#F5F3F1] to-[#F5F3F1] hover:from-[#2F7D4F] hover:to-[#98CC65] text-[#0F0F0F] font-semibold uppercase tracking-wide rounded-lg transition-all hover:shadow-xl hover:shadow-[#2F7D4F]/25">
                Request beta access
              </a>
            </div>
          </div>

          <p className="mt-10 text-center text-[13px] text-white/45 max-w-2xl mx-auto leading-relaxed">
            Need custom billing, a security review, or a DPA?{' '}
            <a href="mailto:info@getdragonbot.com" className="text-white/70 underline hover:text-[#98CC65] transition-colors">Get in touch</a>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="font-bold text-xl text-center mb-10">Pricing FAQ</h3>
          {pricingFaq.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F3D2E] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2.5">
              <img src="/DragonBot-logo.png" alt="DragonBot" className="h-8" />
              <span className="font-bold text-lg text-white">DragonBot</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="/" className="text-sm text-white/70 hover:text-white transition-colors">Product</a>
              <a href="/pricing" className="text-sm text-white/70 hover:text-white transition-colors">Pricing</a>
              <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">Privacy</a>
              <a href="/tos" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">Terms</a>
              <a href="/support" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">Support</a>
              <a href="mailto:info@getdragonbot.com" className="text-sm text-white/70 hover:text-white transition-colors">info@getdragonbot.com</a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-white/60">&copy; {new Date().getFullYear()} Chacha Advisory LLC. All rights reserved.</p>
              <p className="text-xs text-white/60 mt-1">30 N Gould St Ste R, Sheridan, WY 82801, USA</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}