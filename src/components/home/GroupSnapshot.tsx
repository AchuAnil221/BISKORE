'use client';

import Link from 'next/link';

import RevealText, { RevealLines } from '@/components/ui/RevealText';
import { GROUP_SNAPSHOT } from '@/lib/constants';

export default function GroupSnapshot() {

  return (
    <section
      style={{
        position: 'relative',
      }}
      className="hero-overlap-section section"
    >
      <div className="container">

        {/* ── Row 1: Heading (left) + Body text (right) ── */}
        <div className="snapshot-grid" style={{ marginBottom: 'var(--gap-xl)' }}>
          {/* LEFT — headline */}
          <div className="snapshot-col-left">
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
          </div>

          {/* RIGHT — body text + CTA */}
          <div className="snapshot-col-right">
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
              style={{ marginTop: 'var(--gap-md)' }}
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
      {/* ── Row 2: Full-width 5-stat bar ── */}
      <div
        className="sr sr-d3 snapshot-stats-grid"
        ref={(el) => {
          if (!el) return;
          const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('is-visible'); obs.unobserve(el); } }, { threshold: 0.1 });
          obs.observe(el);
        }}
      >
        {GROUP_SNAPSHOT.stats.map(({ value, label }) => (
          <div
            key={label}
            style={{
              padding: '2rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <span style={{
              fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)',
              fontWeight: 700,
              color: '#D4AF37',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}>
              {value}
            </span>
            <span style={{
              fontSize: '0.65rem',
              color: '#888',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

