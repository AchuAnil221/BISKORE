const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/{components/sectors/pages,app/about,app/contact}/**/*.tsx');

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');
  
  // Standardize H2 Headings
  // Replace anything that looks like clamp(x, y, z) with the standard H2 size if it's a large heading
  content = content.replace(/fontSize:\s*['"]clamp\(2\.[0-9]+rem,\s*[0-9\.]+vw,\s*[0-9\.]+rem\)['"]/g, "fontSize: 'clamp(2rem, 5vw, 4rem)'");
  content = content.replace(/fontSize:\s*['"]clamp\(3\.[0-9]+rem,\s*[0-9\.]+vw,\s*[0-9\.]+rem\)['"]/g, "fontSize: 'clamp(2rem, 5vw, 4rem)'");
  content = content.replace(/fontSize:\s*['"]clamp\(1\.[5-9]+rem,\s*[0-9\.]+vw,\s*[0-9\.]+rem\)['"]/g, "fontSize: 'clamp(2rem, 5vw, 4rem)'");

  // Fix font weights on large text. 
  // We can just find all instances of large clamp and force fontWeight 300 and letterSpacing -0.03em
  // This might be tricky with regex, so let's just do a pass to replace specific bad fontWeights near large clamps.
  
  // Replace large font weights
  content = content.replace(/fontWeight:\s*(800|700|600|500)(?=,[\s\n]*letterSpacing:\s*['"]-0\.0[23]em['"])/g, "fontWeight: 300");
  content = content.replace(/fontWeight:\s*(800|700|600|500)(?=,[\s\n]*lineHeight:\s*[1-9\.]+)/g, "fontWeight: 300"); // some might not have letterSpacing right after
  
  // Standardize normal text to match home
  // In our previous fix we set `p` tags to `clamp(1rem, 1.4vw, 1.15rem)`
  content = content.replace(/fontWeight:\s*400/g, "fontWeight: 300"); // Home uses 300 for a lot of paragraphs too

  // Let's specifically target the FreshProduceContent.tsx 'Fresh From the Source' H2
  content = content.replace(/fontSize:\s*"clamp\(2\.4rem,\s*4vw,\s*3\.5rem\)",\s*\n\s*fontWeight:\s*800/g, "fontSize: 'clamp(2rem, 5vw, 4rem)',\n                  fontWeight: 300");
  
  if (content !== fs.readFileSync(file, 'utf-8')) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated typography in ${file}`);
  }
});
