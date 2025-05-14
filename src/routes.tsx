
import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/Contact';
import Services from './pages/Services';
import AnalyticsBI from './pages/AnalyticsBI';
import DataOpsImplementation from './pages/DataOpsImplementation';
import TeamTraining from './pages/TeamTraining';
import MarketingOperationsRevOps from './pages/MarketingOperationsRevOps';
import NotFound from './pages/NotFound';
import BookLandingPage from './pages/BookLandingPage';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import AboutPage from './pages/AboutPage';
import ApproachPage from './pages/ApproachPage';
import CaseStudiesPage from './pages/CaseStudies';
import Whitepapers from './pages/Whitepapers';
import FAQs from './pages/FAQs';
import Leadership from './pages/Leadership';
import Privacy from './pages/Privacy';
import Sitemap from './pages/Sitemap';
import GetStartedPage from './pages/GetStartedPage';
import ThankYouPage from './pages/ThankYouPage';
import SEOManagement from './pages/SEOManagement';

// Define route groups for better organization
const mainRoutes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/approach",
    element: <ApproachPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/book",
    element: <BookLandingPage />,
    errorElement: <NotFound />,
  }
];

const serviceRoutes = [
  {
    path: "/services",
    element: <Services />,
    errorElement: <NotFound />,
  },
  {
    path: "/services/analytics-bi",
    element: <AnalyticsBI />,
    errorElement: <NotFound />,
  },
  {
    path: "/services/dataops-implementation",
    element: <DataOpsImplementation />,
    errorElement: <NotFound />,
  },
  {
    path: "/services/team-training",
    element: <TeamTraining />,
    errorElement: <NotFound />,
  },
  {
    path: "/services/marketing-operations-revops",
    element: <MarketingOperationsRevOps />,
    errorElement: <NotFound />,
  },
  {
    path: "/seo-management",
    element: <SEOManagement />,
    errorElement: <NotFound />,
  }
];

const insightRoutes = [
  {
    path: "/insights",
    element: <BlogList />,
    errorElement: <NotFound />,
  },
  {
    path: "/insights/:postId",
    element: <BlogPost />,
    errorElement: <NotFound />,
  },
  {
    path: "/case-studies",
    element: <CaseStudiesPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/whitepapers",
    element: <Whitepapers />,
    errorElement: <NotFound />,
  },
  {
    path: "/faqs",
    element: <FAQs />,
    errorElement: <NotFound />,
  }
];

const utilityRoutes = [
  {
    path: "/leadership",
    element: <Leadership />,
    errorElement: <NotFound />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
    errorElement: <NotFound />,
  },
  {
    path: "/sitemap",
    element: <Sitemap />,
    errorElement: <NotFound />,
  },
  {
    path: "/get-started",
    element: <GetStartedPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/thank-you",
    element: <ThankYouPage />,
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
];

// 301 Redirects
const redirectRoutes = [
  // Documentation redirect (added to fix canonical issue)
  {
    path: "/documentation",
    element: <Navigate to="/" replace />,
  },
  
  // Old services redirects
  {
    path: "/services/alignment",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/services/lineage-mapping",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/services/maintenance",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/services/roi-tracking",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/services/customer-value",
    element: <Navigate to="/" replace />,
  },
  
  // Old resources redirects
  {
    path: "/resources/checklist",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/resources/data-guide",
    element: <Navigate to="/" replace />,
  },
  
  // Old approach redirects
  {
    path: "/approach/data-driven",
    element: <Navigate to="/" replace />,
  },
  
  // Miscellaneous old URLs
  {
    path: "/data-analysis-question-framework",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/implementation",
    element: <Navigate to="/" replace />,
  },
  
  // HubSpot preview URLs redirects
  {
    path: "/en/blog/why-marketing-leaders-encounter-career-obstacles-the-hidden-data-quality-crisis-1",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/en/blog/why-marketing-leaders-encounter-career-obstacles-the-hidden-data-quality-crisis-0",
    element: <Navigate to="/" replace />,
  },
  
  // Blog to Insights redirect
  {
    path: "/blog",
    element: <Navigate to="/insights" replace />,
  },
  
  // Old blog URLs redirects
  {
    path: "/en/blog/all",
    element: <Navigate to="/insights" replace />,
  },
  {
    path: "/en/blog/the-forgotten-art-of-campaign-documentation",
    element: <Navigate to="/insights/forgotten-art-campaign-documentation" replace />,
  },
  {
    path: "/en/blog/saas-healthcare-achieves-remarkable-insights",
    element: <Navigate to="/insights/saas-healthcare-achieves-remarkable-insights" replace />,
  },
  {
    path: "/en/blog/stop-pretending-all-leads-are-equal",
    element: <Navigate to="/insights/lead-tiers-case-study" replace />,
  },
  {
    path: "/en/blog/demystifying-utm-parameters",
    element: <Navigate to="/insights/demystifying-utm-parameters" replace />,
  },
  {
    path: "/en/blog/the-psychology-of-data-governance",
    element: <Navigate to="/insights/psychology-data-governance" replace />,
  },
  {
    path: "/en/blog/what-does-a-hubspot-consultant-cost",
    element: <Navigate to="/insights/what-does-a-hubspot-consultant-cost" replace />,
  },
  {
    path: "/en/blog/hiring-and-working-with-a-hubspot-consultant",
    element: <Navigate to="/insights/hiring-and-working-with-a-hubspot-consultant" replace />,
  },
  {
    path: "/en/blog/marketing-operations-isnt-it",
    element: <Navigate to="/insights/marketing-operations-isnt-it" replace />,
  },
  {
    path: "/en/blog/lead-scoring-pitfalls-to-avoid",
    element: <Navigate to="/insights/lead-scoring-pitfalls" replace />,
  }
];

// Combine all routes
const routes = [
  ...mainRoutes,
  ...serviceRoutes,
  ...insightRoutes,
  ...utilityRoutes,
  ...redirectRoutes
];

// Create and export the router
const router = createBrowserRouter(routes);

export default router;
