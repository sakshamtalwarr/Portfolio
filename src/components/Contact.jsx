import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Loader2, Copy, Check, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [iframeLoading, setIframeLoading] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-950/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Send size={13} className="text-cyan-400" />
            Connect
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white block">
            GET IN TOUCH
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Have a project in mind, automation requirement, or want to collaborate? Send a message or reach out directly!
          </p>
        </div>

        {/* 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 gap-5">
            
            {/* Email Card with 1-Click Copy Tooltip */}
            <div className="relative group p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0b1728]/95 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-5 flex-1"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cyan-950/60 border border-cyan-400/30 text-rose-400 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">Email</h4>
                    <p className="text-slate-300 text-sm sm:text-base font-medium">{personal.email}</p>
                  </div>
                </a>

                {/* Quick Copy Button */}
                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="relative p-2.5 rounded-xl bg-slate-800/80 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-slate-700 hover:border-cyan-400/50 transition-all ml-2"
                >
                  {copiedEmail ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                  
                  {copiedEmail && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-slate-950 shadow-lg whitespace-nowrap animate-fadeIn">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Phone */}
            <a
              href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
              className="group flex items-center gap-5 p-6 rounded-2xl bg-gradient-to-br from-slate-900/85 to-[#0b1728]/90 border border-cyan-400/15 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cyan-950/60 border border-cyan-400/30 text-emerald-400 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">Phone</h4>
                <p className="text-slate-300 text-sm sm:text-base">{personal.phone}</p>
              </div>
            </a>

            {/* Address */}
            <div className="group flex items-center gap-5 p-6 rounded-2xl bg-gradient-to-br from-slate-900/85 to-[#0b1728]/90 border border-cyan-400/15 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cyan-950/60 border border-cyan-400/30 text-amber-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Address</h4>
                <p className="text-slate-300 text-sm sm:text-base">{personal.address}</p>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 rounded-2xl bg-gradient-to-br from-slate-900/85 to-[#0b1728]/90 border border-cyan-400/15 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cyan-950/60 border border-cyan-400/30 text-blue-400 group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">LinkedIn</h4>
                <p className="text-slate-300 text-sm sm:text-base">/saksham-talwar</p>
              </div>
            </a>

          </div>

          {/* Embedded Google Form */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-900/85 border border-cyan-400/20 shadow-2xl p-2 min-h-[600px] flex items-center justify-center">
            {iframeLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/80 z-10 gap-3">
                <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
                <p className="text-sm text-cyan-300 font-medium">Loading form...</p>
              </div>
            )}
            <iframe
              src={personal.googleFormUrl}
              title="Contact Form"
              onLoad={() => setIframeLoading(false)}
              className="w-full h-[620px] rounded-xl border-0"
            >
              Loading…
            </iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
