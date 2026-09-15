const fs = require('fs');

const fixFiles = [
  'src/app/sectors/[slug]/page.tsx',
  'src/app/about/page.tsx',
  'src/components/home/HeroSection.tsx',
  'src/lib/constants.ts'
];

fixFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replace(/href="\/sectors"/g, 'href="/"');
  fs.writeFileSync(file, content, 'utf-8');
  console.log(`Updated links in ${file}`);
});
