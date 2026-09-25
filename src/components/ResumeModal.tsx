import React from 'react';
import { X, Download, Mail, Phone, MapPin, Briefcase, GraduationCap, CheckCircle2, Sparkles, Code2 } from 'lucide-react';
import { mushahidData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onHire: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onHire
}) => {
  if (!isOpen) return null;

  const handlePrintOrDownload = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#F6F3EB] rounded-3xl overflow-hidden shadow-2xl border border-[#C99742]/50 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#142820] text-white border-b border-[#234234]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C99742]" />
            <h3 className="font-serif-display text-lg font-bold tracking-wide">
              Curriculum Vitae — {mushahidData.name}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintOrDownload}
              className="flex items-center gap-1.5 bg-[#C99742] text-[#0E1E17] px-3 py-1.5 rounded-full text-xs font-bold uppercase transition-transform active:scale-95 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#142820]">
          
          {/* Top Banner */}
          <div className="pb-6 border-b border-[#D8CFBD] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif-display text-3xl font-extrabold text-[#142820]">
                {mushahidData.name}
              </h2>
              <p className="text-sm font-bold font-mono text-[#C99742] mt-0.5">
                {mushahidData.title}
              </p>
            </div>

            <div className="text-xs space-y-1 text-[#3D5247]">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C99742]" />
                <span>{mushahidData.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C99742]" />
                <span>{mushahidData.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C99742]" />
                <span>{mushahidData.location}</span>
              </p>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-[#C99742] mb-2">
              // EXECUTIVE SUMMARY
            </h3>
            <p className="text-xs sm:text-sm text-[#2D3F35] leading-relaxed">
              {mushahidData.bio} Proven track record delivering 50+ web platforms, high-throughput microservices, and conversion-focused responsive interfaces.
            </p>
          </div>

          {/* Core Technical Proficiencies */}
          <div>
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-[#C99742] mb-2">
              // TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-[#EDE8DC] border border-[#DDD5C5]">
                <strong className="text-[#142820]">Languages & Frontend:</strong> JavaScript, TypeScript, React.js, Next.js, HTML5, CSS3, Tailwind CSS, Redux.
              </div>
              <div className="p-2.5 rounded-xl bg-[#EDE8DC] border border-[#DDD5C5]">
                <strong className="text-[#142820]">Backend & Cloud:</strong> Node.js, Express.js, RESTful APIs, GraphQL, PostgreSQL, MongoDB, Docker, Git.
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-[#C99742] mb-3">
              // WORK EXPERIENCE
            </h3>
            <div className="space-y-4">
              {mushahidData.experiences.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#EDE8DC] border border-[#DDD5C5]">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm font-bold text-[#142820]">
                      {exp.role} — <span className="font-medium text-[#3D5247]">{exp.company}</span>
                    </h4>
                    <span className="text-[11px] font-mono font-bold bg-[#142820] text-[#E4BF75] px-2.5 py-0.5 rounded-md">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-[#2D3F35]">
                    {exp.description.slice(0, 2).map((d, dIdx) => (
                      <li key={dIdx}>• {d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-[#C99742] mb-2">
              // EDUCATION
            </h3>
            {mushahidData.education.map((edu, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#EDE8DC] border border-[#DDD5C5] text-xs">
                <div className="flex justify-between items-center font-bold text-[#142820]">
                  <span>{edu.degree}</span>
                  <span className="font-mono text-[#5C6B62]">{edu.period}</span>
                </div>
                <p className="text-[#3D5247] mt-0.5">{edu.institution}</p>
              </div>
            ))}
          </div>

          {/* Footer Hire CTA */}
          <div className="pt-4 border-t border-[#D8CFBD] flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onHire();
              }}
              className="flex-1 bg-[#142820] hover:bg-[#1C3A2E] text-[#E4BF75] py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Hire Mushahid Hussain
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3.5 rounded-full border border-[#142820] text-xs font-bold uppercase tracking-wider hover:bg-[#ECE6D8] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
