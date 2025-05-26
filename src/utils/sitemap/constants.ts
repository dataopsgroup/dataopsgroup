
import { SiteRoute } from './types';

// Define all site routes for the sitemap with current dates
// Only including pages that actually exist and should be indexed
export const mainRoutes: SiteRoute[] = [
  { url: "/", priority: "1.0", changefreq: "weekly", lastmod: "2025-05-23" },
  { url: "/services", priority: "0.9", changefreq: "weekly", lastmod: "2025-05-23" },
  { url: "/about", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/approach", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/insights", priority: "0.9", changefreq: "weekly", lastmod: "2025-05-23" },
  { url: "/case-studies", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/contact", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/get-started", priority: "0.9", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/book", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/assessment", priority: "0.9", changefreq: "weekly", lastmod: "2025-05-23" },
  { url: "/hubspot-assessment-results", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/how-to-hire-a-hubspot-expert-in-2025", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/faqs", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/privacy", priority: "0.3", changefreq: "yearly", lastmod: "2025-05-23" },
];

export const serviceRoutes: SiteRoute[] = [
  { url: "/services/analytics-bi", priority: "0.9", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/services/dataops-implementation", priority: "0.9", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/services/marketing-operations-revops", priority: "0.9", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/services/team-training", priority: "0.9", changefreq: "monthly", lastmod: "2025-05-23" },
];
