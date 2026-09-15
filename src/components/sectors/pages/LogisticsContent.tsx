'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import IndiaLogisticsMap from '@/components/ui/IndiaLogisticsMap';

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
  const [selectedService, setSelectedService] = useState<number | null>(null);

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
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
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
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
          <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
        </svg>
      ),
    },
    {
      title: 'Group Infrastructure',
      subtitle: 'Supports Biskore’s own sectors.',
      desc: 'Shared operational backbone moving goods seamlessly across Fresh Produce, International Trade, Koblaq, and Tastecore.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
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
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
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
      <section style={{ padding: '6rem 0', background: '#F8F7F4', borderBottom: '1px solid rgba(59, 130, 246, 0.15)' }}>
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
                  <div style={{ fontSize: '2.2rem', fontWeight: 300, color: '#3B82F6' }}>All-India</div>
                  <div style={{ fontSize: '0.85rem', color: '#666666' }}>National Permit Vehicles</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 300, color: '#3B82F6' }}>24/7</div>
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
              className="mobile-card-squish"
              style={{
                position: 'relative',
                background: '#DBEAFE',
                borderRadius: '24px',
                padding: '2.5rem 2rem',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#0D0D0D' }}>
                  CENTRAL DEPOT DEPARTURE
                </span>
              </div>

              <svg viewBox="0 0 500 280" style={{ width: '100%', height: 'auto', overflow: 'hidden', borderRadius: '0 0 24px 24px' }}>
                {/* Night Sky Grid background */}
                <path d="M0 50H500M0 100H500M0 150H500" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />

                {/* Left: Modern Biskore Logistics Building Depot */}
                <g transform="translate(30, 40)">
                  <rect x="0" y="20" width="130" height="150" rx="4" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="2" />
                  <rect x="15" y="35" width="100" height="25" rx="2" fill="#DBEAFE" />
                  <text x="65" y="52" textAnchor="middle" fill="#3B82F6" fontSize="11" fontWeight="800" letterSpacing="2">
                    BISKORE
                  </text>
                  <text x="65" y="80" textAnchor="middle" fill="#666666" fontSize="8" letterSpacing="1">
                    LOGISTICS HUB
                  </text>
                  {/* Bay Doors */}
                  <rect x="15" y="100" width="40" height="70" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1" />
                  <line x1="15" y1="120" x2="55" y2="120" stroke="#DBEAFE" strokeWidth="1" />
                  <line x1="15" y1="140" x2="55" y2="140" stroke="#DBEAFE" strokeWidth="1" />

                  <rect x="75" y="100" width="40" height="70" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1" />
                  <line x1="75" y1="120" x2="115" y2="120" stroke="#DBEAFE" strokeWidth="1" />
                  <line x1="75" y1="140" x2="115" y2="140" stroke="#DBEAFE" strokeWidth="1" />
                </g>

                {/* Highway Road Line */}
                <rect x="0" y="210" width="500" height="50" fill="#333" />
                <line x1="0" y1="235" x2="500" y2="235" stroke="#3B82F6" strokeWidth="3" strokeDasharray="16 16" />

                {/* Animated Truck Starting from Depot onto the Highway */}
                <g transform="translate(0, 185)">
                  <motion.g
                    animate={{ x: [140, 600] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {/* Heavy Freight Container Trailer */}
                    <rect x="0" y="0" width="65" height="36" rx="3" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5" />
                    <rect x="4" y="4" width="57" height="8" rx="1" fill="#FFFFFF" />
                    <text x="32" y="11" textAnchor="middle" fill="#3B82F6" fontSize="7" fontWeight="800">ALL INDIA PERMIT</text>
                    {/* Cabin */}
                    <polygon points="65,12 80,12 90,24 90,36 65,36" fill="#1E40AF" />
                    <polygon points="68,15 78,15 84,23 68,23" fill="#E2E8F0" />
                    {/* Headlight beam */}
                    <polygon points="90,28 140,24 140,36" fill="#FDE047" opacity="0.35" />
                    {/* Wheels */}
                    <circle cx="15" cy="38" r="6" fill="#333" stroke="#93C5FD" strokeWidth="2" />
                    <circle cx="45" cy="38" r="6" fill="#333" stroke="#93C5FD" strokeWidth="2" />
                    <circle cx="80" cy="38" r="6" fill="#333" stroke="#93C5FD" strokeWidth="2" />
                  </motion.g>
                </g>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 02: Our Services (5 Primary Cards + 1 Smaller Card; Hovering Changes Truck Cargo) */}
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
              Our Services
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#555555', lineHeight: 1.7 }}>
              Documented fleet capabilities supporting interstate logistics, specialized cold storage, and metropolitan retail drops.
            </p>
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
                onMouseLeave={() => setSelectedService(null)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: svc.isSmall ? '2rem' : '2.5rem 2rem',
                  border: selectedService === i ? '1.5px solid #3B82F6' : '1px solid rgba(0,0,0,0.08)',
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
                      color: '#3B82F6',
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
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{stg.icon}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 300, color: '#3B82F6', marginBottom: '0.35rem' }}>
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
      <section className="mobile-squish" style={{ padding: '7rem 0', background: '#0F172A', borderTop: '1px solid rgba(59, 130, 246, 0.15)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4.5rem' }}>
            
            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                marginBottom: '1rem',
              }}
            >
              One Fleet. A Wider Reach.
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.7 }}>
              With All India Permit vehicles, Biskore can support interstate freight movement across the country.
            </p>
          </div>
          
          <IndiaLogisticsMap />

        </div>
      </section>

      {/* SECTION 05: Why Biskore Logistics (4 Strong Cards + Need to move something? Let's talk CTA) */}
      <section style={{ padding: '8rem 0', background: '#F8F7F4' }}>
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
                  border: '1px solid rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                className="mobile-card-squish"
              >
                <div style={{ marginBottom: '1.5rem' }}>{c.icon}</div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 300, color: '#0D0D0D', marginBottom: '0.5rem', minHeight: '4.5rem' }}>
                  {c.title}
                </h3>
                <div style={{ fontSize: '0.9rem', color: '#3B82F6', fontWeight: 600, marginBottom: '1rem', minHeight: '3rem' }}>
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
              background: '#0F172A',
              borderRadius: '24px',
              padding: '3.5rem',
              color: '#0D0D0D',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
              border: '1px solid rgba(59, 130, 246, 0.3)',
            }}
          >
            <div style={{ maxWidth: '600px' }}>
              <h3 className="text-h3" style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>
                Need to move something? Let’s talk.
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                Whether you need dedicated cold-chain reefer runs or pan-India general freight contracts, Biskore Logistics delivers.
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
              Request Fleet Quote
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
