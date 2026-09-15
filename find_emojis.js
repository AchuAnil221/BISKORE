const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('src/components/sectors/pages/*.tsx');
const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    const match = line.match(emojiRegex);
    if (match) {
      console.log(`${file}:${index + 1}: ${match.join('')} -> ${line.trim()}`);
    }
  });
});
