
#!/usr/bin/env node

/**
 * Add SSG Scripts to package.json
 * Run this to add the required SSG build scripts
 */

import fs from 'fs';
import path from 'path';

console.log('📦 Adding SSG scripts to package.json...');

try {
  const packageJsonPath = './package.json';
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  // Add SSG scripts
  packageJson.scripts = {
    ...packageJson.scripts,
    'build:ssg': 'vite-ssg build --config vite.config.ssg.ts',
    'test:ssg': 'node scripts/test-ssg-build.js',
    'preview:ssg': 'vite preview --config vite.config.ssg.ts'
  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('✅ SSG scripts added successfully!');
  console.log('Available commands:');
  console.log('  npm run build:ssg  - Build with SSG');
  console.log('  npm run test:ssg   - Test SSG build');
  console.log('  npm run preview:ssg - Preview SSG build');

} catch (error) {
  console.error('❌ Failed to add SSG scripts:', error.message);
  console.log('\n💡 Manual steps required:');
  console.log('Add these scripts to your package.json:');
  console.log(`
  "scripts": {
    "build:ssg": "vite-ssg build --config vite.config.ssg.ts",
    "test:ssg": "node scripts/test-ssg-build.js",
    "preview:ssg": "vite preview --config vite.config.ssg.ts"
  }
  `);
  process.exit(1);
}
