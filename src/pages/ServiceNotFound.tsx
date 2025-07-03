import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';

const ServiceNotFound = () => {
  return (
    <SemanticLayout>
      <MetaHead
        title="Service Not Found (404) - DataOps Group"
        description="The service you're looking for doesn't exist. Browse our available services or return to our homepage."
        canonicalPath="/services/404"
        noindex={true}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Service Not Found",
          "description": "Error 404 - Service not found",
          "url": "https://dataopsgroup.com/services/404"
        }}
      />
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Service Not Found</h2>
            <p className="text-gray-600 mb-8">
              Sorry, we couldn't find the service you're looking for.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default">
              <Link to="/services" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                View All Services
              </Link>
            </Button>
            
            <Button asChild variant="outline">
              <Link to="/" className="flex items-center">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SemanticLayout>
  );
};

export default ServiceNotFound;