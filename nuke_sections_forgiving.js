const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/components/sectors/pages/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  let original = content;

  // Match any div that contains the word "Section 0" and has no nested divs inside it.
  // We can do this safely by matching <div up to </div>, making sure there's no <div inside.
  
  // A regex for a div without nested divs:
  // /<div(?:[^>](?!<div))*?Section 0[1-9].*?<\/div>/gi
  
  const regex = /<div(?:(?!\/?div>)[\s\S])*?Section 0[1-9][\s\S]*?<\/div>/gi;
  
  // Let's manually write a replacement loop so we don't accidentally match too much.
  let matches = content.match(regex);
  if (matches) {
    matches.forEach(match => {
      // Check if this match contains another <div inside. If it does, our regex matched too much (e.g. from an outer div)
      // Actually (?!/?div>) prevents matching ANY <div> or </div> inside. So it's safe.
      content = content.replace(match, '');
    });
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Nuked section headers from ${file}`);
  }
});
