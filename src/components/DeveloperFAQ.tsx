import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { mushahidData } from '../data/portfolioData';

export const DeveloperFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-bold font-mono text-[#C99742] uppercase tracking-[0.25em] mb-2">
          // COMMON INQUIRIES
        </span>
        <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#142820] tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="w-12 h-1 bg-[#C99742] my-4 rounded-full" />
        <p className="text-sm text-[#4E6157] max-w-xl">
          Everything you need to know about starting a project, contracts, tech stacks, and post-launch maintenance.
        </p>
      </div>

      {/* Accordion list */}
      <div className="space-y-4">
        {mushahidData.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`bg-[#EDE8DC]/80 border transition-all rounded-2xl overflow-hidden ${
                isOpen ? 'border-[#C99742] shadow-sm' : 'border-[#DDD5C5]'
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer group"
              >
                <span className="text-sm sm:text-base font-bold text-[#142820] group-hover:text-[#C99742] transition-colors pr-4">
                  {faq.question}
                </span>
                <div className={`p-1 rounded-full bg-[#142820] text-[#E4BF75] transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-[#C99742] text-[#142820]' : ''
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 border-t border-[#D8CFBD]/50 text-xs sm:text-sm text-[#384D42] leading-relaxed animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};
