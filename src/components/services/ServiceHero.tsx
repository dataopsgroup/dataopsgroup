
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/optimized-image';

interface ServiceHeroProps {
  title: string;
  description: string;
  isHubSpotTraining: boolean;
  serviceIcon: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

const ServiceHero = ({ title, description, isHubSpotTraining, serviceIcon, imageSrc, imageAlt }: ServiceHeroProps) => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-dataops-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dataops-100 text-dataops-800 text-sm font-medium mb-2">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              {description}
            </p>
            <div className="pt-6">
              <Button className="bg-dataops-600 hover:bg-dataops-700 px-6 py-6 text-base" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex justify-center">
            {isHubSpotTraining ? (
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
                <OptimizedImage 
                  src="/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.png"
                  alt="HubSpot training session with a facilitator and attendees"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover object-center"
                  aspectRatio={16/10}
                />
              </div>
            ) : imageSrc ? (
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
                <OptimizedImage 
                  src={imageSrc}
                  alt={imageAlt || "Service visualization"}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                  aspectRatio={16/10}
                />
              </div>
            ) : (
              <div className="relative bg-white rounded-2xl shadow-xl p-8 z-10 w-full max-w-md">
                <div className="flex justify-center items-center h-48 w-full rounded-lg bg-dataops-50">
                  <div className="text-dataops-600" aria-hidden="true">
                    {serviceIcon}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
