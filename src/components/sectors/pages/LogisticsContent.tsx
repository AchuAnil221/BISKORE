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

export default function LogisticsContent({ sector }: SectorProps) {
  const [selectedService, setSelectedService] = useState<number>(0);

  // Section 02 Services (5 primary + 1 smaller sixth card)
  const services = [
    {
      title: 'All India Permit Fleet',
      desc: 'National permit compliance for uninterrupted long-haul cargo movement across state borders without interstate clearance friction.',
      badge: 'National Permit',
      cargoType: 'national',
    },
    {
      title: 'Fresh Produce Transport',
      desc: 'Refrigerated and temperature-controlled trucks built specifically for fresh vegetables, fruits, and cold-chain cargo.',
      badge: 'Cold Chain',
      cargoType: 'coldchain',
    },
    {
      title: 'General Freight',
      desc: 'High-cube containers and open-top carriers transporting durable consumer goods, electronics, and commercial inventory.',
      badge: 'Dry Container',
      cargoType: 'general',
    },
    {
      title: 'Last-Mile Delivery',
      desc: 'Agile medium & light commercial vehicles (LCVs) managing urban distribution into retail markets and distribution centers.',
      badge: 'Metro Transit',
      cargoType: 'lastmile',
    },
    {
      title: 'Dedicated Route Services',
      desc: 'Fixed-frequency milk-run logistics contracts connecting established origin-destination pairs on strict timetables.',
      badge: 'Scheduled Runs',
      cargoType: 'scheduled',
    },
    {
      title: 'External Client Services',
      desc: 'Third-party transport and contract logistics solutions for corporate enterprises, manufacturers, and trade houses.',
      badge: 'Corporate 3PL',
      cargoType: 'external',
      isSmall: true,
    },
  ];

  // Section 03 Delivery Process Steps
  const deliveryStages = [
    { code: '01', title: 'ORDER', icon: <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>, desc: 'Booking entry, cargo specs & documentation clearance.' },
    { code: '02', title: 'ROUTE PLAN', icon: <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>, desc: 'AI-assisted route optimization & driver allocation.' },
    { code: '03', title: 'DISPATCH', icon: <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>, desc: 'Depot loading, cargo lock & vehicle departure.' },
    { code: '04', title: 'LIVE TRACKING', icon: <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, desc: 'Real-time GPS telemetry & en-route temperature logs.' },
    { code: '05', title: 'POD', icon: <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>, desc: 'Digital Proof of Delivery, geo-tagged handover & closing.' },
  ];

  // Section 05: Why Biskore Logistics
  const whyCards = [
    {
      title: 'Direct Control',
      subtitle: 'Own fleet and delivery schedules.',
      desc: 'We own, maintain, and dispatch our vehicles directly. No dependency on unvetted broker networks or erratic market trucks.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF9800" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: 'Time-Sensitive Experience',
      subtitle: 'Experience moving perishable goods.',
      desc: 'Decades of collective experience handling high-spoilage agro-produce and temperature-critical goods under urgent deadlines.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF9800" strokeWidth="2">
          <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
        </svg>
      ),
    },
    {
      title: 'Group Infrastructure',
      subtitle: 'Supports Biskore’s own sectors.',
      desc: 'Shared operational backbone moving goods seamlessly across Fresh Produce, International Trade, Koblaq, and Tastecore.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF9800" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      title: 'External Clients',
      subtitle: 'Transport services for businesses.',
      desc: 'Extending industrial-grade freight capacity and reliable route logistics to leading third-party manufacturers and distributors.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF9800" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <div style={{ background: '#F8F7F4', color: '#0D0D0D' }}>

      {/* SECTION 01: Logistics Introduction (Industrial & Precise + Truck Departing Biskore Facility) */}
      <section style={{ padding: '6rem 0', background: '#F8F7F4', borderBottom: '1px solid rgba(255, 152, 0, 0.15)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ width: '28px', height: '2px', background: '#FF9800' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', color: '#FF9800', textTransform: 'uppercase' }}>
                  Section 01 • Interstate Transport
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
                Moving Business Across India
              </h2>
              <p style={{
                  fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                  color: '#555555',
                  lineHeight: 1.85, fontWeight: 300,
                  marginBottom: '2.5rem',
                }}
              >
                Biskore Logistics operates a pan-India transport and distribution network with an All India Permit fleet, supporting both group operations and external clients.
              </p>

              <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 300, color: '#FF9800' }}>All-India</div>
                  <div style={{ fontSize: '0.85rem', color: '#666666' }}>National Permit Vehicles</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 300, color: '#FF9800' }}>24/7</div>
                  <div style={{ fontSize: '0.85rem', color: '#666666' }}>GPS Telemetry & Dispatch</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Truck Beside Biskore Logistics Building Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF5EA 100%)',
                borderRadius: '24px',
                padding: '2.5rem 2rem',
                border: '1px solid rgba(255, 152, 0, 0.2)',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#FF9800' }}>
                  CENTRAL DEPOT DEPARTURE
                </span>
                <span style={{ fontSize: '0.75rem', color: '#4CAF50', fontWeight: 600 }}>● Gate Status: Clear</span>
              </div>

              <svg viewBox="0 0 500 280" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
                {/* Night Sky Grid background */}
                <path d="M0 50H500M0 100H500M0 150H500" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />

                {/* Left: Modern Biskore Logistics Building Depot */}
                <g transform="translate(30, 40)">
                  <rect x="0" y="20" width="130" height="150" rx="4" fill="#FFFFFF" stroke="#FFE0B2" strokeWidth="2" />
                  <rect x="15" y="35" width="100" height="25" rx="2" fill="#FFF0DF" />
                  <text x="65" y="52" textAnchor="middle" fill="#FF9800" fontSize="11" fontWeight="800" letterSpacing="2">
                    BISKORE
                  </text>
                  <text x="65" y="80" textAnchor="middle" fill="#666666" fontSize="8" letterSpacing="1">
                    LOGISTICS HUB
                  </text>
                  {/* Bay Doors */}
                  <rect x="15" y="100" width="40" height="70" fill="#FFF0DF" stroke="#FFCC80" strokeWidth="1" />
                  <line x1="15" y1="120" x2="55" y2="120" stroke="#FFE0B2" strokeWidth="1" />
                  <line x1="15" y1="140" x2="55" y2="140" stroke="#FFE0B2" strokeWidth="1" />

                  <rect x="75" y="100" width="40" height="70" fill="#FFF0DF" stroke="#FFCC80" strokeWidth="1" />
                  <line x1="75" y1="120" x2="115" y2="120" stroke="#FFE0B2" strokeWidth="1" />
                  <line x1="75" y1="140" x2="115" y2="140" stroke="#FFE0B2" strokeWidth="1" />
                </g>

                {/* Highway Road Line */}
                <rect x="0" y="210" width="500" height="50" fill="#333" />
                <line x1="0" y1="235" x2="500" y2="235" stroke="#FF9800" strokeWidth="3" strokeDasharray="16 16" />

                {/* Animated Truck Starting from Depot onto the Highway */}
                <g transform="translate(0, 185)">
                  <motion.g
                    animate={{ x: [140, 480] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {/* Heavy Freight Container Trailer */}
                    <rect x="0" y="0" width="65" height="36" rx="3" fill="#FFF0DF" stroke="#FFCC80" strokeWidth="1.5" />
                    <rect x="4" y="4" width="57" height="8" rx="1" fill="#FFFFFF" />
                    <text x="32" y="11" textAnchor="middle" fill="#FF9800" fontSize="7" fontWeight="800">ALL INDIA PERMIT</text>
                    {/* Cabin */}
                    <polygon points="65,12 80,12 90,24 90,36 65,36" fill="#D97706" />
                    <polygon points="68,15 78,15 84,23 68,23" fill="#E2E8F0" />
                    {/* Headlight beam */}
                    <polygon points="90,28 140,24 140,36" fill="#FDE047" opacity="0.35" />
                    {/* Wheels */}
                    <circle cx="15" cy="38" r="6" fill="#333" stroke="#FFCC80" strokeWidth="2" />
                    <circle cx="45" cy="38" r="6" fill="#333" stroke="#FFCC80" strokeWidth="2" />
                    <circle cx="80" cy="38" r="6" fill="#333" stroke="#FFCC80" strokeWidth="2" />
                  </motion.g>
                </g>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 02: Our Services (5 Primary Cards + 1 Smaller Card; Hovering Changes Truck Cargo) */}
      <section style={{ padding: '7rem 0', background: '#F8F7F4' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '24px', height: '2px', background: '#FF9800' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', color: '#FF9800', textTransform: 'uppercase' }}>
                Section 02 • Core Capabilities
              </span>
              <span style={{ width: '24px', height: '2px', background: '#FF9800' }} />
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
              Our Services
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#555555', lineHeight: 1.7 }}>
              Documented fleet capabilities supporting interstate logistics, specialized cold storage, and metropolitan retail drops.
            </p>
          </div>

          {/* Interactive Dynamic Truck Cargo Simulator based on hovered service */}
          <div
            style={{
              background: '#F8F7F4',
              borderRadius: '24px',
              padding: '2rem 2.5rem',
              border: '1px solid rgba(255, 152, 0, 0.25)',
              marginBottom: '3.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', color: '#FF9800', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
                CURRENTLY INSPECTING CONFIGURATION
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 300, color: '#0D0D0D' }}>
                {services[selectedService].title}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#666666' }}>
                {services[selectedService].desc}
              </div>
            </div>

            {/* Dynamic Animated Truck SVG Graphic reflecting the selected configuration */}
            <div style={{ width: '180px', height: '80px' }}>
              <svg viewBox="0 0 180 80" style={{ width: '100%', height: 'auto' }}>
                <rect
                  x="10"
                  y="15"
                  width="100"
                  height="45"
                  rx="3"
                  fill={selectedService === 1 ? '#0A3D30' : selectedService === 3 ? '#334155' : '#1E293B'}
                  stroke="#FF9800"
                  strokeWidth="1.5"
                />
                <text x="60" y="42" textAnchor="middle" fill="#0D0D0D" fontSize="9" fontWeight="700">
                  {services[selectedService].badge}
                </text>
                {/* Truck Cabin */}
                <polygon points="110,30 135,30 150,45 150,60 110,60" fill="#FF9800" />
                <polygon points="115,35 130,35 140,45 115,45" fill="#E2E8F0" />
                {/* Wheels */}
                <circle cx="35" cy="62" r="8" fill="#333" stroke="#94A3B8" strokeWidth="2" />
                <circle cx="85" cy="62" r="8" fill="#333" stroke="#94A3B8" strokeWidth="2" />
                <circle cx="135" cy="62" r="8" fill="#333" stroke="#94A3B8" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* 5 Primary Cards + 1 Smaller 6th Card */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onMouseEnter={() => setSelectedService(i)}
                style={{
                  background: selectedService === i ? '#FFF0DF' : '#FFFFFF',
                  borderRadius: '20px',
                  padding: svc.isSmall ? '2rem' : '2.5rem 2rem',
                  border: selectedService === i ? '1.5px solid #FF9800' : '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 250ms ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gridColumn: svc.isSmall ? 'span 1' : undefined,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#FF9800',
                      background: 'rgba(255, 152, 0, 0.15)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '100px',
                    }}
                  >
                    {svc.badge}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700 }}>
                    0{i + 1}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 300, color: '#0D0D0D', marginBottom: '0.75rem' }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#555555', lineHeight: 1.85, fontWeight: 300, flexGrow: 1 }}>
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03: How Delivery Works (Main animation: ORDER -> ROUTE PLAN -> DISPATCH -> LIVE TRACKING -> POD) */}
      <section style={{ padding: '7.5rem 0', background: '#F8F7F4' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '24px', height: '2px', background: '#FF9800' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', color: '#FF9800', textTransform: 'uppercase' }}>
                Section 03 • The Delivery Protocol
              </span>
              <span style={{ width: '24px', height: '2px', background: '#FF9800' }} />
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
              How Delivery Works
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#555555', lineHeight: 1.7 }}>
              A disciplined, telemetry-backed 5-stage dispatch pipeline ensuring end-to-end cargo traceability.
            </p>
          </div>

          {/* MAIN ANIMATION: Truck physically travels along the 5 stages */}
          <div
            style={{
              background: '#FFF8F0',
              borderRadius: '24px',
              padding: '3rem 2.5rem',
              border: '1px solid rgba(255, 152, 0, 0.25)',
              marginBottom: '3.5rem',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 300, letterSpacing: '0.1em', color: '#FF9800' }}>
                LIVE RUNTIME DISPATCH TRACK
              </span>
              <span style={{ fontSize: '0.8rem', color: '#38BDF8', fontWeight: 600 }}>
                Automatic Waybill & Telemetry Sync
              </span>
            </div>

            <svg viewBox="0 0 900 140" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
              {/* Active Highway line */}
              <line x1="50" y1="70" x2="850" y2="70" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
              <motion.line
                x1="50"
                y1="70"
                x2="850"
                y2="70"
                stroke="#FF9800"
                strokeWidth="4"
                strokeDasharray="12 12"
                animate={{ strokeDashoffset: [0, -48] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />

              {/* 5 Stages */}
              {deliveryStages.map((stg, i) => {
                const x = 90 + i * 180;
                return (
                  <g key={stg.code} transform={`translate(${x}, 70)`}>
                    <circle cx="0" cy="0" r="18" fill="#FFF0DF" stroke="#FF9800" strokeWidth="3" />
                    <text x="0" y="5" textAnchor="middle" fill="#0D0D0D" fontSize="11" fontWeight="700">
                      {stg.icon}
                    </text>
                    <text x="0" y="38" textAnchor="middle" fill="#0D0D0D" fontSize="11" fontWeight="800">
                      {stg.title}
                    </text>
                  </g>
                );
              })}

              {/* Moving Biskore Truck traveling between stages */}
              <motion.g
                animate={{ x: [80, 810] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              >
                <g transform="translate(-25, 25)">
                  <rect x="0" y="5" width="40" height="22" rx="2" fill="#FF9800" />
                  <polygon points="40,12 48,12 54,20 54,27 40,27" fill="#F59E0B" />
                  <circle cx="10" cy="28" r="4.5" fill="#333" />
                  <circle cx="28" cy="28" r="4.5" fill="#333" />
                  <circle cx="47" cy="28" r="4.5" fill="#333" />
                  {/* Beam */}
                  <polygon points="54,22 68,18 68,26" fill="#FEF08A" opacity="0.6" />
                </g>
              </motion.g>
            </svg>
          </div>

          {/* 5 Step Information Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {deliveryStages.map((stg) => (
              <div
                key={stg.code}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '2rem 1.5rem',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{stg.icon}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 300, color: '#FF9800', marginBottom: '0.35rem' }}>
                  STAGE {stg.code}
                </div>
                <h4 style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', fontWeight: 300, color: '#0D0D0D', marginBottom: '0.5rem' }}>
                  {stg.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#666666', lineHeight: 1.6 }}>
                  {stg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: The Network (Large Abstract India Map + Central Hub Routes Drawing Outward) */}
      <section style={{ padding: '7rem 0', background: '#F8F7F4', borderTop: '1px solid rgba(255, 152, 0, 0.15)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '24px', height: '2px', background: '#FF9800' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', color: '#FF9800', textTransform: 'uppercase' }}>
                Section 04 • Pan-India Reach
              </span>
              <span style={{ width: '24px', height: '2px', background: '#FF9800' }} />
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
              One Fleet. A Wider Reach.
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#555555', lineHeight: 1.7 }}>
              With All India Permit vehicles, Biskore can support interstate freight movement across the country.
            </p>
          </div>

          {/* Large Abstract India Network Map */}
          <div
            style={{
              background: '#F8F7F4',
              borderRadius: '24px',
              padding: '3.5rem 2rem',
              border: '1px solid rgba(255, 152, 0, 0.25)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <svg viewBox="0 0 700 480" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
              {/* Stylized Abstract India Outline */}
              <path
                d="M320 40 L380 90 L420 160 L490 180 L440 240 L380 340 L350 440 L310 380 L260 280 L230 220 L270 140 L290 80 Z"
                fill="rgba(255, 152, 0, 0.04)"
                stroke="rgba(255, 152, 0, 0.2)"
                strokeWidth="2"
              />

              {/* Central Biskore National Logistics Hub Point */}
              <g transform="translate(340, 240)">
                <circle cx="0" cy="0" r="16" fill="rgba(255, 152, 0, 0.2)" />
                <circle cx="0" cy="0" r="8" fill="#FF9800" />
                <text x="0" y="-22" textAnchor="middle" fill="#FF9800" fontSize="12" fontWeight="800">
                  BISKORE HUB
                </text>
              </g>

              {/* Branching Routes Drawing Outward */}
              {/* Route North */}
              <motion.path
                d="M340 240 Q350 140 330 70"
                fill="none"
                stroke="#FF9800"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                animate={{ strokeDashoffset: [40, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <circle cx="330" cy="70" r="6" fill="#38BDF8" />
              <text x="330" y="55" textAnchor="middle" fill="#38BDF8" fontSize="10" fontWeight="700">Northern Corridor</text>

              {/* Route West */}
              <motion.path
                d="M340 240 Q280 230 240 210"
                fill="none"
                stroke="#FF9800"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                animate={{ strokeDashoffset: [40, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 0.3 }}
              />
              <circle cx="240" cy="210" r="6" fill="#38BDF8" />
              <text x="220" y="195" textAnchor="middle" fill="#38BDF8" fontSize="10" fontWeight="700">Western Ports</text>

              {/* Route East */}
              <motion.path
                d="M340 240 Q410 220 460 200"
                fill="none"
                stroke="#FF9800"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                animate={{ strokeDashoffset: [40, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 0.6 }}
              />
              <circle cx="460" cy="200" r="6" fill="#38BDF8" />
              <text x="470" y="185" textAnchor="middle" fill="#38BDF8" fontSize="10" fontWeight="700">Eastern Mandis</text>

              {/* Route South */}
              <motion.path
                d="M340 240 Q360 340 345 420"
                fill="none"
                stroke="#FF9800"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                animate={{ strokeDashoffset: [40, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 0.9 }}
              />
              <circle cx="345" cy="420" r="6" fill="#38BDF8" />
              <text x="345" y="445" textAnchor="middle" fill="#38BDF8" fontSize="10" fontWeight="700">Southern Ports</text>
            </svg>
          </div>
        </div>
      </section>

      {/* SECTION 05: Why Biskore Logistics (4 Strong Cards + Need to move something? Let's talk CTA) */}
      <section style={{ padding: '8rem 0', background: '#F8F7F4' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '24px', height: '2px', background: '#FF9800' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', color: '#FF9800', textTransform: 'uppercase' }}>
                Section 05 • Competitive Advantage
              </span>
              <span style={{ width: '24px', height: '2px', background: '#FF9800' }} />
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
              Why Biskore Logistics
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#555555', lineHeight: 1.7 }}>
              Built upon real operational assets, dedicated drivers, and group synergy.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '5rem',
            }}
          >
            {whyCards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2.75rem 2rem',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ marginBottom: '1.5rem' }}>{c.icon}</div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 300, color: '#0D0D0D', marginBottom: '0.5rem' }}>
                  {c.title}
                </h3>
                <div style={{ fontSize: '0.9rem', color: '#FF9800', fontWeight: 600, marginBottom: '1rem' }}>
                  {c.subtitle}
                </div>
                <p style={{ fontSize: '0.95rem', color: '#555555', lineHeight: 1.85, fontWeight: 300, flexGrow: 1 }}>
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Closing CTA */}
          <div
            style={{
              background: 'linear-gradient(135deg, #FFF5EA 0%, #FFF0DF 100%)',
              borderRadius: '24px',
              padding: '4rem 3rem',
              border: '1px solid rgba(255, 152, 0, 0.3)',
              textAlign: 'center',
              maxWidth: '850px',
              margin: '0 auto',
            }}
          >
            <h3
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 300,
                color: '#0D0D0D',
                marginBottom: '1rem',
              }}
            >
              Need to move something? Let’s talk.
            </h3>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                color: 'rgba(255,255,255,0.75)',
                marginBottom: '2.5rem',
                maxWidth: '600px',
                margin: '0 auto 2.5rem',
              }}
            >
              Whether you need dedicated cold-chain reefer runs or pan-India general freight contracts, Biskore Logistics delivers.
            </p>
            <Link
              href="/contact"
              style={{
                padding: '1.15rem 3rem',
                fontSize: '1.05rem',
                fontWeight: 700,
                borderRadius: '100px',
                background: '#FF9800',
                color: '#0B0F17',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              Request Fleet Quote
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
