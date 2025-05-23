
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
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, nisi vel tincidunt aliquam, tortor nisi aliquam dui, id efficitur turpis mauris vel nulla. Fusce vel turpis non orci tincidunt bibendum. Nulla facilisi. Donec vehicula, mauris at scelerisque fermentum, velit turpis tincidunt nisi, eget aliquam quam nisi id nisl.</p>
              
              <p className="mb-4">Praesent id lacus vel nisi ultrices ultricies. Suspendisse potenti. Donec blandit mi eu nunc pellentesque, eget dictum nisl interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras nec dictum sapien. Integer euismod, metus non cursus finibus, eros lacus aliquam nulla, id faucibus magna augue ac velit.</p>
              
              <p className="mb-4">In hac habitasse platea dictumst. Etiam elementum ex vel ullamcorper ultricies. Vivamus non augue quis neque feugiat dictum. Donec vehicula odio a eros pharetra, id pharetra quam placerat. Mauris non tincidunt velit, et fermentum neque. Nunc malesuada augue vel ante tincidunt, id pharetra magna sollicitudin.</p>
              
              <p className="mb-4">Fusce ultrices enim ut sapien feugiat, vel pretium lacus euismod. Nulla facilisi. Etiam interdum, felis id congue viverra, mi velit pretium nisl, id tempor purus neque nec ex. Mauris fermentum, purus vel bibendum auctor, diam mauris tincidunt nisl, sit amet facilisis arcu mi at velit. Donec non ornare justo.</p>
              
              <p className="mb-4">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla finibus orci id risus fermentum, vel vestibulum ipsum malesuada. Aenean vestibulum, eros non volutpat rutrum, sapien nulla congue risus, vel bibendum magna est ac velit.</p>
              
              <p className="mb-4">Morbi tristique feugiat nisi, vel cursus tortor tristique vel. Nulla nec accumsan nisl. Integer hendrerit purus eu dolor rhoncus, vel placerat quam feugiat. Ut mollis vestibulum odio, ut fringilla neque cursus vel. Integer vel quam vitae leo dictum tempus.</p>
              
              <p className="mb-4">Cras efficitur justo eget nulla finibus, in lacinia nunc egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam scelerisque justo vel lacus fermentum, vel luctus magna hendrerit. Pellentesque tincidunt congue risus, vel commodo dui lacinia at.</p>
              
              <p className="mb-4">Maecenas ultricies lacus vel nisl tempus, vel pulvinar magna tincidunt. Vestibulum bibendum lorem vel sapien scelerisque, at venenatis velit tempus. Nam suscipit enim vitae urna pharetra, vel fermentum magna facilisis. Praesent nec mauris sit amet turpis faucibus blandit vel quis risus.</p>
            </div>
          </div>
        </div>
      </div>
    </SemanticLayout>
  );
};

export default PillarContentPage;
