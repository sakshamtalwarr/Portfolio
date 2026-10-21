import React from 'react';
import { Code2, Layers, Database, Wrench, Radio, Lightbulb } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2,
  Layers,
  Database,
  Wrench,
  Radio,
  Lightbulb,
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white inline-block">
            TECHNICAL SKILLS
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skillGroup, index) => {
            const IconComponent = iconMap[skillGroup.icon] || Code2;
            return (
              <div
                key={index}
                className="group relative flex flex-col p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/85 to-[#0c182b]/90 border border-cyan-400/15 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(8,145,178,0.2)] text-center"
              >
                {/* Category Icon */}
                <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-blue-950/40 border border-blue-400/30 text-cyan-300 group-hover:scale-110 group-hover:border-cyan-400 transition-transform">
                  <IconComponent size={24} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-5 group-hover:text-cyan-300 transition-colors">
                  {skillGroup.category}
                </h3>

                {/* Skill Pills */}
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {skillGroup.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-800/80 text-slate-200 border border-cyan-400/15 group-hover:border-cyan-400/30 hover:bg-cyan-500/20 hover:text-cyan-200 hover:border-cyan-400 transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
