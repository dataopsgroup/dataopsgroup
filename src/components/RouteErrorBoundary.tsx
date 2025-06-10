
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const RouteErrorBoundary = () => {
  const location = useLocation();
  
  // Log error information for debugging
  console.log('RouteErrorBoundary component rendered');
  console.log('Failed route:', location.pathname);
  console.log('Current location:', location);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-6">The page you're looking for doesn't exist or there was an error loading it.</p>
        
        {location.pathname && (
          <p className="text-sm text-gray-500 mb-4">
            Attempted path: {location.pathname}
          </p>
        )}
        
        <div className="space-y-3">
          <Button 
            onClick={() => window.location.reload()}
            className="w-full bg-dataops-600 text-white hover:bg-dataops-700"
          >
            Refresh Page
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="w-full"
          >
            <Link to="/">Go to Home</Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="w-full"
          >
            <Link to="/insights">Go to Insights</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RouteErrorBoundary;
