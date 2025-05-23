
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';

const PillarContentPage = () => {
  return (
    <SemanticLayout>
      <MetaHead 
        title="Pillar Content | DataOps Group"
        description="Comprehensive guides on HubSpot implementation and integration"
        keywords="HubSpot experts, HubSpot consultants, HubSpot implementation, HubSpot integration"
        canonicalPath="/pillar-content"
      />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Pillar Content</h1>
        
        {/* Parent container with outline */}
        <div className="flex border border-black">
          {/* Table of Contents placeholder */}
          <div className="w-[33%]">
            <div className="p-4 sticky top-24"> {/* Added sticky positioning */}
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              
              {/* TOC container with red outline */}
              <div className="border border-red-500">
                <ul className="list-none p-0 m-0">
                  <li>Lorem ipsum</li>
                  <li>Dolor sit amet</li>
                  <li>Consectetur</li>
                  <li>Adipiscing elit</li>
                  <li>Praesent eget</li>
                  <li>Nunc in dolor</li>
                  <li>Finibus efficitur</li>
                  <li>Aliquam erat</li>
                  <li>Volutpat morbi</li>
                  <li>Vel magna</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Main content placeholder */}
          <div className="w-[64%] p-4">
            <h2 className="text-xl font-semibold mb-4">Main Content</h2>
            
            {/* Content container with blue outline */}
            <div className="border border-blue-500">
              <p>This is a placeholder for the pillar content. We'll rebuild this with a new approach.</p>
            </div>
          </div>
        </div>
      </div>
    </SemanticLayout>
  );
};

export default PillarContentPage;
