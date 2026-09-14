const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/components/sectors/pages/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Regex to match a div that contains "Section 0X •" and has no other nested divs inside it.
  const regex = /<div[^>]*>(?:(?!<div)[\s\S])*?Section 0[1-5]\s*•(?:(?!<div)[\s\S])*?<\/div>/gi;
  let updatedContent = content.replace(regex, '');

  // Also some might not have the bullet "•", or might just be a div directly containing the text
  // Let's also do a second pass for any standalone divs with "Section 0X" (like Section 04 in ImportExportContent.tsx)
  const regex2 = /<div[^>]*>\s*Section 0[1-5]\s*•\s*[^<]*<\/div>/gi;
  updatedContent = updatedContent.replace(regex2, '');

  if (content !== updatedContent) {
    fs.writeFileSync(file, updatedContent, 'utf-8');
    console.log(`Removed section headers from ${file}`);
  }
});
