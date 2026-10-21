import React from 'react';
import { Camera, Code, Bike, Mic, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hobbies() {
  const hobbiesList = [
    { label: 'Technology Projects', icon: Cpu },
    { label: 'Web Development', icon: Code },
    { label: 'Photography', icon: Camera },
    { label: 'Moto Rides', icon: Bike },
    { label: 'Singing', icon: Mic },
  ];

  return (
    <section id="hobbies" className="py-20 relative z-10 bg-slate-950/40 border-y border-cyan-400/10">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 text-center">
        
        {/* Section Header */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white inline-block">
          HOBBIES
        </h2>
        <div className="w-16 h-1 mx-auto mt-3 mb-10 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />

        <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed mb-10">
          {portfolioData.hobbies}
        </p>

        {/* Hobby Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {hobbiesList.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-slate-900/80 border border-cyan-400/20 text-cyan-300 hover:border-cyan-400 hover:bg-slate-800 hover:scale-105 transition-all shadow-md"
              >
                <Icon size={18} className="text-cyan-400" />
                <span className="font-medium text-sm text-slate-200">{hobby.label}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
