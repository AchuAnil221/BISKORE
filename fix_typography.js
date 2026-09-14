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
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${file}, not found.`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // H2 Replacements
  // Match the style object of h2 or similar large headings
  content = content.replace(/fontSize:\s*'clamp\([^)]+\)'/g, "fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)'");
  
  // Replace font weights for headings. Usually they were 800 or 900
  content = content.replace(/fontWeight:\s*800/g, "fontWeight: 300");
  content = content.replace(/fontWeight:\s*900/g, "fontWeight: 300");
  
  // Replace colors for headings that are dark blue or similar to #0D0D0D
  content = content.replace(/color:\s*'#0A2540'/g, "color: '#0D0D0D'");
  
  // Replace letter spacing for headings
  content = content.replace(/letterSpacing:\s*'-0\.02em'/g, "letterSpacing: '-0.03em'");
  content = content.replace(/letterSpacing:\s*'-0\.01em'/g, "letterSpacing: '-0.03em'");
  
  // Replace line heights for headings
  content = content.replace(/lineHeight:\s*1\.15/g, "lineHeight: 1.12");
  
  // Paragraphs / sub-text
  // Make sure we replace the main body text color and weight
  // We'll target typical paragraph fontSize
  content = content.replace(/fontSize:\s*'clamp\(1\.05rem[^)]+\)'/g, "fontSize: 'clamp(1rem, 1.4vw, 1.15rem)'");
  content = content.replace(/fontSize:\s*'1\.1rem'/g, "fontSize: 'clamp(1rem, 1.4vw, 1.15rem)'");
  content = content.replace(/fontSize:\s*'1\.15rem'/g, "fontSize: 'clamp(1rem, 1.4vw, 1.15rem)'");
  content = content.replace(/color:\s*'#444'/g, "color: '#555'");
  content = content.replace(/color:\s*'#666'/g, "color: '#555'");
  
  // Let's also add fontWeight: 300 to any style object that has color: '#555' and lacks fontWeight
  // Actually, since we want them to look exactly like the home page, let's just do a blanket regex to adjust the standard paragraph styles
  content = content.replace(/lineHeight:\s*1\.8,?/g, "lineHeight: 1.85, fontWeight: 300,");
  content = content.replace(/lineHeight:\s*1\.7,?/g, "lineHeight: 1.85, fontWeight: 300,");
  content = content.replace(/lineHeight:\s*1\.65?,?/g, "lineHeight: 1.75, fontWeight: 300,");
  
  // For section headers / small text
  content = content.replace(/fontSize:\s*'0\.8rem',\s*fontWeight:\s*700/g, "fontSize: '0.8rem', fontWeight: 600");
  content = content.replace(/letterSpacing:\s*'0\.15em'/g, "letterSpacing: '0.12em'");
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${file}`);
});
