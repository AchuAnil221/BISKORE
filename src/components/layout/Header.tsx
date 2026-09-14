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
  const navActiveColor = '#FFB71D';
  const navHoverColor = '#FFB71D';

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
              size="md" 
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
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.65rem 1rem',
                                borderRadius: '10px',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                color: isActive(child.href) ? '#062C22' : '#3D3D3D',
                                transition: 'all 200ms',
                                background: isActive(child.href)
                                  ? 'rgba(6, 44, 34, 0.07)'
                                  : 'transparent',
                              }}
                              onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.background =
                                  'rgba(6, 44, 34, 0.07)';
                                (e.currentTarget as HTMLElement).style.color = '#062C22';
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
                      fontWeight: 600,
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
                          height: 2,
                          background: '#FFB71D',
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
                    background: scrolled ? '#062C22' : '#FFB71D',
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

      {/* Mobile Menu — Light */}
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
          padding: '6rem 2rem 2rem',
          overflowY: 'auto',
        }}
        aria-hidden={!mobileOpen}
      >
        <nav
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => {
            if ('children' in link && link.children) {
              return (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      display: 'block',
                      padding: '1rem 0',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#062C22',
                      borderBottom: '1px solid rgba(0,0,0,0.06)',
                    }}
                  >
                    {link.label}
                  </Link>
                  <div style={{ paddingLeft: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{
                          display: 'block',
                          padding: '0.6rem 0',
                          fontSize: '1.1rem',
                          fontWeight: 500,
                          color: '#3D3D3D',
                        }}
                      >
                        → {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '1rem 0',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: isActive(link.href) ? '#FFB71D' : '#1A1A1A',
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary" style={{ marginTop: '2rem', justifyContent: 'center' }}>
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
