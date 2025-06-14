
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BarChart3, Database, Zap } from 'lucide-react';

interface RelatedService {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  isHighlighted?: boolean;
}

interface RelatedServicesProps {
  currentService?: string;
  className?: string;
  title?: string;
  description?: string;
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ 
  currentService = '',
  className = '',
  title = "Related Services",
  description = "Explore our comprehensive suite of HubSpot and data operations services designed to accelerate your business growth."
}) => {
  const allServices: RelatedService[] = [
    {
      title: 'HubSpot Training & Implementation',
      description: 'Expert training that maximizes platform ROI and accelerates team adoption',
      href: '/services/team-training',
      icon: Users,
      isHighlighted: true
    },
    {
      title: 'Marketing Operations & RevOps',
      description: 'Streamline revenue operations and optimize marketing performance',
      href: '/services/marketing-operations-revops',
      icon: Zap
    },
    {
      title: 'DataOps Implementation',
      description: 'End-to-end data operations setup and optimization for HubSpot',
      href: '/services/dataops-implementation',
      icon: Database
    },
    {
      title: 'Analytics & Business Intelligence',
      description: 'Transform data into actionable insights and strategic advantages',
      href: '/services/analytics-bi',
      icon: BarChart3
    }
  ];

  // Filter out current service
  const relatedServices = allServices.filter(service => 
    !service.href.includes(currentService)
  );

  // Show max 3 related services
  const displayServices = relatedServices.slice(0, 3);

  if (displayServices.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayServices.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Link
                key={index}
                to={service.href}
                className="group bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-dataops-300 transition-all duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${
                    service.isHighlighted 
                      ? 'bg-dataops-100 text-dataops-600' 
                      : 'bg-gray-100 text-gray-600'
                  } group-hover:bg-dataops-100 group-hover:text-dataops-600 transition-colors`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-dataops-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="flex items-center text-dataops-600 font-medium text-sm group-hover:text-dataops-700">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-dataops-600 text-white font-semibold rounded-lg hover:bg-dataops-700 transition-colors"
          >
            View All Services
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
