'use client';

import RevealText, { RevealLines } from '@/components/ui/RevealText';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ScrollSplitCard } from '@/components/ui/ScrollSplitCard';
import { STRENGTHS, VALUES } from '@/lib/constants';

export default function WhyBiskore() {
  return (
    <section className="hero-overlap-section section whybiskore-section" style={{ position: 'relative', paddingTop: 0 }}>
      <div className="container">
        {/* Strengths */}
        <div style={{ marginBottom: 'var(--gap-xl)' }}>
          <RevealText
            as="h2"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#0D0D0D',
              marginTop: 'var(--gap-xs)',
            }}
          >
            Strengths that set us apart
          </RevealText>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            marginBottom: 'var(--gap-xl)',
          }}
        >
          {STRENGTHS.map((item, i) => (
            <div
              key={item.title}
              className={`hover-strength sr sr-d${Math.min(i + 1, 6)}`}
              ref={(el) => {
                if (!el) return;
                new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('is-visible'); } }, { threshold: 0.1 }).observe(el);
              }}
              style={{
                padding: '2.5rem',
                background: '#FFFFFF',
                height: '100%',
                transition: 'background 300ms, opacity 0.8s ease, transform 0.8s ease',
                position: 'relative',
                overflow: 'hidden',
                borderRight: (i + 1) % 3 !== 0 ? '1px solid rgba(184, 134, 11, 0.25)' : 'none',
              }}
            >

              <h3 style={{ fontSize: '1.15rem', fontWeight: 400, color: '#0D0D0D', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#666' }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values — animated version (desktop only) */}
        <div className="values-scroll-desktop">
          <ScrollSplitCard
            titleNode={
              <div style={{ textAlign: 'center' }}>
                <div className="section-badge" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
                  <span className="text-label">Core Values</span>
                </div>
                <RevealLines
                  as="h2"
                  lines={['What we stand for']}
                  duration={1000}
                  stagger={140}
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    fontWeight: 300,
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    color: '#0D0D0D',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                />
              </div>
            }
            imageSrc="/images/abstract_core_values_bg.jpg"
            cards={VALUES.map((v, i) => ({
              title: v.value,
              description: v.detail,
              bgColor: ['#062C22', '#D8D2C4', '#FFB71D', '#5BA87A', '#111111', '#1A4A6E'][i] ?? '#062C22',
              textColor: ['#FFFFFF', '#0D0D0D', '#0D0D0D', '#FFFFFF', '#FFFFFF', '#FFFFFF'][i] ?? '#FFFFFF',
            }))}
          />
        </div>

        {/* Core Values — mobile simple grid (shows all cards) */}
        <div className="values-mobile-grid">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="section-badge" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
              <span className="text-label">Core Values</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#0D0D0D',
            }}>
              What we stand for
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
            {VALUES.map((v, i) => {
              const bgColors = ['#062C22', '#D8D2C4', '#FFB71D', '#5BA87A', '#111111', '#1A4A6E'];
              const textColors = ['#FFFFFF', '#0D0D0D', '#0D0D0D', '#FFFFFF', '#FFFFFF', '#FFFFFF'];
              return (
                <div
                  key={v.value}
                  style={{
                    backgroundColor: bgColors[i] ?? '#062C22',
                    color: textColors[i] ?? '#FFFFFF',
                    borderRadius: '16px',
                    padding: '1.5rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>{v.value}</h3>
                  <p style={{ fontSize: '0.8rem', lineHeight: 1.55, margin: 0, opacity: 0.85 }}>{v.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
