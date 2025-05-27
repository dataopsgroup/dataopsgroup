
import React from 'react';
import ServiceHero from './ServiceHero';
import { Users } from 'lucide-react';

const TeamTrainingHero = () => {
  return (
    <ServiceHero
      title="Empower Your Teams With Expert HubSpot Mastery"
      tagline="Professional Training That Delivers Results"
      description="Accelerate your portfolio companies' growth with comprehensive HubSpot training and implementation that transforms marketing teams into high-performing revenue engines."
      ctaText="Book Your HubSpot Strategy Session"
      isHubSpotTraining={true}
      serviceIcon={<Users size={64} />}
    />
  );
};

export default TeamTrainingHero;
