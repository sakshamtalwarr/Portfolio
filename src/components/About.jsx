import React from 'react';
import { Download, Mail, Phone, MapPin, Languages, Award, Briefcase, Code, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const statCards = [
    { label: 'Role', value: 'AI Automation', sub: 'M&A Ventures', icon: Briefcase, color: 'text-cyan-400' },
    { label: 'Featured Projects', value: '10+', sub: 'Live & Open-Source', icon: Code, color: 'text-blue-400' },
    { label: 'Hackathons', value: 'Winner', sub: 'SGT University IoT', icon: Award, color: 'text-amber-400' },
    { label: 'Education', value: 'MCA (Active)', sub: 'MUJ | BCA (73.5%)', icon: Sparkles, color: 'text-emerald-400' },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white inline-block">
            ABOUT ME
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
        </div>

        {/* Content Box */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-slate-900/85 via-[#0a1b30]/80 to-slate-950/90 border border-cyan-400/20 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-14">
            
            {/* Profile Image with Cyber Glow */}
            <div className="flex-shrink-0 text-center">
              <div className="relative inline-block group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 blur-xl opacity-40 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/300x300/1e293b/38bdf8?text=Saksham+Talwar';
                  }}
                  className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full object-cover border-4 border-cyan-400 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Profile Details */}
            <div className="flex-1 text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 leading-snug">
                {personal.aboutHeading}
              </h3>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                {personal.aboutDescription}
              </p>

              {/* Stat Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                {statCards.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-cyan-400/15 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300"
                    >
                      <Icon size={18} className={`${stat.color} mb-1.5`} />
                      <div className="text-base sm:text-lg font-bold text-white leading-tight">{stat.value}</div>
                      <div className="text-[11px] font-semibold text-cyan-300">{stat.label}</div>
                      <div className="text-[10px] text-slate-400 truncate mt-0.5">{stat.sub}</div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Details List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 text-sm sm:text-base border-t border-slate-800/80 pt-6">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="text-cyan-400 flex-shrink-0" size={18} />
                  <span>
                    <strong className="text-cyan-300">Email:</strong>{' '}
                    <a href={`mailto:${personal.email}`} className="hover:text-cyan-400 hover:underline">
                      {personal.email}
                    </a>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="text-cyan-400 flex-shrink-0" size={18} />
                  <span>
                    <strong className="text-cyan-300">Phone:</strong> {personal.phone}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="text-cyan-400 flex-shrink-0" size={18} />
                  <span>
                    <strong className="text-cyan-300">Location:</strong> {personal.location}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Languages className="text-cyan-400 flex-shrink-0" size={18} />
                  <span>
                    <strong className="text-cyan-300">Languages:</strong> {personal.languages}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href={personal.cvLink}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-500/40 shadow-lg shadow-emerald-950/40 hover:-translate-y-1 transition-all duration-300"
                >
                  Download CV
                  <Download size={18} />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
