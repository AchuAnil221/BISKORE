const fs = require('fs');
const path = require('path');

const files = [
  'ImportExportContent.tsx',
  'KoblaqContent.tsx',
  'TastecoreContent.tsx',
  'LogisticsContent.tsx'
];

const dir = path.join(__dirname, 'src', 'components', 'sectors', 'pages');

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/fontWeight: 300,5,?/g, 'fontWeight: 300,');
  fs.writeFileSync(filePath, content, 'utf-8');
});
