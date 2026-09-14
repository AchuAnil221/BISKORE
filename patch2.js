const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'components', 'sectors', 'pages');

let content = fs.readFileSync(path.join(dir, 'ImportExportContent.tsx'), 'utf-8');
content = content.replace(
  "              >\n                  {s.num}\n                </span>\n                  {s.title}\n                </h4>",
  "              >\n                <span style={{ fontSize: '1.25rem', fontWeight: 300, color: '#90CAF9', marginBottom: '1rem' }}>\n                  {s.num}\n                </span>\n                <h4 style={{ fontSize: '1.15rem', fontWeight: 300, color: '#0D0D0D', marginBottom: '0.6rem' }}>\n                  {s.title}\n                </h4>"
);
fs.writeFileSync(path.join(dir, 'ImportExportContent.tsx'), content, 'utf-8');

content = fs.readFileSync(path.join(dir, 'KoblaqContent.tsx'), 'utf-8');
content = content.replace(
  "                <div style={{ width: 36, height: 2, background: '#C5A059', marginBottom: '1.75rem' }} />\n                  {card.title}\n                </h3>",
  "                <div style={{ width: 36, height: 2, background: '#C5A059', marginBottom: '1.75rem' }} />\n                <h3 style={{ fontSize: '1.5rem', fontWeight: 300, color: '#FFFFFF', marginBottom: '0.5rem' }}>\n                  {card.title}\n                </h3>"
);
fs.writeFileSync(path.join(dir, 'KoblaqContent.tsx'), content, 'utf-8');

content = fs.readFileSync(path.join(dir, 'LogisticsContent.tsx'), 'utf-8');
content = content.replace(
  "            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>\n                LIVE RUNTIME DISPATCH TRACK\n              </span>",
  "            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>\n              <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.12em', color: '#FF9800' }}>\n                LIVE RUNTIME DISPATCH TRACK\n              </span>"
);
fs.writeFileSync(path.join(dir, 'LogisticsContent.tsx'), content, 'utf-8');

content = fs.readFileSync(path.join(dir, 'TastecoreContent.tsx'), 'utf-8');
content = content.replace(
  "                }}\n              >\n                  PHASE 0{idx + 1}\n                </div>\n                  {f.title}\n                </h4>",
  "                }}\n              >\n                <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', color: '#FF7043', marginBottom: '1rem' }}>\n                  PHASE 0{idx + 1}\n                </div>\n                <h4 style={{ fontSize: '1.15rem', fontWeight: 300, color: '#0D0D0D', marginBottom: '0.5rem' }}>\n                  {f.title}\n                </h4>"
);
fs.writeFileSync(path.join(dir, 'TastecoreContent.tsx'), content, 'utf-8');

