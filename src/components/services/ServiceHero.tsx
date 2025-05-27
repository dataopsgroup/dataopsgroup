
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/optimized-image';

interface ServiceHeroProps {
  title: string;
  description: string;
  tagline: string;
  ctaText: string;
  isHubSpotTraining: boolean;
  serviceIcon: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

const ServiceHero = ({ title, description, tagline, ctaText, isHubSpotTraining, serviceIcon, imageSrc, imageAlt }: ServiceHeroProps) => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-saffron/10 text-brand-navy text-sm font-medium mb-2">
              <span className="w-2 h-2 bg-brand-saffron rounded-full mr-2"></span>
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-brand-navy font-rubik">
              {title}
            </h1>
            <p className="text-lg font-medium text-brand-saffron font-roboto tracking-wide">
              {tagline}
            </p>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl font-roboto">
              {description}
            </p>
            <div className="pt-6">
              <Button className="bg-brand-saffron hover:bg-brand-saffron/90 text-white px-8 py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link to="/contact">{ctaText}</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-3 flex justify-end">
            {isHubSpotTraining ? (
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-xl h-96 border border-gray-100">
                <OptimizedImage 
                  src="/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.png"
                  alt="HubSpot training session with a facilitator and attendees"
                  width={600}
                  height={375}
                  className="w-full h-full object-cover"
                  objectFit="cover"
                />
              </div>
            ) : imageSrc ? (
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-xl h-96 border border-gray-100">
                <OptimizedImage 
                  src={imageSrc}
                  alt={imageAlt || "Service visualization"}
                  width={600}
                  height={375}
                  className="w-full h-full object-cover"
                  objectFit="cover"
                />
              </div>
            ) : (
              <div className="relative bg-white rounded-2xl shadow-2xl p-12 z-10 w-full max-w-xl border border-gray-100">
                <div className="flex justify-center items-center h-72 w-full rounded-lg bg-gray-50">
                  <div className="text-brand-saffron" aria-hidden="true">
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
