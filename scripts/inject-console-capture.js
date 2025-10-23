import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
const htmlFiles = glob.sync('.output/public/**/*.html');

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  if (!content.includes('dashboard-console-capture.js')) {
    content = content.replace('</head>', `  ${scriptTag}\n  </head>`);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Injected console capture script into ${file}`);
  }
});

console.log(`Console capture script injection complete. Processed ${htmlFiles.length} files.`);