
import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/Contact';
import Services from './pages/Services';
import AnalyticsBI from './pages/AnalyticsBI';
import DataOpsImplementation from './pages/DataOpsImplementation';
import TeamTraining from './pages/TeamTraining';
import MarketingOperationsRevOps from './pages/MarketingOperationsRevOps';
import NotFound from './pages/NotFound';
import Loading from './components/Loading';
import ErrorDisplay from './components/ErrorDisplay';
import CookieConsent from 'react-cookie-consent';
import PrivacyModal from './components/PrivacyModal';
import BookLandingPage from './pages/BookLandingPage';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import AboutPage from './pages/AboutPage';
import ApproachPage from './pages/ApproachPage';
import CaseStudiesPage from './pages/CaseStudies';
import Whitepapers from './pages/Whitepapers';
import Documentation from './pages/Documentation';
import FAQs from './pages/FAQs';
import Leadership from './pages/Leadership';
import Privacy from './pages/Privacy';
import Sitemap from './pages/Sitemap';
import GetStartedPage from './pages/GetStartedPage';
import ThankYouPage from './pages/ThankYouPage';
import SEOManagement from './pages/SEOManagement';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  return (
    <div className="relative">
      {isLoading && <Loading />}
      {error && <ErrorDisplay message={error.message} />}
      
      <RouterProvider
        router={createBrowserRouter([
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
            path: "/book",
            element: <BookLandingPage />,
            errorElement: <NotFound />,
          },
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
            path: "/case-studies",
            element: <CaseStudiesPage />,
            errorElement: <NotFound />,
          },
          // Add redirect from /blog to /insights
          {
            path: "/blog",
            element: <Navigate to="/insights" replace />,
            errorElement: <NotFound />,
          },
          // Add all the 301 redirects for old blog URLs
          {
            path: "/en/blog/all",
            element: <Navigate to="/insights" replace />,
            errorElement: <NotFound />,
          },
          {
            path: "/en/blog/the-forgotten-art-of-campaign-documentation",
            element: <Navigate to="/insights/forgotten-art-campaign-documentation" replace />,
            errorElement: <NotFound />,
          },
          {
            path: "/en/blog/saas-healthcare-achieves-remarkable-insights",
            element: <Navigate to="/insights/saas-healthcare-achieves-remarkable-insights" replace />,
            errorElement: <NotFound />,
          },
          {
            path: "/en/blog/stop-pretending-all-leads-are-equal",
            element: <Navigate to="/insights/lead-tiers-case-study" replace />,
            errorElement: <NotFound />,
          },
          {
            path: "/en/blog/demystifying-utm-parameters",
            element: <Navigate to="/insights/demystifying-utm-parameters" replace />,
            errorElement: <NotFound />,
          },
          {
            path: "/en/blog/the-psychology-of-data-governance",
            element: <Navigate to="/insights/psychology-data-governance" replace />,
            errorElement: <NotFound />,
          },
          {
            path: "/en/blog/what-does-a-hubspot-consultant-cost",
            element: <Navigate to="/insights/what-does-a-hubspot-consultant-cost" replace />,
            errorElement: <NotFound />,
          },
          {
            path: "/en/blog/hiring-and-working-with-a-hubspot-consultant",
            element: <Navigate to="/insights/hiring-and-working-with-a-hubspot-consultant" replace />,
            errorElement: <NotFound />,
          },
          {
            path: "/en/blog/marketing-operations-isnt-it",
            element: <Navigate to="/insights/marketing-operations-isnt-it" replace />,
            errorElement: <NotFound />,
          },
          {
            path: "/en/blog/lead-scoring-pitfalls-to-avoid",
            element: <Navigate to="/insights/lead-scoring-pitfalls" replace />,
            errorElement: <NotFound />,
          },
          // Add missing routes
          {
            path: "/whitepapers",
            element: <Whitepapers />,
            errorElement: <NotFound />,
          },
          {
            path: "/documentation",
            element: <Documentation />,
            errorElement: <NotFound />,
          },
          {
            path: "/faqs",
            element: <FAQs />,
            errorElement: <NotFound />,
          },
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
            path: "/seo-management",
            element: <SEOManagement />,
            errorElement: <NotFound />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ])}
      />
      
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="dataopsCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={() => {
          // Handle analytics or other tracking services here
        }}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px", cursor: "pointer", textDecoration: 'underline' }} onClick={() => setIsPrivacyModalOpen(true)}>
          Learn More
        </span>
      </CookieConsent>

      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
    </div>
  );
}

export default App;
