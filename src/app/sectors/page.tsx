import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { SECTORS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sectors',
  description:
    "Explore Biskore Dynamics LLP's five business sectors: Fresh Produce, Trade, Koblaq, Tastecore, and Logistics.",
};

export default function SectorsPage() {
  return (
    <main>
      {/* Hero — dark green */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '5rem',
          background: 'linear-gradient(135deg, #062C22 0%, #0A3D30 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,183,29,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,183,29,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container" style={{ position: 'relative' }}>
          <ScrollReveal>
            <div className="section-badge">
              <span className="gold-line" />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FFB71D' }}>
                What We Do
              </span>
            </div>
            <h1 className="text-display" style={{ marginTop: '0.75rem', maxWidth: 800, color: '#FFFFFF' }}>
              Five sectors,{' '}
              <span style={{ background: 'linear-gradient(135deg,#FFB71D,#F5D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                one group
              </span>
            </h1>
            <p style={{ marginTop: '1.5rem', maxWidth: 600, color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', lineHeight: 1.75 }}>
              From farm to market, from global trade to your wardrobe and kitchen —
              Biskore operates across India&apos;s most essential industries under one accountable partnership.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sectors List — white bg */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.06)' }}>
            {SECTORS.map((sector, i) => (
              <ScrollReveal key={sector.id} delay={(Math.min(i * 100 + 100, 400)) as 100 | 200 | 300 | 400}>
                <Link
                  href={sector.href}
                  className="hover-sector-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    gap: '2.5rem',
                    padding: '2.25rem 2.5rem',
                    background: '#FFFFFF',
                    alignItems: 'center',
                    transition: 'all 300ms',
                    textDecoration: 'none',
                    color: 'inherit',
                    borderLeft: '3px solid transparent',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'rgba(255,183,29,0.7)', letterSpacing: '0.05em', minWidth: 24 }}>
                      0{i + 1}
                    </span>
                    <span style={{ fontSize: '2.5rem', lineHeight: 1 }}>{sector.icon}</span>
                  </div>

                  <div>
                    <h2 className="text-h2" style={{ marginBottom: '0.4rem', color: '#0D0D0D' }}>
                      {sector.name}
                    </h2>
                    <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.65, maxWidth: 600 }}>
                      {sector.tagline}
                    </p>
                  </div>

                  <div
                    style={{
                      width: 48,
                      height: 48,
                      border: '1px solid rgba(0,0,0,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="#062C22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dark green band */}
      <section className="section-sm" style={{ background: '#062C22' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="text-h2" style={{ marginBottom: '1.5rem', color: '#FFFFFF' }}>
              Interested in partnering{' '}
              <span style={{ background: 'linear-gradient(135deg,#FFB71D,#F5D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                with us?
              </span>
            </h2>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.875rem 2rem', background: '#FFB71D', color: '#000',
              fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.05em',
              textTransform: 'uppercase', borderRadius: '9999px',
            }}>Get in Touch</Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
