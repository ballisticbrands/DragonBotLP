import React from 'react';
import { motion } from 'framer-motion';
import ChatWindow from './ChatWindow';
import IntegrationOrbit from './IntegrationOrbit';

const heroMessages = [
  { role: 'user', text: 'Hey Dragon, can you pull the top 20 keywords for my main product and drop them in a Google Sheet?' },
  { role: 'bot', text: 'On it! 🐉 Pulling keyword data from your Amazon listing now...' },
  { role: 'bot', text: 'Found 847 relevant keywords. Filtering for top 20 by search volume and relevance...' },
  { role: 'bot', text: 'Done! Here\'s your sheet: docs.google.com/spreadsheet/d/... — Top 20 keywords sorted by monthly search volume. Want me to also check which ones your competitors are ranking for?' },
  { role: 'user', text: 'Yes please! Check ASIN B09XYZ1234' },
  { role: 'bot', text: 'Analyzing competitor ASIN... They rank for 12 of your top 20. I\'ve highlighted the 8 keyword gaps in yellow — these are your biggest opportunities. 🔥' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4faf6] via-white to-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#98CC65]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2F7D4F]/10 rounded-full mb-8">
                <div className="w-2 h-2 rounded-full bg-[#98CC65] animate-pulse" />
                <span className="text-xs font-satoshi font-medium text-[#2F7D4F]">Now in early access</span>
              </div>

              <h1 className="font-clash font-semibold text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] tracking-tight text-[#1A1A1A]">
                Your AI-powered{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">
                    ecommerce assistant
                  </span>
                </span>
                <br />
                that actually gets work done.
              </h1>

              <p className="mt-6 text-lg text-[#1A1A1A]/60 font-satoshi leading-relaxed max-w-md">
                Chat naturally with DragonBot to handle keyword research, customer support, PPC, and more — connected to all your tools.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <a
                  href="#pricing"
                  className="px-7 py-3.5 bg-[#2F7D4F] hover:bg-[#256B42] text-white font-satoshi font-semibold rounded-full transition-all shadow-xl shadow-[#2F7D4F]/25 hover:shadow-[#2F7D4F]/35 hover:-translate-y-0.5"
                >
                  Start for free →
                </a>
                <a
                  href="#features"
                  className="px-7 py-3.5 border border-[#1A1A1A]/15 text-[#1A1A1A] font-satoshi font-medium rounded-full hover:border-[#2F7D4F]/40 hover:text-[#2F7D4F] transition-all"
                >
                  See it in action
                </a>
              </div>

              {/* Integration count */}
              <div className="mt-12 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['📁', '📊', '📦', '💬', '🌐'].map((emoji, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center text-sm">
                      {emoji}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-[#1A1A1A]/50 font-satoshi">
                  Connected to <span className="font-semibold text-[#2F7D4F]">266+</span> services
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right - Chat + Orbit */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Chat window */}
            <div className="relative z-10">
              <ChatWindow messages={heroMessages} className="w-full" />
            </div>

            {/* Orbit underneath on large screens */}
            <div className="hidden lg:block absolute -bottom-32 -right-16 w-[300px] opacity-60">
              <IntegrationOrbit />
            </div>
          </motion.div>
        </div>

        {/* Mobile orbit */}
        <div className="lg:hidden mt-16">
          <IntegrationOrbit />
        </div>
      </div>
    </section>
  );
}