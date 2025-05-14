
import React from 'react';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const SitemapHelp: React.FC = () => {
  const { isMobile } = useIsMobile();
  
  return (
    <section className="py-16 px-[5%] bg-gray-50">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 mobile-text">Need Help Finding Something?</h2>
        <p className="text-lg text-gray-700 mb-8 mobile-text">
          If you can't find what you're looking for or have questions about our HubSpot consulting services, our team is ready to assist you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-dataops-600 hover:bg-dataops-700 text-white px-6 py-4 rounded-md transition-colors min-w-[200px] text-base mobile-link"
            aria-label="Contact Our Team"
          >
            Contact Our Team
            <MoveRight size={isMobile ? 24 : 20} className="ml-2" />
          </Link>
          <Link 
            to="/faqs" 
            className="inline-flex items-center justify-center gap-2 border border-dataops-600 text-dataops-600 hover:bg-dataops-50 px-6 py-4 rounded-md transition-colors min-w-[200px] text-base mobile-link"
            aria-label="View Frequently Asked Questions"
          >
            View FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SitemapHelp;
