import React from 'react';

const PEPortfolioCaseStudiesHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Portfolio Value Creation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Case Studies
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Real examples of how sophisticated PE firms use HubSpot to drive measurable value creation across diverse portfolio companies
          </p>
        </div>
      </div>
    </div>
  );
};

export default PEPortfolioCaseStudiesHero;