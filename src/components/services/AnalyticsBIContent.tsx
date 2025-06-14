import React from 'react';
import { Link } from 'react-router-dom';
import AlternatingFeature from './analytics-bi/AlternatingFeature';
import AutoOptimizedImage from '@/components/ui/auto-optimized-image';

const services = [
    {
        visual: <AutoOptimizedImage src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Dashboard with various charts and graphs for portfolio performance" className="w-full h-auto" width={500} height={350} priority />,
        title: "Portfolio Performance Dashboards",
        description: "Create executive-level dashboards that provide real-time visibility into portfolio company performance and key investment metrics.",
        listItems: [
            "Custom KPI dashboards tailored to your investment thesis",
            "Real-time portfolio performance monitoring",
            "Executive dashboards for board presentations",
            "Operational dashboards for portfolio company management",
        ],
        ctaLink: (
          <p className="text-sm text-gray-700">
            <strong>Success Story:</strong> See how we helped an{' '}
            <Link to="/insights/audio-visual-equipment-wholesaler" className="text-dataops-600 hover:text-dataops-800 underline">
              audio visual equipment wholesaler
            </Link>{' '}
            achieve growth through data-driven insights.
          </p>
        )
    },
    {
        visual: <AutoOptimizedImage src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Business analytics dashboard showing investment modeling and data visualization" className="w-full h-auto" width={500} height={350} />,
        title: "Investment Intelligence & Modeling",
        description: "Leverage sophisticated analytical techniques to uncover investment opportunities, predict portfolio outcomes, and optimize value creation strategies.",
        listItems: [
            "Predictive analytics to forecast growth and market trends",
            "Market segmentation analysis for expansion opportunities",
            "Investment performance modeling and scenario analysis",
            "Optimization algorithms to maximize portfolio value",
        ],
        ctaLink: (
            <p className="text-sm text-gray-700">
                Calculate potential returns with our{' '}
                <Link to="/revops-roi-calculator" className="text-dataops-600 hover:text-dataops-800 underline">
                RevOps ROI calculator
                </Link>{' '}
                to understand the financial impact.
            </p>
        )
    },
    {
        visual: <AutoOptimizedImage src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80" alt="Computer screen with lines of code for risk analytics" className="w-full h-auto" width={500} height={350} />,
        title: "Due Diligence & Risk Analytics",
        description: "Enhance your investment process with comprehensive data analysis that supports better investment decisions and risk management.",
        listItems: [
            "Data-driven due diligence and target company assessment",
            "Market opportunity sizing and competitive analysis",
            "Risk assessment modeling and stress testing",
            "Portfolio diversification and correlation analysis",
        ],
        ctaLink: (
            <p className="text-sm text-gray-700">
                Learn about common data quality issues in our guide on{' '}
                <Link to="/insights/data-truth-gap" className="text-dataops-600 hover:text-dataops-800 underline">
                bridging the data truth gap
                </Link>.
            </p>
        )
    },
    {
        visual: <AutoOptimizedImage src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80" alt="Computer screen with code, representing HubSpot analytics integration" className="w-full h-auto" width={500} height={350} />,
        title: "HubSpot Analytics Integration",
        description: "Maximize the value of your portfolio companies' HubSpot data with specialized analytics that connect marketing activities to business outcomes.",
        listItems: [
            "HubSpot data extraction for portfolio-level analysis",
            "Cross-portfolio marketing performance benchmarking",
            "Customer acquisition cost and lifetime value modeling",
            "Integration with financial and operational systems",
        ],
        ctaLink: (
            <p className="text-sm text-gray-700">
                Need help selecting the right HubSpot expert? Read our{' '}
                <Link to="/guides/hubspot-expert" className="text-dataops-600 hover:text-dataops-800 underline">
                HubSpot expert hiring guide
                </Link>.
            </p>
        )
    }
];

const AnalyticsBIContent = () => {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-brand-navy font-rubik">Unlock the Power of Your Portfolio Data</h2>
        <p className="text-lg text-gray-700 font-roboto leading-relaxed">
          In today's data-driven investment environment, the ability to analyze and interpret your portfolio data is critical for 
          maintaining a competitive edge. Our Analytics and Business Intelligence services help PE firms transform raw data 
          into valuable insights that drive strategic decisions and portfolio growth.
        </p>
        <div className="bg-dataops-50 border border-dataops-200 rounded-lg p-6">
          <p className="text-dataops-700">
            <strong>Start with a Data Assessment:</strong> Before implementing analytics solutions, we recommend taking our{' '}
            <Link to="/data-operations-assessment" className="text-dataops-600 hover:text-dataops-800 font-medium underline">
              free DataOps maturity assessment
            </Link>{' '}
            to identify data quality gaps and optimization opportunities.
          </p>
        </div>
      </section>
      
      <section className="space-y-16">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-navy font-rubik">Our Analytics & BI Services</h2>
        </div>
        <div className="space-y-24">
            {services.map((service, index) => (
                <AlternatingFeature 
                    key={service.title}
                    {...service}
                    imageOnRight={index % 2 !== 0}
                />
            ))}
        </div>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-brand-navy font-rubik text-center">Why PE Firms Choose DataOps Group</h2>
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border border-gray-200 max-w-5xl mx-auto">
          <p className="text-lg text-gray-700 font-roboto leading-relaxed mb-4">
            Our team brings together business domain expertise and technical analytics knowledge specifically tailored for private equity. 
            We understand the unique challenges of managing portfolio companies and the need for scalable, standardized analytics 
            across multiple investments.
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
