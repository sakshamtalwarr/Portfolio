import React from 'react';
import { Code, ShoppingCart, Cpu, Database, Bot, Server } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code,
  ShoppingCart,
  Cpu,
  Database,
  Bot,
  Server,
};

export default function Services() {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-24 relative z-10 bg-slate-950/40 border-y border-cyan-400/10">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white inline-block">
            WHAT I DO
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Code;
            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/85 to-[#0b1728]/90 border border-cyan-400/15 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(8,145,178,0.2)]"
              >
                {/* Subtle sheen on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Service Icon Box */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cyan-950/50 border border-cyan-400/30 text-cyan-300 mb-6 group-hover:scale-110 group-hover:border-cyan-400 group-hover:text-cyan-200 transition-all">
                  <IconComponent size={28} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
