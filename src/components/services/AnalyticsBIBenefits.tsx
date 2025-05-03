
import React from 'react';
import ServiceBenefits from './ServiceBenefits';

const AnalyticsBIBenefits = () => {
  const benefits = [
    "Make faster, more confident decisions with data-backed insights",
    "Identify and capitalize on new business opportunities",
    "Improve operational efficiency and reduce costs",
    "Enhance customer experiences through deeper understanding",
    "Gain competitive advantage through data-driven strategy",
    "Democratize data access across your organization",
    "Predict market trends and customer behaviors",
    "Measure and optimize return on marketing investments",
    "Align business activities with strategic objectives"
  ];

  return (
    <ServiceBenefits 
      benefits={benefits}
      serviceTitle="Analytics & Business Intelligence"
      isHubSpotTraining={false}
    />
  );
};

export default AnalyticsBIBenefits;
