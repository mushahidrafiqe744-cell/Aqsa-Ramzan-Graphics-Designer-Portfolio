import React from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  ArrowUp, 
  Sparkles, 
  Heart,
  Instagram,
  Check,
  Copy
} from 'lucide-react';
import { GoldSparkle, AqsaLogoMark } from './IconsAndDecorations';
import { SectionTab } from './Header';

interface SectionFooterProps {
  onSelectTab?: (tab: SectionTab) => void;
  onOpenContact?: (subject?: string) => void;
}

export const SectionFooter: React.FC<SectionFooterProps> = ({
  onSelectTab,
  onOpenContact
}) => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; tab: SectionTab; num: string }[] = [
    { label: 'Home', tab: 'home', num: '01' },
    { label: 'About', tab: 'about', num: '02' },
    { label: 'Services', tab: 'services', num: '03' },
    { label: 'Skills', tab: 'skills', num: '04' },
    { label: 'Experience', tab: 'experience', num: '05' },
    { label: 'Portfolio', tab: 'portfolio', num: '06' },
    { label: 'Why Me', tab: 'why-choose-me', num: '07' },
    { label: 'Contact', tab: 'contact', num: '08' },
  ];

  return (
    <footer className="w-full mt-12 pt-4 relative z-10 animate-slide-up">
      
      {/* 1. Golden Accent Ribbon / Callout Banner */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-6">
        <div className="w-full bg-[#142820] text-white rounded-3xl p-6 sm:p-8 border border-[#1E3A2E] shadow-2xl relative overflow-hidden group hover:border-[#C99742] transition-all duration-500">
          
          {/* Subtle background golden glow & dot matrix */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#C99742]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#C99742]/20 transition-all duration-700" />
          <div className="absolute top-3 right-6 w-28 h-28 dot-matrix opacity-20 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#C99742] text-[#142820] flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                <AqsaLogoMark className="w-8 h-8" />
              </div>

              <div>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <GoldSparkle className="w-4 h-4 text-[#C99742] animate-shimmer" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E4BF75]">
                    READY TO STAND OUT?
                  </span>
                </div>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  Let's Build Your Brand Together.
                </h3>
              </div>
            </div>

            {/* Direct Quick Action Buttons with animated bounce & lift */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/923039374747"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group/btn"
              >
                <Phone className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                <span>WhatsApp (+92 303 9374747)</span>
              </a>

              {onOpenContact ? (
                <button
                  onClick={() => onOpenContact('Direct Footer Brief')}
                  className="flex items-center gap-2 bg-[#C99742] hover:bg-[#DCA84D] text-[#142820] px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group/btn"
                >
                  <span>Get A Quote</span>
                  <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              ) : (
                <a
                  href="mailto:aqsaramzan034272@gmail.com"
                  className="flex items-center gap-2 bg-[#C99742] hover:bg-[#DCA84D] text-[#142820] px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>Email Aqsa</span>
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* 2. Main Footer Bottom Bar with Section Tabs, Socials, & Copyright */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#EDE8DC] border border-[#DDD5C5] rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
          
          {/* Section Navigation Quick Links with Number indicators */}
          {onSelectTab && (
            <div className="flex flex-wrap items-center justify-center gap-2 pb-5 border-b border-[#D8CFBD]">
              {navLinks.map((item) => (
                <button
                  key={item.tab}
                  onClick={() => onSelectTab(item.tab)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/70 hover:bg-[#142820] text-[#142820] hover:text-white border border-[#D5CDBC] hover:border-[#C99742] text-xs font-bold transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 active:scale-95 cursor-pointer group"
                >
                  <span className="font-mono text-[10px] text-[#C99742] group-hover:text-[#E4BF75]">
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Socials, Contacts & Credentials */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            
            {/* Logo Wordmark with Cursive Touch */}
            <div className="flex items-center gap-2">
              <span className="font-serif-display text-2xl font-bold text-[#142820]">
                Aqsa Ramzan
              </span>
              <span className="font-script text-2xl text-[#C99742]">
                Graphics
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#142820] uppercase bg-white/80 px-2 py-0.5 rounded-full border border-[#D5CDBC]">
                Designer
              </span>
            </div>

            {/* Social Channels with Hover Glow */}
            <div className="flex items-center gap-2.5">
              
              {/* Pinterest */}
              <button
                onClick={() => handleCopy('aqsaramzandesigner', 'Pinterest')}
                className="p-2.5 rounded-xl bg-white hover:bg-[#E60023] text-[#142820] hover:text-white border border-[#DDD5C5] transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-xs cursor-pointer group relative"
                title="Copy Pinterest username"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.546.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>

              {/* TikTok */}
              <button
                onClick={() => handleCopy('@aqsaramzandesigner', 'TikTok')}
                className="p-2.5 rounded-xl bg-white hover:bg-black text-[#142820] hover:text-white border border-[#DDD5C5] transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-xs cursor-pointer group relative"
                title="Copy TikTok username"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </button>

              {/* Instagram */}
              <button
                onClick={() => handleCopy('@aqsaramzandesigner', 'Instagram')}
                className="p-2.5 rounded-xl bg-white hover:bg-[#E1306C] text-[#142820] hover:text-white border border-[#DDD5C5] transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-xs cursor-pointer group relative"
                title="Copy Instagram username"
              >
                <Instagram className="w-4 h-4" />
              </button>

              {/* Back to Top Floating Trigger */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#142820] text-white hover:bg-[#C99742] hover:text-[#142820] text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-sm ml-2 group"
                title="Scroll to top"
              >
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

            </div>

          </div>

          {/* Copy Notification Pill */}
          {copied && (
            <div className="text-center text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 py-1.5 px-4 rounded-xl animate-scale-pop mx-auto">
              ✓ {copied} username copied to clipboard!
            </div>
          )}

          {/* Bottom Copyright and Details with Animated Numbers */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#D8CFBD] text-[11px] text-[#5C6B62] font-semibold gap-2">
            <div>
              © 2024 — {new Date().getFullYear()} Aqsa Ramzan Graphics Designer. All rights reserved.
            </div>
            <div className="flex items-center gap-1">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-[#C99742] fill-current animate-pulse" />
              <span>in Pakistan</span>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};
