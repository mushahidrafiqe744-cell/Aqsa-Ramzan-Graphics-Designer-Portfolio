import React from 'react';

export const BotanicalLeafLeft = ({ className = "w-28 h-auto" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 190 Q40 120 50 20"
      stroke="#2D473B"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Leaves attached to stem */}
    <path
      d="M50 20 C65 20 80 40 70 55 C60 70 45 60 50 20 Z"
      fill="#435C4E"
      opacity="0.85"
    />
    <path
      d="M42 55 C20 40 10 65 20 80 C30 90 45 75 42 55 Z"
      fill="#385244"
      opacity="0.9"
    />
    <path
      d="M46 85 C75 75 90 98 75 115 C60 128 45 105 46 85 Z"
      fill="#435C4E"
      opacity="0.85"
    />
    <path
      d="M36 120 C10 110 5 140 20 152 C35 160 42 138 36 120 Z"
      fill="#385244"
      opacity="0.9"
    />
    <path
      d="M32 155 C55 145 70 170 55 185 C40 195 30 175 32 155 Z"
      fill="#435C4E"
      opacity="0.85"
    />
  </svg>
);

export const GoldSparkle = ({ className = "w-4 h-4 text-[#C99742]" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
);

export const SmallGoldStar = ({ className = "w-3 h-3 text-[#C99742]" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
  </svg>
);

export const AqsaLogoMark = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path
      d="M8 28C14 18 26 12 32 10M32 10C30 16 26 22 20 26M32 10C34 14 32 20 28 24M22 14C24 18 22 24 16 26"
      stroke="#C99742"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const SaniaLogoMark = AqsaLogoMark;

export const PsIcon = () => (
  <div className="w-11 h-11 rounded-lg bg-[#001E36] text-[#31A8FF] flex items-center justify-center font-bold text-lg shadow-sm border border-[#003459] select-none hover:scale-105 transition-transform">
    Ps
  </div>
);

export const AiIcon = () => (
  <div className="w-11 h-11 rounded-lg bg-[#330000] text-[#FF9A00] flex items-center justify-center font-bold text-lg shadow-sm border border-[#520000] select-none hover:scale-105 transition-transform">
    Ai
  </div>
);

export const CanvaIcon = () => (
  <div className="w-11 h-11 rounded-lg bg-gradient-to-tr from-[#00C4CC] via-[#7D2AE8] to-[#00C4CC] text-white flex items-center justify-center font-bold text-xs italic shadow-sm select-none hover:scale-105 transition-transform">
    Canva
  </div>
);

export const FigmaIcon = () => (
  <div className="w-11 h-11 rounded-lg bg-[#1E1E1E] flex items-center justify-center shadow-sm border border-[#2E2E2E] select-none hover:scale-105 transition-transform p-2">
    <svg viewBox="0 0 38 57" className="w-5 h-5">
      <path d="M19 28.5C19 23.25 23.25 19 28.5 19C33.75 19 38 23.25 38 28.5C38 33.75 33.75 38 28.5 38C23.25 38 19 33.75 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.25 4.25 38 9.5 38H19V47.5C19 52.75 14.75 57 9.5 57C4.25 57 0 52.75 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.75 19 38 14.75 38 9.5C38 4.25 33.75 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.75 4.25 19 9.5 19H19V0H9.5C4.25 0 0 4.25 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.75 4.25 38 9.5 38H19V19H9.5C4.25 19 0 23.25 0 28.5Z" fill="#A259FF" />
    </svg>
  </div>
);

export const PowerPointIcon = () => (
  <div className="w-11 h-11 rounded-lg bg-[#D04423] text-white flex items-center justify-center font-bold text-lg shadow-sm select-none hover:scale-105 transition-transform">
    <span className="font-sans font-extrabold text-xl">P</span>
  </div>
);
