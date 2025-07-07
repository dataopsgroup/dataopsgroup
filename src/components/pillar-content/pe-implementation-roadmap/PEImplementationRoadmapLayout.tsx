import React from 'react';
import PEImplementationRoadmapHero from './PEImplementationRoadmapHero';
import PEImplementationRoadmapContent from './PEImplementationRoadmapContent';
import PEImplementationRoadmapSidebar from './PEImplementationRoadmapSidebar';

const PEImplementationRoadmapLayout = () => {
  return (
    <main className="bg-white -mt-[109px]">
      <PEImplementationRoadmapHero />
      
      {/* Main Content Layout */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <PEImplementationRoadmapSidebar />
              
              {/* Main Content - 2/3 column */}
              <div className="lg:col-span-2">
                <PEImplementationRoadmapContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PEImplementationRoadmapLayout;