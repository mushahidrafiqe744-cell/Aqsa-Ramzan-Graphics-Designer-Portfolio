import React, { useState } from 'react';
import { 
  ArrowRight, 
  Code2, 
  Download, 
  Send, 
  Github, 
  Linkedin, 
  Phone, 
  Mail, 
  Check, 
  Copy, 
  Sparkles,
  ExternalLink,
  Layers,
  Database,
  Terminal
} from 'lucide-react';
import { mushahidData } from '../data/portfolioData';
import { GoldSparkle } from './IconsAndDecorations';

interface DeveloperHeroProps {
  onViewWork: () => void;
  onOpenContact: (subject?: string) => void;
  onOpenResume: () => void;
}

export const DeveloperHero: React.FC<DeveloperHeroProps> = ({
  onViewWork,
  onOpenContact,
  onOpenResume,
}) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="hero" className="w-full relative pt-6 pb-14 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#C99742]/10 via-[#142820]/5 to-[#C99742]/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Heading, Badge, Bio, Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 bg-[#142820] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[#2B493A] shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="text-[#CFDCD4]">Available for Freelance & Full-time Roles</span>
            <GoldSparkle className="w-3.5 h-3.5 text-[#C99742]" />
          </div>

          {/* Main Hero Title */}
          <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#142820] tracking-tight leading-[1.08] mb-3">
            Hi, I'm{' '}
            <span className="text-[#C99742] underline decoration-[#142820]/20 underline-offset-8">
              Mushahid
            </span>
            <br />
            <span className="text-3xl sm:text-5xl lg:text-6xl text-[#1E3A2E] font-sans font-bold">
              Hussain
            </span>
          </h1>

          {/* Role Subtitle */}
          <div className="flex items-center gap-2 text-sm sm:text-base lg:text-lg font-bold text-[#C99742] font-mono tracking-wide mb-4">
            <Terminal className="w-4 h-4 text-[#142820]" />
            <span>Full Stack Web Developer & Software Engineer</span>
          </div>

          {/* Description */}
          <p className="text-[#3A4A41] text-sm sm:text-base leading-relaxed max-w-xl mb-6 font-normal">
            Specialized in crafting modern, high-performance web applications using{' '}
            <strong className="text-[#142820] font-semibold">React, Next.js, TypeScript, Node.js, and Databases</strong>. 
            Transforming ideas into scalable digital products with clean architectures and 100% responsiveness.
          </p>

          {/* Tech Pill highlights */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['React.js', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL / MongoDB', 'REST APIs'].map((pill) => (
              <span 
                key={pill}
                className="text-[11px] font-semibold bg-[#EDE7DA] text-[#142820] border border-[#DDD5C5] px-3 py-1 rounded-lg"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={onViewWork}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2.5 bg-[#142820] hover:bg-[#1C3A2E] text-white px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 text-[#E4BF75] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenResume}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-white hover:bg-[#F2EFE8] text-[#142820] border border-[#D5CDBC] px-5 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-xs cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#C99742]" />
              <span>Download CV</span>
            </button>

            <button
              onClick={() => onOpenContact('Hire Mushahid Hussain')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#C99742] hover:bg-[#DCA84D] text-[#0E1E17] px-5 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Quick Contact & Social Links Bar */}
          <div className="mt-8 pt-6 border-t border-[#DDD5C5] w-full flex flex-wrap items-center gap-4 text-xs font-semibold text-[#142820]">
            <span className="text-[#5C6B62] uppercase tracking-wider text-[11px]">Direct Channels:</span>

            <button
              onClick={() => copyToClipboard('0317-9948934', 'phone')}
              className="flex items-center gap-1.5 bg-white/80 hover:bg-white px-3 py-1.5 rounded-lg border border-[#D5CDBC] cursor-pointer transition-colors"
              title="Click to copy phone number"
            >
              <Phone className="w-3.5 h-3.5 text-[#C99742]" />
              <span>0317-9948934</span>
              {copiedItem === 'phone' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 opacity-40" />}
            </button>

            <button
              onClick={() => copyToClipboard('mushahidrafiqe744@gmail.com', 'email')}
              className="flex items-center gap-1.5 bg-white/80 hover:bg-white px-3 py-1.5 rounded-lg border border-[#D5CDBC] cursor-pointer transition-colors"
              title="Click to copy email address"
            >
              <Mail className="w-3.5 h-3.5 text-[#C99742]" />
              <span>mushahidrafiqe744@gmail.com</span>
              {copiedItem === 'email' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 opacity-40" />}
            </button>
          </div>

        </div>

        {/* Right Column: Interactive Developer Profile Visual */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          <div className="relative w-full max-w-[380px]">
            
            {/* Background Arch & Dark Card */}
            <div className="relative bg-[#142820] text-white rounded-3xl p-5 border border-[#234234] shadow-2xl overflow-hidden">
              
              {/* Dot matrix pattern on top */}
              <div className="absolute -top-4 -right-4 w-32 h-32 dot-matrix opacity-20 pointer-events-none" />

              {/* Header Code Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#234234] text-xs font-mono text-[#A2B8AC]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span>developer.tsx</span>
              </div>

              {/* Portrait Frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#0E1E17] border border-[#C99742]/40 mb-4 group shadow-inner">
                <img
                  src={mushahidData.portraitImage}
                  alt={mushahidData.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-3 left-3 bg-[#142820]/90 backdrop-blur-xs border border-[#C99742] text-white px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C99742]" />
                  <div className="text-left">
                    <p className="text-[10px] text-[#CFDCD4] uppercase font-bold leading-none">Experience</p>
                    <p className="text-xs font-bold text-[#E4BF75]">5+ Years Active</p>
                  </div>
                </div>

                {/* Floating Satisfaction Badge */}
                <div className="absolute top-3 right-3 bg-[#142820]/90 backdrop-blur-xs border border-emerald-500/50 text-white px-2.5 py-1 rounded-xl shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-300">100% Client Rating</span>
                </div>
              </div>

              {/* Quick Tech Highlights Grid */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="bg-[#1C3A2E]/60 border border-[#2B493A] p-2 rounded-xl">
                  <p className="text-[10px] text-[#A2B8AC]">FRONTEND</p>
                  <p className="text-xs font-bold text-[#E4BF75] mt-0.5">React / Next</p>
                </div>
                <div className="bg-[#1C3A2E]/60 border border-[#2B493A] p-2 rounded-xl">
                  <p className="text-[10px] text-[#A2B8AC]">BACKEND</p>
                  <p className="text-xs font-bold text-[#E4BF75] mt-0.5">Node / REST</p>
                </div>
                <div className="bg-[#1C3A2E]/60 border border-[#2B493A] p-2 rounded-xl">
                  <p className="text-[10px] text-[#A2B8AC]">DATABASE</p>
                  <p className="text-xs font-bold text-[#E4BF75] mt-0.5">SQL / Mongo</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Hero Stats Row */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {mushahidData.stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#EDE8DC]/80 border border-[#DDD5C5] p-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs hover:border-[#C99742] transition-colors"
          >
            <span className="font-serif-display text-3xl sm:text-4xl font-extrabold text-[#142820]">
              {stat.value}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C6B62] mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};
