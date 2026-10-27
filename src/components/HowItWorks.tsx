import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Calendar, FileText, Smartphone } from 'lucide-react';

interface Step {
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const STEPS: Step[] = [
  {
    stepNumber: '01',
    title: 'Book your free audit call',
    description: 'Select an available 30-minute slot on our calendar that fits around your construction site visits.',
    icon: Calendar,
  },
  {
    stepNumber: '02',
    title: 'Get your plan',
    description: 'We review where your firm loses prospective home builders today and map your automated reply flow.',
    icon: FileText,
  },
  {
    stepNumber: '03',
    title: 'We set it up on your WhatsApp',
    description: 'We connect your finish rate card, site visit calendar, and automated follow-ups directly to your number.',
    icon: Smartphone,
  },
];

export const HowItWorks: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E4E2DC]">
      <div className="max-w-3xl mb-16 sm:mb-20">
        <span className="text-xs font-bold uppercase tracking-wider text-[#18181B]/60 mb-2 block">
          Clear and simple
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#18181B] leading-tight">
          How it works
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#18181B]/80 leading-relaxed">
          Three straightforward steps to launch your automated quote reply system in Kakinada.
        </p>
      </div>

      <div className="relative">
        {/* Continuous highlight line connecting the steps */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#E4E2DC] -translate-y-8 z-0">
          <motion.div
            initial={shouldReduceMotion ? { width: '100%' } : { width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="h-full bg-[#FFB020]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="bg-white rounded-[24px] p-8 border border-[#E4E2DC] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFB020] text-[#18181B] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-heading text-2xl font-bold text-[#18181B]/30 tabular-nums">
                      {step.stepNumber}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#18181B] leading-snug mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#18181B]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
