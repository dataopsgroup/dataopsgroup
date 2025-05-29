
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
      imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      imageAlt="Team training session with people working together around laptops and computers"
    />
  );
};

export default TeamTrainingHero;
