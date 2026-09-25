import React from 'react';
import { HeroSection } from './HeroSection';
import { SectionTab } from './Header';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  PenTool, 
  Award, 
  Briefcase, 
  Smile, 
  Mail, 
  Phone 
} from 'lucide-react';
import { GoldSparkle } from './IconsAndDecorations';

interface DedicatedHomeViewProps {
  onNavigateToTab: (tab: SectionTab) => void;
}

export const DedicatedHomeView: React.FC<DedicatedHomeViewProps> = ({ onNavigateToTab }) => {
  const quickJumpSections: { label: string; tab: SectionTab; icon: any; count: string; num: string }[] = [
    { label: 'About Me', tab: 'about', icon: Sparkles, count: 'Bio & Seal', num: '01' },
    { label: 'My Services', tab: 'services', icon: PenTool, count: '9 Services', num: '02' },
    { label: 'My Skills', tab: 'skills', icon: Layers, count: '5 Core Tools', num: '03' },
    { label: 'Experience', tab: 'experience', icon: Briefcase, count: '2024 — Present', num: '04' },
    { label: 'My Portfolio', tab: 'portfolio', icon: Award, count: 'Featured Work', num: '05' },
    { label: 'Why Choose Me', tab: 'why-choose-me', icon: Smile, count: '5 Core Values', num: '06' },
  ];

  return (
    <div className="w-full flex flex-col justify-between animate-in fade-in duration-300">
      
      {/* 1. Main Hero Portrait & Animated Typography */}
      <HeroSection
        onViewWork={() => onNavigateToTab('portfolio')}
        onOpenAbout={() => onNavigateToTab('about')}
      />

      {/* 2. Interactive Section Jump Hub with Animated Number Badges & Glow Cards */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 animate-slide-up stagger-2">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#DDD5C5]">
          <div className="flex items-center gap-2">
            <GoldSparkle className="w-4 h-4 text-[#C99742] animate-shimmer" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#142820]">
              Explore Individual Sections
            </span>
          </div>
          <span className="text-[11px] text-[#5C6B62] font-semibold bg-white/60 px-2.5 py-0.5 rounded-full border border-[#DDD5C5]">
            Click any section card to open
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {quickJumpSections.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <button
                key={item.tab}
                onClick={() => onNavigateToTab(item.tab)}
                className="bg-[#EDE8DC]/80 hover:bg-[#142820] text-[#142820] hover:text-white border border-[#DDD5C5] hover:border-[#C99742] p-4 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 active:scale-95 cursor-pointer group relative overflow-hidden"
                style={{ animationDelay: `${idx * 70}ms` }}
              >
                {/* Top Number Counter Badge with Animation */}
                <span className="absolute top-2 right-2.5 font-mono text-[10px] font-extrabold text-[#9A917F] group-hover:text-[#E4BF75] group-hover:scale-125 transition-all">
                  {item.num}
                </span>

                <div className="w-12 h-12 rounded-2xl bg-[#142820] text-[#E4BF75] group-hover:bg-[#C99742] group-hover:text-[#142820] flex items-center justify-center mb-2.5 transition-all duration-300 shadow-xs group-hover:rotate-12 group-hover:scale-110">
                  <IconComp className="w-5 h-5" />
                </div>

                <span className="text-xs font-bold leading-snug group-hover:text-white transition-colors">
                  {item.label}
                </span>

                <span className="text-[10px] text-[#5C6B62] group-hover:text-[#E4BF75] font-semibold mt-1 transition-colors">
                  {item.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
