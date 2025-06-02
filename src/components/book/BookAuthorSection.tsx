
import React from 'react';

const BookAuthorSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-800">About the Author</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <img 
              src="/lovable-uploads/79716a8a-35d3-4966-a6e9-1d0f21b5f732.png" 
              alt="Geoff Tucker" 
              className="w-80 h-80 object-cover rounded-3xl shadow-xl mx-auto md:mx-0" 
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Geoff Tucker</h3>
            <div className="text-blue-600 font-semibold text-lg mb-6">Founder, DataOps Group</div>
            
            <div className="flex gap-10 mb-8">
              <div className="text-center">
                <span className="block text-2xl font-bold text-blue-600">15+</span>
                <span className="text-sm text-gray-600">Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-blue-600">50+</span>
                <span className="text-sm text-gray-600">Companies Helped</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-blue-600">HubSpot</span>
                <span className="text-sm text-gray-600">Super Admin</span>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Geoff Tucker is a data strategy expert with over 15 years of experience helping companies transform 
              their marketing data operations. As the founder of DataOps Group, he has developed methodologies 
              that help businesses turn their HubSpot investments into measurable growth.
            </p>
            <p className="text-gray-600 leading-relaxed">
              His approach combines technical expertise with practical business strategy, helping marketing teams 
              bridge the gap between data collection and revenue generation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAuthorSection;
