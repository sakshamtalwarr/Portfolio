import React, { useState, useEffect } from 'react';

export default function WelcomeScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      const hideTimer = setTimeout(() => {
        setVisible(false);
      }, 1000);
      return () => clearTimeout(hideTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050d1a] transition-opacity duration-1000 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 20% 18%, rgba(14, 116, 144, 0.35), transparent 24rem), radial-gradient(circle at 80% 82%, rgba(79, 70, 229, 0.28), transparent 26rem), #050d1a'
      }}
    >
      <div className="absolute inset-5 border border-cyan-400/20 rounded-2xl pointer-events-none bg-[linear-gradient(rgba(103,232,249,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.035)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="relative text-center px-4">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-indigo-400 bg-clip-text text-transparent">
          Welcome To <br />
          Saksham's Portfolio
        </h2>
        <div className="w-16 h-1 mx-auto mt-4 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
        <p className="mt-6 text-cyan-300 font-semibold tracking-wider text-sm sm:text-lg uppercase">
          Loading portfolio...
        </p>
        <div className="w-10 h-10 mt-6 mx-auto border-4 border-blue-400/20 border-t-cyan-400 rounded-full animate-spin shadow-[0_0_20px_rgba(103,232,249,0.3)]" />
      </div>
    </div>
  );
}
