import React, { useState } from 'react';
import { Home, Rocket, Briefcase, BookOpen, Mail, Github, Linkedin, FileDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function FloatingDock({ activeTab, setActiveTab }) {
  const { personal } = portfolioData;
  const [hoveredId, setHoveredId] = useState(null);

  const dockTabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'projects', label: 'Projects', icon: Rocket },
    { id: 'experience', label: 'Experience & Skills', icon: Briefcase },
    { id: 'blog', label: 'Blog', icon: BookOpen, hasNewBadge: true },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const externalLinks = [
    { label: 'GitHub', icon: Github, url: personal.githubUrl },
    { label: 'LinkedIn', icon: Linkedin, url: personal.linkedinUrl },
    { label: 'Resume', icon: FileDown, url: personal.cvLink, isDownload: true },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
      <nav
        aria-label="Floating Action Dock"
        className="flex items-center gap-1.5 sm:gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#061224]/85 backdrop-blur-2xl border border-cyan-400/30 shadow-[0_15px_40px_rgba(0,0,0,0.65)]"
      >
        {/* Navigation Tabs */}
        {dockTabs.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const isHovered = hoveredId === item.id;

          return (
            <div key={item.id} className="relative flex flex-col items-center">
              {/* Tooltip on Hover */}
              {isHovered && (
                <div className="absolute -top-10 px-2.5 py-1 rounded-md bg-slate-900 border border-cyan-400/40 text-[10px] font-semibold text-cyan-300 shadow-xl whitespace-nowrap animate-fadeIn pointer-events-none hidden sm:block">
                  {item.label}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-b border-r border-cyan-400/40 rotate-45" />
                </div>
              )}

              <button
                onClick={() => handleTabClick(item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                aria-label={item.label}
                className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-[0_0_18px_rgba(103,232,249,0.5)] scale-110'
                    : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-800/80 hover:scale-105'
                }`}
              >
                <Icon size={18} />

                {/* New badge pulse indicator */}
                {item.hasNewBadge && !isActive && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
                )}
              </button>

              {/* Active Tab Dot */}
              <span
                className={`w-1 h-1 rounded-full mt-0.5 transition-all duration-300 ${
                  isActive ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 'bg-transparent'
                }`}
              />
            </div>
          );
        })}

        {/* Vertical Divider */}
        <div className="w-[1px] h-6 bg-cyan-400/20 mx-0.5 sm:mx-1" />

        {/* External Quick Actions */}
        {externalLinks.map((item, idx) => {
          const Icon = item.icon;
          const isHovered = hoveredId === item.label;

          return (
            <div key={idx} className="relative flex flex-col items-center">
              {/* Tooltip on Hover */}
              {isHovered && (
                <div className="absolute -top-10 px-2.5 py-1 rounded-md bg-slate-900 border border-cyan-400/40 text-[10px] font-semibold text-cyan-300 shadow-xl whitespace-nowrap animate-fadeIn pointer-events-none hidden sm:block">
                  {item.label}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-b border-r border-cyan-400/40 rotate-45" />
                </div>
              )}

              <a
                href={item.url}
                target={item.isDownload ? undefined : '_blank'}
                rel={item.isDownload ? undefined : 'noopener noreferrer'}
                download={item.isDownload ? true : undefined}
                onMouseEnter={() => setHoveredId(item.label)}
                onMouseLeave={() => setHoveredId(null)}
                aria-label={item.label}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800/80 hover:scale-105 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
              <span className="w-1 h-1 rounded-full mt-0.5 bg-transparent" />
            </div>
          );
        })}
      </nav>
    </div>
  );
}
