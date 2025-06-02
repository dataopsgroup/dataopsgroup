import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const NotFound = () => {
  // Safe location handling - check if we're in router context
  const locationFromRouter = (() => {
    try {
      // This will throw if we're outside router context
      return useLocation();
    } catch (err) {
      // Return a default location object when outside router context
      return { pathname: window.location.pathname };
    }
  })();

  useEffect(() => {
    // Log the 404 error with the attempted path
    console.error(
      "404 Error: User attempted to access non-existent route:",
      locationFromRouter.pathname
    );

    // Track 404 error with Google Analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'error', {
        'event_category': '404',
        'event_label': locationFromRouter.pathname,
        'non_interaction': true
      });
    }
  }, [locationFromRouter.pathname]);

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  // Safe way to get canonical URL
  const getCanonicalUrl = () => {
    return `${baseUrl}/404`;
  };

  // Define breadcrumbs for schema
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Page Not Found', url: '/404' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Page Not Found - DataOps Group</title>
        <meta name="description" content="The page you are looking for does not exist. Return to our homepage to explore DataOps Group's HubSpot consultancy services and resources." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={getCanonicalUrl()} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Page Not Found - DataOps Group" />
        <meta property="og:description" content="The page you are looking for does not exist. Return to our homepage to explore DataOps Group's HubSpot consultancy services and resources." />
        <meta property="og:url" content={getCanonicalUrl()} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:site_name" content="DataOps Group" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Page Not Found - DataOps Group" />
        <meta name="twitter:description" content="The page you are looking for does not exist. Return to our homepage to explore DataOps Group's HubSpot consultancy services and resources." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta name="twitter:site" content="@dataops_group" />
        {/* Schema markup */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Page Not Found - DataOps Group",
            "description": "The page you are looking for does not exist. Return to our homepage to explore DataOps Group's HubSpot consultancy services and resources.",
            "url": "${getCanonicalUrl()}",
            "isPartOf": {
              "@type": "WebSite",
              "name": "DataOps Group",
              "url": "${baseUrl}"
            }
          }
        `}</script>
      </Helmet>
      
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbs} />
      
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-dataops-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="px-6 py-3 bg-dataops-600 text-white rounded-md hover:bg-dataops-700 transition-colors inline-block"
            aria-label="Return to DataOps Group homepage"
          >
            Return to Homepage
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
