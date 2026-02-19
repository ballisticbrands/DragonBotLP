import React from 'react';
import { motion } from 'framer-motion';

const offerings = [
  {
    title: 'Access to All Advanced AI Tools in One Place',
    description: 'Stop juggling between ChatGPT, Claude, Midjourney, and a dozen other tools. DragonBot brings the best AI models together under one roof — accessible through a single, simple chat interface you already know how to use.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-[#2F7D4F]">
        <circle cx="24" cy="24" r="20"/><path d="M16 24l6 6 10-12"/>
      </svg>
    ),
  },
  {
    title: 'A 24/7/365 Virtual Ecommerce Assistant',
    description: 'DragonBot never sleeps, never takes a day off, and never needs a coffee break. Whether it\'s 3 AM or a holiday weekend, your AI assistant is always on and always ready to help — research, support, analysis, and more.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-[#2F7D4F]">
        <circle cx="24" cy="24" r="20"/><path d="M24 14v10l6 6"/>
      </svg>
    ),
  },
  {
    title: 'Coming Soon',
    description: 'We\'re working on something exciting for this spot. Stay tuned — more powerful capabilities are on the way.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-gray-300">
        <rect x="8" y="8" width="32" height="32" rx="4"/><path d="M18 20h12"/><path d="M18 28h8"/>
      </svg>
    ),
    placeholder: true,
  },
  {
    title: 'Coming Soon',
    description: 'We\'re working on something exciting for this spot. Stay tuned — more powerful capabilities are on the way.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-gray-300">
        <rect x="8" y="8" width="32" height="32" rx="4"/><path d="M18 20h12"/><path d="M18 28h8"/>
      </svg>
    ),
    placeholder: true,
  },
];

export default function OfferSection() {
  return (
    <section className="py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-satoshi font-bold text-sm uppercase tracking-[2px] text-[#2F7D4F] mb-3">
            What You Get
          </p>
          <h2 className="font-clash font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] leading-tight">
            Everything You Need to <span className="text-[#2F7D4F]">Dominate</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {offerings.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-[20px] p-8 border border-gray-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 mb-5">
                {item.icon}
              </div>
              <h3 className="font-clash font-semibold text-xl text-[#1A1A1A] leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-[15px] text-[#1A1A1A]/50 font-satoshi leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}