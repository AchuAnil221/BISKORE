import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FFFFFF',
        textAlign: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'clamp(12rem, 35vw, 40rem)',
          fontWeight: 900,
          color: 'rgba(6,44,34,0.04)',
          letterSpacing: '-0.05em',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1,
        }}
      >
        404
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p className="text-label" style={{ marginBottom: '1rem' }}>Page Not Found</p>
        <h1 className="text-display" style={{ marginBottom: '1.5rem', color: '#0D0D0D' }}>
          <span className="gradient-text">Oops!</span>
        </h1>
        <p style={{ maxWidth: 400, margin: '0 auto 2.5rem', color: '#666', lineHeight: 1.75 }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary"><span>Go Home</span></Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}
