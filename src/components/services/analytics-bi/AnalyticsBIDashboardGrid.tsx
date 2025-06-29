
import React from 'react';
import AutoOptimizedImage from '@/components/ui/auto-optimized-image';

const benefits = [
  { imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', imageAlt: "Multiple charts and graphs on a desk, illustrating data analysis and reporting.", title: "Standardize Reporting", description: "Achieve consistent, reliable reporting across all portfolio companies." },
  { imageUrl: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80', imageAlt: "Confident professional man smiling, representing confident decision-making", title: "Confident Decision-Making", description: "Make faster, data-backed investment decisions with actionable insights." },
  { imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', imageAlt: "Business growth chart representing new opportunities", title: "Identify Opportunities", description: "Uncover and capitalize on new business opportunities across your holdings." },
  { imageUrl: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?w=800&q=80', imageAlt: "A marketing dashboard with various charts and numbers indicating ROI", title: "Measure Marketing ROI", description: "Gain investor-grade accuracy in measuring marketing performance and ROI." },
  { imageUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80', imageAlt: "Server room with racks, representing scalable analytics systems", title: "Scale Analytics Systems", description: "Deploy proven, scalable analytics systems across multiple investments." },
  { imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80', imageAlt: "Overhead shot of a creative team working with large papers and diagrams spread across a table.", title: "Optimize Efficiency", description: "Enhance operational efficiency and performance across the portfolio." },
  { imageUrl: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80', imageAlt: "Business chart showing an upward trend for market prediction", title: "Predict Market Trends", description: "Utilize predictive analytics for strategic planning and forecasting." },
  { imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80', imageAlt: "People in a meeting, representing due diligence", title: "Enhance Due Diligence", description: "Strengthen due diligence with comprehensive, data-driven analysis." },
  { imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80', imageAlt: "Professional presenting a chart in a meeting", title: "Executive Dashboards", description: "Create compelling, board-level reports and executive dashboards." },
];

const AnalyticsBIDashboardGrid = () => {
  return (
    <section className="py-16 sm:py-24 bg-dataops-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Core Benefits of Our Analytics Services</h2>
          <p className="mt-4 text-lg text-gray-700">
            We deliver tangible outcomes that enhance portfolio value and drive investment success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
               <AutoOptimizedImage
                  src={benefit.imageUrl}
                  alt={benefit.imageAlt}
                  className="w-full h-48 object-cover"
                  loading="lazy"
               />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-brand-navy mb-2">{benefit.title}</h3>
                <p className="text-gray-600 flex-grow">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsBIDashboardGrid;
