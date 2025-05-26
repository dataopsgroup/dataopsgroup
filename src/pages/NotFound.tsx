
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  // Safe location handling with proper error boundary
  let currentPath = '/';
  try {
    const location = useLocation();
    currentPath = location.pathname;
  } catch (error) {
    // Fallback when outside router context
    if (typeof window !== 'undefined') {
      currentPath = window.location.pathname;
    }
  }

  useEffect(() => {
    // Log the 404 error with the attempted path
    console.error(
      "404 Error: User attempted to access non-existent route:",
      currentPath
    );

    // Track 404 error with Google Analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'error', {
        'event_category': '404',
        'event_label': currentPath,
        'non_interaction': true
      });
    }
  }, [currentPath]);

  // Safe way to get canonical URL
  const getCanonicalUrl = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/404`;
    }
    return '/404';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Page Not Found - DataOps Group</title>
        <meta name="description" content="The page you are looking for does not exist. Return to our homepage to explore DataOps Group's HubSpot consultancy services and resources." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={getCanonicalUrl()} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-2xl mx-auto p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-dataops-500 mb-6 font-headline">
            Oops! Page Not Found
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 font-body leading-relaxed">
            Sorry that page doesn't exist. Please check the footer for all available links.
          </p>
          <div className="space-y-4">
            <Link 
              to="/" 
              className="inline-block px-8 py-3 bg-dataops-500 text-white rounded-lg hover:bg-dataops-600 transition-colors font-medium font-body text-lg"
              aria-label="Return to DataOps Group homepage"
            >
              Back to Home
            </Link>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link 
                to="/services" 
                className="text-dataops-500 hover:text-dataops-600 transition-colors font-medium font-body"
                aria-label="View our services"
              >
                Services
              </Link>
              <Link 
                to="/insights" 
                className="text-dataops-500 hover:text-dataops-600 transition-colors font-medium font-body"
                aria-label="Read our insights"
              >
                Insights
              </Link>
              <Link 
                to="/hubspot-assessment" 
                className="text-dataops-500 hover:text-dataops-600 transition-colors font-medium font-body"
                aria-label="Take our HubSpot assessment"
              >
                Free Assessment
              </Link>
              <Link 
                to="/contact" 
                className="text-dataops-500 hover:text-dataops-600 transition-colors font-medium font-body"
                aria-label="Contact us"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
