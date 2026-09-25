import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  Terminal,
  Award
} from 'lucide-react';
import { mushahidData } from '../data/portfolioData';

export const DeveloperTimeline: React.FC = () => {
  return (
    <section id="experience" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-bold font-mono text-[#C99742] uppercase tracking-[0.25em] mb-2">
          // CAREER & EDUCATION
        </span>
        <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#142820] tracking-tight">
          Experience & Education
        </h2>
        <div className="w-12 h-1 bg-[#C99742] my-4 rounded-full" />
        <p className="text-sm text-[#4E6157] max-w-xl">
          A track record of engineering leadership, production software delivery, and formal computer science foundations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Professional Experience (Span 7) */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-[#142820] text-[#E4BF75]">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display text-2xl font-bold text-[#142820]">
              Work History
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#D5CDBC] space-y-8">
            {mushahidData.experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#142820] border-4 border-[#F6F3EB] group-hover:bg-[#C99742] transition-colors" />

                <div className="bg-[#EDE8DC]/80 border border-[#DDD5C5] rounded-3xl p-6 shadow-xs hover:border-[#C99742] transition-colors">
                  
                  {/* Header info */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#C99742] bg-[#142820] px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                    <span className="text-xs text-[#5C6B62] font-semibold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <h4 className="font-serif-display text-lg font-bold text-[#142820] mt-1">
                    {exp.role}
                  </h4>
                  <p className="text-xs font-semibold text-[#3D5246] mb-4">
                    {exp.company}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#2F4439] leading-relaxed">
                        <span className="text-[#C99742] font-bold mt-0.5">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#D8CFBD]">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold bg-[#142820] text-[#E4BF75] px-2 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Education & Certifications (Span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Education Block */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-[#142820] text-[#E4BF75]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-[#142820]">
                Academic Degree
              </h3>
            </div>

            <div className="space-y-4">
              {mushahidData.education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="bg-[#EDE8DC]/80 border border-[#DDD5C5] rounded-3xl p-6 shadow-xs"
                >
                  <span className="text-xs font-mono font-bold text-[#C99742] bg-[#142820] px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                  <h4 className="font-serif-display text-lg font-bold text-[#142820] mt-3 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-bold text-[#4B6154] mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[#2F4439] leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Competencies Card */}
          <div className="bg-[#142820] text-white rounded-3xl p-6 border border-[#234234] shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[#C99742]" />
              <h4 className="font-serif-display text-lg font-bold text-white">
                Engineering Tenets
              </h4>
            </div>

            <div className="space-y-3 text-xs text-[#CFDCD4]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C99742] shrink-0 mt-0.5" />
                <span><strong>Component Modularity:</strong> Decoupled UI components with strict TypeScript types and maintainable states.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C99742] shrink-0 mt-0.5" />
                <span><strong>Security First:</strong> Zero secrets in client builds, sanitized inputs, rate-limiting, and encrypted sessions.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C99742] shrink-0 mt-0.5" />
                <span><strong>Speed Centric:</strong> Sub-second response times, optimized bundle splitting, and modern compression.</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
