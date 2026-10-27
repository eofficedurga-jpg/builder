import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { BOOKING_URL } from './TopBar';

export const FOUNDER_PHOTO_SRC = 'https://dashboard.freedomwithai.com/api/hk/site-photo/UKc7j3wM4q4m0UfSNJknu_eM.webp';

export const Founder: React.FC = () => {
  const [imageError, setImageError] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="founder" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E4E2DC]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
        
        {/* Founder photo in 4:5 frame with rounded corners */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-[24px] overflow-hidden bg-[#18181B] border-2 border-[#E4E2DC] shadow-lg flex items-center justify-center">
            {!imageError ? (
              <img
                src={FOUNDER_PHOTO_SRC}
                alt="BITTA V V DURGA PRASAN, Founder of NirmanReply"
                width={400}
                height={500}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                <Logo markOnly={true} className="scale-150" />
                <span className="font-heading font-bold text-lg text-white">NirmanReply</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Founder Text & Details */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="md:col-span-7 flex flex-col space-y-6"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#18181B]/60 mb-2 block">
              Behind the system
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
              BITTA V V DURGA PRASAN
            </h2>
            <p className="font-heading text-lg sm:text-xl font-semibold text-[#18181B]/70 mt-1">
              Founder, NirmanReply
            </p>
          </div>

          <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-[#E4E2DC] shadow-sm">
            <p className="text-base sm:text-lg text-[#18181B] leading-relaxed">
              We help small builders and construction contractors in Kakinada stop losing house building contracts.
            </p>
          </div>

          <div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-[#18181B] bg-[#FFB020] hover:bg-[#ffb936] active:scale-95 transition-all rounded-full shadow-md"
            >
              <span>Book a free call with Durga</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
