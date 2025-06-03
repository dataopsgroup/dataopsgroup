
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const RouteErrorBoundary = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-6">The page you're looking for doesn't exist or there was an error loading it.</p>
        
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
