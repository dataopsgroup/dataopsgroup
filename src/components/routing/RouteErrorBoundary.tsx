
import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RouteErrorBoundary = () => {
  const error = useRouteError();
  
  console.error('Route error:', error);

  let errorMessage: string;
  let errorStatus: string = 'Error';

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText || 'An unexpected error occurred';
    errorStatus = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'An unexpected error occurred';
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-red-600 mb-4">{errorStatus}</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Something went wrong</h2>
          <p className="text-lg text-gray-600 mb-8">{errorMessage}</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-dataops-600 text-white rounded-md hover:bg-dataops-700 transition-colors"
          >
            Return to Homepage
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RouteErrorBoundary;
