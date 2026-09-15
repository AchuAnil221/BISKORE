'use client';
import { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import RevealText from '@/components/ui/RevealText';
import { VISION, MISSION_PER_SECTOR, FUTURE_OUTLOOK } from '@/lib/constants';

/* Per-card brand palette — lighter defaults, darker on hover */
const CARD_COLORS = [
  { bg: '#5BA87A', hover: '#4A9769' },  // Fresh Produce
  { bg: '#D4AA28', hover: '#C49A18' },  // Trade
  { bg: '#6E6E68', hover: '#5E5E58' },  // Koblaq
  { bg: '#C49030', hover: '#B48020' },  // Tastecore
  { bg: '#1A7058', hover: '#0A6048' },  // Logistics
];

/* Shared animation style string injected once at module level */
const MARCH_KEYFRAMES = `
  @keyframes svgMarchAnim {
    from { stroke-dashoffset: 300; }
    to   { stroke-dashoffset: 0; }
  }
`;

export default function VisionSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="hero-overlap-section vision-section" style={{ paddingTop: '4rem', paddingBottom: '8rem', position: 'relative', overflow: 'hidden' }}>
      {/* Inject keyframe once globally */}
      <style>{MARCH_KEYFRAMES}</style>

      <div className="container" style={{ position: 'relative' }}>

        {/* Vision */}
        <ScrollReveal>
          <div style={{ marginBottom: '5rem' }}>
            <RevealText
              as="h2"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#0D0D0D',
                marginTop: '1.5rem',
              }}
            >
              The Path Forward
            </RevealText>
            <p style={{
              marginTop: '2rem',
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              lineHeight: 1.85,
              fontWeight: 400,
              color: '#444',
              borderLeft: '3px solid #FFB71D',
              paddingLeft: '1.75rem',
            }}>
              {VISION}
            </p>
          </div>
        </ScrollReveal>

        {/* Mission per sector — Bento Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6"
          style={{ gap: '1.25rem', marginBottom: '5rem' }}
        >
          {MISSION_PER_SECTOR.map((item, i) => {
            const isHovered = hoveredCard === i;
            const { bg, hover } = CARD_COLORS[i] ?? CARD_COLORS[0];

            /* Animated path style — applied directly to each SVG child element */
            const pathStyle: React.CSSProperties = isHovered
              ? {
                  strokeDasharray: '7 3',
                  strokeDashoffset: 300,
                  animation: 'svgMarchAnim 45s linear infinite',
                }
              : {
                  strokeDasharray: undefined,
                  strokeDashoffset: undefined,
                  animation: 'none',
                };

            return (
              <ScrollReveal
                key={item.sector}
                delay={(Math.min((i % 3) * 100 + 100, 500)) as 100 | 200 | 300 | 400 | 500}
                className={i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}
              >
                <div
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    position: 'relative',
                    padding: '2rem 2rem 0 2rem',
                    minHeight: '290px',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '20px',
                    background: isHovered ? hover : bg,
                    boxShadow: isHovered
                      ? '0 30px 80px rgba(0,0,0,0.3)'
                      : '0 6px 24px rgba(0,0,0,0.12)',
                    transform: isHovered ? 'translateY(-10px) scale(1.015)' : 'translateY(0) scale(1)',
                    cursor: 'pointer',
                    transition: 'background 700ms ease, box-shadow 700ms ease, transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Text */}
                  <div style={{ position: 'relative', zIndex: 2, flex: '0 0 auto' }}>
                    <p style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: isHovered ? 'rgba(255,220,120,1)' : 'rgba(255,255,255,0.75)',
                      marginBottom: '0.75rem',
                      transition: 'color 400ms',
                    }}>
                      {item.sector}
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: 1.65,
                      color: 'rgba(255,255,255,0.9)',
                      maxWidth: '30ch',
                    }}>
                      {item.mission}
                    </p>
                  </div>

                  {/* SVG — absolutely pinned bottom-right */}
                  <div
                    style={{
                      position: 'absolute',
                      right: '-10px',
                      bottom: '-10px',
                      pointerEvents: 'none',
                      color: isHovered ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.25)',
                      transform: isHovered ? 'translateY(-6px) scale(1.05) rotate(3deg)' : 'translateY(0) scale(1) rotate(0deg)',
                      transformOrigin: 'bottom right',
                      transition: 'color 600ms ease, transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.9">

                      {item.sector === 'Fresh Produce' && (
                        <g strokeLinejoin="round">
                          {/* Leaf outline with midrib */}
                          <path d="M50,90 Q15,60 20,25 Q35,5 50,10 Q65,5 80,25 Q85,60 50,90 Z" style={pathStyle} />
                          {/* Midrib */}
                          <path d="M50,90 L50,10" style={pathStyle} />
                          {/* Lateral veins left */}
                          <path d="M50,75 Q35,68 28,62" strokeWidth="0.5" style={pathStyle} />
                          <path d="M50,62 Q33,53 25,45" strokeWidth="0.5" style={pathStyle} />
                          <path d="M50,49 Q34,40 28,32" strokeWidth="0.5" style={pathStyle} />
                          <path d="M50,37 Q37,30 34,22" strokeWidth="0.5" style={pathStyle} />
                          {/* Lateral veins right */}
                          <path d="M50,75 Q65,68 72,62" strokeWidth="0.5" style={pathStyle} />
                          <path d="M50,62 Q67,53 75,45" strokeWidth="0.5" style={pathStyle} />
                          <path d="M50,49 Q66,40 72,32" strokeWidth="0.5" style={pathStyle} />
                          <path d="M50,37 Q63,30 66,22" strokeWidth="0.5" style={pathStyle} />
                          {/* Stem */}
                          <path d="M50,90 Q48,95 45,98" style={pathStyle} />
                          {/* Small sprout */}
                          <path d="M47,96 Q40,90 38,84" strokeWidth="0.5" style={pathStyle} />
                        </g>
                      )}

                      {item.sector === 'Trade' && (
                        <g>
                          <circle cx="50" cy="50" r="42" style={pathStyle} />
                          <ellipse cx="50" cy="50" rx="42" ry="16" style={pathStyle} />
                          <ellipse cx="50" cy="50" rx="16" ry="42" style={pathStyle} />
                          <ellipse cx="50" cy="50" rx="30" ry="42" style={pathStyle} />
                          <path d="M8,50 L92,50 M50,8 L50,92" strokeWidth="0.4" style={pathStyle} />
                          <circle cx="50" cy="50" r="5" style={pathStyle} />
                          <circle cx="50" cy="8" r="2" fill="currentColor" style={pathStyle} />
                          <circle cx="50" cy="92" r="2" fill="currentColor" style={pathStyle} />
                        </g>
                      )}

                      {item.sector === 'Koblaq' && (
                        <g strokeLinejoin="round">
                          {/* Neckline */}
                          <path d="M40,20 Q50,30 60,20" style={pathStyle} />
                          {/* Shoulders & Sleeves */}
                          <path d="M40,20 L20,25 L15,45 L25,50 L30,40" style={pathStyle} />
                          <path d="M60,20 L80,25 L85,45 L75,50 L70,40" style={pathStyle} />
                          {/* Torso */}
                          <path d="M30,40 L30,85 L70,85 L70,40" style={pathStyle} />
                          {/* Detail line - collar */}
                          <path d="M38,19 Q50,33 62,19" strokeWidth="0.5" style={pathStyle} />
                        </g>
                      )}

                      {item.sector === 'Tastecore' && (
                        <g>
                          {/* Bowl cross-section — wide ellipse top, curved base */}
                          <path d="M15,40 Q15,82 50,85 Q85,82 85,40 Z" style={pathStyle} />
                          {/* Rim ellipse */}
                          <ellipse cx="50" cy="40" rx="35" ry="8" style={pathStyle} />
                          {/* Inner content levels */}
                          <ellipse cx="50" cy="42" rx="25" ry="5" strokeWidth="0.5" style={pathStyle} />
                          <ellipse cx="50" cy="45" rx="14" ry="3" strokeWidth="0.5" style={pathStyle} />
                          {/* Steam wisps */}
                          <path d="M34,30 Q32,22 35,15 Q38,8 36,2" strokeWidth="0.6" style={pathStyle} />
                          <path d="M50,28 Q48,20 50,13 Q52,6 50,0" strokeWidth="0.6" style={pathStyle} />
                          <path d="M66,30 Q68,22 65,15 Q62,8 64,2" strokeWidth="0.6" style={pathStyle} />
                          {/* Base / foot */}
                          <path d="M38,84 Q38,92 50,93 Q62,92 62,84" style={pathStyle} />
                        </g>
                      )}

                      {item.sector === 'Logistics' && (
                        <g strokeLinejoin="round">
                          <path d="M10,70 L30,50 L50,60 L70,40 L90,50" style={pathStyle} />
                          <path d="M10,85 L30,65 L50,75 L70,55 L90,65" strokeWidth="0.5" style={pathStyle} />
                          <path d="M30,30 L50,20 L70,30" style={pathStyle} />
                          <path d="M30,50 L30,30 M70,40 L70,30 M50,60 L50,20" strokeWidth="0.5" style={pathStyle} />
                          <circle cx="30" cy="50" r="2" fill="currentColor" style={pathStyle} />
                          <circle cx="50" cy="60" r="2" fill="currentColor" style={pathStyle} />
                          <circle cx="70" cy="40" r="2" fill="currentColor" style={pathStyle} />
                          <circle cx="10" cy="70" r="2" fill="currentColor" style={pathStyle} />
                          <circle cx="90" cy="50" r="2" fill="currentColor" style={pathStyle} />
                          <circle cx="50" cy="20" r="2" fill="currentColor" style={pathStyle} />
                        </g>
                      )}
                    </svg>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Future Outlook */}
        <ScrollReveal>
          <div style={{ marginBottom: '2.5rem' }}>
            <RevealText
              as="h2"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#0D0D0D',
                marginTop: '1.5rem',
              }}
            >
              Shaping the path ahead
            </RevealText>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '0.75rem' }}>
          {FUTURE_OUTLOOK.map((item, i) => (
            <ScrollReveal
              key={i}
              delay={(Math.min((i % 4) * 100 + 100, 400)) as 100 | 200 | 300 | 400}
              className={i === FUTURE_OUTLOOK.length - 1 && FUTURE_OUTLOOK.length % 2 !== 0 ? 'md:col-span-2' : ''}
            >
              <div
                className="hover-outlook"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '12px',
                  background: '#FFFFFF',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                  transition: 'all 300ms',
                  height: '100%',
                }}
              >
                <span style={{ flexShrink: 0, width: 8, height: 8, background: '#FFB71D', marginTop: '0.4rem', display: 'block', borderRadius: '1px' }} />
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#444' }}>
                  {item}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
