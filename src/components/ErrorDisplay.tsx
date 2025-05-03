
import React from 'react';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay = ({ message }: ErrorDisplayProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="max-w-md p-8 bg-red-50 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
        <p className="text-gray-700">{message}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default ErrorDisplay;
