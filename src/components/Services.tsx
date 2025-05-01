
import React from 'react';
import { Database, LineChart, Shield, Settings, Laptop, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const services = [
  {
    id: "data-architecture",
    icon: <Database className="h-10 w-10" />,
    title: 'Data Architecture',
    description: 'Design robust, scalable data architectures that support your business objectives.'
  },
  {
    id: "analytics-bi",
    icon: <LineChart className="h-10 w-10" />,
    title: 'Analytics & BI',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.'
  },
  {
    id: "data-governance",
    icon: <Shield className="h-10 w-10" />,
    title: 'Data Governance',
    description: 'Implement frameworks to ensure data quality, compliance, and security.'
  },
  {
    id: "dataops-implementation",
    icon: <Settings className="h-10 w-10" />,
    title: 'DataOps Implementation',
    description: 'Streamline your data operations with automated workflows and processes.'
  },
  {
    id: "technology-consulting",
    icon: <Laptop className="h-10 w-10" />,
    title: 'Technology Consulting',
    description: 'Get expert guidance on data technology selection and implementation.'
  },
  {
    id: "team-training",
    icon: <Users className="h-10 w-10" />,
    title: 'Team Training',
    description: 'Upskill your team with the latest data management practices and tools.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive data solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={`/services/${service.id}`} key={index} className="block transition-transform hover:scale-105">
              <Card className="border border-gray-100 hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="text-dataops-600 mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
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
