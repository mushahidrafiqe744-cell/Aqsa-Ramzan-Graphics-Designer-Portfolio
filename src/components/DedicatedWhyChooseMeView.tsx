import React from 'react';
import { 
  Lightbulb, 
  Layout, 
  Zap, 
  Award, 
  Smile, 
  CheckCircle2, 
  Send,
  Sparkles
} from 'lucide-react';
import { GoldSparkle } from './IconsAndDecorations';

interface DedicatedWhyChooseMeViewProps {
  onOpenContact: (subject?: string) => void;
}

export const DedicatedWhyChooseMeView: React.FC<DedicatedWhyChooseMeViewProps> = ({ onOpenContact }) => {
  const reasons = [
    {
      num: '01',
      title: 'Creative Ideas',
      icon: Lightbulb,
      tag: 'Originality',
      desc: 'Bespoke design concepts tailored specifically to your brand narrative. No cookie-cutter templates or generic clipart.'
    },
    {
      num: '02',
      title: 'Modern Design',
      icon: Layout,
      tag: 'Aesthetics',
      desc: 'Clean, elegant, and contemporary typography, palettes, and visual balance that capture current design trends.'
    },
    {
      num: '03',
      title: 'Fast Delivery',
      icon: Zap,
      tag: 'Efficiency',
      desc: 'Prompt turnarounds (24-48h for most collateral) with zero compromise on craftsmanship or pixel perfection.'
    },
    {
      num: '04',
      title: 'High Quality',
      icon: Award,
      tag: 'Vector Precision',
      desc: 'Print-ready 300 DPI CMYK master files, scalable vector assets (AI/SVG/PDF), and crystal-clear digital exports.'
    },
    {
      num: '05',
      title: 'Client Satisfaction',
      icon: Smile,
      tag: '100% Commitment',
      desc: 'Friendly communication, fast revisions, and collaborative iteration until you are thoroughly delighted with the result.'
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 mb-2 animate-slide-up">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C99742] uppercase">
            WHY CLIENTS TRUST AQSA RAMZAN
          </span>
          <GoldSparkle className="w-4 h-4 text-[#C99742] animate-shimmer" />
        </div>
        <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#142820] flex justify-center gap-1">
          {"Why Choose Me?".split("").map((letter, i) => (
            <span
              key={i}
              className="inline-block hover:-translate-y-1 hover:text-[#C99742] hover:scale-110 transition-transform duration-200"
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h2>
        <div className="w-16 h-1 bg-[#C99742] mx-auto my-4 rounded-full animate-scale-pop" />
        <p className="text-sm text-[#46574F] leading-relaxed">
          5 foundational principles that drive every single design project I undertake.
        </p>
      </div>

      {/* 5 Core Badges Grid with Animated Number Tags and Hover Lift */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
        {reasons.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.title}
              className="bg-[#EDE8DC]/80 border border-[#DDD5C5] hover:border-[#C99742] rounded-3xl p-6 flex flex-col justify-between items-center text-center transition-all duration-500 hover:-translate-y-2.5 hover:shadow-2xl hover:bg-white/90 group relative animate-slide-up"
              style={{ animationDelay: `${idx * 70}ms` }}
            >
              {/* Corner Number with Animated Glow Badge */}
              <div className="absolute top-3 right-3 font-mono text-[10px] font-extrabold text-[#9A917F] group-hover:text-[#C99742] group-hover:scale-125 transition-all number-badge-glow">
                #{item.num}
              </div>

              <div>
                <div className="w-16 h-16 rounded-full bg-[#142820] text-[#E4BF75] border-2 border-[#C99742] flex items-center justify-center mb-4 group-hover:scale-115 group-hover:rotate-12 transition-all duration-300 shadow-md">
                  <IconComp className="w-8 h-8" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C99742] bg-[#142820] px-3 py-0.5 rounded-full inline-block mb-2 group-hover:bg-[#C99742] group-hover:text-[#142820] transition-colors">
                  {item.tag}
                </span>

                <h3 className="font-serif-display text-lg font-bold text-[#142820] mb-2 group-hover:text-[#C99742] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#3D5246] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#D8CFBD] w-full flex items-center justify-center gap-1 text-[11px] font-bold text-[#142820]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C99742]" />
                <span>100% Guaranteed</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action Box */}
      <div className="bg-[#142820] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#1E3A2E] shadow-xl hover:border-[#C99742] transition-all animate-slide-up">
        <div>
          <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white mb-2">
            Let's Bring Your Vision to Life
          </h3>
          <p className="text-xs sm:text-sm text-[#CFDCD4] max-w-lg">
            Whether you need a full brand overhaul or a single promotional banner, I am ready to help your brand shine.
          </p>
        </div>

        <button
          onClick={() => onOpenContact('Project Collaboration with Aqsa')}
          className="bg-[#C99742] hover:bg-[#DCA84D] text-[#0E1E17] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0 flex items-center gap-2 group/btn"
        >
          <span>Start a Project</span>
          <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  );
};
