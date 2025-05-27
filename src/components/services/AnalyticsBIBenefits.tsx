
import React from 'react';
import ServiceBenefits from './ServiceBenefits';

const AnalyticsBIBenefits = () => {
  const benefits = [
    "Standardize reporting across portfolio companies",
    "Make faster, more confident investment decisions with data-backed insights",
    "Identify and capitalize on new business opportunities across holdings",
    "Measure marketing ROI with investor-grade accuracy",
    "Scale proven analytics systems to multiple investments",
    "Optimize operational efficiency across portfolio companies",
    "Predict market trends and customer behaviors for strategic planning",
    "Enhance due diligence processes with comprehensive data analysis",
    "Create executive dashboards for board-level reporting"
  ];

  return (
    <ServiceBenefits 
      benefits={benefits}
      serviceTitle="Analytics & Business Intelligence"
      isHubSpotTraining={false}
      ctaText="Schedule Your Analytics Assessment"
    />
  );
};

export default AnalyticsBIBenefits;
