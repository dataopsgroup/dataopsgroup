
import React from 'react';
import { Book, ChevronRight } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';
import { calculateSizes } from '@/utils/image-utils';

interface BookHeroSectionProps {
  onScrollToForm: () => void;
}

const BookHeroSection: React.FC<BookHeroSectionProps> = ({
  onScrollToForm
}) => {
  return (
    <section className="hero-gradient py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="hero-text max-w-lg">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-full mb-6">
              <Book className="h-4 w-4 mr-2" />
              <span className="font-semibold">📚 New Release</span>
            </div>
            <h1 className="text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
              THE CMO'S DATA PLAYBOOK
            </h1>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              TRANSFORM DATA INTO REVENUE
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Sixty days to harness your marketing data's origins, journey, and destiny for C-suite impact.
              A practical guide for marketing executives who want to turn their data into strategic business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://a.co/d/1VQNwrN" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
              >
                Pre-Order Now <ChevronRight className="h-5 w-5 ml-2" />
              </a>
              <button 
                onClick={onScrollToForm} 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Sample Chapter
              </button>
            </div>
          </div>
          
          <div className="book-container relative max-w-md mx-auto">
            <OptimizedImage
              src="/lovable-uploads/582dcdb7-2cb4-4457-ae45-10121eef53a2.png"
              alt="The CMO's Data Playbook book cover"
              width={400}
              height={600}
              className="book-cover w-full rounded-3xl shadow-2xl transition-all duration-500"
              priority={true}
              isLCP={true}
              enableModernFormats={true}
              sizes={calculateSizes('card')}
              responsiveBreakpoints={[320, 480, 640, 800]}
              objectFit="cover"
            />
            <div className="floating-elements absolute inset-0 pointer-events-none">
              <div className="floating-stat absolute top-20 -right-4 bg-white px-4 py-3 rounded-xl shadow-lg text-sm font-semibold text-gray-800">
                📈 60-Day Framework
              </div>
              <div className="floating-stat absolute bottom-32 -left-6 bg-white px-4 py-3 rounded-xl shadow-lg text-sm font-semibold text-gray-800">
                🎯 C-Suite Impact
              </div>
              <div className="floating-stat absolute top-60 -right-2 bg-white px-4 py-3 rounded-xl shadow-lg text-sm font-semibold text-gray-800">
                💡 Practical Guide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookHeroSection;
