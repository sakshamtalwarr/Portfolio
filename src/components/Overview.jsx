import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import { Rocket, BookOpen, ArrowRight, Sparkles, ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Overview({ setActiveTab }) {
  const { projects, blogs } = portfolioData;
  const topProjects = projects.filter((p) => p.featured).slice(0, 3);
  const latestBlog = blogs?.[0];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <Hero setActiveTab={setActiveTab} />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Featured Projects Highlight Banner */}
      <section className="py-16 relative z-10">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 text-center sm:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-950/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <Rocket size={13} className="text-cyan-400" />
                Featured Builds
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                Spotlight Projects
              </h3>
            </div>

            <button
              onClick={() => handleTabChange('projects')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 border border-cyan-400/30 hover:border-cyan-400 font-bold text-xs transition-all shadow-md group cursor-pointer"
            >
              <span>Explore All Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleTabChange('projects')}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-900/80 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1.5 p-5 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="relative h-32 rounded-xl overflow-hidden mb-4 bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter saturate-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent" />
                  </div>

                  <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950/70 border border-cyan-400/30 px-2 py-0.5 rounded uppercase">
                    {project.tech.split(',')[0]}
                  </span>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mt-2 leading-snug">
                    {project.title}
                  </h4>

                  <p className="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs text-cyan-400 font-semibold">
                  <span>View Details &amp; Links</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Preview Banner */}
      {latestBlog && (
        <section className="py-12 relative z-10">
          <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900/90 via-[#0a182d]/90 to-slate-950/90 border border-cyan-400/25 p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-950/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
                  <BookOpen size={13} className="text-cyan-400" />
                  Latest Architecture Write-Up
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  {latestBlog.title}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl line-clamp-2 mb-4">
                  {latestBlog.summary}
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>{latestBlog.date}</span>
                  <span>•</span>
                  <span>{latestBlog.readTime}</span>
                  <span>•</span>
                  <span className="text-cyan-400 font-medium">#{latestBlog.category}</span>
                </div>
              </div>

              <button
                onClick={() => handleTabChange('blog')}
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Read on Blog</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Quick CTA Reach-Out */}
      <section className="py-12 pb-20 relative z-10 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to collaborate on something ambitious?
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            Whether it's AI agent tooling, real-time telemetry, or custom web architecture — let's build it.
          </p>
          <button
            onClick={() => handleTabChange('contact')}
            className="px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-indigo-500 border border-cyan-400/30 shadow-[0_10px_30px_rgba(8,145,178,0.35)] hover:-translate-y-1 transition-all cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
