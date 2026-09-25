import React, { useState } from 'react';
import { X, Send, Phone, Mail, MessageSquare, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { GoldSparkle } from './IconsAndDecorations';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefillSubject = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(prefillSubject || 'Logo Design');
  const [budget, setBudget] = useState('Standard ($50 - $150)');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Aqsa! I'm interested in working with you on ${service}. My name is ${name || 'a client'}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#F6F3EB] rounded-3xl overflow-hidden shadow-2xl border border-[#C99742]/50 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#142820] text-white border-b border-[#234234]">
          <div className="flex items-center gap-2">
            <GoldSparkle className="w-5 h-5 text-[#C99742]" />
            <h3 className="font-serif-display text-xl font-bold tracking-wide">
              Let's Talk & Collaborate with Aqsa
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif-display text-2xl font-bold text-[#142820]">
                Message Sent Successfully!
              </h4>
              <p className="text-sm text-[#46574F] max-w-md mx-auto">
                Thank you, <strong>{name || 'Friend'}</strong>! Aqsa Ramzan will review your inquiry and get back to you within 2-4 hours with custom concepts and timelines.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={`https://wa.me/923039374747?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Chat</span>
                </a>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 rounded-full bg-[#142820] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1C3A2E] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Direct Quick Contact Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://wa.me/923039374747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-[#142820] text-white hover:bg-[#1E3A2E] border border-[#2A4839] transition-all shadow-xs group"
                >
                  <Phone className="w-4 h-4 text-[#C99742] group-hover:rotate-12 transition-transform" />
                  <div className="text-left">
                    <p className="text-[10px] text-[#A6BAAF] uppercase font-semibold">WhatsApp / Call</p>
                    <p className="text-xs font-bold text-[#E4BF75] font-mono">+92 303 9374747</p>
                  </div>
                </a>

                <a
                  href="mailto:j00462923@gmail.com"
                  className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-[#142820] text-white hover:bg-[#1E3A2E] border border-[#2A4839] transition-all shadow-xs group"
                >
                  <Mail className="w-4 h-4 text-[#C99742] group-hover:translate-x-0.5 transition-transform" />
                  <div className="text-left">
                    <p className="text-[10px] text-[#A6BAAF] uppercase font-semibold">Direct Email</p>
                    <p className="text-xs font-bold text-[#E4BF75] truncate max-w-[150px]">j00462923@...</p>
                  </div>
                </a>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#142820] uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5CDBC] bg-white text-sm text-[#142820] focus:outline-none focus:ring-2 focus:ring-[#C99742]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#142820] uppercase tracking-wider mb-1.5">
                      Email or Phone *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="your@email.com / +1 234..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5CDBC] bg-white text-sm text-[#142820] focus:outline-none focus:ring-2 focus:ring-[#C99742]"
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
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5CDBC] bg-white text-sm text-[#142820] focus:outline-none focus:ring-2 focus:ring-[#C99742]"
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
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#142820] uppercase tracking-wider mb-1.5">
                      Estimated Timeline
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5CDBC] bg-white text-sm text-[#142820] focus:outline-none focus:ring-2 focus:ring-[#C99742]"
                    >
                      <option>Urgent (24 - 48 Hours)</option>
                      <option>Standard (3 - 5 Days)</option>
                      <option>Flexible / Ongoing Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#142820] uppercase tracking-wider mb-1.5">
                    Project Details & Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell me about your brand, colors, preferred style, or reference examples..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D5CDBC] bg-white text-sm text-[#142820] focus:outline-none focus:ring-2 focus:ring-[#C99742]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#142820] hover:bg-[#1C3A2E] text-white py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
                  >
                    <span>SEND PROJECT BRIEF</span>
                    <Send className="w-4 h-4 text-[#E4BF75]" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
