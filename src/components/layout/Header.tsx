'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BiskoreLogo from '@/components/ui/BiskoreLogo';
import { NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSectorsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSectorsOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  // Hero is now light colored, so we always use dark text
  const navTextColor = '#1A1A1A';
  const navActiveColor = '#0D0D0D';
  const navHoverColor = '#0D0D0D';

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          background: scrolled
            ? 'rgba(255, 255, 255, 0.96)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(0, 0, 0, 0.07)'
            : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              height: scrolled ? 75 : 85, 
              gap: '2rem',
              transition: 'height 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            {/* Logo */}
            <BiskoreLogo 
              size="lg" 
              src="/images/biskore_logo_2.png" 
            />

            {/* Desktop Nav */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                marginLeft: 'auto',
              }}
              className="desktop-nav"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => {
                if ('children' in link && link.children) {
                  return (
                    <div key={link.href} ref={dropdownRef} style={{ position: 'relative' }}>
                      <button
                        onClick={() => setSectorsOpen(!sectorsOpen)}
                        aria-expanded={sectorsOpen}
                        aria-haspopup="true"
                        id="sectors-menu-button"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: '0.5rem 1rem',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          letterSpacing: '0.02em',
                          color: isActive(link.href) ? navActiveColor : navTextColor,
                          transition: 'color 200ms',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontFamily: 'inherit',
                          borderRadius: '6px',
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color = navHoverColor)
                        }
                        onMouseLeave={(e) => {
                          if (!isActive(link.href))
                            (e.currentTarget as HTMLElement).style.color = navTextColor;
                        }}
                      >
                        {link.label}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          style={{
                            transform: sectorsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 300ms',
                          }}
                        >
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {/* Dropdown */}
                      {sectorsOpen && (
                        <div
                          role="menu"
                          aria-labelledby="sectors-menu-button"
                          style={{
                            position: 'absolute',
                            top: 'calc(100% + 12px)',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: '#FFFFFF',
                            border: '1px solid rgba(0,0,0,0.08)',
                            borderRadius: '16px',
                            padding: '1rem',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                            minWidth: '240px',
                            animation: 'fadeInUp 200ms ease both',
                          }}
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              onClick={() => setSectorsOpen(false)}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.65rem 1rem',
                                borderRadius: '10px',
                                fontSize: '0.875rem',
                                color: isActive(child.href) ? '#FFFFFF' : '#3D3D3D',
                                transition: 'all 200ms',
                                background: isActive(child.href)
                                  ? navActiveColor
                                  : 'transparent',
                                fontWeight: isActive(child.href) ? 600 : 500,
                              }}
                              onMouseEnter={(e) => {
                                if (!isActive(child.href)) {
                                  (e.currentTarget as HTMLElement).style.background = 'rgba(0, 0, 0, 0.05)';
                                  (e.currentTarget as HTMLElement).style.color = '#0D0D0D';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isActive(child.href)) {
                                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                                  (e.currentTarget as HTMLElement).style.color = '#3D3D3D';
                                }
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      fontWeight: isActive(link.href) ? 800 : 600,
                      letterSpacing: '0.02em',
                      color: isActive(link.href) ? navActiveColor : navTextColor,
                      transition: 'color 200ms',
                      borderRadius: '6px',
                      position: 'relative',
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = navHoverColor)
                    }
                    onMouseLeave={(e) => {
                      if (!isActive(link.href))
                        (e.currentTarget as HTMLElement).style.color = navTextColor;
                    }}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 2,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '60%',
                          height: 3,
                          background: '#0D0D0D',
                          borderRadius: '9999px',
                        }}
                      />
                    )}
                  </Link>
                );
              })}
              {/* CTA Button */}
              <Link
                href="/contact"
                className="btn-primary"
                style={{
                  marginLeft: '1rem',
                  padding: '0.6rem 1.25rem',
                  fontSize: '0.75rem',
                }}
              >
                <span>Get in Touch</span>
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              style={{
                marginLeft: 'auto',
                display: 'none',
                flexDirection: 'column',
                gap: 5,
                padding: '0.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: 24,
                    height: 2,
                    background: scrolled ? '#062C22' : '#0D0D0D',
                    borderRadius: '9999px',
                    transition: 'all 300ms',
                    transform:
                      mobileOpen && i === 0
                        ? 'rotate(45deg) translate(5px, 5px)'
                        : mobileOpen && i === 2
                        ? 'rotate(-45deg) translate(5px, -5px)'
                        : mobileOpen && i === 1
                        ? 'scaleX(0)'
                        : 'none',
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: mobileOpen ? 'flex' : 'none',
          flexDirection: 'column',
          padding: '5rem 1.5rem 2rem',
          overflowY: 'auto',
        }}
        aria-hidden={!mobileOpen}
      >
        <nav
          style={{ display: 'flex', flexDirection: 'column' }}
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => {
            if ('children' in link && link.children) {
              const sectorActive = isActive(link.href);
              return (
                <div key={link.href}>
                  {/* Sectors accordion toggle — no navigation */}
                  <button
                    onClick={() => setSectorsOpen(!sectorsOpen)}
                    aria-expanded={sectorsOpen}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 0',
                      fontSize: '0.95rem',
                      fontWeight: sectorActive ? 600 : 400,
                      color: sectorActive ? '#0D0D0D' : '#444',
                      borderBottom: '1px solid rgba(0,0,0,0.07)',
                      background: 'none',
                      border: 'none',
                      borderBottom: '1px solid rgba(0,0,0,0.07)',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {sectorActive && (
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#FFB71D', display: 'inline-block' }} />
                      )}
                      {link.label}
                    </span>
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none"
                      style={{ transform: sectorsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 250ms', flexShrink: 0, color: '#999' }}
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Sectors dropdown list */}
                  {sectorsOpen && (
                    <div style={{ paddingLeft: '1rem', paddingBottom: '0.25rem' }}>
                      {link.children.map((child) => {
                        const childActive = isActive(child.href);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              padding: '0.65rem 0',
                              fontSize: '0.875rem',
                              fontWeight: childActive ? 600 : 400,
                              color: childActive ? '#0D0D0D' : '#555',
                              borderBottom: '1px solid rgba(0,0,0,0.05)',
                            }}
                          >
                            {childActive && (
                              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#FFB71D', display: 'inline-block', flexShrink: 0 }} />
                            )}
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 0',
                  fontSize: '0.95rem',
                  fontWeight: active ? 600 : 400,
                  color: active ? '#0D0D0D' : '#444',
                  borderBottom: '1px solid rgba(0,0,0,0.07)',
                }}
              >
                {active && (
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#FFB71D', display: 'inline-block', flexShrink: 0 }} />
                )}
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="btn-primary"
            style={{ marginTop: '1.75rem', justifyContent: 'center', fontSize: '0.8rem' }}
          >
            <span>Get in Touch</span>
          </Link>
        </nav>
      </div>

      {/* Responsive style override */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
