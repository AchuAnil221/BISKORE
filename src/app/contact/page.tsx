'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { SITE } from '@/lib/constants';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.875rem 1.25rem',
    background: '#FFFFFF',
    border: '1px solid rgba(0,0,0,0.12)',
    color: '#0D0D0D',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 200ms, box-shadow 200ms',
    borderRadius: 0,
  };

  return (
    <main>
      {/* Hero — dark green */}
      <section
        style={{
          paddingTop: '11rem',
          paddingBottom: '7rem',
          background: 'linear-gradient(180deg, #F8F7F4 0%, #FDF3DB 40%, #E8DFCB 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated Abstract Connections Background */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.45 }}>
          <svg width="100%" height="100%" viewBox="0 0 1920 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#062C22" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#062C22" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#062C22" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <style>
              {`
                .anim-line { 
                  stroke-dasharray: 2000; 
                  stroke-dashoffset: 2000; 
                  animation: dashSweep 10s linear infinite; 
                }
                .anim-line:nth-child(2) { animation-delay: -3s; animation-duration: 12s; }
                .anim-line:nth-child(3) { animation-delay: -6s; animation-duration: 16s; }
                .anim-line:nth-child(4) { animation-delay: -1s; animation-duration: 14s; }
                .anim-line:nth-child(5) { animation-delay: -5s; animation-duration: 18s; }
                @keyframes dashSweep {
                  0% { stroke-dashoffset: 2000; }
                  100% { stroke-dashoffset: -2000; }
                }
                .anim-node { animation: pulseNode 4s ease-in-out infinite alternate; transform-origin: center; transform-box: fill-box; }
                @keyframes pulseNode {
                  0% { transform: scale(0.6); opacity: 0.4; }
                  100% { transform: scale(1.4); opacity: 1; }
                }
              `}
            </style>
            
            {/* Connection Lines (Sweeping Curves) */}
            <path className="anim-line" d="M -100 150 Q 500 300 1200 -50" fill="none" stroke="url(#lineGrad)" strokeWidth="2" />
            <path className="anim-line" d="M -50 450 Q 700 100 1600 550" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" />
            <path className="anim-line" d="M 200 -100 Q 800 500 1800 100" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" />
            <path className="anim-line" d="M 300 700 Q 1100 0 2000 400" fill="none" stroke="url(#lineGrad)" strokeWidth="2" />
            <path className="anim-line" d="M 1000 -50 Q 1300 600 2200 150" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" />
            
            {/* Nodes perfectly placed on the path intersections/curves */}
            <g fill="#0A3D30">
              {/* On Path 1 */}
              <circle cx="200" cy="225" r="5" className="anim-node" style={{ animationDelay: '0s' }} />
              {/* On Path 2 */}
              <circle cx="450" cy="255" r="4" className="anim-node" style={{ animationDelay: '1s' }} />
              {/* On Path 3 intersection */}
              <circle cx="780" cy="250" r="6" className="anim-node" style={{ animationDelay: '2s' }} />
              {/* On Path 4 */}
              <circle cx="1150" cy="180" r="5" className="anim-node" style={{ animationDelay: '0.5s' }} />
              {/* On Path 5 */}
              <circle cx="1450" cy="300" r="4" className="anim-node" style={{ animationDelay: '1.5s' }} />
            </g>
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <ScrollReveal>
            <div className="section-badge" style={{ justifyContent: 'center' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FFB71D' }}>
                Contact Us
              </span>
            </div>
            <h1 className="text-display" style={{marginTop: '0.75rem', maxWidth: 800, margin: '0.75rem auto 0', color: '#0D0D0D', 
fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
fontWeight: 500, 
letterSpacing: '-0.02em', 
lineHeight: 1.15}}>
              Let&apos;s{' '}
              <span style={{ color: '#0A3D30' }}>
                connect
              </span>
            </h1>
            <p style={{marginTop: '1.5rem', maxWidth: 640, margin: '1.5rem auto 0', color: '#555555', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', lineHeight: 1.7, 
fontWeight: 400}}>
              We welcome enquiries from trade partners, farmers, distributors, logistics clients,
              brand partners, and investors interested in any of Biskore&apos;s five business sectors.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content — white */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            {/* Left — Info */}
            <ScrollReveal direction="left">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Address */}
                {[
                  { label: 'Office Address', content: <address style={{ fontStyle: 'normal', fontSize: '0.9rem', lineHeight: 1.85, color: '#555' }}>{SITE.address}</address> },
                  {
                    label: 'Phone', content: (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {SITE.phone.map((p) => (
                          <a key={p} href={`tel:${p.replace(/\s/g, '')}`} style={{ fontSize: '1rem', fontWeight: 600, color: '#062C22', transition: 'opacity 200ms' }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.7')}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                          >{p}</a>
                        ))}
                      </div>
                    )
                  },
                  { label: 'Email', content: <a href={`mailto:${SITE.email}`} style={{ fontSize: '1rem', fontWeight: 600, color: '#062C22' }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.7')} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}>{SITE.email}</a> },
                  { label: 'Website', content: <a href="https://www.biskore.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem', fontWeight: 600, color: '#062C22' }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.7')} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}>www.biskore.com</a> },
                ].map(({ label, content }) => (
                  <div key={label} style={{ padding: '1.75rem', border: '1px solid rgba(0,0,0,0.08)', background: '#F8F7F4' }}>
                    <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '0.75rem' }}>
                      {label}
                    </p>
                    {content}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right — Form */}
            <ScrollReveal direction="right">
              <div
                style={{
                  padding: '3rem',
                  background: '#F8F7F4',
                  border: '1px solid rgba(0,0,0,0.07)',
                }}
              >
                <h2 className="text-h2" style={{marginBottom: '0.5rem', 
fontSize: 'clamp(2rem, 5vw, 4rem)', 
fontWeight: 300, 
letterSpacing: '-0.03em', 
lineHeight: 1.1}}>
                  Send us a <span className="gradient-text">message</span>
                </h2>
                <p style={{marginBottom: '2.5rem', color: '#666', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', 
fontWeight: 400, 
lineHeight: 1.7}}>
                  Fill in your details and we&apos;ll get back to you shortly.
                </p>

                {status === 'success' ? (
                  <div style={{ padding: '2rem', background: 'rgba(6,44,34,0.06)', border: '1px solid rgba(6,44,34,0.15)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                    <h3 style={{fontSize: '1.25rem', fontWeight: 500, color: '#062C22', marginBottom: '0.5rem', 
letterSpacing: '-0.02em'}}>Message sent!</h3>
                    <p style={{color: '#666', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', 
fontWeight: 400, 
lineHeight: 1.7}}>Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                      {[
                        { id: 'contact-name', label: 'Full Name *', type: 'text', placeholder: 'Your name', field: 'name' as const, required: true },
                        { id: 'contact-email', label: 'Email *', type: 'email', placeholder: 'your@email.com', field: 'email' as const, required: true },
                      ].map(({ id, label, type, placeholder, field, required }) => (
                        <div key={id}>
                          <label style={{ display: 'block', fontSize: '0.75rem', color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                            {label}
                          </label>
                          <input
                            id={id}
                            required={required}
                            type={type}
                            placeholder={placeholder}
                            value={form[field]}
                            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                            style={inputStyle}
                            onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#FFB71D'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(255,183,29,0.1)'; }}
                            onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.12)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                          />
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Phone</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          style={inputStyle}
                          onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#FFB71D'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(255,183,29,0.1)'; }}
                          onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.12)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Subject</label>
                        <select
                          id="contact-subject"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          style={{ ...inputStyle, cursor: 'pointer', background: '#FFFFFF' }}
                          onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#FFB71D'; }}
                          onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.12)'; }}
                        >
                          <option value="">Select a topic</option>
                          <option value="fresh-produce">Fresh Produce</option>
                          <option value="trade">Trade / Import-Export</option>
                          <option value="koblaq">Koblaq Brand</option>
                          <option value="tastecore">Tastecore Brand</option>
                          <option value="logistics">Logistics</option>
                          <option value="partnership">Partnership / Investment</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Message *</label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        placeholder="Tell us about your enquiry..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                        onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#FFB71D'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(255,183,29,0.1)'; }}
                        onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.12)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                      />
                    </div>

                    {status === 'error' && (
                      <p style={{fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: '#CC0000', 
fontWeight: 400, 
lineHeight: 1.7}}>
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      id="contact-submit"
                      disabled={status === 'sending'}
                      className="btn-primary"
                      style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? 0.7 : 1 }}
                    >
                      <span>{status === 'sending' ? 'Sending…' : 'Send Message'}</span>
                      {status !== 'sending' && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ position: 'relative', zIndex: 1 }}>
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
