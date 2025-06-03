
import React from 'react';
import { LineChart, Settings, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Only include services with corresponding routes in App.tsx
export const services = [
  {
    id: "analytics-bi",
    icon: <LineChart className="h-10 w-10 text-white" />,
    title: 'Analytics & BI',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    gradient: 'from-slate-800 to-slate-900' // Dark navy - professional
  },
  {
    id: "dataops-implementation",
    icon: <Settings className="h-10 w-10 text-white" />,
    title: 'DataOps Implementation',
    description: 'Streamline your data operations with automated workflows and processes.',
    gradient: 'from-teal-600 to-teal-700' // Deep teal - professional
  },
  {
    id: "team-training",
    icon: <Users className="h-10 w-10 text-white" />,
    title: 'HubSpot Training & Implementation',
    description: 'Expert training and implementation to maximize your HubSpot investment.',
    gradient: 'from-amber-500 to-amber-600' // Keep brand saffron color
  },
  {
    id: "marketing-operations-revops",
    icon: <TrendingUp className="h-10 w-10 text-white" />,
    title: 'Marketing Operations & RevOps',
    description: 'Optimize your marketing and revenue operations for improved performance and ROI.',
    gradient: 'from-gray-600 to-gray-700' // Charcoal gray - sophisticated
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dataops-600">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive data solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link to={`/services/${service.id}`} key={index} className="block transition-transform hover:scale-105">
              <Card className={`border-0 overflow-hidden h-full bg-gradient-to-br ${service.gradient} text-white hover:shadow-xl transition-shadow`}>
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="service-card-title">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/90">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
