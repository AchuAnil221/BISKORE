'use client';

import { useEffect, useRef } from 'react';

export default function EcosystemAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      containerRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
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
        background: 'linear-gradient(180deg, #FFF9EB 0%, #FDF3DB 40%, #F5E3BD 100%)',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <style>{`
        @keyframes driftRight {
          from { transform: translateX(-10%); }
          to { transform: translateX(100%); }
        }
        @keyframes driftLeft {
          from { transform: translateX(1920px); }
          to { transform: translateX(-320px); }
        }
        @keyframes drive {
          from { transform: translateX(-360px); }
          to { transform: translateX(1920px); }
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        @keyframes smoke {
          0% { transform: translateY(0) scale(1); opacity: 0.8; }
          100% { transform: translateY(-40px) scale(2); opacity: 0; }
        }
        @keyframes splash {
          0% { transform: scaleX(0.5) scaleY(0.5); opacity: 0; }
          50% { transform: scaleX(1.2) scaleY(1.2); opacity: 0.8; }
          100% { transform: scaleX(1.5) scaleY(1.5); opacity: 0; }
        }
        
        .anim-cloud-1 { animation: driftRight 80s linear infinite; }
        .anim-cloud-2 { animation: driftRight 120s linear infinite reverse; }
        .anim-cloud-3 { animation: driftRight 160s linear infinite; }
        
        .anim-ship-drift { animation: driftLeft 45s linear infinite; }
        .anim-ship-bob { animation: bob 4s ease-in-out infinite; }
        .anim-truck { animation: drive 18s linear infinite; }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .anim-wheel {
          animation: spin 0.8s linear infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
      `}</style>

      {/* --- SVG DEFINITIONS --- */}
      <svg width="0" height="0">
        <defs>
          {/* Gradients to add realism and depth */}
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF9EB" />
            <stop offset="100%" stopColor="#FFDE8B" />
          </linearGradient>
          
          <linearGradient id="cityGradBack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D9C6A3" />
            <stop offset="100%" stopColor="#C2A878" />
          </linearGradient>

          <linearGradient id="cityGradFront" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A68D5C" />
            <stop offset="100%" stopColor="#8C7342" />
          </linearGradient>
          
          <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6C8A85" />
            <stop offset="100%" stopColor="#415E59" />
          </linearGradient>

          <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4A4A4A" />
            <stop offset="100%" stopColor="#2A2A2A" />
          </linearGradient>

          {/* Truck Gradients (Brand Colors) */}
          <linearGradient id="truckCabGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0A3D30" />
            <stop offset="50%" stopColor="#062C22" />
            <stop offset="100%" stopColor="#031A14" />
          </linearGradient>
          
          <linearGradient id="truckTrailerGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="90%" stopColor="#E0E0E0" />
            <stop offset="100%" stopColor="#CCCCCC" />
          </linearGradient>

          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000" floodOpacity="0.15" />
          </filter>
          
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.2" />
          </filter>
        </defs>
      </svg>

      {/* --- SCENE --- */}
      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMax slice"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          bottom: 0,
        }}
      >
        {/* Sky Base (Gradient) */}
        <rect width="1920" height="1080" fill="url(#skyGrad)" opacity="0.6" />

        {/* Sun (Faded out) */}
        <circle cx="1500" cy="500" r="180" fill="#FFC933" opacity="0.05" filter="blur(40px)" />
        <circle cx="1500" cy="500" r="80" fill="#FFF9E6" opacity="0.3" />

        {/* Clouds */}
        <g opacity="0.95">
          <g className="anim-cloud-1" style={{ animationDelay: '-40s' }}>
            <path d="M 200 400 Q 230 360 280 380 Q 330 340 380 380 Q 420 370 430 410 L 200 410 Z" fill="#FFFFFF" opacity="1" filter="blur(1px)" />
          </g>
          <g className="anim-cloud-2" style={{ animationDelay: '-10s' }}>
            <path d="M 800 250 Q 840 200 900 230 Q 980 180 1040 230 Q 1100 220 1100 270 L 800 270 Z" fill="#FFFFFF" opacity="0.9" filter="blur(2px)" />
          </g>
          <g className="anim-cloud-3" style={{ animationDelay: '-70s' }}>
            <path d="M 1400 300 Q 1430 270 1480 290 Q 1530 260 1580 290 Q 1610 280 1620 320 L 1400 320 Z" fill="#FFFFFF" opacity="1" />
          </g>
        </g>

        {/* Cityscape (Background) - distant buildings with faint window grids */}
        <g transform="translate(1000, 680)" opacity="0.45">
          {/* Building 1 */}
          <rect x="0" y="50" width="80" height="150" fill="#C8BCA8" />
          {[...Array(5)].map((_,r) => [...Array(3)].map((_,c) => (
            <rect key={`b1-${r}-${c}`} x={8+c*24} y={58+r*26} width="14" height="16" fill="#A0907A" opacity="0.5" />
          )))}
          {/* Building 2 */}
          <rect x="90" y="20" width="120" height="180" fill="#B8AD9A" />
          <rect x="90" y="20" width="120" height="8" fill="#A09080" />
          {[...Array(6)].map((_,r) => [...Array(4)].map((_,c) => (
            <rect key={`b2-${r}-${c}`} x={98+c*27} y={35+r*26} width="16" height="16" fill="#8C7D6A" opacity="0.45" />
          )))}
          {/* Building 3 */}
          <rect x="220" y="80" width="70" height="120" fill="#C4B8A4" />
          {[...Array(4)].map((_,r) => [...Array(2)].map((_,c) => (
            <rect key={`b3-${r}-${c}`} x={228+c*30} y={90+r*25} width="18" height="15" fill="#9A8C7A" opacity="0.4" />
          )))}
          {/* Building 4 - tallest */}
          <rect x="300" y="0" width="100" height="200" fill="#BDB0A0" />
          <rect x="300" y="0" width="100" height="10" fill="#9A8E80" />
          <rect x="340" y="-20" width="20" height="20" fill="#A09080" />
          {[...Array(7)].map((_,r) => [...Array(3)].map((_,c) => (
            <rect key={`b4-${r}-${c}`} x={308+c*30} y={18+r*25} width="18" height="16" fill="#8A7D6D" opacity="0.5" />
          )))}
          {/* Building 5 */}
          <rect x="410" y="60" width="90" height="140" fill="#C2B6A2" />
          {[...Array(4)].map((_,r) => [...Array(3)].map((_,c) => (
            <rect key={`b5-${r}-${c}`} x={418+c*26} y={70+r*28} width="16" height="17" fill="#9A8C7A" opacity="0.4" />
          )))}
          {/* Building 6 */}
          <rect x="520" y="30" width="140" height="170" fill="#B8AC9A" />
          <rect x="520" y="30" width="140" height="9" fill="#A09080" />
          {[...Array(5)].map((_,r) => [...Array(4)].map((_,c) => (
            <rect key={`b6-${r}-${c}`} x={530+c*32} y={46+r*28} width="20" height="18" fill="#8C7D6A" opacity="0.4" />
          )))}
          {/* Building 7 */}
          <rect x="680" y="90" width="100" height="110" fill="#C0B4A2" />
          {[...Array(3)].map((_,r) => [...Array(3)].map((_,c) => (
            <rect key={`b7-${r}-${c}`} x={690+c*30} y={100+r*28} width="18" height="17" fill="#9A8C7A" opacity="0.4" />
          )))}
          {/* Building 8 */}
          <rect x="800" y="40" width="120" height="160" fill="#BEB2A0" />
          <rect x="800" y="40" width="120" height="9" fill="#A09080" />
          {[...Array(5)].map((_,r) => [...Array(3)].map((_,c) => (
            <rect key={`b8-${r}-${c}`} x={810+c*36} y={56+r*27} width="22" height="16" fill="#8C7D6A" opacity="0.45" />
          )))}
        </g>

        {/* Cityscape (Foreground) */}
        <g transform="translate(1200, 710)">

          {/* Bldg A - tall left */}
          <rect x="0" y="30" width="100" height="170" fill="#A89880" />
          <rect x="0" y="30" width="100" height="10" fill="#8A7A65" />
          <rect x="38" y="10" width="24" height="20" fill="#9A8A72" />
          {[...Array(5)].map((_,r) => [...Array(3)].map((_,c) => (
            <rect key={`fa-${r}-${c}`} x={8+c*31} y={48+r*28} width="20" height="17" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          )))}
          {/* Ground floor - dark shopfront */}
          <rect x="0" y="170" width="100" height="30" fill="#6A5D4A" />
          <rect x="10" y="175" width="80" height="20" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />

          {/* Bldg B - medium */}
          <rect x="110" y="80" width="80" height="120" fill="#B0A290" />
          <rect x="110" y="80" width="80" height="8" fill="#8A7A68" />
          {[...Array(3)].map((_,r) => [...Array(2)].map((_,c) => (
            <rect key={`fb-${r}-${c}`} x={118+c*36} y={96+r*30} width="22" height="18" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          )))}
          <rect x="110" y="170" width="80" height="30" fill="#7A6C58" />

          {/* Fresh Produce Store Detail (Building at x=110) */}
          <g transform="translate(110, 80)">
            <g transform="translate(13, 0)">
              <circle cx="20" cy="25" r="7" fill="#D32F2F" opacity="0.6" />
              <path d="M 20 18 Q 23 15 25 18 Q 23 20 20 18 Z" fill="#6B8E23" opacity="0.7" />
              <circle cx="34" cy="28" r="6" fill="#FFB71D" opacity="0.65" />
              <circle cx="28" cy="20" r="5" fill="#4CAF50" opacity="0.65" />
              <circle cx="34" cy="19" r="4.5" fill="#388E3C" opacity="0.65" />
              <circle cx="24" cy="17" r="4" fill="#2E7D32" opacity="0.65" />
              <path d="M 12 30 L 42 30 L 38 42 L 16 42 Z" fill="#8C7342" opacity="0.55" />
              <path d="M 14 34 L 40 34 M 15 38 L 39 38" stroke="#5D4037" strokeWidth="1" opacity="0.3" />
            </g>
            <path d="M -5 55 L 85 55 L 80 45 L 0 45 Z" fill="#4CAF50" opacity="0.6" />
            <path d="M 15 55 L 20 45 M 35 55 L 40 45 M 55 55 L 60 45 M 75 55 L 80 45" stroke="#2E7D32" strokeWidth="4" opacity="0.35" />
            <rect x="5" y="55" width="70" height="15" fill="#2A3B38" opacity="0.35" />
          </g>

          {/* Bldg C - tallest, Koblaq */}
          <rect x="210" y="10" width="130" height="190" fill="#A09080" />
          <rect x="210" y="10" width="130" height="11" fill="#7A6C5C" />
          <rect x="260" y="-15" width="30" height="25" fill="#8A7C6A" />
          {[...Array(6)].map((_,r) => [...Array(4)].map((_,c) => (
            <rect key={`fc-${r}-${c}`} x={218+c*30} y={28+r*28} width="20" height="18" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          )))}
          {/* Ground floor dark */}
          <rect x="210" y="170" width="130" height="30" fill="#5A4E3C" />

          {/* Koblaq Clothing Store Detail */}
          <g transform="translate(210, 10)">
            <rect x="25" y="15" width="80" height="20" fill="#111" opacity="0.4" />
            <text x="65" y="29" fill="#FFB71D" fontSize="10" fontFamily="sans-serif" letterSpacing="3" textAnchor="middle" fontWeight="600" opacity="0.7">KOBLAQ</text>
            <rect x="15" y="90" width="100" height="60" fill="#1A2523" opacity="0.45" />
            <rect x="15" y="90" width="100" height="60" fill="none" stroke="#FFB71D" strokeWidth="1" opacity="0.3" />
            <path d="M 50 103 L 80 103 L 76 128 L 54 128 Z" fill="none" stroke="#FFB71D" strokeWidth="1.5" opacity="0.5" />
            <path d="M 58 103 Q 65 91 72 103" fill="none" stroke="#FFB71D" strokeWidth="1.5" opacity="0.5" />
          </g>

          {/* Bldg D */}
          <rect x="360" y="60" width="90" height="140" fill="#ACA090" />
          <rect x="360" y="60" width="90" height="9" fill="#8A7C6C" />
          {[...Array(4)].map((_,r) => [...Array(2)].map((_,c) => (
            <rect key={`fd-${r}-${c}`} x={370+c*40} y={76+r*28} width="24" height="17" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          )))}
          <rect x="360" y="170" width="90" height="30" fill="#6A5E4C" />

          {/* Bldg E */}
          <rect x="470" y="40" width="110" height="160" fill="#A89A88" />
          <rect x="470" y="40" width="110" height="10" fill="#887A68" />
          <rect x="510" y="22" width="30" height="18" fill="#9A8C7A" />
          {[...Array(5)].map((_,r) => [...Array(3)].map((_,c) => (
            <rect key={`fe-${r}-${c}`} x={478+c*34} y={58+r*26} width="22" height="16" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          )))}
          <rect x="470" y="170" width="110" height="30" fill="#605040" />

          {/* Bldg F */}
          <rect x="600" y="90" width="120" height="110" fill="#B0A492" />
          <rect x="600" y="90" width="120" height="9" fill="#8A7C6C" />
          {[...Array(3)].map((_,r) => [...Array(3)].map((_,c) => (
            <rect key={`ff-${r}-${c}`} x={610+c*36} y={106+r*28} width="24" height="17" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          )))}
          <rect x="600" y="170" width="120" height="30" fill="#6A5C4C" />
        </g>


        {/* Farm / Landscape (Left Side) - Fresh Produce Origin */}
        <g fill="#A68D5C" opacity="0.4">
          <path d="M 0 780 Q 200 700 400 780 T 800 850 L 0 850 Z" />
          <path d="M -100 850 Q 150 780 400 830 T 900 880 L -100 880 Z" fill="#8C7342" />
        </g>

        {/* Coastal Embankment / Docks (Separating Land from Sea) */}
        <g transform="translate(0, 845)">
          {/* Concrete dock top */}
          <rect x="0" y="0" width="1920" height="15" fill="#D2C8B8" />
          {/* Dock wall facing water */}
          <rect x="0" y="15" width="1920" height="20" fill="#999185" />
          {/* Dock pillars/sections */}
          <g fill="#7A746A">
            <rect x="100" y="15" width="15" height="20" />
            <rect x="300" y="15" width="15" height="20" />
            <rect x="500" y="15" width="15" height="20" />
            <rect x="700" y="15" width="15" height="20" />
            <rect x="900" y="15" width="15" height="20" />
            <rect x="1100" y="15" width="15" height="20" />
            <rect x="1300" y="15" width="15" height="20" />
            <rect x="1500" y="15" width="15" height="20" />
            <rect x="1700" y="15" width="15" height="20" />
          </g>
        </g>

        {/* Ocean/Port Water */}
        <rect x="0" y="860" width="1920" height="90" fill="url(#waterGrad)" />
        {/* Subtle waterline foam */}
        <rect x="0" y="860" width="1920" height="2" fill="#FFFFFF" opacity="0.3" />

        {/* Cargo Ship (Trade) - Detailed Vector */}
        <g className="anim-ship-drift">
          <g className="anim-ship-bob" style={{ transformOrigin: 'center' }}>
            <g transform="translate(0, 760)">
            <g transform="translate(170, 0) scale(-1, 1) translate(-170, 0)">
              {/* Ship Hull */}
              <path d="M 20 60 L 30 100 L 280 100 L 320 60 Z" fill="#1A2523" />
              <path d="M 20 60 L 25 80 L 290 80 L 320 60 Z" fill="#2E403D" />
              
              {/* Bridge/Cabin */}
              <rect x="40" y="30" width="40" height="30" fill="#D9D9D9" />
              <rect x="45" y="20" width="30" height="10" fill="#B3B3B3" />
              <rect x="52" y="10" width="16" height="10" fill="#E6E6E6" />
              <rect x="42" y="35" width="8" height="8" fill="#1A1A1A" />
              <rect x="54" y="35" width="8" height="8" fill="#1A1A1A" />
              <rect x="66" y="35" width="8" height="8" fill="#1A1A1A" />
              
              {/* Detailed Realistic Shipping Containers */}
              {[
                { x: 100, y: 35, color: '#A56A5B', dark: '#874C3D' }, // Bottom Row (Muted Terracotta)
                { x: 145, y: 35, color: '#738C9B', dark: '#526977' }, // Dusty Blue
                { x: 190, y: 35, color: '#D2AC63', dark: '#B58E45' }, // Muted Gold
                { x: 235, y: 35, color: '#2C5A4C', dark: '#194437' }, // Muted Green
                { x: 100, y: 10, color: '#2C5A4C', dark: '#194437' }, // Top Row (Muted Green)
                { x: 145, y: 10, color: '#A56A5B', dark: '#874C3D' }, // Muted Terracotta
                { x: 190, y: 10, color: '#738C9B', dark: '#526977' }  // Dusty Blue
              ].map((c, idx) => (
                <g key={`ship-container-${idx}`} transform={`translate(${c.x}, ${c.y})`}>
                  <rect x="0" y="0" width="40" height="25" fill={c.color} />
                  {/* Corrugated ribbing */}
                  {[...Array(8)].map((_, i) => (
                    <line key={`rib-${i}`} x1={2.5 + i * 5} y1="0" x2={2.5 + i * 5} y2="25" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
                  ))}
                  {/* Edge highlights/shadows */}
                  <rect x="0" y="0" width="40" height="1.5" fill="rgba(255,255,255,0.2)" />
                  <rect x="0" y="23.5" width="40" height="1.5" fill="rgba(0,0,0,0.2)" />
                  <rect x="0" y="0" width="1.5" height="25" fill="rgba(255,255,255,0.1)" />
                  <rect x="38.5" y="0" width="1.5" height="25" fill="rgba(0,0,0,0.2)" />
                  
                  {/* Doors (only on some for texture) */}
                  {idx % 2 === 0 && (
                    <g transform="translate(34, 0)">
                      <rect x="0" y="0" width="6" height="25" fill={c.dark} />
                      <line x1="3" y1="0" x2="3" y2="25" stroke="rgba(0,0,0,0.4)" strokeWidth="0.5" />
                    </g>
                  )}
                  {/* Decal */}
                  {idx % 3 === 0 && (
                    <rect x="4" y="5" width="10" height="4" fill="rgba(255,255,255,0.8)" rx="0.5" />
                  )}
                </g>
              ))}
              
              {/* Subtle Reflection */}
              <path d="M 30 100 L 280 100 L 270 120 L 40 120 Z" fill="#21332F" opacity="0.6" />
              
              {/* Horizontal Bow Wave & Splash */}
              <g transform="translate(280, 102)">
                {/* Static Horizontal Foam at Waterline */}
                <ellipse cx="-15" cy="0" rx="40" ry="2" fill="#FFFFFF" opacity="0.4" />
                <ellipse cx="5" cy="0" rx="20" ry="3" fill="#E0F7FA" opacity="0.7" />
                
                {/* Animated Horizontal Splashes */}
                <g fill="#FFFFFF">
                  <ellipse cx="15" cy="0" rx="12" ry="2.5" style={{ animation: 'splash 1.2s infinite ease-out', transformOrigin: 'center', transformBox: 'fill-box' }} />
                  <ellipse cx="28" cy="0" rx="8" ry="1.5" style={{ animation: 'splash 1.2s infinite ease-out 0.4s', transformOrigin: 'center', transformBox: 'fill-box' }} />
                  <ellipse cx="5" cy="1" rx="15" ry="2" style={{ animation: 'splash 1.2s infinite ease-out 0.8s', transformOrigin: 'center', transformBox: 'fill-box' }} />
                </g>
              </g>
              
              {/* Hull Side Waterline */}
              <path d="M 30 100 L 285 100" stroke="#FFFFFF" strokeWidth="2" opacity="0.15" />
            </g>
            </g>
          </g>
        </g>

        {/* Foreground Highway Embankment (Separating Road from Sea) */}
        <g>
          {/* Solid ground separating sea from road */}
          <rect x="0" y="930" width="1920" height="15" fill="#7A8582" />
          <rect x="0" y="930" width="1920" height="2" fill="#9BA6A3" />
          
          {/* Main Road Deck */}
          <rect x="0" y="945" width="1920" height="60" fill="url(#roadGrad)" filter="url(#dropShadow)" />
          
          {/* Foreground solid block below road */}
          <rect x="0" y="1005" width="1920" height="75" fill="#3D4543" />
          
          {/* Road markings */}
          <g fill="#FFB71D" opacity="0.8">
            <rect x="50" y="973" width="60" height="6" />
            <rect x="250" y="973" width="60" height="6" />
            <rect x="450" y="973" width="60" height="6" />
            <rect x="650" y="973" width="60" height="6" />
            <rect x="850" y="973" width="60" height="6" />
            <rect x="1050" y="973" width="60" height="6" />
            <rect x="1250" y="973" width="60" height="6" />
            <rect x="1450" y="973" width="60" height="6" />
            <rect x="1650" y="973" width="60" height="6" />
            <rect x="1850" y="973" width="60" height="6" />
          </g>
        </g>

        {/* Realistic Logistics Truck (Biskore Fleet) */}
        <g className="anim-truck">
          <g transform="translate(0, 830)" filter="url(#softShadow)">
            {/* Trailer */}
            <rect x="10" y="20" width="260" height="100" rx="4" fill="url(#truckTrailerGrad)" />
            {/* Trailer details */}
            <rect x="15" y="30" width="250" height="2" fill="#E6E6E6" />
            
            <text x="140" y="75" fill="#0A3D30" fontSize="22" fontFamily="sans-serif" letterSpacing="10" textAnchor="middle" fontWeight="800" opacity="0.15">BISKORE</text>
            
            {/* Truck Exhaust Smoke */}
            <g transform="translate(282, 20)">
              <rect x="-2" y="-15" width="4" height="20" fill="#666" />
              <circle cx="0" cy="-20" r="6" fill="#D9D9D9" style={{ animation: 'smoke 1.5s infinite linear' }} />
              <circle cx="-5" cy="-25" r="8" fill="#E6E6E6" style={{ animation: 'smoke 1.5s infinite linear 0.4s' }} />
              <circle cx="5" cy="-30" r="10" fill="#F2F2F2" style={{ animation: 'smoke 1.5s infinite linear 0.8s' }} />
            </g>
            
            <rect x="15" y="90" width="250" height="2" fill="#E6E6E6" />
            {/* Biskore Gold Brand Stripe */}
            <rect x="10" y="100" width="260" height="12" fill="#FFB71D" />
            
            {/* Truck Cab (Deep Green) */}
            <path d="M 275 25 L 325 25 Q 345 25 350 45 L 360 70 L 360 120 L 275 120 Z" fill="url(#truckCabGrad)" />
            <path d="M 275 25 L 325 25 Q 345 25 350 45 L 360 70 L 275 70 Z" fill="#0A3D30" />
            
            {/* Window */}
            <path d="M 285 35 L 320 35 Q 330 35 335 45 L 345 65 L 285 65 Z" fill="#1A2523" />
            {/* Window reflection */}
            <path d="M 295 35 L 320 35 L 335 65 L 310 65 Z" fill="#FFFFFF" opacity="0.1" />

            {/* Cab details */}
            <rect x="290" y="80" width="20" height="6" rx="2" fill="#111" />
            <rect x="345" y="95" width="10" height="10" rx="5" fill="#FFC933" />
            <rect x="350" y="110" width="12" height="6" rx="2" fill="#333" />
            
            {/* Chassis/Underbelly */}
            <rect x="10" y="120" width="345" height="15" fill="#222" />
            <rect x="40" y="115" width="30" height="10" fill="#111" />
            <rect x="100" y="115" width="50" height="10" fill="#111" />

            {/* Wheels */}
            {/* Trailer Wheels */}
            <g transform="translate(45, 130)">
              <circle cx="0" cy="0" r="18" fill="#111" />
              <circle cx="0" cy="0" r="12" fill="#444" />
              <g className="anim-wheel">
                <circle cx="0" cy="0" r="8" fill="#D9D9D9" />
                <circle cx="0" cy="4" r="2" fill="#333" />
                <circle cx="0" cy="-4" r="2" fill="#333" />
                <circle cx="4" cy="0" r="2" fill="#333" />
                <circle cx="-4" cy="0" r="2" fill="#333" />
              </g>
            </g>
            <g transform="translate(90, 130)">
              <circle cx="0" cy="0" r="18" fill="#111" />
              <circle cx="0" cy="0" r="12" fill="#444" />
              <g className="anim-wheel">
                <circle cx="0" cy="0" r="8" fill="#D9D9D9" />
                <circle cx="0" cy="4" r="2" fill="#333" />
                <circle cx="0" cy="-4" r="2" fill="#333" />
                <circle cx="4" cy="0" r="2" fill="#333" />
                <circle cx="-4" cy="0" r="2" fill="#333" />
              </g>
            </g>

            {/* Cab Wheels */}
            <g transform="translate(290, 130)">
              <circle cx="0" cy="0" r="18" fill="#111" />
              <circle cx="0" cy="0" r="12" fill="#444" />
              <g className="anim-wheel">
                <circle cx="0" cy="0" r="8" fill="#D9D9D9" />
                <circle cx="0" cy="4" r="2" fill="#333" />
                <circle cx="0" cy="-4" r="2" fill="#333" />
                <circle cx="4" cy="0" r="2" fill="#333" />
                <circle cx="-4" cy="0" r="2" fill="#333" />
              </g>
            </g>
            <g transform="translate(340, 130)">
              <circle cx="0" cy="0" r="18" fill="#111" />
              <circle cx="0" cy="0" r="12" fill="#444" />
              <g className="anim-wheel">
                <circle cx="0" cy="0" r="8" fill="#D9D9D9" />
                <circle cx="0" cy="4" r="2" fill="#333" />
                <circle cx="0" cy="-4" r="2" fill="#333" />
                <circle cx="4" cy="0" r="2" fill="#333" />
                <circle cx="-4" cy="0" r="2" fill="#333" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
