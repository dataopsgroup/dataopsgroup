
import React from 'react';
import { Link } from 'react-router-dom';

const AuthorBio: React.FC = () => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img
            src="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
            alt="Geoff Tucker, HubSpot Expert"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Geoff Tucker</h3>
          <p className="text-sm text-gray-600 mb-3">
            HubSpot Certified Expert since 2012 with 12+ years of experience helping businesses 
            optimize their marketing operations and data integration strategies.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-gray-500">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">HubSpot Certified</span>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Data Integration</span>
            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">RevOps</span>
          </div>
          <Link 
            to="/about" 
            className="inline-block mt-3 text-sm text-dataops-600 hover:text-dataops-700 font-medium"
          >
            Learn more about Geoff →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
