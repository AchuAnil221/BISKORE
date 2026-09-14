import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectorHeroAnimation from '@/components/sectors/SectorHeroAnimation';
import FreshProduceContent from '@/components/sectors/pages/FreshProduceContent';
import ImportExportContent from '@/components/sectors/pages/ImportExportContent';
import KoblaqContent from '@/components/sectors/pages/KoblaqContent';
import TastecoreContent from '@/components/sectors/pages/TastecoreContent';
import LogisticsContent from '@/components/sectors/pages/LogisticsContent';
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
      {/* Hero — Light Theme (Preserved strictly as instructed) */}
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

      {/* Bespoke Sector Body Renderers */}
      {sector.id === 'fresh-produce' && <FreshProduceContent sector={sector} />}
      {sector.id === 'trade' && <ImportExportContent sector={sector} />}
      {sector.id === 'koblaq' && <KoblaqContent sector={sector} />}
      {sector.id === 'tastecore' && <TastecoreContent sector={sector} />}
      {sector.id === 'logistics' && <LogisticsContent sector={sector} />}

      {/* Sector Navigation (Preserved at page bottom) */}
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
