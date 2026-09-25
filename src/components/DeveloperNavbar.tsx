import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Menu, 
  X, 
  Code2, 
  FileText, 
  Terminal, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { mushahidData } from '../data/portfolioData';

interface DeveloperNavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenContact: (subject?: string) => void;
  onOpenResume: () => void;
}

export const DeveloperNavbar: React.FC<DeveloperNavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenContact,
  onOpenResume
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Services', id: 'services' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Process', id: 'process' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#142820]/95 backdrop-blur-md shadow-lg border-b border-[#244234] py-3' 
          : 'bg-[#F6F3EB]/90 backdrop-blur-xs py-4 border-b border-[#DDD5C5]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[#142820] border border-[#C99742] text-[#E4BF75] flex items-center justify-center font-bold font-mono text-sm shadow-sm group-hover:rotate-6 transition-transform">
            &lt;MH/&gt;
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className={`font-serif-display font-bold text-lg tracking-tight transition-colors ${
                isScrolled ? 'text-white' : 'text-[#142820]'
              }`}>
                Mushahid Hussain
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Available for hire" />
            </div>
            <span className={`text-[10px] font-semibold tracking-wider uppercase font-mono ${
              isScrolled ? 'text-[#C99742]' : 'text-[#5C6B62]'
            }`}>
              Full Stack Web Developer
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer relative py-1 ${
                  isActive
                    ? isScrolled ? 'text-[#E4BF75]' : 'text-[#C99742]'
                    : isScrolled ? 'text-[#CFDCD4] hover:text-white' : 'text-[#36493F] hover:text-[#142820]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C99742] rounded-full animate-in fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions (Resume & Let's Talk CTA) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold tracking-wider uppercase border transition-all cursor-pointer ${
              isScrolled
                ? 'border-[#C99742]/70 text-[#E4BF75] hover:bg-[#C99742]/20'
                : 'border-[#142820] text-[#142820] hover:bg-[#142820] hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          <button
            onClick={() => onOpenContact('General Web Development Project')}
            className="flex items-center gap-2 bg-[#C99742] hover:bg-[#DCA84D] text-[#0E1E17] px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <span>Let's Talk</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl transition-colors ${
              isScrolled ? 'text-white hover:bg-white/10' : 'text-[#142820] hover:bg-[#EAE4D5]'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-3 right-3 mt-2 bg-[#142820] text-white border border-[#2B493A] rounded-2xl p-5 shadow-2xl flex flex-col gap-3 animate-in slide-in-from-top-3 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#234234]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-xs font-semibold text-[#CFDCD4] hover:text-[#C99742] p-2 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-3 h-3 opacity-50" />
              </button>
            ))}
          </div>

          <div className="flex gap-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[#C99742] text-[#E4BF75] text-xs font-bold uppercase"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View CV</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('Web Development Inquiry');
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#C99742] text-[#0E1E17] text-xs font-bold uppercase"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
