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

            {/* Floating Social Handles Card on Bottom Right with hover lift */}
            <div className="absolute -bottom-4 -right-2 sm:-right-6 bg-white/95 backdrop-blur-xs border border-white/80 rounded-2xl p-4 shadow-xl w-[220px] sm:w-[240px] z-20 flex flex-col gap-3 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105">
              
              {/* Pinterest */}
              <div 
                onClick={() => copyToClipboard('aqsaramzandesigner', 'pinterest')}
                className="flex items-center gap-3 group/item cursor-pointer hover:bg-slate-50 p-1.5 rounded-lg transition-all duration-200 hover:translate-x-1"
                title="Click to copy Pinterest username"
              >
                <div className="w-8 h-8 rounded-full bg-[#142820] text-white flex items-center justify-center shrink-0 group-hover/item:bg-[#E60023] group-hover/item:rotate-12 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.546.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-[#142820] leading-none">Pinterest</p>
                  <p className="text-[10px] text-slate-500 truncate mt-0.5 font-medium">aqsaramzandesigner</p>
                </div>
                {copiedHandle === 'pinterest' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 animate-scale-pop" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#142820] shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                )}
              </div>

              {/* TikTok */}
              <div 
                onClick={() => copyToClipboard('@aqsaramzandesigner', 'tiktok')}
                className="flex items-center gap-3 group/item cursor-pointer hover:bg-slate-50 p-1.5 rounded-lg transition-all duration-200 hover:translate-x-1"
                title="Click to copy TikTok username"
              >
                <div className="w-8 h-8 rounded-full bg-[#142820] text-white flex items-center justify-center shrink-0 group-hover/item:bg-black group-hover/item:rotate-12 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-[#142820] leading-none">TikTok</p>
                  <p className="text-[10px] text-slate-500 truncate mt-0.5 font-medium">@aqsaramzandesigner</p>
                </div>
                {copiedHandle === 'tiktok' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 animate-scale-pop" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#142820] shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                )}
              </div>

              {/* Instagram */}
              <div 
                onClick={() => copyToClipboard('@aqsaramzandesigner', 'instagram')}
                className="flex items-center gap-3 group/item cursor-pointer hover:bg-slate-50 p-1.5 rounded-lg transition-all duration-200 hover:translate-x-1"
                title="Click to copy Instagram username"
              >
                <div className="w-8 h-8 rounded-full bg-[#142820] text-white flex items-center justify-center shrink-0 group-hover/item:bg-[#E1306C] group-hover/item:rotate-12 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-[#142820] leading-none">Instagram</p>
                  <p className="text-[10px] text-slate-500 truncate mt-0.5 font-medium">@aqsaramzandesigner</p>
                </div>
                {copiedHandle === 'instagram' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 animate-scale-pop" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#142820] shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
