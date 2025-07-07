import { RouteObject } from 'react-router-dom';
import PillarContentPage from '@/pages/PillarContentPage';
import HubSpotPEPage from '@/pages/HubSpotPEPage';
import CompleteHubSpotGuidePage from '@/pages/CompleteHubSpotGuidePage';
import PEHubSpotImplementationRoadmapPage from '@/pages/PEHubSpotImplementationRoadmapPage';

export const contentRoutes: RouteObject[] = [
  {
    path: '/guides/hubspot-expert',
    element: <PillarContentPage />
  },
  {
    path: '/guides/hubspot-private-equity',
    element: <HubSpotPEPage />
  },
  {
    path: '/guides/complete-hubspot-guide-for-private-equity',
    element: <CompleteHubSpotGuidePage />
  },
  {
    path: '/guides/pe-hubspot-implementation-roadmap',
    element: <PEHubSpotImplementationRoadmapPage />
  }
];
