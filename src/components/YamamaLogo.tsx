import React, { useState } from 'react';

interface YamamaLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  withText?: boolean;
  withBadgeGlow?: boolean;
}

const sizeClasses = {
  xs: 'w-8 h-8',
  sm: 'w-11 h-11',
  md: 'w-14 h-14',
  lg: 'w-20 h-20',
  xl: 'w-28 h-28',
  '2xl': 'w-36 h-36',
};

export const YamamaLogo: React.FC<YamamaLogoProps> = ({
  size = 'md',
  className = '',
  withText = false,
  withBadgeGlow = false,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Logo Badge Container */}
      <div
        className={`relative ${sizeClasses[size]} rounded-full overflow-hidden p-0.5 transition-transform duration-300 hover:scale-105 shrink-0 select-none ${
          withBadgeGlow ? 'shadow-xl shadow-[#FFD21F]/20' : ''
        }`}
      >
        {/* Outer Ring Accent */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFD21F] via-[#E21B23] to-[#FFD21F] animate-spin-slow opacity-80" />

        {/* Inner Container */}
        <div className="relative w-full h-full rounded-full bg-[#0B0B0B] overflow-hidden border border-white/20 flex items-center justify-center">
          {!imageError ? (
            <img
              src="/src/assets/images/yamama_shawaya_logo_1790233261059.jpg"
              alt="YAMAMA SHAWAYA Logo - Refill Your Energy"
              onError={() => setImageError(true)}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform scale-102"
            />
          ) : (
            /* Scalable Vector SVG Fallback Recreating the Exact Mascot Badge */
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Golden Border */}
              <circle cx="100" cy="100" r="96" fill="#FFD21F" stroke="#0B0B0B" strokeWidth="4" />
              
              {/* Red Inner Circle */}
              <circle cx="100" cy="100" r="82" fill="#E21B23" stroke="#FFFFFF" strokeWidth="3" />
              
              {/* Dark Core */}
              <circle cx="100" cy="85" r="54" fill="#141414" />
              
              {/* 3 Gold Stars */}
              <polygon points="50,60 52,65 57,65 53,68 54,73 50,70 46,73 47,68 43,65 48,65" fill="#FFD21F" />
              <polygon points="40,75 42,80 47,80 43,83 44,88 40,85 36,88 37,83 33,80 38,80" fill="#FFD21F" />
              <polygon points="45,95 47,100 52,100 48,103 49,108 45,105 41,108 42,103 38,100 43,100" fill="#FFD21F" />

              {/* Chef Chicken Mascot */}
              {/* Chef Hat */}
              <path
                d="M85 42 C80 32 100 25 110 32 C120 25 135 32 130 44 C138 48 135 58 128 60 C120 62 95 62 88 58 C82 54 80 46 85 42 Z"
                fill="#FFFFFF"
                stroke="#1A1A1A"
                strokeWidth="3"
              />
              <path d="M92 56 L124 56" stroke="#C0C0C0" strokeWidth="3" strokeLinecap="round" />

              {/* Red Comb */}
              <path d="M115 48 C122 42 130 50 126 58 Z" fill="#E21B23" />

              {/* Head & Body */}
              <circle cx="105" cy="72" r="18" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="3" />
              {/* Eyes */}
              <ellipse cx="101" cy="68" rx="2.5" ry="4" fill="#0B0B0B" />
              <ellipse cx="111" cy="68" rx="2.5" ry="4" fill="#0B0B0B" />
              {/* Beak */}
              <polygon points="106,73 118,77 106,84" fill="#FFD21F" stroke="#0B0B0B" strokeWidth="2" />
              {/* Red Neckerchief */}
              <path d="M96 85 C100 95 118 95 120 85 C115 90 102 90 96 85 Z" fill="#E21B23" />

              {/* Silver Cloche (Serving Platter Dome) */}
              <path
                d="M135 72 C135 56 165 56 165 72 Z"
                fill="#C0C0C0"
                stroke="#1A1A1A"
                strokeWidth="2.5"
              />
              {/* Cloche Handle */}
              <circle cx="150" cy="54" r="3" fill="#C0C0C0" stroke="#1A1A1A" strokeWidth="2" />
              {/* Platter Base */}
              <rect x="130" y="72" width="40" height="4" rx="2" fill="#E0E0E0" stroke="#1A1A1A" strokeWidth="2" />

              {/* 'Yamama' Text Banner */}
              <text
                x="100"
                y="125"
                textAnchor="middle"
                fill="#FFD21F"
                stroke="#0B0B0B"
                strokeWidth="4"
                paintOrder="stroke fill"
                fontSize="30"
                fontWeight="900"
                fontFamily="'Syne', sans-serif"
              >
                Yamama
              </text>

              {/* 'shawaya' Pill */}
              <rect x="55" y="132" width="90" height="18" rx="9" fill="#0B0B0B" stroke="#FFD21F" strokeWidth="1.5" />
              <text
                x="100"
                y="145"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="12"
                fontWeight="700"
                fontFamily="'Plus Jakarta Sans', sans-serif"
              >
                • shawaya •
              </text>

              {/* 'REFILL YOUR ENERGY' Curved text area */}
              <text
                x="100"
                y="172"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="9"
                letterSpacing="1"
                fontWeight="800"
                fontFamily="'Plus Jakarta Sans', sans-serif"
              >
                REFILL YOUR ENERGY
              </text>
            </svg>
          )}
        </div>
      </div>

      {/* Optional Adjacent Wordmark */}
      {withText && (
        <div className="flex flex-col">
          <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white leading-none">
            YAMAMA <span className="text-[#FFD21F]">SHAWAYA</span>
          </span>
          <span className="text-[10px] tracking-widest text-[#C0C0C0] font-bold uppercase mt-1 flex items-center gap-1.5">
            <span className="text-[#E21B23] font-extrabold">•</span>
            <span>Refill Your Energy</span>
            <span className="text-[#E21B23] font-extrabold">•</span>
          </span>
        </div>
      )}
    </div>
  );
};
