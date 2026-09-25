import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  MessageSquare, 
  CheckCircle, 
  Sparkles, 
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { GoldSparkle } from './IconsAndDecorations';

interface DedicatedContactViewProps {
  prefillSubject?: string;
}

export const DedicatedContactView: React.FC<DedicatedContactViewProps> = ({
  prefillSubject = 'Logo Design'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(prefillSubject);
  const [timeline, setTimeline] = useState('Standard (2-4 Days)');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Aqsa Ramzan! I want to work with you on ${service}. My name is ${name || 'Client'}.`
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 mb-2 animate-slide-up">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C99742] uppercase">
            GET IN TOUCH
          </span>
          <GoldSparkle className="w-4 h-4 text-[#C99742] animate-shimmer" />
        </div>
        <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#142820] flex justify-center gap-1">
          {"Let's Work Together!".split("").map((letter, i) => (
            <span
              key={i}
              className="inline-block hover:-translate-y-1 hover:text-[#C99742] hover:scale-110 transition-transform duration-200"
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h2>
        <div className="w-16 h-1 bg-[#C99742] mx-auto my-4 rounded-full animate-scale-pop" />
        <p className="text-sm text-[#46574F] leading-relaxed">
          Have a project in mind? Reach out via direct WhatsApp message, email, or fill out the form below for a custom design quote.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Info Column (Span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6 animate-slide-up">
          
          <div className="bg-[#142820] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#1E3A2E] space-y-6 hover:border-[#C99742] transition-all duration-300">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C99742] pb-3 border-b border-[#234234]">
              Direct Contact Information
            </h3>

            {/* WhatsApp Link with hover animations */}
            <a
              href="https://wa.me/923039374747"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#1D352B]/80 hover:bg-[#C99742] hover:text-[#142820] transition-all duration-300 group border border-[#2B4E3C] hover:scale-102 hover:shadow-lg"
            >
              <div className="p-3 rounded-xl bg-[#142820] text-[#C99742] group-hover:bg-[#142820] group-hover:text-[#E4BF75] group-hover:rotate-12 transition-all shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-[10px] text-[#A6BAAF] group-hover:text-[#142820] uppercase font-bold">
                    WhatsApp / Phone
                  </p>
                  <span className="text-[9px] bg-emerald-900 text-emerald-300 px-1.5 py-0.2 rounded font-bold animate-pulse">Online</span>
                </div>
                <p className="text-base font-bold text-white group-hover:text-[#142820] mt-0.5 font-mono">
                  +92 303 9374747
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#C99742] group-hover:text-[#142820] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Email Link */}
            <a
              href="mailto:j00462923@gmail.com"
              className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#1D352B]/80 hover:bg-[#C99742] hover:text-[#142820] transition-all duration-300 group border border-[#2B4E3C] hover:scale-102 hover:shadow-lg"
            >
              <div className="p-3 rounded-xl bg-[#142820] text-[#C99742] group-hover:bg-[#142820] group-hover:text-[#E4BF75] group-hover:rotate-12 transition-all shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-[#A6BAAF] group-hover:text-[#142820] uppercase font-bold">
                  Direct Email
                </p>
                <p className="text-xs sm:text-sm font-bold text-white group-hover:text-[#142820] mt-0.5 truncate">
                  j00462923@gmail.com
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#C99742] group-hover:text-[#142820] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Location & Birthdate with Animated Numbers */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#193228] border border-[#234234] hover:border-[#C99742] transition-colors hover:-translate-y-0.5">
                <div className="flex items-center gap-2 text-[#C99742] mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase text-[#A6BAAF]">Location</span>
                </div>
                <p className="text-xs font-bold text-white">Pakistan</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#193228] border border-[#234234] hover:border-[#C99742] transition-colors hover:-translate-y-0.5">
                <div className="flex items-center gap-2 text-[#C99742] mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase text-[#A6BAAF]">Date</span>
                </div>
                <p className="text-xs font-bold text-white font-mono">15/05/2025</p>
              </div>
            </div>

            {/* Response Time Guarantee with pulsing icon */}
            <div className="p-4 rounded-2xl bg-[#193228] border border-[#234234] flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#C99742] shrink-0 animate-shimmer" />
              <span className="text-xs text-[#CFDCD4]">
                Average Response Time: <strong className="text-[#E4BF75] font-mono">Within 2 Hours</strong>
              </span>
            </div>

          </div>

        </div>

        {/* Right Form Column (Span 7) */}
        <div className="lg:col-span-7 bg-[#EDE8DC]/80 border border-[#DDD5C5] rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all animate-slide-up stagger-2">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4 animate-scale-pop">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-sm animate-pulse-glow">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-[#142820]">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-[#3E5247] max-w-md mx-auto">
                Thank you, <strong>{name || 'Friend'}</strong>! Aqsa Ramzan has received your request and will get back to you with custom concepts and project estimates.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <a
                  href={`https://wa.me/923039374747?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="px-6 py-3 rounded-full bg-[#142820] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1C3A2E] hover:scale-105 transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#142820] pb-3 border-b border-[#D8CFBD]">
                Send a Direct Project Brief to Aqsa
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#142820] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CDBC] bg-white text-sm text-[#142820] focus:outline-none focus:ring-2 focus:ring-[#C99742] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#142820] uppercase tracking-wider mb-1.5">
                    Email or Phone *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="sarah@example.com / +1..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CDBC] bg-white text-sm text-[#142820] focus:outline-none focus:ring-2 focus:ring-[#C99742] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#142820] uppercase tracking-wider mb-1.5">
                    Required Service
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CDBC] bg-white text-sm text-[#142820] focus:outline-none focus:ring-2 focus:ring-[#C99742] transition-all"
                  >
                    <option>Logo Design</option>
                    <option>Brand Identity</option>
                    <option>Business Card Design</option>
                    <option>Social Media Design</option>
                    <option>Poster & Flyer Design</option>
                    <option>CV / Resume Design</option>
                    <option>Presentation Design</option>
                    <option>Pinterest Pins</option>
                    <option>AI Design</option>
                    <option>Custom Complete Bundle</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#142820] uppercase tracking-wider mb-1.5">
                    Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CDBC] bg-white text-sm text-[#142820] focus:outline-none focus:ring-2 focus:ring-[#C99742] transition-all"
                  >
                    <option>Urgent (24 - 48 Hours)</option>
                    <option>Standard (2 - 4 Days)</option>
                    <option>Flexible / Ongoing Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#142820] uppercase tracking-wider mb-1.5">
                  Project Notes & Style Requirements
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your brand, preferred color aesthetics, fonts, or reference links..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#D5CDBC] bg-white text-sm text-[#142820] focus:outline-none focus:ring-2 focus:ring-[#C99742] transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#142820] hover:bg-[#1C3A2E] text-white py-4 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:scale-102 active:scale-98 cursor-pointer group/btn"
              >
                <span>SEND PROJECT BRIEF</span>
                <Send className="w-4 h-4 text-[#E4BF75] group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
