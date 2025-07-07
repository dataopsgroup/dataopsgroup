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

// AI and semantic analysis tools
const AI_CRAWLERS = [
  'ChatGPT-User',
  'CCBot',
  'Claude-Web',
  'PerplexityBot',
  'AI2Bot',
  'anthropic',
  'openai',
  'GPTBot',
  'YouBot',
  'Copilot'
];

/**
 * Detects if the request is from a search engine bot
 * @param {Request} request - The incoming request
 * @returns {boolean} - True if request is from a bot
 */
const isSearchEngineBot = (request) => {
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
 * Detects if the request is from an AI crawler or semantic analysis tool
 * @param {Request} request - The incoming request
 * @returns {boolean} - True if request is from an AI crawler
 */
const isAICrawler = (request) => {
  const userAgent = request.headers.get('User-Agent') || '';
  
  // Check for AI crawler patterns
  const isAIUserAgent = AI_CRAWLERS.some(crawler => 
    userAgent.toLowerCase().includes(crawler.toLowerCase())
  );
  
  // Additional AI-specific patterns
  const aiPatterns = [
    /gpt/i,
    /claude/i,
    /anthropic/i,
    /openai/i,
    /perplexity/i,
    /semantic/i,
    /ai2/i
  ];
  
  const matchesAIPattern = aiPatterns.some(pattern => 
    pattern.test(userAgent)
  );
  
  return isAIUserAgent || matchesAIPattern;
};