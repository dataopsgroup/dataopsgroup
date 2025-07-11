// Run the enhanced sitemap generation script
import('./scripts/generate-enhanced-sitemap.js')
  .then(() => {
    console.log('✅ Sitemap generation completed successfully');
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ Sitemap generation failed:', error);
    process.exit(1);
  });