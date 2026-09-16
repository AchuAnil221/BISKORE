'use client';

import { useRef, useEffect } from 'react';
import RevealText from '@/components/ui/RevealText';
import { RevealLines } from '@/components/ui/RevealText';
import { HOW_WE_WORK } from '@/lib/constants';

export default function HowWeWork() {

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
      className="hero-overlap-section section howwework-section"
    >
      {/* ── HOW WE WORK STEPS ── */}
      <div style={{ paddingBottom: 0 }}>
        <div className="container">
          {/* Heading */}
          <div style={{ marginBottom: 'var(--gap-xl)' }}>
            <RevealLines
              as="h2"
              lines={['How we operate.']}
              duration={1000}
              stagger={130}
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#0D0D0D',
              }}
            />
          </div>

          {/* Steps — staggered list */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {HOW_WE_WORK.steps.map((step, i) => (
              <div
                key={step.title}
                className="sr sr-d1"
                ref={(el) => {
                  if (!el) return;
                  new IntersectionObserver(
                    ([e]) => { if (e.isIntersecting) { el.classList.add('is-visible'); } },
                    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
                  ).observe(el);
                }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: '2.5rem',
                  padding: '2.25rem 0',
                  borderTop: '1px solid rgba(0,0,0,0.08)',
                  alignItems: 'start',
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {/* Step number */}
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,183,29,0.8)',
                    paddingTop: '0.2rem',
                    minWidth: 28,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      fontSize: 'clamp(1.15rem, 2vw, 1.6rem)',
                      fontWeight: 400,
                      color: '#0D0D0D',
                      marginBottom: 'var(--gap-xs)',
                      lineHeight: 1.2,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#666',
                      lineHeight: 1.7,
                      maxWidth: 520,
                    }}
                  >
                    {step.detail}
                  </p>
                </div>

                {/* Icon */}
                <span style={{ color: '#0D0D0D', opacity: 0.8, paddingTop: '0.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {step.icon === '🌱' && <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>}
                  {step.icon === '✅' && <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/></svg>}
                  {step.icon === '📋' && <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V9H7V7M17,13H7V11H17V13M14,17H7V15H14V17Z"/></svg>}
                  {step.icon === '🚛' && <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20,8H17V4H3C1.89,4 1,4.89 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8M6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5M17,12V9.5H19.5L21.47,12H17Z"/></svg>}
                  {step.icon === '📦' && <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2L3,7V16L12,21L21,16V7L12,2M12,4.38L18.44,7.88L12,11.38L5.56,7.88L12,4.38M4.5,9.45L11,12.95V19.45L4.5,15.95V9.45M13,19.45V12.95L19.5,9.45V15.95L13,19.45Z"/></svg>}
                  {step.icon === '🤝' && <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M23.96 14.19C23.96 14.19 22.4 17.65 20.36 18.23C18.32 18.8 17 17.38 17 17.38C17 17.38 18.15 16 18.4 15.68C18.66 15.35 18.39 14.67 17.88 14.93C17.37 15.2 16.52 15.7 16.52 15.7L12.56 12.03L15.39 9.06L20.47 13.9C20.47 13.9 22.56 11.75 23.96 14.19M11.83 14.69C11.66 15 11.23 15.26 10.66 15.5C10.08 15.75 9.4 16 9.4 16L3.93 11.69L5.32 10.22L11.83 14.69M7.05 11.96C7.05 11.96 6.34 11.19 5.86 10.66C5.38 10.13 5.34 9.1 5.92 8.5C6.5 7.9 7.42 7.84 8.03 8.35C8.63 8.86 9.38 9.53 9.38 9.53L12.18 6.5C12.18 6.5 12.75 6 13.4 6C14.05 6 14.54 6.45 14.86 6.95C15.19 7.45 15.33 8.04 15.09 8.5C14.86 8.97 12.23 12.19 12.23 12.19L14.73 14.53C14.73 14.53 15.86 13.12 16.14 12.76C16.42 12.4 17.07 12.41 17.5 12.83C17.9 13.25 18.52 13.93 18.52 13.93L13.16 19.53L12 18.5L12.89 17.65L11.53 16.34L11.86 16L12.92 16.89C13 16.41 12.94 15.87 12.63 15.32L11.83 14.69Z"/></svg>}
                </span>
              </div>
            ))}
            {/* Final border */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
