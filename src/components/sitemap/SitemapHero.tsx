
import React from 'react';
import { Link } from 'react-router-dom';
import { FileCode, LinkIcon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const SitemapHero: React.FC = () => {
  const { isMobile } = useIsMobile();
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  return (
    <section className="bg-gradient-to-br from-white to-dataops-50 py-16 md:py-24">
      <div className="container mx-auto px-[5%]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 mobile-text">
            <span className="gradient-text">Sitemap</span> Navigation
          </h1>
          <p className="text-lg text-gray-700 mb-8 mobile-text">
            Find everything you need on our website with this complete site navigation guide
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 bg-dataops-600 hover:bg-dataops-700 text-white px-6 py-3 rounded-md transition-colors min-w-[180px] mobile-link"
              aria-label="View XML Sitemap"
            >
              <FileCode size={isMobile ? 24 : 20} />
              <span className="mobile-text">View XML Sitemap</span>
            </a>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 border border-dataops-600 text-dataops-600 hover:bg-dataops-50 px-6 py-3 rounded-md transition-colors min-w-[180px] mobile-link"
              aria-label="Contact Us"
            >
              <LinkIcon size={isMobile ? 24 : 20} />
              <span className="mobile-text">Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SitemapHero;
