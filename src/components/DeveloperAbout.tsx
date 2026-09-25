import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  GraduationCap, 
  Briefcase, 
  Code, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Award
} from 'lucide-react';
import { mushahidData } from '../data/portfolioData';

interface DeveloperAboutProps {
  onOpenContact: () => void;
}

export const DeveloperAbout: React.FC<DeveloperAboutProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="w-full bg-[#142820] text-white py-16 px-4 sm:px-6 relative overflow-hidden border-y border-[#1E3A2E]">
      
      {/* Background Matrix */}
      <div className="absolute top-6 right-8 w-32 h-32 dot-matrix opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* Left Side: Bio & Core Philosophy */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          <div className="inline-block mb-1">
            <span className="text-[#C99742] text-xs font-bold tracking-[0.25em] uppercase font-mono">
              // ABOUT ME
            </span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            I'm Mushahid Hussain!
          </h2>

          <div className="w-16 h-1 bg-[#C99742] mb-6 rounded-full" />

          <p className="text-[#CFDCD4] text-sm sm:text-base leading-relaxed font-light mb-6">
            {mushahidData.bio}
          </p>

          <p className="text-[#CFDCD4] text-sm sm:text-base leading-relaxed font-light mb-8">
            Whether building comprehensive e-commerce engines, real-time IoT dashboards, or lightning-fast interactive web applications, I adhere to modern engineering best practices: testable architectures, clean component hierarchies, semantic markup, and optimal performance.
          </p>

          {/* Quick Highlights Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#C99742] shrink-0" />
              <span className="text-xs sm:text-sm text-[#E0EBE4]">MERN & Next.js Full Stack</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#C99742] shrink-0" />
              <span className="text-xs sm:text-sm text-[#E0EBE4]">RESTful & GraphQL APIs</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#C99742] shrink-0" />
              <span className="text-xs sm:text-sm text-[#E0EBE4]">Database Optimization</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#C99742] shrink-0" />
              <span className="text-xs sm:text-sm text-[#E0EBE4]">Lighthouse 95+ Score Guarantee</span>
            </div>
          </div>

        </div>

        {/* Right Side: Details Card & Monogram Badge */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Information & Contact Grid Card */}
          <div className="bg-[#193228] border border-[#244837] rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C99742] font-mono mb-5 pb-2 border-b border-[#234234]">
              Developer Specifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
              
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#142820] text-[#C99742] border border-[#244837] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-[#8EA69A] font-semibold uppercase">Location</p>
                  <p className="font-medium text-white">{mushahidData.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#142820] text-[#C99742] border border-[#244837] shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-[#8EA69A] font-semibold uppercase">Experience</p>
                  <p className="font-medium text-white">5+ Years Professional</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#142820] text-[#C99742] border border-[#244837] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-[#8EA69A] font-semibold uppercase">Email</p>
                  <a 
                    href={`mailto:${mushahidData.email}`}
                    className="font-medium text-[#E4BF75] hover:underline truncate block max-w-[200px]"
                  >
                    {mushahidData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#142820] text-[#C99742] border border-[#244837] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-[#8EA69A] font-semibold uppercase">Phone / WhatsApp</p>
                  <a 
                    href={`https://wa.me/923179948934`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#E4BF75] hover:underline"
                  >
                    {mushahidData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:col-span-2">
                <div className="p-2 rounded-xl bg-[#142820] text-[#C99742] border border-[#244837] shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-[#8EA69A] font-semibold uppercase">Education</p>
                  <p className="font-medium text-white">BS in Computer Science (BSCS)</p>
                </div>
              </div>

            </div>

            {/* CTA in about card */}
            <div className="mt-6 pt-4 border-t border-[#234234] flex items-center justify-between">
              <span className="text-xs text-[#A2B8AC]">Ready to start a new project?</span>
              <button
                onClick={onOpenContact}
                className="bg-[#C99742] hover:bg-[#DCA84D] text-[#0E1E17] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Hire Mushahid
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
