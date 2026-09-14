import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectorSupplyChainAnim from '@/components/sectors/SectorSupplyChainAnim';
import SectorHeroAnimation from '@/components/sectors/SectorHeroAnimation';
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
      {/* Hero — Light Theme */}
      <section
        style={{
          paddingTop: '12rem',
          paddingBottom: '8rem',
          background: '#F8F7F4',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
        }}
      >
        {/* Dynamic Background Animation */}
        <SectorHeroAnimation sectorId={sector.id} accentColor={sector.accentColor || '#FFB71D'} />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          
          <ScrollReveal>
            {/* Title & Description */}
            <h1
              style={{
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: '#0D0D0D',
                marginBottom: '2rem',
              }}
            >
              {sector.name}
            </h1>
            
            <p
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                color: '#555',
                lineHeight: 1.8,
                maxWidth: '700px',
                margin: '0 auto',
                fontWeight: 400,
              }}
            >
              {sector.tagline}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories (What we supply) */}
      {sector.categories && sector.categories.length > 0 && (
        <section className="section" style={{ background: '#FFFFFF' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '4rem',
                alignItems: 'start',
              }}
            >
              {/* Left Side: Sentence / Context */}
              <ScrollReveal>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ width: '30px', height: '2px', background: sector.accentColor || '#FFB71D' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: sector.accentColor || '#FFB71D', textTransform: 'uppercase' }}>
                    {sector.id === 'logistics' ? 'Service Capability' : 'Product Categories'}
                  </span>
                </div>
                <h2 className="text-h2" style={{ marginBottom: '1.5rem', maxWidth: 600 }}>
                  {sector.id === 'fresh-produce' ? 'What we supply' : <>What we <span className="gradient-text">offer</span></>}
                </h2>
                <p
                  style={{
                    fontSize: '1.05rem',
                    color: '#555',
                    lineHeight: 1.8,
                    maxWidth: '500px',
                  }}
                >
                  {sector.description}
                </p>
              </ScrollReveal>

              {/* Right Side: Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
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
                      <div style={{ width: 24, height: 2, background: sector.accentColor || '#FFB71D', marginBottom: '1rem' }} />
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
          </div>
        </section>
      )}

      {/* Supply Chain (How it works) */}
      {sector.id === 'fresh-produce' && sector.supplyChain.length > 0 && (
        <SectorSupplyChainAnim sector={sector} />
      )}

      {sector.id !== 'fresh-produce' && sector.supplyChain.length > 0 && (
        <section className="section" style={{ background: '#F8F7F4' }}>
          <div className="container">
            <ScrollReveal>
              <h2 className="text-h2" style={{ marginBottom: '4rem', textAlign: 'center', color: '#062C22' }}>
                How It Works
              </h2>
            </ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
              {sector.supplyChain.map((step, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div style={{ padding: '2.5rem 2rem', background: '#FFFFFF', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', height: '100%' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#062C22', marginBottom: '1rem' }}>
                      <span style={{ color: sector.accentColor || '#FFB71D', marginRight: '0.5rem' }}>0{idx + 1}.</span>
                      {step.title}
                    </div>
                    <p style={{ color: '#555', lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Logistics Support */}
      {sector.logisticsSupport && sector.logisticsSupport.length > 0 && (
        <section className="section" style={{ background: '#F8F7F4' }}>
          <div className="container">
            <ScrollReveal>
              <h2 className="text-h2" style={{ marginBottom: '3rem', color: '#062C22' }}>
                Logistics Support
              </h2>
            </ScrollReveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '800px' }}>
              {sector.logisticsSupport.map((point: string, i: number) => (
                <ScrollReveal key={i} delay={(Math.min(i * 100 + 100, 500)) as 100 | 200 | 300 | 400 | 500}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: sector.accentColor || '#FFB71D', marginTop: '0.5rem', flexShrink: 0 }} />
                    <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.6 }}>
                      {point}
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
