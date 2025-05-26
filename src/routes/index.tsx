
import { createBrowserRouter } from 'react-router-dom';
import { mainRoutes } from './mainRoutes';
import { serviceRoutes } from './serviceRoutes';
import { insightRoutes } from './insightRoutes';
import { utilityRoutes } from './utilityRoutes';
import { redirectRoutes } from './redirectRoutes';
import { blogRedirectRoutes } from './blogRedirectRoutes';
import { apiRoutes } from './apiRoutes';
import React from 'react';
import { RouteObject } from 'react-router-dom';
import HubSpotAssessment from '../pages/HubSpotAssessment';
import RouteErrorBoundary from '../components/routing/RouteErrorBoundary';

// Create AMP redirect routes for each blog redirect
const createAmpRedirects = (): RouteObject[] => {
  return blogRedirectRoutes.map(route => {
    // Skip the ones that don't have specific blog post redirects
    if (route.path === '/blog' || route.path === '/en/blog/all') {
      return null;
    }
    
    // For each route, create an object that matches any URL with that path plus query params
    return {
      // Same path but with wildcard matcher for query params
      path: `${route.path}/*`,
      element: route.element
    };
  }).filter(Boolean) as RouteObject[];
};

// Create assessment route with proper component reference
const assessmentRoute: RouteObject = {
  path: "/assessment",
  Component: HubSpotAssessment,
  errorElement: React.createElement(RouteErrorBoundary)
};

// Combine all routes with consistent error boundaries
const routes: RouteObject[] = [
  ...mainRoutes,
  ...serviceRoutes,
  ...insightRoutes,
  ...utilityRoutes,
  ...redirectRoutes,
  ...blogRedirectRoutes,
  ...apiRoutes,
  ...createAmpRedirects(),
  assessmentRoute
];

// Create and export the router
const router = createBrowserRouter(routes);

export default router;
