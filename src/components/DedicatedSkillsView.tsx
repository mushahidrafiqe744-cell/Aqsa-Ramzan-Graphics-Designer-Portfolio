import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Palette, 
  Type, 
  Layout, 
  Share2, 
  TrendingUp,
  Award
} from 'lucide-react';
import { PsIcon, AiIcon, CanvaIcon, FigmaIcon, PowerPointIcon, GoldSparkle } from './IconsAndDecorations';

export const DedicatedSkillsView: React.FC = () => {
  const software = [
    {
      name: 'Adobe Photoshop',
      icon: <PsIcon />,
      level: 'Advanced',
      proficiency: 95,
      num: '01',
      usage: 'Photo manipulation, social media banners, posters, mockups, color grading.'
    },
    {
      name: 'Adobe Illustrator',
      icon: <AiIcon />,
      level: 'Expert',
      proficiency: 98,
      num: '02',
      usage: 'Vector logo design, iconography, typography, brand marks, print assets.'
    },
    {
      name: 'Canva Pro',
      icon: <CanvaIcon />,
      level: 'Expert',
      proficiency: 95,
      num: '03',
      usage: 'Fast social media templates, carousels, client-editable layouts, resumes.'
    },
    {
      name: 'Figma',
      icon: <FigmaIcon />,
      level: 'Proficient',
      proficiency: 88,
      num: '04',
      usage: 'UI design tokens, moodboards, presentation design, design systems.'
    },
    {
      name: 'Microsoft PowerPoint',
      icon: <PowerPointIcon />,
      level: 'Advanced',
      proficiency: 92,
      num: '05',
      usage: 'Corporate slide decks, pitch presentations, master template design.'
    },
  ];

  const creativeSkills = [
    {
      name: 'Branding & Identity',
      icon: Layers,
      num: 'A',
      desc: 'Developing cohesive brand narratives, logos, visual style guides, and stationery.'
    },
    {
      name: 'Layout & Composition',
      icon: Layout,
      num: 'B',
      desc: 'Mastering visual balance, white space, grids, and focal point alignment.'
    },
    {
      name: 'Typography Hierarchy',
      icon: Type,
      num: 'C',
      desc: 'Selecting pairing typefaces, tracking, kerning, and editorial readability.'
    },
    {
      name: 'Color Theory & Harmony',
      icon: Palette,
      num: 'D',
      desc: 'Formulating high-impact palettes, psychological color triggers, and print CMYK.'
    },
    {
      name: 'Social Media Strategy',
      icon: Share2,
      num: 'E',
      desc: 'Designing thumb-stopping graphics optimized for algorithm reach and conversions.'
    },
    {
      name: 'Pinterest SEO & Marketing',
      icon: TrendingUp,
      num: 'F',
      desc: 'Optimizing high-click pins, keyword tags, and visual trend algorithms.'
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 mb-2 animate-slide-up">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C99742] uppercase">
            TECHNICAL & CREATIVE MASTERY
          </span>
          <GoldSparkle className="w-4 h-4 text-[#C99742] animate-shimmer" />
        </div>
        <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#142820] flex justify-center gap-1">
          {"My Skills & Software".split("").map((letter, i) => (
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
          Combining industry-standard design tools with timeless aesthetic principles to produce exceptional visual assets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Design Software (Span 6) */}
        <div className="lg:col-span-6 bg-[#EDE8DC]/80 border border-[#DDD5C5] rounded-3xl p-6 sm:p-8 shadow-xs animate-slide-up">
          <h3 className="text-xs font-bold tracking-[0.2em] text-[#142820] uppercase mb-6 pb-2 border-b border-[#D8CFBD] flex items-center justify-between">
            <span>Design Software Mastery</span>
            <span className="text-[#C99742] font-mono font-bold">5 Core Tools</span>
          </h3>

          <div className="space-y-4">
            {software.map((tool, idx) => (
              <div 
                key={tool.name} 
                className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/80 border border-[#DCD3C3] hover:border-[#C99742] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="shrink-0 mt-0.5 group-hover:scale-115 group-hover:rotate-6 transition-transform">
                  {tool.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif-display text-base font-bold text-[#142820] group-hover:text-[#C99742] transition-colors">
                      {tool.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-extrabold text-[#142820] bg-[#EDE8DC] px-2 py-0.5 rounded-md number-badge-glow">
                        {tool.proficiency}%
                      </span>
                      <span className="text-[10px] font-bold text-[#C99742] bg-[#142820] px-2 py-0.5 rounded-full">
                        {tool.level}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#4F6357] leading-relaxed mb-2.5">
                    {tool.usage}
                  </p>
                  
                  {/* Animated Progress bar */}
                  <div className="w-full h-2 rounded-full bg-[#E5DDCF] overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-[#142820] to-[#C99742] transition-all duration-1000 ease-out group-hover:from-[#C99742] group-hover:to-[#F4D089]"
                      style={{ width: `${tool.proficiency}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Creative Skills (Span 6) */}
        <div className="lg:col-span-6 bg-[#142820] text-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#1E3A2E] animate-slide-up stagger-2">
          <h3 className="text-xs font-bold tracking-[0.2em] text-[#E0EBE4] uppercase mb-6 pb-2 border-b border-[#234234] flex items-center justify-between">
            <span>Creative Disciplines</span>
            <span className="text-[#E4BF75] font-mono font-bold">6 Disciplines</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {creativeSkills.map((skill, idx) => {
              const IconComp = skill.icon;
              return (
                <div 
                  key={skill.name}
                  className="bg-[#1C3A2E]/80 border border-[#2B4E3C] rounded-2xl p-4 flex flex-col justify-between hover:border-[#C99742] hover:bg-[#1E3E30] hover:-translate-y-1.5 transition-all duration-300 group"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#142820] text-[#C99742] border border-[#2F5240] flex items-center justify-center group-hover:scale-115 group-hover:rotate-12 transition-transform">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-extrabold text-[#E4BF75]/60 group-hover:text-[#E4BF75] group-hover:scale-110 transition-all">
                        {skill.num}
                      </span>
                    </div>

                    <h4 className="font-serif-display text-sm font-bold text-white mb-1 group-hover:text-[#E4BF75] transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-[11px] text-[#CFDCD4] leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center gap-1.5 text-[10px] text-[#E4BF75] font-semibold pt-2 border-t border-[#234234]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C99742]" />
                    <span>Verified Core Skill</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-[#234234] flex items-center gap-3">
            <Award className="w-6 h-6 text-[#C99742] shrink-0 animate-float" />
            <p className="text-xs text-[#CFDCD4]">
              Continuous daily design practice ensuring your brand aligns with global aesthetic trends.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
