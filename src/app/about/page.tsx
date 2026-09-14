import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedBiskoreName from '@/components/ui/AnimatedBiskoreName';
import { LEADERSHIP } from '@/lib/constants';

export default function AboutPage() {
  return (
    <main>
      {/* Page Hero — deep green for contrast */}
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
        <div className="container on-dark" style={{ position: 'relative' }}>
          <ScrollReveal>

            <h1 className="text-display" style={{ marginTop: '0.75rem', maxWidth: 800, color: '#FFFFFF' }}>
              Our <span style={{ background: 'linear-gradient(135deg,#FFB71D,#F5D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Story</span>
            </h1>
            <p style={{ marginTop: '1.5rem', maxWidth: 640, color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', lineHeight: 1.75 }}>
              A single accountable partnership behind five sectors, growing from
              a farm-to-market operation into an integrated group spanning trade,
              brands, and logistics.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <ScrollReveal direction="left">
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <Image
                  src="/images/about.jpg"
                  alt="Biskore founders Biju and Sujith"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', top: 20, right: -20, bottom: -20, left: 20, border: '1px solid rgba(255,183,29,0.4)', pointerEvents: 'none' }} />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="section-badge">
                <span className="gold-line" />
                <span className="text-label">The Biskore Name</span>
              </div>
              <AnimatedBiskoreName />
              <p style={{ marginBottom: '1.25rem', color: '#555', lineHeight: 1.75 }}>
                The name Biskore combines <strong style={{ color: '#062C22' }}>BI-S</strong> — representing the two
                founders, Biju and Sujith — with <strong style={{ color: '#062C22' }}>Kore/Core</strong>, symbolising
                the central strength, unity, and foundation of the company.
              </p>
              <p style={{ marginBottom: '1.25rem', color: '#555', lineHeight: 1.75 }}>
                What began as a farm-to-market fresh produce operation in Kasargod has grown into an integrated group
                spanning international trade, two consumer brands, and a pan-India logistics fleet.
              </p>
              <p style={{ color: '#555', lineHeight: 1.75 }}>
                Every vertical is built on the same principle: direct sourcing, consistent quality, and long-term
                partnership with farmers, suppliers, and clients alike.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" style={{ background: '#F8F7F4' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="section-badge" style={{ justifyContent: 'center' }}>
                <span className="gold-line" />
                <span className="text-label">Leadership</span>
                <span className="gold-line" />
              </div>
              <h2 className="text-h2" style={{ marginTop: '0.75rem' }}>
                The <span className="gradient-text">founders</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {LEADERSHIP.map((leader, i) => (
              <ScrollReveal key={leader.name} delay={(i * 200 + 100) as 100 | 200}>
                <div
                  className="hover-lift-sm hover-border-gold"
                  style={{
                    padding: '3rem',
                    border: '1px solid rgba(0,0,0,0.08)',
                    background: '#FFFFFF',
                    textAlign: 'center',
                    width: 280,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                    transition: 'all 300ms',
                  }}
                >
                  <div
                    style={{
                      width: 96,
                      height: 96,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, #062C22, #0A3D30)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                      position: 'relative',
                    }}
                  >
                    {'image' in leader && leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="96px"
                      />
                    ) : (
                      <span style={{ fontSize: '2.25rem', fontWeight: 900, color: '#FFB71D' }}>{leader.initial}</span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0D0D0D', marginBottom: '0.5rem' }}>
                    {leader.name}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#B8860B', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {leader.role}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="section-badge" style={{ justifyContent: 'center' }}>
                <span className="gold-line" />
                <span className="text-label">Quality & Compliance</span>
                <span className="gold-line" />
              </div>
              <h2 className="text-h2" style={{ marginTop: '0.75rem' }}>
                One standard. <span className="gradient-text">All five sectors.</span>
              </h2>
              <p style={{ marginTop: '1rem', maxWidth: 560, margin: '1rem auto 0', color: '#666', fontSize: '0.95rem', lineHeight: 1.75 }}>
                Biskore maintains a single, non-negotiable quality standard across every business vertical.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 800, margin: '0 auto' }}>
            {[
              'Fresh produce: freshness, hygiene, and traceability from farm to delivery',
              'Import & Export: product safety and quality inspection for electronics, toys, and appliances',
              'Koblaq: material, finish, and safety standards across clothing, cosmetics, and footwear',
              'Tastecore: batch-level food safety, freshness, and accurate labelling standards',
              'Logistics: vehicle compliance, All India Permit maintenance, and driver standards',
              'Ethical sourcing — fair dealing with farmers, suppliers, and vendors across all verticals',
            ].map((item, i) => (
              <ScrollReveal key={i} delay={(Math.min((i % 4) * 100 + 100, 400)) as 100 | 200 | 300 | 400}>
                <div
                  className="hover-quality"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    border: '1px solid rgba(0,0,0,0.07)',
                    background: '#F8F7F4',
                    transition: 'all 300ms',
                  }}
                >
                  <span style={{ flexShrink: 0, width: 8, height: 8, background: '#FFB71D', marginTop: 6, display: 'block' }} />
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: '#555' }}>{item}</p>
                </div>
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
              Ready to <span style={{ background: 'linear-gradient(135deg,#FFB71D,#F5D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>partner with us?</span>
            </h2>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.875rem 2rem', background: '#FFB71D', color: '#000',
                fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.05em',
                textTransform: 'uppercase', borderRadius: '9999px', transition: 'all 400ms',
              }}>Contact Us</Link>
              <Link href="/sectors" className="btn-outline-light">Explore Sectors</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
