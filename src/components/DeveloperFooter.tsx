import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Phone, Mail } from 'lucide-react';
import { mushahidData } from '../data/portfolioData';
import { GoldSparkle } from './IconsAndDecorations';

interface DeveloperFooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const DeveloperFooter: React.FC<DeveloperFooterProps> = ({
  onNavigate,
  onOpenContact
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0E1E17] text-white border-t border-[#1C3A2E] py-12 px-4 sm:px-6 relative">
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Banner Ribbon */}
        <div className="flex items-center gap-3 text-center mb-8 flex-wrap justify-center">
          <GoldSparkle className="w-4 h-4 text-[#C99742]" />
          <p className="font-serif-display text-lg sm:text-2xl text-white">
            Transforming Ideas into High-Performance Digital Experiences
          </p>
          <GoldSparkle className="w-4 h-4 text-[#C99742]" />
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#A2B8AC] mb-8">
          <button onClick={() => onNavigate('hero')} className="hover:text-[#E4BF75] transition-colors cursor-pointer">Home</button>
          <button onClick={() => onNavigate('about')} className="hover:text-[#E4BF75] transition-colors cursor-pointer">About</button>
          <button onClick={() => onNavigate('skills')} className="hover:text-[#E4BF75] transition-colors cursor-pointer">Skills</button>
          <button onClick={() => onNavigate('services')} className="hover:text-[#E4BF75] transition-colors cursor-pointer">Services</button>
          <button onClick={() => onNavigate('experience')} className="hover:text-[#E4BF75] transition-colors cursor-pointer">Experience</button>
          <button onClick={() => onNavigate('projects')} className="hover:text-[#E4BF75] transition-colors cursor-pointer">Projects</button>
          <button onClick={() => onNavigate('faq')} className="hover:text-[#E4BF75] transition-colors cursor-pointer">FAQ</button>
          <button onClick={() => onNavigate('contact')} className="hover:text-[#E4BF75] transition-colors cursor-pointer">Contact</button>
        </div>

        {/* Social & Direct Contact Icons */}
        <div className="flex items-center gap-3 mb-8">
          <a
            href="https://github.com/mushahid-hussain"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#142820] hover:bg-[#C99742] text-white hover:text-[#0E1E17] border border-[#234234] flex items-center justify-center transition-all shadow-xs"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#142820] hover:bg-[#C99742] text-white hover:text-[#0E1E17] border border-[#234234] flex items-center justify-center transition-all shadow-xs"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/923179948934`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#142820] hover:bg-[#C99742] text-white hover:text-[#0E1E17] border border-[#234234] flex items-center justify-center transition-all shadow-xs"
            title="WhatsApp Chat"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${mushahidData.email}`}
            className="w-10 h-10 rounded-full bg-[#142820] hover:bg-[#C99742] text-white hover:text-[#0E1E17] border border-[#234234] flex items-center justify-center transition-all shadow-xs"
            title="Email Direct"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top button & copyright */}
        <div className="w-full pt-8 border-t border-[#1C3A2E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F857A]">
          <p>
            © {new Date().getFullYear()} <strong>Mushahid Hussain</strong>. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-bold text-[#C99742] hover:text-[#E4BF75] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </footer>
  );
};
