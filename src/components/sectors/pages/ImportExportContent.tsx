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

export default function ImportExportContent({ sector }: SectorProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Section 02: 3 Large Product Cards
  const categories = [
    {
      title: 'TOYS',
      subtitle: 'Educational, recreational and infant toys.',
      tags: ['Educational Kits', 'Infant Care', 'Recreational Toys', 'Safety Certified'],
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          {/* Toy Train / Blocks Graphic */}
          <rect x="6" y="24" width="18" height="14" rx="2" fill="#1565C0" />
          <polygon points="12,14 18,14 22,24 8,24" fill="#42A5F5" />
          <rect x="26" y="16" width="16" height="22" rx="2" fill="#1E88E5" />
          <circle cx="11" cy="40" r="4" fill="#0D47A1" />
          <circle cx="19" cy="40" r="4" fill="#0D47A1" />
          <circle cx="31" cy="40" r="4" fill="#0D47A1" />
          <circle cx="39" cy="40" r="4" fill="#0D47A1" />
          <line x1="24" y1="32" x2="26" y2="32" stroke="#90CAF9" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: 'ELECTRONICS',
      subtitle: 'Consumer electronics, gadgets and accessories.',
      tags: ['Smart Accessories', 'Audio & Sound', 'Power Devices', 'BIS Compliant'],
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          {/* Modern Gadget / Smartphone / Chip Graphic */}
          <rect x="12" y="8" width="24" height="34" rx="4" fill="#0D47A1" />
          <rect x="15" y="13" width="18" height="22" rx="1" fill="#64B5F6" />
          <circle cx="24" cy="38" r="2" fill="#90CAF9" />
          <path d="M21 10H27" stroke="#90CAF9" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="31" cy="20" r="1.5" fill="#FFF" />
        </svg>
      ),
    },
    {
      title: 'HOME APPLIANCES',
      subtitle: 'Kitchen and household appliances.',
      tags: ['Kitchen Essentials', 'Climate Devices', 'Cleaning Tech', 'Energy Efficient'],
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          {/* Modern Kitchen Appliance / Blender Graphic */}
          <rect x="16" y="22" width="16" height="18" rx="2" fill="#1976D2" />
          <path d="M18 12H30L28 22H20L18 12Z" fill="#90CAF9" opacity="0.8" />
          <path d="M24 6V12" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="31" r="3" fill="#FFF" />
          <rect x="14" y="40" width="20" height="3" rx="1.5" fill="#0D47A1" />
        </svg>
      ),
    },
  ];

  // Section 03 Steps
  const tradeSteps = [
    { num: '01', title: 'Supplier', desc: 'Vetted global manufacturing partners with audited facilities.' },
    { num: '02', title: 'Procurement', desc: 'Direct contract negotiation, volume allocation and foreign compliance.' },
    { num: '03', title: 'Shipping', desc: 'Containerized ocean freight and international airway bill handling.' },
    { num: '04', title: 'Customs', desc: 'End-to-end import clearances, BIS duty payments and port de-stuffing.' },
    { num: '05', title: 'Distribution', desc: 'Biskore domestic logistics fleet dispatching to wholesale & retail networks.' },
  ];

  // Section 05 Cards
  const confidenceCards = [
    {
      title: 'Supplier Vetting',
      desc: 'Rigorous background scrutiny, international production facility audits, and ethical sourcing certifications before order placement.',
      badge: 'Certified Origin',
    },
    {
      title: 'Quality Inspection',
      desc: 'Multi-stage batch testing at port of origin and port of discharge, ensuring 100% compliance with Indian safety and BIS standards.',
      badge: 'Multi-Stage QA',
    },
    {
      title: 'Documentation & Compliance',
      desc: 'Comprehensive handling of customs manifests, tariff codes, regulatory declarations, and seamless clearance at major Indian gateways.',
      badge: 'Zero Legal Lag',
    },
  ];

  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D' }}>

      {/* SECTION 01: Global Trade (World Map + Source Points Lighting up -> Route to India) */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Left Column Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ width: '28px', height: '2px', background: '#1976D2' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', color: '#1976D2', textTransform: 'uppercase' }}>
                  Section 01 • Global Inflow
                </span>
              </div>
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
                Connecting Markets Across Borders
              </h2>
              <p style={{
                  fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                  color: '#555',
                  lineHeight: 1.85, fontWeight: 300,
                  marginBottom: '2rem',
                }}
              >
                Biskore sources quality consumer goods from international manufacturers and supplies them through domestic wholesale and retail channels.
              </p>

              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 300, color: '#1565C0' }}>100%</div>
                  <div style={{ fontSize: '0.85rem', color: '#555', fontWeight: 600 }}>Regulatory Compliance</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 300, color: '#1565C0' }}>Pan-India</div>
                  <div style={{ fontSize: '0.85rem', color: '#555', fontWeight: 600 }}>Port-to-Store Logistics</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Animated World Map with Source Points & Route to India */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #0A192F 0%, #0F2A4A 100%)',
                borderRadius: '24px',
                padding: '2.5rem 2rem',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#64B5F6', fontWeight: 700, letterSpacing: '0.1em' }}>
                  GLOBAL MARITIME & AIR CORRIDORS
                </span>
                <span style={{ fontSize: '0.75rem', color: '#4CAF50', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4CAF50' }} />
                  Live Trade Lanes
                </span>
              </div>

              <svg viewBox="0 0 500 280" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
                {/* Simplified Continents Silhouette */}
                {/* North America */}
                <path d="M40 50 Q70 30 110 50 Q130 90 100 130 Q70 120 40 90 Z" fill="rgba(255,255,255,0.08)" />
                {/* Europe */}
                <path d="M220 40 Q260 30 280 60 Q260 80 230 75 Z" fill="rgba(255,255,255,0.08)" />
                {/* East Asia */}
                <path d="M360 50 Q430 40 450 90 Q420 140 370 110 Z" fill="rgba(255,255,255,0.08)" />
                {/* Southeast Asia */}
                <path d="M370 140 Q410 150 400 180 Q360 170 370 140 Z" fill="rgba(255,255,255,0.08)" />
                {/* India Silhouette highlighted */}
                <path
                  d="M305 110 L330 115 L325 155 L315 170 L305 145 Z"
                  fill="rgba(33, 150, 243, 0.4)"
                  stroke="#2196F3"
                  strokeWidth="1.5"
                />

                {/* Pulsing Source Point 1: East Asia (Manufacturing Hub) */}
                <g transform="translate(410, 80)">
                  <motion.circle
                    r="8"
                    fill="#2196F3"
                    initial={{ scale: 0.8, opacity: 0.4 }}
                    animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                  <circle cx="0" cy="0" r="5" fill="#64B5F6" />
                  <text x="0" y="-10" textAnchor="middle" fill="#90CAF9" fontSize="9" fontWeight="700">East Asia</text>
                </g>

                {/* Pulsing Source Point 2: Europe */}
                <g transform="translate(245, 55)">
                  <motion.circle
                    r="8"
                    fill="#2196F3"
                    initial={{ scale: 0.8, opacity: 0.4 }}
                    animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
                  />
                  <circle cx="0" cy="0" r="5" fill="#64B5F6" />
                  <text x="0" y="-10" textAnchor="middle" fill="#90CAF9" fontSize="9" fontWeight="700">Europe</text>
                </g>

                {/* Animated Route 1: East Asia -> India */}
                <path
                  d="M410 80 Q370 150 318 145"
                  fill="none"
                  stroke="rgba(33, 150, 243, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <motion.path
                  d="M410 80 Q370 150 318 145"
                  fill="none"
                  stroke="#00E5FF"
                  strokeWidth="2.5"
                  strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [40, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />

                {/* Animated Route 2: Europe -> India */}
                <path
                  d="M245 55 Q260 110 315 140"
                  fill="none"
                  stroke="rgba(33, 150, 243, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <motion.path
                  d="M245 55 Q260 110 315 140"
                  fill="none"
                  stroke="#64B5F6"
                  strokeWidth="2.5"
                  strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [40, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                />

                {/* Destination Node: India (Target) */}
                <g transform="translate(316, 145)">
                  <motion.circle
                    r="12"
                    fill="#FFB71D"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0.2, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <circle cx="0" cy="0" r="6" fill="#FFB71D" />
                  <text x="0" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
                    INDIA (BISKORE)
                  </text>
                </g>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 02: What We Trade (3 Large Cards with Slide-In Product SVGs) */}
      <section style={{ padding: '7rem 0', background: '#F8F7F4' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '24px', height: '2px', background: '#1976D2' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', color: '#1976D2', textTransform: 'uppercase' }}>
                Section 02 • Core Import Verticals
              </span>
              <span style={{ width: '24px', height: '2px', background: '#1976D2' }} />
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: '#0D0D0D',
                marginBottom: '1rem',
              }}
            >
              What We Trade
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#555', lineHeight: 1.7 }}>
              Structured procurement across three key consumer durable categories with strict quality benchmarks.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, }}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '3rem 2.5rem',
                  border: activeCard === idx ? '1.5px solid #1976D2' : '1px solid rgba(0,0,0,0.07)',
                  transition: 'border 250ms, box-shadow 250ms',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Animated Slide-in SVG icon */}
                <motion.div
                  animate={{ x: activeCard === idx ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: '16px',
                    background: '#F0F5FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '2rem',
                    border: '1px solid rgba(25, 118, 210, 0.12)',
                  }}
                >
                  {cat.icon}
                </motion.div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 300, color: '#0D0D0D', marginBottom: '0.75rem', letterSpacing: '-0.03em' }}>
                  {cat.title}
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.75, fontWeight: 300, marginBottom: '2rem' }}>
                  {cat.subtitle}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#1565C0',
                        background: '#E3F2FD',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '6px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03: How International Trade Works (5 Steps with Container Ship -> Truck Transition) */}
      <section style={{ padding: '7rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '24px', height: '2px', background: '#1976D2' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', color: '#1976D2', textTransform: 'uppercase' }}>
                Section 03 • 5-Stage Protocol
              </span>
              <span style={{ width: '24px', height: '2px', background: '#1976D2' }} />
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: '#0D0D0D',
                marginBottom: '1rem',
              }}
            >
              How International Trade Works
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#555', lineHeight: 1.7 }}>
              From factory floor overseas to wholesale shelves across Indian states.
            </p>
          </div>

          {/* Interactive Visual Progression Track: Ship moves at Shipping, Transitions to Truck at Distribution */}
          <div
            style={{
              background: '#F0F5FF',
              borderRadius: '24px',
              padding: '2.5rem',
              border: '1px solid rgba(25, 118, 210, 0.12)',
              marginBottom: '3.5rem',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0D47A1' }}>
                CARGO LIFECYCLE: FACTORY → SEA VOYAGE → CUSTOMS → TRUCK FLEET
              </span>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1565C0' }}>
                End-to-End Custody
              </span>
            </div>

            <svg viewBox="0 0 900 130" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
              {/* Connecting rail */}
              <line x1="50" y1="65" x2="850" y2="65" stroke="#BBDEFB" strokeWidth="4" strokeLinecap="round" />
              
              {/* Sea Section representation */}
              <rect x="360" y="55" width="220" height="20" fill="#E3F2FD" rx="4" />
              <path d="M370 70 Q390 75 410 70 T450 70 T490 70 T530 70 T570 70" fill="none" stroke="#2196F3" strokeWidth="2" />

              {/* 5 Nodes */}
              {tradeSteps.map((step, idx) => {
                const xPos = 90 + idx * 180;
                return (
                  <g key={step.num} transform={`translate(${xPos}, 65)`}>
                    <circle cx="0" cy="0" r="14" fill="#FFFFFF" stroke="#1976D2" strokeWidth="3" />
                    <circle cx="0" cy="0" r="5" fill="#1976D2" />
                    <text x="0" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0A2540">
                      {step.title}
                    </text>
                  </g>
                );
              })}

              {/* ANIMATED CARGO TRANSIT: SHIP ON OCEAN (Steps 2-3) -> CONTAINER TRANSFERS -> TRUCK (Steps 4-5) */}
              <motion.g
                animate={{ x: [80, 820] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Ship Graphic (Active when in ocean sector 360-580) */}
                <g transform="translate(-25, 20)">
                  {/* Container Box */}
                  <rect x="0" y="5" width="30" height="18" rx="2" fill="#1565C0" stroke="#0D47A1" strokeWidth="1.5" />
                  <line x1="10" y1="5" x2="10" y2="23" stroke="#FFF" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="20" y1="5" x2="20" y2="23" stroke="#FFF" strokeWidth="1" strokeOpacity="0.5" />
                  <text x="15" y="17" textAnchor="middle" fill="#FFF" fontSize="7" fontWeight="700">BISKORE</text>
                </g>
              </motion.g>
            </svg>
          </div>

          {/* 5 Step Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {tradeSteps.map((s, idx) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '2rem 1.5rem',
                  border: '1px solid rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span style={{ fontSize: '1.25rem', fontWeight: 300, color: '#90CAF9', marginBottom: '1rem' }}>
                  {s.num}
                </span>
                <h4 style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', fontWeight: 300, color: '#0D0D0D', marginBottom: '0.6rem' }}>
                  {s.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: From Port to Market (Visual Flow: SHIP -> INDIA -> TRUCK -> BUYER with Container Transfer) */}
      <section style={{ padding: '7rem 0', background: '#0A192F', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4.5rem' }}>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(33, 150, 243, 0.15)',
                color: '#64B5F6',
                padding: '0.35rem 1.2rem',
                borderRadius: '100px',
                fontSize: '0.8rem', fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Section 04 • Maritime to Hinterland
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
              }}
            >
              From Port to Market
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
              From port of entry to the final delivery point, Biskore coordinates logistics throughout the journey.
            </p>
          </div>

          {/* Sequential Visual Stack: SHIP -> INDIA -> TRUCK -> BUYER */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
              position: 'relative',
              marginBottom: '4rem',
            }}
          >
            {/* Step 1: SHIP */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '20px',
                padding: '2.5rem 2rem',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
              }}
            >
              <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                  <path d="M5 25L15 35H45L55 25Z" fill="#1E88E5" />
                  <rect x="20" y="15" width="20" height="10" fill="#64B5F6" rx="2" />
                  <line x1="30" y1="5" x2="30" y2="15" stroke="#FFF" strokeWidth="2" />
                  <polygon points="30,5 38,8 30,11" fill="#FFB71D" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 300, color: '#64B5F6', marginBottom: '0.5rem' }}>SHIP</h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Ocean freight docks at Indian deepwater terminals</p>
            </motion.div>

            {/* Step 2: INDIA CUSTOMS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '20px',
                padding: '2.5rem 2rem',
                border: '1px solid rgba(33, 150, 243, 0.4)',
                textAlign: 'center',
              }}
            >
              <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" stroke="#4CAF50" strokeWidth="2.5" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 300, color: '#FFFFFF', marginBottom: '0.5rem' }}>INDIA ENTRY</h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Port de-stuffing & expedited customs clearance</p>
            </motion.div>

            {/* Step 3: TRUCK */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '20px',
                padding: '2.5rem 2rem',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
              }}
            >
              <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                  <rect x="5" y="10" width="35" height="22" rx="2" fill="#1565C0" />
                  <polygon points="40,16 48,16 54,23 54,32 40,32" fill="#0D47A1" />
                  <circle cx="15" cy="33" r="4" fill="#FFF" />
                  <circle cx="32" cy="33" r="4" fill="#FFF" />
                  <circle cx="48" cy="33" r="4" fill="#FFF" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 300, color: '#64B5F6', marginBottom: '0.5rem' }}>TRUCK</h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Transferred to Biskore All-India Permit fleet</p>
            </motion.div>

            {/* Step 4: BUYER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '20px',
                padding: '2.5rem 2rem',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
              }}
            >
              <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#FFB71D" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 300, color: '#FFB71D', marginBottom: '0.5rem' }}>BUYER</h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Doorstep delivery to distributors and retailers</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 05: Trade With Confidence (3 Cards: Supplier Vetting, Quality Inspection, Documentation & Compliance) */}
      <section style={{ padding: '7rem 0', background: '#F8F7F4' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '24px', height: '2px', background: '#1976D2' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', color: '#1976D2', textTransform: 'uppercase' }}>
                Section 05 • Risk Mitigation
              </span>
              <span style={{ width: '24px', height: '2px', background: '#1976D2' }} />
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: '#0D0D0D',
                marginBottom: '1rem',
              }}
            >
              Trade With Confidence
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#555', lineHeight: 1.7 }}>
              Every shipment is supported by structured sourcing, inspection, documentation and distribution.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem',
            }}
          >
            {confidenceCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '3rem 2.5rem',
                  border: '1px solid rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      background: '#E3F2FD',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="2.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M9 15l2 2 4-4" stroke="#4CAF50" />
                    </svg>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1565C0', background: '#E3F2FD', padding: '0.35rem 0.85rem', borderRadius: '100px' }}>
                    {card.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 300, color: '#0D0D0D', marginBottom: '1rem' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.85, fontWeight: 300, flexGrow: 1 }}>
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Trade CTA Bar */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0A2540 0%, #1565C0 100%)',
              borderRadius: '24px',
              padding: '3.5rem',
              color: '#FFFFFF',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            <div style={{ maxWidth: '600px' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 300, marginBottom: '0.75rem' }}>
                Partner on International Procurement
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                Looking to import consumer electronics, toys, or home appliances with seamless customs and pan-India delivery?
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
              }}
            >
              Initiate Trade Inquiry
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
