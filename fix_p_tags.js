const fs = require('fs');
const path = require('path');

const files = [
  'ImportExportContent.tsx',
  'KoblaqContent.tsx',
  'TastecoreContent.tsx',
  'LogisticsContent.tsx',
  'FreshProduceContent.tsx'
];

const dir = path.join(__dirname, 'src', 'components', 'sectors', 'pages');

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // We want to find <p tags that have the huge clamp size and replace it.
  // Using a regex with lookbehind or just matching the block.
  // We'll match `<p` followed by anything until `fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)'`
  // But we have to make sure we don't jump over other tags.
  // We can just use a replacer function.
  
  content = content.replace(/<p\s+([\s\S]*?)fontSize:\s*'clamp\(2\.25rem,\s*4\.5vw,\s*3\.75rem\)'/g, (match, p1) => {
      // Check if there is a closing tag `>` in p1. If there is, it means we jumped across tags.
      if (p1.includes('>')) {
          return match; // don't replace
      }
      return `<p ${p1}fontSize: 'clamp(1rem, 1.4vw, 1.15rem)'`;
  });

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Fixed ${file}`);
});
