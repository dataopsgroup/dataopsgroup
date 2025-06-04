
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import PillarContent from '@/components/PillarContent';
import { setupInteractionBasedLoading } from '@/lib/performance/interaction';
import pillarContentData from '@/data/pillar-content/hubspot-expert-guide.json';

const HubSpotExpertGuidePage = () => {
  useEffect(() => {
    setupInteractionBasedLoading();
  }, []);

  return (
    <SemanticLayout>
      <Helmet>
        <title>How to Hire a HubSpot Expert: Complete Guide for 2024 | DataOps Group</title>
        <meta name="description" content="Complete guide to hiring HubSpot experts. Learn how to find, evaluate, and work with certified HubSpot consultants for maximum ROI." />
        <meta name="keywords" content="HubSpot expert, HubSpot consultant, hire HubSpot specialist, HubSpot implementation" />
        <link rel="canonical" href="https://www.dataopsgroup.com/hubspot-expert-guide" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="How to Hire a HubSpot Expert: Complete Guide for 2024" />
        <meta property="og:description" content="Complete guide to hiring HubSpot experts. Learn how to find, evaluate, and work with certified HubSpot consultants for maximum ROI." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.dataopsgroup.com/hubspot-expert-guide" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Hire a HubSpot Expert: Complete Guide for 2024" />
        <meta name="twitter:description" content="Complete guide to hiring HubSpot experts. Learn how to find, evaluate, and work with certified HubSpot consultants for maximum ROI." />
      </Helmet>
      
      <PillarContent data={pillarContentData} />
    </SemanticLayout>
  );
};

export default HubSpotExpertGuidePage;
