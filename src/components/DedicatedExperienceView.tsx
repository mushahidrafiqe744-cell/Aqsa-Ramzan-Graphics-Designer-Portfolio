import React from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Clock, 
  HeartHandshake, 
  Layers, 
  Send 
} from 'lucide-react';
import { GoldSparkle } from './IconsAndDecorations';

interface DedicatedExperienceViewProps {
  onOpenContact: (subject?: string) => void;
}

export const DedicatedExperienceView: React.FC<DedicatedExperienceViewProps> = ({ onOpenContact }) => {
  const milestones = [
    {
      num: '100+',
      title: '100+ Creative Designs Completed',
      desc: 'Crafted over a hundred unique logos, social posts, event flyers, and presentation decks for international and local businesses.'
    },
    {
      num: '30+',
      title: 'Brand Identity Projects Delivered',
      desc: 'Formulated complete visual guidelines, stationery packages, and typography pairing systems.'
    },
    {
      num: '50+',
      title: 'Social Media Campaign Designs',
      desc: 'Designed high-engagement promotional carousels and festive sale campaigns boosting reach and conversion rates.'
    },
    {
      num: '200+',
      title: 'Pinterest SEO Graphics',
      desc: 'Created viral pin layouts optimized for organic saves, clicks, and steady referral web traffic.'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 mb-2 animate-slide-up">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C99742] uppercase">
            PROFESSIONAL BACKGROUND
          </span>
          <GoldSparkle className="w-4 h-4 text-[#C99742] animate-shimmer" />
        </div>
        <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#142820] flex justify-center gap-1">
          {"Work Experience".split("").map((letter, i) => (
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
          Delivering high-quality visual brand identities and marketing materials with strict adherence to timelines and client satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Main Experience Highlight Card (Span 7) */}
        <div className="lg:col-span-7 bg-[#142820] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#1E3A2E] flex flex-col justify-between hover:border-[#C99742] transition-all duration-300 animate-slide-up">
          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#234234]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#C99742] text-[#142820] flex items-center justify-center shadow-md animate-pulse-glow">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-white">
                    Freelance Graphic Designer
                  </h3>
                  <p className="text-xs text-[#E4BF75] font-semibold mt-0.5">
                    Self-Employed & Contract Design
                  </p>
                </div>
              </div>

              <span className="text-xs font-mono font-bold bg-[#1C3A2E] text-[#E4BF75] border border-[#2B4E3C] px-3.5 py-1.5 rounded-full number-badge-glow">
                2024 – Present
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#CFDCD4] leading-relaxed mb-6 font-light">
              Collaborating directly with business owners, marketing teams, and content creators to establish their brand presence. Managing the end-to-end design lifecycle from initial concept sketches and mood boards to high-resolution print-ready delivery.
            </p>

            {/* Core Deliverable Milestones with Animated Number Counters */}
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C99742] mb-3">
              Key Achievements & Track Record:
            </h4>

            <div className="space-y-3 mb-6">
              {milestones.map((m, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#193228] border border-[#244837] hover:border-[#C99742] hover:bg-[#1C3B2E] hover:translate-x-1.5 transition-all duration-300 group"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <span className="text-xs font-mono font-extrabold text-[#C99742] bg-[#142820] px-2.5 py-1 rounded-lg shrink-0 group-hover:scale-115 transition-transform number-badge-glow">
                    {m.num}
                  </span>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-white mb-0.5 group-hover:text-[#E4BF75] transition-colors">{m.title}</h5>
                    <p className="text-xs text-[#A8BEB3] leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#234234] flex items-center justify-between">
            <span className="text-xs text-[#CFDCD4]">Looking for a dedicated graphic designer?</span>
            <button
              onClick={() => onOpenContact('Freelance Graphic Design Contract')}
              className="bg-[#C99742] hover:bg-[#DCA84D] text-[#0E1E17] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* Right Column: Work Ethics & Guarantees (Span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between animate-slide-up stagger-2">
          
          <div className="bg-[#EDE8DC]/80 border border-[#DDD5C5] rounded-3xl p-6 sm:p-7 shadow-xs">
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#142820] uppercase mb-4 pb-2 border-b border-[#D8CFBD]">
              How I Deliver Value
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-2 rounded-2xl hover:bg-white/70 transition-colors group hover:-translate-y-0.5">
                <div className="p-2.5 rounded-xl bg-[#142820] text-[#E4BF75] group-hover:bg-[#C99742] group-hover:text-[#142820] shrink-0 mt-0.5 transition-colors group-hover:rotate-12">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#142820] uppercase">On-Time Turnaround</h4>
                  <p className="text-xs text-[#3E5247] mt-0.5">Quick delivery (24-48h) without compromising creative detail or precision.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded-2xl hover:bg-white/70 transition-colors group hover:-translate-y-0.5">
                <div className="p-2.5 rounded-xl bg-[#142820] text-[#E4BF75] group-hover:bg-[#C99742] group-hover:text-[#142820] shrink-0 mt-0.5 transition-colors group-hover:rotate-12">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#142820] uppercase">Vector & Print Master Files</h4>
                  <p className="text-xs text-[#3E5247] mt-0.5">Delivered in all standard formats (AI, EPS, SVG, PDF, PNG, JPG).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded-2xl hover:bg-white/70 transition-colors group hover:-translate-y-0.5">
                <div className="p-2.5 rounded-xl bg-[#142820] text-[#E4BF75] group-hover:bg-[#C99742] group-hover:text-[#142820] shrink-0 mt-0.5 transition-colors group-hover:rotate-12">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#142820] uppercase">Client Satisfaction First</h4>
                  <p className="text-xs text-[#3E5247] mt-0.5">Iterative revisions until the visual identity aligns 100% with your goals.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#EDE8DC]/80 border border-[#DDD5C5] rounded-3xl p-6 text-center">
            <h4 className="font-serif-display text-lg font-bold text-[#142820] mb-1">
              Ready to collaborate?
            </h4>
            <p className="text-xs text-[#4F6357] mb-4">
              Reach out with your project brief and receive prompt initial ideas.
            </p>
            <button
              onClick={() => onOpenContact('General Project Collaboration')}
              className="w-full bg-[#142820] hover:bg-[#1C3A2E] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-102 active:scale-95 shadow-md cursor-pointer flex items-center justify-center gap-2 group/btn"
            >
              <span>Let's Talk</span>
              <Send className="w-3.5 h-3.5 text-[#E4BF75] group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
