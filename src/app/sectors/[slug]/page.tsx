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
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                color: '#0D0D0D',
                marginBottom: '2rem',
              }}
            >
              {sector.name}
            </h1>
            
            <p
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
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


    </main>
  );
}
