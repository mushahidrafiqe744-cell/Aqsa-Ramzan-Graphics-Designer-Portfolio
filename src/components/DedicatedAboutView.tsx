import React from 'react';
import { Calendar, MapPin, Mail, Phone, Sparkles, CheckCircle2, Heart, Award, Send } from 'lucide-react';
import { GoldSparkle } from './IconsAndDecorations';
import workspaceImg from '../assets/images/aqsa_designer_workspace_1790342477678.jpg';

interface DedicatedAboutViewProps {
  onOpenContact: (subject?: string) => void;
}

export const DedicatedAboutView: React.FC<DedicatedAboutViewProps> = ({ onOpenContact }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 mb-2 animate-slide-up">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C99742] uppercase">
            WHO I AM
          </span>
          <GoldSparkle className="w-4 h-4 text-[#C99742] animate-shimmer" />
        </div>
        <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#142820] flex justify-center gap-1">
          {"About Aqsa Ramzan".split("").map((letter, i) => (
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
          Passionate Graphic Designer & Visual Identity Specialist crafting memorable branding solutions for businesses worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-6">
        
        {/* Left Side: Bio & Mission (Span 7) */}
        <div className="lg:col-span-7 bg-[#142820] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#1E3A2E] relative overflow-hidden group hover:border-[#C99742] transition-all duration-300 animate-slide-up">
          <div className="absolute top-4 right-6 w-24 h-24 dot-matrix opacity-25 pointer-events-none" />

          <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#E4BF75] transition-colors">
            Designing Brands That People Remember.
          </h3>
          <div className="w-12 h-0.5 bg-[#C99742] mb-5 animate-scale-pop" />

          <p className="text-xs sm:text-sm text-[#CFDCD4] leading-relaxed font-light mb-4">
            I am <strong>Aqsa Ramzan</strong>, a passionate Graphic Designer specializing in <strong>Logo Design, Brand Identity, Social Media Posts, Business Cards, Posters, CV Design, and Presentation Design</strong>.
          </p>

          <p className="text-xs sm:text-sm text-[#CFDCD4] leading-relaxed font-light mb-6">
            My creative philosophy centers around aesthetic clarity, typographic harmony, and emotional brand connection. Every design is crafted with deep attention to color psychology, layout balance, and cross-channel versatility.
          </p>

          {/* Quick Specifications with Animated Icon Badges & Animated Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#234234]">
            
            {/* Birthdate with Animated Number highlight */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#193228] border border-[#234234] hover:border-[#C99742] hover:bg-[#1D3B2F] hover:translate-x-1 transition-all group/item">
              <div className="p-2.5 rounded-xl bg-[#142820] text-[#C99742] group-hover/item:rotate-12 group-hover/item:scale-110 transition-all">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#8EA69A] block">Date of Birth</span>
                <span className="text-xs text-[#E0EBE4] font-bold font-mono">
                  15/05/2025
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#193228] border border-[#234234] hover:border-[#C99742] hover:bg-[#1D3B2F] hover:translate-x-1 transition-all group/item">
              <div className="p-2.5 rounded-xl bg-[#142820] text-[#C99742] group-hover/item:rotate-12 group-hover/item:scale-110 transition-all">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#8EA69A] block">Location</span>
                <span className="text-xs text-[#E0EBE4] font-bold">Pakistan</span>
              </div>
            </div>

            {/* Email */}
            <a
              href="mailto:aqsaramzan034272@gmail.com"
              className="flex items-center gap-3 p-3 rounded-2xl bg-[#193228] border border-[#234234] hover:border-[#C99742] hover:bg-[#1D3B2F] hover:translate-x-1 transition-all group/item truncate"
            >
              <div className="p-2.5 rounded-xl bg-[#142820] text-[#C99742] group-hover/item:rotate-12 group-hover/item:scale-110 transition-all shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-bold text-[#8EA69A] block">Direct Email</span>
                <span className="text-xs text-[#E4BF75] font-bold truncate block">aqsaramzan034272@gmail.com</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923039374747"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-2xl bg-[#193228] border border-[#234234] hover:border-[#C99742] hover:bg-[#1D3B2F] hover:translate-x-1 transition-all group/item"
            >
              <div className="p-2.5 rounded-xl bg-[#142820] text-[#C99742] group-hover/item:rotate-12 group-hover/item:scale-110 transition-all shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#8EA69A] block">WhatsApp / Call</span>
                <span className="text-xs text-[#E4BF75] font-bold font-mono">+92 303 9374747</span>
              </div>
            </a>

          </div>
        </div>

        {/* Right Side: Designer Studio Workspace & Monogram Emblem */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center animate-slide-up stagger-2 relative">
          
          {/* Workspace Image Card */}
          <div className="relative w-full max-w-[340px] rounded-3xl overflow-hidden border-2 border-[#C99742]/60 shadow-2xl bg-[#142820] group hover:border-[#C99742] hover:shadow-[0_20px_50px_rgba(201,151,66,0.3)] transition-all duration-500">
            <div className="aspect-square w-full overflow-hidden relative">
              <img 
                src={workspaceImg} 
                alt="Aqsa Ramzan Creative Studio Workspace" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142820] via-transparent to-transparent opacity-70 pointer-events-none" />
              
              {/* Badge */}
              <div className="absolute top-3 left-3 bg-[#142820]/90 backdrop-blur-xs text-[#E4BF75] text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-[#C99742]/40 shadow-xs flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#C99742]" />
                <span>Creative Studio</span>
              </div>
            </div>

            {/* Bottom Card Caption with Monogram */}
            <div className="p-4 bg-[#142820] flex items-center justify-between border-t border-[#234234]">
              <div>
                <div className="font-serif-display text-base font-bold text-white">Aqsa Ramzan</div>
                <p className="text-[10px] text-[#C99742] font-semibold tracking-widest uppercase">Graphics Designer</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-[#C99742] bg-[#1B3529] flex items-center justify-center text-[#E4BF75] font-serif-display font-bold text-sm shadow-inner">
                AR
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Action Banner */}
      <div className="text-center pt-2 animate-scale-pop stagger-3">
        <button
          onClick={() => onOpenContact('Discussion with Aqsa Ramzan')}
          className="bg-[#142820] hover:bg-[#1C3A2E] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2 group"
        >
          <span>Connect with Aqsa Ramzan</span>
          <Send className="w-3.5 h-3.5 text-[#E4BF75] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  );
};
