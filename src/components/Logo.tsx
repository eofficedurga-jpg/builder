import React from 'react';

interface LogoProps {
  className?: string;
  markOnly?: boolean;
  lightText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', markOnly = false, lightText = false }) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Structural N architectural mark */}
      <svg
        className="w-8 h-8 shrink-0"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="NirmanReply Logo"
      >
        <rect width="32" height="32" rx="7" fill="#18181B" />
        {/* Left vertical pillar */}
        <rect x="7" y="7" width="4.5" height="18" rx="1" fill="#FFFFFF" />
        {/* Saffron diagonal support beam */}
        <path
          d="M10.5 8.5L21.5 23.5H18.5L7.5 8.5H10.5Z"
          fill="#FFB020"
        />
        {/* Right vertical pillar */}
        <rect x="20.5" y="7" width="4.5" height="18" rx="1" fill="#FFFFFF" />
      </svg>
      {!markOnly && (
        <span
          className={`font-heading text-xl font-bold tracking-tight whitespace-nowrap ${
            lightText ? 'text-[#F6F5F1]' : 'text-[#18181B]'
          }`}
        >
          NirmanReply
        </span>
      )}
    </div>
  );
};
