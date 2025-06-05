
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AuthorBio: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://www.dataopsgroup.com/#person-geoff-tucker",
            "name": "Geoff Tucker",
            "url": "https://www.dataopsgroup.com/about",
            "image": "https://www.dataopsgroup.com/lovable-uploads/geoff-tucker-profile.jpg",
            "jobTitle": "HubSpot Expert & Marketing Operations Consultant",
            "worksFor": {
              "@type": "Organization",
              "name": "DataOps Group",
              "url": "https://www.dataopsgroup.com"
            },
            "knowsAbout": [
              "HubSpot Implementation",
              "Marketing Operations", 
              "Revenue Operations",
              "Data Integration",
              "Marketing Automation",
              "Sales Operations"
            ],
            "hasCredential": [
              "HubSpot Certified Expert since 2012",
              "Marketing Operations Specialist",
              "Data Integration Expert"
            ],
            "expertise": "HubSpot implementation and marketing operations optimization",
            "yearsOfExperience": "12+ years",
            "description": "Geoff Tucker is a HubSpot expert with over 12 years of experience helping businesses optimize their marketing operations and data integration strategies."
          })}
        </script>
      </Helmet>
      
      <div className="flex items-start space-x-4">
        <img 
          src="https://www.dataopsgroup.com/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
          alt="Geoff Tucker - HubSpot Expert"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Geoff Tucker</h3>
          <p className="text-sm text-dataops-600 font-medium mb-2">HubSpot Expert Since 2012</p>
          <p className="text-sm text-gray-600 mb-3">
            12+ years helping businesses optimize HubSpot implementations and marketing operations for maximum ROI.
          </p>
          <Link 
            to="/about" 
            className="text-sm text-dataops-600 hover:text-dataops-700 font-medium"
          >
            Learn more about Geoff →
          </Link>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-dataops-100 text-dataops-700 text-xs rounded">
            HubSpot Certified
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
            Marketing Ops Expert
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
            Data Integration
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
