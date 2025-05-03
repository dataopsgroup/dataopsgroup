
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Book } from 'lucide-react';
import bookCover from '/lovable-uploads/79716a8a-35d3-4966-a6e9-1d0f21b5f732.png';

const BookCTA = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-dataops-50 to-dataops-100 p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center md:justify-start">
                  <div className="relative transform transition-transform hover:scale-105 duration-300">
                    <img 
                      src={bookCover} 
                      alt="The CMO's Data Playbook book cover" 
                      className="h-auto w-64 md:w-72 rounded-md shadow-xl" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-md"></div>
                  </div>
                </div>
                
                <div className="text-left">
                  <div className="inline-flex items-center bg-dataops-600 text-white text-xs px-3 py-1 rounded-full mb-4">
                    <Book className="h-3 w-3 mr-1" />
                    <span>New Release</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    THE CMO's DATA PLAYBOOK
                  </h3>
                  
                  <p className="text-lg text-dataops-600 font-medium mb-3">
                    TRANSFORM DATA INTO REVENUE
                  </p>
                  
                  <p className="text-gray-700 mb-4">
                    Sixty Days to Harness Your Marketing Data's Origins, Journey, and Destiny for C-Suite Impact. 
                    A practical guide for marketing executives who want to turn their data into strategic business value.
                  </p>
                  
                  <div className="text-sm text-gray-600 mb-5">
                    By <span className="font-medium">Geoff Tucker</span>
                  </div>
                  
                  <Link to="/book">
                    <Button className="bg-dataops-600 hover:bg-dataops-700 text-white">
                      Pre-order Now <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Schema markup for the book */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          "name": "THE CMO's DATA PLAYBOOK",
          "author": {
            "@type": "Person",
            "name": "Geoff Tucker"
          },
          "url": "https://yourwebsite.com/book",
          "image": bookCover,
          "description": "Sixty Days to Harness Your Marketing Data's Origins, Journey, and Destiny for C-Suite Impact.",
          "publisher": {
            "@type": "Organization",
            "name": "DataOps Group"
          }
        })
      }} />
    </section>
  );
};

export default BookCTA;
