const fs = require('fs');

const file = 'src/components/sectors/pages/LogisticsContent.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Replace dark section backgrounds
content = content.replace(/background:\s*'#0F172A'/g, "background: '#F8F7F4'");
content = content.replace(/background:\s*'#111827'/g, "background: '#FFF8F0'");
content = content.replace(/background:\s*'#131C2E'/g, "background: '#FFFFFF'");
content = content.replace(/background:\s*selectedService\s*===\s*i\s*\?\s*'#1E293B'\s*:\s*'#131C2E'/g, "background: selectedService === i ? '#FFF0DF' : '#FFFFFF'");
content = content.replace(/background:\s*'linear-gradient\(135deg,\s*#1E293B\s*0%,\s*#0F172A\s*100%\)'/g, "background: 'linear-gradient(135deg, #FFF5EA 0%, #FFF0DF 100%)'");

// Replace light text on these newly white cards to dark text
content = content.replace(/color:\s*'#FFFFFF'/g, "color: '#0D0D0D'");
content = content.replace(/color:\s*'rgba\(255,255,255,0\.65\)'/g, "color: '#555555'");
content = content.replace(/color:\s*'rgba\(255,\s*255,\s*255,\s*0\.65\)'/g, "color: '#555555'");
content = content.replace(/color:\s*'rgba\(255,255,255,0\.7\)'/g, "color: '#555555'");
content = content.replace(/color:\s*'rgba\(255,\s*255,\s*255,\s*0\.7\)'/g, "color: '#555555'");
content = content.replace(/color:\s*'rgba\(255,255,255,0\.5\)'/g, "color: '#777777'");
content = content.replace(/color:\s*'rgba\(255,\s*255,\s*255,\s*0\.5\)'/g, "color: '#777777'");

// Replace dark mode borders
content = content.replace(/border:\s*'1px solid rgba\(255,255,255,0\.08\)'/g, "border: '1px solid rgba(255, 152, 0, 0.15)'");
content = content.replace(/borderTop:\s*'1px solid rgba\(255,255,255,0\.06\)'/g, "borderTop: '1px solid rgba(255, 152, 0, 0.15)'");

fs.writeFileSync(file, content, 'utf-8');
console.log('Fixed logistics colors');
