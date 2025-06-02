
import React from 'react';
import ServiceBenefits from './ServiceBenefits';

const MarketingOperationsRevOpsBenefits = () => {
  const benefits = [
    "Standardize marketing processes across portfolio companies",
    "Scale proven revenue systems to multiple investments",
    "Measure marketing ROI with investor-grade accuracy",
    "Optimize customer acquisition costs across holdings",
    "Implement predictable revenue generation systems",
    "Create standardized reporting for board presentations",
    "Accelerate time-to-value for new portfolio acquisitions",
    "Build scalable marketing operations frameworks",
    "Enhance portfolio company valuations through operational excellence"
  ];

  return (
    <ServiceBenefits 
      benefits={benefits}
      serviceTitle="Marketing Operations & RevOps"
      isHubSpotTraining={false}
      ctaText="Get Your RevOps Strategy"
    />
  );
};

export default MarketingOperationsRevOpsBenefits;
