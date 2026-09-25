import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { mushahidData } from '../data/portfolioData';

export const DeveloperProcess: React.FC = () => {
  return (
    <section id="process" className="w-full bg-[#142820] text-white py-16 px-4 sm:px-6 relative border-y border-[#1E3A2E]">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-bold font-mono text-[#C99742] uppercase tracking-[0.25em] mb-2">
            // HOW I WORK
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Development Workflow
          </h2>
          <div className="w-12 h-1 bg-[#C99742] my-4 rounded-full" />
          <p className="text-sm text-[#CFDCD4] max-w-xl">
            A structured, transparent engineering methodology ensuring smooth communication, zero surprises, and on-time delivery.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mushahidData.processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="bg-[#193228] border border-[#244837] hover:border-[#C99742] rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative group shadow-md"
            >
              <div>
                <span className="font-mono text-3xl font-extrabold text-[#C99742] block mb-3 opacity-90 group-hover:scale-110 transition-transform">
                  {step.step}
                </span>
                
                <h3 className="font-serif-display text-base font-bold text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#CFDCD4] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-4 pt-3 border-t border-[#234234] flex items-center justify-between text-[11px] font-mono text-[#8EA69A]">
                <span>Phase 0{idx + 1}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C99742]" />
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
