const fs = require('fs');

let tc = fs.readFileSync('src/components/sectors/pages/TastecoreContent.tsx', 'utf-8');
const linesToRemove = [
  "Section 01 • Flavor Philosophy",
  "Section 02 • Consumer Range",
  "Section 03 • Processing Standard",
  "Section 04 • Consumer Trust"
];

// Instead of removing just the text, we need to remove the parent div.
// Let's just find the text and remove the <div> around it.
for (let line of linesToRemove) {
  const idx = tc.indexOf(line);
  if (idx !== -1) {
    let startIdx = tc.lastIndexOf('<div', idx);
    let endIdx = tc.indexOf('</div>', idx) + 6;
    if (startIdx !== -1 && endIdx !== -1) {
      tc = tc.substring(0, startIdx) + tc.substring(endIdx);
    }
  }
}

fs.writeFileSync('src/components/sectors/pages/TastecoreContent.tsx', tc, 'utf-8');
console.log('Fixed Tastecore');
