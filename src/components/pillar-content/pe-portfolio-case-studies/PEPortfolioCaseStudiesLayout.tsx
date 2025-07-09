import React from 'react';
import PEPortfolioCaseStudiesHero from './PEPortfolioCaseStudiesHero';
import PEPortfolioCaseStudiesContent from './PEPortfolioCaseStudiesContent';
import PEPortfolioCaseStudiesSidebar from './PEPortfolioCaseStudiesSidebar';

const PEPortfolioCaseStudiesLayout = () => {
  return (
    <main className="min-h-screen bg-white -mt-[109px]">
      <PEPortfolioCaseStudiesHero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <PEPortfolioCaseStudiesSidebar />
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <PEPortfolioCaseStudiesContent />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PEPortfolioCaseStudiesLayout;