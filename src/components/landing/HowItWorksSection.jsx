import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Choose Your Plan',
    description: 'Pick the plan that fits your business. Start with a free demo call or jump right in.',
  },
  {
    number: '2',
    title: 'We Set It Up For You',
    description: 'Our team configures DragonBot and helps you connect all your services — Amazon, Slack, Google Drive, and more.',
  },
  {
    number: '3',
    title: 'Start Using It',
    description: 'That\'s it. Start chatting with DragonBot and watch it handle the tasks that used to eat up your day.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-[#f9fafb]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-satoshi font-bold text-sm uppercase tracking-[2px] text-[#2F7D4F] mb-3">
            Simple Setup
          </p>
          <h2 className="font-clash font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] leading-tight">
            Up and Running in <span className="text-[#2F7D4F]">3 Easy Steps</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-white rounded-[20px] p-10 border border-gray-200 max-w-[300px] w-full text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-[52px] h-[52px] rounded-full bg-[#2F7D4F] text-white font-clash font-bold text-2xl flex items-center justify-center mx-auto mb-5">
                  {step.number}
                </div>
                <h3 className="font-clash font-semibold text-xl text-[#1A1A1A] mb-3">
                  {step.title}
                </h3>
                <p className="text-[15px] text-[#1A1A1A]/50 font-satoshi leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="flex-shrink-0 text-gray-300 rotate-90 md:rotate-0">
                  <svg viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-6">
                    <path d="M0 12h36m0 0l-8-8m8 8l-8 8"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}