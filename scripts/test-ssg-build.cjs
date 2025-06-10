
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

  // Check for static HTML files
  const routes = [
    'index.html',
    'services/index.html',
    'services/analytics-bi/index.html',
    'contact/index.html',
    'insights/index.html'
  ];

  const foundRoutes = [];
  const missingRoutes = [];

  routes.forEach(route => {
    const filePath = path.join(distDir, route);
    if (fs.existsSync(filePath)) {
      foundRoutes.push(route);
      
      // Check if file has content
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.length < 1000) {
        console.log(`⚠️  ${route} seems too small (${content.length} chars)`);
      }
    } else {
      missingRoutes.push(route);
    }
  });

  console.log('\n📊 BUILD RESULTS:');
  console.log(`✅ Found routes: ${foundRoutes.length}`);
  foundRoutes.forEach(route => console.log(`  - ${route}`));

  if (missingRoutes.length > 0) {
    console.log(`❌ Missing routes: ${missingRoutes.length}`);
    missingRoutes.forEach(route => console.log(`  - ${route}`));
  }

  console.log('\n🎉 SSG build test completed!');

} catch (error) {
  console.error('❌ SSG build test failed:', error.message);
  process.exit(1);
}
