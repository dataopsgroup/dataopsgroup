import React from 'react';
import PEDecisionFrameworkHero from './PEDecisionFrameworkHero';
import PEDecisionFrameworkContent from './PEDecisionFrameworkContent';
import PEDecisionFrameworkSidebar from './PEDecisionFrameworkSidebar';

const PEDecisionFrameworkLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <PEDecisionFrameworkHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <PEDecisionFrameworkContent />
          </div>
          
          {/* Sidebar */}
          <PEDecisionFrameworkSidebar />
        </div>
      </div>
    </div>
  );
};

export default PEDecisionFrameworkLayout;