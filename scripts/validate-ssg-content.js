
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '..', 'dist');

// Routes that should be pre-rendered
const expectedRoutes = [
  '/',
  '/about',
  '/approach', 
  '/contact',
  '/book',
  '/services',
  '/services/marketing-operations-revops',
  '/services/analytics-bi',
  '/services/dataops-implementation',
  '/services/team-training',
  '/insights',
  '/assessment',
  '/sitemap'
];

// Content patterns that should be present in pre-rendered HTML
const contentChecks = {
  '/': ['DataOps Group', 'HubSpot consultancy', 'marketing'],
  '/about': ['Geoff Tucker', 'founder', 'experience'],
  '/book': ['CMO\'s Data Playbook', 'Transform Data Into Revenue', 'Geoff Tucker'],
  '/services': ['Marketing Operations', 'Analytics', 'DataOps'],
  '/services/marketing-operations-revops': ['Marketing Operations', 'Revenue Operations'],
  '/approach': ['approach', 'methodology', 'process'],
  '/contact': ['contact', 'get in touch', 'email']
};

function validatePrerenderedContent() {
  console.log('🔍 Validating pre-rendered content...\n');
  
  let allValid = true;
  
  for (const route of expectedRoutes) {
    const filePath = route === '/' 
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route, 'index.html');
    
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Missing pre-rendered file: ${route}`);
      allValid = false;
      continue;
    }
    
    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    
    // Check for loading states or empty content
    if (htmlContent.includes('Loading DataOps Group...') || 
        htmlContent.includes('<div id="root"></div>') ||
        htmlContent.length < 1000) {
      console.error(`❌ Route ${route} appears to have loading state or minimal content`);
      allValid = false;
      continue;
    }
    
    // Check for specific content patterns
    const expectedContent = contentChecks[route];
    if (expectedContent) {
      const missingContent = expectedContent.filter(content => 
        !htmlContent.toLowerCase().includes(content.toLowerCase())
      );
      
      if (missingContent.length > 0) {
        console.warn(`⚠️  Route ${route} missing expected content: ${missingContent.join(', ')}`);
      }
    }
    
    // Check for proper meta tags
    if (!htmlContent.includes('<title>') || !htmlContent.includes('<meta name="description"')) {
      console.warn(`⚠️  Route ${route} missing proper meta tags`);
    }
    
    console.log(`✅ Route ${route} validated (${Math.round(htmlContent.length / 1024)}KB)`);
  }
  
  if (allValid) {
    console.log('\n🎉 All pre-rendered content validated successfully!');
  } else {
    console.log('\n❌ Some validation issues found. Check the output above.');
    process.exit(1);
  }
}

validatePrerenderedContent();
