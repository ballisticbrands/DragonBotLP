import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ChevronDown, ArrowRight, Check, BadgeCheck, ExternalLink,
  Database, Zap, BookOpen, Server, Brain, Sparkles, Clock, Shield,
  TrendingUp, BarChart3, MessageSquare, Star, Package, FileText, Search, DollarSign, Play,
} from 'lucide-react';
import { sellerVideos } from '../data/sellerVideos';

/* ─── Fonts ─── */
const monoLink = document.querySelector('link[data-roboto-mono]');
if (!monoLink) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600&display=swap';
  link.dataset.robotoMono = '';
  document.head.appendChild(link);
}
const sysFont = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const monoFont = "'Roboto Mono', monospace";

/* ─── Hosts ─── */
const HOSTS = [
  { id: 'claude', label: 'Claude', logo: '/logo-claude.png' },
  { id: 'chatgpt', label: 'ChatGPT', logo: '/logo-chatgpt.svg', invert: true },
  { id: 'cursor', label: 'Cursor', mark: 'C' },
  { id: 'other', label: 'Any MCP client' },
];

/* ─── Works-with dropdown ─── */
function WorksWithDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-[13px] font-medium text-white/50 hover:text-[#98CC65] transition-colors"
        style={{ fontFamily: monoFont }}
        onClick={() => setOpen(o => !o)}
      >
        Works with <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -8, x: '-50%' }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 pt-3 w-[260px]"
          >
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl p-2 flex flex-col">
              {HOSTS.map(h => (
                <a
                  key={h.id}
                  href="/beta"
                  className="flex items-center gap-2.5 px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white rounded-md transition-colors"
                >
                  <HostMark host={h} size={18} />
                  <span className="font-medium">{h.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function WorksWithDropdownMobile({ onItemClick }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="flex items-center gap-2 text-lg font-medium text-white"
        onClick={() => setOpen(o => !o)}
      >
        Works with <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="pt-3 pl-3 flex flex-col gap-3 border-l border-white/10 ml-2">
              {HOSTS.map(h => (
                <a key={h.id} href="/beta" onClick={onItemClick} className="flex items-center gap-3 text-base text-white/70">
                  <HostMark host={h} size={20} />
                  <span>{h.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── HostMark — small visual mark for a host (logo or letter tile) ─── */
function HostMark({ host, size = 20 }) {
  if (host.logo) {
    return (
      <img
        src={host.logo}
        alt={host.label}
        style={{ width: size, height: size }}
        className={`object-contain shrink-0 ${host.invert ? 'invert brightness-200' : ''}`}
      />
    );
  }
  if (host.mark) {
    return (
      <div
        className="rounded shrink-0 flex items-center justify-center font-extrabold text-white"
        style={{ width: size, height: size, backgroundColor: '#0F0F0F', border: '1px solid rgba(255,255,255,0.2)', fontSize: size * 0.55, fontFamily: monoFont }}
      >
        {host.mark}
      </div>
    );
  }
  return (
    <div
      className="rounded shrink-0 flex items-center justify-center"
      style={{ width: size, height: size, backgroundColor: '#0F0F0F', border: '1px dashed rgba(152,204,101,0.4)' }}
    >
      <Server size={size * 0.55} className="text-[#98CC65]" />
    </div>
  );
}

/* ─── Navbar ─── */
const navLinks = [
  { label: 'Product', href: '/', active: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Privacy', href: '/privacy', newTab: true },
  { label: 'Support', href: '/support', newTab: true },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0F0F0F]/90 backdrop-blur-xl shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <motion.img src="/DragonBot-logo.png" alt="DragonBot" className="h-10"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }} />
            <span className="font-bold text-[28px] text-white" style={{ lineHeight: '1' }}>get<span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">DragonBot</span><span className="text-white">.com</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} {...(l.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={`text-[13px] font-medium transition-colors ${l.active ? 'text-white bg-white/10 px-3 py-1.5 rounded-md' : 'text-white/50 hover:text-[#98CC65]'}`} style={{ fontFamily: monoFont }}>{l.label}</a>
            ))}
            <WorksWithDropdown />
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="https://app.getdragonbot.com/sign-up"
              className="px-5 py-2.5 bg-gradient-to-r from-[#F5F3F1] to-[#F5F3F1] hover:from-[#2F7D4F] hover:to-[#98CC65] text-[#0F0F0F] text-sm font-semibold uppercase tracking-wide rounded-lg transition-all hover:shadow-lg hover:shadow-[#2F7D4F]/25">
              Get it free
            </a>
          </div>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-[#0F0F0F] pt-20 px-6">
            <div className="flex flex-col gap-6">
              {navLinks.map(l => (
                <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} className="text-lg font-medium text-white">{l.label}</a>
              ))}
              <WorksWithDropdownMobile onItemClick={() => setMobileOpen(false)} />
              <a href="https://app.getdragonbot.com/sign-up" onClick={() => setMobileOpen(false)}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-[#F5F3F1] to-[#F5F3F1] hover:from-[#2F7D4F] hover:to-[#98CC65] text-[#0F0F0F] text-center font-semibold uppercase tracking-wide rounded-lg transition-all">
                Get it free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Section wrapper ─── */
function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}

/* ─── Eyebrow label ─── */
function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2F7D4F]/10 rounded-full text-sm font-medium text-white mb-6 max-w-[90vw]">
      <span className="w-2 h-2 rounded-full bg-[#98CC65] animate-pulse shrink-0" />
      <span>{children}</span>
    </span>
  );
}

/* ─── Chat demo — host-agnostic chat with DragonBot tool calls ─── */
const CHAT_SCRIPT = [
  { who: 'user', text: 'Audit my Amazon PPC for the last 30 days.' },
  { who: 'host', text: 'On it. Calling DragonBot…', tool: { name: 'dragonbot.run_skill', args: 'audit_ppc(window="30d")' } },
  { who: 'host', text: <>Done — pulled spend across 47 campaigns. <strong>Top finding:</strong> 23 keywords burning $1,840/mo with 0 conversions (paused, projected ACoS ↓ from 38% → 26%). Full breakdown:<div className="mt-2 grid grid-cols-2 gap-2 text-[12px]"><div className="px-2.5 py-1.5 bg-white/5 rounded border border-white/10"><div className="font-bold text-[#98CC65]">$1,840</div><div className="text-white/50">wasted/mo</div></div><div className="px-2.5 py-1.5 bg-white/5 rounded border border-white/10"><div className="font-bold text-[#98CC65]">−12pt</div><div className="text-white/50">projected ACoS</div></div><div className="px-2.5 py-1.5 bg-white/5 rounded border border-white/10"><div className="font-bold text-[#98CC65]">23</div><div className="text-white/50">keywords paused</div></div><div className="px-2.5 py-1.5 bg-white/5 rounded border border-white/10"><div className="font-bold text-[#98CC65]">$60/d</div><div className="text-white/50">reallocated</div></div></div></> },
  { who: 'user', text: 'Now check listing health — anything suppressed?' },
  { who: 'host', text: 'Checking…', tool: { name: 'dragonbot.run_skill', args: 'account_health()' } },
  { who: 'host', text: <>1 listing suppressed: <code className="px-1.5 py-0.5 rounded bg-white/10 text-[#98CC65] text-[11px]">B0CK5LRQX7</code> — backend image URL returned 404. Re-uploaded the image and submitted reinstatement. Should be back within 2 hours. Want me to schedule hourly health checks?</> },
];

function HostHeader({ host }) {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
      <div className="flex items-center gap-2">
        <HostMark host={host} size={18} />
        <span className="text-[13px] font-semibold text-white/80">{host.label}</span>
      </div>
      <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest" style={{ fontFamily: monoFont }}>
        with DragonBot MCP
      </span>
    </div>
  );
}

function ToolCallPill({ name, args }) {
  return (
    <div className="my-2 inline-flex flex-col gap-0.5 px-3 py-2 rounded-lg border border-[#2F7D4F]/30 bg-[#2F7D4F]/10 max-w-full">
      <div className="flex items-center gap-1.5">
        <Sparkles className="w-3 h-3 text-[#98CC65]" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#98CC65]" style={{ fontFamily: monoFont }}>tool call</span>
      </div>
      <code className="text-[12px] text-white/80 break-all" style={{ fontFamily: monoFont }}>
        {name}({args})
      </code>
    </div>
  );
}

function ChatBubble({ msg, host }) {
  const isUser = msg.who === 'user';
  return (
    <div className={`flex gap-2.5 px-4 py-2 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className="shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-bold overflow-hidden"
        style={{ backgroundColor: isUser ? '#3A3A3A' : '#0F0F0F', border: isUser ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(152,204,101,0.3)' }}>
        {isUser ? 'You' : <HostMark host={host} size={16} />}
      </div>
      <div className={`flex-1 min-w-0 max-w-[calc(100%-2.5rem)] ${isUser ? 'text-right' : ''}`}>
        <div className={`inline-block text-left rounded-xl px-3.5 py-2.5 text-[13px] leading-relaxed ${isUser ? 'bg-[#2F7D4F]/15 text-white' : 'bg-white/5 text-white/85 border border-white/10'}`}>
          {msg.tool && <ToolCallPill {...msg.tool} />}
          {typeof msg.text === 'string' ? msg.text : <div>{msg.text}</div>}
          {msg.stats && (
            <div className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
              {msg.stats.map((s, i) => (
                <div key={i} className="px-2.5 py-1.5 bg-white/5 rounded border border-white/10">
                  <div className="font-bold text-[#98CC65]">{s.v}</div>
                  <div className="text-white/50">{s.l}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ChatDemo({ script = CHAT_SCRIPT, feature = null }) {
  const [activeHost, setActiveHost] = useState('claude');
  const [visible, setVisible] = useState(1);
  const host = HOSTS.find(h => h.id === activeHost);

  useEffect(() => {
    if (visible >= script.length) return;
    const delays = [400, 1000, 1500, 500, 1000, 1800];
    const t = setTimeout(() => setVisible(v => v + 1), delays[visible - 1] || 1200);
    return () => clearTimeout(t);
  }, [visible, script.length]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h4 className="font-extrabold text-2xl sm:text-3xl tracking-[-0.03em] text-center mb-3">
        {feature ? (
          <>Your <span className="bg-gradient-to-r from-[#FF9900] to-[#FFC266] bg-clip-text text-transparent">{feature}</span> with{' '}
            <span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">DragonBot</span></>
        ) : (
          <>Your <span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">AI</span> with{' '}
            <span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">DragonBot</span></>
        )}
      </h4>
      <p className="text-center text-xs font-bold uppercase tracking-widest text-white/40 mb-4" style={{ fontFamily: monoFont }}>
        Same MCP server. Pick your host.
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {HOSTS.map(h => (
          <button key={h.id} onClick={() => { setActiveHost(h.id); setVisible(1); }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeHost === h.id
                ? 'bg-[#2F7D4F] text-white shadow-lg shadow-[#2F7D4F]/20'
                : 'bg-[#F5F3F1] text-[#0F0F0F] hover:bg-[#2F7D4F] hover:text-white'
            }`} style={{ fontFamily: monoFont }}>
            <HostMark host={h} size={14} />
            {h.label}
          </button>
        ))}
      </div>
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#141618]" style={{ fontFamily: sysFont }}>
        <HostHeader host={host} />
        <div className="flex flex-col py-3 min-h-[420px] sm:min-h-[460px] max-h-[460px] overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
          {script.slice(0, visible).map((msg, i) => (
            <motion.div key={`${activeHost}-${i}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <ChatBubble msg={msg} host={host} />
            </motion.div>
          ))}
        </div>
        <div className="px-4 pb-3 pt-1 border-t border-white/10">
          <div className="rounded-lg px-3 py-2 text-xs text-white/30 border border-white/10 bg-white/5">
            Message {host.label}…
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── What's in the box — three pillars ─── */
const PILLARS = [
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Fresh data',
    desc: 'We ETL your Amazon data continuously — orders, ads, inventory, SQP, reviews, messages, account health. Your AI gets sub-second answers instead of waiting on SP-API.',
    badge: 'Updated every few minutes',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Pre-built skills',
    desc: 'Battle-tested workflows your AI can run on command. PPC audits, listing optimization, account health monitoring, weekly reports, and more. No prompt engineering required.',
    badge: 'Discoverable in-chat',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Tutorials',
    desc: 'Step-by-step guides that teach you (and your AI) how to drive the skills. Pick a goal, follow the tutorial, ship the work.',
    badge: 'Updated as Amazon evolves',
  },
];

/* ─── Skills catalog ─── */
const SKILLS = [
  { icon: <BarChart3 className="w-5 h-5" />,    name: 'PPC Audit',              desc: 'Find wasted spend, surface high-converting keywords, get bid-adjustment recommendations.' },
  { icon: <Search className="w-5 h-5" />,       name: 'Keyword Research',       desc: 'Pull relevant keywords from competitor ASINs and your SQP. Output PPC-ready spreadsheets.' },
  { icon: <FileText className="w-5 h-5" />,     name: 'Listing Optimizer',      desc: 'Diagnose title, bullets, A+ content, and backend fields. Suggest revisions grounded in your data.' },
  { icon: <Shield className="w-5 h-5" />,       name: 'Account Health Monitor', desc: 'Watch suppressions, policy warnings, and listing changes. Alert you the moment something breaks.' },
  { icon: <Package className="w-5 h-5" />,      name: 'Inventory Forecast',     desc: 'Project sell-through, flag stock-out risk, and recommend reorder timing per SKU.' },
  { icon: <Star className="w-5 h-5" />,         name: 'Review Monitor',         desc: 'Track new reviews, summarize sentiment trends, and surface complaints worth acting on.' },
  { icon: <TrendingUp className="w-5 h-5" />,   name: 'SQP Analysis',           desc: 'Decode Search Query Performance to find demand you\'re missing and where competitors steal share.' },
  { icon: <DollarSign className="w-5 h-5" />,   name: 'Profit Calculator',      desc: 'True per-unit margin after FBA fees, ads, returns, and storage — by ASIN, by week.' },
  { icon: <MessageSquare className="w-5 h-5" />,name: 'Buyer Message Triage',   desc: 'Classify incoming buyer messages by urgency. Draft replies grounded in your policies.' },
];

function SkillsShowcase() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {SKILLS.map((s, i) => (
        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#2F7D4F]/30 hover:bg-white/[0.07] transition-all">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-[#98CC65] bg-[#2F7D4F]/15 border border-[#2F7D4F]/30">
              {s.icon}
            </div>
            <h3 className="font-bold text-base text-white">{s.name}</h3>
          </div>
          <p className="text-[13px] text-white/55 leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECURITY DEMOS — copied from LandingV3 for self-containment
   ═══════════════════════════════════════════════════════════════ */

const AUDIT_ENTRIES = [
  { time: '3:41 PM', action: 'Created FBA shipping plan 6XUQQQ5L',         status: 'done' },
  { time: '3:42 PM', action: 'Rejected: Reduce price B001CUWUO7 → $26.99', status: 'rejected' },
  { time: '3:45 PM', action: 'Paused keyword "garlic press silicone"',     status: 'done' },
  { time: '3:46 PM', action: 'Sent refund $29.99 to Rachel Thompson',      status: 'done' },
  { time: '3:48 PM', action: 'Updated listing images for B0CK5LRQX7',      status: 'done' },
  { time: '3:51 PM', action: 'Generated PPC report — uploaded to Drive',   status: 'done' },
];

function AuditTrailDemo() {
  return (
    <div className="w-full h-full flex flex-col py-2 px-3" style={{ backgroundColor: '#2C2A25', borderRadius: '0 0 16px 16px', fontFamily: "'Roboto Mono', monospace" }}>
      {AUDIT_ENTRIES.map((entry, i) => (
        <div key={i} className="flex items-start gap-2 py-1 border-b border-white/10 last:border-0">
          <span className="text-[9px] text-white/70 shrink-0 w-[46px]">{entry.time}</span>
          <span className="text-[9px] text-white flex-1 leading-snug">{entry.action}</span>
          <span className={`text-[8px] font-bold shrink-0 px-1.5 py-px rounded ${
            entry.status === 'done' ? 'bg-[#2F7D4F] text-white' : 'bg-[#DC2626] text-white'
          }`}>
            {entry.status === 'done' ? '✓' : '✗'}
          </span>
        </div>
      ))}
    </div>
  );
}

function SPAPIConnectionDemo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#1A1D21', borderRadius: '0 0 16px 16px' }}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative flex items-start justify-between w-full px-6 pb-5" style={{ marginTop: -12 }}>
        <div className="relative flex flex-col items-center gap-1.5 z-10">
          <div className="w-12 h-12 rounded-xl bg-[#3A3A3A] flex items-center justify-center shadow-lg shadow-[#2F7D4F]/20 p-2">
            <img src="/DragonBot-avatar.png" alt="DragonBot" className="w-full h-full object-contain" />
          </div>
          <span className="text-[10px] font-semibold text-white/70">DragonBot</span>
        </div>
        <div className="absolute left-[4.5rem] right-[4.5rem] top-6 h-[2px] -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-[#98CC65]" style={{ boxShadow: '0 0 6px #98CC65, 0 0 12px #98CC65, 0 0 20px rgba(152,204,101,0.6)' }} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#0F0F0F] border border-[#2F7D4F]/40 flex items-center justify-center shadow-lg shadow-[#2F7D4F]/30">
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6V4a3 3 0 016 0v2" stroke="#98CC65" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="1.5" y="6" width="9" height="7" rx="1.5" fill="#98CC65" />
              <circle cx="6" cy="9.5" r="0.9" fill="#0F0F0F" />
            </svg>
          </div>
        </div>
        <div className="relative flex flex-col items-center gap-1.5 z-10">
          <div className="w-12 h-12 rounded-xl bg-[#0F0F0F] border border-[#0F0F0F] flex items-center justify-center shadow-lg p-1">
            <svg viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <text x="20" y="16" fill="white" fontSize="11" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="-0.4">amazon</text>
              <path d="M6 22 Q 20 27, 34 22" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path d="M31 19.5 L 34 22 L 31.5 24.5" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <span className="text-[10px] font-semibold text-white/70">Seller Central</span>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#98CC65]/70 whitespace-nowrap" style={{ fontFamily: monoFont, bottom: '22%' }}>
        SP-API · OAuth · Encrypted
      </div>
    </div>
  );
}

const PERMISSION_MODES = [
  { id: 'read-only',  label: 'Read-only',  desc: 'DragonBot can only pull data and generate reports. It cannot make any changes to your accounts.' },
  { id: 'supervised', label: 'Supervised', desc: 'DragonBot can take actions, but asks for your approval first. Nothing happens without your say-so.' },
  { id: 'autonomous', label: 'Autonomous', desc: 'DragonBot handles routine tasks on its own. It only escalates edge cases and high-stakes decisions.' },
];

function PermissionsDemo() {
  const [selected, setSelected] = useState('read-only');
  const mode = PERMISSION_MODES.find(m => m.id === selected);
  const [clicked, setClicked] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col px-4 py-3" style={{ backgroundColor: '#1A1D21', borderRadius: '0 0 16px 16px', fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <AnimatePresence>
        {!clicked && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none z-10">
            <span className="text-[#98CC65] text-[10px] font-bold uppercase tracking-widest" style={{ fontFamily: monoFont }}>Click here</span>
            <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}>
              <svg width="16" height="18" viewBox="0 0 7 10" fill="none" style={{ imageRendering: 'pixelated' }}>
                <rect x="2" y="0" width="3" height="4" fill="#2E7E4F"/>
                <rect x="0" y="4" width="7" height="1" fill="#2E7E4F"/>
                <rect x="1" y="5" width="5" height="1" fill="#2E7E4F"/>
                <rect x="2" y="6" width="3" height="1" fill="#2E7E4F"/>
                <rect x="3" y="7" width="1" height="1" fill="#2E7E4F"/>
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex rounded-lg overflow-hidden border border-white/10 mb-3">
        {PERMISSION_MODES.map(m => (
          <button key={m.id} onClick={() => { setSelected(m.id); setClicked(true); }}
            className={`flex-1 py-1.5 text-[10px] font-semibold transition-all ${
              selected === m.id ? 'bg-[#2F7D4F] text-white' : 'bg-white/5 text-white/40 hover:text-white/60'
            }`}>
            {m.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.p key={selected} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }}
          className="text-[11px] leading-relaxed text-white/50">
          {mode.desc}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

const APPROVAL_ACTIONS = [
  { text: 'Creating FBA shipping plan 6XUQQQ5L', time: '3:41 PM' },
  { text: 'Reducing price for "Premium Garlic Pre..." ASIN B001CUWUO7 to $26.99', time: '3:42 PM' },
];

function ApprovalDemo() {
  const [step, setStep] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const delays = [1500, 800, 600, 1500, 800, 600, 2000];
    const advance = () => {
      setStep(s => {
        const next = s >= 6 ? 0 : s + 1;
        timerRef.current = setTimeout(advance, delays[next] || 1500);
        return next;
      });
    };
    timerRef.current = setTimeout(advance, delays[0]);
    return () => clearTimeout(timerRef.current);
  }, []);

  const containerRef = useRef(null);
  const approveRef = useRef(null);
  const rejectRef = useRef(null);
  const [cursorXY, setCursorXY] = useState({ x: 0, y: 0 });
  const cursorVisible = step === 1 || step === 4;

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    if (step === 1 && approveRef.current) {
      const btn = approveRef.current.getBoundingClientRect();
      setCursorXY({ x: btn.left - container.left + btn.width / 2, y: btn.top - container.top + btn.height / 2 });
    } else if (step === 4 && rejectRef.current) {
      const btn = rejectRef.current.getBoundingClientRect();
      setCursorXY({ x: btn.left - container.left + btn.width / 2, y: btn.top - container.top + btn.height / 2 });
    }
  }, [step]);

  const renderAction = (idx, action, decided, isApproved) => (
    <div className="flex gap-2 px-3 py-1.5" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div className="shrink-0 w-7 h-7 rounded flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#3A3A3A' }}>
        <img src="/DragonBot-avatar.png" className="w-5 h-5 object-contain" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-1.5 mb-0.5">
          <span className="font-black text-[11px]" style={{ color: '#D1D2D3' }}>DragonBot</span>
          <span className="text-[9px] font-bold text-white px-1 py-px rounded" style={{ backgroundColor: '#2F7D4F' }}>APP</span>
          <span className="text-[9px]" style={{ color: '#9B9C9E' }}>{action.time}</span>
        </div>
        <div className="text-[11px] leading-relaxed mb-1.5" style={{ color: '#D1D2D3' }}>{action.text}</div>
        <div className="flex gap-1.5">
          {decided ? (
            isApproved ? (
              <>
                <span className="px-3 py-1 rounded text-[10px] font-bold text-white" style={{ backgroundColor: '#2F7D4F' }}>✓ Approved</span>
                <span className="px-3 py-1 rounded text-[10px] font-bold" style={{ backgroundColor: '#3A3A3A', color: '#6B6B6B' }}>Reject</span>
              </>
            ) : (
              <>
                <span className="px-3 py-1 rounded text-[10px] font-bold" style={{ backgroundColor: '#3A3A3A', color: '#6B6B6B' }}>Approve</span>
                <span className="px-3 py-1 rounded text-[10px] font-bold text-white" style={{ backgroundColor: '#DC2626' }}>✗ Rejected</span>
              </>
            )
          ) : (
            <>
              <button ref={idx === 0 ? approveRef : null} className="px-3 py-1 rounded text-[10px] font-bold text-white cursor-default" style={{ backgroundColor: '#2F7D4F' }}>Approve</button>
              <button ref={idx === 1 ? rejectRef : null} className="px-3 py-1 rounded text-[10px] font-bold text-white cursor-default" style={{ backgroundColor: '#DC2626' }}>Reject</button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="relative w-full h-full flex flex-col justify-end gap-1 py-2" style={{ backgroundColor: '#1A1D21', borderRadius: '0 0 16px 16px' }}>
      <AnimatePresence mode="popLayout">
        {step >= 0 && (
          <motion.div key="action-0" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {renderAction(0, APPROVAL_ACTIONS[0], step >= 2, true)}
          </motion.div>
        )}
        {step >= 3 && (
          <motion.div key="action-1" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {renderAction(1, APPROVAL_ACTIONS[1], step >= 5, false)}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div className="absolute pointer-events-none z-10" style={{ left: 0, top: 0 }}
        animate={{ x: cursorXY.x, y: cursorXY.y, opacity: cursorVisible ? 1 : 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 150 }}>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M1 1L1 14.5L4.5 11L8.5 18L10.5 17L6.5 10L11 10L1 1Z" fill="white" stroke="#222" strokeWidth="1"/>
        </svg>
      </motion.div>
    </div>
  );
}

/* ─── Final dragon CTA (copied from LandingV3) ─── */
const BUBBLE_PHRASES = [
  'What are you waiting for?',
  'Plug me into your AI.',
  'A Dragon\’s work is never done... 🐉',
  'Ready to slay some tasks?',
  'Let’s conquer your to-do list!',
  'DragonBot: because you have better things to do.',
];

function DragonFinalCTA() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % BUBBLE_PHRASES.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="relative mb-2">
        <div className="px-10 py-6 text-2xl font-black uppercase tracking-widest"
          style={{
            backgroundColor: '#FFFFFF', color: '#0F0F0F', fontFamily: monoFont,
            border: '6px solid #0F0F0F', boxShadow: '0 8px 0 0 rgba(0,0,0,0.3)',
            minWidth: '420px', textAlign: 'center',
          }}>
          <AnimatePresence mode="wait">
            <motion.span key={idx} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }} className="inline-block">
              {BUBBLE_PHRASES[idx]}
            </motion.span>
          </AnimatePresence>
        </div>
        <svg width="48" height="36" viewBox="0 0 12 9" fill="none" className="absolute -bottom-[30px]"
          style={{ left: '80%', transform: 'translateX(-50%)', imageRendering: 'pixelated' }}>
          <rect x="3" y="0" width="6" height="2" fill="#FFFFFF" />
          <rect x="4" y="2" width="4" height="1" fill="#FFFFFF" />
          <rect x="5" y="3" width="2" height="1" fill="#FFFFFF" />
          <rect x="3" y="0" width="1" height="2" fill="#0F0F0F" />
          <rect x="8" y="0" width="1" height="2" fill="#0F0F0F" />
          <rect x="3" y="2" width="1" height="1" fill="#0F0F0F" />
          <rect x="4" y="2" width="1" height="1" fill="#0F0F0F" />
          <rect x="7" y="2" width="1" height="1" fill="#0F0F0F" />
          <rect x="8" y="2" width="1" height="1" fill="#0F0F0F" />
          <rect x="4" y="3" width="1" height="1" fill="#0F0F0F" />
          <rect x="5" y="3" width="1" height="1" fill="#0F0F0F" />
          <rect x="6" y="3" width="1" height="1" fill="#0F0F0F" />
          <rect x="7" y="3" width="1" height="1" fill="#0F0F0F" />
          <rect x="5" y="4" width="1" height="1" fill="#0F0F0F" />
          <rect x="6" y="4" width="1" height="1" fill="#0F0F0F" />
        </svg>
      </div>
      <img src="/DragonBot-logo.png" alt="DragonBot" className="w-auto" style={{ height: '168px' }} />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE — doubles as the template for Google Ads feature pages.

   Pass a `page` object (from src/data/lpPages.js, template:'feature')
   to override the hero + chat demo while keeping every other section
   identical to the homepage:
     page.hero.segments  → [{ text, color: 'orange'|'white'|'green' }]
     page.hero.paragraph → hero subhead
     page.demo.feature   → "Amazon repricing" (renders "Your X with DragonBot")
     page.demo.script    → chat messages [{who, text, tool?, stats?}]
   ═══════════════════════════════════════════════════════════════ */
const SEG_CLASS = {
  orange: 'bg-gradient-to-r from-[#FF9900] to-[#FFC266] bg-clip-text text-transparent',
  green: 'bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent',
  white: 'text-white',
};

export default function LandingV4({ page = null }) {
  useEffect(() => {
    if (!page) return;
    document.title = page.metaTitle;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', page.metaDescription);
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="v2-page min-h-screen bg-[#0F0F0F] text-white" style={{ fontFamily: sysFont }}>
      <style>{`
        .v2-page h1,.v2-page h2,.v2-page h3,.v2-page h4,.v2-page h5,.v2-page h6{font-family:inherit!important}
      `}</style>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#98CC65]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-[#2F7D4F]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow>
              Works with{' '}
              <span style={{ fontWeight: 700 }}>Claude</span>,{' '}
              <span style={{ fontWeight: 700 }}>ChatGPT</span>,{' '}
              <span style={{ fontWeight: 700 }}>Cursor</span>, and any AI
            </Eyebrow>

            <h1 className="font-extrabold text-[40px] sm:text-[56px] lg:text-[72px] text-white leading-[1.05] tracking-[-0.035em] mb-6">
              {page?.hero?.segments ? (
                page.hero.segments.map((seg, i) => (
                  <span key={i}>
                    <span className={SEG_CLASS[seg.color] || SEG_CLASS.white}>{seg.text}</span>
                    {i < page.hero.segments.length - 1 ? ' ' : ''}
                  </span>
                ))
              ) : (
                <>
                  Connect your AI to{' '}
                  <span className="bg-gradient-to-r from-[#FF9900] to-[#FFC266] bg-clip-text text-transparent">Amazon Seller Central.</span>{' '}
                  <span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">Free forever.</span>
                </>
              )}
            </h1>

            <p className="text-[17px] sm:text-[19px] text-white/55 max-w-2xl mx-auto mb-10 leading-[1.6] tracking-[-0.01em]">
              {page?.hero?.paragraph || 'Give your AI chat secure access to your Amazon data — orders, ads, inventory, reviews, customer messages, and more. Plug DragonBot into Claude, ChatGPT, Cursor, or any MCP client in seconds.'}
            </p>

            {/* 4 connect buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto mb-10">
              {HOSTS.map(h => (
                <a key={h.id} href="https://app.getdragonbot.com/sign-up"
                  className="flex items-center justify-center gap-2.5 px-4 py-3.5 bg-white/5 hover:bg-[#2F7D4F]/15 border border-white/15 hover:border-[#98CC65]/40 rounded-lg transition-all text-[13px] sm:text-sm font-semibold text-white/85 hover:text-white cursor-pointer">
                  <HostMark host={h} size={20} />
                  <span>Connect Amazon Seller Central to {h.id === 'other' ? 'any MCP client' : h.label}</span>
                </a>
              ))}
            </div>

            {/* Trust strip — legit reassurance */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] font-medium tracking-[-0.01em]">
              <a href="https://sellercentral.amazon.com/selling-partner-appstore/dp/amzn1.sp.solution.d78b7343-017b-4e68-92e4-a1defb51aa6f"
                target="_blank" rel="noopener noreferrer"
                title="View DragonBot on Amazon.com"
                className="flex items-center gap-2 text-[#98CC65] hover:text-white transition-colors">
                <BadgeCheck className="w-4 h-4" />
                <span className="underline decoration-[#98CC65]/40 underline-offset-2">Amazon approved</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <span className="flex items-center gap-2 text-white/50">
                <Shield className="w-4 h-4 text-[#2F7D4F]" />
                Amazon ToS Compliant
              </span>
              <span className="flex items-center gap-2 text-white/50">
                <DollarSign className="w-4 h-4 text-[#2F7D4F]" />
                Basic plan is <strong className="font-bold text-[#98CC65]" style={{ fontFamily: monoFont }}>FREE FOREVER</strong>
              </span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 text-center">
            <p className="text-[15px] font-semibold text-white/60 mb-2">We sell on Amazon too</p>
            <p className="text-[11px] font-medium text-white/50 uppercase tracking-[0.15em]">10 years on Amazon · 8 figures sold · DragonBot is the employee we always wanted</p>
          </motion.div>
        </div>
      </section>

      {/* ─── YOUR AI WITH DRAGONBOT (chat demo) ─── */}
      <Section id="your-ai" className="!py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="flex justify-center">
          <ChatDemo key={page?.path || 'home'} script={page?.demo?.script || CHAT_SCRIPT} feature={page?.demo?.feature || null} />
        </motion.div>
      </Section>

      {/* ─── SELLER VIDEOS ─── */}
      <Section id="seller-videos">
        <div className="text-center mb-10">
          <h4 className="font-extrabold text-2xl sm:text-3xl tracking-[-0.03em]">
            See what <span className="bg-gradient-to-r from-[#FF9900] to-[#FFC266] bg-clip-text text-transparent">Amazon Sellers</span> have been building with{' '}
            <span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">DragonBot</span>
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {sellerVideos.map(v => (
            <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden border border-white/10 hover:border-[#2F7D4F]/40 transition-all hover:shadow-lg hover:shadow-[#2F7D4F]/10 group">
              <div className="relative aspect-video">
                <img src={`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`} alt={v.title} className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`; }} />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#2F7D4F] flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                  </div>
                </div>
                {v.duration && (
                  <span className="absolute bottom-2 left-2 text-[11px] font-semibold text-white bg-black/80 px-1.5 py-0.5 rounded">
                    {v.duration}
                  </span>
                )}
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-white/80 leading-snug">{v.title}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* ─── WHAT'S IN THE BOX ─── */}
      <Section id="whats-in-the-box">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-3" style={{ fontFamily: monoFont }}>
            What you get
          </p>
          <h4 className="font-extrabold text-2xl sm:text-3xl tracking-[-0.03em]">
            Here is what{' '}
            <span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">DragonBot gives you.</span>
          </h4>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#2F7D4F]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#2F7D4F]/15 border border-[#2F7D4F]/30 flex items-center justify-center text-[#98CC65] mb-4">
                {p.icon}
              </div>
              <h3 className="font-bold text-xl text-white mb-2">{p.title}</h3>
              <p className="text-[14px] text-white/55 leading-relaxed mb-4">{p.desc}</p>
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#98CC65]/80 bg-[#2F7D4F]/10 border border-[#2F7D4F]/30 rounded-full px-2.5 py-1" style={{ fontFamily: monoFont }}>
                {p.badge}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── WHY ETL ─── */}
      <Section id="why-etl">
        <div className="text-center mb-10">
          <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-3" style={{ fontFamily: monoFont }}>
            Why ETL?
          </p>
          <h4 className="font-extrabold text-2xl sm:text-3xl tracking-[-0.03em]">
            Other MCP servers wait on SP-API.{' '}
            <span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">We don't.</span>
          </h4>
          <p className="mt-4 text-base text-white/50 max-w-2xl mx-auto">
            Live SP-API calls are rate-limited, latent, and brittle. We pre-pull everything so your AI gets answers the moment you ask.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <div className="bg-red-950/20 border border-red-900/30 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-red-300/70" style={{ fontFamily: monoFont }}>Other MCP servers</span>
            </div>
            <ul className="space-y-2.5 text-[14px] text-white/70">
              <li className="flex gap-2"><X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> Hit SP-API live on every query</li>
              <li className="flex gap-2"><X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> Burn your SP-API rate limits</li>
              <li className="flex gap-2"><X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> Multi-second latency per tool call</li>
              <li className="flex gap-2"><X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> One report can take minutes</li>
              <li className="flex gap-2"><X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> Cross-source joins (SQP + ads + reviews) are slow and clunky</li>
            </ul>
          </div>
          <div className="bg-[#2F7D4F]/10 border border-[#2F7D4F]/30 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <img src="/DragonBot-logo.png" alt="DragonBot" className="w-5 h-5 object-contain" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#98CC65]" style={{ fontFamily: monoFont }}>DragonBot</span>
            </div>
            <ul className="space-y-2.5 text-[14px] text-white/85">
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#98CC65] mt-0.5 shrink-0" /> Continuously ETL'd to our warehouse</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#98CC65] mt-0.5 shrink-0" /> Sub-second response per tool call</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#98CC65] mt-0.5 shrink-0" /> Your rate limits stay untouched</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#98CC65] mt-0.5 shrink-0" /> Pre-joined views across orders, ads, SQP, reviews</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#98CC65] mt-0.5 shrink-0" /> Historical depth without re-pulling</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ─── SKILLS ─── */}
      <Section id="skills">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-3" style={{ fontFamily: monoFont }}>
            Skills
          </p>
          <h4 className="font-extrabold text-2xl sm:text-3xl tracking-[-0.03em] mb-4">
            Pre-built workflows your{' '}
            <span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">AI runs on command.</span>
          </h4>
          <p className="text-base text-white/50 max-w-2xl mx-auto">
            Skills wrap real Amazon work — audits, analyses, alerts, reports — so your AI delivers finished output, not a prompt-engineering project.
          </p>
        </div>
        <SkillsShowcase />
      </Section>

      {/* ─── SECURITY ─── */}
      <Section id="security">
        <div className="text-center mb-14">
          <h4 className="font-extrabold text-2xl sm:text-3xl tracking-[-0.03em]">
            Let's talk <span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">security</span> and <span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">accountability</span>
          </h4>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            Your Amazon account is your business. We treat it that way.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Check className="w-6 h-6" />, title: 'Amazon SP-API Connection', desc: '100% Amazon terms-of-service compliant. Official SP-API only. No scraping. No gray areas.' },
            { icon: <Brain className="w-6 h-6" />, title: 'Permissions you control', subtitle: '✓ Read-only by default', desc: 'Read-only, supervised, or autonomous. You choose.' },
            { icon: <Zap className="w-6 h-6" />, title: 'Supervised mode', desc: 'DragonBot asks before touching your account. Send a refund? Pause a campaign? You decide.' },
            { icon: <Database className="w-6 h-6" />, title: 'Full audit trail', desc: 'Every action logged — what, when, and why.' },
          ].map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#2F7D4F]/30 hover:shadow-lg hover:shadow-[#2F7D4F]/5 transition-all flex flex-col">
              <div className="p-6 pb-4">
                <h3 className="font-bold text-xl mb-1">{f.title}</h3>
                {f.subtitle && <p className="text-[#98CC65] text-sm font-semibold mb-1">{f.subtitle}</p>}
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
              <div className="mt-auto">
                {f.title === 'Supervised mode' ? (
                  <div className="w-full h-44"><ApprovalDemo /></div>
                ) : f.title === 'Permissions you control' ? (
                  <div className="w-full h-36"><PermissionsDemo /></div>
                ) : f.title === 'Full audit trail' ? (
                  <div className="w-full h-52"><AuditTrailDemo /></div>
                ) : f.title === 'Amazon SP-API Connection' ? (
                  <div className="w-full h-36"><SPAPIConnectionDemo /></div>
                ) : (
                  <div className="w-full h-36 bg-gradient-to-b from-white/5 to-white/10 flex items-end justify-center">
                    <span className="text-xs text-white/20 mb-4">Illustration</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── PLANS ─── */}
      <Section id="plans">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-3" style={{ fontFamily: monoFont }}>
            Plans
          </p>
          <h4 className="font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] leading-tight">
            Start free.{' '}
            <span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">Upgrade when you're ready.</span>
          </h4>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Free Forever */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-3" style={{ fontFamily: monoFont }}>Basic</p>
              <h3 className="font-extrabold text-2xl text-white mb-1">Free forever</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-white/40 text-sm">/ month</span>
              </div>
              <p className="mt-3 text-sm text-white/55 leading-relaxed">
                Read-only access. Pull data, run analyses, build reports — as much as you want.
              </p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                'Every skill, read-only',
                'Always-fresh ETL\'d data',
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

          {/* Read + Write (Beta) — emphasized */}
          <div className="relative bg-gradient-to-b from-[#2F7D4F]/15 to-[#0F0F0F] border-2 border-[#2F7D4F]/50 rounded-2xl p-8 flex flex-col shadow-2xl shadow-[#2F7D4F]/10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] text-[#0F0F0F] text-[10px] font-bold uppercase tracking-widest rounded-full" style={{ fontFamily: monoFont }}>
              Private beta
            </div>
            <div className="mb-6">
              <p className="text-[11px] font-bold text-[#98CC65] uppercase tracking-[0.2em] mb-3" style={{ fontFamily: monoFont }}>Read + Write</p>
              <h3 className="font-extrabold text-2xl text-white mb-1">Take actions on Amazon</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">$50</span>
                <span className="text-white/40 text-sm">/ month</span>
              </div>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">
                Everything in Free, plus your AI can take action — pause campaigns, send refunds, edit listings, and more.
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
      </Section>

      {/* ─── FINAL DRAGON CTA ─── */}
      <section className="pt-0 pb-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
          <DragonFinalCTA />
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#0F3D2E] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2.5">
              <img src="/DragonBot-logo.png" alt="DragonBot" className="h-8" />
              <span className="font-bold text-lg text-white">DragonBot</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="/" className="text-sm text-white/50 hover:text-white transition-colors">Product</a>
              <a href="/pricing" className="text-sm text-white/50 hover:text-white transition-colors">Pricing</a>
              <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">Privacy</a>
              <a href="/tos" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">Terms</a>
              <a href="/support" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">Support</a>
              <a href="mailto:info@getdragonbot.com" className="text-sm text-white/50 hover:text-white transition-colors">info@getdragonbot.com</a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-white/30">&copy; {new Date().getFullYear()} Chacha Advisory LLC. All rights reserved.</p>
              <p className="text-xs text-white/20 mt-1">30 N Gould St Ste R, Sheridan, WY 82801, USA</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
