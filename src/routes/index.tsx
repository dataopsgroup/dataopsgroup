
import { createBrowserRouter } from 'react-router-dom';
import { mainRoutes } from './mainRoutes';
import { serviceRoutes } from './serviceRoutes';
import { insightRoutes } from './insightRoutes';
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
