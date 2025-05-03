
import React from 'react';
import ServiceBenefits from './ServiceBenefits';

const MarketingOperationsRevOpsBenefits = () => {
  const benefits = [
    "Improved marketing ROI with data-driven decision making",
    "Unified view of marketing performance across all channels",
    "Enhanced customer segmentation and targeting",
    "Better attribution of marketing efforts to revenue",
    "Streamlined reporting and time savings",
    "Improved campaign optimization and performance",
    "Greater marketing and sales alignment",
    "Increased conversion rates and customer acquisition",
    "Clear visualization of marketing metrics for leadership"
  ];

  return (
    <ServiceBenefits 
      benefits={benefits}
      serviceTitle="Marketing Data Management & Analytics"
      isHubSpotTraining={false}
    />
  );
};

export default MarketingOperationsRevOpsBenefits;
