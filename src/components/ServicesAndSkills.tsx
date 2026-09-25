import React from 'react';
import { 
  PenTool, 
  Layers, 
  CreditCard, 
  Share2, 
  FileText, 
  FileCheck, 
  Monitor, 
  Pin, 
  Sparkles, 
  Briefcase, 
  CheckCircle2,
  ExternalLink 
} from 'lucide-react';
import { PsIcon, AiIcon, CanvaIcon, FigmaIcon, PowerPointIcon } from './IconsAndDecorations';

interface ServicesAndSkillsProps {
  onSelectService: (serviceName: string) => void;
  onOpenSkills?: () => void;
  onOpenExperience?: () => void;
  onOpenServices?: () => void;
}

export const ServicesAndSkills: React.FC<ServicesAndSkillsProps> = ({ 
  onSelectService,
  onOpenSkills,
  onOpenExperience,
  onOpenServices
}) => {
  const services = [
    { name: 'Logo Design', icon: PenTool, desc: 'Memorable brand marks, vector master files, luxury typography & icons.' },
    { name: 'Brand Identity', icon: Layers, desc: 'Complete visual identity systems, color palettes, guidelines & assets.' },
    { name: 'Business Card Design', icon: CreditCard, desc: 'Print-ready luxury, minimalist, and corporate business cards.' },
    { name: 'Social Media Design', icon: Share2, desc: 'High-converting Instagram, TikTok, LinkedIn & Facebook post templates.' },
    { name: 'Poster & Flyer Design', icon: FileText, desc: 'Promotional event posters, seasonal sales flyers & advertising materials.' },
    { name: 'CV / Resume Design', icon: FileCheck, desc: 'Clean, modern, ATS-friendly professional resumes and cover letters.' },
    { name: 'Presentation Design', icon: Monitor, desc: 'Investor pitch decks, Keynote and PowerPoint slide decks.' },
    { name: 'Pinterest Pins', icon: Pin, desc: 'Click-worthy viral Pinterest pin graphics optimized for organic traffic & SEO.' },
    { name: 'AI Design', icon: Sparkles, desc: 'AI-assisted visual art concepts, prompt engineering & fast creative ideation.' },
  ];

  const creativeSkills = [
    { name: 'Branding', category: 'Core' },
    { name: 'Layout Design', category: 'Composition' },
    { name: 'Typography', category: 'Editorial' },
    { name: 'Visual Identity', category: 'Strategy' },
    { name: 'Color Theory', category: 'Aesthetics' },
    { name: 'Social Media Marketing', category: 'Growth' },
  ];

  const experienceHighlights = [
    '100+ Creative Designs',
    'Brand Identity Projects',
    'Social Media Campaign Designs',
    'Pinterest SEO Graphics',
  ];

  return (
    <section id="services" className="w-full max-w-6xl mx-auto px-6 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Column 1: MY SERVICES (Span 4) */}
        <div className="lg:col-span-4 bg-[#EDE8DC]/70 border border-[#DDD5C5] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
          <div>
            <div 
              onClick={onOpenServices}
              className="flex items-center justify-between mb-6 pb-2 border-b border-[#D8CFBD] cursor-pointer group"
              title="Click to open full Services section"
            >
              <h3 className="text-sm font-bold tracking-[0.2em] text-[#142820] uppercase group-hover:text-[#C99742] transition-colors">
                MY SERVICES
              </h3>
              <ExternalLink className="w-3.5 h-3.5 text-[#A29A88] group-hover:text-[#C99742] transition-colors" />
            </div>

            <div className="flex flex-col gap-3">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.name}
                    onClick={() => onSelectService(service.name)}
                    className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-white/80 cursor-pointer transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#142820] text-white flex items-center justify-center shrink-0 group-hover:bg-[#C99742] group-hover:text-[#142820] transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#1A2E25] group-hover:text-[#142820] group-hover:translate-x-1 transition-transform">
                      {service.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Column 2: MY SKILLS (Span 4) */}
        <div className="lg:col-span-4 bg-[#EDE8DC]/70 border border-[#DDD5C5] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
          <div>
            <div 
              onClick={onOpenSkills}
              className="flex items-center justify-between mb-6 pb-2 border-b border-[#D8CFBD] cursor-pointer group"
              title="Click to open full Skills section"
            >
              <h3 className="text-sm font-bold tracking-[0.2em] text-[#142820] uppercase group-hover:text-[#C99742] transition-colors">
                MY SKILLS
              </h3>
              <ExternalLink className="w-3.5 h-3.5 text-[#A29A88] group-hover:text-[#C99742] transition-colors" />
            </div>

            {/* Design Software */}
            <div className="mb-8 cursor-pointer" onClick={onOpenSkills}>
              <h4 className="text-xs sm:text-sm font-semibold text-[#142820] mb-4 hover:text-[#C99742] transition-colors">
                Design Software
              </h4>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <div title="Adobe Photoshop"><PsIcon /></div>
                <div title="Adobe Illustrator"><AiIcon /></div>
                <div title="Canva Pro"><CanvaIcon /></div>
                <div title="Figma"><FigmaIcon /></div>
                <div title="Microsoft PowerPoint"><PowerPointIcon /></div>
              </div>
            </div>

            {/* Creative Skills */}
            <div className="cursor-pointer" onClick={onOpenSkills}>
              <h4 className="text-xs sm:text-sm font-semibold text-[#142820] mb-4 hover:text-[#C99742] transition-colors">
                Creative Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-2">
                {creativeSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 group">
                    <div className="w-4 h-4 rounded-full bg-[#C99742]/20 text-[#C99742] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 fill-[#C99742] text-white" />
                    </div>
                    <span className="text-xs font-medium text-[#1E3027] group-hover:text-[#C99742] transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: EXPERIENCE (Span 4) */}
        <div className="lg:col-span-4 bg-[#142820] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-md border border-[#1E3A2E]">
          <div>
            <div 
              onClick={onOpenExperience}
              className="flex items-center justify-between mb-6 pb-2 border-b border-[#234234] cursor-pointer group"
              title="Click to open full Experience section"
            >
              <h3 className="text-sm font-bold tracking-[0.2em] text-[#E0EBE4] uppercase group-hover:text-[#E4BF75] transition-colors">
                EXPERIENCE
              </h3>
              <ExternalLink className="w-3.5 h-3.5 text-[#5C7E6E] group-hover:text-[#E4BF75] transition-colors" />
            </div>

            {/* Freelance Designer Headline */}
            <div 
              onClick={onOpenExperience}
              className="flex items-start gap-4 mb-6 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-full bg-[#C99742] text-[#142820] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-[#E4BF75] transition-colors">
                  Freelance Graphic Designer
                </h4>
                <span className="text-xs text-[#E4BF75] font-semibold mt-0.5">
                  2024 – Present
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-[#234234] mb-6"></div>

            {/* Experience Checklist */}
            <div className="flex flex-col gap-4 cursor-pointer" onClick={onOpenExperience}>
              {experienceHighlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 group">
                  <div className="text-[#C99742] shrink-0">
                    <CheckCircle2 className="w-4 h-4 fill-[#C99742] text-[#142820]" />
                  </div>
                  <span className="text-xs sm:text-[13px] text-[#E2ECE6] font-medium group-hover:text-white transition-colors">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
