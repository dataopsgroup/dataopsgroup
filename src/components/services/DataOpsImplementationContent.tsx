
import React from 'react';

const DataOpsImplementationContent = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">How We Can Help</h2>
        <p className="text-gray-700 mb-4">
          Our HubSpot Integration & Customization services help businesses maximize their HubSpot investment
          by creating seamless connections with other business systems and customizing HubSpot to match your
          unique processes. We specialize in creating unified data flows that eliminate silos and manual work.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you need to integrate HubSpot with your ERP, e-commerce platform, financial system, 
          or custom applications, our team has the technical expertise to create robust, reliable integrations
          that stand the test of time.
        </p>
      </div>
      
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Services Include</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-dataops-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">API Integrations</h3>
            <p className="text-gray-700">Custom development to connect HubSpot with any system that offers API access, enabling seamless data flow.</p>
          </div>
          <div className="bg-dataops-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Custom Objects</h3>
            <p className="text-gray-700">Design and implementation of custom objects to extend HubSpot's capabilities for your specific business needs.</p>
          </div>
          <div className="bg-dataops-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Data Migration</h3>
            <p className="text-gray-700">Clean, transform, and migrate your data into HubSpot from legacy systems while maintaining data integrity.</p>
          </div>
          <div className="bg-dataops-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Workflow Automation</h3>
            <p className="text-gray-700">Build custom workflows and automations that save time, reduce errors, and ensure consistent processes.</p>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Approach</h2>
        <p className="text-gray-700 mb-4">
          We follow a systematic approach to ensure your HubSpot integrations are reliable, maintainable, and 
          deliver measurable business value:
        </p>
        
        <ol className="list-decimal pl-5 space-y-3 text-gray-700 my-4">
          <li>
            <span className="font-medium">Discovery:</span> We deeply understand your business processes, data requirements, and integration goals.
          </li>
          <li>
            <span className="font-medium">Solution Design:</span> We create a detailed technical blueprint for your integrations, considering data models, mappings, and workflows.
          </li>
          <li>
            <span className="font-medium">Development:</span> Our experienced developers build robust integrations using HubSpot's APIs and the appropriate integration methods.
          </li>
          <li>
            <span className="font-medium">Testing:</span> We rigorously test all integrations to ensure data flows correctly and error handling is in place.
          </li>
          <li>
            <span className="font-medium">Deployment:</span> We carefully implement the integrations in your production environment with minimal disruption.
          </li>
          <li>
            <span className="font-medium">Training & Support:</span> We provide documentation, training, and ongoing support to ensure your team can manage the integrations.
          </li>
        </ol>
      </div>
    </>
  );
};

export default DataOpsImplementationContent;
