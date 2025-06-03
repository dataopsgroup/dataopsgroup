
import { createBrowserRouter } from 'react-router-dom';
import { mainRoutes } from './mainRoutes';
import { serviceRoutes } from './serviceRoutes';
import { insightRoutes } from './insightRoutes';
import { utilityRoutes } from './utilityRoutes';
import { redirectRoutes } from './redirectRoutes';
import { blogRedirectRoutes } from './blogRedirectRoutes';
import { apiRoutes } from './apiRoutes';

// Simplified router configuration
const routes = [
  ...mainRoutes,
  ...serviceRoutes,
  ...insightRoutes,
  ...utilityRoutes,
  ...redirectRoutes,
  ...blogRedirectRoutes,
  ...apiRoutes
];

// Create and export the router
const router = createBrowserRouter(routes);

export default router;
