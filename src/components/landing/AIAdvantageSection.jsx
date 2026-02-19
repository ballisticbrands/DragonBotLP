import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rotatingPhrases = [
  'creating better listing images than you',
  'responding to customers faster than you',
  'creating better social media content than you',
  'researching more products than you',
  'finding suppliers faster than you',
  'spending less on employees than you',
];

export default function AIAdvantageSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex(i => (i + 1) % rotatingPhrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#0F3D2E] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#98CC65] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#2F7D4F] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D63C3C]/20 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-[#D63C3C] animate-pulse" />
            <span className="text-xs font-satoshi font-medium text-[#D63C3C]">Don't get left behind</span>
          </div>

          <h2 className="font-clash font-semibold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Your business <span className="text-[#D63C3C]">NEEDS</span> AI
          </h2>

          {/* Rotating phrase */}
          <p className="mt-6 text-xl sm:text-2xl text-white/80 font-satoshi leading-relaxed">
            Your competitors are{' '}
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="inline-block font-semibold text-[#D63C3C]"
              >
                {rotatingPhrases[phraseIndex]}
              </motion.span>
            </AnimatePresence>
            {' '}using AI.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="font-clash font-bold text-5xl sm:text-6xl text-[#98CC65]">75%</div>
            <div className="text-lg text-white/70 font-satoshi mt-2">Less employees</div>
            <a
              href="https://amazingwave.digital/2023/11/28/exclusive-interview-kevin-king-on-ai-and-amazon/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-white/40 font-satoshi mt-2 hover:text-white/60 transition-colors"
            >
              Source — Kevin King (Billion Dollar Seller Summit founder)
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}