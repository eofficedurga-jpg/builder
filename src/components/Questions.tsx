import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Who is this for?',
    answer:
      'This is for small builders and construction contractors in Kakinada who want to stop losing house building inquiries.',
  },
  {
    question: 'What does it cost?',
    answer:
      'It depends on your business. You get a plan and a price on the free audit call.',
  },
  {
    question: 'What do you set up?',
    answer:
      'We set up The Quote Reply Fix for Kakinada house builders. When a form or ad lead comes in, WhatsApp goes back to that family at once with your basic finish rate and a time to visit the site.',
  },
  {
    question: 'How do you start?',
    answer:
      'Book your free audit call using the calendar link on this page. We review your current lead process and design your WhatsApp flow.',
  },
];

export const Questions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="questions" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#E4E2DC]">
      <div className="mb-12 sm:mb-16">
        <span className="text-xs font-bold uppercase tracking-wider text-[#18181B]/60 mb-2 block">
          Direct answers
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#18181B] leading-tight">
          Questions
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#18181B]/80 leading-relaxed">
          Everything you need to know before our initial conversation.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-[24px] border border-[#E4E2DC] overflow-hidden shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left font-heading text-lg sm:text-xl font-bold text-[#18181B] hover:text-black transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span
                  className={`w-9 h-9 rounded-full bg-[#F6F5F1] text-[#18181B] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#FFB020]' : ''
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-1 text-sm sm:text-base text-[#18181B]/80 leading-relaxed border-t border-[#F6F5F1]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
