
import React from 'react';
import { services } from '@/components/Services';
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Our Data Operations Services</h2>
      <p className="text-lg text-gray-700">
        We offer a range of specialized services designed to help organizations effectively 
        manage, integrate, analyze, and utilize their data. Each service is tailored to 
        address specific business challenges and deliver measurable results.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {services.map((service, index) => (
          <div key={index} className={`overflow-hidden rounded-lg shadow-md bg-gradient-to-br ${service.gradient} text-white p-6`}>
            <div className="mb-4">
              {service.icon}
            </div>
            <h2 className="text-xl font-semibold mb-4 text-white">{service.title}</h2>
            <p className="text-white/90 mb-4">
              {service.description}
            </p>
            <Link to={`/services/${service.id}`} className="flex items-center text-white hover:text-white/80 group">
              Learn more
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
