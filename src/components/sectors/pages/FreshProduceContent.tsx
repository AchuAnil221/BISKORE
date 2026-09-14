"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface SectorProps {
  sector: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    accentColor: string;
  };
}

export default function FreshProduceContent({ sector }: SectorProps) {
  const [activeSupplyIndex, setActiveSupplyIndex] = useState<number | null>(
    null,
  );

  // Section 02 Steps
  const steps = [
    {
      num: "01",
      title: "Farm Collection",
      desc: "Direct sourcing from partner farms and agricultural cooperatives with fair farmgate pricing.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2E7D32"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Sorting & Grading",
      desc: "Multi-parameter optical and manual inspection for freshness, size, ripeness, and quality grading.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2E7D32"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Biskore Fleet",
      desc: "Loaded into specialized temperature-controlled vehicles to eliminate transit spoilage.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2E7D32"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Market Distribution",
      desc: "Express routing directly into primary wholesale mandis, distribution hubs, and retail centers.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2E7D32"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      num: "05",
      title: "End Customers",
      desc: "Reaching supermarket shelves, hospitality chains, institutions, and community kitchens at peak freshness.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2E7D32"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  // Section 03: 6 cards
  const supplyItems = [
    {
      title: "Fresh Vegetables",
      desc: "Daily harvested leafy greens, root crops, bell peppers, tomatoes, and regional favorites sourced from vetted soils.",
      tag: "Daily Harvest",
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" fill="#E8F5E9" />
          <path
            d="M24 14C19 14 15 18 15 23C15 28 19 32 24 34C29 32 33 28 33 23C33 18 29 14 24 14Z"
            fill="#4CAF50"
          />
          <path
            d="M24 10V22M24 22L20 18M24 22L28 18"
            stroke="#2E7D32"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="22" cy="24" r="1.5" fill="#FFF" opacity="0.8" />
        </svg>
      ),
    },
    {
      title: "Fresh Fruits",
      desc: "Premium seasonal harvests, tropical selections, citrus, apples, and berries graded for peak sweetness and shelf-life.",
      tag: "Grade-A Orchards",
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" fill="#FFF3E0" />
          <path
            d="M24 16C17 16 14 22 14 27C14 33 18 36 24 36C30 36 34 33 34 27C34 22 31 16 24 16Z"
            fill="#FFA726"
          />
          <path
            d="M24 16C24 12 27 11 29 11"
            stroke="#2E7D32"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path d="M29 11C28 14 26 15 24 16" fill="#66BB6A" />
        </svg>
      ),
    },
    {
      title: "Bulk Wholesale",
      desc: "Large-tonnage supply contracts tailored for wholesale mandis, regional food distributors, and bulk aggregators.",
      tag: "High Capacity",
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" fill="#E0F2F1" />
          <rect x="14" y="16" width="20" height="18" rx="2" fill="#26A69A" />
          <path
            d="M14 22H34M24 16V34"
            stroke="#E0F2F1"
            strokeWidth="2"
            strokeDasharray="2 2"
          />
          <path
            d="M18 13L24 16L30 13"
            stroke="#00796B"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Retail Supply",
      desc: "Pre-sorted, clean-packaged, barcode-ready crates engineered for direct shelf placement in modern retail outlets.",
      tag: "Shelf Ready",
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" fill="#F3E5F5" />
          <path d="M16 18H32L30 32H18L16 18Z" fill="#AB47BC" />
          <path
            d="M20 18V14C20 12 21.8 11 24 11C26.2 11 28 12 28 14V18"
            stroke="#7B1FA2"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Institutional",
      desc: "Reliable scheduled procurement for luxury hotel chains, institutional caterers, hospitals, and campus dining.",
      tag: "Bespoke Schedules",
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" fill="#E8EAF6" />
          <rect x="15" y="15" width="18" height="20" rx="2" fill="#5C6BC0" />
          <path
            d="M19 19H21M27 19H29M19 24H21M27 24H29M23 35V29H25V35"
            stroke="#FFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Sugar",
      desc: "Certified refined and raw sugar distribution for confectioners, beverage bottlers, and wholesale domestic markets.",
      tag: "Commodity Grade",
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" fill="#FFFDE7" />
          <path
            d="M16 20L24 14L32 20L32 30L24 36L16 30Z"
            fill="#FFEE58"
            stroke="#FBC02D"
            strokeWidth="1.5"
          />
          <path
            d="M24 14V36M16 20L32 30M32 20L16 30"
            stroke="#F57F17"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
        </svg>
      ),
    },
  ];

  return (
    <div style={{ background: "#FFFFFF", color: "#0D0D0D" }}>
      {/* SECTION 01: Farm to Market (Split Layout with Farm -> Basket -> Collection Animation) */}
      <section
        style={{
          padding: "6rem 0",
          background: "#FFFFFF",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    width: "28px",
                    height: "2px",
                    background: "#2E7D32",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#2E7D32",
                    textTransform: "uppercase",
                  }}
                >
                  Section 01 • Sourcing Paradigm
                </span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(2.4rem, 4vw, 3.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  color: "#062C22",
                  marginBottom: "1.75rem",
                }}
              >
                Fresh From the Source
              </h2>
              <p
                style={{
                  fontSize: "clamp(1.05rem, 1.25vw, 1.25rem)",
                  color: "#444",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                }}
              >
                We source fresh fruits and vegetables directly from farms and
                farming cooperatives, moving them efficiently to markets,
                retailers, institutions and customers.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                  paddingTop: "0.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#4CAF50",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#062C22",
                    }}
                  >
                    Zero Middlemen Delay
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#4CAF50",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#062C22",
                    }}
                  >
                    Direct-From-Grower Pricing
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Farm -> Produce Basket -> Collection Point Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              style={{
                position: "relative",
                background: "linear-gradient(135deg, #F1F8F4 0%, #E8F5E9 100%)",
                borderRadius: "24px",
                padding: "3rem 2rem",
                border: "1px solid rgba(46, 125, 50, 0.12)",
                overflow: "hidden",
              }}
            >
              <svg
                viewBox="0 0 500 320"
                style={{ width: "100%", height: "auto", overflow: "visible" }}
              >
                {/* Rolling Farm Hills Background */}
                <path
                  d="M0 240 Q120 190 250 220 T500 210 L500 320 L0 320 Z"
                  fill="#C8E6C9"
                  opacity="0.7"
                />
                <path
                  d="M0 260 Q160 220 320 250 T500 240 L500 320 L0 320 Z"
                  fill="#A5D6A7"
                  opacity="0.9"
                />

                {/* Furrows / Rows in field */}
                <path
                  d="M30 260 Q80 280 120 310"
                  stroke="#81C784"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M80 255 Q130 280 180 310"
                  stroke="#81C784"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M130 250 Q180 280 240 310"
                  stroke="#81C784"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Left Station: Farm Barn & Windmill */}
                <g transform="translate(40, 140)">
                  {/* Barn */}
                  <polygon points="25,10 0,35 50,35" fill="#C62828" />
                  <rect
                    x="5"
                    y="35"
                    width="40"
                    height="45"
                    fill="#E53935"
                    rx="2"
                  />
                  <rect
                    x="18"
                    y="55"
                    width="14"
                    height="25"
                    fill="#FFF"
                    opacity="0.9"
                  />
                  <line
                    x1="25"
                    y1="55"
                    x2="25"
                    y2="80"
                    stroke="#C62828"
                    strokeWidth="1"
                  />
                  <text
                    x="25"
                    y="100"
                    textAnchor="middle"
                    fill="#062C22"
                    fontSize="12"
                    fontWeight="700"
                  >
                    FARM
                  </text>

                  {/* Crops / Plants */}
                  <circle cx="-15" cy="65" r="7" fill="#43A047" />
                  <circle cx="-8" cy="72" r="5" fill="#2E7D32" />
                  <circle cx="65" cy="65" r="7" fill="#43A047" />
                </g>

                {/* Center Pathway Curve */}
                <path
                  d="M100 215 C200 215, 230 170, 390 170"
                  fill="none"
                  stroke="#81C784"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />

                {/* Right Station: Biskore Regional Collection Hub */}
                <g transform="translate(370, 110)">
                  {/* Modern collection depot */}
                  <rect
                    x="0"
                    y="25"
                    width="80"
                    height="60"
                    rx="6"
                    fill="#062C22"
                  />
                  <rect
                    x="10"
                    y="35"
                    width="60"
                    height="15"
                    rx="2"
                    fill="#0A3D30"
                  />
                  <rect x="15" y="40" width="8" height="6" fill="#81C784" />
                  <rect x="30" y="40" width="8" height="6" fill="#81C784" />
                  <rect x="45" y="40" width="8" height="6" fill="#81C784" />
                  <rect x="60" y="40" width="8" height="6" fill="#81C784" />
                  {/* Shutter door */}
                  <rect
                    x="25"
                    y="55"
                    width="30"
                    height="30"
                    fill="#E0E0E0"
                    rx="1"
                  />
                  <line
                    x1="25"
                    y1="62"
                    x2="55"
                    y2="62"
                    stroke="#9E9E9E"
                    strokeWidth="1"
                  />
                  <line
                    x1="25"
                    y1="70"
                    x2="55"
                    y2="70"
                    stroke="#9E9E9E"
                    strokeWidth="1"
                  />
                  <line
                    x1="25"
                    y1="78"
                    x2="55"
                    y2="78"
                    stroke="#9E9E9E"
                    strokeWidth="1"
                  />
                  {/* Flag / sign */}
                  <line
                    x1="80"
                    y1="10"
                    x2="80"
                    y2="35"
                    stroke="#062C22"
                    strokeWidth="2"
                  />
                  <polygon points="80,10 100,16 80,22" fill="#4CAF50" />
                  <text
                    x="40"
                    y="105"
                    textAnchor="middle"
                    fill="#062C22"
                    fontSize="11"
                    fontWeight="700"
                  >
                    COLLECTION HUB
                  </text>
                </g>

                {/* ANIMATED PRODUCE BASKET TRAVELING FROM FARM TO COLLECTION */}
                <motion.g
                  animate={{
                    x: [0, 140, 280],
                    y: [0, -25, -45],
                    scale: [0.9, 1.05, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ originX: "110px", originY: "215px" }}
                >
                  <g transform="translate(100, 195)">
                    {/* Woven Wooden Crate */}
                    <rect
                      x="0"
                      y="8"
                      width="36"
                      height="24"
                      rx="3"
                      fill="#D7CCC8"
                      stroke="#8D6E63"
                      strokeWidth="2"
                    />
                    <line
                      x1="0"
                      y1="16"
                      x2="36"
                      y2="16"
                      stroke="#8D6E63"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="0"
                      y1="24"
                      x2="36"
                      y2="24"
                      stroke="#8D6E63"
                      strokeWidth="1.5"
                    />
                    {/* Fresh Produce inside */}
                    <circle cx="10" cy="8" r="6" fill="#E53935" />{" "}
                    {/* Tomato */}
                    <circle cx="18" cy="6" r="7" fill="#43A047" />{" "}
                    {/* Greens */}
                    <circle cx="26" cy="9" r="6" fill="#FB8C00" />{" "}
                    {/* Orange/Carrot */}
                    <path d="M10 3L11 0" stroke="#2E7D32" strokeWidth="1.5" />
                    {/* Subtle pulse shadow */}
                    <ellipse
                      cx="18"
                      cy="36"
                      rx="14"
                      ry="4"
                      fill="#000"
                      opacity="0.15"
                    />
                  </g>
                </motion.g>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 02: How It Moves (Horizontal 5-Step Process with traveling crate) */}
      <section style={{ padding: "7rem 0", background: "#F8F7F4" }}>
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "750px",
              margin: "0 auto 4rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{ width: "24px", height: "2px", background: "#2E7D32" }}
              />
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#2E7D32",
                  textTransform: "uppercase",
                }}
              >
                Section 02 • Systematic Flow
              </span>
              <span
                style={{ width: "24px", height: "2px", background: "#2E7D32" }}
              />
            </div>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#062C22",
                marginBottom: "1rem",
              }}
            >
              How It Moves
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.7 }}>
              A disciplined farm-to-door workflow ensuring minimal transit
              degradation and maximum nutritional freshness.
            </p>
          </div>

          {/* Animated Traveling Crate Pathway */}
          <div
            style={{
              position: "relative",
              marginBottom: "3rem",
              padding: "0 2rem",
            }}
          >
            <div
              style={{
                height: "4px",
                background:
                  "linear-gradient(90deg, #A5D6A7 0%, #4CAF50 50%, #2E7D32 100%)",
                borderRadius: "4px",
                position: "relative",
              }}
            >
              {/* Traveling Crate along line */}
              <motion.div
                animate={{ left: ["2%", "96%"] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: "-16px",
                  width: "32px",
                  height: "32px",
                  background: "#FFFFFF",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #2E7D32",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="14"
                    rx="2"
                    fill="#D7CCC8"
                    stroke="#5D4037"
                    strokeWidth="1.5"
                  />
                  <circle cx="8" cy="11" r="3" fill="#E53935" />
                  <circle cx="14" cy="10" r="3.5" fill="#43A047" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* 5 Step Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "2rem 1.5rem",
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      background: "#E8F5E9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 900,
                      color: "#C8E6C9",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#062C22",
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#666",
                    lineHeight: 1.6,
                    flexGrow: 1,
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03: What We Supply (6 Cards with Small Produce SVGs & Hover Expansion) */}
      <section style={{ padding: "7rem 0", background: "#FFFFFF" }}>
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto 4rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{ width: "24px", height: "2px", background: "#2E7D32" }}
              />
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#2E7D32",
                  textTransform: "uppercase",
                }}
              >
                Section 03 • Product Catalog
              </span>
              <span
                style={{ width: "24px", height: "2px", background: "#2E7D32" }}
              />
            </div>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#062C22",
                marginBottom: "1rem",
              }}
            >
              What We Supply
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.7 }}>
              Supplying grade-inspected produce and agro-commodities to retail
              chains, institutional partners, and major wholesale mandis.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {supplyItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{
                  y: -6,
                }}
                onMouseEnter={() => setActiveSupplyIndex(i)}
                onMouseLeave={() => setActiveSupplyIndex(null)}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "2.5rem 2rem",
                  border:
                    activeSupplyIndex === i
                      ? "1.5px solid #2E7D32"
                      : "1px solid rgba(0,0,0,0.08)",
                  transition: "border 250ms, box-shadow 250ms",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  {item.icon}
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#2E7D32",
                      background: "#E8F5E9",
                      padding: "0.35rem 0.85rem",
                      borderRadius: "100px",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "#062C22",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#555",
                    lineHeight: 1.7,
                    flexGrow: 1,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: Built for Freshness (3 Large Cards + Truck Driving along Route Animation) */}
      <section
        style={{
          padding: "7rem 0",
          background: "#F1F8F4",
          borderTop: "1px solid rgba(46, 125, 50, 0.1)",
        }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "750px",
              margin: "0 auto 4rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{ width: "24px", height: "2px", background: "#2E7D32" }}
              />
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#2E7D32",
                  textTransform: "uppercase",
                }}
              >
                Section 04 • Infrastructure
              </span>
              <span
                style={{ width: "24px", height: "2px", background: "#2E7D32" }}
              />
            </div>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#062C22",
                marginBottom: "1rem",
              }}
            >
              Built for Freshness
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.7 }}>
              Direct control over fleet, cold-storage, and delivery routes
              guarantees farm-freshness every single morning.
            </p>
          </div>

          {/* Truck Driving Along Route with Location Nodes Animation */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "24px",
              padding: "2.5rem",
              marginBottom: "3.5rem",
              border: "1px solid rgba(46, 125, 50, 0.12)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#062C22",
                  letterSpacing: "0.05em",
                }}
              >
                LIVE DISPATCH & MULTI-CITY COLD-ROUTE
              </span>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "#4CAF50",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#4CAF50",
                    display: "inline-block",
                  }}
                />
                Active Transit
              </span>
            </div>

            <svg
              viewBox="0 0 900 120"
              style={{ width: "100%", height: "auto", overflow: "visible" }}
            >
              {/* Route Line */}
              <line
                x1="80"
                y1="60"
                x2="820"
                y2="60"
                stroke="#E0E0E0"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <line
                x1="80"
                y1="60"
                x2="820"
                y2="60"
                stroke="#4CAF50"
                strokeWidth="4"
                strokeDasharray="12 12"
                strokeLinecap="round"
              />

              {/* Waypoint 1: Farm Origin */}
              <g transform="translate(80, 60)">
                <circle
                  cx="0"
                  cy="0"
                  r="14"
                  fill="#E8F5E9"
                  stroke="#2E7D32"
                  strokeWidth="3"
                />
                <circle cx="0" cy="0" r="5" fill="#2E7D32" />
                <text
                  x="0"
                  y="32"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="700"
                  fill="#062C22"
                >
                  Farm Hub
                </text>
              </g>

              {/* Waypoint 2: Cold Sorting Hub */}
              <g transform="translate(320, 60)">
                <circle
                  cx="0"
                  cy="0"
                  r="14"
                  fill="#E8F5E9"
                  stroke="#2E7D32"
                  strokeWidth="3"
                />
                <circle cx="0" cy="0" r="5" fill="#2E7D32" />
                <text
                  x="0"
                  y="32"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="700"
                  fill="#062C22"
                >
                  Cold Sort
                </text>
              </g>

              {/* Waypoint 3: Metro Mandi */}
              <g transform="translate(580, 60)">
                <circle
                  cx="0"
                  cy="0"
                  r="14"
                  fill="#E8F5E9"
                  stroke="#2E7D32"
                  strokeWidth="3"
                />
                <circle cx="0" cy="0" r="5" fill="#2E7D32" />
                <text
                  x="0"
                  y="32"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="700"
                  fill="#062C22"
                >
                  City Mandi
                </text>
              </g>

              {/* Waypoint 4: Final Distribution */}
              <g transform="translate(820, 60)">
                <circle
                  cx="0"
                  cy="0"
                  r="14"
                  fill="#062C22"
                  stroke="#4CAF50"
                  strokeWidth="3"
                />
                <circle cx="0" cy="0" r="5" fill="#FFF" />
                <text
                  x="0"
                  y="32"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="700"
                  fill="#062C22"
                >
                  Final Client
                </text>
              </g>

              {/* ANIMATED BISKORE REEFER TRUCK DRIVING ALONG ROUTE */}
              <motion.g
                animate={{ x: [80, 800] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <g transform="translate(-30, 25)">
                  {/* Reefer Trailer Container */}
                  <rect
                    x="0"
                    y="0"
                    width="46"
                    height="28"
                    rx="3"
                    fill="#062C22"
                  />
                  {/* Green Cold-Line accent */}
                  <line
                    x1="4"
                    y1="14"
                    x2="42"
                    y2="14"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                  <rect x="6" y="5" width="6" height="4" fill="#81C784" />
                  {/* Truck Cabin */}
                  <polygon
                    points="46,10 56,10 64,18 64,28 46,28"
                    fill="#0A3D30"
                  />
                  <polygon points="49,12 55,12 60,18 49,18" fill="#E0F2F1" />
                  {/* Wheels */}
                  <circle cx="12" cy="29" r="5" fill="#212121" />
                  <circle cx="12" cy="29" r="2" fill="#BDBDBD" />
                  <circle cx="34" cy="29" r="5" fill="#212121" />
                  <circle cx="34" cy="29" r="2" fill="#BDBDBD" />
                  <circle cx="56" cy="29" r="5" fill="#212121" />
                  <circle cx="56" cy="29" r="2" fill="#BDBDBD" />
                  {/* Headlight beam */}
                  <polygon
                    points="65,22 80,18 80,26"
                    fill="#FFEB3B"
                    opacity="0.6"
                  />
                </g>
              </motion.g>
            </svg>
          </div>

          {/* 3 Large Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "3rem 2.5rem",
                border: "1px solid rgba(46, 125, 50, 0.15)",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "14px",
                  background: "#E8F5E9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.75rem",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2E7D32"
                  strokeWidth="2"
                >
                  <rect x="1" y="3" width="15" height="13" rx="2" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "#062C22",
                  marginBottom: "1rem",
                }}
              >
                Own Fleet
              </h3>
              <p
                style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.7 }}
              >
                Dedicated vehicles exclusively assigned to fresh produce
                transit, ensuring scheduled collections, strict hygiene, and
                reliable deliveries without third-party vehicle dependency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "3rem 2.5rem",
                border: "1px solid rgba(46, 125, 50, 0.15)",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "14px",
                  background: "#E8F5E9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.75rem",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2E7D32"
                  strokeWidth="2"
                >
                  <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "#062C22",
                  marginBottom: "1rem",
                }}
              >
                Temperature-Sensitive Logistics
              </h3>
              <p
                style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.7 }}
              >
                Advanced cold-chain capabilities and climate-insulated
                compartments that protect leafy greens and delicate berries from
                moisture loss and heat damage in long-distance runs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "3rem 2.5rem",
                border: "1px solid rgba(46, 125, 50, 0.15)",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "14px",
                  background: "#E8F5E9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.75rem",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2E7D32"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "#062C22",
                  marginBottom: "1rem",
                }}
              >
                Multi-City Distribution
              </h3>
              <p
                style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.7 }}
              >
                Rapid movement across multiple state routes and strategic
                distribution points, connecting regional agricultural pockets
                with major urban consumer markets seamlessly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 05: From Farm to People (Full-Width Closing + Transition to Logistics) */}
      <section
        style={{
          padding: "8rem 0",
          background: "#062C22",
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Abstract organic background glow */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(76, 175, 80, 0.15) 0%, rgba(6, 44, 34, 0) 70%)",
            top: "-20%",
            right: "-10%",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{ maxWidth: "850px", margin: "0 auto", textAlign: "center" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(76, 175, 80, 0.2)",
                  color: "#81C784",
                  padding: "0.4rem 1.2rem",
                  borderRadius: "100px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                }}
              >
                Section 05 • Unified Impact
              </div>

              <h2
                style={{
                  fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  color: "#FFFFFF",
                  marginBottom: "2rem",
                }}
              >
                Moving Freshness Forward
              </h2>

              <p
                style={{
                  fontSize: "clamp(1.1rem, 1.4vw, 1.35rem)",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                  marginBottom: "3rem",
                  fontWeight: 300,
                }}
              >
                From growers to distribution points and end customers, Biskore
                connects every stage through sourcing, quality and logistics.
              </p>

              {/* Truck Reaches Final Destination -> Route Continues toward Logistics */}
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "20px",
                  padding: "2.5rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                  marginBottom: "3.5rem",
                }}
              >
                <svg
                  viewBox="0 0 700 100"
                  style={{ width: "100%", height: "auto", overflow: "visible" }}
                >
                  {/* Route track */}
                  <line
                    x1="50"
                    y1="50"
                    x2="650"
                    y2="50"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="3"
                  />
                  <motion.line
                    x1="50"
                    y1="50"
                    x2="650"
                    y2="50"
                    stroke="#4CAF50"
                    strokeWidth="3"
                    strokeDasharray="10 10"
                    animate={{ strokeDashoffset: [0, -40] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Node 1: Produce */}
                  <circle cx="100" cy="50" r="10" fill="#4CAF50" />
                  <text
                    x="100"
                    y="80"
                    textAnchor="middle"
                    fill="#FFF"
                    fontSize="12"
                  >
                    Farm Harvest
                  </text>

                  {/* Node 2: Cold Sorting */}
                  <circle cx="350" cy="50" r="10" fill="#4CAF50" />
                  <text
                    x="350"
                    y="80"
                    textAnchor="middle"
                    fill="#FFF"
                    fontSize="12"
                  >
                    Market Hub
                  </text>

                  {/* Node 3: Biskore Logistics Fleet Continues */}
                  <circle cx="600" cy="50" r="12" fill="#FFB71D" />
                  <text
                    x="600"
                    y="80"
                    textAnchor="middle"
                    fill="#FFB71D"
                    fontSize="12"
                    fontWeight="700"
                  >
                    Biskore Logistics
                  </text>

                  {/* Moving Animated Truck */}
                  <motion.g
                    animate={{ x: [80, 580] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <g transform="translate(-20, 25)">
                      <rect
                        x="0"
                        y="0"
                        width="36"
                        height="20"
                        rx="2"
                        fill="#FFFFFF"
                      />
                      <polygon
                        points="36,6 44,6 50,13 50,20 36,20"
                        fill="#81C784"
                      />
                      <circle cx="10" cy="22" r="4" fill="#062C22" />
                      <circle cx="26" cy="22" r="4" fill="#062C22" />
                      <circle cx="44" cy="22" r="4" fill="#062C22" />
                    </g>
                  </motion.g>
                </svg>
              </div>

              {/* Seamless Action Link to Logistics */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/sectors/logistics"
                  className="btn btn-primary"
                  style={{
                    padding: "1.1rem 2.5rem",
                    fontSize: "1rem",
                    fontWeight: 700,
                    borderRadius: "100px",
                    background: "#4CAF50",
                    color: "#062C22",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 250ms ease",
                  }}
                >
                  Explore Biskore Logistics Network
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  style={{
                    padding: "1.1rem 2.5rem",
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderRadius: "100px",
                    border: "1px solid rgba(255,255,255,0.25)",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  Source Produce With Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
