'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { RevealLines } from '@/components/ui/RevealText';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { LEADERSHIP, SITE } from '@/lib/constants';

export default function LeadershipCta() {
  const [activeFounder, setActiveFounder] = useState(0);

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '8rem',
        paddingBottom: '8rem',
        overflow: 'hidden',
      }}
      className="hero-overlap-section leadership-section"
    >

      <div className="container">
        <div className="leadership-grid">
          {/* LEFT — Founder list */ }
          <div className="leadership-col-left">
            <RevealLines
              as="h2"
              lines={['Founded by', 'Biju & Sujith.']}
              duration={1000}
              stagger={130}
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#0D0D0D',
                marginBottom: '1rem',
              }}
            />

            <div
              style={{ marginBottom: '3.5rem' }}
              className="sr sr-d3"
              ref={(el) => {
                if (!el) return;
                new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('is-visible'); } }, { threshold: 0.1 }).observe(el);
              }}
            >
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.75, maxWidth: 460, fontWeight: 300 }}>
                What began as a farm-to-market operation in Kasargod has grown into an integrated group spanning
                five sectors, two consumer brands, and a pan-India logistics fleet.
              </p>
            </div>

            {/* Founder rows — hover activates image cross-fade */}
            <div className="mobile-hide" style={{ display: 'flex', flexDirection: 'column' }}>
              {LEADERSHIP.map((leader, i) => (
                <div
                  key={leader.name}
                  onMouseEnter={() => setActiveFounder(i)}
                  style={{
                    padding: '1.75rem 0',
                    borderTop: '1px solid rgba(0,0,0,0.07)',
                    cursor: 'default',
                    transition: 'color 300ms ease',
                    color: activeFounder === i ? '#0D0D0D' : 'rgba(0,0,0,0.25)',
                  }}
                  className="sr sr-d2"
                  ref={(el) => {
                    if (!el) return;
                    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('is-visible'); } }, { threshold: 0.1 });
                    obs.observe(el);
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span
                      style={{
                        fontSize: 'clamp(1.4rem, 3vw, 2.5rem)',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                        transition: 'color 300ms ease',
                      }}
                    >
                      {leader.name}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: activeFounder === i ? '#B8860B' : 'rgba(0,0,0,0.2)',
                        transition: 'color 300ms ease',
                        fontWeight: 600,
                      }}
                    >
                      {leader.role}
                    </span>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
            </div>

            {/* Contact + CTA */}
            <div
              style={{ marginTop: '3rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}
              className="sr sr-d4"
              ref={(el) => {
                if (!el) return;
                new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('is-visible'); } }, { threshold: 0.1 }).observe(el);
              }}
            >
              <a
                href={`mailto:${SITE.email}`}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#0D0D0D',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  borderBottom: '1px solid rgba(0,0,0,0.15)',
                  paddingBottom: '2px',
                }}
              >
                {SITE.email}
              </a>
              <Link href="/contact" className="btn-primary" style={{ fontSize: '0.75rem' }}>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* RIGHT — Sticky cross-fade images */}
          <div
            className="leadership-col-right mobile-hide"
            style={{
              position: 'sticky',
              top: '15vh',
              height: '70vh',
              maxHeight: 600,
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              {LEADERSHIP.map((leader, i) => (
                <div
                  key={leader.name}
                  className={`xfade-panel${activeFounder === i ? ' is-active' : ''}`}
                  style={
                    i > 0
                      ? {
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(135deg, #062C22, #0A3D30)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }
                      : {
                          background: 'linear-gradient(135deg, #062C22, #0A3D30)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          height: '100%',
                        }
                  }
                >
                  {'image' in leader && leader.image ? (
                    <div className="hover-founder-image" style={{ width: '100%', height: '100%', position: 'relative' }}>
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        style={{ 
                          objectFit: 'cover', 
                          objectPosition: leader.name === 'Sujith' ? 'center 30%' : (leader.name === 'Biju' ? 'center top' : 'center top')
                        }}
                        sizes="40vw"
                      />
                    </div>
                  ) : (
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: 120,
                        height: 120,
                        background: 'rgba(255,183,29,0.15)',
                        border: '1px solid rgba(255,183,29,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                      }}>
                        <span style={{ fontSize: '3rem', fontWeight: 900, color: '#FFB71D' }}>
                          {leader.initial}
                        </span>
                      </div>
                      <p style={{ color: '#FFB71D', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                        {leader.role}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
