// ============================================================
// BISKORE DYNAMICS LLP — SITE CONTENT (CMS-ready)
// Single source of truth for all text, metadata, and data.
// Swap this with a headless CMS (Sanity, Contentful) later.
// ============================================================

export const SITE = {
  name: "Biskore Dynamics LLP",
  shortName: "Biskore",
  tagline: "An Integrated House of Trade, Brand & Logistics",
  description:
    "Biskore Dynamics LLP is a multi-sector business group operating across fresh produce distribution, international trade, lifestyle and fashion, food and beverages, and pan-India logistics — all under one accountable partnership.",
  url: "https://www.biskore.com",
  email: "info@biskore.com",
  phone: ["+91 9292 579 045", "+91 8157 800 456"],
  address:
    "Door No. 8/468/B, Padinjarekkara Kodakkad, Hosdurg, Kasargod, Kerala 671310",
  founders: ["Biju", "Sujith"],
  logoOrigin:
    "The name combines BI-S (the two founders Biju & Sujith) with Kore/Core, symbolising the central strength, unity, and foundation of the company.",
} as const;

// ─── NAVIGATION ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Sectors",
    href: "/sectors",
    children: [
      { label: "Fresh Produce", href: "/sectors/fresh-produce" },
      { label: "Trade", href: "/sectors/trade" },
      { label: "Koblaq", href: "/sectors/koblaq" },
      { label: "Tastecore", href: "/sectors/tastecore" },
      { label: "Logistics", href: "/sectors/logistics" },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;

// ─── STATS / SNAPSHOT ─────────────────────────────────────────
export const STATS = [
  { value: 5, suffix: "", label: "Business Sectors" },
  { value: 2, suffix: "", label: "Consumer Brands" },
  { value: 100, suffix: "%", label: "Pan-India Coverage" },
  { value: 1, suffix: "", label: "Accountable Partnership" },
] as const;

// ─── GROUP SNAPSHOT (Home section 1) ─────────────────────────
export const GROUP_SNAPSHOT = {
  heading: "Built across industries. Driven by ambition.",
  description:
    "Biskore Dynamics LLP is a multi-sector business group operating across five verticals — fresh produce, international trade, lifestyle brands, food & beverages, and pan-India logistics — all under one accountable partnership founded in Kasargod, Kerala.",
  detail:
    "Every vertical is built on the same principle: direct sourcing, consistent quality, and long-term partnership with farmers, suppliers, and clients alike.",
  stats: [
    { value: "5", label: "Business Sectors" },
    { value: "2", label: "Consumer Brands" },
    { value: "Pan-India", label: "Logistics Permit" },
  ],
};

// ─── SECTORS ─────────────────────────────────────────────────
export const SECTORS = [
  {
    id: "fresh-produce",
    name: "Fresh Produce",
    shortName: "Fresh Produce",
    tagline: "Farm-to-market distribution that supports farmers and feeds India.",
    description:
      "We source fresh fruits, vegetables, and sugar directly from farms and deliver them to wholesale markets, retail stores, and institutional buyers across India using our own logistics fleet — cutting out unnecessary middlemen and keeping produce traceable from farm to final customer.",
    icon: "🌾",
    image: "/images/sectors/fresh-produce.jpg",
    accentColor: "#4CAF50",
    bgColor: "#F1F8F2",
    href: "/sectors/fresh-produce",
    categories: [
      { name: "Fresh Vegetables", detail: "Leafy greens, root veg, seasonal produce" },
      { name: "Fresh Fruits", detail: "Tropical, seasonal and everyday varieties" },
      { name: "Sugar", detail: "Bulk wholesale supply, industry" },
      { name: "Wholesale", detail: "Large-volume supply for mandis & caterers" },
      { name: "Retail", detail: "Packaged and loose produce for outlets" },
      { name: "Institutional", detail: "Hotels, canteen, food processors, supermarkets" },
    ],
    supplyChain: [
      { step: "01", title: "Farm Collection", detail: "Direct from growers, with fair, transparent pricing." },
      { step: "02", title: "Sort & Grade", detail: "Every batch checked for quality and grade before dispatch." },
      { step: "03", title: "Biskore Fleet", detail: "Delivered on our own vehicles — no third-party handling." },
      { step: "04", title: "Market Delivery", detail: "Reaching wholesale markets, retailers, and institutions." },
    ],
  },
  {
    id: "trade",
    name: "Trade",
    shortName: "Trade",
    tagline: "Reliable global import-export with quality goods for Indian markets.",
    description:
      "We import quality consumer goods — toys, electronics, and home appliances — from international manufacturers and supply them across India's wholesale and retail channels, backed by end-to-end trade management from sourcing through last-mile delivery.",
    icon: "🌐",
    image: "/images/sectors/trade.jpg",
    accentColor: "#2196F3",
    bgColor: "#F0F5FF",
    href: "/sectors/trade",
    categories: [
      { name: "Toys", detail: "Educational, recreational, infant" },
      { name: "Electronics", detail: "Consumer gadgets, accessories, tech" },
      { name: "Home Appliances", detail: "Kitchen & household, domestic distribution" },
    ],
    supplyChain: [
      { step: "01", title: "Global Sourcing", detail: "Direct relationships with international manufacturers." },
      { step: "02", title: "Documentation", detail: "Full customs and regulatory compliance handled in-house." },
      { step: "03", title: "Quality Inspection", detail: "Every shipment inspected on arrival before distribution." },
      { step: "04", title: "Fleet Distribution", detail: "Delivered pan-India through the Biskore fleet." },
    ],
  },
  {
    id: "koblaq",
    name: "Koblaq",
    shortName: "Koblaq",
    tagline: "Quality lifestyle and fashion products accessible to everyone.",
    description:
      "Koblaq is Biskore's lifestyle and fashion brand — a one-stop destination covering perfumes, cosmetics, clothing, innerwear, and footwear across India, designed for accessible, everyday quality.",
    icon: "✨",
    image: "/images/sectors/koblaq.jpg",
    accentColor: "#111111",
    bgColor: "#F9F9F9",
    href: "/sectors/koblaq",
    categories: [
      { name: "Ladies Clothing", detail: "Tops, dresses, fusion wear" },
      { name: "Men's Clothing", detail: "Shirts, trousers, sets" },
      { name: "Kid's Clothing", detail: "Infants to teen" },
      { name: "Cosmetics", detail: "Skincare, makeup, care" },
      { name: "Perfumes", detail: "Men, women, unisex" },
      { name: "Inner Wear", detail: "Men, Women, Kids" },
      { name: "Footwear", detail: "Casual, formal, everyday" },
      { name: "Accessories", detail: "Bags, belts, add-ons" },
    ],
    supplyChain: [],
  },
  {
    id: "tastecore",
    name: "Tastecore",
    shortName: "Tastecore",
    tagline: "Consistent, fresh food and beverages loved across India.",
    description:
      "Tastecore brings consistent quality across spices, breakfast products, soft drinks, and juices to everyday consumers across India — built on taste consistency, freshness, and reliable quality in every batch.",
    icon: "🍃",
    image: "/images/sectors/tastecore.jpg",
    accentColor: "#E91E63",
    bgColor: "#FFF0F5",
    href: "/sectors/tastecore",
    categories: [
      { name: "Spices", detail: "Ground spices, blended masalas, regional mixes" },
      { name: "Whole Spices", detail: "Premium whole spices for home & food service" },
      { name: "Breakfast", detail: "Cereals, oats, porridge, ready-to-eat" },
      { name: "Soft Drinks", detail: "Carbonated beverages, flavoured drinks, sodas" },
      { name: "Juices", detail: "Fresh-pressed, packaged, fruit blends" },
      { name: "Packaged Foods", detail: "Snacks, namkeens, ready-to-cook" },
    ],
    supplyChain: [],
  },
  {
    id: "logistics",
    name: "Logistics",
    shortName: "Logistics",
    tagline: "Dependable pan-India freight for the group and beyond.",
    description:
      "Biskore operates a fleet of vehicles with All India Permit — enabling unrestricted inter-state freight movement. Originally built for our own fresh produce and import operations, we now offer B2B logistics services to external clients.",
    icon: "🚛",
    image: "/images/sectors/logistics.jpg",
    accentColor: "#FF9800",
    bgColor: "#FFF8E1",
    href: "/sectors/logistics",
    categories: [
      { name: "Fresh Produce", detail: "Cold and time-sensitive cargo delivery" },
      { name: "Imported Goods", detail: "Electronics, appliances, and consumer goods" },
      { name: "Brand Distribution", detail: "Koblaq and Tastecore distribution across India" },
      { name: "B2B Freight", detail: "Third-party logistics for external businesses" },
      { name: "Fixed Routes", detail: "Scheduled routes and dedicated capacity" },
    ],
    supplyChain: [
      { step: "01", title: "Booking", detail: "Client request received and confirmed" },
      { step: "02", title: "Route Planning", detail: "Optimised dispatch scheduling" },
      { step: "03", title: "Fleet Dispatch", detail: "All India Permit vehicles deployed" },
      { step: "04", title: "Live Tracking", detail: "Delivery monitored in real time" },
      { step: "05", title: "POD & Close", detail: "Proof of delivery issued" },
    ],
  },
] as const;

// ─── STRENGTHS / WHY BISKORE ─────────────────────────────────
export const STRENGTHS = [
  {
    icon: "🌱",
    title: "Direct Farm-to-Market",
    detail:
      "Fresh produce collected directly from farms — fresher, traceable, no unnecessary middlemen.",
  },
  {
    icon: "🌍",
    title: "Global Trade Expertise",
    detail:
      "End-to-end import-export management: sourcing, customs, documentation, and distribution.",
  },
  {
    icon: "🚛",
    title: "Own Logistics Fleet",
    detail:
      "All India Permit vehicles supporting all five sectors and available to external clients.",
  },
  {
    icon: "🏷️",
    title: "Two Consumer Brands",
    detail:
      "Koblaq and Tastecore — purpose-built consumer brands, not private labels.",
  },
  {
    icon: "✅",
    title: "Quality Across All Five",
    detail:
      "One consistent quality and compliance standard across every sector.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnerships",
    detail:
      "Transparent, fair dealing with every farmer, supplier, partner, and client.",
  },
] as const;

// ─── CORE VALUES ─────────────────────────────────────────────
export const VALUES = [
  { value: "Quality", detail: "High standard across all five sectors" },
  { value: "Integrity", detail: "Honest and transparent in every dealing" },
  { value: "Reliability", detail: "Dependable for every partner and customer" },
  { value: "Accountability", detail: "One standard across all verticals" },
  { value: "Growth", detail: "Agile and open to new opportunities" },
] as const;

// ─── HOW WE WORK ─────────────────────────────────────────────
export const HOW_WE_WORK = {
  steps: [
    { step: "01", icon: "🌱", title: "Sourcing & Procurement", detail: "Identifying and qualifying the right suppliers, growers, and manufacturers for each sector." },
    { step: "02", icon: "✅", title: "Quality Inspection", detail: "Verifying product and produce quality at origin and on receipt against defined benchmarks." },
    { step: "03", icon: "📋", title: "Documentation & Compliance", detail: "Preparing all trade, customs, regulatory, and logistics paperwork accurately." },
    { step: "04", icon: "🚛", title: "Logistics & Fulfilment", detail: "Deploying own fleet and third-party carriers for reliable movement of goods." },
    { step: "05", icon: "📦", title: "Distribution & Delivery", detail: "Supplying to wholesale markets, retail partners, institutions, and end customers." },
    { step: "06", icon: "🤝", title: "After-Sales & Relationship", detail: "Maintaining long-term partnerships beyond the transaction." },
  ],
};

// ─── VISION & MISSION ────────────────────────────────────────
export const VISION =
  "To be a trusted, multi-sector business group recognised for the quality of our products and services, the reliability of our operations, and the value we create for partners, customers, and communities across India and beyond.";

export const MISSION_PER_SECTOR = [
  { sector: "Fresh Produce", mission: "Farm-to-market distribution that supports farmers and feeds India." },
  { sector: "Trade", mission: "Reliable global import-export with quality goods for Indian markets." },
  { sector: "Koblaq", mission: "Quality lifestyle and fashion products accessible to everyone." },
  { sector: "Tastecore", mission: "Consistent, fresh food and beverages loved across India." },
  { sector: "Logistics", mission: "Dependable pan-India freight for the group and beyond." },
] as const;

// ─── FUTURE OUTLOOK ──────────────────────────────────────────
export const FUTURE_OUTLOOK = [
  "Expanding the fresh produce distribution network to more states and mandis across India",
  "Building Koblaq's retail and online distribution, with a full cosmetics and lifestyle range",
  "Scaling Tastecore's spice, breakfast, and beverage products to new regions and retail formats",
  "Growing Biskore Logistics as a standalone B2B service to external clients",
  "Formalising quality and compliance certifications across all five sectors",
  "Exploring e-commerce channels for Koblaq and Tastecore consumer brands",
  "Growing our import-export product range by strategically introducing new premium consumer electronics and home appliance categories across India",
] as const;

// ─── LEADERSHIP ──────────────────────────────────────────────
export const LEADERSHIP = [
  {
    name: "Biju",
    role: "Co-Founder & Managing Partner",
    initial: "B",
    image: "/images/founder_biju.jpg",
  },
  {
    name: "Sujith",
    role: "Co-Founder & Managing Partner",
    initial: "S",
    image: "/images/founder_sujith.jpg",
  },
] as const;
