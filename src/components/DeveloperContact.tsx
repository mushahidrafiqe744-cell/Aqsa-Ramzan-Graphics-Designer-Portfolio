import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  CheckCircle, 
  Sparkles, 
  Calendar,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { mushahidData } from '../data/portfolioData';

interface DeveloperContactProps {
  prefillSubject?: string;
}

export const DeveloperContact: React.FC<DeveloperContactProps> = ({ prefillSubject = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(prefillSubject || 'Full Stack Web Applications');
  const [budget, setBudget] = useState('$500 - $1,500');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Mushahid! I am interested in discussing a project for ${service}. My name is ${name || 'Client'}.`
  );

  return (
    <section id="contact" className="w-full bg-[#142820] text-white py-16 px-4 sm:px-6 relative border-t border-[#1E3A2E]">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold font-mono text-[#C99742] uppercase tracking-[0.25em] mb-2">
            // GET IN TOUCH
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Let's Build Something Great
          </h2>
          <div className="w-12 h-1 bg-[#C99742] my-4 rounded-full" />
          <p className="text-sm text-[#CFDCD4] max-w-xl">
            Have an upcoming web project, SaaS idea, or looking to scale your engineering team? Let's discuss your roadmap today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Column (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct Contact Cards */}
            <div className="bg-[#193228] border border-[#244837] rounded-3xl p-6 sm:p-7 shadow-lg space-y-6">
              <h3 className="text-sm font-bold font-mono text-[#C99742] uppercase tracking-wider pb-3 border-b border-[#234234]">
                Contact Information
              </h3>

              {/* WhatsApp / Phone */}
              <a
                href={`https://wa.me/923179948934`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group p-2 rounded-2xl hover:bg-[#142820] transition-colors"
              >
                <div className="p-3 rounded-2xl bg-[#142820] group-hover:bg-[#C99742] text-[#C99742] group-hover:text-[#142820] border border-[#234234] transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-[#8EA69A] font-semibold uppercase">WhatsApp / Call</p>
                    <span className="text-[10px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-700/50">Instant Reply</span>
                  </div>
                  <p className="text-base font-bold text-white group-hover:text-[#E4BF75] transition-colors mt-0.5">
                    {mushahidData.phone}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8EA69A] group-hover:text-[#E4BF75] transition-colors" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${mushahidData.email}`}
                className="flex items-start gap-4 group p-2 rounded-2xl hover:bg-[#142820] transition-colors"
              >
                <div className="p-3 rounded-2xl bg-[#142820] group-hover:bg-[#C99742] text-[#C99742] group-hover:text-[#142820] border border-[#234234] transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#8EA69A] font-semibold uppercase">Email Address</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#E4BF75] transition-colors mt-0.5 truncate">
                    {mushahidData.email}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8EA69A] group-hover:text-[#E4BF75] transition-colors" />
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-2">
                <div className="p-3 rounded-2xl bg-[#142820] text-[#C99742] border border-[#234234] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#8EA69A] font-semibold uppercase">Work Location</p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    {mushahidData.location}
                  </p>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="p-4 rounded-2xl bg-[#142820] border border-[#234234] flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#C99742] shrink-0" />
                <span className="text-xs text-[#CFDCD4]">
                  Average response time: <strong>Under 2 Hours</strong> (Mon – Sun)
                </span>
              </div>

            </div>

          </div>

          {/* Right Form Column (Span 7) */}
          <div className="lg:col-span-7 bg-[#193228] border border-[#244837] rounded-3xl p-6 sm:p-8 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif-display text-2xl font-bold text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-[#CFDCD4] max-w-md mx-auto">
                  Thank you, <strong>{name || 'Friend'}</strong>! Mushahid will review your requirements and follow up with you promptly.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://wa.me/923179948934?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all"
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
                    className="px-6 py-3 rounded-full bg-[#142820] hover:bg-[#203D30] text-[#E4BF75] border border-[#C99742]/50 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-sm font-bold font-mono text-[#C99742] uppercase tracking-wider pb-3 border-b border-[#234234]">
                  Send Project Brief
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#E0EBE4] uppercase tracking-wider mb-1.5 font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#2B4E3C] bg-[#142820] text-sm text-white placeholder:text-[#5C7367] focus:outline-none focus:ring-2 focus:ring-[#C99742]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#E0EBE4] uppercase tracking-wider mb-1.5 font-mono">
                      Email or Phone *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="john@example.com / +1..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#2B4E3C] bg-[#142820] text-sm text-white placeholder:text-[#5C7367] focus:outline-none focus:ring-2 focus:ring-[#C99742]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#E0EBE4] uppercase tracking-wider mb-1.5 font-mono">
                      Required Service
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#2B4E3C] bg-[#142820] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C99742]"
                    >
                      <option>Full Stack Web Applications</option>
                      <option>Modern Frontend & SPA Development</option>
                      <option>E-Commerce & Payment Systems</option>
                      <option>Backend APIs & Cloud Integration</option>
                      <option>Speed Optimization & Technical SEO</option>
                      <option>Code Refactoring & Maintenance</option>
                      <option>Brand & Graphic Design</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#E0EBE4] uppercase tracking-wider mb-1.5 font-mono">
                      Project Budget Range
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#2B4E3C] bg-[#142820] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C99742]"
                    >
                      <option>$300 - $800 (Small/Landing Page)</option>
                      <option>$800 - $2,500 (Standard Web App)</option>
                      <option>$2,500+ (Custom Enterprise / SaaS)</option>
                      <option>Hourly / Retainer Consulting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#E0EBE4] uppercase tracking-wider mb-1.5 font-mono">
                    Project Goals & Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, timeline, features, or design references..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#2B4E3C] bg-[#142820] text-sm text-white placeholder:text-[#5C7367] focus:outline-none focus:ring-2 focus:ring-[#C99742]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#C99742] hover:bg-[#DCA84D] text-[#0E1E17] py-4 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

    </section>
  );
};
