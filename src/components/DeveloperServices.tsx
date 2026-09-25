import React from 'react';
import { 
  Code2, 
  Layout, 
  ShoppingCart, 
  Server, 
  Zap, 
  Wrench, 
  Check, 
  ArrowRight,
  Send,
  Clock
} from 'lucide-react';
import { mushahidData, ServiceItem } from '../data/portfolioData';

interface DeveloperServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenContact: (subject: string) => void;
}

export const DeveloperServices: React.FC<DeveloperServicesProps> = ({
  onSelectService,
  onOpenContact
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'ShoppingCart': return <ShoppingCart className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="w-full bg-[#142820] text-white py-16 px-4 sm:px-6 relative border-y border-[#1E3A2E]">
      
      {/* Matrix Overlay */}
      <div className="absolute top-10 left-6 w-24 h-24 dot-matrix opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold font-mono text-[#C99742] uppercase tracking-[0.25em] mb-2">
            // WHAT I OFFER
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Services & Solutions
          </h2>
          <div className="w-12 h-1 bg-[#C99742] my-4 rounded-full" />
          <p className="text-sm text-[#CFDCD4] max-w-xl">
            High-impact web engineering solutions tailored for startups, established brands, and entrepreneurs worldwide.
          </p>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mushahidData.services.map((service) => (
            <div
              key={service.id}
              className="bg-[#193228] border border-[#244837] hover:border-[#C99742] rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group"
            >
              <div>
                {/* Card Top Icon & Turnaround */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#142820] border border-[#C99742]/50 text-[#C99742] flex items-center justify-center group-hover:bg-[#C99742] group-hover:text-[#142820] transition-colors shadow-sm">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#A2B8AC] bg-[#142820] px-2.5 py-1 rounded-full border border-[#234234]">
                    <Clock className="w-3 h-3 text-[#C99742]" />
                    <span>{service.turnaround}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif-display text-xl font-bold text-white mb-2 group-hover:text-[#E4BF75] transition-colors">
                  {service.title}
                </h3>

                {/* Short Desc */}
                <p className="text-xs sm:text-[13px] text-[#CFDCD4] leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Deliverables snippet */}
                <div className="space-y-2 mb-6 pt-2 border-t border-[#234234]">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#E0EBE4]">
                      <Check className="w-3.5 h-3.5 text-[#C99742] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.tech.map((t) => (
                    <span 
                      key={t}
                      className="text-[10px] font-semibold bg-[#142820] text-[#E4BF75] border border-[#234234] px-2 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => onSelectService(service)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[#C99742]/60 hover:border-[#C99742] text-[#E4BF75] hover:bg-[#C99742]/10 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  onClick={() => onOpenContact(`Inquiry for ${service.title}`)}
                  className="p-2.5 rounded-xl bg-[#C99742] hover:bg-[#DCA84D] text-[#0E1E17] transition-all cursor-pointer shadow-xs"
                  title="Request Service Quote"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
