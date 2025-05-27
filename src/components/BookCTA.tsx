
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Book } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';

const BookCTA = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-[5%]">
        <Card className="overflow-hidden border-0 shadow-xl">
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 relative">
              {/* Subtle background pattern for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/10 to-transparent"></div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="flex justify-center md:justify-start">
                  <div className="relative transform transition-transform hover:scale-105 duration-300">
                    {/* Glowing effect around book */}
                    <div className="absolute inset-0 bg-amber-400/20 rounded-lg blur-xl scale-110"></div>
                    <OptimizedImage 
                      src="/lovable-uploads/582dcdb7-2cb4-4457-ae45-10121eef53a2.png" 
                      alt="The PE Marketing Operations Playbook book cover" 
                      className="h-auto w-80 md:w-96 rounded-md shadow-2xl relative z-10 border border-amber-400/30"
                      width={384}
                      height={576}
                      priority={true}
                      isLCP={true}
                      blur={true}
                      objectFit="cover"
                      loading="eager"
                      decoding="sync"
                      threshold={0.1}
                    />
                  </div>
                </div>
                
                <div className="text-left">
                  <div className="inline-flex items-center bg-amber-500 text-slate-900 text-sm font-bold px-4 py-2 rounded-full mb-6 shadow-lg">
                    <Book className="h-4 w-4 mr-2" />
                    <span>🔥 EXCLUSIVE PE EDITION</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                    THE PE MARKETING OPERATIONS PLAYBOOK
                  </h3>
                  
                  <p className="text-xl text-amber-400 font-semibold mb-6">
                    Framework for Optimizing Portfolio Company Marketing ROI
                  </p>
                  
                  <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                    Essential due diligence insights and operational efficiency frameworks for evaluating and 
                    scaling marketing systems across portfolio companies. From 12+ years optimizing marketing operations 
                    for growth-focused businesses.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      <span>Due diligence insights for marketing operations</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      <span>ROI measurement and optimization strategies</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      <span>Scaling frameworks across multiple companies</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-amber-400 font-medium mb-6">
                    Limited first edition for PE professionals • Be among the first PE leaders to access this framework
                  </div>
                  
                  <Link to="/book">
                    <Button className="bg-amber-500 text-slate-900 hover:bg-amber-400 hover:text-slate-900 font-bold text-lg px-8 py-4 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
                      Get Your FREE PE Edition <ChevronRight className="h-5 w-5" />
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
          "name": "THE PE MARKETING OPERATIONS PLAYBOOK",
          "author": {
            "@type": "Person",
            "name": "Geoff Tucker"
          },
          "url": "https://dataops.group/book",
          "image": "/lovable-uploads/582dcdb7-2cb4-4457-ae45-10121eef53a2.png",
          "description": "Framework for Optimizing Portfolio Company Marketing ROI - Essential due diligence insights for PE professionals.",
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
