
import React from 'react';
import {
  BarChart, Target, Search, DollarSign, Repeat, ChevronsRight, PieChart, ShieldCheck, Briefcase
} from 'lucide-react';

const benefits = [
  { icon: <PieChart className="w-8 h-8 text-dataops-500" />, title: "Standardize Reporting", description: "Achieve consistent, reliable reporting across all portfolio companies." },
  { icon: <Target className="w-8 h-8 text-dataops-500" />, title: "Confident Decision-Making", description: "Make faster, data-backed investment decisions with actionable insights." },
  { icon: <Search className="w-8 h-8 text-dataops-500" />, title: "Identify Opportunities", description: "Uncover and capitalize on new business opportunities across your holdings." },
  { icon: <DollarSign className="w-8 h-8 text-dataops-500" />, title: "Measure Marketing ROI", description: "Gain investor-grade accuracy in measuring marketing performance and ROI." },
  { icon: <Repeat className="w-8 h-8 text-dataops-500" />, title: "Scale Analytics Systems", description: "Deploy proven, scalable analytics systems across multiple investments." },
  { icon: <ChevronsRight className="w-8 h-8 text-dataops-500" />, title: "Optimize Efficiency", description: "Enhance operational efficiency and performance across the portfolio." },
  { icon: <BarChart className="w-8 h-8 text-dataops-500" />, title: "Predict Market Trends", description: "Utilize predictive analytics for strategic planning and forecasting." },
  { icon: <ShieldCheck className="w-8 h-8 text-dataops-500" />, title: "Enhance Due Diligence", description: "Strengthen due diligence with comprehensive, data-driven analysis." },
  { icon: <Briefcase className="w-8 h-8 text-dataops-500" />, title: "Executive Dashboards", description: "Create compelling, board-level reports and executive dashboards." },
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
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 border-brand-saffron">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">{benefit.title}</h3>
              <p className="text-gray-600 flex-grow">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsBIDashboardGrid;
