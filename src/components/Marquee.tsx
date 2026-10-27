import React from 'react';

const ROW1_ITEMS = [
  'The Quote Reply Fix',
  'Instant Finish Rate Reply',
  'Automated Site Visit Booking',
  'Lost Inquiry Recovery',
];

const ROW2_ITEMS = [
  'FOR SMALL BUILDERS AND CONSTRUCTION CONTRACTORS',
  'KAKINADA',
  'RUNS ON YOUR WHATSAPP',
];

export const Marquee: React.FC = () => {
  return (
    <section
      aria-label="Service Highlights"
      className="w-full bg-[#0F0F11] border-b border-[#27272A] py-6 sm:py-8 overflow-hidden select-none marquee-container"
    >
      <div className="flex flex-col gap-4 sm:gap-6">
        {/* Row 1: Leftward moving, big and bold in white, Space Grotesk */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee-left flex items-center gap-6 whitespace-nowrap">
            {[...ROW1_ITEMS, ...ROW1_ITEMS, ...ROW1_ITEMS, ...ROW1_ITEMS].map((item, idx) => (
              <div key={`r1-${idx}`} className="flex items-center gap-6">
                <span className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {item}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFB020] shrink-0" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward moving, half size, uppercase, wide letter spacing, off-white 60% */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee-right flex items-center gap-6 whitespace-nowrap">
            {[...ROW2_ITEMS, ...ROW2_ITEMS, ...ROW2_ITEMS, ...ROW2_ITEMS, ...ROW2_ITEMS, ...ROW2_ITEMS].map((item, idx) => (
              <div key={`r2-${idx}`} className="flex items-center gap-6">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#F6F5F1]/60">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB020] shrink-0" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
