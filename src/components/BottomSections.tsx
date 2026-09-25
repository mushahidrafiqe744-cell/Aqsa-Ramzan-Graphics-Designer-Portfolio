import React, { useState } from 'react';
import { 
  Lightbulb, 
  Layout, 
  Zap, 
  Award, 
  Smile, 
  Send,
  Eye,
  Maximize2,
  ExternalLink
} from 'lucide-react';
import { GoldSparkle, BotanicalLeafLeft } from './IconsAndDecorations';

import luxeLogoImg from '../assets/images/luxe_logo_mockup_1790333712674.jpg';
import businessCardImg from '../assets/images/business_card_mockup_1790333724136.jpg';
import ramadanPosterImg from '../assets/images/ramadan_poster_mockup_1790333736057.jpg';
import resumeMockupImg from '../assets/images/resume_layout_mockup_1790333746709.jpg';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Logos' | 'Branding' | 'Social Media' | 'Posters' | 'Resumes' | 'Presentations';
  image: string;
  client: string;
  description: string;
  tags: string[];
}

interface BottomSectionsProps {
  onOpenContact: (subject?: string) => void;
  onOpenProject: (project: ProjectItem) => void;
  onOpenWhyChooseMe?: () => void;
  onOpenPortfolio?: () => void;
}

export const BottomSections: React.FC<BottomSectionsProps> = ({ 
  onOpenContact, 
  onOpenProject,
  onOpenWhyChooseMe,
  onOpenPortfolio
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const projects: ProjectItem[] = [
    {
      id: 'luxe-beauty',
      title: 'LUXE Beauty Logo & Mark',
      category: 'Logos',
      image: luxeLogoImg,
      client: 'Luxe Cosmetics Co.',
      description: 'Sophisticated gold foil emblem and brand identity for a premium organic cosmetic studio.',
      tags: ['Logo Design', 'Luxury', 'Vector', 'Illustrator']
    },
    {
      id: 'brand-name-cards',
      title: 'Luxury Business Card Mockup',
      category: 'Branding',
      image: businessCardImg,
      client: 'Aesthetic Atelier',
      description: 'Textured matte dark paper business cards with embossed metallic foil and bespoke typography.',
      tags: ['Stationery', 'Print Design', 'Brand Identity']
    },
    {
      id: 'ramadan-sale',
      title: 'Ramadan Sale 50% Campaign',
      category: 'Posters',
      image: ramadanPosterImg,
      client: 'Al-Noor Retailers',
      description: 'Festive high-engagement seasonal marketing poster designed for retail stores and social promo.',
      tags: ['Flyer', 'Promotional', 'Photoshop', 'Typography']
    },
    {
      id: 'aqsa-resume',
      title: 'Executive CV / Resume Template',
      category: 'Resumes',
      image: resumeMockupImg,
      client: 'Creative Professionals',
      description: 'Clean modern resume layout engineered for high readability and visual impact.',
      tags: ['Resume Design', 'Layout', 'Canva Pro']
    }
  ];

  const categories = ['Logos', 'Branding', 'Social Media', 'Posters', 'Resumes', 'Presentations'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div id="portfolio" className="w-full">
      {/* 3 Bottom Cards Grid */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: WHY CHOOSE ME? (Span 3) */}
          <div className="lg:col-span-3 bg-[#EDE8DC]/70 border border-[#DDD5C5] rounded-3xl p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div 
                onClick={onOpenWhyChooseMe}
                className="flex items-center justify-between mb-6 pb-2 border-b border-[#D8CFBD] cursor-pointer group"
                title="Click to open full Why Choose Me section"
              >
                <h3 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#142820] uppercase group-hover:text-[#C99742] transition-colors">
                  WHY CHOOSE ME?
                </h3>
                <ExternalLink className="w-3.5 h-3.5 text-[#A29A88] group-hover:text-[#C99742] transition-colors" />
              </div>

              {/* Badges Layout */}
              <div className="flex flex-col gap-4 cursor-pointer" onClick={onOpenWhyChooseMe}>
                {/* Top Row: 3 badges */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center text-center group cursor-pointer">
                    <div className="w-11 h-11 rounded-full bg-[#142820] text-[#E4BF75] border-2 border-[#C99742] flex items-center justify-center mb-1 group-hover:scale-105 transition-transform shadow-xs">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-[#142820] leading-tight">
                      Creative<br/>Ideas
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center group cursor-pointer">
                    <div className="w-11 h-11 rounded-full bg-[#142820] text-[#E4BF75] border-2 border-[#C99742] flex items-center justify-center mb-1 group-hover:scale-105 transition-transform shadow-xs">
                      <Layout className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-[#142820] leading-tight">
                      Modern<br/>Design
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center group cursor-pointer">
                    <div className="w-11 h-11 rounded-full bg-[#142820] text-[#E4BF75] border-2 border-[#C99742] flex items-center justify-center mb-1 group-hover:scale-105 transition-transform shadow-xs">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-[#142820] leading-tight">
                      Fast<br/>Delivery
                    </span>
                  </div>
                </div>

                {/* Bottom Row: 2 badges */}
                <div className="flex justify-center gap-6 mt-1">
                  <div className="flex flex-col items-center text-center group cursor-pointer">
                    <div className="w-11 h-11 rounded-full bg-[#142820] text-[#E4BF75] border-2 border-[#C99742] flex items-center justify-center mb-1 group-hover:scale-105 transition-transform shadow-xs">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-[#142820] leading-tight">
                      High<br/>Quality
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center group cursor-pointer">
                    <div className="w-11 h-11 rounded-full bg-[#142820] text-[#E4BF75] border-2 border-[#C99742] flex items-center justify-center mb-1 group-hover:scale-105 transition-transform shadow-xs">
                      <Smile className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-[#142820] leading-tight">
                      Client<br/>Satisfaction
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: MY WORK (Span 6) */}
          <div className="lg:col-span-6 bg-[#EDE8DC]/70 border border-[#DDD5C5] rounded-3xl p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#D8CFBD]">
                <div 
                  onClick={onOpenPortfolio}
                  className="flex items-center gap-1.5 cursor-pointer group"
                >
                  <h3 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#142820] uppercase group-hover:text-[#C99742] transition-colors">
                    MY WORK
                  </h3>
                  <ExternalLink className="w-3 h-3 text-[#A29A88] group-hover:text-[#C99742] transition-colors" />
                </div>
                <span className="text-[11px] text-[#C99742] font-semibold cursor-pointer hover:underline" onClick={onOpenPortfolio}>
                  View Full Gallery →
                </span>
              </div>

              {/* 4 Thumbnails Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-2">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => onOpenProject(project)}
                    className="group relative rounded-xl overflow-hidden bg-[#142820] aspect-[3/4] cursor-pointer shadow-xs border border-[#C5BBA7] hover:border-[#C99742] transition-all hover:scale-[1.03]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#142820]/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center text-white">
                      <Maximize2 className="w-5 h-5 text-[#E4BF75] mb-1" />
                      <span className="text-[10px] font-bold leading-tight line-clamp-2">
                        {project.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Breadcrumbs / Filters */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4 text-[10px] sm:text-[11px] font-semibold text-[#142820]">
                {categories.map((cat, idx) => (
                  <React.Fragment key={cat}>
                    <button
                      onClick={() => onOpenPortfolio && onOpenPortfolio()}
                      className="hover:text-[#C99742] transition-colors cursor-pointer"
                    >
                      {cat}
                    </button>
                    {idx < categories.length - 1 && (
                      <span className="text-[#A29A88]" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: LET'S WORK TOGETHER! (Span 3) */}
          <div className="lg:col-span-3 bg-[#EDE8DC]/70 border border-[#DDD5C5] rounded-3xl p-6 flex flex-col justify-between shadow-xs relative overflow-hidden">
            {/* Background Decorative Botanical leaves */}
            <div className="absolute -bottom-6 -right-6 pointer-events-none opacity-25">
              <BotanicalLeafLeft className="w-32 h-auto rotate-45" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#142820] uppercase mb-4 pb-2 border-b border-[#D8CFBD]">
                  LET'S WORK<br />TOGETHER!
                </h3>

                <p className="text-xs text-[#3C4D44] font-medium leading-relaxed mb-6">
                  Have a project in mind? Let's create something amazing together.
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenContact('General Collaboration with Aqsa')}
                  className="w-full flex items-center justify-center gap-2.5 bg-[#142820] hover:bg-[#1C3A2E] text-white py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer group"
                >
                  <span>LET'S TALK</span>
                  <Send className="w-3.5 h-3.5 text-[#E4BF75] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Banner Ribbon */}
      <footer className="w-full bg-[#142820] border-t border-[#1F3E30] py-4 px-6 text-center text-white mt-4 relative">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          <GoldSparkle className="w-4 h-4 text-[#C99742] animate-shimmer" />
          
          <div className="flex items-center gap-2 text-base sm:text-xl font-serif-display text-white tracking-wide">
            <span>Let's Build</span>
            <span className="font-script text-2xl sm:text-3xl text-[#E4BF75] font-normal">
              Your Brand
            </span>
            <span>Together.</span>
          </div>

          <GoldSparkle className="w-4 h-4 text-[#C99742] animate-shimmer" />
        </div>
      </footer>
    </div>
  );
};
