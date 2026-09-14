const fs = require('fs');

// 1. TastecoreContent.tsx
let tc = fs.readFileSync('src/components/sectors/pages/TastecoreContent.tsx', 'utf-8');
tc = tc.replace(/<div style={{ display: '(inline-)?flex', alignItems: 'center', gap: '0\.[575]+rem', marginBottom: '1(?:\.25)?rem' }}>\s*<span[^>]*><\/span>\s*<span[^>]*>\s*Section 0[1-5] • [^<]*<\/span>\s*(?:<span[^>]*><\/span>\s*)?<\/div>/g, '');
tc = tc.replace(/whileHover={{ y: -6, boxShadow: `0 20px 35px -10px \$\{p.accent\}26` }}/g, 'whileHover={{ y: -6 }}');

// Tastecore animation fix
tc = tc.replace(/initial={{ opacity: 0, x: 0, y: 0 }}\s*animate={{ opacity: 1, x: -120, y: -60 }}/g, 'initial={{ x: -120, y: -60 }}\n                    animate={{ x: -35, y: -20 }}');
tc = tc.replace(/initial={{ opacity: 0, x: 0, y: 0 }}\s*animate={{ opacity: 1, x: 120, y: -60 }}/g, 'initial={{ x: 120, y: -60 }}\n                    animate={{ x: 35, y: -20 }}');
tc = tc.replace(/initial={{ opacity: 0, x: 0, y: 0 }}\s*animate={{ opacity: 1, x: -110, y: 55 }}/g, 'initial={{ x: -110, y: 55 }}\n                    animate={{ x: -35, y: 20 }}');
tc = tc.replace(/initial={{ opacity: 0, x: 0, y: 0 }}\s*animate={{ opacity: 1, x: 110, y: 55 }}/g, 'initial={{ x: 110, y: 55 }}\n                    animate={{ x: 35, y: 20 }}');

fs.writeFileSync('src/components/sectors/pages/TastecoreContent.tsx', tc, 'utf-8');


// 2. KoblaqContent.tsx
let kc = fs.readFileSync('src/components/sectors/pages/KoblaqContent.tsx', 'utf-8');
kc = kc.replace(/<div style={{ display: '(inline-)?flex', alignItems: 'center', gap: '0\.[575]+rem', marginBottom: '1(?:\.25)?rem' }}>\s*<span[^>]*><\/span>\s*<span[^>]*>\s*Section 0[1-5] • [^<]*<\/span>\s*(?:<span[^>]*><\/span>\s*)?<\/div>/g, '');
kc = kc.replace(/boxShadow: hoveredCard === idx \? `0 20px 40px -15px \$\{item.accent\}33` : '0 10px 30px rgba\(0,0,0,0\.3\)',/g, '');

// Logo side by side
const logoOld = `<div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src="/images/koblaq/logo_cropped_6.png"
                alt="Koblaq Logo"
                style={{
                  height: '140px',
                  width: 'auto',
                  mixBlendMode: 'screen',
                  opacity: 0.9,
                  marginBottom: '1rem',
                  clipPath: 'inset(4px)',
                }}
              />
              <div
                style={{
                  fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                  fontWeight: 300,
                  letterSpacing: '0.3em',
                  color: '#C5A059',
                  textTransform: 'uppercase',
                  marginTop: '1rem',
                }}
              >
                Lifestyle, made accessible.
              </div>
            </div>

            <div style={{ width: '60px', height: '1px', background: '#C5A059', margin: '2rem auto', opacity: 0.6 }} />

            <p style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.85,
                maxWidth: '720px',
                margin: '0 auto',
                fontWeight: 300,
              }}
            >
              Koblaq brings together clothing, beauty, fragrances, footwear and everyday lifestyle products under one accessible brand.
            </p>`;

const logoNew = `<div style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', textAlign: 'left' }}>
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
            </div>`;
kc = kc.replace(logoOld, logoNew);

// Remove Optical Scanner
const scannerBoxRegex = /\{\/\*\s*Interactive Quality Scanner Visualization\s*\*\/\}[\s\S]*?<\/svg>\s*<\/div>/g;
kc = kc.replace(scannerBoxRegex, '');

// Remove category icons/tags + fix grid
const iconTagsRegex = /<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>\s*<div style={{ padding: '0\.75rem', borderRadius: '12px', background: 'rgba\(255,255,255,0\.03\)' }}>\s*\{item\.icon\}\s*<\/div>\s*<span[^>]*>\s*\{item\.category\}\s*<\/span>\s*<\/div>/g;
kc = kc.replace(iconTagsRegex, '');
kc = kc.replace(/gridTemplateColumns: 'repeat\(auto-fit, minmax\(280px, 1fr\)\)',/g, "gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',");

fs.writeFileSync('src/components/sectors/pages/KoblaqContent.tsx', kc, 'utf-8');

// 3. FreshProduceContent.tsx
let fc = fs.readFileSync('src/components/sectors/pages/FreshProduceContent.tsx', 'utf-8');
const oldCrate = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
                </svg>`;
const newCrate = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M8 11C7 6 11 5 12 8C13 5 17 6 16 11" fill="#4CAF50" stroke="#2E7D32" strokeWidth="1" strokeLinejoin="round" />
                  <circle cx="9" cy="12" r="3.5" fill="#E53935" />
                  <circle cx="15" cy="12.5" r="3" fill="#FF9800" />
                  <path d="M4 12 L20 12 L19 20 L5 20 Z" fill="#8D6E63" stroke="#5D4037" strokeWidth="1.5" strokeLinejoin="round" />
                  <line x1="4.5" y1="15" x2="19.5" y2="15" stroke="#5D4037" strokeWidth="1" />
                  <line x1="4.8" y1="18" x2="19.2" y2="18" stroke="#5D4037" strokeWidth="1" />
                </svg>`;
fc = fc.replace(oldCrate, newCrate);
fs.writeFileSync('src/components/sectors/pages/FreshProduceContent.tsx', fc, 'utf-8');

console.log('Restored all fixes!');
