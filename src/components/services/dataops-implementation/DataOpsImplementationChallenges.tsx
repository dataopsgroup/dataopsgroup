
import React from 'react';
import { Link } from 'react-router-dom';

const DataOpsImplementationChallenges = () => {
  return (
    <section className="mb-16">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 font-rubik">Common DataOps Implementation Challenges We Solve</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-red-400 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">Inconsistent Processes Across Portfolio</h3>
            <p className="text-gray-700 font-roboto leading-relaxed mb-3">
              Portfolio companies often operate with different systems, processes, and metrics, making it impossible to 
              achieve consistent performance or meaningful comparisons across the portfolio.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Our Solution:</strong> We implement standardized processes and systems while maintaining flexibility for 
              unique business needs, similar to how we solved 
              <Link to="/insights/marketing-operations-isnt-it" className="text-dataops-600 hover:text-dataops-800 font-medium underline">
                operational complexity challenges
              </Link> for our portfolio clients.
            </p>
          </div>
          
          <div className="border-l-4 border-yellow-400 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">Failed Technology Implementations</h3>
            <p className="text-gray-700 font-roboto leading-relaxed mb-3">
              Many portfolio companies struggle with failed or incomplete technology implementations, leading to wasted 
              investment and operational inefficiencies that persist across the portfolio.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Our Solution:</strong> Our proven implementation methodology prevents common failure points, 
              addressing issues like those detailed in our analysis of 
              <Link to="/insights/why-64-percent-pe-portfolio-companies-fail-hubspot-implementation" className="text-dataops-600 hover:text-dataops-800 font-medium underline">
                why 64% of PE portfolio companies fail HubSpot implementations
              </Link>.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-400 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">Limited Visibility Into Portfolio Performance</h3>
            <p className="text-gray-700 font-roboto leading-relaxed mb-3">
              Without standardized DataOps across the portfolio, investment teams lack the visibility needed to identify 
              opportunities, risks, and best practices that could be scaled across companies.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Our Solution:</strong> We establish unified reporting and analytics frameworks that provide complete 
              portfolio visibility while maintaining company-specific insights for operational excellence.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-400 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">Scaling Operational Excellence</h3>
            <p className="text-gray-700 font-roboto leading-relaxed mb-3">
              As portfolios grow, maintaining operational excellence becomes increasingly challenging without standardized 
              processes, systems, and performance metrics across all companies.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Our Solution:</strong> Our DataOps implementation creates scalable frameworks that grow with your 
              portfolio, ensuring consistent operational excellence regardless of company size or industry.
            </p>
          </div>
        </div>
        
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready to Solve Your DataOps Challenges?</h3>
          <p className="text-gray-700 mb-4">
            Our <Link to="/data-operation-assessment" className="text-dataops-600 hover:text-dataops-800 font-medium underline">
            free DataOps assessment</Link> identifies the specific implementation challenges holding your portfolio back and provides 
            a clear roadmap for achieving operational excellence across all companies.
          </p>
          <Link 
            to="/data-operation-assessment"
            className="inline-flex items-center px-4 py-2 bg-dataops-600 text-white rounded-lg hover:bg-dataops-700 transition-colors"
          >
            Start Your Free Assessment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DataOpsImplementationChallenges;
