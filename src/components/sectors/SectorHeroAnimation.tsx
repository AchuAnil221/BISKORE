'use client';

import { useEffect, useRef } from 'react';

export default function SectorHeroAnimation({
  sectorId,
  accentColor,
}: {
  sectorId: string;
  accentColor: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      containerRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <style>{`
        @keyframes driftBg {
          from { transform: translateX(0) scale(1.1); }
          to { transform: translateX(-5%) scale(1.1); }
        }
        @keyframes floatShapes {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .anim-drift {
          animation: driftBg 30s alternate infinite ease-in-out;
        }
        .anim-float {
          animation: floatShapes 15s infinite ease-in-out;
        }
        .anim-glow {
          animation: pulseGlow 8s infinite ease-in-out;
        }
      `}</style>

      {/* --- SVG DEFINITIONS --- */}
      <svg width="0" height="0">
        <defs>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="30" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>

      {/* --- SCENE --- */}
      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          inset: 0,
          opacity: 0.8,
        }}
        className="anim-drift"
      >
        {/* Soft radial glow points */}
        {/* Soft atmospheric background orbs / bokeh effect (Unified realistic animation) */}
        <g className="anim-float" style={{ mixBlendMode: 'multiply' }}>
          {/* Main large background orb */}
          <circle cx="1500" cy="300" r="450" fill={accentColor} opacity="0.12" filter="url(#softGlow)" className="anim-glow" style={{ animationDelay: '0s' }} />
          {/* Secondary large background orb */}
          <circle cx="300" cy="800" r="550" fill={accentColor} opacity="0.08" filter="url(#softGlow)" className="anim-glow" style={{ animationDelay: '-3s' }} />
          
          {/* Drifting mid-ground orbs for realistic depth */}
          <circle cx="800" cy="600" r="250" fill={accentColor} opacity="0.06" filter="url(#softGlow)" className="anim-drift" style={{ animationDelay: '-7s' }} />
          <circle cx="1200" cy="800" r="300" fill={accentColor} opacity="0.05" filter="url(#softGlow)" className="anim-drift" style={{ animationDelay: '-12s', animationDuration: '40s' }} />
          <circle cx="500" cy="150" r="200" fill={accentColor} opacity="0.07" filter="url(#softGlow)" className="anim-drift" style={{ animationDelay: '-2s', animationDuration: '25s' }} />

          {/* Foreground slow floating particles */}
          <circle cx="1000" cy="300" r="80" fill={accentColor} opacity="0.1" filter="url(#softGlow)" className="anim-float" style={{ animationDelay: '-1s', animationDuration: '18s' }} />
          <circle cx="1600" cy="700" r="120" fill={accentColor} opacity="0.08" filter="url(#softGlow)" className="anim-float" style={{ animationDelay: '-6s', animationDuration: '22s' }} />
          <circle cx="200" cy="400" r="150" fill={accentColor} opacity="0.05" filter="url(#softGlow)" className="anim-float" style={{ animationDelay: '-4s', animationDuration: '20s' }} />
        </g>
      </svg>
    </div>
  );
}
