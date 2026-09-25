import React from 'react';
import { Calendar, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import workspaceImg from '../assets/images/aqsa_designer_workspace_1790342477678.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full bg-[#142820] text-white py-14 px-6 relative overflow-hidden my-4 border-y border-[#1E3A2E]">
      
      {/* Dot matrix decoration on the top right */}
      <div className="absolute top-4 right-8 w-24 h-24 dot-matrix opacity-40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        
        {/* Left Column: Intro Bio */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <div className="inline-block mb-1">
            <span className="text-[#C99742] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
              ABOUT ME
            </span>
          </div>
          
          <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            I'm Aqsa Ramzan!
          </h2>
          
          <div className="w-12 h-0.5 bg-[#C99742] mb-5"></div>

          <p className="text-[#CFDCD4] text-xs sm:text-[13px] leading-relaxed font-light">
            I am a passionate Graphic Designer specializing in Logo Design, Brand Identity, Social Media Posts, Business Cards, Posters, CV Design, and Presentation Design. My goal is to create modern, clean, and memorable designs that help businesses stand out.
          </p>
        </div>

        {/* Middle Column: Personal & Contact Details */}
        <div className="md:col-span-4 flex flex-col justify-center gap-4 py-2 border-y md:border-y-0 md:border-l md:border-r border-[#264436]/60 md:px-8">
          
          {/* Birth Date */}
          <div className="flex items-center gap-3.5 group">
            <div className="text-[#C99742] p-2 rounded-lg bg-[#1D352B]/60 group-hover:bg-[#C99742] group-hover:text-[#142820] transition-colors">
              <Calendar className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-[13px] text-[#E0EBE4] font-medium font-mono">
              15/05/2025
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3.5 group">
            <div className="text-[#C99742] p-2 rounded-lg bg-[#1D352B]/60 group-hover:bg-[#C99742] group-hover:text-[#142820] transition-colors">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-[13px] text-[#E0EBE4] font-medium">
              Pakistan
            </span>
          </div>

          {/* Email */}
          <a
            href="mailto:aqsaramzan034272@gmail.com"
            className="flex items-center gap-3.5 group hover:text-[#C99742] transition-colors"
          >
            <div className="text-[#C99742] p-2 rounded-lg bg-[#1D352B]/60 group-hover:bg-[#C99742] group-hover:text-[#142820] transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-[13px] text-[#E0EBE4] font-medium truncate group-hover:text-[#E4BF75] transition-colors">
              aqsaramzan034272@gmail.com
            </span>
          </a>

          {/* Phone / WhatsApp */}
          <a
            href="https://wa.me/923039374747"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 group hover:text-[#C99742] transition-colors"
          >
            <div className="text-[#C99742] p-2 rounded-lg bg-[#1D352B]/60 group-hover:bg-[#C99742] group-hover:text-[#142820] transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-[13px] text-[#E0EBE4] font-medium font-mono group-hover:text-[#E4BF75] transition-colors">
              +92 303 9374747
            </span>
          </a>

        </div>

        {/* Right Column: Luxury Framed Designer Photo */}
        <div className="md:col-span-3 flex justify-center items-center py-4">
          <div className="relative w-44 h-52 sm:w-48 sm:h-56 rounded-3xl overflow-hidden border-2 border-[#C99742]/60 shadow-xl group hover:border-[#C99742] transition-all duration-500 bg-[#162C23]">
            <img 
              src={workspaceImg} 
              alt="Aqsa Ramzan Graphic Designer" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#142820] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-2.5 inset-x-2 text-center bg-[#142820]/90 backdrop-blur-xs py-1.5 px-2 rounded-xl border border-[#C99742]/40">
              <span className="font-serif-display text-xs font-bold text-white block">Aqsa Ramzan</span>
              <span className="text-[9px] text-[#E4BF75] tracking-widest uppercase font-semibold">Graphic Designer</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
