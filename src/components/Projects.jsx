import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp, Sparkles, Filter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedMobileId, setExpandedMobileId] = useState(null);

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'web', label: 'Web & Mobile' },
    { id: 'iot', label: 'IoT & Telematics' },
  ];

  const getProjectCategory = (p) => {
    const text = (p.title + ' ' + p.tech + ' ' + p.description).toLowerCase();
    if (text.includes('mcp') || text.includes('ai') || text.includes('llm') || text.includes('intelligence')) return 'ai';
    if (text.includes('esp32') || text.includes('iot') || text.includes('telematics') || text.includes('telemetry') || text.includes('rfid')) return 'iot';
    return 'web';
  };

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return p.featured;
    return getProjectCategory(p) === activeFilter;
  });

  const toggleMobileExpand = (id) => {
    setExpandedMobileId(expandedMobileId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 relative z-10 bg-slate-950/40 border-y border-cyan-400/10">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-950/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
            Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white block">
            FEATURED PROJECTS
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Hover over any project on desktop to view full architecture &amp; links, or tap to expand on mobile.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(103,232,249,0.35)] scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Compact Default + Desktop Hover Expansion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredProjects.map((project) => {
            const isMobileExpanded = expandedMobileId === project.id;

            return (
              <div
                key={project.id}
                className={`group relative flex flex-col rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/90 to-[#081528]/95 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(8,145,178,0.28)] ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Subtle sheen highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-400/0 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                {/* Project Image Banner */}
                {/* Default compact on desktop: h-28 / h-32. Expands to h-48 / h-56 on hover! */}
                <div className="relative w-full overflow-hidden bg-slate-950 transition-all duration-500 ease-out h-36 md:h-32 md:group-hover:h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/600x350/1e293b/38bdf8?text=${encodeURIComponent(project.title)}`;
                    }}
                    className="w-full h-full object-cover filter saturate-[0.85] contrast-[1.05] group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 z-20">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 flex items-center gap-1">
                        <Sparkles size={11} />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Top-right quick link preview pill */}
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.label}
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-900/90 text-cyan-300 hover:text-white hover:bg-cyan-500 border border-cyan-400/30 transition-all shadow-md"
                      >
                        {link.type === 'github' ? <Github size={14} /> : <ExternalLink size={14} />}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Card Header & Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  
                  {/* Title and Tech Badges (Always visible in compact mode) */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Tech stack badge */}
                  <div className="mb-3">
                    <span className="text-[11px] font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-400/25 px-2.5 py-1 rounded-md inline-block">
                      {project.tech}
                    </span>
                  </div>

                  {/* Desktop Hover Expansion Container + Mobile Tap Toggle */}
                  {/* Compact on Desktop: collapsed/low height by default. On hover: expands smoothly with full details! */}
                  <div
                    className={`transition-all duration-500 ease-out overflow-hidden ${
                      isMobileExpanded
                        ? 'max-h-96 opacity-100 mt-2'
                        : 'max-h-0 opacity-0 md:max-h-12 md:opacity-80 md:group-hover:max-h-96 md:group-hover:opacity-100'
                    }`}
                  >
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 md:group-hover:line-clamp-none transition-all">
                      {project.description}
                    </p>

                    {/* Action buttons revealed on expansion */}
                    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-800/80">
                      {project.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                            link.type === 'github'
                              ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-cyan-400/50'
                              : 'bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 border border-cyan-400/40 font-bold shadow-[0_0_12px_rgba(103,232,249,0.2)]'
                          }`}
                        >
                          {link.type === 'github' ? <Github size={14} /> : <ExternalLink size={14} />}
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Mobile-only expand/collapse trigger button */}
                  <div className="mt-3 pt-2 border-t border-slate-800/60 md:hidden flex items-center justify-between">
                    <button
                      onClick={() => toggleMobileExpand(project.id)}
                      className="text-xs font-medium text-cyan-400 flex items-center gap-1.5 hover:text-cyan-300 py-1"
                    >
                      {isMobileExpanded ? (
                        <>
                          <span>Show Less</span>
                          <ChevronUp size={14} />
                        </>
                      ) : (
                        <>
                          <span>View Details</span>
                          <ChevronDown size={14} />
                        </>
                      )}
                    </button>
                    
                    <div className="flex items-center gap-2">
                      {project.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-slate-400 hover:text-cyan-300 underline"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Desktop compact subtle hint */}
                  <div className="hidden md:flex items-center justify-between text-[11px] text-slate-500 group-hover:opacity-0 transition-opacity mt-auto pt-2 border-t border-slate-800/40">
                    <span>Hover to expand details</span>
                    <ChevronDown size={13} className="text-cyan-400 animate-bounce" />
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
