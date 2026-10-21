import React, { useState, useEffect, useRef } from 'react';
import { Camera, Download, Github, Linkedin, Mail, Phone, ExternalLink, Sparkles, Bot, Code, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ setActiveTab }) {
  const { personal } = portfolioData;
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showPhotoPopup, setShowPhotoPopup] = useState(false);
  const photoContainerRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const phrases = personal.roles;
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (!isDeleting && charIndex <= currentPhrase.length) {
      setTypedText(currentPhrase.substring(0, charIndex));
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 90);
    } else if (!isDeleting && charIndex > currentPhrase.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1600);
    } else if (isDeleting && charIndex > 0) {
      setTypedText(currentPhrase.substring(0, charIndex - 1));
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 45);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      timeout = setTimeout(() => {
        setCharIndex(1);
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, personal.roles]);

  // Click outside to close photography popup
  useEffect(() => {
    function handleClickOutside(event) {
      if (photoContainerRef.current && !photoContainerRef.current.contains(event.target)) {
        setShowPhotoPopup(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (tabId) => {
    if (setActiveTab) {
      setActiveTab(tabId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center text-center">
      <div className="max-w-[970px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Eyebrow Status Badge with subtle pulse */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/40 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(103,232,249,0.2)] hover:border-cyan-400 hover:scale-105 transition-all">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse" />
          {personal.eyebrow}
        </div>

        {/* Hero Title with electric animation */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-cyan-100 to-indigo-400 bg-clip-text text-transparent hover:scale-[1.01] transition-transform duration-300">
          {personal.headline}
        </h1>

        {/* Dynamic Typewriter Subtitle */}
        <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 min-h-[40px] flex items-center justify-center">
          <span>A Passionate&nbsp;</span>
          <span className="text-cyan-300 border-r-2 border-cyan-300 pr-1 animate-pulse font-mono">
            {typedText}
          </span>
        </p>

        {/* Hero Description */}
        <p className="max-w-2xl mx-auto mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
          {personal.bioSummary}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => handleNav('contact')}
            className="group relative px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-indigo-500 border border-cyan-400/30 shadow-[0_10px_25px_rgba(8,145,178,0.25)] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(8,145,178,0.4)] transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button
            onClick={() => handleNav('projects')}
            className="px-6 py-3 rounded-xl font-semibold text-cyan-300 bg-slate-900/70 hover:bg-slate-800/90 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-cyan-950/50 cursor-pointer"
          >
            My Projects
          </button>

          <a
            href={personal.cvLink}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-500/40 shadow-lg shadow-emerald-950/40 hover:-translate-y-1 transition-all duration-300"
          >
            Download CV
            <Download size={18} />
          </a>

          {/* Photography Portfolio Popover Trigger */}
          <div className="relative inline-block" ref={photoContainerRef}>
            <button
              onClick={() => setShowPhotoPopup(!showPhotoPopup)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-purple-600 hover:bg-purple-500 border border-purple-500/40 shadow-lg shadow-purple-950/40 hover:-translate-y-1 transition-all duration-300"
            >
              Photography Portfolio
              <Camera size={18} />
            </button>

            {showPhotoPopup && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-64 bg-[#0a1526] border border-purple-500/50 rounded-2xl p-4 shadow-2xl z-50 text-center animate-fadeIn">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0a1526] border-t border-l border-purple-500/50 rotate-45" />
                <h5 className="text-white font-semibold mb-1 text-sm">Passion for Pixels?</h5>
                <p className="text-slate-400 text-xs mb-3">Check out my visual journey and photography gallery.</p>
                <a
                  href={personal.photographyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium rounded-full transition-colors shadow-md"
                >
                  Visit Gallery
                  <ExternalLink size={13} />
                </a>
              </div>
            )}
          </div>

          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 hover:-translate-y-1 transition-all duration-300 shadow-md"
          >
            GitHub
            <Github size={18} />
          </a>
        </div>

        {/* Floating Quick Highlights Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-cyan-400/20 backdrop-blur-sm shadow-md hover:border-cyan-400/40 transition-colors">
            <Bot size={15} className="text-cyan-400" />
            <span>AI Automation at <strong className="text-white">M&A Ventures</strong></span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-cyan-400/20 backdrop-blur-sm shadow-md hover:border-cyan-400/40 transition-colors">
            <Code size={15} className="text-blue-400" />
            <span><strong className="text-white">10+ Full-Stack &amp; AI</strong> Projects</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-cyan-400/20 backdrop-blur-sm shadow-md hover:border-cyan-400/40 transition-colors">
            <Cpu size={15} className="text-purple-400" />
            <span>Ex-<strong className="text-white">Beltech AI</strong></span>
          </div>
        </div>

        {/* Social Round Links with Enhanced Animations */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-900/80 border border-cyan-400/20 text-blue-400 hover:text-white hover:bg-cyan-500 hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-900/80 border border-cyan-400/20 text-rose-400 hover:text-white hover:bg-rose-500 hover:border-rose-400 hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-rose-500/30"
          >
            <Mail size={20} />
          </a>
          <a
            href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
            aria-label="Phone"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-900/80 border border-cyan-400/20 text-emerald-400 hover:text-white hover:bg-emerald-500 hover:border-emerald-400 hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
          >
            <Phone size={20} />
          </a>
        </div>

      </div>
    </section>
  );
}
