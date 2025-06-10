
import React from 'react';

const CallToActionSection = () => {
  return (
    <div className="mt-8 bg-dataops-50 border border-dataops-200 rounded-lg p-6">
      <h3 className="font-semibold text-dataops-900 mb-2">Ready to Reduce These Costs?</h3>
      <p className="text-dataops-700 text-sm mb-4">
        Our data ops consulting can help you implement systems and processes to dramatically reduce these costs. 
        Most clients see 40-60% improvement in data quality within 90 days.
      </p>
      <a 
        href="/contact"
        className="inline-block bg-dataops-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-dataops-700 transition-colors"
      >
        Get a Free Data Assessment
      </a>
    </div>
  );
};

export default CallToActionSection;
