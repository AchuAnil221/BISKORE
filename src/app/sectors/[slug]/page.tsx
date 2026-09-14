import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { SECTORS } from '@/lib/constants';

type Params = { slug: string };

export async function generateStaticParams() {
  return SECTORS.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = SECTORS.find((s) => s.id === slug);
  if (!sector) return {};
  return { title: sector.name, description: sector.tagline };
}

export default async function SectorPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const sector = SECTORS.find((s) => s.id === slug);
  if (!sector) notFound();

  const sectorIndex = SECTORS.findIndex((s) => s.id === slug);
  const prevSector = sectorIndex > 0 ? SECTORS[sectorIndex - 1] : null;
  const nextSector = sectorIndex < SECTORS.length - 1 ? SECTORS[sectorIndex + 1] : null;

  return (
    <main>
      {/* Hero — dark green */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '6rem',
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
        {/* Large icon watermark */}
        <div
          style={{
            position: 'absolute',
            right: '-2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 'clamp(12rem, 25vw, 28rem)',
            opacity: 0.06,
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          {sector.icon}
        </div>

        <div className="container" style={{ position: 'relative' }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', listStyle: 'none', fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>
              <li><Link href="/" className="hover-gold" style={{ color: 'rgba(255,255,255,0.45)', transition: 'color 200ms' }}>Home</Link></li>
              <li>/</li>
              <li><Link href="/sectors" className="hover-gold" style={{ color: 'rgba(255,255,255,0.45)', transition: 'color 200ms' }}>Sectors</Link></li>
              <li>/</li>
              <li style={{ color: '#FFB71D' }}>{sector.name}</li>
            </ol>
          </nav>

          <ScrollReveal>
            <div className="section-badge">
              <span className="gold-line" />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FFB71D' }}>
                Division 0{sectorIndex + 1}
              </span>
            </div>
            <h1 className="text-display" style={{ marginTop: '0.75rem', maxWidth: 800, color: '#FFFFFF' }}>
              {sector.icon}{' '}
              <span style={{ background: 'linear-gradient(135deg,#FFB71D,#F5D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {sector.name}
              </span>
            </h1>
            <p
              style={{
                marginTop: '1.75rem',
                fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.72)',
                maxWidth: 680,
                borderLeft: '3px solid #FFB71D',
                paddingLeft: '1.5rem',
              }}
            >
              {sector.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      {sector.categories.length > 0 && (
        <section className="section" style={{ background: '#FFFFFF' }}>
          <div className="container">
            <ScrollReveal>
              <div className="section-badge" style={{ marginBottom: '1rem' }}>
                <span className="gold-line" />
                <span className="text-label">
                  {sector.id === 'logistics' ? 'Service Capability' : 'Product Categories'}
                </span>
              </div>
              <h2 className="text-h2" style={{ marginBottom: '3rem', maxWidth: 600 }}>
                What we <span className="gradient-text">offer</span>
              </h2>
            </ScrollReveal>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1px',
                background: 'rgba(0,0,0,0.07)',
                border: '1px solid rgba(0,0,0,0.07)',
              }}
            >
              {sector.categories.map((cat, i) => (
                <ScrollReveal key={cat.name} delay={(Math.min((i % 3) * 100 + 100, 500)) as 100 | 200 | 300 | 400 | 500}>
                  <div
                    className="hover-cat"
                    style={{
                      padding: '2rem',
                      background: '#FFFFFF',
                      height: '100%',
                      transition: 'background 300ms',
                    }}
                  >
                    <div style={{ width: 24, height: 2, background: '#FFB71D', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0D0D0D', marginBottom: '0.5rem' }}>
                      {cat.name}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.65 }}>
                      {cat.detail}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Supply Chain */}
      {sector.supplyChain.length > 0 && (
        <section className="section" style={{ background: '#F8F7F4' }}>
          <div className="container">
            <ScrollReveal>
              <div className="section-badge" style={{ marginBottom: '1rem' }}>
                <span className="gold-line" />
                <span className="text-label">
                  {sector.id === 'logistics' ? 'Delivery Process' : 'Supply Chain'}
                </span>
              </div>
              <h2 className="text-h2" style={{ marginBottom: '3.5rem' }}>
                How it <span className="gradient-text">works</span>
              </h2>
            </ScrollReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {sector.supplyChain.map((step, i) => (
                <ScrollReveal key={step.step} delay={(Math.min(i * 100 + 100, 500)) as 100 | 200 | 300 | 400 | 500}>
                  <div
                    className="hover-step"
                    style={{
                      padding: '2rem',
                      border: '1px solid rgba(0,0,0,0.07)',
                      background: '#FFFFFF',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                      transition: 'all 300ms',
                    }}
                  >
                    <div style={{ fontSize: '2rem', fontWeight: 900, color: 'rgba(255,183,29,0.3)', lineHeight: 1, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                      {step.step}
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0D0D0D', marginBottom: '0.625rem' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.65 }}>
                      {step.detail}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sector Navigation */}
      <section className="section-sm" style={{ background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            {prevSector ? (
              <Link
                href={prevSector.href}
                className="hover-next-nav"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1.25rem 1.75rem',
                  border: '1px solid rgba(0,0,0,0.08)',
                  background: '#F8F7F4',
                  transition: 'all 300ms',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M11 18l-6-6 6-6" stroke="#062C22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p style={{ fontSize: '0.7rem', color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Previous</p>
                  <p style={{ fontWeight: 600, color: '#0D0D0D' }}>{prevSector.name}</p>
                </div>
              </Link>
            ) : <div />}

            <Link href="/sectors" style={{ alignSelf: 'center', fontSize: '0.8rem', color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              All Sectors
            </Link>

            {nextSector ? (
              <Link
                href={nextSector.href}
                className="hover-next-nav"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1.25rem 1.75rem',
                  border: '1px solid rgba(0,0,0,0.08)',
                  background: '#F8F7F4',
                  transition: 'all 300ms',
                  textDecoration: 'none',
                  color: 'inherit',
                  textAlign: 'right' as const,
                }}
              >
                <div>
                  <p style={{ fontSize: '0.7rem', color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Next</p>
                  <p style={{ fontWeight: 600, color: '#0D0D0D' }}>{nextSector.name}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="#062C22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </main>
  );
}
