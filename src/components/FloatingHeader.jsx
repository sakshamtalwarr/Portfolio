import React, { useState } from 'react';
import { Menu, X, Download, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function FloatingHeader({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal } = portfolioData;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'blog', label: 'Blog', badge: 'New' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabSelect = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-5xl transition-all duration-300">
      <div className="rounded-full bg-[#040c17]/85 backdrop-blur-xl border border-cyan-400/25 shadow-[0_10px_35px_rgba(0,0,0,0.5)] px-4 py-2 sm:px-6 sm:py-2.5 flex items-center justify-between">
        
        {/* Brand Identity */}
        <button
          onClick={() => handleTabSelect('overview')}
          className="flex items-center gap-2.5 group text-left focus:outline-none"
        >
          <div className="relative">
            <img
              src={personal.logoImage}
              alt={personal.name}
              className="w-9 h-9 rounded-full border-2 border-cyan-400/80 object-cover shadow-[0_0_12px_rgba(103,232,249,0.3)] group-hover:scale-105 transition-transform"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-950 animate-pulse" />
          </div>
          <div className="hidden min-[400px]:block">
            <span className="font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase text-white group-hover:text-cyan-300 transition-colors block">
              {personal.name}
            </span>
            <span className="text-[10px] text-cyan-400 font-mono tracking-tight block">
              AI &amp; Automation
            </span>
          </div>
        </button>

        {/* Center Desktop Navigation Tabs */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-950/60 p-1 rounded-full border border-cyan-400/15">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabSelect(tab.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(103,232,249,0.4)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase ${
                    isActive ? 'bg-white text-slate-950' : 'bg-cyan-500/30 text-cyan-300'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <a
            href={personal.cvLink}
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-500/40 shadow-md hover:-translate-y-0.5 transition-all"
          >
            <Download size={13} />
            <span>CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-200 hover:text-cyan-400 p-1.5 rounded-full hover:bg-slate-800 focus:outline-none transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 rounded-2xl bg-[#071324]/95 backdrop-blur-2xl border border-cyan-400/25 p-4 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-1.5">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabSelect(tab.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 uppercase">
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
            
            <a
              href={personal.cvLink}
              download
              className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-colors"
            >
              <Download size={15} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
