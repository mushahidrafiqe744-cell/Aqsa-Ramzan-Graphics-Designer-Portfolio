import React, { useState } from 'react';
import { ArrowRight, Check, Copy, Sparkles } from 'lucide-react';
import { BotanicalLeafLeft, GoldSparkle } from './IconsAndDecorations';
import aqsaPortrait from '../assets/images/aqsa_hero_portrait_1790342528341.jpg';

interface HeroSectionProps {
  onViewWork: () => void;
  onOpenAbout?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onViewWork, onOpenAbout }) => {
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  const copyToClipboard = (text: string, platform: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHandle(platform);
    setTimeout(() => setCopiedHandle(null), 2000);
  };

  return (
    <section id="hero" className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-8 relative">
      {/* Decorative Botanical Leaf with gentle floating animation */}
      <div className="absolute -left-3 top-8 hidden lg:block pointer-events-none opacity-80 z-0 animate-float-slow">
        <BotanicalLeafLeft className="w-24 h-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: Animated Hero Text & Alphabets & Numbers */}
        <div className="lg:col-span-6 flex flex-col items-start pt-4 animate-slide-up">
          
          {/* Greeting kicker with animated letters */}
          <div className="flex items-center gap-2 mb-2 animate-slide-up">
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#142820] uppercase font-sans flex gap-1">
              {"HELLO, I'M".split("").map((char, i) => (
                <span 
                  key={i} 
                  className="inline-block hover:text-[#C99742] hover:-translate-y-1 transition-transform duration-200"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
            <GoldSparkle className="w-4 h-4 text-[#C99742] animate-shimmer" />
          </div>

          {/* Large Stylized Name Title Lockup with Aqsa Ramzan */}
          <div 
            onClick={onOpenAbout}
            className="relative my-2 select-none cursor-pointer group"
            title="Click to learn more about Aqsa Ramzan"
          >
            {/* Aqsa Ramzan with individual animated letters */}
            <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-[76px] font-bold text-[#142820] tracking-tight leading-[0.95] flex flex-wrap gap-x-4">
              <span className="flex">
                {"Aqsa".split("").map((letter, idx) => (
                  <span 
                    key={idx}
                    className="inline-block hover:-translate-y-2 hover:text-[#C99742] hover:scale-110 transition-all duration-300 transform"
                    style={{ transitionDelay: `${idx * 40}ms` }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
              <span className="flex">
                {"Ramzan".split("").map((letter, idx) => (
                  <span 
                    key={idx}
                    className="inline-block hover:-translate-y-2 hover:text-[#C99742] hover:scale-110 transition-all duration-300 transform"
                    style={{ transitionDelay: `${(idx + 4) * 40}ms` }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </h1>
            
            {/* Overlapping cursive 'Graphics' with float animation */}
            <div className="font-script text-5xl sm:text-6xl lg:text-[74px] text-[#C99742] -mt-5 sm:-mt-7 ml-4 sm:ml-8 font-normal leading-none drop-shadow-xs group-hover:scale-110 group-hover:rotate-1 transition-all duration-300 origin-left animate-float">
              Graphics
            </div>

            {/* DESIGNER sub-label with letter spacing hover */}
            <div className="text-base sm:text-lg lg:text-xl font-bold tracking-[0.45em] text-[#142820] mt-1 ml-1 sm:ml-2 uppercase flex">
              {"DESIGNER".split("").map((char, i) => (
                <span 
                  key={i} 
                  className="inline-block hover:text-[#C99742] hover:scale-125 transition-all duration-200"
                >
                  {char}
                </span>
              ))}
            </div>
          </div>

          {/* Dark Pill Tagline with pulse glow and animated badge */}
          <div className="mt-6 mb-4 animate-scale-pop stagger-2">
            <span className="inline-block bg-[#142820] hover:bg-[#1E3A2E] text-white px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase shadow-xs hover:scale-105 transition-all duration-300">
              DESIGNING BRANDS THAT PEOPLE REMEMBER.
            </span>
          </div>

          {/* Description Paragraph */}
          <p className="text-[#3A4A41] text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-sans font-normal animate-slide-up stagger-3">
            I create visual identities and designs that help businesses stand out, connect with their audience, and leave a lasting impression.
          </p>

          {/* CTA View My Work Button & Experience Counter */}
          <div className="flex flex-wrap items-center gap-4 animate-scale-pop stagger-4">
            <button
              onClick={onViewWork}
              className="flex items-center gap-3.5 bg-[#142820] hover:bg-[#1C3A2E] text-white pl-6 pr-2.5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:translate-x-1.5 hover:scale-105 active:scale-95 cursor-pointer group"
            >
              <span>VIEW MY WORK</span>
              <div className="w-7 h-7 rounded-full bg-white text-[#142820] flex items-center justify-center group-hover:bg-[#E4BF75] group-hover:text-black group-hover:rotate-45 transition-all duration-300 shadow-sm">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>

            {/* Animated Experience Mini Counter Badge */}
            <div className="flex items-center gap-2 bg-[#EDE7DA] border border-[#DDD5C5] px-3.5 py-2 rounded-full number-badge-glow">
              <span className="font-mono text-xs font-extrabold text-[#C99742] animate-number-bounce">
                2024–Present
              </span>
              <span className="text-[10px] uppercase font-bold text-[#5C6B62]">
                • Active Pro
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Animated Arched Portrait (Image), Badges & Social Links Card */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0 animate-slide-up stagger-2">
          
          {/* Sparkles around portrait */}
          <div className="absolute -top-3 right-1/4 sm:right-1/3 z-20 animate-shimmer">
            <GoldSparkle className="w-5 h-5 text-[#C99742]" />
          </div>
          <div className="absolute top-1/3 left-6 sm:left-12 z-20 animate-shimmer stagger-3">
            <GoldSparkle className="w-4 h-4 text-[#C99742]" />
          </div>

          {/* Composition Container with 3D float physics */}
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] flex justify-center group">
            
            {/* Background Dark Green Organic Curve / Circle */}
            <div className="absolute -bottom-4 -left-8 w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-[#142820] -z-10 opacity-95 group-hover:scale-105 transition-transform duration-700"></div>

            {/* Golden Mustard Arch Backdrop with hover scale & image shine */}
            <div className="relative w-64 sm:w-72 h-[380px] sm:h-[430px] bg-[#C99742] arch-frame p-3 sm:p-3.5 shadow-2xl flex items-end justify-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(201,151,66,0.35)] group-hover:-translate-y-1 image-shine-container">
              
              {/* Inner Portrait Image with zoom effect */}
              <div className="w-full h-full arch-frame overflow-hidden relative bg-[#1B2B23]">
                <img
                  src={aqsaPortrait}
                  alt="Aqsa Ramzan - Professional Graphic Designer"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Soft gradient bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#142820]/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Floating WhatsApp Card on Bottom Right with hover lift */}
            <div className="absolute -bottom-4 -right-2 sm:-right-6 bg-white/95 backdrop-blur-xs border border-white/80 rounded-2xl p-3.5 sm:p-4 shadow-xl w-[220px] sm:w-[240px] z-20 flex flex-col gap-2.5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105">
              
              {/* Header Status */}
              <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#142820]/75 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Quick Contact
                </span>
                <span className="text-[9px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-full border border-emerald-200">
                  Online
                </span>
              </div>

              {/* Direct WhatsApp Chat */}
              <a 
                href="https://wa.me/923039374747?text=Hello%20Aqsa%2C%20I%20am%20interested%20in%20your%20graphic%20design%20services!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group/item p-2 rounded-xl bg-emerald-50/70 hover:bg-[#25D366] hover:text-white transition-all duration-200 border border-emerald-200/70"
                title="Chat with Aqsa on WhatsApp"
              >
                <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover/item:bg-white group-hover/item:text-[#25D366] group-hover/item:rotate-12 transition-all shadow-xs">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-bold text-[#142820] group-hover/item:text-white leading-tight">WhatsApp</p>
                  <p className="text-[11px] text-emerald-800 group-hover/item:text-white/95 truncate font-mono font-semibold">+92 303 9374747</p>
                </div>
              </a>

              {/* Copy Number Action */}
              <button
                type="button"
                onClick={() => copyToClipboard('+92 303 9374747', 'whatsapp')}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-bold tracking-wide transition-colors cursor-pointer"
              >
                {copiedHandle === 'whatsapp' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600 animate-scale-pop" />
                    <span className="text-emerald-700">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-500" />
                    <span>Copy Number</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
