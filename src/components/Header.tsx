import React, { useState } from 'react';
import { Send, Menu, X, LayoutGrid } from 'lucide-react';
import { AqsaLogoMark } from './IconsAndDecorations';

export type SectionTab = 'home' | 'about' | 'services' | 'skills' | 'experience' | 'portfolio' | 'why-choose-me' | 'contact' | 'view-all';

interface HeaderProps {
  activeTab: SectionTab;
  onSelectTab: (tab: SectionTab) => void;
  onOpenContactModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  activeTab, 
  onSelectTab, 
  onOpenContactModal 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; tab: SectionTab }[] = [
    { label: 'HOME', tab: 'home' },
    { label: 'ABOUT ME', tab: 'about' },
    { label: 'SERVICES', tab: 'services' },
    { label: 'SKILLS', tab: 'skills' },
    { label: 'EXPERIENCE', tab: 'experience' },
    { label: 'PORTFOLIO', tab: 'portfolio' },
    { label: 'WHY ME', tab: 'why-choose-me' },
    { label: 'CONTACT', tab: 'contact' },
  ];

  const handleTabClick = (tab: SectionTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between relative z-30">
      {/* Brand Logo Lockup */}
      <div 
        onClick={() => handleTabClick('home')}
        className="cursor-pointer flex flex-col items-start select-none group"
      >
        <div className="flex items-center gap-2">
          <span className="font-script text-3xl sm:text-4xl text-[#142820] font-normal leading-none tracking-wide group-hover:text-[#C99742] transition-colors">
            Aqsa Ramzan
          </span>
          <AqsaLogoMark className="w-6 h-6 text-[#C99742] group-hover:rotate-12 transition-transform" />
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] font-semibold text-[#142820] uppercase">
            GRAPHICS DESIGNER
          </span>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex items-center gap-1.5 bg-[#EDE7DA] p-1.5 rounded-full border border-[#DDD5C5] shadow-xs">
        {navLinks.map(({ label, tab }) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#142820] text-[#E4BF75] shadow-sm'
                  : 'text-[#2D3E35] hover:text-[#142820] hover:bg-white/50'
              }`}
            >
              {label}
            </button>
          );
        })}
      </nav>

      {/* Right Actions: View All & CTA */}
      <div className="hidden sm:flex items-center gap-2.5">
        <button
          onClick={() => handleTabClick('view-all')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
            activeTab === 'view-all'
              ? 'bg-[#142820] text-[#E4BF75] border-[#142820]'
              : 'border-[#D5CDBC] text-[#142820] hover:bg-[#EDE7DA]'
          }`}
          title="View all sections together in one page"
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>View All</span>
        </button>

        <button
          onClick={() => handleTabClick('contact')}
          className="flex items-center gap-2 bg-[#142820] hover:bg-[#1C3A2E] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 group cursor-pointer"
        >
          <span>LET'S TALK</span>
          <Send className="w-3.5 h-3.5 text-[#E4BF75] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden items-center gap-2">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl bg-[#EDE7DA] text-[#142820] hover:bg-[#E0D8C8] transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 bg-[#F5F2E9] border border-[#D9D2C3] rounded-3xl p-5 shadow-2xl flex flex-col gap-2 lg:hidden z-50 animate-in slide-in-from-top-2 duration-200">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#78887F] px-2 mb-1">
            Choose Section:
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map(({ label, tab }) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`text-left font-bold text-xs p-2.5 rounded-xl transition-colors cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#142820] text-[#E4BF75]'
                    : 'text-[#142820] hover:bg-[#ECE6D8]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex gap-2 pt-2 border-t border-[#DDD5C5]">
            <button
              onClick={() => handleTabClick('view-all')}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[#142820] text-[#142820] text-xs font-bold uppercase"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>View All</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSelectTab('contact');
              }}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#142820] text-white py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider"
            >
              <span>LET'S TALK</span>
              <Send className="w-3.5 h-3.5 text-[#E4BF75]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
