'use client';

import Link from 'next/link';

import RevealText, { RevealLines } from '@/components/ui/RevealText';
import { GROUP_SNAPSHOT } from '@/lib/constants';

export default function GroupSnapshot() {


  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '8rem',
        paddingBottom: '8rem',
        overflow: 'hidden',
      }}
      className="hero-overlap-section"
    >


      <div className="container">

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
          }}
        >
          {/* LEFT — sticky headline */}
          <div
            style={{
              gridColumn: '1 / 7',
              paddingBottom: '2rem',
            }}
          >
            <RevealLines
              as="h2"
              lines={GROUP_SNAPSHOT.heading.split('. ').map((s, i, arr) => i === arr.length - 1 ? s : s + '.')}
              duration={950}
              stagger={120}
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 300,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                color: '#0D0D0D',
              }}
            />

            {/* Stats — slide in below heading */}
            <div
              style={{ marginTop: '5.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
              className="sr sr-d3"
              ref={(el) => {
                if (!el) return;
                const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('is-visible'); obs.unobserve(el); } }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
                obs.observe(el);
              }}
            >
              {GROUP_SNAPSHOT.stats.map(({ value, label }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', fontWeight: 800, color: '#FFB71D', lineHeight: 1, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
                    {value}
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — scrolling content */}
          <div
            style={{
              gridColumn: '8 / 13',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Body text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <RevealText
                as="p"
                delay={100}
                style={{
                  fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                  lineHeight: 1.85,
                  color: '#555',
                  fontWeight: 300,
                }}
              >
                {GROUP_SNAPSHOT.description}
              </RevealText>

              <RevealText
                as="p"
                delay={250}
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  color: '#777',
                }}
              >
                {GROUP_SNAPSHOT.detail ||
                  'Every vertical is built on the same principle: direct sourcing, consistent quality, and long-term partnership with farmers, suppliers, and clients alike.'}
              </RevealText>
            </div>

            {/* CTA link */}
            <div
              className="sr sr-d4"
                ref={(el) => {
                  if (!el) return;
                  const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('is-visible'); obs.unobserve(el); } }, { threshold: 0.1 });
                  obs.observe(el);
                }}
              >
                <Link
                  href="/about"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#0D0D0D',
                    borderBottom: '1px solid #0D0D0D',
                    paddingBottom: '2px',
                    transition: 'color 300ms, border-color 300ms',
                  }}
                  className="hover-gold"
                >
                  Our Story
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
