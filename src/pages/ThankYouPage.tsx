
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDownToLine } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/ui/optimized-image';
import MetaHead from '@/components/seo/MetaHead';

const ThankYouPage = () => {
  const whitepaperImage = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";

  return (
    <div className="page-container">
      <MetaHead
        title="Thank You - DataOps Group"
        description="Thank you for your interest in DataOps Group. Download our free resources and learn how we can help transform your data operations."
        canonicalPath="/thank-you"
        noindex={true}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Thank You - DataOps Group",
          "description": "Thank you page with free resources",
          "url": "https://dataopsgroup.com/thank-you",
          "mainEntity": {
            "@type": "DigitalDocument",
            "name": "2025 DataOps Transformation Guide",
            "description": "Learn how to implement DataOps practices in your organization and drive significant business outcomes with our comprehensive guide.",
            "publisher": {
              "@type": "Organization",
              "name": "DataOps Group"
            }
          }
        }}
      />
      <Navbar />
      <main className="content-wrapper pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-dataops-900 mb-4">Thank You for Your Interest!</h1>
            <p className="text-lg text-gray-700">
              We've received your information and a member of our team will be in touch with you shortly.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-dataops-100 shadow-lg">
              <CardHeader className="text-center bg-gradient-to-r from-dataops-50 to-dataops-100 rounded-t-lg">
                <CardTitle className="text-2xl font-bold text-dataops-900">Free Resource</CardTitle>
                <CardDescription className="text-dataops-800">
                  Download our exclusive whitepaper
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-[3/4] bg-gray-100 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                  <OptimizedImage 
                    src={whitepaperImage}
                    alt="2025 DataOps Transformation Guide whitepaper cover"
                    width={400}
                    height={533}
                    aspectRatio={3/4}
                    className="object-cover w-full h-full"
                    quality={85}
                    enableModernFormats={true}
                    loading="eager"
                    decoding="sync"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">2025 DataOps Transformation Guide</h3>
                <p className="text-gray-600 text-sm">
                  Learn how to implement DataOps practices in your organization and drive significant business outcomes with our comprehensive guide.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full flex items-center gap-2">
                  Download Now <ArrowDownToLine size={16} aria-hidden="true" />
                </Button>
              </CardFooter>
            </Card>
            
            <div className="mt-8 text-center">
              <Link to="/" className="text-dataops-700 hover:text-dataops-900 transition-colors">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
