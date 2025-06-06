
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BarChart3, Cog, Users, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description: "Transform raw data into actionable insights with custom dashboards and reporting systems.",
    href: "/services/analytics-bi",
    features: ["Custom Dashboards", "Performance Tracking", "ROI Analysis"]
  },
  {
    icon: Cog,
    title: "DataOps Implementation",
    description: "End-to-end implementation of data operations processes and systems.",
    href: "/services/dataops-implementation", 
    features: ["System Integration", "Process Automation", "Quality Assurance"]
  },
  {
    icon: Users,
    title: "Team Training",
    description: "Comprehensive training programs to ensure your team maximizes system adoption.",
    href: "/services/team-training",
    features: ["HubSpot Training", "Best Practices", "Ongoing Support"]
  },
  {
    icon: TrendingUp,
    title: "Marketing Operations & RevOps",
    description: "Align your marketing, sales, and operations teams for maximum revenue growth.",
    href: "/services/marketing-operations-revops",
    features: ["Lead Management", "Pipeline Optimization", "Revenue Attribution"]
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dataops-900">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            We offer comprehensive data operations solutions designed to transform your business processes and drive measurable results.
          </p>
          
          {/* Assessment CTA */}
          <div className="bg-gradient-to-r from-dataops-50 to-blue-50 border border-dataops-200 rounded-lg p-6 mb-12 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-dataops-800 mb-2">Not Sure Which Service You Need?</h3>
            <p className="text-gray-700 mb-4">
              Take our free assessment to get personalized service recommendations based on your current operations and goals.
            </p>
            <a href="/data-operations-assessment" className="inline-flex items-center bg-dataops-600 hover:bg-dataops-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Get Service Recommendations
            </a>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-dataops-100 p-3 rounded-lg">
                    <IconComponent className="h-6 w-6 text-dataops-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-dataops-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={service.href}
                      className="inline-flex items-center text-dataops-600 hover:text-dataops-700 font-medium"
                    >
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
