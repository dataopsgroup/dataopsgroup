
import React from 'react';
import AutoOptimizedImage from '@/components/ui/auto-optimized-image';

const benefits = [
  { imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', imageAlt: "Multiple charts and graphs on a desk, illustrating data analysis and reporting.", title: "Standardize Reporting", description: "Achieve consistent, reliable reporting across all portfolio companies with automated dashboards." },
  { imageUrl: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80', imageAlt: "Confident professional man smiling, representing confident decision-making", title: "Confident Decision-Making", description: "Make faster, data-backed investment decisions with real-time actionable insights." },
  { imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', imageAlt: "Business growth chart representing new opportunities", title: "Identify Opportunities", description: "Uncover and capitalize on new revenue opportunities across your holdings with predictive analytics." },
  { imageUrl: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?w=800&q=80', imageAlt: "A marketing dashboard with various charts and numbers indicating ROI", title: "Measure Marketing ROI", description: "Gain investor-grade accuracy in measuring marketing performance and attribution across channels." },
  { imageUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80', imageAlt: "Server room with racks, representing scalable analytics systems", title: "Scale Analytics Systems", description: "Deploy proven, scalable analytics infrastructure across multiple investments efficiently." },
  { imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80', imageAlt: "Overhead shot of a creative team working with large papers and diagrams spread across a table.", title: "Optimize Efficiency", description: "Enhance operational efficiency and performance monitoring across the entire portfolio." },
  { imageUrl: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80', imageAlt: "Business chart showing an upward trend for market prediction", title: "Predict Market Trends", description: "Utilize advanced predictive analytics for strategic planning and market forecasting." },
  { imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80', imageAlt: "People in a meeting, representing due diligence", title: "Enhance Due Diligence", description: "Strengthen due diligence processes with comprehensive, data-driven analysis and reporting." },
  { imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80', imageAlt: "Professional presenting a chart in a meeting", title: "Executive Dashboards", description: "Create compelling, board-level reports and executive dashboards for stakeholder communication." },
];

const AnalyticsBIDashboardGrid = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dataops-950 mb-4">
            Transform Your Data Into Strategic Advantage
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our analytics solutions deliver measurable outcomes that enhance portfolio value and drive investment success across all your holdings.
          </p>
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Proven results across 100+ implementations
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
               <AutoOptimizedImage
                  src={benefit.imageUrl}
                  alt={benefit.imageAlt}
                  className="w-full h-48 object-cover"
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
               />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dataops-950 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to see these benefits in action for your portfolio companies?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/data-operations-assessment" 
              className="inline-flex items-center justify-center bg-dataops-600 hover:bg-dataops-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Free Assessment
            </a>
            <a 
              href="/case-studies" 
              className="inline-flex items-center justify-center border border-dataops-600 text-dataops-600 hover:bg-dataops-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsBIDashboardGrid;
