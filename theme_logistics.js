const fs = require('fs');

const file = 'src/components/sectors/pages/LogisticsContent.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Section Backgrounds
content = content.replace(/background:\s*'#0B0F17'/g, "background: '#F8F7F4'");
content = content.replace(/background:\s*'#0A1118'/g, "background: '#F8F7F4'");
content = content.replace(/background:\s*'#080C13'/g, "background: '#F8F7F4'");
content = content.replace(/background:\s*'linear-gradient\(180deg,\s*#0B0F17\s*0%,\s*#080C13\s*100%\)'/g, "background: '#F8F7F4'");
content = content.replace(/background:\s*'linear-gradient\(180deg,\s*#080C13\s*0%,\s*#05080C\s*100%\)'/g, "background: '#F8F7F4'");
content = content.replace(/background:\s*'linear-gradient\(180deg,\s*#05080C\s*0%,\s*#020406\s*100%\)'/g, "background: '#F8F7F4'");

// Text Colors
content = content.replace(/color:\s*'#F1F5F9'/g, "color: '#0D0D0D'");
content = content.replace(/color:\s*'#FFFFFF'/g, "color: '#0D0D0D'");
content = content.replace(/color:\s*'rgba\(255,\s*255,\s*255,\s*0\.7\)'/g, "color: '#555555'");
content = content.replace(/color:\s*'rgba\(255,255,255,0\.7\)'/g, "color: '#555555'");
content = content.replace(/color:\s*'rgba\(255,\s*255,\s*255,\s*0\.65\)'/g, "color: '#555555'");
content = content.replace(/color:\s*'rgba\(255,255,255,0\.65\)'/g, "color: '#555555'");
content = content.replace(/color:\s*'rgba\(255,\s*255,\s*255,\s*0\.6\)'/g, "color: '#666666'");
content = content.replace(/color:\s*'rgba\(255,255,255,0\.6\)'/g, "color: '#666666'");
content = content.replace(/color:\s*'rgba\(255,\s*255,\s*255,\s*0\.5\)'/g, "color: '#777777'");
content = content.replace(/color:\s*'rgba\(255,255,255,0\.5\)'/g, "color: '#777777'");
content = content.replace(/fill="rgba\(255,255,255,0\.5\)"/g, 'fill="#666666"');
content = content.replace(/fill="rgba\(255,255,255,0\.7\)"/g, 'fill="#555555"');
content = content.replace(/fill="#FFFFFF"/g, 'fill="#0D0D0D"');
content = content.replace(/stroke="rgba\(255,255,255,0\.3\)"/g, 'stroke="rgba(0,0,0,0.15)"');
content = content.replace(/stroke="rgba\(255,255,255,0\.15\)"/g, 'stroke="rgba(0,0,0,0.1)"');
content = content.replace(/stroke="rgba\(255,255,255,0\.03\)"/g, 'stroke="rgba(0,0,0,0.05)"');


// Borders and Dividers
content = content.replace(/borderBottom:\s*'1px solid rgba\(255,\s*255,\s*255,\s*0\.08\)'/g, "borderBottom: '1px solid rgba(255, 152, 0, 0.15)'");
content = content.replace(/borderBottom:\s*'1px solid rgba\(255,255,255,0\.08\)'/g, "borderBottom: '1px solid rgba(255, 152, 0, 0.15)'");
content = content.replace(/border:\s*'1px solid rgba\(255,\s*255,\s*255,\s*0\.08\)'/g, "border: '1px solid rgba(255, 152, 0, 0.2)'");
content = content.replace(/border:\s*'1px solid rgba\(255,255,255,0\.08\)'/g, "border: '1px solid rgba(255, 152, 0, 0.2)'");


// Cards & Animation Box backgrounds (changing from dark navy to soft light peach/white)
content = content.replace(/background:\s*'#151C28'/g, "background: '#FFFFFF'");
content = content.replace(/background:\s*'linear-gradient\(135deg,\s*#111827\s*0%,\s*#1E293B\s*100%\)'/g, "background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF5EA 100%)'");
content = content.replace(/background:\s*'#1E293B'/g, "background: '#FFF0DF'");

// SVG elements (changing from dark navy/slate to light)
content = content.replace(/fill="#0F172A"/g, 'fill="#FFFFFF"');
content = content.replace(/fill="#1E293B"/g, 'fill="#FFF0DF"');
content = content.replace(/fill="#020617"/g, 'fill="#333"'); // Wheels/Road from pitch black to #333
content = content.replace(/stroke="#334155"/g, 'stroke="#FFE0B2"');
content = content.replace(/stroke="#475569"/g, 'stroke="#FFCC80"');


fs.writeFileSync(file, content, 'utf-8');
console.log('Applied light orange theme to LogisticsContent.tsx');
