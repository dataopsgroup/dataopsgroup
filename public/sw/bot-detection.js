
// Bot Detection and Handling for Service Worker

// List of known search engine bot user agents
const SEARCH_ENGINE_BOTS = [
  'Googlebot',
  'Bingbot', 
  'Slurp', // Yahoo
  'DuckDuckBot',
  'Baiduspider',
  'YandexBot',
  'facebookexternalhit',
  'Twitterbot',
  'LinkedInBot',
  'WhatsApp',
  'Applebot',
  'ia_archiver', // Internet Archive
  'SemrushBot',
  'AhrefsBot',
  'MJ12bot',
  'DotBot'
];

/**
 * Detects if the request is from a search engine bot
 * @param {Request} request - The incoming request
 * @returns {boolean} - True if request is from a bot
 */
const isSearchEngineBot = (request) => {
  // Check User-Agent header
  const userAgent = request.headers.get('User-Agent') || '';
  
  // Check for bot patterns in user agent
  const isBotUserAgent = SEARCH_ENGINE_BOTS.some(bot => 
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );
  
  // Additional bot detection patterns
  const botPatterns = [
    /bot/i,
    /crawl/i, 
    /spider/i,
    /scrape/i,
    /facebook/i,
    /google/i,
    /bing/i,
    /yahoo/i,
    /duckduck/i
  ];
  
  const matchesBotPattern = botPatterns.some(pattern => 
    pattern.test(userAgent)
  );
  
  return isBotUserAgent || matchesBotPattern;
};

/**
 * Creates bot-friendly response headers
 * @param {Response} response - Original response
 * @returns {Response} - Response with bot-friendly headers
 */
const addBotFriendlyHeaders = (response) => {
  const newHeaders = new Headers(response.headers);
  
  // Ensure no transformation by proxies
  newHeaders.set('Cache-Control', 'public, max-age=3600, no-transform');
  newHeaders.set('Vary', 'User-Agent');
  
  // Prevent compression issues for bots
  newHeaders.set('Content-Encoding', 'identity');
  
  // Ensure proper content type
  if (!newHeaders.has('Content-Type')) {
    if (response.url.endsWith('.html') || response.url.includes('/')) {
      newHeaders.set('Content-Type', 'text/html; charset=utf-8');
    }
  }
  
  // Add bot-specific headers
  newHeaders.set('X-Robots-Tag', 'index, follow');
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
};

/**
 * Handles requests from search engine bots
 * Always bypasses cache and returns fresh content
 * @param {Request} request - The bot request
 * @returns {Promise<Response>} - Direct network response
 */
const handleBotRequest = async (request) => {
  try {
    // Always fetch fresh content for bots
    const response = await fetch(request, {
      cache: 'no-store',
      headers: {
        'User-Agent': request.headers.get('User-Agent') || 'ServiceWorker-Bot-Handler'
      }
    });
    
    // Add bot-friendly headers
    return addBotFriendlyHeaders(response);
  } catch (error) {
    console.error('Bot request failed:', error);
    
    // Return minimal HTML for navigation requests
    if (request.mode === 'navigate') {
      return new Response(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>DataOps Group - HubSpot Consultancy</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
          <h1>DataOps Group</h1>
          <p>HubSpot consultancy for PE firms and portfolio companies.</p>
        </body>
        </html>
      `, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'X-Robots-Tag': 'index, follow'
        }
      });
    }
    
    // Return 404 for other failed requests
    return new Response('Not Found', { status: 404 });
  }
};

