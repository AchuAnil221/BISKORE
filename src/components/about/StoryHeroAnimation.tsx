'use client';

import { useEffect, useRef } from 'react';

export default function StoryHeroAnimation() {
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
        background: 'linear-gradient(180deg, #F8F7F4 0%, #FDF3DB 40%, #E8DFCB 100%)',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <style>{`
        @keyframes driftRight {
          from { transform: translateX(-10%); }
          to { transform: translateX(100%); }
        }
        
        .anim-cloud-1 { animation: driftRight 90s linear infinite; }
        .anim-cloud-2 { animation: driftRight 130s linear infinite reverse; }
        .anim-cloud-3 { animation: driftRight 160s linear infinite; }
        
        @keyframes driveAlong {
          from { offset-distance: 0%; }
          to { offset-distance: 100%; }
        }
        
        .anim-truck { 
          offset-path: path("M 0 700 C 200 705, 400 780, 800 780 C 1100 780, 1300 780, 1450 780");
          offset-rotate: auto;
          animation: driveAlong 23s linear infinite;
        }

        .anim-truck-2 { 
          offset-path: path("M 0 695 C 200 700, 400 775, 800 775 C 1100 775, 1300 775, 1450 775");
          offset-rotate: auto;
          animation: driveAlong 33s linear infinite;
          animation-delay: -15s;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .anim-wheel {
          animation: spin 0.8s linear infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
        .anim-wheel-slow {
          animation: spin 1.2s linear infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
      `}</style>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F8F7F4" />
            <stop offset="100%" stopColor="#F5E8CD" />
          </linearGradient>
          
          <linearGradient id="cityGradBack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D9C6A3" />
            <stop offset="100%" stopColor="#C2A878" />
          </linearGradient>

          <linearGradient id="cityGradFront" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A68D5C" />
            <stop offset="100%" stopColor="#8C7342" />
          </linearGradient>
          
          <linearGradient id="cityGroundGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D5C5A8" />
            <stop offset="100%" stopColor="#B3A284" />
          </linearGradient>

          <linearGradient id="farmGradBack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C4D1B8" />
            <stop offset="100%" stopColor="#9AB88A" />
          </linearGradient>

          <linearGradient id="farmGradFront" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9AB88A" />
            <stop offset="100%" stopColor="#769C60" />
          </linearGradient>

          <linearGradient id="fieldGradGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E6C875" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>

          <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#555" />
            <stop offset="100%" stopColor="#333" />
          </linearGradient>

          {/* Window pattern for realistic buildings */}
          <pattern id="windows1" width="10" height="10" patternUnits="userSpaceOnUse">
            <rect x="2" y="2" width="6" height="6" fill="#FFF9EB" opacity="0.4" />
          </pattern>
          <pattern id="windows2" width="15" height="15" patternUnits="userSpaceOnUse">
            <rect x="3" y="3" width="9" height="4" fill="#FFF9EB" opacity="0.3" />
            <rect x="3" y="9" width="9" height="4" fill="#FFF9EB" opacity="0.3" />
          </pattern>
          <pattern id="windows3" width="8" height="20" patternUnits="userSpaceOnUse">
            <rect x="2" y="2" width="4" height="16" fill="#FFF9EB" opacity="0.5" />
          </pattern>
          
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
        </defs>
      </svg>

      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMax slice"
        style={{ width: '100%', height: '100%', position: 'absolute', bottom: 0, opacity: 0.55 }}
      >
        <rect width="1920" height="1080" fill="url(#skyGrad)" opacity="0.6" />

        {/* Sun */}
        <circle cx="1400" cy="450" r="160" fill="#FFC933" opacity="0.06" filter="blur(40px)" />
        <circle cx="1400" cy="450" r="70" fill="#FFF9E6" opacity="0.4" />

        {/* Clouds */}
        <g opacity="0.85">
          <g className="anim-cloud-1" style={{ animationDelay: '-40s' }}>
            <path d="M 200 400 Q 230 360 280 380 Q 330 340 380 380 Q 420 370 430 410 L 200 410 Z" fill="#FFFFFF" opacity="0.9" />
          </g>
          <g className="anim-cloud-2" style={{ animationDelay: '-10s' }}>
            <path d="M 800 250 Q 840 200 900 230 Q 980 180 1040 230 Q 1100 220 1100 270 L 800 270 Z" fill="#FFFFFF" opacity="0.8" />
          </g>
          <g className="anim-cloud-3" style={{ animationDelay: '-70s' }}>
            <path d="M 1400 300 Q 1430 270 1480 290 Q 1530 260 1580 290 Q 1610 280 1620 320 L 1400 320 Z" fill="#FFFFFF" opacity="1" />
          </g>
        </g>

        {/* =========================================================================
            LANDSCAPE LAYER
            ========================================================================= */}
        <g transform="translate(0, 250)">
          
          {/* Distant Hills (Left/Center) */}
          <path d="M -100 650 Q 300 550 700 680 T 1300 650 L 1300 1080 L -100 1080 Z" fill="url(#farmGradBack)" opacity="0.7" />
          
          {/* Farm Fields (Left) */}
          <g>
            <path d="M -50 750 L 300 660 L 550 780 L -50 820 Z" fill="url(#fieldGradGold)" />
            <path d="M 200 690 L 500 620 L 750 720 L 400 770 Z" fill="url(#farmGradFront)" />
            <path d="M 450 730 L 700 660 L 1000 750 L 600 800 Z" fill="#608A4D" />
          </g>

          {/* Realistic Farm Structures & Details */}
          <g transform="translate(50, 530)" opacity="0.95">
            {/* Trees Behind Barn */}
            <g fill="#2E5A27">
              <circle cx="90" cy="50" r="30" />
              <circle cx="110" cy="40" r="25" />
              <circle cx="130" cy="55" r="20" />
            </g>
            <g fill="#3A7032">
              <circle cx="80" cy="60" r="25" />
              <circle cx="105" cy="55" r="30" />
              <circle cx="135" cy="70" r="20" />
            </g>

            {/* Main Barn/Warehouse */}
            <rect x="140" y="50" width="140" height="90" fill="#E6E2D8" />
            <rect x="140" y="50" width="70" height="90" fill="#DCD7C9" />
            <polygon points="130,50 170,10 250,10 290,50" fill="#8B3A3A" />
            <polygon points="130,50 170,10 210,10 210,50" fill="#7A3333" />
            <polygon points="120,50 130,50 170,10 160,10" fill="#5C2626" />
            <rect x="190" y="90" width="40" height="50" fill="#5C4033" />
            <rect x="190" y="90" width="20" height="50" fill="#4A332A" />
            <path d="M 190 90 L 230 140 M 230 90 L 190 140" stroke="#3A2821" strokeWidth="2" opacity="0.5" />
            <rect x="155" y="70" width="15" height="15" fill="#1A252C" />
            <rect x="250" y="70" width="15" height="15" fill="#1A252C" />
            <rect x="200" y="25" width="20" height="15" fill="#1A252C" />

            {/* Modern Silos */}
            <rect x="290" y="30" width="45" height="110" fill="#B0BEC5" />
            <rect x="290" y="30" width="20" height="110" fill="#90A4AE" />
            <path d="M 290 30 Q 312.5 -10 335 30 Z" fill="#78909C" />
            {[...Array(10)].map((_, i) => (
              <line key={i} x1="290" y1={40 + i * 10} x2="335" y2={40 + i * 10} stroke="#78909C" strokeWidth="1" />
            ))}
            
            <rect x="340" y="60" width="35" height="80" fill="#CFD8DC" />
            <rect x="340" y="60" width="15" height="80" fill="#B0BEC5" />
            <path d="M 340 60 Q 357.5 35 375 60 Z" fill="#90A4AE" />

            {/* Farm Fence */}
            <g stroke="#8D6E63" strokeWidth="3">
              <line x1="20" y1="130" x2="130" y2="130" />
              <line x1="20" y1="140" x2="130" y2="140" />
              {[30, 50, 70, 90, 110].map((x) => (
                <line key={x} x1={x} y1="125" x2={x} y2="145" />
              ))}
            </g>

            {/* Small Tractor / Equipment */}
            <g transform="translate(70, 115)">
              <rect x="15" y="5" width="20" height="15" fill="#D32F2F" />
              <rect x="5" y="15" width="15" height="10" fill="#D32F2F" />
              <circle cx="10" cy="25" r="6" fill="#212121" />
              <circle cx="28" cy="22" r="9" fill="#212121" />
              <rect x="18" y="0" width="12" height="10" fill="#1A252C" opacity="0.8" />
            </g>
          </g>

          {/* City Ground Base (Concrete / Pavement) */}
          <path d="M 1150 790 L 2000 810 L 2000 1100 L 1150 1100 Z" fill="url(#cityGroundGrad)" />
          <path d="M 1250 830 L 2000 850" stroke="#B3A284" strokeWidth="2" strokeDasharray="10 5" opacity="0.6" />

          {/* Distant Realistic City (Background) */}
          <g transform="translate(1300, 500)" opacity="0.9">
            <g fill="url(#cityGradBack)">
              <rect x="20" y="70" width="60" height="180" />
              <polygon points="20,70 50,40 80,70" />
              <rect x="90" y="40" width="80" height="210" />
              <rect x="110" y="10" width="40" height="30" />
              <line x1="130" y1="10" x2="130" y2="-20" stroke="url(#cityGradBack)" strokeWidth="2" />
              <rect x="180" y="90" width="70" height="160" />
              <rect x="260" y="20" width="90" height="230" />
              <polygon points="260,20 305,-10 350,20" />
              <rect x="360" y="80" width="80" height="170" />
              <rect x="450" y="50" width="100" height="200" />
              <rect x="470" y="20" width="60" height="30" />
            </g>
            <rect x="20" y="70" width="60" height="180" fill="url(#windows1)" />
            <rect x="90" y="40" width="80" height="210" fill="url(#windows2)" />
            <rect x="260" y="20" width="90" height="230" fill="url(#windows3)" />
            <rect x="450" y="50" width="100" height="200" fill="url(#windows1)" />
          </g>

          {/* Foreground Ground beneath road to prevent floating */}
          <path d="M 0 700 C 200 710, 400 780, 800 780 C 1100 780, 1300 780, 1450 780 L 1450 1100 L 0 1100 Z" fill="#E6DFD3" />

          {/* Winding Road (Extended to disappear fully behind solid city wall) */}
          {/* Base Road */}
          <path d="M 0 690 C 200 700, 400 770, 800 770 C 1100 770, 1300 770, 1450 770 L 1450 790 C 1300 790, 1100 790, 800 790 C 400 790, 200 710, 0 710 Z" fill="url(#roadGrad)" />
          {/* Dashed Centerline */}
          <path d="M 0 700 C 200 705, 400 780, 800 780 C 1100 780, 1300 780, 1450 780" stroke="#D4AF37" strokeWidth="2" strokeDasharray="10 10" fill="none" opacity="0.8" />
          
          {/* Road Guardrails */}
          <path d="M 0 685 C 200 695, 400 765, 800 765 C 1100 765, 1300 765, 1450 765" fill="none" stroke="#B0BEC5" strokeWidth="4" opacity="0.8" />
          <path d="M 0 688 C 200 698, 400 768, 800 768 C 1100 768, 1300 768, 1450 768" fill="none" stroke="#78909C" strokeWidth="1" opacity="0.5" />
          <path d="M 0 715 C 200 715, 400 795, 800 795 C 1100 795, 1300 795, 1450 795" fill="none" stroke="#B0BEC5" strokeWidth="4" opacity="0.5" />

          {/* Streetlights */}
          {[
            { x: 100, y: 692, scale: 0.7 },
            { x: 350, y: 720, scale: 0.8 },
            { x: 600, y: 760, scale: 0.9 },
            { x: 900, y: 765, scale: 0.95 },
            { x: 1200, y: 768, scale: 1 },
            { x: 1400, y: 769, scale: 1 },
          ].map((pos, i) => (
            <g key={`light-${i}`} transform={`translate(${pos.x}, ${pos.y}) scale(${pos.scale})`}>
              <line x1="0" y1="0" x2="0" y2="-60" stroke="#555" strokeWidth="3" />
              <path d="M 0 -60 Q 15 -60 25 -50" fill="none" stroke="#555" strokeWidth="2" />
              <circle cx="25" cy="-50" r="3" fill="#FFF9C4" />
              <circle cx="25" cy="-50" r="8" fill="#FFF9C4" opacity="0.3" filter="blur(2px)" />
              <polygon points="23,-52 27,-52 29,-48 21,-48" fill="#333" />
            </g>
          ))}

          {/* Secondary Truck (Smaller/Slower) - Drives on offset-path */}
          <g className="anim-truck-2" filter="url(#dropShadow)">
            <g transform="scale(0.55) translate(-110, -90)">
              {/* Trailer */}
              <rect x="0" y="0" width="220" height="90" rx="4" fill="#E6E6E6" />
              <rect x="10" y="10" width="200" height="15" fill="#D9D9D9" />
              <rect x="0" y="75" width="220" height="5" fill="#2196F3" />
              {/* Cab */}
              <path d="M 225 10 L 270 10 Q 280 10 285 30 L 295 50 L 305 50 Q 310 50 310 55 L 310 90 L 225 90 Z" fill="#0A3D30" />
              <rect x="235" y="20" width="30" height="25" rx="3" fill="#87CEEB" opacity="0.6" />
              {/* Wheels */}
              <g transform="translate(40, 90)"><circle cx="0" cy="0" r="14" fill="#222" /><circle cx="0" cy="0" r="4" fill="#444" className="anim-wheel-slow" /></g>
              <g transform="translate(190, 90)"><circle cx="0" cy="0" r="14" fill="#222" /><circle cx="0" cy="0" r="4" fill="#444" className="anim-wheel-slow" /></g>
              <g transform="translate(285, 90)"><circle cx="0" cy="0" r="14" fill="#222" /><circle cx="0" cy="0" r="4" fill="#444" className="anim-wheel-slow" /></g>
            </g>
          </g>

          {/* Primary Biskore Truck - Drives on offset-path */}
          <g className="anim-truck" filter="url(#dropShadow)">
            <g transform="scale(0.7) translate(-155, -90)">
              {/* Trailer */}
              <rect x="0" y="0" width="220" height="90" rx="4" fill="url(#truckTrailerGrad)" />
              <rect x="10" y="10" width="200" height="15" fill="#F5F5F5" />
              <rect x="10" y="35" width="200" height="15" fill="#F5F5F5" />
              <rect x="10" y="60" width="200" height="15" fill="#F5F5F5" />
              <rect x="0" y="75" width="220" height="5" fill="#FFB71D" />
              <text x="110" y="55" fontFamily="Arial" fontWeight="bold" fontSize="32" fill="#062C22" textAnchor="middle" opacity="0.9" letterSpacing="2">BISKORE</text>
              {/* Cab */}
              <path d="M 225 10 L 270 10 Q 280 10 285 30 L 295 50 L 305 50 Q 310 50 310 55 L 310 90 L 225 90 Z" fill="url(#truckCabGrad)" />
              <rect x="235" y="20" width="30" height="25" rx="3" fill="#87CEEB" opacity="0.6" />
              <rect x="270" y="20" width="15" height="25" rx="2" fill="#87CEEB" opacity="0.6" transform="skewX(-20)" />
              <rect x="225" y="75" width="85" height="5" fill="#FFB71D" />
              {/* Wheels */}
              {[40, 80, 190, 250, 285].map((cx, i) => (
                <g key={i} transform={`translate(${cx}, 90)`}>
                  <circle cx="0" cy="0" r="14" fill="#222" />
                  <circle cx="0" cy="0" r="8" fill="#999" />
                  <circle cx="0" cy="0" r="4" fill="#444" className="anim-wheel" />
                </g>
              ))}
            </g>
          </g>

          {/* Distant Realistic City (Foreground) */}
          <g transform="translate(1300, 500)">
            <g fill="url(#cityGradFront)" transform="translate(-50, 40)">
              <rect x="0" y="80" width="92" height="170" />
              <rect x="100" y="30" width="72" height="220" />
              <line x1="135" y1="30" x2="135" y2="-10" stroke="url(#cityGradFront)" strokeWidth="3" />
              <rect x="180" y="100" width="102" height="150" />
              <rect x="290" y="10" width="82" height="240" />
              <polygon points="290,10 331,-20 372,10" />
              <rect x="380" y="60" width="112" height="190" />
              <rect x="500" y="90" width="72" height="160" />
            </g>
            <g transform="translate(-50, 40)">
              <rect x="0" y="80" width="92" height="170" fill="url(#windows2)" />
              <rect x="100" y="30" width="72" height="220" fill="url(#windows1)" />
              <rect x="290" y="10" width="82" height="240" fill="url(#windows3)" />
              <rect x="380" y="60" width="112" height="190" fill="url(#windows2)" />
            </g>
          </g>

          {/* Realistic Port/Logistics Hub Foreground (Right) */}
          <g transform="translate(1400, 720)">
            {/* Concrete Dock / Cargo Base */}
            <g opacity="0.95">
              <path d="M 20 90 L 320 90 L 350 120 L -10 120 Z" fill="#9E9E9E" />
              <path d="M 20 90 L 320 90" stroke="#757575" strokeWidth="3" />
              <path d="M -10 120 L 350 120 L 350 130 L -10 130 Z" fill="#757575" />
              {/* Painted safety lines on the dock */}
              <line x1="30" y1="95" x2="310" y2="95" stroke="#FFC107" strokeWidth="2" strokeDasharray="15 10" />
            </g>

            {/* Ocean / Water */}
            <g opacity="0.8">
              <path d="M 350 120 L 600 120 L 600 350 L 0 350 Z" fill="#4FC3F7" />
              <path d="M 350 130 L 600 130 L 600 350 L 0 350 Z" fill="#29B6F6" opacity="0.8" />
              <path d="M 370 145 Q 385 140 400 145 T 430 145" fill="none" stroke="#E1F5FE" strokeWidth="2" opacity="0.5" />
              <path d="M 450 170 Q 465 165 480 170 T 510 170" fill="none" stroke="#E1F5FE" strokeWidth="2" opacity="0.5" />
            </g>

            {/* Cargo Ship */}
            <g transform="translate(370, 110)">
              {/* Ship Hull */}
              <path d="M 0 0 L 150 0 L 170 30 L -20 30 Z" fill="#B71C1C" />
              <path d="M 0 0 L 150 0 L 145 -40 L -15 -40 Z" fill="#263238" />
              {/* Ship Cabin */}
              <rect x="110" y="-80" width="40" height="40" fill="#ECEFF1" />
              <rect x="115" y="-100" width="25" height="20" fill="#CFD8DC" />
              <rect x="122" y="-120" width="8" height="20" fill="#D32F2F" /> {/* Smokestack */}
              <line x1="126" y1="-125" x2="126" y2="-120" stroke="#555" strokeWidth="3" opacity="0.6" />
              {/* Ship Windows */}
              <rect x="115" y="-70" width="6" height="6" fill="#81D4FA" />
              <rect x="127" y="-70" width="6" height="6" fill="#81D4FA" />
              <rect x="139" y="-70" width="6" height="6" fill="#81D4FA" />
              {/* Cargo on Ship */}
              <rect x="-5" y="-60" width="30" height="20" fill="#2C5A4C" />
              <rect x="30" y="-60" width="30" height="20" fill="#D2AC63" />
              <rect x="65" y="-60" width="30" height="20" fill="#738C9B" />
              <rect x="-5" y="-80" width="30" height="20" fill="#A56A5B" />
              <rect x="30" y="-80" width="30" height="20" fill="#2C5A4C" />
              <rect x="65" y="-80" width="30" height="20" fill="#194437" />
              <rect x="10" y="-100" width="30" height="20" fill="#526977" />
            </g>

            {/* Detailed Gantry Crane (Truss Structure) */}
            <g fill="#4A4A4A" stroke="#333" strokeWidth="1">
              {/* Main Vertical Pillar */}
              <rect x="250" y="-80" width="16" height="170" fill="#E67E22" />
              {/* Diagonal bracing on pillar */}
              {[...Array(8)].map((_, i) => (
                <line key={`brace-v-${i}`} x1="250" y1={-80 + i * 20} x2="266" y2={-60 + i * 20} stroke="#D35400" strokeWidth="2" />
              ))}
              {[...Array(8)].map((_, i) => (
                <line key={`brace-v2-${i}`} x1="266" y1={-80 + i * 20} x2="250" y2={-60 + i * 20} stroke="#D35400" strokeWidth="2" />
              ))}
              
              {/* Main Horizontal Boom */}
              <rect x="80" y="-80" width="186" height="14" fill="#E67E22" />
              {/* Diagonal bracing on boom */}
              {[...Array(12)].map((_, i) => (
                <line key={`brace-h-${i}`} x1={80 + i * 15} y1="-80" x2={95 + i * 15} y2="-66" stroke="#D35400" strokeWidth="2" />
              ))}
              {[...Array(12)].map((_, i) => (
                <line key={`brace-h2-${i}`} x1={95 + i * 15} y1="-80" x2={80 + i * 15} y2="-66" stroke="#D35400" strokeWidth="2" />
              ))}

              {/* Crane cab and hoist */}
              <rect x="150" y="-66" width="24" height="15" fill="#2C3E50" />
              <rect x="154" y="-62" width="16" height="8" fill="#87CEEB" opacity="0.6" />
              
              {/* Hoist cables */}
              <line x1="156" y1="-51" x2="156" y2="30" stroke="#222" strokeWidth="2" />
              <line x1="168" y1="-51" x2="168" y2="30" stroke="#222" strokeWidth="2" />
              
              {/* Spreader (lifting frame) */}
              <rect x="145" y="27" width="34" height="4" fill="#F1C40F" />
            </g>

            {/* Realistic Shipping Containers */}
            {/* Helper function to draw a detailed container */}
            {[
              { x: 50, y: 60, color: '#2C5A4C', dark: '#194437' },  // Muted Brand Green
              { x: 135, y: 60, color: '#D2AC63', dark: '#B58E45' }, // Muted Warm Gold
              { x: 80, y: 30, color: '#738C9B', dark: '#526977' },  // Dusty Blue
              { x: 165, y: 30, color: '#A56A5B', dark: '#874C3D' }  // Muted Terracotta/Red
            ].map((c, idx) => (
              <g key={`container-${idx}`} transform={`translate(${c.x}, ${c.y})`}>
                {/* Main box */}
                <rect x="0" y="0" width="80" height="30" fill={c.color} />
                {/* Corrugated ribbing */}
                {[...Array(15)].map((_, i) => (
                  <line key={`rib-${i}`} x1={4 + i * 5} y1="0" x2={4 + i * 5} y2="30" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
                ))}
                {/* Edge highlights/shadows for 3D effect */}
                <rect x="0" y="0" width="80" height="2" fill="rgba(255,255,255,0.2)" />
                <rect x="0" y="28" width="80" height="2" fill="rgba(0,0,0,0.2)" />
                <rect x="0" y="0" width="2" height="30" fill="rgba(255,255,255,0.1)" />
                <rect x="78" y="0" width="2" height="30" fill="rgba(0,0,0,0.2)" />
                
                {/* Optional: Container doors on the right edge */}
                {idx % 2 === 1 && (
                  <g transform="translate(68, 0)">
                    <rect x="0" y="0" width="12" height="30" fill={c.dark} />
                    <line x1="6" y1="0" x2="6" y2="30" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
                    <rect x="2" y="10" width="2" height="10" fill="#999" />
                    <rect x="8" y="10" width="2" height="10" fill="#999" />
                  </g>
                )}
                {/* Optional: Decal/Logo */}
                {idx % 2 === 0 && (
                  <rect x="8" y="6" width="16" height="6" fill="rgba(255,255,255,0.8)" rx="1" />
                )}
              </g>
            ))}
          </g>

        </g>
      </svg>
    </div>
  );
}
