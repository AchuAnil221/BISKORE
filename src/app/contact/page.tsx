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
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
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
              <span style={{ color: '#0D0D0D' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'stretch' }}>
            {/* Left — Info */}
            <ScrollReveal direction="left" className="h-full">
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '3rem', background: '#F8F7F4', border: '1px solid rgba(0,0,0,0.07)', height: '100%' }}>
                {/* Address */}
                {[
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
                  { label: 'Office Address', content: <address style={{ fontStyle: 'normal', fontSize: '0.9rem', lineHeight: 1.85, color: '#555' }}>{SITE.address}</address> },
                ].map(({ label, content }) => (
                  <div key={label}>
                    <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '0.75rem' }}>
                      {label}
                    </p>
                    {content}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right — Form */}
            <ScrollReveal direction="right" className="h-full">
              <div
                style={{
                  padding: '3rem',
                  background: '#F8F7F4',
                  border: '1px solid rgba(0,0,0,0.07)',
                  height: '100%'
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
                    <div className="contact-grid-row" style={{ gap: '1.25rem' }}>
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

                    <div className="contact-grid-row" style={{ gap: '1.25rem' }}>
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
