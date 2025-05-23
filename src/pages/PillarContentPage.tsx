
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
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Praesent eget nunc in dolor finibus efficitur.</li>
                  <li>Aliquam erat volutpat. Morbi vel magna sit amet risus.</li>
                  <li>Suspendisse potenti. Nullam ullamcorper diam in dolor.</li>
                  <li>Donec auctor ligula eget magna tincidunt, vel congue.</li>
                  <li>Integer vehicula magna a orci laoreet, in lacinia magna.</li>
                  <li>Curabitur ut arcu nec dui finibus fermentum sit amet.</li>
                  <li>Mauris lacinia risus vitae augue tincidunt, ut sodales.</li>
                  <li>Vestibulum ante ipsum primis in faucibus orci luctus et.</li>
                  <li>Nulla facilisi. Fusce tempus odio sem, vel accumsan.</li>
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
