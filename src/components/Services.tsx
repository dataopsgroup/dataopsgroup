
import React from 'react';
import { Database, BarChart3, Users, TrendingUp, Target, Zap } from 'lucide-react';

export const services = [
  {
    id: 'analytics-bi',
    icon: <BarChart3 className="h-10 w-10" />,
    title: 'Analytics & BI',
    description: 'Transform data into actionable insights with comprehensive analytics and business intelligence solutions.',
    href: '/services/analytics-bi',
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    id: 'dataops-implementation',
    icon: <Database className="h-10 w-10" />,
    title: 'DataOps Implementation',
    description: 'Streamline your data operations with automated processes and improved data quality.',
    href: '/services/dataops-implementation',
    gradient: 'from-green-500 to-green-700'
  },
  {
    id: 'team-training',
    icon: <Users className="h-10 w-10" />,
    title: 'HubSpot Training & Implementation',
    description: 'Comprehensive HubSpot setup and team training to maximize your investment.',
    href: '/services/team-training',
    gradient: 'from-purple-500 to-purple-700'
  },
  {
    id: 'marketing-operations-revops',
    icon: <TrendingUp className="h-10 w-10" />,
    title: 'Marketing Operations & RevOps',
    description: 'Optimize your revenue operations with strategic marketing automation and process improvement. Calculate your potential ROI with our RevOps calculator.',
    href: '/services/marketing-operations-revops',
    gradient: 'from-orange-500 to-orange-700'
  },
  {
    id: 'pe-value-creation-program',
    icon: <Target className="h-10 w-10" />,
    title: 'PE Value Creation Program',
    description: 'Specialized program for private equity firms to optimize portfolio company operations.',
    href: '/pe-value-creation-program',
    gradient: 'from-red-500 to-red-700'
  },
  {
    id: 'custom-solutions',
    icon: <Zap className="h-10 w-10" />,
    title: 'Custom Solutions',
    description: 'Tailored data operations solutions designed specifically for your unique business needs.',
    href: '/contact',
    gradient: 'from-indigo-500 to-indigo-700'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Comprehensive HubSpot implementation and data operations solutions designed to transform your business. 
            Learn more about our <a href="/approach" className="text-dataops-600 hover:text-dataops-700 underline font-medium">proven methodology</a> and view our <a href="/case-studies" className="text-dataops-600 hover:text-dataops-700 underline font-medium">success stories</a>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-dataops-600 mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">
                <a href={service.href} className="text-gray-900 hover:text-dataops-600 transition-colors">
                  {service.title}
                </a>
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <a 
                href={service.href} 
                className="text-dataops-600 hover:text-dataops-700 font-medium inline-flex items-center transition-colors"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Want to see all our services? Visit our <a href="/services" className="text-dataops-600 hover:text-dataops-700 underline font-medium">complete services page</a> or <a href="/contact" className="text-dataops-600 hover:text-dataops-700 underline font-medium">contact us</a> for a custom consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
