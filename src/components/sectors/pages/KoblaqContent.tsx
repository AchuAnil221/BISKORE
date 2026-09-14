'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface SectorProps {
  sector: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    accentColor: string;
  };
}

export default function KoblaqContent({ sector }: SectorProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Section 02: 8 Visual Product Wall Cards (Fashion Catalogue look)
  const productWall = [
    {
      title: 'Perfumes & Fragrances',
      category: 'Fragrance',
      desc: 'Signature EDP & EDT perfumes crafted with fine French oils and long-lasting notes for men and women.',
      color: '#1F1F24',
      accent: '#C5A059',
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <rect x="12" y="16" width="20" height="24" rx="4" fill="#C5A059" opacity="0.15" stroke="#C5A059" strokeWidth="2" />
          <rect x="18" y="10" width="8" height="6" rx="1" fill="#C5A059" />
          <rect x="20" y="6" width="4" height="4" fill="#C5A059" />
          <line x1="16" y1="28" x2="28" y2="28" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="22" cy="22" r="2" fill="#C5A059" />
        </svg>
      ),
    },
    {
      title: 'Cosmetics & Beauty',
      category: 'Beauty',
      desc: 'Skin-safe formulations, foundations, lip finishes, and daily glow essentials dermatologically vetted.',
      color: '#261C20',
      accent: '#E09FAD',
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <rect x="15" y="22" width="14" height="18" rx="2" fill="#E09FAD" opacity="0.2" stroke="#E09FAD" strokeWidth="2" />
          <path d="M17 22L20 8L24 8L27 22" fill="#E09FAD" />
          <line x1="15" y1="28" x2="29" y2="28" stroke="#E09FAD" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: 'Men’s Clothing',
      category: 'Apparel',
      desc: 'Contemporary tailored shirts, casual chinos, breathable tees, and versatile occasion wear.',
      color: '#1A2129',
      accent: '#7FA1C3',
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M12 12L18 6H26L32 12L28 17L25 15V38H19V15L16 17L12 12Z" fill="#7FA1C3" opacity="0.2" stroke="#7FA1C3" strokeWidth="2" />
          <line x1="22" y1="6" x2="22" y2="38" stroke="#7FA1C3" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      ),
    },
    {
      title: 'Ladies’ Clothing',
      category: 'Apparel',
      desc: 'Modern silhouettes, fusion wear, elegant evening dresses, and clean everyday co-ord sets.',
      color: '#251D24',
      accent: '#D4A5B8',
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M16 8L22 14L28 8L34 16L27 24L31 38H13L17 24L10 16L16 8Z" fill="#D4A5B8" opacity="0.2" stroke="#D4A5B8" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Kids’ Clothing',
      category: 'Apparel',
      desc: 'Hypoallergenic, ultra-soft organic cotton wear designed for playful comfort and durability.',
      color: '#1C2420',
      accent: '#94B49F',
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M14 14L18 10H26L30 14L27 18L24 16V34H20V16L17 18L14 14Z" fill="#94B49F" opacity="0.2" stroke="#94B49F" strokeWidth="2" />
          <circle cx="22" cy="24" r="2" fill="#94B49F" />
        </svg>
      ),
    },
    {
      title: 'Innerwear',
      category: 'Essentials',
      desc: 'Breathable, seamless modal and combed cotton foundations offering supreme all-day comfort.',
      color: '#24211D',
      accent: '#D0B8A8',
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <rect x="10" y="16" width="24" height="18" rx="4" fill="#D0B8A8" opacity="0.2" stroke="#D0B8A8" strokeWidth="2" />
          <path d="M10 22H34" stroke="#D0B8A8" strokeWidth="1.5" />
          <path d="M18 22V34M26 22V34" stroke="#D0B8A8" strokeWidth="1" strokeOpacity="0.5" />
        </svg>
      ),
    },
    {
      title: 'Footwear',
      category: 'Lifestyle',
      desc: 'Minimalist sneakers, artisanal leather loafers, and cushioned slides built for everyday stride.',
      color: '#1B242B',
      accent: '#8EACCD',
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M8 26C12 26 16 24 20 20L28 20C32 20 36 24 36 28L8 28Z" fill="#8EACCD" opacity="0.2" stroke="#8EACCD" strokeWidth="2" />
          <rect x="6" y="28" width="32" height="6" rx="2" fill="#8EACCD" />
        </svg>
      ),
    },
    {
      title: 'Accessories',
      category: 'Lifestyle',
      desc: 'Leather wallets, structured utility totes, polarized eyewear, and modern fashion accents.',
      color: '#27231E',
      accent: '#DBC4A1',
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <rect x="10" y="16" width="24" height="20" rx="3" fill="#DBC4A1" opacity="0.2" stroke="#DBC4A1" strokeWidth="2" />
          <path d="M16 16V12C16 9.8 17.8 8 20 8H24C26.2 8 28 9.8 28 12V16" stroke="#DBC4A1" strokeWidth="2" />
          <circle cx="22" cy="24" r="2" fill="#DBC4A1" />
        </svg>
      ),
    },
  ];

  // Section 03 Philosophy Cards
  const philosophyCards = [
    {
      title: 'Current Styles',
      subtitle: 'Clean and contemporary products.',
      desc: 'Curated designs that harmonize timeless aesthetics with modern street silhouettes, keeping daily wardrobes fresh and relevant.',
    },
    {
      title: 'Quality Materials',
      subtitle: 'Focus on feel and durability.',
      desc: 'Direct textile mill partnerships ensure high thread-count yarns, color-fast dyeing, and premium tactile touch across every garment.',
    },
    {
      title: 'For Everyone',
      subtitle: 'Products across men, women and children.',
      desc: 'Thoughtfully graded inclusive sizing patterns built specifically for Indian demographic proportions and everyday comfort.',
    },
  ];

  // Section 04 QA Cards
  const qualityCards = [
    {
      title: 'Material Quality',
      desc: 'Fabric and material sourcing with certified GSM, tensile strength, and color-fastness tests.',
      step: '01',
    },
    {
      title: 'Product Testing',
      desc: 'Cosmetics and fragrance safety checks, patch test protocols, and IFRA aroma compliance.',
      step: '02',
    },
    {
      title: 'Consistent Sizing',
      desc: 'Clear, standardized Indian sizing charts and laser-aligned fit matrices.',
      step: '03',
    },
    {
      title: 'Finish Checks',
      desc: 'Rigid quality checks through production, seam inspections, and luxury boxed packaging.',
      step: '04',
    },
  ];

  return (
    <div style={{ background: '#0D0D0D', color: '#F5F5F7' }}>

      {/* SECTION 01: Koblaq Brand Introduction (Centered Luxury Logo + Slowly Appearing Silhouettes) */}
      <section style={{ padding: '7rem 0', background: 'radial-gradient(circle at center, #1C1C1F 0%, #0D0D0D 80%)', position: 'relative', overflow: 'hidden' }}>
        
        {/* Floating Subtle Ambient Silhouettes */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {/* Silhouette 1: Perfume Bottle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0.1, 0.35, 0.1], y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: '20%', left: '12%' }}
          >
            <svg width="64" height="80" viewBox="0 0 44 44" fill="none" opacity="0.6">
              <rect x="12" y="16" width="20" height="24" rx="4" stroke="#C5A059" strokeWidth="1.5" />
              <rect x="18" y="10" width="8" height="6" rx="1" fill="#C5A059" opacity="0.4" />
              <rect x="20" y="6" width="4" height="4" fill="#C5A059" opacity="0.4" />
            </svg>
          </motion.div>

          {/* Silhouette 2: Hanger / Apparel */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: [0.1, 0.4, 0.1], y: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{ position: 'absolute', top: '25%', right: '14%' }}
          >
            <svg width="80" height="60" viewBox="0 0 44 44" fill="none" opacity="0.6">
              <path d="M12 14L22 8L32 14" stroke="#D4A5B8" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M22 8V4C22 2.5 24 2 25 3" stroke="#D4A5B8" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M10 24L14 14H30L34 24L30 36H14L10 24Z" stroke="#D4A5B8" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            </svg>
          </motion.div>

          {/* Silhouette 3: Minimalist Sneaker */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: [0.1, 0.35, 0.1], x: [0, 15, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            style={{ position: 'absolute', bottom: '18%', left: '18%' }}
          >
            <svg width="70" height="50" viewBox="0 0 44 44" fill="none" opacity="0.5">
              <path d="M8 26C12 26 16 24 20 20L28 20C32 20 36 24 36 28L8 28Z" stroke="#7FA1C3" strokeWidth="1.5" />
              <rect x="6" y="28" width="32" height="4" rx="1" fill="#7FA1C3" opacity="0.4" />
            </svg>
          </motion.div>

          {/* Silhouette 4: Cosmetic Lipstick */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.1, 0.35, 0.1], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            style={{ position: 'absolute', bottom: '20%', right: '16%' }}
          >
            <svg width="60" height="70" viewBox="0 0 44 44" fill="none" opacity="0.5">
              <rect x="15" y="22" width="14" height="18" rx="2" stroke="#E09FAD" strokeWidth="1.5" />
              <path d="M17 22L20 8L24 8L27 22" fill="#E09FAD" opacity="0.4" />
            </svg>
          </motion.div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '850px', margin: '0 auto' }}
          >
            {/* Elegant Luxury Typography Wordmark replaced with actual logo */}
            <div style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', textAlign: 'left' }}>
              <div style={{ flex: '1 1 400px' }}>
                <div style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)', fontWeight: 300, letterSpacing: '0.2em', color: '#C5A059', textTransform: 'uppercase', lineHeight: 1.3 }}>
                  Lifestyle, made accessible.
                </div>
                <div style={{ width: '60px', height: '1px', background: '#C5A059', margin: '2rem 0', opacity: 0.6 }} />
                <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.85, maxWidth: '650px', fontWeight: 300 }}>
                  Koblaq brings together clothing, beauty, fragrances, footwear and everyday lifestyle products under one accessible brand.
                </p>
              </div>
              <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
                <img src="/images/koblaq/logo_cropped_6.png" alt="Koblaq Logo" style={{ height: 'auto', width: '100%', maxWidth: '450px', mixBlendMode: 'screen', opacity: 0.9, clipPath: 'inset(4px)' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 02: The Koblaq World (Visual Product Wall - 8 Cards) */}
      <section style={{ padding: '7rem 0', background: '#111113' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ width: '24px', height: '1px', background: '#C5A059' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', color: '#C5A059', textTransform: 'uppercase' }}>
                Lookbook 2026 • Product Universe
              </span>
              <span style={{ width: '24px', height: '1px', background: '#C5A059' }} />
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                marginBottom: '1rem',
              }}
            >
              The Koblaq World
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              Eight curated lifestyle collections designed with fine craftsmanship and accessible everyday elegance.
            </p>
          </div>

          {/* Product Wall Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {productWall.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: 'linear-gradient(180deg, #18181C 0%, #141416 100%)',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  border: hoveredCard === idx ? `1px solid ${item.accent}` : '1px solid rgba(255,255,255,0.07)',
                  
                  transition: 'border 300ms, box-shadow 300ms',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, fontWeight: 300, flexGrow: 1 }}>
                  {item.desc}
                </p>

                <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: item.accent, fontSize: '0.8rem', fontWeight: 600 }}>
                  <span>View Range</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03: Designed for Everyone (Brand Philosophy + 3 Cards) */}
      <section style={{ padding: '7rem 0', background: '#f5d299' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src="/images/koblaq/logo_cropped_4.png"
              alt="Koblaq Icon"
              style={{ height: '80px', marginBottom: '2rem' }}
            />
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ width: '24px', height: '1px', background: '#062c21' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', color: '#062c21', textTransform: 'uppercase' }}>
                Brand Philosophy
              </span>
              <span style={{ width: '24px', height: '1px', background: '#062c21' }} />
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: '#062c21',
                marginBottom: '1.25rem',
              }}
            >
              Quality Without Complication
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#062c21', lineHeight: 1.85, fontWeight: 300, opacity: 0.85 }}>
              Koblaq focuses on clean, current styles, quality materials and inclusive sizing for men, women and children.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {philosophyCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '3rem 2.5rem',
                  border: '1px solid rgba(6, 44, 33, 0.08)',
                }}
              >
                <div style={{ width: 36, height: 2, background: '#062c21', marginBottom: '1.75rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 300, color: '#062c21', marginBottom: '0.5rem' }}>
                  {card.title}
                </h3>
                <div style={{ fontSize: '0.9rem', color: '#062c21', fontWeight: 600, opacity: 0.7, marginBottom: '1.25rem' }}>
                  {card.subtitle}
                </div>
                <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.75 }}>
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: Quality Behind the Brand (4 Cards with Subtle Scanning Line Animation revealing ✓) */}
      <section style={{ padding: '7rem 0', background: '#141417', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ width: '24px', height: '1px', background: '#C5A059' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', color: '#C5A059', textTransform: 'uppercase' }}>
                Testing & Assurance
              </span>
              <span style={{ width: '24px', height: '1px', background: '#C5A059' }} />
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                marginBottom: '1rem',
              }}
            >
              Quality Behind the Brand
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
              Every apparel piece, cosmetic jar, and fragrance vial undergo precision quality checks before consumer release.
            </p>
          </div>

          

          {/* 4 Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {qualityCards.map((qc, i) => (
              <motion.div
                key={qc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: '#0D0D0F',
                  borderRadius: '16px',
                  padding: '2.25rem 1.75rem',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span style={{ fontSize: '0.85rem', fontWeight: 300, color: '#C5A059', marginBottom: '1rem' }}>
                  STEP {qc.step}
                </span>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 300, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  {qc.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>
                  {qc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: From Brand to Market */}
      <section className="section">
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(180deg, #111113 0%, #062C22 100%)',
              borderRadius: '24px',
              padding: '3.5rem',
              color: '#FFFFFF',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ maxWidth: '600px', position: 'relative', zIndex: 2 }}>

              <h3 className="text-h3" style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>
                Built as a Brand. Supported by a Business.
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                Koblaq creates the design, fragrance, and lifestyle allure — while Biskore’s unified logistics infrastructure moves products into regional stores and direct-to-consumer networks pan-India.
              </p>
            </div>

            <Link
              href="/contact"
              style={{
                padding: '1.1rem 2.25rem',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '100px',
                background: '#FFFFFF',
                color: '#0D0D0D',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                position: 'relative',
                zIndex: 2,
              }}
            >
              Inquire Retail Partnerships
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
