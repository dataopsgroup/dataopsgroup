import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Book } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';
const BookCTA = () => {
  return <section className="section-padding bg-white">
      <div className="container mx-auto px-[5%]">
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center md:justify-start">
                  <div className="relative transform transition-transform hover:scale-105 duration-300">
                    
                  </div>
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
        "url": "https://dataops.group/book",
        "image": "/lovable-uploads/582dcdb7-2cb4-4457-ae45-10121eef53a2.png",
        "description": "Sixty Days to Harness Your Marketing Data's Origins, Journey, and Destiny for C-Suite Impact.",
        "publisher": {
          "@type": "Organization",
          "name": "DataOps Group"
        }
      })
    }} />
    </section>;
};
export default BookCTA;