import React from 'react';
import { Logo } from './Logo';

export const BOOKING_URL = 'https://cal.com/durga-eoffice-vbujrn/30min';

export const TopBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#18181B]/95 backdrop-blur-md border-b border-[#27272A] px-4 sm:px-6 lg:px-8 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">
        {/* Brand Zone */}
        <a href="#root" className="flex items-center gap-3 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB020] rounded-lg">
          <Logo lightText={true} />
        </a>

        {/* Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#F6F5F1]/80">
          <a href="#changes" className="hover:text-white transition-colors whitespace-nowrap">
            What changes
          </a>
          <a href="#sample-builds" className="hover:text-white transition-colors whitespace-nowrap">
            Sample builds
          </a>
          <a href="#calculator" className="hover:text-white transition-colors whitespace-nowrap">
            Lost value
          </a>
          <a href="#how-it-works" className="hover:text-white transition-colors whitespace-nowrap">
            How it works
          </a>
          <a href="#founder" className="hover:text-white transition-colors whitespace-nowrap">
            Founder
          </a>
          <a href="#questions" className="hover:text-white transition-colors whitespace-nowrap">
            Questions
          </a>
        </nav>

        {/* Primary Action Pill */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-[#18181B] bg-[#FFB020] hover:bg-[#ffb936] active:scale-95 transition-all rounded-full shadow-sm whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            Free audit call
          </a>
        </div>
      </div>
    </header>
  );
};
