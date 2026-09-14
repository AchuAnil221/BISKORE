const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/components/sectors/pages/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Also remove boxShadow inside motion tags and ternary operators
  // e.g. boxShadow: hoveredCard === idx ? '...' : '...'
  // e.g. whileHover={{ y: -6, boxShadow: '...' }}
  
  let updatedContent = content.replace(/\s*boxShadow:\s*(?:[^,}]*(?:'|`|")[^,}]*(?:'|`|")[^,}]*|[^,}]+)(?:,|(?=\s*\}))/g, '');

  if (content !== updatedContent) {
    fs.writeFileSync(file, updatedContent, 'utf-8');
    console.log(`Removed ALL shadows from ${file}`);
  }
});
