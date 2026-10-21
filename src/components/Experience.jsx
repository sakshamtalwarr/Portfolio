import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white inline-block">
            EXPERIENCE & EDUCATION
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Experience Column */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-[#0a182d]/85 border border-cyan-400/15 shadow-xl">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-cyan-400/15">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-950/60 border border-cyan-400/30 text-cyan-400">
                <Briefcase size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience & Leadership</h3>
            </div>

            <div className="space-y-4">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="group relative pl-6 pb-2 border-l-2 border-cyan-400/30 hover:border-cyan-400 transition-colors"
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-400 border-2 border-blue-700 shadow-[0_0_12px_rgba(103,232,249,0.7)] group-hover:scale-125 transition-transform" />

                  <div className="p-4 rounded-xl bg-slate-800/40 border border-cyan-400/10 group-hover:border-cyan-400/30 group-hover:bg-slate-800/70 transition-all">
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm font-semibold text-blue-400">{item.organization}</p>
                    {item.date && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 my-1.5">
                        <Calendar size={13} />
                        <span>{item.date}</span>
                      </div>
                    )}
                    <p className="text-sm text-slate-300 leading-relaxed mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-[#0a182d]/85 border border-cyan-400/15 shadow-xl">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-cyan-400/15">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-950/60 border border-blue-400/30 text-blue-400">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education & Certifications</h3>
            </div>

            <div className="space-y-4">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="group relative pl-6 pb-2 border-l-2 border-blue-400/30 hover:border-blue-400 transition-colors"
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-400 border-2 border-cyan-700 shadow-[0_0_12px_rgba(96,165,250,0.7)] group-hover:scale-125 transition-transform" />

                  <div className="p-4 rounded-xl bg-slate-800/40 border border-blue-400/10 group-hover:border-blue-400/30 group-hover:bg-slate-800/70 transition-all">
                    <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm font-semibold text-cyan-400">{item.institution}</p>
                    {item.date && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 my-1.5">
                        <Calendar size={13} />
                        <span>{item.date}</span>
                      </div>
                    )}
                    {item.description && (
                      <p className="text-sm text-slate-300 leading-relaxed mt-2">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
