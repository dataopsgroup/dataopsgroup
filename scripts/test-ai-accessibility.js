
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes to test for AI accessibility
const testRoutes = [
  { path: '/', name: 'Homepage' },
  { path: '/about', name: 'About Page' },
  { path: '/book', name: 'Book Page' },
  { path: '/services', name: 'Services Overview' },
  { path: '/services/marketing-operations-revops', name: 'Marketing Operations Service' },
  { path: '/approach', name: 'Approach Page' },
  { path: '/contact', name: 'Contact Page' }
];

async function testAIAccessibility() {
  console.log('🤖 Testing AI accessibility...\n');
  
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Disable JavaScript to simulate how AI crawlers read content
  await page.setJavaScriptEnabled(false);
  
  const results = [];
  
  for (const route of testRoutes) {
    try {
      console.log(`Testing ${route.name} (${route.path})...`);
      
      // For testing, we'll use the local build
      const url = `file://${path.join(__dirname, '..', 'dist', route.path === '/' ? 'index.html' : route.path + '/index.html')}`;
      
      await page.goto(url, { waitUntil: 'domcontentloaded' });
      
      // Extract all text content
      const textContent = await page.evaluate(() => {
        return document.body.innerText || document.body.textContent || '';
      });
      
      // Extract headings for structure analysis
      const headings = await page.evaluate(() => {
        const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        return Array.from(headingElements).map(h => ({
          tag: h.tagName.toLowerCase(),
          text: h.textContent?.trim() || ''
        }));
      });
      
      // Extract meta information
      const metaInfo = await page.evaluate(() => {
        const title = document.querySelector('title')?.textContent || '';
        const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
        return { title, description };
      });
      
      // Analyze content quality
      const wordCount = textContent.split(/\s+/).length;
      const hasGoodStructure = headings.length > 0 && headings.some(h => h.tag === 'h1');
      const hasMetaTags = metaInfo.title.length > 0 && metaInfo.description.length > 0;
      
      const result = {
        route: route.path,
        name: route.name,
        wordCount,
        hasGoodStructure,
        hasMetaTags,
        headingsCount: headings.length,
        title: metaInfo.title,
        description: metaInfo.description,
        contentPreview: textContent.substring(0, 200) + '...'
      };
      
      results.push(result);
      
      // Log results
      console.log(`  ✅ Word count: ${wordCount}`);
      console.log(`  ${hasGoodStructure ? '✅' : '❌'} Good heading structure`);
      console.log(`  ${hasMetaTags ? '✅' : '❌'} Meta tags present`);
      console.log(`  📝 Title: ${metaInfo.title}`);
      console.log('');
      
    } catch (error) {
      console.error(`❌ Error testing ${route.path}:`, error.message);
      results.push({
        route: route.path,
        name: route.name,
        error: error.message
      });
    }
  }
  
  await browser.close();
  
  // Generate report
  console.log('📊 AI Accessibility Report:');
  console.log('='.repeat(50));
  
  const passedRoutes = results.filter(r => !r.error && r.wordCount > 100 && r.hasGoodStructure && r.hasMetaTags);
  const failedRoutes = results.filter(r => r.error || r.wordCount < 100 || !r.hasGoodStructure || !r.hasMetaTags);
  
  console.log(`✅ Passed: ${passedRoutes.length}/${results.length} routes`);
  console.log(`❌ Failed: ${failedRoutes.length}/${results.length} routes`);
  
  if (failedRoutes.length > 0) {
    console.log('\n❌ Failed routes:');
    failedRoutes.forEach(route => {
      console.log(`  - ${route.name}: ${route.error || 'Content/structure issues'}`);
    });
  }
  
  // Save detailed report
  const reportPath = path.join(__dirname, '..', 'ai-accessibility-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 Detailed report saved: ${reportPath}`);
  
  return failedRoutes.length === 0;
}

testAIAccessibility().catch(console.error);
