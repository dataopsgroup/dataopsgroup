import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
interface TeamTrainingServiceHeroProps {
  title: string;
  description: string;
  tagline: string;
  ctaText: string;
  backgroundImage?: string;
}
const TeamTrainingServiceHero = ({
  title,
  description,
  tagline,
  ctaText,
  backgroundImage
}: TeamTrainingServiceHeroProps) => {
  const {
    isMobile
  } = useIsMobile();

  // Simplified background logic - use image on desktop, solid color on mobile
  const shouldShowBackgroundImage = !isMobile && backgroundImage;
  return <section className={`pt-32 pb-16 px-4 relative min-h-[600px] ${isMobile ? 'bg-gray-700' : 'bg-gradient-to-br from-white to-gray-50'}`} style={shouldShowBackgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transform: 'scaleX(-1)'
  } : {}}>
      {/* Background overlay - 50% white overlay when background image is present */}
      {shouldShowBackgroundImage && <div className="absolute inset-0 z-0" style={{
      transform: 'scaleX(-1)',
      backgroundImage: 'url(/lovable-uploads/b4d5f9df-edfe-4dbd-a912-9a917c3b2535.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: 0.5
    }} />}
      
      <div className="container mx-auto relative z-10" style={shouldShowBackgroundImage ? {
      transform: 'scaleX(-1)'
    } : {}}>
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Wider content area specifically for Team Training - lg:col-span-3 instead of 2 */}
          <div className="lg:col-span-3 space-y-6 relative p-8 rounded-xl border border-gray-100 bg-white/80 backdrop-blur-sm">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-saffron/10 text-brand-navy text-sm font-medium mb-2">
              <span className="w-2 h-2 bg-brand-saffron rounded-full mr-2"></span>
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-brand-navy font-rubik">
              {title}
            </h1>
            <p className="text-lg font-medium font-roboto tracking-wide text-zinc-600">
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
          
          {/* Empty right column for balance - keeps the grid structure */}
          <div className="lg:col-span-2">
            {/* Empty space to maintain layout */}
          </div>
        </div>
      </div>
    </section>;
};
export default TeamTrainingServiceHero;