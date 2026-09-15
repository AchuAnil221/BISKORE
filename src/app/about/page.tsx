import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedBiskoreName from '@/components/ui/AnimatedBiskoreName';
import StoryHeroAnimation from '@/components/about/StoryHeroAnimation';
import { LEADERSHIP, VALUES, VISION, FUTURE_OUTLOOK } from '@/lib/constants';

const ORG_STRUCTURE = [
  { name: 'Fresh Produce', sub: 'Wholesale & Retail | Farm to Market', color: '#4CAF50', bg: '#F1F8F2' },
  { name: 'Import & Export', sub: 'Toys | Electronics | Home Appliances', color: '#2196F3', bg: '#EEF4FF' },
  { name: 'Koblaq', sub: 'Lifestyle & Clothing Brand', color: '#9C27B0', bg: '#F8F0FF' },
  { name: 'Tastecore', sub: 'Food & Beverages Brand', color: '#FF9800', bg: '#FFF8E1' },
  { name: 'Biskore Logistics', sub: 'All India Permit Fleet', color: '#1E3A8A', bg: '#EFF6FF' },
];

const MISSION_POINTS = [
  'Build a resilient, diversified business group operating across trade, consumer brands, and logistics.',
  'Deliver fresh produce efficiently from farm to market — cutting waste, supporting farmers, and serving buyers across India.',
  'Facilitate reliable import and export of quality goods — toys, electronics, and home appliances — across domestic and global markets.',
  'Grow Koblaq into a trusted lifestyle brand covering clothing, cosmetics, perfumes, and footwear.',
  'Build Tastecore as a household name in food and beverages — spices, breakfast products, juices, and soft drinks.',
  'Operate a dependable, all-India logistics fleet that supports both group operations and external clients.',
  'Maintain transparency, ethics, and long-term partnership mindset across all dealings.',
];

export default function AboutPage() {
  return (
    <main>
      {/* ── 1. PAGE HERO ── */}
      <section
        className="about-hero"
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
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                color: '#0D0D0D',
                marginBottom: '1.5rem',
              }}
            >
              Our <span style={{ color: '#D4AF37' }}>Story</span>
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                color: '#555',
                lineHeight: 1.7,
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

      {/* ── 2. ABOUT BISKORE — Company Overview + Stats ── */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Left side text */}
            <ScrollReveal direction="left">
              <div className="section-badge">
                <span className="text-label">About Biskore Dynamics LLP</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  color: '#0D0D0D',
                  marginTop: '0.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                An Integrated House of <br /> <span className="gradient-text">Trade, Brands & Logistics</span>
              </h2>
              <p style={{ marginBottom: '1.25rem', color: '#555', lineHeight: 1.7, fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', fontWeight: 400 }}>
                Biskore Dynamics LLP is a diversified business group, structured as a Limited Liability Partnership, operating across five distinct business sectors — fresh produce distribution, international trade, lifestyle and clothing, food and beverages, and pan-India logistics services.
              </p>
              <p style={{ marginBottom: '2rem', color: '#555', lineHeight: 1.7, fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', fontWeight: 400 }}>
                Founded with the ambition to build a multi-vertical enterprise under one accountable structure, Biskore brings together the precision of a trading house, the customer focus of consumer brands, and the operational backbone of an owned logistics fleet.
              </p>
            </ScrollReveal>

            {/* Right side stats grid */}
            <ScrollReveal direction="right">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {[
                  { value: '5', label: 'Business Sectors' },
                  { value: '2', label: 'Consumer Brands' },
                  { value: '2', label: 'Global Trade' },
                  { value: 'Pan-India', label: 'Logistics Fleet' },
                  { value: 'B2B+B2C', label: 'Trade Model' },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    style={{
                      padding: '1.5rem',
                      background: '#F8F7F4',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem',
                      gridColumn: i === 4 ? '1 / -1' : undefined,
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: 'clamp(1.5rem, 2vw, 2.25rem)', fontWeight: 700, color: '#D4AF37', letterSpacing: '-0.02em' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#777', fontWeight: 600 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 3. VISION — Dark Section ── */}
      <section
        className="section"
        style={{ background: '#F3F4F6', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.08)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.12)', pointerEvents: 'none' }} />
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center' }}>
              <div className="section-badge" style={{ justifyContent: 'center' }}>
                <span className="text-label" style={{ color: '#D4AF37', borderColor: 'rgba(212,175,55,0.3)' }}>Our Vision</span>
              </div>
              <p
                style={{
                  marginTop: '1.5rem',
                  fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.5,
                  color: '#0D0D0D',
                  maxWidth: '800px',
                  margin: '1.5rem auto 0',
                  fontStyle: 'italic',
                  opacity: 0.85,
                }}
              >
                &ldquo;{VISION}&rdquo;
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3b. OUR MISSION — Light Section ── */}
      <section className="section" style={{ background: '#F8F7F4' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '4rem', alignItems: 'start' }}>
              {/* Left — heading */}
              <div style={{ position: 'sticky', top: '120px' }}>
                <div className="section-badge">
                  <span className="text-label">Our Mission</span>
                </div>
                <h2
                  style={{
                    marginTop: '0.75rem',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 300,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                    color: '#0D0D0D',
                  }}
                >
                  Built to serve every <span className="gradient-text">partner,</span> every sector.
                </h2>
                <p style={{ marginTop: '1.25rem', color: '#666', fontSize: '1rem', lineHeight: 1.7 }}>
                  Across five sectors, Biskore operates with one consistent purpose — delivering quality, reliability, and long-term value.
                </p>
              </div>
              {/* Right — 2-column numbered grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {MISSION_POINTS.map((point, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '1.25rem',
                      background: '#FFFFFF',
                      border: '1px solid rgba(0,0,0,0.07)',
                      borderTop: '2px solid #FFB71D',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      gridColumn: i === MISSION_POINTS.length - 1 && MISSION_POINTS.length % 2 !== 0 ? '1 / -1' : undefined,
                    }}
                  >
                    <span style={{ color: '#D4AF37', fontSize: '0.65rem', letterSpacing: '0.12em', fontWeight: 700 }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ color: '#444', fontSize: '0.875rem', lineHeight: 1.65 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3b. CORE VALUES — Light Cards Section ── */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="section-badge" style={{ justifyContent: 'center' }}>
                <span className="text-label">Core Values</span>
              </div>
              <h2 style={{ marginTop: '0.75rem', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                One standard. <span className="gradient-text">Six principles.</span>
              </h2>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.25rem' }}>
            {VALUES.map((val, i) => (
              <ScrollReveal key={val.value} delay={(Math.min((i % 3) * 100 + 100, 300)) as 100 | 200 | 300}>
                <div
                  style={{
                    padding: '2rem 1.75rem',
                    background: '#F8F7F4',
                    border: '1px solid rgba(0,0,0,0.07)',
                    height: '100%',
                    transition: 'all 300ms',
                  }}
                  className="hover-lift-sm"
                >
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#D4AF37', fontWeight: 700, marginBottom: '0.75rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#062C22', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>
                    {val.value}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.65, margin: 0 }}>
                    {val.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ORGANISATIONAL STRUCTURE ── */}
      <section className="section" style={{ background: '#F8F7F4' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="section-badge" style={{ justifyContent: 'center' }}>
                <span className="text-label">How We Are Structured</span>
              </div>
              <h2 style={{ marginTop: '0.75rem', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Organisational <span className="gradient-text">Structure</span>
              </h2>
              <p style={{ marginTop: '1rem', maxWidth: 800, margin: '1rem auto 0', color: '#666', fontSize: '1rem', lineHeight: 1.7 }}>
                Biskore Dynamics LLP is the single parent entity. Three divisions operate internally, <br className="hidden md:block" />
                while Koblaq and Tastecore function as consumer-facing brands — both wholly owned under the Biskore group.
              </p>
            </div>
          </ScrollReveal>

          {/* Parent node */}
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0' }}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #062C22, #0A3D30)',
                  color: '#FFFFFF',
                  padding: '1.5rem 3rem',
                  textAlign: 'center',
                  minWidth: 280,
                  boxShadow: '0 8px 32px rgba(6,44,34,0.2)',
                }}
              >
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,183,29,0.8)', marginBottom: '0.5rem', fontWeight: 600 }}>Parent Entity</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 500, letterSpacing: '-0.01em' }}>Biskore Dynamics LLP</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.25rem' }}>Limited Liability Partnership</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: 2, height: 32, background: '#D4B87A' }} />
            </div>
          </ScrollReveal>

          <div style={{ position: 'relative' }}>
            {/* Exact Horizontal Connectors Layer */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', pointerEvents: 'none' }}>
              {ORG_STRUCTURE.map((_, i) => (
                <div key={`line-${i}`} style={{ position: 'relative', height: 2 }}>
                  {i !== 0 && <div style={{ position: 'absolute', top: 0, left: '-0.5rem', width: 'calc(50% + 0.5rem)', height: 2, background: '#D4B87A' }} />}
                  {i !== ORG_STRUCTURE.length - 1 && <div style={{ position: 'absolute', top: 0, right: '-0.5rem', width: 'calc(50% + 0.5rem)', height: 2, background: '#D4B87A' }} />}
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', width: '100%' }}>
              {ORG_STRUCTURE.map((div, i) => (
                <ScrollReveal key={div.name} delay={(Math.min(i * 100 + 100, 300)) as 100 | 200 | 300} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: 2, height: 28, background: '#D4B87A' }} />
                  </div>
                <div
                  className="hover-lift-sm"
                  style={{
                    background: div.color,
                    padding: '1.25rem 1rem',
                    textAlign: 'center',
                    transition: 'all 300ms',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ fontWeight: 600, color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>
                    {div.name}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>{div.sub}</div>
                </div>
              </ScrollReveal>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE BISKORE NAME ── */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '5rem', alignItems: 'stretch' }}>
            <ScrollReveal direction="left" style={{ height: '100%' }}>
              <div style={{ position: 'relative', height: '100%', minHeight: '400px', overflow: 'hidden' }}>
                <Image
                  src="/images/about_bright.jpg"
                  alt="Biskore Dynamics LLP"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="section-badge">
                <span className="text-label">The Biskore Name</span>
              </div>
              <AnimatedBiskoreName />
              <p style={{ marginBottom: '1.25rem', color: '#555', lineHeight: 1.7, fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', fontWeight: 400 }}>
                The name Biskore combines <strong style={{ color: '#062C22' }}>BI-S</strong> — representing the two
                founders, Biju and Sujith — with <strong style={{ color: '#062C22' }}>Kore/Core</strong>, symbolising
                the central strength, unity, and foundation of the company.
              </p>
              <p style={{ color: '#555', lineHeight: 1.7, fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', fontWeight: 400 }}>
                Every vertical is built on the same principle: direct sourcing, consistent quality, and long-term
                partnership with farmers, suppliers, and clients alike.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* ── 6. LEADERSHIP ── */}
      <section className="section" style={{ background: '#F8F7F4', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-15%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(6,44,34,0.08) 0%, rgba(10,61,48,0) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(255,183,29,0.1) 0%, rgba(245,211,153,0) 100%)', pointerEvents: 'none' }} />
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="section-badge" style={{ justifyContent: 'center' }}>
                <span className="text-label">Leadership</span>
              </div>
              <h2 className="text-h2" style={{ marginTop: '0.75rem', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                The <span className="gradient-text">founders</span>
              </h2>
              <p style={{ marginTop: '1rem', maxWidth: 500, margin: '1rem auto 0', color: '#666', fontSize: '1rem', lineHeight: 1.7 }}>
                Biskore Dynamics LLP is guided by a founding partnership team with hands-on experience in trade, brand building, logistics, and operations.
              </p>
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
                        style={{
                          objectFit: 'cover',
                          objectPosition: leader.name === 'Sujith' ? 'center 30%' : (leader.name === 'Biju' ? 'center top' : 'center center')
                        }}
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                    ) : (
                      <span style={{ fontSize: '2.25rem', fontWeight: 900, color: '#D4AF37' }}>{leader.initial}</span>
                    )}
                  </div>
                  <div style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: '#0D0D0D', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                      {leader.name}
                    </h3>
                    <p style={{ fontSize: '0.75rem', color: '#B8860B', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                      {leader.role}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. QUALITY, COMPLIANCE & SUSTAINABILITY ── */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="section-badge" style={{ justifyContent: 'center' }}>
                <span className="text-label">Quality & Compliance</span>
              </div>
              <h2 className="text-h2" style={{ marginTop: '0.75rem', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                One standard. <span className="gradient-text">All five sectors.</span>
              </h2>
              <p style={{ marginTop: '1rem', maxWidth: 600, margin: '1rem auto 0', color: '#666', fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', lineHeight: 1.7, fontWeight: 400 }}>
                Biskore maintains a single, non-negotiable quality standard across every business vertical — from produce freshness to product safety, food hygiene, material standards, and vehicle compliance.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.5rem', width: '100%' }}>
            {[
              {
                title: 'Fresh Produce',
                desc: 'Freshness, hygiene, and traceability from farm to delivery.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
              },
              {
                title: 'Import & Export',
                desc: 'Product safety and quality inspection for electronics, toys, and appliances.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>,
              },
              {
                title: 'Koblaq',
                desc: 'Material, finish, and safety standards across clothing, cosmetics, and footwear.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
              },
              {
                title: 'Tastecore',
                desc: 'Batch-level food safety, freshness, and accurate labelling standards.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>,
              },
              {
                title: 'Logistics',
                desc: 'Vehicle compliance, All India Permit maintenance, and driver standards.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>,
              },
              {
                title: 'Ethical Sourcing',
                desc: 'Fair dealing with farmers, suppliers, and vendors across all verticals.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
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
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#555', fontWeight: 400 }}>
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Sustainability note */}
          <ScrollReveal>
            <div
              style={{
                marginTop: '3rem',
                padding: '1.75rem 2.5rem',
                background: 'linear-gradient(135deg, rgba(6,44,34,0.04) 0%, rgba(255,183,29,0.05) 100%)',
                border: '1px solid rgba(6,44,34,0.1)',
                borderLeft: '4px solid #FFB71D',
                borderRadius: '4px',
                width: '100%',
                margin: '3rem auto 0',
              }}
            >
              <p style={{ margin: 0, color: '#444', lineHeight: 1.75, fontSize: '0.95rem' }}>
                <strong style={{ color: '#062C22', display: 'block', marginBottom: '0.4rem', fontSize: '1rem' }}>Sustainability Commitment</strong>
                A growing focus on sustainable packaging and responsible supply chain practices. As the group scales, Biskore is committed to building its quality and compliance systems formally — including documentation, third-party audits, and certification where applicable.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 8. FUTURE OUTLOOK ── */}
      <section className="section" style={{ background: '#F8F7F4' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '5rem', alignItems: 'start' }}>
              <div style={{ position: 'sticky', top: '120px' }}>
              <div className="section-badge">
                <span className="text-label">Future Outlook</span>
              </div>
              <h2
                style={{
                  marginTop: '0.75rem',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  color: '#0D0D0D',
                  marginBottom: '1.5rem',
                }}
              >
                Scaling with <span className="gradient-text">purpose.</span>
              </h2>
              <p style={{ color: '#555', lineHeight: 1.7, fontSize: '1rem', fontWeight: 400 }}>
                Biskore Dynamics LLP is focused on deepening its position across all five sectors while selectively entering new geographies and product categories. The group&apos;s owned logistics infrastructure gives it a structural advantage as it scales — making each new vertical easier to distribute and fulfil.
              </p>
              </div>

              <div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {FUTURE_OUTLOOK.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '1.25rem',
                      alignItems: 'flex-start',
                      padding: '1.25rem 0',
                      borderBottom: '1px solid rgba(0,0,0,0.07)',
                    }}
                  >
                    <span style={{ color: '#D4AF37', fontSize: '0.65rem', letterSpacing: '0.1em', fontWeight: 700, minWidth: 24, paddingTop: '0.2rem', flexShrink: 0 }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ color: '#444', fontSize: '0.95rem', lineHeight: 1.65 }}>{item}</span>
                  </li>
                ))}
                <li style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }} />
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

      {/* ── 9. CTA ── */}
      <section className="section-sm" style={{ background: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="text-h2" style={{ marginBottom: '1.5rem', color: '#0D0D0D', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Ready to <span style={{ background: 'linear-gradient(135deg,#FFB71D,#F5D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>partner with us?</span>
            </h2>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.875rem 2rem', background: '#FFB71D', color: '#000',
                  fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.05em',
                  textTransform: 'uppercase', borderRadius: '9999px', transition: 'all 400ms',
                }}
              >Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
