const fs = require('fs');
const glob = require('glob');

const files = [
  ...glob.sync('src/components/sectors/pages/*.tsx'),
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // A function to process tags and their styles
  function updateTagStyle(html, tag, newProps) {
    const regex = new RegExp(`(<${tag}[^>]*style={{)([^}]+)(}}[^>]*>)`, 'g');
    return html.replace(regex, (match, prefix, styleStr, suffix) => {
      // If it's a paragraph and it has textTransform uppercase, it's an eyebrow, skip it.
      if (styleStr.includes('textTransform:') && styleStr.includes('uppercase')) {
        return match;
      }
      
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

  content = updateTagStyle(content, 'h1', {
    fontSize: "'clamp(2rem, 5vw, 4rem)'",
    fontWeight: 300,
    letterSpacing: "'-0.03em'",
    lineHeight: 1.1
  });

  content = updateTagStyle(content, 'h2', {
    fontSize: "'clamp(2rem, 5vw, 4rem)'",
    fontWeight: 300,
    letterSpacing: "'-0.03em'",
    lineHeight: 1.1
  });

  content = updateTagStyle(content, 'h3', {
    fontSize: "'1.25rem'",
    fontWeight: 500,
    letterSpacing: "'-0.02em'"
  });

  content = updateTagStyle(content, 'p', {
    fontSize: "'clamp(1rem, 1.4vw, 1.15rem)'",
    fontWeight: 300,
    lineHeight: 1.7
  });

  if (content !== fs.readFileSync(file, 'utf-8')) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
});
