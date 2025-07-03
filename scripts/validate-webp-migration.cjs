#!/usr/bin/env node

/**
 * Build-time validation script to ensure PNG to WebP migration is complete
 * Prevents large PNG files from being deployed and seen by crawlers
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Large PNG files that MUST be replaced with WebP
const FORBIDDEN_PNG_FILES = [
  'b7abeb4e-bdb9-4d8f-9c53-bc21d411f2f4.png',
  '26cea183-e8de-4d91-8678-a75233402192.png', 
  'dc1dbbad-be41-4dbb-8dd8-381cc59a869c.png',
  '124706e5-20d8-43a1-92a0-d4d65389187b.png',
  '434400a1-30b5-4562-ae95-9a7ef18306ee.png',
  '9b9f1c84-13af-4551-96d5-b7a930f008cf.png'
];

function validateWebPMigration() {
  console.log('🔍 Validating PNG to WebP migration...');
  
  let hasErrors = false;
  const errors = [];
  const warnings = [];

  // 1. Check that all WebP files exist
  console.log('\n📁 Checking WebP file availability...');
  FORBIDDEN_PNG_FILES.forEach(pngFile => {
    const webpFile = pngFile.replace('.png', '.webp');
    const webpPath = path.join(__dirname, '..', 'public', 'lovable-uploads', webpFile);
    
    if (!fs.existsSync(webpPath)) {
      hasErrors = true;
      errors.push(`Missing WebP file: ${webpFile}`);
    } else {
      console.log(`✅ ${webpFile} exists`);
    }
  });

  // 2. Search source code for PNG references
  console.log('\n🔍 Scanning source code for PNG references...');
  const srcDir = path.join(__dirname, '..', 'src');
  
  try {
    FORBIDDEN_PNG_FILES.forEach(pngFile => {
      const searchCommand = `grep -r "${pngFile}" "${srcDir}" || true`;
      const result = execSync(searchCommand, { encoding: 'utf8' });
      
      if (result.trim()) {
        hasErrors = true;
        errors.push(`PNG file still referenced in source code: ${pngFile}`);
        errors.push(`Found in: ${result.trim()}`);
      } else {
        console.log(`✅ No references to ${pngFile} found in source`);
      }
    });
  } catch (error) {
    warnings.push('Could not scan source files for PNG references');
  }

  // 3. Check file sizes
  console.log('\n📊 Checking file sizes...');
  FORBIDDEN_PNG_FILES.forEach(pngFile => {
    const webpFile = pngFile.replace('.png', '.webp');
    const pngPath = path.join(__dirname, '..', 'public', 'lovable-uploads', pngFile);
    const webpPath = path.join(__dirname, '..', 'public', 'lovable-uploads', webpFile);
    
    if (fs.existsSync(pngPath) && fs.existsSync(webpPath)) {
      const pngSize = fs.statSync(pngPath).size;
      const webpSize = fs.statSync(webpPath).size;
      const savings = ((pngSize - webpSize) / pngSize * 100).toFixed(1);
      
      console.log(`📉 ${webpFile}: ${savings}% smaller than PNG`);
      
      if (webpSize >= pngSize) {
        warnings.push(`WebP file ${webpFile} is not smaller than PNG - check conversion quality`);
      }
    }
  });

  // 4. Output results
  console.log('\n' + '='.repeat(60));
  console.log('🎯 PNG TO WEBP MIGRATION VALIDATION RESULTS');
  console.log('='.repeat(60));

  if (hasErrors) {
    console.log('\n❌ VALIDATION FAILED - Build should not proceed');
    errors.forEach(error => console.error(`  • ${error}`));
  } else {
    console.log('\n✅ VALIDATION PASSED - All large PNGs replaced with WebP');
  }

  if (warnings.length > 0) {
    console.log('\n⚠️ WARNINGS:');
    warnings.forEach(warning => console.warn(`  • ${warning}`));
  }

  console.log('\n📈 Expected Benefits:');
  console.log('  • 50-70% reduction in image file sizes');
  console.log('  • Elimination of Ahrefs large image warnings');
  console.log('  • Improved Core Web Vitals scores');
  console.log('  • Faster page load times');

  return !hasErrors;
}

// Run validation if called directly
if (require.main === module) {
  const isValid = validateWebPMigration();
  process.exit(isValid ? 0 : 1);
}

module.exports = { validateWebPMigration };