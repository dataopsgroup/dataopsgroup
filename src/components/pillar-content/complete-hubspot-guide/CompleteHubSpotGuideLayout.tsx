
import React from 'react';
import CompleteHubSpotGuideHero from './CompleteHubSpotGuideHero';
import CompleteHubSpotGuideContent from './CompleteHubSpotGuideContent';
import CompleteHubSpotGuideSidebar from './CompleteHubSpotGuideSidebar';

const CompleteHubSpotGuideLayout = () => {
  return (
    <main className="bg-white -mt-[109px]">
      <CompleteHubSpotGuideHero />
      
      {/* Main Content Layout */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <CompleteHubSpotGuideSidebar />
              
              {/* Main Content - 2/3 column */}
              <div className="lg:col-span-2">
                <CompleteHubSpotGuideContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompleteHubSpotGuideLayout;
