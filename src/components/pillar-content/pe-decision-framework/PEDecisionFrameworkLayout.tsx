import React from 'react';
import PEDecisionFrameworkHero from './PEDecisionFrameworkHero';
import PEDecisionFrameworkContent from './PEDecisionFrameworkContent';
import PEDecisionFrameworkSidebar from './PEDecisionFrameworkSidebar';

const PEDecisionFrameworkLayout = () => {
  return (
    <main className="min-h-screen bg-white -mt-[109px]">
      <PEDecisionFrameworkHero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <PEDecisionFrameworkSidebar />
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <PEDecisionFrameworkContent />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PEDecisionFrameworkLayout;