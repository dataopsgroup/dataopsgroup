const fs = require('fs');
const path = require('path');

/**
 * Build script to combine organized redirect configurations into vercel.json
 * This keeps the configuration maintainable while producing a single output file
 */

const configDir = path.join(__dirname, '../config');
const redirectsDir = path.join(configDir, 'redirects');
const baseConfigPath = path.join(configDir, 'vercel-base.json');
const outputPath = path.join(__dirname, '../vercel.json');

function loadJsonFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error.message);
    return null;
  }
}

function buildVercelConfig() {
  console.log('🔧 Building vercel.json from organized configuration files...');
  
  // Load base configuration
  const baseConfig = loadJsonFile(baseConfigPath);
  if (!baseConfig) {
    throw new Error('Failed to load base vercel configuration');
  }
  
  // Load all redirect files
  const redirectFiles = [
    'cleanup-redirects.json',      // URL cleanup (amp, utm, etc) - highest priority
    'misc-redirects.json',         // Miscellaneous redirects
    'guides-redirects.json',       // Guide-specific redirects
    'faq-redirects.json',          // FAQ redirects
    'assessment-redirects.json',   // Assessment redirects
    'content-redirects.json',      // Blog/content redirects
    'calculator-redirects.json',   // Calculator redirects
    'service-redirects.json',      // Service redirects
    'catch-all-redirects.json'     // Catch-all patterns - lowest priority
  ];
  
  const allRedirects = [];
  
  redirectFiles.forEach(filename => {
    const filePath = path.join(redirectsDir, filename);
    const redirects = loadJsonFile(filePath);
    
    if (redirects && Array.isArray(redirects)) {
      console.log(`✅ Loaded ${redirects.length} redirects from ${filename}`);
      allRedirects.push(...redirects);
    } else {
      console.warn(`⚠️ No valid redirects found in ${filename}`);
    }
  });
  
  // Combine base config with redirects
  const finalConfig = {
    redirects: allRedirects,
    ...baseConfig
  };
  
  // Write the final vercel.json
  try {
    fs.writeFileSync(outputPath, JSON.stringify(finalConfig, null, 2));
    console.log(`✅ Generated vercel.json with ${allRedirects.length} redirects`);
    console.log(`📝 Configuration breakdown:`);
    
    redirectFiles.forEach(filename => {
      const redirects = loadJsonFile(path.join(redirectsDir, filename));
      if (redirects) {
        console.log(`   - ${filename}: ${redirects.length} redirects`);
      }
    });
    
  } catch (error) {
    console.error('❌ Failed to write vercel.json:', error.message);
    throw error;
  }
}

// Run the build if called directly
if (require.main === module) {
  try {
    buildVercelConfig();
    console.log('🎉 Vercel configuration built successfully!');
  } catch (error) {
    console.error('💥 Build failed:', error.message);
    process.exit(1);
  }
}

module.exports = { buildVercelConfig };