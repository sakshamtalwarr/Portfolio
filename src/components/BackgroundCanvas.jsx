import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const context = canvas.getContext('2d');
    let animationFrameId;
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const particles = [];
    const count = Math.min(68, Math.max(30, Math.floor(window.innerWidth / 26)));
    let scrollEnergy = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const seed = () => {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 1.7 + 0.5,
          speed: Math.random() * 0.22 + 0.05,
          phase: Math.random() * Math.PI * 2
        });
      }
    };

    const render = (time) => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Mouse radial glow
      const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 250);
      glow.addColorStop(0, 'rgba(96, 165, 250, 0.15)');
      glow.addColorStop(1, 'rgba(96, 165, 250, 0)');
      context.fillStyle = glow;
      context.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Render floating cyber particles
      particles.forEach((particle) => {
        particle.y -= particle.speed + scrollEnergy * 0.002;
        if (particle.y < -8) {
          particle.y = window.innerHeight + 8;
          particle.x = Math.random() * window.innerWidth;
        }

        const x = particle.x + Math.sin(time * 0.00065 + particle.phase) * 7;
        const y = particle.y + Math.cos(time * 0.00048 + particle.phase) * 5;
        const distance = Math.hypot(x - pointer.x, y - pointer.y);
        const alpha = Math.max(0.12, 0.68 - distance / 620);

        context.beginPath();
        context.arc(x, y, particle.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(103, 232, 249, ${alpha})`;
        context.fill();
      });

      scrollEnergy *= 0.92;
      animationFrameId = requestAnimationFrame(render);
    };

    const handlePointerMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    const handleScroll = () => {
      scrollEnergy = Math.min(scrollEnergy + 12, 90);
    };

    const handleResize = () => {
      resize();
      seed();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    resize();
    seed();
    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="cyber-canvas"
      aria-hidden="true"
      className="fixed inset-0 z-0 w-full h-full pointer-events-none"
    />
  );
}
