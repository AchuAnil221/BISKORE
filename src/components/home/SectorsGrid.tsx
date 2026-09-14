'use client';

import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { RevealLines } from '@/components/ui/RevealText';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { SECTORS } from '@/lib/constants';

export default function SectorsGrid() {
  const [activeSector, setActiveSector] = useState(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-spy: activate whichever row center is closest to 45% of viewport
  useEffect(() => {
    const handleScroll = () => {
      const target = window.innerHeight * 0.45;
      let best = 0;
      let bestDist = Infinity;
      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        const rect = row.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - target);
        if (dist < bestDist) { bestDist = dist; best = i; }
      });
      setActiveSector((prev) => prev !== best ? best : prev);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '8rem',
        paddingBottom: '8rem',
      }}
      className="hero-overlap-section"
    >
      <div className="container">
        {/* Heading & Top CTA */}
        <div style={{ marginBottom: '4rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem' }}>
          <RevealLines
            as="h2"
            lines={['Five sectors.', 'One accountable group.']}
            duration={1000}
            stagger={140}
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#0D0D0D',
              flex: '1 1 auto',
            }}
          />
          <ScrollReveal delay={200} className="mb-2 md:mb-3">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem' }}>
              <p style={{ fontSize: '0.85rem', color: '#888', margin: 0 }}>
                Each sector operates under one quality standard.
              </p>
              <Link href="/sectors" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: '#0D0D0D',
                borderBottom: '1px solid #0D0D0D', paddingBottom: '2px',
              }} className="hover-gold">
                All Sectors
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Two-column: LEFT tall scrolling list, RIGHT sticky image panel */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          {/* LEFT — each row is ~40vh tall so page scrolls through each sector */}
          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '25vh', paddingBottom: '35vh' }}>
            {SECTORS.map((sector, i) => (
              <div
                key={sector.id}
                ref={(el) => { rowRefs.current[i] = el; }}
                style={{
                  minHeight: '40vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'relative',
                  paddingLeft: '2rem',
                }}
              >
                {/* Gold left accent bar — grows on active */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 3,
                  height: activeSector === i ? '40%' : '0%',
                  background: 'linear-gradient(180deg, #FFB71D 60%, transparent 100%)',
                  transition: 'height 500ms cubic-bezier(0.16, 1, 0.3, 1)',
                }} />

                {/* Top divider */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: 1,
                  background: 'rgba(0,0,0,0.07)',
                }} />


                <h3 style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  color: activeSector === i ? '#0D0D0D' : '#D0D0D0',
                  transition: 'color 500ms ease',
                  marginBottom: '1.25rem',
                }}>
                  {sector.name}
                </h3>

                {/* Tagline + link expand on active using CSS Grid for smooth auto-height animation */}
                <div style={{
                  display: 'grid',
                  gridTemplateRows: activeSector === i ? '1fr' : '0fr',
                  transition: 'grid-template-rows 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{
                      opacity: activeSector === i ? 1 : 0,
                      transform: activeSector === i ? 'translateY(0)' : 'translateY(10px)',
                      transition: 'opacity 400ms ease 100ms, transform 400ms ease 100ms',
                    }}>
                      <p style={{
                        fontSize: '0.95rem',
                        color: '#555',
                        lineHeight: 1.7,
                        maxWidth: 400,
                        fontWeight: 400,
                        marginBottom: '1.25rem',
                      }}>
                        {sector.description}
                      </p>
                      <Link
                        href={sector.href}
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#B8860B',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          marginBottom: '1rem',
                        }}
                      >
                        Explore sector
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Bottom border */}
            <div style={{ height: 1, background: 'rgba(0,0,0,0.07)' }} />
          </div>

          {/* RIGHT — sticky image panel, vertically centered */}
          <div
            style={{
              position: 'sticky',
              top: 0,
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              height: '76vh',
              maxHeight: 640,
              overflow: 'hidden',
            }}>
              {/* Cross-fade images */}
              {SECTORS.map((sector: any, i: number) => (
                <div
                  key={sector.id}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: activeSector === i ? 1 : 0,
                    transition: 'opacity 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Ken Burns zoom */}
                  <div style={{
                    position: 'absolute',
                    inset: '-5%',
                    transform: activeSector === i ? 'scale(1.06)' : 'scale(1)',
                    transition: activeSector === i
                      ? 'transform 10s ease-out'
                      : 'transform 800ms ease',
                  }}>
                    {sector.image ? (
                      <img
                        src={sector.image}
                        alt={sector.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        background: sector.bgColor || '#F2EFE9',
                      }} />
                    )}
                  </div>

                  {/* Bottom gradient for text */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                    pointerEvents: 'none',
                  }} />

                  {/* Sector label */}
                  <div style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '2rem',
                    opacity: activeSector === i ? 1 : 0,
                    transform: activeSector === i ? 'translateY(0)' : 'translateY(12px)',
                    transition: 'opacity 500ms ease 150ms, transform 500ms ease 150ms',
                  }}>
                    <p style={{
                      fontSize: '1.25rem',
                      fontWeight: 500,
                      color: '#FFFFFF',
                      letterSpacing: '-0.02em',
                    }}>
                      {sector.name}
                    </p>
                    <p style={{
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.85)',
                      marginTop: '0.4rem',
                      maxWidth: '90%',
                      lineHeight: 1.5,
                    }}>
                      {sector.tagline}
                    </p>
                  </div>
                </div>
              ))}

              {/* Progress dots on right edge */}
              <div style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                zIndex: 10,
              }}>
                {SECTORS.map((_, i) => (
                  <div key={i} style={{
                    width: 4,
                    height: activeSector === i ? 28 : 4,
                    borderRadius: 99,
                    background: activeSector === i
                      ? '#FFB71D'
                      : 'rgba(255,255,255,0.4)',
                    transition: 'height 400ms cubic-bezier(0.16,1,0.3,1), background 400ms ease',
                  }} />
                ))}
              </div>
            </div>


          </div>
        </div>

      </div>
    </section>
  );
}
