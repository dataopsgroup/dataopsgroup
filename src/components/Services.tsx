
import React from 'react';
import { Database, LineChart, Settings, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Only include services with corresponding routes in App.tsx
export const services = [
  {
    id: "analytics-bi",
    icon: <LineChart className="h-10 w-10 text-white" />,
    title: 'Analytics & BI',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    gradient: 'from-green-500 to-teal-600'
  },
  {
    id: "dataops-implementation",
    icon: <Settings className="h-10 w-10 text-white" />,
    title: 'DataOps Implementation',
    description: 'Streamline your data operations with automated workflows and processes.',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: "marketing-operations-revops",
    icon: <TrendingUp className="h-10 w-10 text-white" />,
    title: 'Marketing Operations & RevOps',
    description: 'Optimize your marketing and revenue operations for improved performance and ROI.',
    gradient: 'from-emerald-500 to-green-700'
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={`/services/${service.id}`} key={index} className="block transition-transform hover:scale-105">
              <Card className={`border-0 overflow-hidden h-full bg-gradient-to-br ${service.gradient} text-white hover:shadow-xl transition-shadow`}>
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold text-white">{service.title}</CardTitle>
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
