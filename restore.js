const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('/Users/achuanil/.gemini/antigravity-ide/brain/3004914f-7787-45f5-890a-fb8f734d61e2/.system_generated/logs/transcript_full.jsonl');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const targetFiles = {
    'ImportExportContent.tsx': null,
    'KoblaqContent.tsx': null,
    'TastecoreContent.tsx': null,
    'LogisticsContent.tsx': null
  };

  for await (const line of rl) {
    try {
      const data = JSON.parse(line);
      if (data.tool_calls) {
        for (const call of data.tool_calls) {
          if (call.name === 'write_to_file') {
            const filePath = call.args.TargetFile;
            if (typeof filePath === 'string') {
              for (const tf of Object.keys(targetFiles)) {
                if (filePath.includes(tf)) {
                  targetFiles[tf] = call.args.CodeContent;
                }
              }
            }
          }
        }
      }
    } catch (e) {
      // ignore JSON parse errors
    }
  }

  for (const [filename, content] of Object.entries(targetFiles)) {
    if (content) {
      let finalContent = content;
      
      // SAFE TYPOGRAPHY REPLACEMENTS
      // H2 Replacements
      finalContent = finalContent.replace(/fontSize:\s*'clamp\([^)]+\)'/g, "fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)'");
      finalContent = finalContent.replace(/fontWeight:\s*800/g, "fontWeight: 300");
      finalContent = finalContent.replace(/fontWeight:\s*900/g, "fontWeight: 300");
      finalContent = finalContent.replace(/color:\s*'#0A2540'/g, "color: '#0D0D0D'");
      finalContent = finalContent.replace(/letterSpacing:\s*'-0\.02em'/g, "letterSpacing: '-0.03em'");
      finalContent = finalContent.replace(/letterSpacing:\s*'-0\.01em'/g, "letterSpacing: '-0.03em'");
      finalContent = finalContent.replace(/lineHeight:\s*1\.15/g, "lineHeight: 1.12");
      
      // Paragraph replacements
      finalContent = finalContent.replace(/fontSize:\s*'clamp\(1\.05rem[^)]+\)'/g, "fontSize: 'clamp(1rem, 1.4vw, 1.15rem)'");
      finalContent = finalContent.replace(/fontSize:\s*'1\.1rem'/g, "fontSize: 'clamp(1rem, 1.4vw, 1.15rem)'");
      finalContent = finalContent.replace(/fontSize:\s*'1\.15rem'/g, "fontSize: 'clamp(1rem, 1.4vw, 1.15rem)'");
      finalContent = finalContent.replace(/color:\s*'#444'/g, "color: '#555'");
      finalContent = finalContent.replace(/color:\s*'#666'/g, "color: '#555'");
      
      // Specifically target lineHeight in paragraph styles securely without breaking braces
      finalContent = finalContent.replace(/lineHeight:\s*1\.8,/g, "lineHeight: 1.85, fontWeight: 300,");
      finalContent = finalContent.replace(/lineHeight:\s*1\.7,/g, "lineHeight: 1.85, fontWeight: 300,");
      finalContent = finalContent.replace(/lineHeight:\s*1\.65,/g, "lineHeight: 1.75, fontWeight: 300,");
      finalContent = finalContent.replace(/lineHeight:\s*1\.6,/g, "lineHeight: 1.75, fontWeight: 300,");

      finalContent = finalContent.replace(/fontSize:\s*'0\.8rem',\s*fontWeight:\s*700/g, "fontSize: '0.8rem', fontWeight: 600");
      finalContent = finalContent.replace(/letterSpacing:\s*'0\.15em'/g, "letterSpacing: '0.12em'");

      fs.writeFileSync(`/Users/achuanil/Documents/Biskore/src/components/sectors/pages/${filename}`, finalContent, 'utf-8');
      console.log(`Restored and patched ${filename}`);
    } else {
      console.log(`Could not find ${filename} in transcript`);
    }
  }
}

processLineByLine();
