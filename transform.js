const fs = require('fs');
const glob = require('glob');
const babel = require('@babel/core');

const files = [
  ...glob.sync('src/components/sectors/pages/*.tsx'),
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx'
];

const h2Props = {
  fontSize: "'clamp(2rem, 5vw, 4rem)'",
  fontWeight: "300",
  letterSpacing: "'-0.03em'",
  lineHeight: "1.1"
};

const h3Props = {
  fontSize: "'1.25rem'",
  fontWeight: "500",
  letterSpacing: "'-0.02em'"
};

const pProps = {
  fontSize: "'clamp(1rem, 1.4vw, 1.15rem)'",
  fontWeight: "300",
  lineHeight: "1.7"
};

const plugin = function ({ types: t }) {
  return {
    visitor: {
      JSXElement(path) {
        const openingElement = path.node.openingElement;
        let tagName = openingElement.name.name;
        
        // If it's a motion component like motion.h2, get the suffix
        if (openingElement.name.type === 'JSXMemberExpression' && openingElement.name.object.name === 'motion') {
          tagName = openingElement.name.property.name;
        }

        if (!['h1', 'h2', 'h3', 'p'].includes(tagName)) return;

        const styleAttr = openingElement.attributes.find(attr => attr.name && attr.name.name === 'style');
        
        if (styleAttr && t.isJSXExpressionContainer(styleAttr.value) && t.isObjectExpression(styleAttr.value.expression)) {
          const props = styleAttr.value.expression.properties;
          
          let targetProps = {};
          if (tagName === 'h1' || tagName === 'h2') targetProps = h2Props;
          else if (tagName === 'h3') targetProps = h3Props;
          else if (tagName === 'p') targetProps = pProps;

          // If the element has textTransform: 'uppercase', it might be an eyebrow text. Let's not override its font size.
          const hasUppercase = props.some(p => p.key && p.key.name === 'textTransform' && p.value.value === 'uppercase');
          if (hasUppercase) return;

          Object.keys(targetProps).forEach(key => {
            const existingProp = props.find(p => p.key && p.key.name === key);
            
            // Create the new value AST node based on if it's a number or string
            let valueNode;
            const val = targetProps[key];
            if (val.startsWith("'") && val.endsWith("'")) {
              valueNode = t.stringLiteral(val.slice(1, -1));
            } else {
              valueNode = t.numericLiteral(Number(val));
            }

            if (existingProp) {
              existingProp.value = valueNode;
            } else {
              props.push(t.objectProperty(t.identifier(key), valueNode));
            }
          });
        }
      }
    }
  };
};

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf-8');
  
  try {
    const res = babel.transformSync(content, {
      filename: file,
      presets: ['@babel/preset-typescript', '@babel/preset-react'],
      plugins: [plugin],
      retainLines: true
    });
    
    if (res && res.code && res.code !== content) {
      fs.writeFileSync(file, res.code, 'utf-8');
      console.log(`Transformed ${file}`);
    }
  } catch(e) {
    console.error(`Error transforming ${file}:`, e.message);
  }
});
