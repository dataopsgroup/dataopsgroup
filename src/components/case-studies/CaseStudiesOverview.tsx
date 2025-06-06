
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    metric: "47%",
    description: "Increase in qualified leads",
    company: "Audio Visual Equipment Wholesaler",
    timeline: "90 days"
  },
  {
    icon: Users,
    metric: "28%",
    description: "Reduction in sales cycle time",
    company: "Multi-National Insurance",
    timeline: "6 months"
  },
  {
    icon: DollarSign,
    metric: "35%",
    description: "Improvement in close rates",
    company: "SaaS Healthcare",
    timeline: "4 months"
  }
];

const CaseStudiesOverview = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dataops-900">
            Real Results from Real Companies
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            See how we've helped companies across various industries transform their operations and achieve measurable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="bg-dataops-100 p-3 rounded-lg inline-flex mb-4">
                  <IconComponent className="h-6 w-6 text-dataops-600" />
                </div>
                <div className="text-3xl font-bold text-dataops-600 mb-2">{highlight.metric}</div>
                <div className="font-medium text-gray-900 mb-2">{highlight.description}</div>
                <div className="text-sm text-gray-600 mb-1">{highlight.company}</div>
                <div className="text-xs text-gray-500">in {highlight.timeline}</div>
              </div>
            );
          })}
        </div>

        {/* Assessment CTA */}
        <div className="bg-gradient-to-br from-dataops-600 to-dataops-700 rounded-lg p-8 text-white text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Could Your Company Achieve Similar Results?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            These results didn't happen overnight. They started with understanding exactly where each company's operations stood and creating a targeted improvement plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/data-operations-assessment" className="bg-white text-dataops-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              Assess Your Operations
            </a>
            <a href="/contact" className="border border-white text-white hover:bg-white hover:text-dataops-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Discuss Your Goals
            </a>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/insights" 
            className="inline-flex items-center text-dataops-600 hover:text-dataops-700 font-medium text-lg"
          >
            Read Detailed Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesOverview;
