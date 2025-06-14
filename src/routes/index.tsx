
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
import RouteErrorBoundary from '@/components/debug/RouteErrorBoundary';

// Enhanced router configuration with improved error boundary
const routes = [
  ...mainRoutes.map(route => ({
    ...route,
    errorElement: <RouteErrorBoundary />
  })),
  ...serviceRoutes.map(route => ({
    ...route,
    errorElement: <RouteErrorBoundary />
  })),
  ...insightRoutes.map(route => ({
    ...route,
    errorElement: <RouteErrorBoundary />
  })),
  ...contentRoutes.map(route => ({
    ...route,
    errorElement: <RouteErrorBoundary />
  })),
  ...utilityRoutes.map(route => ({
    ...route,
    errorElement: <RouteErrorBoundary />
  })),
  ...redirectRoutes,
  ...blogRedirectRoutes,
  ...apiRoutes
];

// Enhanced route debugging in development
if (process.env.NODE_ENV === 'development') {
  console.group('🛣️ Router Configuration Debug');
  console.log('Total routes configured:', routes.length);
  console.log('Main routes:', mainRoutes.length);
  console.log('Service routes:', serviceRoutes.length);
  console.log('Insight routes:', insightRoutes.length);
  console.log('Content routes:', contentRoutes.length);
  console.log('Utility routes:', utilityRoutes.length);
  console.log('Redirect routes:', redirectRoutes.length + blogRedirectRoutes.length);
  console.log('API routes:', apiRoutes.length);
  
  // Log specific route paths for debugging
  const routePaths = routes
    .filter(route => route.path)
    .map(route => route.path)
    .sort();
  console.log('Configured route paths:', routePaths);
  console.groupEnd();
}

// Create and export the router
const router = createBrowserRouter(routes);

export default router;
