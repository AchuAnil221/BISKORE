'use client';

import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import BiskoreLogo from '@/components/ui/BiskoreLogo';
import { SITE, NAV_LINKS, SECTORS } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const scaleAnim = useTransform(scrollYProgress, [0, 1], [0.97, 1]);
  
  // Only apply scale animation on home page, no fade anywhere
  const scale = isHome ? scaleAnim : 1;

  return (
    <motion.footer
      ref={footerRef}
      style={{
        scale,
        background: '#0D0D0D',
        borderTop: '1px solid rgba(255, 183, 29, 0.15)',
        paddingTop: '5rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="container">
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Brand Column */}
          <div>
            <BiskoreLogo size="2xl" src="/images/logo_hero_transparent.png" />
            <p
              style={{
                marginTop: '1.25rem',
                fontSize: '0.9rem',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.55)',
                maxWidth: 280,
              }}
            >
              An Integrated House of Trade, Brand &amp; Logistics. Five sectors.
              One consistent standard of quality.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href={`mailto:${SITE.email}`}
                className="hover-gold"
                style={{ fontSize: '0.85rem', color: 'rgba(255,183,29,0.85)', transition: 'color 200ms' }}
              >
                {SITE.email}
              </a>
              {SITE.phone.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s/g, '')}`}
                  className="hover-gold"
                  style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', transition: 'color 200ms' }}
                >
                  {p}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FFB71D', marginBottom: '1.25rem' }}>
              Navigation
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover-gold"
                    style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', transition: 'color 200ms' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors Column */}
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FFB71D', marginBottom: '1.25rem' }}>
              Our Sectors
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {SECTORS.map((sector) => (
                <li key={sector.id}>
                  <Link
                    href={sector.href}
                    className="hover-gold"
                    style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', transition: 'color 200ms' }}
                  >
                    {sector.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Column */}
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FFB71D', marginBottom: '1.25rem' }}>
              Find Us
            </p>
            <address
              style={{
                fontStyle: 'normal',
                fontSize: '0.875rem',
                lineHeight: 1.85,
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              {SITE.address}
            </address>
            <Link
              href="/contact"
              className="btn-outline-light"
              style={{ marginTop: '1.5rem', fontSize: '0.78rem', padding: '0.6rem 1.4rem' }}
            >
              Contact Us →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
            © {year} Biskore Dynamics LLP. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
            Kasargod, Kerala, India &nbsp;·&nbsp;{' '}
            <a
              href={`https://${SITE.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-gold"
              style={{ color: 'rgba(255,183,29,0.55)', transition: 'color 200ms' }}
            >
              www.biskore.com
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
