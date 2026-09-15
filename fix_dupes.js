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
  
  let lines = fs.readFileSync(filePath, 'utf-8').split('\n');
  let result = [];
  let inStyle = false;
  let hasFontWeight = false;
  
  // A naive approach: just remove any fontWeight line if it's right after another fontWeight
  // Actually, since we only introduced duplicates via regex, let's just find and remove them.
  for (let i = 0; i < lines.length; i++) {
     let line = lines[i];
     if (line.includes('fontWeight: 300')) {
       // if the next few lines also have fontWeight, we delete the duplicate
       let duplicateFound = false;
       for(let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
          if (lines[j].includes('fontWeight:') && !lines[j].includes('</')) {
             // found a duplicate fontWeight in close proximity
             // we'll just not push the current line
             duplicateFound = true;
             break;
          }
       }
       if (duplicateFound) {
         continue; // skip this line
       }
     }
     result.push(line);
  }
  fs.writeFileSync(filePath, result.join('\n'), 'utf-8');
});
