import React from 'react';
import { Link } from 'react-router-dom';
const DataOpsImplementationOverview = () => {
  return <section className="mb-16">
      <div className="bg-white rounded-lg shadow-lg p-8 px-[20px]">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-rubik">Scale Your Portfolio with Proven DataOps Implementation</h2>
        
        <div className="prose prose-lg max-w-none font-roboto">
          <p className="text-gray-700 leading-relaxed mb-6">
            Growing portfolio companies need standardized, scalable data operations to achieve consistent performance. Our 
            <Link to="/services" className="text-dataops-600 hover:text-dataops-800 font-medium"> DataOps implementation services</Link> establish 
            the foundation for sustainable growth through automated workflows, integrated systems, and standardized processes across your entire portfolio.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-rubik">What We Implement</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Automated data pipelines for seamless information flow</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Standardized workflows across all portfolio companies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Integrated technology stacks for operational efficiency</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Performance monitoring and continuous optimization</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-rubik">Our Implementation Expertise</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">HubSpot Platform Mastery</h4>
                  <p className="text-gray-600 text-sm">Deep expertise in HubSpot implementation, customization, and optimization for enterprise portfolios.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Process Standardization</h4>
                  <p className="text-gray-600 text-sm">Proven methodologies for creating consistent, scalable operations across diverse business models.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Portfolio Scaling</h4>
                  <p className="text-gray-600 text-sm">Strategic approach to implementing DataOps that grows with your portfolio expansion plans.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 font-medium">
              Ready to standardize your portfolio operations? Our <Link to="/data-operation-assessment" className="text-dataops-600 hover:text-dataops-800 underline">free assessment</Link> identifies 
              immediate opportunities to streamline your DataOps implementation across all portfolio companies.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default DataOpsImplementationOverview;