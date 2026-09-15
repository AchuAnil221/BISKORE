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

export default function TastecoreContent({ sector }: SectorProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Section 02: 6 Visual Cards
  const foodProducts = [
    {
      title: 'Spices',
      category: 'Culinary Essentials',
      desc: 'Everyday spices, fragrant masalas, and regional spice mixes blended for bold aromatic authenticity.',
      badge: <span style={{display: 'flex', alignItems: 'center', gap: '4px'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg> Fresh Ground</span>,
      accent: '#E64A19',
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="18" fill="#FBE9E7" />
          <path d="M22 10C16 10 14 18 14 24C14 30 18 34 22 34C26 34 30 30 30 24C30 18 28 10 22 10Z" fill="#E64A19" />
          <path d="M22 6V12" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Whole Spices',
      category: 'Unprocessed Purity',
      desc: 'Premium whole cardamom, star anise, black pepper, and cloves sourced directly from mountain estates.',
      badge: 'Estate Grade',
      accent: '#D84315',
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="18" fill="#FFF3E0" />
          {/* Star Anise shape */}
          <polygon points="22,10 24,18 32,18 26,23 28,31 22,26 16,31 18,23 12,18 20,18" fill="#BF360C" />
        </svg>
      ),
    },
    {
      title: 'Breakfast',
      category: 'Morning Energy',
      desc: 'Rolled oats, nutrient-dense breakfast cereals, roasted muesli, and instant multigrain mixes.',
      badge: 'High Fiber',
      accent: '#F57C00',
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="18" fill="#FFF8E1" />
          <path d="M12 24C12 29.5 16.5 34 22 34C27.5 34 32 29.5 32 24H12Z" fill="#FFA000" />
          <line x1="16" y1="18" x2="20" y2="24" stroke="#795548" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="16" x2="22" y2="24" stroke="#795548" strokeWidth="2" strokeLinecap="round" />
          <line x1="28" y1="18" x2="24" y2="24" stroke="#795548" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Soft Drinks',
      category: 'Refreshment',
      desc: 'Crisp carbonated fruit beverages, botanical fizz, and flavoured sparkling drinks made with pure cane sugar.',
      badge: 'Carbonated Fizz',
      accent: '#EF6C00',
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="18" fill="#FFF3E0" />
          <rect x="18" y="14" width="8" height="22" rx="2" fill="#F57C00" />
          <rect x="20" y="8" width="4" height="6" fill="#E65100" />
          <circle cx="22" cy="22" r="1.5" fill="#FFF" />
          <circle cx="20" cy="27" r="1" fill="#FFF" />
        </svg>
      ),
    },
    {
      title: 'Juices',
      category: 'Cold Pressed',
      desc: 'Pure packaged fruit juices, tropical blends, and mango pulps packed with natural vitamins and zero artificial preservatives.',
      badge: '100% Real Pulp',
      accent: '#FB8C00',
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="18" fill="#FFF3E0" />
          <path d="M15 14H29L27 34H17L15 14Z" fill="#FF9800" />
          <path d="M22 8L26 14" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Packaged Foods',
      category: 'Ready to Cook',
      desc: 'Crisp traditional snacks, namkeens, extruded savoury bites, and wholesome convenience foods.',
      badge: 'Everyday Snacking',
      accent: '#689F38',
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="18" fill="#F1F8E9" />
          <rect x="14" y="14" width="16" height="20" rx="3" fill="#8BC34A" />
          <path d="M14 20L22 14L30 20" stroke="#558B2F" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  // Section 03 Packaging Lifecycle Steps
  const packagingFlow = [
    { title: 'INGREDIENT', desc: 'Sourced from agricultural cooperatives and verified spice growers.' },
    { title: 'PRODUCT', desc: 'Precision blending and cryogenic grinding to preserve volatile oils.' },
    { title: 'PACKAGE', desc: 'Hermetically sealed food-grade moisture barrier foil packaging.' },
    { title: 'READY', desc: 'Batch-coded, nutritional stamped, and dispatch-approved for mandis & retail.' },
  ];

  // Section 04 Promise Cards
  const promiseCards = [
    {
      title: 'Consistent Taste',
      subtitle: 'Consistent standards across products.',
      desc: 'Every single jar, sachet, and bottle is calibrated against sensory reference profiles so your family enjoys identical flavor profiles year-round.',
      color: '#E64A19',
    },
    {
      title: 'Freshness & Hygiene',
      subtitle: 'Focus on product freshness and hygiene.',
      desc: 'Automated clean-room packing lines, stainless steel storage silos, and tamper-evident induction seals ensure untouched hygiene.',
      color: '#2E7D32',
    },
    {
      title: 'Clear Labelling',
      subtitle: 'Accurate ingredients and shelf-life information.',
      desc: '100% transparent ingredient disclosures, clear allergen advice, authentic nutritional breakdowns, and verifiable manufacturing dates.',
      color: '#F57C00',
    },
  ];

  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D' }}>

      {/* SECTION 01: Tastecore Introduction (Warm & Food-Focused with Spice -> Multiple Products Animation) */}
      <section style={{ padding: '6rem 0', background: '#FFF9F5', borderBottom: '1px solid rgba(230, 74, 25, 0.08)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              
              <h2
                style={{
                  fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.12,
                  color: '#0D0D0D',
                  marginBottom: '1.75rem',
                }}
              >
                Good Food. Made Consistent.
              </h2>
              <p style={{
                  fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                  color: '#555',
                  lineHeight: 1.85, fontWeight: 300,
                  marginBottom: '2rem',
                }}
              >
                Tastecore brings quality food and beverage products to everyday consumers, with a focus on taste consistency, freshness and reliable quality.
              </p>

              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#E64A19' }} />
                  <span style={{ fontWeight: 600, color: '#BF360C' }}>Pure Spices & Blends</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#E64A19' }} />
                  <span style={{ fontWeight: 600, color: '#BF360C' }}>Natural Juices & Breakfast</span>
                </div>
              </div>
            </motion.div>

            {/* Right: One Spice/Ingredient Graphic Multiplying into Multiple Food Products */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
                borderRadius: '24px',
                padding: '3rem 2rem',
                border: '1px solid rgba(230, 74, 25, 0.15)',
                overflow: 'hidden',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', color: '#D84315', marginBottom: '1.5rem' }}>
                SPICE HARVEST → PRODUCT EVOLUTION
              </div>

              <svg viewBox="0 0 450 260" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
                {/* Central Raw Spice Blossom */}
                <g transform="translate(225, 130)">
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: 'center' }}
                  >
                    <circle cx="0" cy="0" r="28" fill="#BF360C" opacity="0.15" />
                    <polygon points="0,-18 5,-5 18,-5 8,4 12,18 0,10 -12,18 -8,4 -18,-5 -5,-5" fill="#D84315" />
                  </motion.g>
                </g>

                {/* Branching Pulses: Multiplying into Products */}
                {/* Product 1: Spice Sachet (Top Left) */}
                <g transform="translate(225, 130)">
                  <motion.g
                    initial={{ x: -120, y: -60 }}
                    animate={{ x: -35, y: -20 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                  >
                    <rect x="-16" y="-20" width="32" height="40" rx="3" fill="#E64A19" />
                    <text x="0" y="5" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="700">SPICE</text>
                  </motion.g>
                </g>

                {/* Product 2: Juice Bottle (Top Right) */}
                <g transform="translate(225, 130)">
                  <motion.g
                    initial={{ x: 120, y: -60 }}
                    animate={{ x: 35, y: -20 }}
                    transition={{ duration: 2.2, repeat: Infinity, repeatType: 'reverse', delay: 0.2 }}
                  >
                    <rect x="-10" y="-22" width="20" height="38" rx="2" fill="#FFA000" />
                    <rect x="-5" y="-28" width="10" height="6" fill="#FF8F00" />
                    <text x="0" y="2" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="700">JUICE</text>
                  </motion.g>
                </g>

                {/* Product 3: Breakfast Cereal Box (Bottom Left) */}
                <g transform="translate(225, 130)">
                  <motion.g
                    initial={{ x: -110, y: 55 }}
                    animate={{ x: -35, y: 20 }}
                    transition={{ duration: 2.4, repeat: Infinity, repeatType: 'reverse', delay: 0.4 }}
                  >
                    <rect x="-18" y="-18" width="36" height="36" rx="3" fill="#F57C00" />
                    <text x="0" y="4" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="700">OATS</text>
                  </motion.g>
                </g>

                {/* Product 4: Soft Drink Soda Can (Bottom Right) */}
                <g transform="translate(225, 130)">
                  <motion.g
                    initial={{ x: 110, y: 55 }}
                    animate={{ x: 35, y: 20 }}
                    transition={{ duration: 2.1, repeat: Infinity, repeatType: 'reverse', delay: 0.6 }}
                  >
                    <rect x="-12" y="-20" width="24" height="40" rx="4" fill="#EF6C00" />
                    <text x="0" y="4" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="700">SODA</text>
                  </motion.g>
                </g>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 02: Tastecore Product World (6 Visual Cards with floating animations) */}
      <section className="mobile-squish" style={{ padding: '7rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4.5rem' }}>
            
            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: '#0D0D0D',
                marginBottom: '1rem',
              }}
            >
              Tastecore Product World
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#555', lineHeight: 1.7 }}>
              Six household food staples produced with rigorous recipe fidelity and natural taste.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {foodProducts.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  border: hoveredCard === idx ? `1.5px solid ${p.accent}` : '1px solid rgba(0,0,0,0.08)',
                  transition: 'all 250ms ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                className="mobile-card-squish"
              >


                <div style={{ fontSize: '0.8rem', color: '#888', fontWeight: 600, marginBottom: '0.35rem' }}>
                  {p.category}
                </div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 300, color: '#212121', marginBottom: '0.75rem' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.85, fontWeight: 300, flexGrow: 1 }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03: From Ingredient to Product (Realistic Packaging Flow: INGREDIENT -> PRODUCT -> PACKAGE -> READY) */}
      <section className="mobile-squish" style={{ padding: '7rem 0', background: '#F8F7F4' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4.5rem' }}>
            
            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: '#0D0D0D',
                marginBottom: '1rem',
              }}
            >
              From Ingredient to Product
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#555', lineHeight: 1.7 }}>
              Tastecore works with quality ingredient suppliers and production partners to maintain consistent standards from batch to batch.
            </p>
          </div>

          {/* Sequential 4-Step Packaging Lifecycle Animation */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '2.5rem',
              border: '1px solid rgba(230, 74, 25, 0.12)',
              marginBottom: '3.5rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0D0D0D' }}>
                AUTOMATED PRODUCTION & PACKAGING PIPELINE
              </span>
            </div>

            <svg viewBox="0 0 800 120" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
              {/* Conveyor Belt track */}
              <line x1="60" y1="60" x2="740" y2="60" stroke="#E0E0E0" strokeWidth="4" />
              <line x1="60" y1="60" x2="740" y2="60" stroke="#FF5722" strokeWidth="4" strokeDasharray="10 10" />

              {/* 4 Stations */}
              {packagingFlow.map((flow, i) => {
                const xPos = 100 + i * 200;
                return (
                  <g key={flow.title} transform={`translate(${xPos}, 60)`}>
                    <circle cx="0" cy="0" r="15" fill="#FFF3E0" stroke="#E64A19" strokeWidth="3" />
                    <circle cx="0" cy="0" r="6" fill="#E64A19" />
                    <text x="0" y="32" textAnchor="middle" fontSize="12" fontWeight="800" fill="#BF360C">
                      {flow.title}
                    </text>
                  </g>
                );
              })}

              {/* Moving Ingredient Container along the line */}
              <motion.g
                animate={{ x: [80, 700] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              >
                <g transform="translate(-16, 25)">
                  {/* Container Jar / Pouch */}
                  <rect x="0" y="0" width="28" height="24" rx="3" fill="#E64A19" />
                  <rect x="5" y="-5" width="18" height="5" rx="1" fill="#BF360C" />
                  <line x1="6" y1="12" x2="22" y2="12" stroke="#FFF" strokeWidth="1.5" />
                </g>
              </motion.g>
            </svg>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {packagingFlow.map((f, idx) => (
              <div
                key={f.title}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '2rem 1.5rem',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}
                className="mobile-card-squish"
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 300, color: '#E64A19', marginBottom: '0.5rem' }}>
                  PHASE 0{idx + 1}
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 300, color: '#212121', marginBottom: '0.5rem' }}>
                  {f.title}
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: The Tastecore Promise (3 Big Cards + Package Scanner Animation) */}
      <section className="mobile-squish" style={{ padding: '7rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
            
            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: '#0D0D0D',
                marginBottom: '1rem',
              }}
            >
              The Tastecore Promise
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#555', lineHeight: 1.7 }}>
              Uncompromising benchmarks across every single SKU delivered to Indian tables.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {promiseCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '3rem 2.5rem',
                  border: '1px solid rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                className="mobile-card-squish"
              >
                <h3 style={{ fontSize: '1.5rem', fontWeight: 300, color: '#0D0D0D', marginBottom: '0.5rem' }}>
                  {card.title}
                </h3>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0D0D0D', marginBottom: '1.25rem' }}>
                  {card.subtitle}
                </div>
                <p style={{ fontSize: '1rem', color: '#0D0D0D', lineHeight: 1.85, fontWeight: 300, flexGrow: 1 }}>
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: Ready for the Market */}
      <section className="section">
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #FF9800 0%, #E65100 100%)',
              borderRadius: '24px',
              padding: '3.5rem',
              color: '#FFFFFF',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
              marginBottom: '3rem',
              overflow: 'hidden',
            }}
            className="mobile-card-squish"
          >
            <div style={{ maxWidth: '600px', position: 'relative', zIndex: 2 }}>

              <h3 className="text-h3" style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>
                From Our Products to Everyday Tables
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                Tastecore blends and packages high-demand consumer foods, while Biskore Logistics guarantees timely multi-city supermarket and retail store replenishment.
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
              Distribute Tastecore Products
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
