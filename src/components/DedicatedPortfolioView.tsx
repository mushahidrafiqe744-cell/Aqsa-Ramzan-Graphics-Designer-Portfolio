import React, { useState } from 'react';
import { Maximize2, Send, Sparkles, Filter, Eye } from 'lucide-react';
import { ProjectItem } from './BottomSections';
import { GoldSparkle } from './IconsAndDecorations';

import luxeLogoImg from '../assets/images/luxe_logo_mockup_1790333712674.jpg';
import businessCardImg from '../assets/images/business_card_mockup_1790333724136.jpg';
import ramadanPosterImg from '../assets/images/ramadan_poster_mockup_1790333736057.jpg';
import resumeMockupImg from '../assets/images/resume_layout_mockup_1790333746709.jpg';

interface DedicatedPortfolioViewProps {
  onOpenProject: (project: ProjectItem) => void;
  onOpenContact: (subject?: string) => void;
}

export const DedicatedPortfolioView: React.FC<DedicatedPortfolioViewProps> = ({
  onOpenProject,
  onOpenContact
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const projects: (ProjectItem & { num: string })[] = [
    {
      id: 'luxe-beauty',
      num: '01',
      title: 'LUXE Beauty Logo & Identity',
      category: 'Logos',
      image: luxeLogoImg,
      client: 'Luxe Cosmetics Co.',
      description: 'Sophisticated gold foil emblem and brand identity for a premium organic cosmetic studio.',
      tags: ['Logo Design', 'Luxury', 'Vector', 'Illustrator']
    },
    {
      id: 'brand-name-cards',
      num: '02',
      title: 'Luxury Business Card Suite',
      category: 'Branding',
      image: businessCardImg,
      client: 'Aesthetic Atelier',
      description: 'Textured matte dark paper business cards with embossed metallic foil and bespoke typography.',
      tags: ['Stationery', 'Print Design', 'Brand Identity']
    },
    {
      id: 'ramadan-sale',
      num: '03',
      title: 'Ramadan Sale 50% Campaign Poster',
      category: 'Posters',
      image: ramadanPosterImg,
      client: 'Al-Noor Retailers',
      description: 'Festive high-engagement seasonal marketing poster designed for retail stores and social promo.',
      tags: ['Flyer', 'Promotional', 'Photoshop', 'Typography']
    },
    {
      id: 'sania-resume',
      num: '04',
      title: 'Executive CV / Resume Template',
      category: 'Resumes',
      image: resumeMockupImg,
      client: 'Creative Professionals',
      description: 'Clean modern resume layout engineered for high readability and visual impact.',
      tags: ['Resume Design', 'Layout', 'Canva Pro']
    }
  ];

  const categories = ['All', 'Logos', 'Branding', 'Social Media', 'Posters', 'Resumes', 'Presentations'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 mb-2 animate-slide-up">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C99742] uppercase">
            CREATIVE PORTFOLIO
          </span>
          <GoldSparkle className="w-4 h-4 text-[#C99742] animate-shimmer" />
        </div>
        <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#142820] flex justify-center gap-1">
          {"My Featured Work".split("").map((letter, i) => (
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
          A showcase of logos, brand systems, marketing posters, and professional layouts designed to stand out.
        </p>
      </div>

      {/* Filter Tabs with interactive animations */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 animate-slide-up">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#142820] text-[#E4BF75] shadow-md scale-105'
                : 'bg-[#ECE6D8] text-[#142820] hover:bg-[#DFD7C7]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Showcase Grid with Image Hover Physics & Shine */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="bg-[#EDE8DC]/80 border border-[#DDD5C5] hover:border-[#C99742] rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-500 hover:-translate-y-2.5 flex flex-col justify-between group relative animate-slide-up"
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <div>
              {/* Image Preview with Zoom, Shine & Overlay */}
              <div 
                onClick={() => onOpenProject(project)}
                className="relative aspect-[3/4] bg-[#142820] overflow-hidden cursor-pointer image-shine-container"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Overlay with Pulsing Eye / Zoom */}
                <div className="absolute inset-0 bg-[#142820]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white">
                  <div className="w-12 h-12 rounded-full bg-[#C99742] text-[#142820] flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E4BF75]">
                    Open Full Mockup
                  </span>
                </div>

                {/* Animated Number Badge */}
                <div className="absolute top-3 right-3 bg-[#142820]/90 text-[#E4BF75] font-mono text-[10px] font-extrabold px-2.5 py-0.5 rounded-md border border-[#C99742]/50 number-badge-glow">
                  #{project.num}
                </div>

                <div className="absolute top-3 left-3 bg-[#142820]/90 text-[#E4BF75] text-[10px] font-bold uppercase px-3 py-1 rounded-full border border-[#C99742]/50">
                  {project.category}
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5">
                <h3 
                  onClick={() => onOpenProject(project)}
                  className="font-serif-display text-base font-bold text-[#142820] mb-1 group-hover:text-[#C99742] transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>
                <p className="text-[11px] text-[#5C6B62] font-semibold mb-2">
                  {project.client}
                </p>
                <p className="text-xs text-[#3E5247] leading-relaxed line-clamp-2 mb-3">
                  {project.description}
                </p>

                {/* Tags with micro-hover scale */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[9px] font-semibold bg-white text-[#142820] px-2 py-0.5 rounded-md border border-[#D5CDBC] hover:scale-105 transition-transform">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-5 pt-0">
              <button
                onClick={() => onOpenContact(`Inquiry for design similar to ${project.title}`)}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#142820] hover:bg-[#C99742] text-white hover:text-[#142820] text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-102 cursor-pointer shadow-xs group/btn"
              >
                <span>Request Similar</span>
                <Send className="w-3 h-3 text-[#E4BF75] group-hover/btn:text-[#142820] group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
