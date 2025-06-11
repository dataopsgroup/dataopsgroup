
/**
 * CRITICAL ROUTING FILE - KNOWLEDGE ARTICLE REMINDERS:
 * 
 * 🚫 NEVER MODIFY ROUTE STRUCTURE WITHOUT EXPLICIT USER REQUEST
 * 🚫 NEVER DELETE EXISTING ROUTE DEFINITIONS
 * 📝 ALWAYS DOCUMENT ALL ROUTES BEFORE MAKING CHANGES
 * ✅ ONLY ADD NEW ROUTES - PRESERVE ALL EXISTING ONES
 * ✅ MAINTAIN CURRENT ROUTING STRUCTURE AND IMPORTS
 * 
 * See Knowledge Article: "Route Structure Protection"
 */

import { createBrowserRouter } from 'react-router-dom';
import { mainRoutes } from './mainRoutes';
import { serviceRoutes } from './serviceRoutes';
import { insightRoutes } from './insightRoutes';
import { contentRoutes } from './contentRoutes';
import { utilityRoutes } from './utilityRoutes';
import { redirectRoutes } from './redirectRoutes';
import { blogRedirectRoutes } from './blogRedirectRoutes';
import { apiRoutes } from './apiRoutes';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';

// Enhanced router configuration with error boundary wrapping
const routes = [
  ...mainRoutes,
  ...serviceRoutes,
  ...insightRoutes.map(route => ({
    ...route,
    errorElement: <RouteErrorBoundary />
  })),
  ...contentRoutes,
  ...utilityRoutes,
  ...redirectRoutes,
  ...blogRedirectRoutes,
  ...apiRoutes
];

// Add route debugging in development
if (process.env.NODE_ENV === 'development') {
  console.log('Router configuration loaded with routes:', routes.map(r => r.path));
}

// Create and export the router
const router = createBrowserRouter(routes);

export default router;
