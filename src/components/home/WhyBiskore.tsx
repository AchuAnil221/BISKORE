'use client';

import RevealText, { RevealLines } from '@/components/ui/RevealText';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ScrollSplitCard } from '@/components/ui/ScrollSplitCard';
import { STRENGTHS, VALUES } from '@/lib/constants';

export default function WhyBiskore() {
  return (
    <section className="hero-overlap-section" style={{ position: 'relative' }}>

      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
        {/* Strengths */}
        <div style={{ marginBottom: '4rem' }}>
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
            <span className="gradient-text">Strengths</span> that set us apart
          </RevealText>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            marginBottom: '8rem',
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
              {/* Gold left accent - only on the first column to prevent overlapping with inner borders */}
              {i % 3 === 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 3,
                    height: '100%',
                    background: 'linear-gradient(180deg, #FFB71D 0%, transparent 100%)',
                    opacity: 0.5,
                  }}
                />
              )}
              <h3 style={{ fontSize: '1.15rem', fontWeight: 400, color: '#0D0D0D', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#666' }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values wrapped in ScrollSplitCard */}
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
            bgColor: ['#062C22', '#D8D2C4', '#FFB71D', '#5BA87A', '#111111'][i],
            textColor: ['#FFFFFF', '#0D0D0D', '#0D0D0D', '#FFFFFF', '#FFFFFF'][i],
          }))}
        />
      </div>
    </section>
  );
}
