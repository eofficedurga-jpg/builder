import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MessageSquareReply, CalendarCheck, UserCheck } from 'lucide-react';

interface ChangeCard {
  icon: React.ElementType;
  problemHeading: string;
  solutionText: string;
}

const CARDS: ChangeCard[] = [
  {
    icon: MessageSquareReply,
    problemHeading: 'You miss new house inquiries while you are on site',
    solutionText:
      'Your WhatsApp answers new ad and form leads at once with your basic finish rate card so families stop shopping around.',
  },
  {
    icon: CalendarCheck,
    problemHeading: 'Your site visits take days of phone tag to schedule',
    solutionText:
      'Every interested family receives an open calendar slot to walk the plot or house site directly in WhatsApp.',
  },
  {
    icon: UserCheck,
    problemHeading: 'You stop losing contracts to faster competitors',
    solutionText:
      'Families receive thoughtful follow-up notes before they speak with other contractors in Kakinada.',
  },
];

export const WhatChanges: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="changes" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-bold uppercase tracking-wider text-[#18181B]/60 mb-2 block">
          The transformation
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#18181B] leading-tight">
          What changes for you
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#18181B]/80 leading-relaxed">
          From unanswered inquiries to booked site visits on your phone while you run your job sites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {CARDS.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="bg-white rounded-[24px] p-7 sm:p-8 border border-[#E4E2DC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Big icon in rounded highlight tile */}
                <div className="w-14 h-14 rounded-2xl bg-[#FFB020] text-[#18181B] flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Problem heading starting with You or Your */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#18181B] leading-snug mb-4">
                  {card.problemHeading}
                </h3>

                {/* What changes for you */}
                <p className="text-sm sm:text-base text-[#18181B]/80 leading-relaxed">
                  {card.solutionText}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
