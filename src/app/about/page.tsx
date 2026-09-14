import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedBiskoreName from '@/components/ui/AnimatedBiskoreName';
import StoryHeroAnimation from '@/components/about/StoryHeroAnimation';
import { LEADERSHIP } from '@/lib/constants';

export default function AboutPage() {
  return (
    <main>
      {/* Page Hero — Light Theme */}
      <section
        style={{
          paddingTop: 'calc(85px + 2rem)',
          paddingBottom: '4rem',
          background: '#F8F7F4',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
        }}
      >
        <StoryHeroAnimation />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <ScrollReveal>
            <h1
              style={{
                fontSize: 'clamp(3.5rem, 7vw, 6rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: '#0D0D0D',
                marginBottom: '1.5rem',
              }}
            >
              Our <span style={{ color: '#FFB71D' }}>Story</span>
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
                  src="/images/about_bright.jpg"
                  alt="Biskore founders Biju and Sujith"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
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
      <section className="section" style={{ background: '#F8F7F4', position: 'relative', overflow: 'hidden' }}>
        {/* Premium Decorative Geometric Shapes */}
        <div style={{
          position: 'absolute',
          top: '-15%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(6,44,34,0.08) 0%, rgba(10,61,48,0) 100%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(255,183,29,0.1) 0%, rgba(245,211,153,0) 100%)',
          pointerEvents: 'none',
        }} />
        
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
                    border: '1px solid rgba(0,0,0,0.08)',
                    background: '#FFFFFF',
                    width: 320,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                    transition: 'all 300ms',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: 380,
                      background: 'linear-gradient(135deg, #062C22, #0A3D30)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    {'image' in leader && leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                    ) : (
                      <span style={{ fontSize: '2.25rem', fontWeight: 900, color: '#FFB71D' }}>{leader.initial}</span>
                    )}
                  </div>
                  <div style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0D0D0D', marginBottom: '0.5rem' }}>
                      {leader.name}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: '#B8860B', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {leader.role}
                    </p>
                  </div>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: 1000, margin: '0 auto' }}>
            {[
              { 
                title: 'Fresh Produce', desc: 'Freshness, hygiene, and traceability from farm to delivery.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
              },
              { 
                title: 'Import & Export', desc: 'Product safety and quality inspection for electronics, toys, and appliances.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
              },
              { 
                title: 'Koblaq', desc: 'Material, finish, and safety standards across clothing, cosmetics, and footwear.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              },
              { 
                title: 'Tastecore', desc: 'Batch-level food safety, freshness, and accurate labelling standards.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
              },
              { 
                title: 'Logistics', desc: 'Vehicle compliance, All India Permit maintenance, and driver standards.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
              },
              { 
                title: 'Ethical Sourcing', desc: 'Fair dealing with farmers, suppliers, and vendors across all verticals.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={(Math.min((i % 3) * 100 + 100, 300)) as 100 | 200 | 300}>
                <div
                  className="hover-quality"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '2.5rem 1.5rem',
                    border: '1px solid rgba(0,0,0,0.07)',
                    background: '#F8F7F4',
                    borderRadius: '8px',
                    transition: 'all 300ms ease',
                    height: '100%',
                  }}
                >
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#FFF9E6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    {item.icon}
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0A3D30', marginBottom: '0.75rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: '#555' }}>
                    {item.desc}
                  </p>
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
