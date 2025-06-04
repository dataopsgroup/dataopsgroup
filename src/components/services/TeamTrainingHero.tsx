
import React from 'react';
import ServiceHero from './ServiceHero';
import { Users } from 'lucide-react';

const TeamTrainingHero = () => {
  return (
    <ServiceHero
      title="HubSpot Implementation and Training"
      tagline="Professional Training That Delivers Results"
      description="Accelerate your portfolio companies' growth with comprehensive HubSpot training and implementation that transforms marketing teams into high-performing revenue engines."
      ctaText="Book Your HubSpot Strategy Session"
      isHubSpotTraining={true}
      serviceIcon={<Users size={64} />}
      backgroundImage="/lovable-uploads/0fa57601-c63b-40e0-8e0f-78fc9104bd6c.png"
    />
  );
};

export default TeamTrainingHero;
