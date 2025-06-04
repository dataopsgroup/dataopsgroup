
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface ServiceHeroProps {
  title: string;
  description: string;
  tagline: string;
  ctaText: string;
  isHubSpotTraining: boolean;
  serviceIcon: React.ReactNode;
  backgroundImage?: string;
}

const ServiceHero = ({ title, description, tagline, ctaText, isHubSpotTraining, serviceIcon, backgroundImage }: ServiceHeroProps) => {
  const { isMobile } = useIsMobile();
  
  // Use charcoal gray background on mobile for performance, image on desktop
  // Default to showing image unless explicitly mobile (handle undefined state)
  const shouldShowImage = isMobile !== true && backgroundImage;
  const backgroundStyle = shouldShowImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <section 
      className={`pt-32 pb-16 px-4 relative ${isMobile === true ? 'bg-gray-700' : 'bg-gradient-to-br from-white to-gray-50'}`}
      style={backgroundStyle}
    >
      {/* Background overlay for 75% opacity - only show on desktop with image */}
      {shouldShowImage && (
        <div className="absolute inset-0 bg-white/75"></div>
      )}
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div 
            className="lg:col-span-2 space-y-6 relative p-8 rounded-xl border border-gray-100 bg-white/80 backdrop-blur-sm"
          >
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
            {/* Icon container removed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
