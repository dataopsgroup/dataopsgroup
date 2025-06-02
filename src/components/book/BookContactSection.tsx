
import React from 'react';
import { ChevronRight } from 'lucide-react';

const BookContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Have Questions About the Book?</h2>
          <p className="text-gray-600 mb-8">
            Get in touch with our team for inquiries about bulk orders, speaking engagements, or media requests.
          </p>
          <a 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center"
          >
            Contact Us <ChevronRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookContactSection;
