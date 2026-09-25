import React from 'react';
import { X, Check, Send, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { GoldSparkle } from './IconsAndDecorations';

interface ServiceModalProps {
  serviceName: string | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

const serviceDetailsData: Record<string, {
  tagline: string;
  deliverables: string[];
  turnaround: string;
  revisions: string;
  tools: string[];
}> = {
  'Logo Design': {
    tagline: 'Distinctive, timeless brand marks crafted from sketch to vector perfection.',
    deliverables: [
      '3-4 Unique Initial Logo Concepts',
      'Full Vector Master Files (AI, EPS, SVG, PDF)',
      'High-Resolution Transparent PNGs & JPEGs',
      'Color, Black & White, and Monochrome Variations',
      'Complete Font & Color Palette Guide'
    ],
    turnaround: '2-3 Business Days',
    revisions: 'Unlimited Revisions until 100% Satisfied',
    tools: ['Adobe Illustrator', 'Photoshop']
  },
  'Brand Identity': {
    tagline: 'End-to-end visual branding architecture that establishes memorable market authority.',
    deliverables: [
      'Primary & Secondary Logo Lockups + Brand Mark',
      'Comprehensive Brand Style Guide (PDF Booklet)',
      'Color Hierarchy & Typography Pairing System',
      'Stationery Mockups (Business Card, Letterhead, Envelope)',
      'Social Media Profile Kit & Pattern Elements'
    ],
    turnaround: '4-6 Business Days',
    revisions: 'Unlimited Revisions',
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma']
  },
  'Business Card Design': {
    tagline: 'Luxury, modern, and memorable stationery that makes an unforgettable impression.',
    deliverables: [
      'Double-Sided Custom Card Layouts',
      'Print-Ready 300 DPI CMYK Files with Bleed Margins',
      'Special Finishes Ready (Spot UV, Gold Foil, Embossing)',
      'Digital Interactive / QR Code Integration',
      'Editable Source Files'
    ],
    turnaround: '24-48 Hours',
    revisions: 'Unlimited Revisions',
    tools: ['Adobe Illustrator', 'Photoshop']
  },
  'Social Media Design': {
    tagline: 'High-converting social graphics and templates tailored for viral engagement.',
    deliverables: [
      'Custom Post & Carousel Templates (Instagram, TikTok, LinkedIn)',
      'Story & Reel Cover Graphics',
      'Cohesive Feed Aesthetic & Grid Strategy',
      'Editable Canva or Figma Templates Included',
      'Optimized Web Formats (JPG, PNG, MP4)'
    ],
    turnaround: '2-3 Business Days',
    revisions: 'Unlimited Revisions',
    tools: ['Canva Pro', 'Photoshop', 'Illustrator']
  },
  'Poster & Flyer Design': {
    tagline: 'Eye-catching promotional posters and flyers designed to drive event attendance & sales.',
    deliverables: [
      'Print-Ready CMYK Files & Web Optimized Digital Files',
      'Multiple Size Adaptations (A4, A3, US Letter, Instagram Format)',
      'Custom Visual Typography & Composition',
      'High-Res 300 DPI PDF/PNG Outputs',
      'Commercial Use License'
    ],
    turnaround: '24-48 Hours',
    revisions: 'Unlimited Revisions',
    tools: ['Photoshop', 'Illustrator']
  },
  'CV / Resume Design': {
    tagline: 'Modern, ATS-compatible executive resumes that land interviews and highlight strengths.',
    deliverables: [
      '1-2 Page Professional Custom Resume Layout',
      'Matching Cover Letter Template',
      'ATS-Optimized Formatting & Typographic Structure',
      'Editable Canva / Word / Illustrator Document',
      'Interactive Hyperlinked PDF'
    ],
    turnaround: '24 Hours',
    revisions: 'Unlimited Revisions',
    tools: ['Canva Pro', 'Adobe Illustrator']
  },
  'Presentation Design': {
    tagline: 'Persuasive pitch decks and keynote slides designed to captivate investors & clients.',
    deliverables: [
      'Modern Custom Slide Deck (PowerPoint, Keynote, Canva, Figma)',
      'Infographics, Chart Cleanups & Data Visualization',
      'Custom Master Slides & Typographic Layouts',
      'Exported PPTX, PDF, and High-Res PNGs',
      'Animations & Transition Polish'
    ],
    turnaround: '3-5 Business Days',
    revisions: 'Unlimited Revisions',
    tools: ['PowerPoint', 'Canva', 'Figma']
  },
  'Pinterest Pins': {
    tagline: 'Click-magnet Pinterest graphics optimized for SEO, high save rates, and site traffic.',
    deliverables: [
      'Standard & Long-form Viral Pin Templates (1000x1500px)',
      'SEO-Optimized Headlines & Callouts',
      'Batch Pin Variations for A/B Testing',
      'Editable Canva Templates',
      'High Click-Through Design Strategy'
    ],
    turnaround: '24-48 Hours',
    revisions: 'Unlimited Revisions',
    tools: ['Canva Pro', 'Photoshop']
  },
  'AI Design': {
    tagline: 'Next-generation AI-assisted artwork, concept ideation, and rapid creative prototypes.',
    deliverables: [
      'Custom Curated Visual Concepts',
      'High-Resolution Upscaled Asset Outputs',
      'Vectorization & Manual Graphic Refinement',
      'Commercial Rights Included',
      'Multi-Format Deliverables'
    ],
    turnaround: '24 Hours',
    revisions: 'Unlimited Iterations',
    tools: ['Generative AI', 'Photoshop', 'Illustrator']
  }
};

export const ServiceModal: React.FC<ServiceModalProps> = ({
  serviceName,
  onClose,
  onBookService,
}) => {
  if (!serviceName) return null;

  const data = serviceDetailsData[serviceName] || serviceDetailsData['Logo Design'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#F6F3EB] rounded-3xl overflow-hidden shadow-2xl border border-[#C99742]/50 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#142820] text-white border-b border-[#234234]">
          <div className="flex items-center gap-2">
            <GoldSparkle className="w-5 h-5 text-[#C99742]" />
            <h3 className="font-serif-display text-xl font-bold tracking-wide">
              {serviceName}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          <p className="text-sm font-medium text-[#2C3E34] leading-relaxed">
            {data.tagline}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 bg-[#ECE6D8] p-3.5 rounded-2xl border border-[#DDD5C5]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C99742]" />
              <div>
                <p className="text-[10px] uppercase font-bold text-[#63726A]">Turnaround</p>
                <p className="text-xs font-semibold text-[#142820]">{data.turnaround}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C99742]" />
              <div>
                <p className="text-[10px] uppercase font-bold text-[#63726A]">Revisions</p>
                <p className="text-xs font-semibold text-[#142820]">100% Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#142820] mb-3">
              What's Included in this Package:
            </h4>
            <div className="space-y-2.5">
              {data.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#142820] text-[#E4BF75] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-xs text-[#2A3B32] font-medium leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Badge */}
          <div className="pt-1 flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase text-[#63726A]">Software:</span>
            <div className="flex gap-1.5">
              {data.tools.map((t) => (
                <span key={t} className="text-[10px] font-semibold bg-[#142820] text-[#E4BF75] px-2.5 py-0.5 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="pt-3 flex gap-3">
            <button
              onClick={() => {
                onClose();
                onBookService(serviceName);
              }}
              className="flex-1 flex items-center justify-center gap-2 bg-[#142820] hover:bg-[#1C3A2E] text-white py-3.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#E4BF75]" />
              <span>Order / Inquire for {serviceName}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
