
import React from 'react';

const HubSpotTrainingContent = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">How We Can Help</h2>
        <p className="text-gray-700 mb-4">
          As Certified HubSpot Solutions Partners, we provide comprehensive training and implementation services 
          to ensure your team can leverage the full power of HubSpot. Whether you're just getting started with 
          HubSpot or looking to optimize your existing setup, our expert team will guide you through every step 
          of the process.
        </p>
        <p className="text-gray-700 mb-4">
          We understand that every business has unique needs and goals. That's why we offer customized HubSpot 
          training programs tailored to your specific requirements, ensuring you get the most out of your 
          HubSpot investment.
        </p>
      </div>
      
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our HubSpot Services</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-dataops-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Implementation & Setup</h3>
            <p className="text-gray-700">Expert configuration of your HubSpot portal including CRM setup, integrations, and workflow automation.</p>
          </div>
          <div className="bg-dataops-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Custom Training</h3>
            <p className="text-gray-700">Personalized training sessions for your team focused on the specific HubSpot tools and features you'll use most.</p>
          </div>
          <div className="bg-dataops-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Migration Services</h3>
            <p className="text-gray-700">Seamless migration of your data from existing systems to HubSpot with minimal disruption to your operations.</p>
          </div>
          <div className="bg-dataops-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Ongoing Support</h3>
            <p className="text-gray-700">Continuous guidance and expertise as your business grows and your HubSpot needs evolve over time.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HubSpotTrainingContent;
