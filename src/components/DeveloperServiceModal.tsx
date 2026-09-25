import React from 'react';
import { X, Check, Send, Sparkles, Clock, ShieldCheck, Layers } from 'lucide-react';
import { ServiceItem } from '../data/portfolioData';

interface DeveloperServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceTitle: string) => void;
}

export const DeveloperServiceModal: React.FC<DeveloperServiceModalProps> = ({
  service,
  onClose,
  onBook,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#F6F3EB] rounded-3xl overflow-hidden shadow-2xl border border-[#C99742]/50 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#142820] text-white border-b border-[#234234]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#C99742]" />
            <h3 className="font-serif-display text-xl font-bold tracking-wide">
              {service.title}
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
            {service.longDesc}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 bg-[#ECE6D8] p-3.5 rounded-2xl border border-[#DDD5C5]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C99742]" />
              <div>
                <p className="text-[10px] uppercase font-bold text-[#63726A]">Timeline</p>
                <p className="text-xs font-semibold text-[#142820]">{service.turnaround}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C99742]" />
              <div>
                <p className="text-[10px] uppercase font-bold text-[#63726A]">Guarantee</p>
                <p className="text-xs font-semibold text-[#142820]">100% Quality & Testing</p>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#142820] mb-3">
              Included Deliverables:
            </h4>
            <div className="space-y-2.5">
              {service.deliverables.map((item, idx) => (
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

          {/* Tech stack badge */}
          <div className="pt-1 flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold font-mono uppercase text-[#63726A]">Technologies:</span>
            <div className="flex flex-wrap gap-1.5">
              {service.tech.map((t) => (
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
                onBook(service.title);
              }}
              className="flex-1 flex items-center justify-center gap-2 bg-[#142820] hover:bg-[#1C3A2E] text-white py-3.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#E4BF75]" />
              <span>Inquire / Request Service</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
