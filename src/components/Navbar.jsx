import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#040c17]/85 backdrop-blur-md border-b border-cyan-400/15 py-3 shadow-lg shadow-black/20'
          : 'bg-[#040c17]/65 backdrop-blur-md border-b border-cyan-400/10 py-4'
      }`}
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Mark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group text-gray-100 hover:text-cyan-400 transition-colors"
        >
          <img
            src={portfolioData.personal.logoImage}
            alt={portfolioData.personal.name}
            className="w-10 h-10 rounded-full border-2 border-cyan-400/80 shadow-[0_0_15px_rgba(103,232,249,0.3)] object-cover group-hover:scale-105 transition-transform"
          />
          <span className="font-montserrat font-bold text-sm tracking-wider uppercase text-white group-hover:text-cyan-300 transition-colors">
            {portfolioData.personal.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs font-semibold tracking-wider uppercase transition-all duration-200 py-1 ${
                  isActive
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-200 hover:text-cyan-400 p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071324]/95 border-b border-cyan-400/20 backdrop-blur-xl px-4 py-4 animate-fadeIn">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 font-semibold'
                        : 'text-gray-300 hover:bg-slate-800/60 hover:text-cyan-400'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
