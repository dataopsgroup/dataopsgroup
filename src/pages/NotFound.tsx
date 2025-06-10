
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';

const NotFound = () => {
  return (
    <SemanticLayout>
      <MetaHead
        title="Page Not Found (404) - DataOps Group"
        description="The page you're looking for doesn't exist. Return to our homepage or browse our services, insights, and resources."
        canonicalPath="/404"
        noindex={true}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Page Not Found",
          "description": "Error 404 - Page not found",
          "url": "https://dataopsgroup.com/404",
          "mainEntity": {
            "@type": "WebPageElement",
            "cssSelector": "main",
            "name": "404 Error Content"
          }
        }}
      />
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default">
              <Link to="/" className="flex items-center">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            
            <Button asChild variant="outline">
              <Link to="/insights" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SemanticLayout>
  );
};

export default NotFound;
