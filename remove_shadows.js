const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/components/sectors/pages/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Remove boxShadow properties using regex
  // Match `boxShadow: '...'` or `boxShadow: "..."` with trailing comma if exists
  const updatedContent = content.replace(/\s*boxShadow:\s*['"][^'"]+['"],?/g, '');

  if (content !== updatedContent) {
    fs.writeFileSync(file, updatedContent, 'utf-8');
    console.log(`Removed shadows from ${file}`);
  }
});
