const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'components', 'sectors', 'pages');

let content = fs.readFileSync(path.join(dir, 'ImportExportContent.tsx'), 'utf-8');
content = content.replace(
  "                  {cat.title}\n                </h3>",
  "                <h3 style={{ fontSize: '1.6rem', fontWeight: 300, color: '#0D0D0D', marginBottom: '0.75rem', letterSpacing: '-0.03em' }}>\n                  {cat.title}\n                </h3>"
);
fs.writeFileSync(path.join(dir, 'ImportExportContent.tsx'), content, 'utf-8');

content = fs.readFileSync(path.join(dir, 'KoblaqContent.tsx'), 'utf-8');
content = content.replace(
  "                  {item.desc}\n                </p>",
  "                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, fontWeight: 300, flexGrow: 1 }}>\n                  {item.desc}\n                </p>"
);
fs.writeFileSync(path.join(dir, 'KoblaqContent.tsx'), content, 'utf-8');

content = fs.readFileSync(path.join(dir, 'LogisticsContent.tsx'), 'utf-8');
content = content.replace(
  "                  {svc.title}\n                </h3>",
  "                <h3 style={{ fontSize: '1.4rem', fontWeight: 300, color: '#FFFFFF', marginBottom: '0.75rem' }}>\n                  {svc.title}\n                </h3>"
);
fs.writeFileSync(path.join(dir, 'LogisticsContent.tsx'), content, 'utf-8');

content = fs.readFileSync(path.join(dir, 'TastecoreContent.tsx'), 'utf-8');
content = content.replace(
  "                  {p.title}\n                </h3>",
  "                <h3 style={{ fontSize: '1.35rem', fontWeight: 300, color: '#0D0D0D', marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>\n                  {p.title}\n                </h3>"
);
fs.writeFileSync(path.join(dir, 'TastecoreContent.tsx'), content, 'utf-8');
