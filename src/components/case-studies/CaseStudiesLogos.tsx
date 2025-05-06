
import React from 'react';

const CaseStudiesLogos = () => {
  const clientLogos = [
    {
      name: 'Wistia',
      image: '/lovable-uploads/3a418af1-0d95-4493-9ec0-73b630fc350a.png',
    },
    {
      name: 'Sunburst',
      image: '/lovable-uploads/916cc6b6-d252-4e1b-9f0b-f0ec0adc4b65.png',
    },
    {
      name: 'Dedupely',
      image: '/lovable-uploads/fc79525b-e982-48ab-b01c-74d9e772a7c3.png',
    },
    {
      name: 'HubSpot Solutions Partner',
      image: '/lovable-uploads/460f4957-eaf6-4f01-b6b1-650d5d14b791.png',
    },
  ];
  
  const certifications = [
    {
      name: 'HubSpot Sales Software Certified',
      image: '/lovable-uploads/46ab3133-f50e-42d9-9943-bbb72ac99ac9.png',
    },
    {
      name: 'HubSpot Academy',
      image: '/lovable-uploads/7271e9bf-ca3a-442a-8557-fcb724fdbe9f.png',
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Trusted Partners & Certifications</h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-6">Our Technology Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clientLogos.map((logo, index) => (
              <div key={index} className="w-32 md:w-40 h-16 flex items-center justify-center">
                <img 
                  src={logo.image} 
                  alt={`${logo.name} logo`} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-center mb-6">HubSpot Certifications</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {certifications.map((cert, index) => (
              <div key={index} className="w-40 md:w-48 h-20 flex items-center justify-center">
                <img 
                  src={cert.image} 
                  alt={`${cert.name}`} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600">Working with certified HubSpot experts means you get best practices and proven methodologies</p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesLogos;
