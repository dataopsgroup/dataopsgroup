
#!/usr/bin/env node

/**
 * Test SSG Build Script
 * Validates SSG build output
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧪 Testing SSG build...');

try {
  // Clean previous build
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true });
    console.log('🧹 Cleaned previous build');
  }

  // Run SSG build
  console.log('🔨 Building with SSG...');
  execSync('npm run build:ssg', { stdio: 'inherit' });

  // Validate build output
  const distDir = './dist';
  if (!fs.existsSync(distDir)) {
    throw new Error('Build directory not found');
  }

  console.log('\n🎉 SSG build test completed!');

} catch (error) {
  console.error('❌ SSG build test failed:', error.message);
  process.exit(1);
}
