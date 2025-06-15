
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const BookCTA = () => {
  const { isMobile } = useIsMobile();

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-dataops-600 text-white">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Join 50+ companies that have already transformed their HubSpot implementations into profit drivers. 
            Get your free assessment and discover exactly what's holding back your growth metrics.
          </p>
          <p className="text-base mb-8 text-blue-100">
            Explore our <a href="/services" className="text-yellow-300 hover:text-white underline font-medium">complete service offerings</a>, 
            read our <a href="/case-studies" className="text-yellow-300 hover:text-white underline font-medium">client success stories</a>, 
            or learn more <a href="/about" className="text-yellow-300 hover:text-white underline font-medium">about our team</a>.
          </p>
          
          <div className="flex justify-center">
            <Link to="/data-operations-assessment">
              <Button 
                className="font-semibold px-8 py-3 text-lg text-dataops-950" 
                style={{ backgroundColor: '#FBB03B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E09A33'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FBB03B'}
              >
                Get Your Free Assessment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCTA;
