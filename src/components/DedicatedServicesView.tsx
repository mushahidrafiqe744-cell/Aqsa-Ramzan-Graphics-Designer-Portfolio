import React, { useState } from 'react';
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
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Send
} from 'lucide-react';
import { GoldSparkle } from './IconsAndDecorations';

interface DedicatedServicesViewProps {
  onSelectService: (serviceName: string) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const DedicatedServicesView: React.FC<DedicatedServicesViewProps> = ({
  onSelectService,
  onOpenContact
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const services = [
    {
      id: 'logo-design',
      name: 'Logo Design',
      icon: PenTool,
      category: 'Identity',
      num: '01',
      desc: 'Distinctive, memorable brand marks, luxury monogram seals, vector master files & typography guides.',
      turnaround: '2-3 Days',
      features: ['3-4 Unique Concepts', 'Vector AI, EPS, SVG, PDF', 'Full Color & B/W Versions']
    },
    {
      id: 'brand-identity',
      name: 'Brand Identity',
      icon: Layers,
      category: 'Identity',
      num: '02',
      desc: 'Comprehensive visual branding architecture, brand guidelines, color palettes, typography and stationery systems.',
      turnaround: '4-6 Days',
      features: ['Primary & Secondary Marks', 'Brand Style Guide PDF', 'Stationery Mockups']
    },
    {
      id: 'business-cards',
      name: 'Business Card Design',
      icon: CreditCard,
      category: 'Print',
      num: '03',
      desc: 'Luxury, minimalist and corporate double-sided business cards tailored with print-ready bleeds and foil finishes.',
      turnaround: '24-48 Hours',
      features: ['300 DPI CMYK Print Ready', 'Gold Foil / Spot UV Specs', 'QR Code / Digital vCard']
    },
    {
      id: 'social-media',
      name: 'Social Media Design',
      icon: Share2,
      category: 'Digital',
      num: '04',
      desc: 'High-converting Instagram, TikTok, LinkedIn and Facebook posts, story templates and carousel graphics.',
      turnaround: '2-3 Days',
      features: ['Custom Carousel Templates', 'Reel / Story Covers', 'Editable Canva Templates']
    },
    {
      id: 'poster-flyer',
      name: 'Poster & Flyer Design',
      icon: FileText,
      category: 'Print',
      num: '05',
      desc: 'Eye-catching promotional event posters, seasonal sales flyers, and print advertising materials.',
      turnaround: '24-48 Hours',
      features: ['Print & Web Formats', 'A4, A3 & Social Dimensions', 'High-Res 300 DPI Outputs']
    },
    {
      id: 'cv-resume',
      name: 'CV / Resume Design',
      icon: FileCheck,
      category: 'Editorial',
      num: '06',
      desc: 'Modern, clean, ATS-compliant professional resumes and cover letters designed for career impact.',
      turnaround: '24 Hours',
      features: ['1-2 Page Custom Layout', 'Matching Cover Letter', 'ATS-Friendly Structure']
    },
    {
      id: 'presentation-design',
      name: 'Presentation Design',
      icon: Monitor,
      category: 'Digital',
      num: '07',
      desc: 'Persuasive investor pitch decks, corporate slide presentations and keynote decks.',
      turnaround: '3-5 Days',
      features: ['PowerPoint, Keynote, Canva', 'Custom Infographics & Charts', 'Master Slide Templates']
    },
    {
      id: 'pinterest-pins',
      name: 'Pinterest Pins',
      icon: Pin,
      category: 'Digital',
      num: '08',
      desc: 'Click-worthy viral Pinterest pin graphics optimized for SEO, high save rates and organic web traffic.',
      turnaround: '24-48 Hours',
      features: ['1000x1500px Viral Dimensions', 'SEO Headline Callouts', 'Batch Pin A/B Variations']
    },
    {
      id: 'ai-design',
      name: 'AI Design',
      icon: Sparkles,
      category: 'Digital',
      num: '09',
      desc: 'Next-generation AI-assisted artwork concepts, rapid visual ideation and vector refinement.',
      turnaround: '24 Hours',
      features: ['Custom Visual Ideation', 'High-Res Upscaling', 'Commercial Rights Included']
    },
  ];

  const categories = ['All', 'Identity', 'Digital', 'Print', 'Editorial'];

  const filteredServices = activeFilter === 'All' 
    ? services 
    : services.filter(s => s.category === activeFilter);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 mb-2 animate-slide-up">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C99742] uppercase">
            SERVICES OFFERED
          </span>
          <GoldSparkle className="w-4 h-4 text-[#C99742] animate-shimmer" />
        </div>
        <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#142820] flex justify-center gap-1">
          {"My Creative Services".split("").map((letter, i) => (
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
          Tailored graphic design and brand identity solutions crafted to elevate your business and make a lasting impression.
        </p>
      </div>

      {/* Filter Tabs with animated pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-slide-up">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
              activeFilter === cat
                ? 'bg-[#142820] text-[#E4BF75] shadow-md scale-105'
                : 'bg-[#ECE6D8] text-[#142820] hover:bg-[#E0D8C8]'
            }`}
          >
            {cat} {cat === 'All' ? `(${services.length})` : ''}
          </button>
        ))}
      </div>

      {/* Services Grid (3 columns) with animated number tags and hover lift */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, idx) => {
          const IconComp = service.icon;
          return (
            <div
              key={service.id}
              className="bg-[#EDE8DC]/80 border border-[#DDD5C5] hover:border-[#C99742] rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/90 group relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Animated Corner Number Tag */}
              <div className="absolute top-3 right-4 font-mono text-xs font-extrabold text-[#9E9583] group-hover:text-[#C99742] group-hover:scale-125 transition-all number-badge-glow">
                #{service.num}
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#142820] text-[#E4BF75] flex items-center justify-center group-hover:bg-[#C99742] group-hover:text-[#142820] group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#5C6B62] bg-white/80 px-2.5 py-1 rounded-full border border-[#DDD5C5] mr-6">
                    <Clock className="w-3 h-3 text-[#C99742]" />
                    <span className="font-mono">{service.turnaround}</span>
                  </div>
                </div>

                <h3 className="font-serif-display text-xl font-bold text-[#142820] mb-2 group-hover:text-[#C99742] transition-colors">
                  {service.name}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#3E5247] leading-relaxed mb-4">
                  {service.desc}
                </p>

                {/* Features */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8CFBD] mb-4">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#2A3E33]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C99742] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => onSelectService(service.name)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[#142820] text-[#142820] hover:bg-[#142820] hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:scale-102 cursor-pointer"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <button
                  onClick={() => onOpenContact(`Inquiry for ${service.name}`)}
                  className="p-2.5 rounded-xl bg-[#142820] hover:bg-[#C99742] text-white hover:text-[#142820] transition-all hover:rotate-12 cursor-pointer shadow-xs group/btn"
                  title="Order Service"
                >
                  <Send className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
