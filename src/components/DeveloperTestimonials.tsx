import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { mushahidData } from '../data/portfolioData';

export const DeveloperTestimonials: React.FC = () => {
  return (
    <section id="testimonials" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-bold font-mono text-[#C99742] uppercase tracking-[0.25em] mb-2">
          // CLIENT SATISFACTION
        </span>
        <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#142820] tracking-tight">
          Client Feedback & Reviews
        </h2>
        <div className="w-12 h-1 bg-[#C99742] my-4 rounded-full" />
        <p className="text-sm text-[#4E6157] max-w-xl">
          Hear directly from founders, project managers, and agencies who partnered with me to bring their vision to life.
        </p>
      </div>

      {/* Testimonials 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mushahidData.testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-[#EDE8DC]/80 border border-[#DDD5C5] rounded-3xl p-6 sm:p-7 shadow-xs hover:border-[#C99742] transition-colors flex flex-col justify-between"
          >
            <div>
              {/* Star Rating & Quote Mark */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-[#C99742]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C99742]" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#C99742]/40" />
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-[#2E4238] leading-relaxed italic mb-6">
                "{item.content}"
              </p>
            </div>

            {/* Author details */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-[#D8CFBD]">
              <div className="w-10 h-10 rounded-full bg-[#142820] text-[#E4BF75] font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                {item.avatarText}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs sm:text-sm font-bold text-[#142820]">
                    {item.name}
                  </h4>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <p className="text-[11px] text-[#5C6B62] font-semibold">
                  {item.role}, {item.company}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
