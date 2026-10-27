import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BOOKING_URL } from './TopBar';

export const StickyBottomBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#18181B]/95 backdrop-blur-md border-t border-[#27272A] p-3 px-4 shadow-2xl flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="text-xs font-bold text-white truncate font-heading">
          NirmanReply
        </p>
        <p className="text-[10px] text-[#F6F5F1]/70 truncate">
          The Quote Reply Fix
        </p>
      </div>

      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-[#18181B] bg-[#FFB020] hover:bg-[#ffb936] active:scale-95 transition-all rounded-full shadow-md shrink-0 whitespace-nowrap"
      >
        <span>Book a free audit call</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  );
};
