import { RouteObject } from 'react-router-dom';
import PillarContentPage from '@/pages/PillarContentPage';
import HubSpotExpertGuidePage from '@/pages/HubSpotExpertGuidePage';
import HubSpotPEPage from '@/pages/HubSpotPEPage';
import CompleteHubSpotGuidePage from '@/pages/CompleteHubSpotGuidePage';
import PEHubSpotImplementationRoadmapPage from '@/pages/PEHubSpotImplementationRoadmapPage';
import PEDecisionFrameworkPage from '@/pages/PEDecisionFrameworkPage';
import PEPortfolioValueCreationCaseStudiesPage from '@/pages/PEPortfolioValueCreationCaseStudiesPage';

export const contentRoutes: RouteObject[] = [
  {
    path: '/guides/hubspot-expert',
    element: <HubSpotExpertGuidePage />
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
  },
  {
    path: '/guides/pe-decision-framework',
    element: <PEDecisionFrameworkPage />
  },
  {
    path: '/guides/pe-portfolio-value-creation-case-studies',
    element: <PEPortfolioValueCreationCaseStudiesPage />
  }
];
