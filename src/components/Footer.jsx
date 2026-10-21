import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative z-10 py-10 bg-[#030a13]/85 border-t border-cyan-400/15 backdrop-blur-md">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} <span className="text-white font-semibold">{personal.name}</span>. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Built with React, Vite &amp; Tailwind CSS
          </p>
        </div>

        {/* Social and Top scroll */}
        <div className="flex items-center gap-4">
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-900 border border-slate-700/60 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-900 border border-slate-700/60 text-blue-400 hover:text-white hover:border-cyan-400 transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-900 border border-slate-700/60 text-rose-400 hover:text-white hover:border-cyan-400 transition-colors"
          >
            <Mail size={16} />
          </a>
          
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500 hover:text-white transition-all shadow-md ml-2"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
