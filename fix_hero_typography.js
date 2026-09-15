const fs = require('fs');

const files = [
  'src/app/sectors/[slug]/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');

  // Regex to target the H1 in the hero section specifically
  // We want to replace properties: fontSize, fontWeight, letterSpacing, lineHeight
  
  function updateTagStyle(html, tag, newProps) {
    const regex = new RegExp(`(<${tag}[^>]*style={{)([^}]+)(}}[^>]*>)`, 'g');
    return html.replace(regex, (match, prefix, styleStr, suffix) => {
      let updatedStyle = styleStr;
      
      Object.keys(newProps).forEach(key => {
        const val = newProps[key];
        const propRegex = new RegExp(`${key}:\\s*(['"\`][^'"\`]+['"\`]|[0-9\\.]+)`);
        if (propRegex.test(updatedStyle)) {
          updatedStyle = updatedStyle.replace(propRegex, `${key}: ${val}`);
        } else {
          updatedStyle = updatedStyle.trim();
          if (updatedStyle.endsWith(',')) {
            updatedStyle += ` \n${key}: ${val}`;
          } else {
            updatedStyle += `, \n${key}: ${val}`;
          }
        }
      });
      
      return prefix + updatedStyle + suffix;
    });
  }

  // Set H1 to exactly match home hero H1
  content = updateTagStyle(content, 'h1', {
    fontSize: "'clamp(2rem, 5vw, 3.5rem)'",
    fontWeight: 500,
    letterSpacing: "'-0.02em'",
    lineHeight: 1.15
  });

  // Since we don't want to break the <p> elements inside the pages if they've already been set,
  // we will ONLY target the very first <p> which is the Hero tagline in these files, OR
  // since these are page.tsx files (not the Content files), ALL <p> tags in them are hero tags anyway.
  
  content = updateTagStyle(content, 'p', {
    fontSize: "'clamp(1rem, 1.5vw, 1.2rem)'",
    fontWeight: 400
  });

  if (content !== fs.readFileSync(file, 'utf-8')) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated hero typography in ${file}`);
  }
});
