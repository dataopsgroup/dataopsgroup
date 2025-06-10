
/**
 * Strategic outbound and internal links for pages lacking link equity
 */

export interface StrategicLink {
  title: string;
  description: string;
  url: string;
  isExternal: boolean;
  category: 'service' | 'case-study' | 'resource' | 'tool' | 'authority';
}

/**
 * Links for FAQ Services page to improve link equity
 */
export const faqServicesLinks: StrategicLink[] = [
  {
    title: "Marketing Operations & RevOps Services",
    description: "Comprehensive HubSpot implementation and marketing operations consulting",
    url: "/services/marketing-operations-revops",
    isExternal: false,
    category: 'service'
  },
  {
    title: "DataOps Implementation Services", 
    description: "End-to-end data operations setup and optimization for HubSpot",
    url: "/services/dataops-implementation",
    isExternal: false,
    category: 'service'
  },
  {
    title: "HubSpot Expert Hiring Guide",
    description: "Complete guide to finding and hiring qualified HubSpot consultants",
    url: "/guides/hubspot-expert",
    isExternal: false,
    category: 'resource'
  },
  {
    title: "HubSpot Academy",
    description: "Official HubSpot training and certification programs",
    url: "https://academy.hubspot.com/",
    isExternal: true,
    category: 'authority'
  },
  {
    title: "Data Operations Assessment",
    description: "Free assessment to evaluate your current HubSpot implementation",
    url: "/data-operations-assessment",
    isExternal: false,
    category: 'tool'
  },
  {
    title: "Client Success Stories",
    description: "Real case studies showing measurable results from our implementations",
    url: "/case-studies",
    isExternal: false,
    category: 'case-study'
  }
];

/**
 * Links for content.json API endpoint (if it serves content)
 */
export const contentApiLinks: StrategicLink[] = [
  {
    title: "Latest Insights",
    description: "Browse our latest blog posts and industry insights",
    url: "/insights",
    isExternal: false,
    category: 'resource'
  },
  {
    title: "Service Offerings",
    description: "Comprehensive HubSpot and data operations services",
    url: "/services",
    isExternal: false,
    category: 'service'
  }
];

/**
 * General outbound authority links for any page
 */
export const authorityLinks: StrategicLink[] = [
  {
    title: "HubSpot Blog",
    description: "Latest marketing, sales, and service insights from HubSpot",
    url: "https://blog.hubspot.com/",
    isExternal: true,
    category: 'authority'
  },
  {
    title: "HubSpot Marketplace",
    description: "Integrations and tools to extend HubSpot functionality",
    url: "https://ecosystem.hubspot.com/marketplace",
    isExternal: true,
    category: 'authority'
  },
  {
    title: "Marketing Operations Resources",
    description: "Industry best practices for marketing operations teams",
    url: "https://www.marketo.com/marketing-operations/",
    isExternal: true,
    category: 'authority'
  }
];

/**
 * Get strategic links for a specific page
 */
export const getStrategicLinksForPage = (pagePath: string): StrategicLink[] => {
  switch (pagePath) {
    case '/faqs/services':
      return faqServicesLinks;
    case '/api/content.json':
    case 'content.json':
      return contentApiLinks;
    default:
      return [];
  }
};

/**
 * Get all pages that need strategic links added
 */
export const getPagesNeedingLinks = (): string[] => {
  return [
    '/faqs/services',
    '/api/content.json',
    'content.json'
  ];
};

/**
 * Replace broken external links with working alternatives
 */
export const fixBrokenLink = (originalUrl: string): string => {
  const replacements: Record<string, string> = {
    'https://blog.hubspot.com/marketing/stop-pretending-all-leads-are-equal': 
      'https://blog.hubspot.com/marketing/lead-scoring-best-practices',
    // Add more replacements as needed
  };
  
  return replacements[originalUrl] || originalUrl;
};

export default {
  faqServicesLinks,
  contentApiLinks,
  authorityLinks,
  getStrategicLinksForPage,
  getPagesNeedingLinks,
  fixBrokenLink
};
