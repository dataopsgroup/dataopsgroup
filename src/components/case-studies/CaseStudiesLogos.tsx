
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
      name: 'Sunburst Alternate',
      image: '/lovable-uploads/cca85987-ea04-4242-8b22-f441ee4e4eb9.png',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Trusted by Leading Organizations</h2>
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
    </section>
  );
};

export default CaseStudiesLogos;
