// Static Content Handler for Bot Requests
// Serves pre-rendered HTML content to crawlers for better indexability

/**
 * Maps URL paths to static HTML files for bot serving
 */
const STATIC_CONTENT_MAP = {
  '/': '/static/homepage.html',
  '/services': '/static/services.html',
  '/guides/hubspot-expert': '/static/hubspot-expert-guide.html',
  '/guides/hubspot-expert-guide': '/static/hubspot-expert-guide.html', // Legacy redirect
  '/services/dataops-implementation': '/static/dataops-implementation.html',
  '/services/analytics-bi': '/static/analytics-bi.html'
};

/**
 * Enhanced bot detection for AI crawlers and semantic analysis tools
 */
const AI_CRAWLER_PATTERNS = [
  // Standard search engines
  'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider', 'yandexbot',
  'facebookexternalhit', 'twitterbot', 'linkedinbot', 'whatsapp', 'applebot',
  
  // AI and semantic analysis tools
  'gptbot', 'chatgpt-user', 'ccbot', 'anthropic', 'claude-web', 'perplexity',
  'ai2bot', 'semanticbot', 'crawl', 'spider', 'scrape', 'fetch', 'curl',
  
  // SEO and analysis tools
  'semrushbot', 'ahrefsbot', 'mj12bot', 'dotbot', 'screaming frog',
  'deepcrawl', 'botify', 'oncrawl', 'seobot', 'rankbot',
  
  // Academic and research crawlers
  'ia_archiver', 'archive.org_bot', 'wayback', 'citeseerxbot', 'acadbot'
];

/**
 * Checks if request is from a bot or AI crawler
 * @param {Request} request - The incoming request
 * @returns {boolean} - True if request is from a bot
 */
const isAICrawler = (request) => {
  const userAgent = (request.headers.get('User-Agent') || '').toLowerCase();
  const accept = (request.headers.get('Accept') || '').toLowerCase();
  
  // Check for bot patterns in user agent
  const isBotUserAgent = AI_CRAWLER_PATTERNS.some(pattern => 
    userAgent.includes(pattern.toLowerCase())
  );
  
  // Check for crawler-specific Accept headers
  const isCrawlerAccept = 
    accept.includes('text/html') && 
    !accept.includes('application/json') &&
    !accept.includes('image/') &&
    !userAgent.includes('mozilla') ||
    accept === '*/*';
  
  // Check for missing or minimal headers (common in programmatic requests)
  const hasMinimalHeaders = !request.headers.get('Accept-Language') || 
                           !request.headers.get('Accept-Encoding');
  
  return isBotUserAgent || (isCrawlerAccept && hasMinimalHeaders);
};

/**
 * Serves static HTML content for bot requests
 * @param {Request} request - The bot request
 * @returns {Promise<Response>} - Static HTML response
 */
const serveStaticContent = async (request) => {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  // Check if we have static content for this path
  const staticPath = STATIC_CONTENT_MAP[pathname];
  
  if (staticPath) {
    try {
      // Fetch the static HTML file
      const staticResponse = await fetch(staticPath, {
        cache: 'no-store',
        headers: {
          'Accept': 'text/html',
          'Accept-Charset': 'utf-8'
        }
      });
      
      if (staticResponse.ok) {
        const htmlContent = await staticResponse.text();
        
        // Create bot-optimized response with proper encoding
        return new Response(htmlContent, {
          status: 200,
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, no-transform',
            'Vary': 'User-Agent',
            'X-Robots-Tag': 'index, follow',
            'X-Served-By': 'ServiceWorker-StaticBot',
            'X-Content-Source': 'static-html'
          }
        });
      }
    } catch (error) {
      console.error('Failed to serve static content:', error);
    }
  }
  
  // Fallback: minimal HTML for unknown paths
  return createMinimalFallback(pathname);
};

/**
 * Creates minimal HTML fallback for paths without static content
 * @param {string} pathname - The requested path
 * @returns {Response} - Minimal HTML response
 */
const createMinimalFallback = (pathname) => {
  const title = getPageTitle(pathname);
  const description = getPageDescription(pathname);
  
  const minimalHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | DataOps Group</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="https://dataopsgroup.com${pathname}">
  <meta name="robots" content="index, follow">
  
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "${title}",
    "description": "${description}",
    "url": "https://dataopsgroup.com${pathname}",
    "publisher": {
      "@type": "Organization",
      "name": "DataOps Group",
      "url": "https://dataopsgroup.com"
    }
  }
  </script>
</head>
<body>
  <header>
    <h1>DataOps Group</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/insights">Insights</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>
  
  <main>
    <h1>${title}</h1>
    <p>${description}</p>
    
    <section>
      <h2>Popular Resources</h2>
      <ul>
        <li><a href="/data-operations-assessment">Free Data Operations Assessment</a></li>
        <li><a href="/guides/hubspot-expert">HubSpot Expert Hiring Guide</a></li>
        <li><a href="/revops-roi-calculator">ROI Calculator</a></li>
        <li><a href="/case-studies">Success Stories</a></li>
      </ul>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2024 DataOps Group. HubSpot consultancy for PE firms and portfolio companies.</p>
  </footer>
</body>
</html>`;

  return new Response(minimalHTML, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=1800, no-transform',
      'X-Robots-Tag': 'index, follow',
      'X-Served-By': 'ServiceWorker-FallbackBot',
      'X-Content-Source': 'minimal-fallback'
    }
  });
};

/**
 * Gets appropriate page title for unknown paths
 */
const getPageTitle = (pathname) => {
  if (pathname.includes('/insights/')) return 'Business Insights';
  if (pathname.includes('/services/')) return 'Our Services';
  if (pathname.includes('/faqs/')) return 'Frequently Asked Questions';
  if (pathname.includes('/guides/')) return 'Expert Guides';
  if (pathname.includes('/case-studies/')) return 'Case Studies';
  return 'HubSpot Consultancy for Private Equity';
};

/**
 * Gets appropriate page description for unknown paths
 */
const getPageDescription = (pathname) => {
  if (pathname.includes('/insights/')) return 'Expert insights and best practices for HubSpot implementation and data operations.';
  if (pathname.includes('/services/')) return 'Professional HubSpot and data operations services for private equity portfolio companies.';
  if (pathname.includes('/faqs/')) return 'Frequently asked questions about HubSpot implementation and data operations consulting.';
  if (pathname.includes('/guides/')) return 'Comprehensive guides for HubSpot implementation and data operations optimization.';
  if (pathname.includes('/case-studies/')) return 'Real-world success stories from our HubSpot implementation and data operations projects.';
  return 'HubSpot consultancy specializing in private equity portfolio operations and data management.';
};

// Log bot requests for monitoring
const logBotRequest = (request, contentSource) => {
  if (typeof console !== 'undefined') {
    console.log('🤖 Bot Request Served:', {
      url: request.url,
      userAgent: request.headers.get('User-Agent'),
      contentSource,
      timestamp: new Date().toISOString()
    });
  }
};

// Export functions for use in main service worker
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isAICrawler,
    serveStaticContent,
    logBotRequest,
    STATIC_CONTENT_MAP
  };
}