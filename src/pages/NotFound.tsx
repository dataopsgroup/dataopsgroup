
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log the 404 error with the attempted path
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Track 404 error with Google Analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'error', {
        'event_category': '404',
        'event_label': location.pathname,
        'non_interaction': true
      });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Page Not Found - DataOps Group</title>
        <meta name="description" content="The page you are looking for does not exist. Return to our homepage to explore DataOps Group's services and resources." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
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
