
import React from 'react';
import { Link } from 'react-router-dom';

const AnalyticsBIContent = () => {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-brand-navy font-rubik">Unlock the Power of Your Portfolio Data</h2>
        <p className="text-lg text-gray-700 font-roboto leading-relaxed">
          In today's data-driven investment environment, the ability to analyze and interpret your portfolio data is critical for 
          maintaining a competitive edge. Our Analytics and Business Intelligence services help PE firms transform raw data 
          into valuable insights that drive strategic decisions and portfolio growth.
        </p>
        <p className="text-lg text-gray-700 font-roboto leading-relaxed">
          At DataOps Group, we combine technical expertise with PE industry knowledge to deliver analytics solutions that 
          address your specific investment challenges and opportunities. Whether you're improving operational efficiency across holdings, 
          enhancing due diligence processes, or identifying new revenue streams, our analytics services provide the insights 
          you need to maximize portfolio value.
        </p>
        <div className="bg-dataops-50 border border-dataops-200 rounded-lg p-6">
          <p className="text-dataops-700 mb-4">
            <strong>Start with a Data Assessment:</strong> Before implementing analytics solutions, we recommend taking our{' '}
            <Link to="/data-operation-assessment" className="text-dataops-600 hover:text-dataops-800 font-medium underline">
              free DataOps maturity assessment
            </Link>{' '}
            to identify data quality gaps and optimization opportunities.
          </p>
        </div>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-brand-navy font-rubik">Our Analytics & BI Services</h2>
        
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-brand-saffron hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-brand-navy font-rubik">Portfolio Performance Dashboards</h3>
            <p className="text-gray-700 font-roboto leading-relaxed mb-4">
              Create executive-level dashboards that provide real-time visibility into portfolio company performance and key investment metrics:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 font-roboto">
              <li>Custom KPI dashboards tailored to your investment thesis and metrics</li>
              <li>Real-time portfolio performance monitoring and reporting</li>
              <li>Executive dashboards for board presentations and investor updates</li>
              <li>Operational dashboards for portfolio company management</li>
            </ul>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Success Story:</strong> See how we helped an{' '}
                <Link to="/insights/audio-visual-equipment-wholesaler" className="text-dataops-600 hover:text-dataops-800 underline">
                  audio visual equipment wholesaler
                </Link>{' '}
                achieve measurable growth through data-driven insights.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-brand-saffron hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-brand-navy font-rubik">Investment Intelligence & Modeling</h3>
            <p className="text-gray-700 font-roboto leading-relaxed mb-4">
              Leverage sophisticated analytical techniques to uncover investment opportunities, predict portfolio outcomes, and 
              optimize value creation strategies:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 font-roboto">
              <li>Predictive analytics to forecast portfolio company growth and market trends</li>
              <li>Market segmentation analysis to identify expansion opportunities</li>
              <li>Investment performance modeling and scenario analysis</li>
              <li>Optimization algorithms to maximize portfolio value creation</li>
            </ul>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Calculate potential returns with our{' '}
                <Link to="/revops-roi-calculator" className="text-dataops-600 hover:text-dataops-800 underline">
                  RevOps ROI calculator
                </Link>{' '}
                to understand the financial impact of data operations improvements.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-brand-saffron hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-brand-navy font-rubik">Due Diligence & Risk Analytics</h3>
            <p className="text-gray-700 font-roboto leading-relaxed mb-4">
              Enhance your investment process with comprehensive data analysis that supports better investment decisions 
              and risk management:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 font-roboto">
              <li>Data-driven due diligence and target company assessment</li>
              <li>Market opportunity sizing and competitive analysis</li>
              <li>Risk assessment modeling and stress testing</li>
              <li>Portfolio diversification and correlation analysis</li>
            </ul>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Learn about common data quality issues that impact due diligence in our guide on{' '}
                <Link to="/insights/data-truth-gap" className="text-dataops-600 hover:text-dataops-800 underline">
                  bridging the data truth gap
                </Link>.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-brand-saffron hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-brand-navy font-rubik">HubSpot Analytics Integration</h3>
            <p className="text-gray-700 font-roboto leading-relaxed mb-4">
              Maximize the value of your portfolio companies' HubSpot data with specialized analytics that connect marketing 
              activities to business outcomes and investment returns:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 font-roboto">
              <li>HubSpot data extraction and transformation for portfolio-level analysis</li>
              <li>Cross-portfolio marketing performance benchmarking</li>
              <li>Customer acquisition cost and lifetime value modeling</li>
              <li>Integration of HubSpot data with financial and operational systems</li>
            </ul>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Need help selecting the right HubSpot expert for your portfolio companies? Read our comprehensive{' '}
                <Link to="/guides/hubspot-expert" className="text-dataops-600 hover:text-dataops-800 underline">
                  HubSpot expert hiring guide
                </Link>{' '}
                for detailed selection criteria and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-brand-navy font-rubik">Why PE Firms Choose DataOps Group</h2>
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border border-gray-200">
          <p className="text-lg text-gray-700 font-roboto leading-relaxed mb-4">
            Our team brings together business domain expertise and technical analytics knowledge specifically tailored for private equity. 
            We understand the unique challenges of managing portfolio companies and the need for scalable, standardized analytics 
            across multiple investments.
          </p>
          <p className="text-lg text-gray-700 font-roboto leading-relaxed mb-4">
            We focus on creating analytics capabilities that scale across your portfolio while providing the flexibility to adapt 
            to each company's unique needs. Our approach ensures that your investment teams have the insights and tools to drive 
            value creation and make data-driven decisions that enhance portfolio returns.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Related Resources:</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/approach" className="text-dataops-600 hover:text-dataops-800 underline">
                    → Our proven methodology and approach
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" className="text-dataops-600 hover:text-dataops-800 underline">
                    → View detailed client success stories
                  </Link>
                </li>
                <li>
                  <Link to="/insights/customer-segmentation-mistake" className="text-dataops-600 hover:text-dataops-800 underline">
                    → Common analytics pitfalls to avoid
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Get Started:</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/contact" className="text-dataops-600 hover:text-dataops-800 underline">
                    → Schedule a consultation
                  </Link>
                </li>
                <li>
                  <Link to="/book" className="text-dataops-600 hover:text-dataops-800 underline">
                    → Book a discovery call
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-dataops-600 hover:text-dataops-800 underline">
                    → Explore all our services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsBIContent;
