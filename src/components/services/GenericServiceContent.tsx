
import React from 'react';

interface GenericServiceContentProps {
  serviceTitle: string;
}

const GenericServiceContent = ({ serviceTitle }: GenericServiceContentProps) => {
  return (
    <>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">How We Can Help</h2>
        <p className="text-gray-700 mb-4">
          Our {serviceTitle.toLowerCase()} service is designed to help businesses maximize their data potential
          while minimizing complexity and technical debt. We work with you to understand your unique challenges
          and goals, then develop a customized solution that delivers measurable results.
        </p>
        <p className="text-gray-700 mb-4">
          By leveraging our expertise in HubSpot and data operations, we ensure your systems work seamlessly together,
          providing the insights and efficiency you need to drive business growth.
        </p>
      </div>
      
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Approach</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-dataops-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">1. Assess</h3>
            <p className="text-gray-700">We start by thoroughly assessing your current setup, identifying pain points and opportunities.</p>
          </div>
          <div className="bg-dataops-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">2. Design</h3>
            <p className="text-gray-700">Next, we design a customized solution that addresses your specific needs and goals.</p>
          </div>
          <div className="bg-dataops-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">3. Implement</h3>
            <p className="text-gray-700">Our team carefully implements the solution with minimal disruption to your operations.</p>
          </div>
          <div className="bg-dataops-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">4. Optimize</h3>
            <p className="text-gray-700">We continuously monitor and optimize the solution to ensure it delivers maximum value.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenericServiceContent;
