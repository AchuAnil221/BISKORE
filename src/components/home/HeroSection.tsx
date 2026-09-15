'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import EcosystemAnimation from '@/components/ui/EcosystemAnimation';

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      const overlapProgress = Math.max(0, Math.min(1, scrollY / windowH));

      if (parallaxRef.current) {
        // Subtle scale and fade as next section overlaps
        const scale = 1 - overlapProgress * 0.05;
        const opacity = 1 - overlapProgress * 0.5;
        parallaxRef.current.style.transform = `scale(${scale})`;
        parallaxRef.current.style.opacity = String(opacity);
      }
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
        textRef.current.style.opacity = String(Math.max(0, 1 - scrollY / (windowH * 0.45)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        height: '100dvh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Animation */}
      <div
        ref={parallaxRef}
        style={{
          position: 'absolute',
          inset: 0,
          willChange: 'transform, opacity',
        }}
      >
        <EcosystemAnimation />
      </div>

      {/* Very light overlay to ensure text readability (reduced to make illustration vibrant) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 255, 255, 0.05)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        ref={textRef}
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          marginTop: '-12vh',
          willChange: 'transform, opacity',
        }}
      >


        {/* Main Headline */}
        <h1
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            animation: 'fadeInUp 900ms 350ms both',
            color: '#0D0D0D',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}
        >
          An Integrated Ecosystem of{' '}
          <span className="gradient-text">Trade, Brands</span> &amp; Logistics
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            marginTop: '1.5rem',
            maxWidth: '600px',
            margin: '1.5rem auto 0',
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            fontWeight: 400,
            lineHeight: 1.7,
            color: '#555',
            animation: 'fadeInUp 900ms 500ms both',
          }}
        >
          Five sectors. Two consumer brands. Pan-India logistics.
          One consistent standard of quality across everything we do.
        </p>



        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '3rem',
            animation: 'fadeInUp 900ms 800ms both',
          }}
        >
          <Link href="/contact" className="btn-primary">
            <span>Contact Us</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ position: 'relative', zIndex: 1 }}>
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/about" className="btn-outline">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
