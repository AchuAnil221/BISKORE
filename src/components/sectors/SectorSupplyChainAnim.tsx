'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SectorSupplyChainAnim({ sector }: { sector: any }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // 5 phases: 0-0.2, 0.2-0.4, 0.4-0.6, 0.6-0.8, 0.8-1.0
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // --- Phase 1: Building (0.0 - 0.2) ---
  const bldgOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const bldgScale = useTransform(scrollYProgress, [0, 0.05], [0.8, 1]);
  const product1Y = useTransform(scrollYProgress, [0.05, 0.15], [50, 0]);
  const product1Opacity = useTransform(scrollYProgress, [0.05, 0.1], [0, 1]);

  // --- Phase 2: What We Supply (Packaging) (0.2 - 0.4) ---
  // The product stays visible, box forms around it
  const phase2Opacity = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
  const boxScale = useTransform(scrollYProgress, [0.25, 0.35], [0.5, 1]);
  const boxRotate = useTransform(scrollYProgress, [0.25, 0.35], [-10, 0]);

  // --- Phase 3: Sourcing (Ship + Quality) (0.4 - 0.6) ---
  const phase3Opacity = useTransform(scrollYProgress, [0.4, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
  const shipX = useTransform(scrollYProgress, [0.4, 0.55], [-100, 50]);
  const checkOpacity = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
  const checkScale = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);

  // --- Phase 4: Distribution (Truck) (0.6 - 0.8) ---
  const phase4Opacity = useTransform(scrollYProgress, [0.6, 0.65, 0.75, 0.8], [0, 1, 1, 0]);
  const truckX = useTransform(scrollYProgress, [0.65, 0.75], [-50, 50]);
  const truckBoxY = useTransform(scrollYProgress, [0.6, 0.65], [-50, 0]);

  // --- Phase 5: Reach (Route) (0.8 - 1.0) ---
  const phase5Opacity = useTransform(scrollYProgress, [0.8, 0.85, 0.95, 1], [0, 1, 1, 1]);
  const routeDash = useTransform(scrollYProgress, [0.85, 0.95], [100, 0]); // Dash offset trick
  const endNodeScale = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);

  // Derive active phase index (0 to 4) for text cross-fading
  const activePhase = useTransform(scrollYProgress, (v) => {
    if (v < 0.2) return 0;
    if (v < 0.4) return 1;
    if (v < 0.6) return 2;
    if (v < 0.8) return 3;
    return 4;
  });

  return (
    <section ref={containerRef} style={{ position: 'relative', height: '500vh', background: '#F8F7F4' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', display: 'flex', overflow: 'hidden' }}>
        
        {/* LEFT PANEL: Text Content */}
        <div style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5rem', position: 'relative' }}>
          
          {[0, 1, 2, 3, 4].map((i) => {
            const step = sector.supplyChain?.[i] || {
              step: `0${i + 1}`,
              title: `Phase ${i + 1}`,
              detail: 'Supply chain step description.',
            };
            return (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  opacity: useTransform(activePhase, (v) => (v === i ? 1 : 0)),
                  transition: 'opacity 300ms',
                  pointerEvents: 'none',
                }}
              >

                <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 300, lineHeight: 1.1, color: '#0D0D0D', marginBottom: '1.5rem' }}>
                  {step.title}
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.7, maxWidth: 400 }}>
                  {step.detail}
                </p>
              </motion.div>
            );
          })}

        </div>

        {/* RIGHT PANEL: SVG ANIMATIONS */}
        <div style={{ flex: '1 1 auto', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          <svg width="600" height="600" viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
            
            {/* --- Phase 1: Building --- */}
            <motion.g style={{ opacity: bldgOpacity, scale: bldgScale }} originX={100} originY={100}>
              <rect x="70" y="80" width="60" height="80" fill="#062C22" rx="4" />
              <rect x="50" y="100" width="100" height="60" fill="#0A3D30" rx="4" />
              <rect x="90" y="140" width="20" height="20" fill="#F8F7F4" />
              <rect x="60" y="110" width="10" height="10" fill="#FFB71D" />
              <rect x="80" y="110" width="10" height="10" fill="#FFB71D" />
              <rect x="110" y="110" width="10" height="10" fill="#FFB71D" />
              <rect x="130" y="110" width="10" height="10" fill="#FFB71D" />
            </motion.g>
            
            <motion.g style={{ opacity: product1Opacity, y: product1Y }}>
              {sector.id === 'trade' ? (
                <g>
                  {/* Smartphone / Gadget */}
                  <rect x="142" y="138" width="16" height="24" rx="2" fill="#222" />
                  <rect x="144" y="140" width="12" height="18" fill="#FFB71D" />
                </g>
              ) : sector.id === 'koblaq' ? (
                <g>
                  {/* T-Shirt */}
                  <path d="M 140 142 L 145 138 L 155 138 L 160 142 L 158 148 L 153 145 L 153 160 L 147 160 L 147 145 L 142 148 Z" fill="#E91E63" />
                </g>
              ) : sector.id === 'logistics' ? (
                <g>
                  {/* Pallet / Cargo */}
                  <rect x="140" y="142" width="20" height="16" fill="#8C7342" />
                  <line x1="145" y1="142" x2="145" y2="158" stroke="#5D4037" strokeWidth="1" />
                  <line x1="155" y1="142" x2="155" y2="158" stroke="#5D4037" strokeWidth="1" />
                </g>
              ) : (
                <g>
                  {/* Produce / Food */}
                  <circle cx="150" cy="150" r="12" fill="#FFB71D" />
                  <path d="M150 145 l-5 10 h10 z" fill="#FFF" opacity="0.6" />
                </g>
              )}
            </motion.g>

            {/* --- Phase 2: Packaging --- */}
            <motion.g style={{ opacity: phase2Opacity }}>
              {/* Box framing the product */}
              <motion.g style={{ scale: boxScale, rotate: boxRotate }} originX={150} originY={150}>
                <rect x="130" y="130" width="40" height="40" fill="none" stroke="#062C22" strokeWidth="4" rx="4" />
                <path d="M130 130 l15 -10 h40 l-15 10" fill="#D8D2C4" />
                <path d="M170 130 l15 -10 v40 l-15 10" fill="#C0BAAC" />
              </motion.g>
              {/* Product inside */}
              {sector.id === 'trade' ? (
                <g>
                  <rect x="142" y="138" width="16" height="24" rx="2" fill="#222" />
                  <rect x="144" y="140" width="12" height="18" fill="#FFB71D" />
                </g>
              ) : sector.id === 'koblaq' ? (
                <g>
                  <path d="M 140 142 L 145 138 L 155 138 L 160 142 L 158 148 L 153 145 L 153 160 L 147 160 L 147 145 L 142 148 Z" fill="#E91E63" />
                </g>
              ) : sector.id === 'logistics' ? (
                <g>
                  <rect x="140" y="142" width="20" height="16" fill="#8C7342" />
                  <line x1="145" y1="142" x2="145" y2="158" stroke="#5D4037" strokeWidth="1" />
                  <line x1="155" y1="142" x2="155" y2="158" stroke="#5D4037" strokeWidth="1" />
                </g>
              ) : (
                <g>
                  <circle cx="150" cy="150" r="12" fill="#FFB71D" />
                  <path d="M150 145 l-5 10 h10 z" fill="#FFF" opacity="0.6" />
                </g>
              )}
            </motion.g>

            {/* --- Phase 3: Ship & Quality --- */}
            <motion.g style={{ opacity: phase3Opacity }}>
              {/* Ship moving */}
              <motion.g style={{ x: shipX }}>
                <path d="M40 120 l20 30 h40 l20 -30 Z" fill="#062C22" />
                <rect x="70" y="100" width="20" height="20" fill="#D8D2C4" />
                <rect x="50" y="110" width="20" height="10" fill="#FFB71D" />
                <rect x="90" y="110" width="20" height="10" fill="#FFB71D" />
                {/* Water */}
                <path d="M20 160 Q 60 170 100 160 T 180 160" fill="none" stroke="#5BA87A" strokeWidth="4" />
              </motion.g>
              {/* Quality Checkmark */}
              <motion.g style={{ opacity: checkOpacity, scale: checkScale }} originX={100} originY={70}>
                <circle cx="100" cy="70" r="25" fill="#4CAF50" />
                <path d="M85 70 l10 10 l20 -20" fill="none" stroke="#FFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              </motion.g>
            </motion.g>

            {/* --- Phase 4: Truck --- */}
            <motion.g style={{ opacity: phase4Opacity }}>
              {/* Falling box */}
              <motion.g style={{ y: truckBoxY }}>
                <rect x="90" y="80" width="20" height="20" fill="#FFB71D" rx="2" />
              </motion.g>
              
              {/* Truck moving */}
              <motion.g style={{ x: truckX }}>
                <rect x="40" y="110" width="60" height="40" fill="#062C22" rx="4" />
                <rect x="100" y="125" width="25" height="25" fill="#062C22" rx="4" />
                <rect x="105" y="130" width="15" height="10" fill="#D8D2C4" />
                <circle cx="60" cy="155" r="10" fill="#111" />
                <circle cx="110" cy="155" r="10" fill="#111" />
                {/* Road */}
                <path d="M0 165 h200" fill="none" stroke="#D8D2C4" strokeWidth="4" strokeDasharray="10 10" />
              </motion.g>
            </motion.g>

            {/* --- Phase 5: Route Map --- */}
            <motion.g style={{ opacity: phase5Opacity }}>
              <circle cx="100" cy="160" r="6" fill="#062C22" />
              
              {/* Branching route lines. Dash offset makes them 'draw' in */}
              <motion.path 
                d="M100 160 Q 50 100 30 60" 
                fill="none" stroke="#FFB71D" strokeWidth="4" strokeLinecap="round"
                style={{ strokeDasharray: 100, strokeDashoffset: routeDash }} 
              />
              <motion.path 
                d="M100 160 Q 150 100 170 60" 
                fill="none" stroke="#FFB71D" strokeWidth="4" strokeLinecap="round"
                style={{ strokeDasharray: 100, strokeDashoffset: routeDash }} 
              />
              
              {/* End Nodes */}
              <motion.g style={{ scale: endNodeScale }} originX={30} originY={60}>
                <circle cx="30" cy="60" r="10" fill="#062C22" />
                <path d="M25 60 l4 4 l8 -8" fill="none" stroke="#FFF" strokeWidth="2" />
              </motion.g>
              
              <motion.g style={{ scale: endNodeScale }} originX={170} originY={60}>
                <circle cx="170" cy="60" r="10" fill="#062C22" />
                <path d="M165 60 l4 4 l8 -8" fill="none" stroke="#FFF" strokeWidth="2" />
              </motion.g>
            </motion.g>
            
          </svg>

        </div>
      </div>
    </section>
  );
}
