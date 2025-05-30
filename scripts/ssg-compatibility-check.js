
#!/usr/bin/env node

/**
 * SSG Compatibility Check
 * Identifies potential issues before SSG migration
 */

import fs from 'fs';
import path from 'path';

console.log('🔍 Checking SSG compatibility...');

const issues = [];
const warnings = [];

// Check for browser-only APIs in components
function checkFileForBrowserAPIs(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const browserAPIs = [
    'window.',
    'document.',
    'localStorage',
    'sessionStorage',
    'navigator.',
    'location.'
  ];

  browserAPIs.forEach(api => {
    if (content.includes(api)) {
      warnings.push(`${filePath} uses ${api} - may need SSG guards`);
    }
  });
}

// Check key files
const filesToCheck = [
  'src/main.tsx',
  'src/App.tsx',
  'src/components/Hero.tsx',
  'src/components/Navbar.tsx',
  'src/components/Footer.tsx'
];

filesToCheck.forEach(checkFileForBrowserAPIs);

// Report results
console.log('\n📊 COMPATIBILITY REPORT:');

if (issues.length === 0) {
  console.log('✅ No blocking issues found!');
} else {
  console.log('❌ Issues found:');
  issues.forEach(issue => console.log(`  - ${issue}`));
}

if (warnings.length > 0) {
  console.log('\n⚠️  Warnings (review needed):');
  warnings.forEach(warning => console.log(`  - ${warning}`));
}

console.log('\n🚀 Ready for SSG migration!');
