import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import BackgroundCanvas from './components/BackgroundCanvas';
import FloatingHeader from './components/FloatingHeader';
import FloatingDock from './components/FloatingDock';
import Overview from './components/Overview';
import Projects from './components/Projects';
import ExperienceTab from './components/ExperienceTab';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  // Sync active tab with URL hash if present
  useEffect(() => {
    const validTabs = ['overview', 'projects', 'experience', 'blog', 'contact'];
    const currentHash = window.location.hash.replace('#', '').toLowerCase();
    
    if (validTabs.includes(currentHash)) {
      setActiveTab(currentHash);
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    window.location.hash = newTab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Welcome Screen Intro */}
      <WelcomeScreen />

      {/* Cyber Blue Canvas Particle Field */}
      <BackgroundCanvas />

      {/* Modern Floating Island Header */}
      <FloatingHeader activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main Tabbed Content Area */}
      <main className="relative z-10 pt-20 pb-28 min-h-[calc(100vh-140px)]">
        <div className="animate-fadeIn key={activeTab}">
          {activeTab === 'overview' && <Overview setActiveTab={handleTabChange} />}
          {activeTab === 'projects' && (
            <div className="pt-8">
              <Projects />
            </div>
          )}
          {activeTab === 'experience' && <ExperienceTab />}
          {activeTab === 'blog' && (
            <div className="pt-8">
              <Blog />
            </div>
          )}
          {activeTab === 'contact' && (
            <div className="pt-8">
              <Contact />
            </div>
          )}
        </div>
      </main>

      {/* Floating macOS/iOS Action Dock */}
      <FloatingDock activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
