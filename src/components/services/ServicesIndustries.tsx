
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesIndustries = () => {
  // Industry list that directs to case studies now
  const industries = [
    'Finance & Banking',
    'Healthcare',
    'Manufacturing',
    'Retail & E-commerce',
    'Technology',
    'Insurance',
    'Logistics',
    'Energy & Utilities',
  ];

  // Track industry click for analytics
  const trackIndustryClick = (industry: string) => {
    if (window.gtag) {
      window.gtag('event', 'industry_click', {
        'event_category': 'Navigation',
        'event_label': industry
      });
      
      // Enhanced tracking for industry interest
      window.gtag('event', 'select_content', {
        'content_type': 'industry',
        'item_id': industry.toLowerCase().replace(/\s+/g, '-')
      });
    }
    
    if (window._hsq) {
      window._hsq.push(['trackEvent', {
        id: 'industry_click',
        value: industry
      }]);
    }
  };

  return (
    <section className="space-y-6" aria-labelledby="industries-heading">
      <h2 id="industries-heading" className="text-3xl font-bold">Industries We Serve</h2>
      <p className="text-lg text-gray-700">
        Our data solutions are tailored to meet the specific needs of various industries. We understand
        the unique challenges and opportunities across different sectors and provide specialized
        expertise to help organizations achieve their data objectives.
      </p>
      
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <Link 
              key={index} 
              to="/case-studies" 
              className="text-dataops-600 hover:underline focus:outline-none focus:ring-2 focus:ring-dataops-500 focus:ring-offset-2 rounded px-2 py-1"
              onClick={() => trackIndustryClick(industry)}
              aria-label={`View case studies for ${industry}`}
            >
              {industry}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesIndustries;
