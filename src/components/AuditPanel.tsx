import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BOOKING_URL } from './TopBar';

const DELIVERABLES = [
  'Where you lose customers today',
  'What to automate first',
  'A clear price for your business',
];

export const AuditPanel: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden bg-[#18181B] text-[#F6F5F1] rounded-[24px] p-8 sm:p-12 lg:p-16 border border-[#27272A] shadow-2xl"
      >
        {/* Subtle decorative highlight aura */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#FFB020]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFB020] mb-3 block">
            Complimentary strategy session
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
            Get your AI growth plan in a free 1:1 call
          </h2>

          <div className="space-y-4 mb-10">
            {DELIVERABLES.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-[#27272A]/70 border border-[#3F3F46] rounded-2xl p-4 sm:p-5"
              >
                <div className="w-8 h-8 rounded-full bg-[#FFB020] text-[#18181B] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-[#18181B] bg-[#FFB020] hover:bg-[#ffb936] active:scale-95 transition-all rounded-full shadow-lg shadow-[#FFB020]/20 whitespace-nowrap"
          >
            <span>Book a free audit call</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
