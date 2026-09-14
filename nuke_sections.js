const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/components/sectors/pages/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Find the string "Section 0"
  // Let's use a simpler regex: match <div ...> ... Section 0X ... </div> where there are no other </div> inside.
  // Actually, sometimes they are <div style={{ display: 'flex', ... }}>
  // <span ... />
  // <span ...>Section 0X • ...</span>
  // <span ... />
  // </div>
  // We can just regex this exact pattern since they all look identical:
  
  const regex = /<div\s+style={{[^}]*display:\s*(?:'|"|`)inline-flex(?:'|"|`)[^}]*}}>\s*<span[^>]*><\/span>\s*<span[^>]*>\s*Section 0[1-5]\s*•[^<]*<\/span>\s*<span[^>]*><\/span>\s*<\/div>/gi;
  
  const regex2 = /<div\s+style={{[^}]*display:\s*(?:'|"|`)flex(?:'|"|`)[^}]*}}>\s*<span[^>]*><\/span>\s*<span[^>]*>\s*Section 0[1-5]\s*•[^<]*<\/span>\s*<\/div>/gi;

  const regex3 = /<div[^>]*>\s*<span[^>]*>\s*Section 0[1-5]\s*•[^<]*<\/span>\s*<\/div>/gi;

  let original = content;
  content = content.replace(regex, '');
  content = content.replace(regex2, '');
  content = content.replace(regex3, '');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Nuked section headers from ${file}`);
  }
});
