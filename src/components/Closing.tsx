import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { BOOKING_URL } from './TopBar';

export const Closing: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Closing Section with place.jpg under dark color layer */}
      <section className="relative overflow-hidden bg-[#18181B] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#27272A]">
        {/* Background photo: place.jpg */}
        <div className="absolute inset-0 z-0">
          <img
            src="/place.jpg"
            alt="Interior view of modern house builder studio in Kakinada"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {/* Dark colour layer over photo */}
          <div className="absolute inset-0 bg-[#18181B]/85 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFB020] block">
              Start today
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Stop losing house building contracts in Kakinada.
            </h2>

            <p className="text-base sm:text-lg text-[#F6F5F1]/80 max-w-2xl mx-auto leading-relaxed">
              Every inquiry that waits for a quote is another family speaking with a rival builder. Lock in your audit call today.
            </p>

            <div className="pt-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 text-base font-bold text-[#18181B] bg-[#FFB020] hover:bg-[#ffb936] active:scale-95 transition-all rounded-full shadow-xl shadow-[#FFB020]/20"
              >
                <span>Book a free audit call</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F11] text-[#F6F5F1] border-t border-[#27272A] py-12 px-4 sm:px-6 lg:px-8 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & City */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <Logo lightText={true} />
            <span className="hidden sm:inline text-xs text-[#F6F5F1]/40">|</span>
            <span className="text-xs font-medium uppercase tracking-widest text-[#F6F5F1]/70">
              Kakinada, Andhra Pradesh
            </span>
          </div>

          {/* Navigation links mirror */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center items-center gap-6 text-xs text-[#F6F5F1]/70">
            <a href="#changes" className="hover:text-white transition-colors">
              What changes
            </a>
            <a href="#sample-builds" className="hover:text-white transition-colors">
              Sample builds
            </a>
            <a href="#calculator" className="hover:text-white transition-colors">
              Lost value
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How it works
            </a>
            <a href="#founder" className="hover:text-white transition-colors">
              Founder
            </a>
            <a href="#questions" className="hover:text-white transition-colors">
              Questions
            </a>
          </nav>

          {/* Copyright notice */}
          <div className="text-xs text-[#F6F5F1]/50 text-center sm:text-right">
            © {new Date().getFullYear()} NirmanReply. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};
