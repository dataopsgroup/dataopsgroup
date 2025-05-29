
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BookCTASectionProps {
  onScrollToForm: () => void;
}

const BookCTASection: React.FC<BookCTASectionProps> = ({ onScrollToForm }) => {
  return (
    <section id="pre-order" className="cta-gradient py-24 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl font-extrabold mb-6">Be Among the First to Read</h2>
        <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          Pre-order your copy today and receive exclusive bonus content including case studies and worksheets.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a 
            href="https://a.co/d/1VQNwrN" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
          >
            Pre-Order Now <ChevronRight className="h-5 w-5 ml-2" />
          </a>
          <button 
            onClick={onScrollToForm}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
          >
            Get Sample Chapter
          </button>
        </div>
        <div className="mt-8 opacity-80 text-lg">
          Release Date: June 6, 2025
        </div>
      </div>
    </section>
  );
};

export default BookCTASection;
