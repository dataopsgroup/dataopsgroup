
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParams, Link } from 'react-router-dom';
import { services } from '@/components/Services';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  
  // Find the service data based on the ID (in a real app, this would be more robust)
  const service = services.find((s) => s.id === serviceId) || services[0];
  
  const benefits = [
    "Improved data quality and consistency",
    "Enhanced decision-making capabilities",
    "Streamlined operations and workflows",
    "Reduced manual effort and human error",
    "Increased ROI from your HubSpot investment",
    "Better customer journey visibility",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-dataops-50">
          <div className="container mx-auto">
            <Link to="/#services" className="flex items-center text-dataops-600 hover:text-dataops-800 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Back to all services</span>
            </Link>
            
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dataops-100 text-dataops-800 text-sm font-medium mb-2">
                  Our Services
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {service.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                  {service.description}
                </p>
                <div className="pt-6">
                  <Button className="bg-dataops-600 hover:bg-dataops-700 px-6 py-6 text-base">
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative bg-white rounded-2xl shadow-xl p-8 z-10 w-full max-w-md">
                  <div className="flex justify-center items-center h-48 w-full rounded-lg bg-dataops-50">
                    <div className="text-dataops-600">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">How We Can Help</h2>
                  <p className="text-gray-700 mb-4">
                    Our {service.title.toLowerCase()} service is designed to help businesses maximize their data potential
                    while minimizing complexity and technical debt. We work with you to understand your unique challenges
                    and goals, then develop a customized solution that delivers measurable results.
                  </p>
                  <p className="text-gray-700 mb-4">
                    By leveraging our expertise in HubSpot and data operations, we ensure your systems work seamlessly together,
                    providing the insights and efficiency you need to drive business growth.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Approach</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-dataops-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">1. Assess</h3>
                      <p className="text-gray-700">We start by thoroughly assessing your current setup, identifying pain points and opportunities.</p>
                    </div>
                    <div className="bg-dataops-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">2. Design</h3>
                      <p className="text-gray-700">Next, we design a customized solution that addresses your specific needs and goals.</p>
                    </div>
                    <div className="bg-dataops-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">3. Implement</h3>
                      <p className="text-gray-700">Our team carefully implements the solution with minimal disruption to your operations.</p>
                    </div>
                    <div className="bg-dataops-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">4. Optimize</h3>
                      <p className="text-gray-700">We continuously monitor and optimize the solution to ensure it delivers maximum value.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8">
                  <h3 className="text-xl font-bold mb-6">Benefits</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-dataops-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-dataops-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
                  <p className="text-gray-700 mb-6">
                    Contact us today to schedule a consultation and learn how our {service.title.toLowerCase()} services
                    can help you achieve your business goals.
                  </p>
                  <Button className="w-full bg-dataops-600 hover:bg-dataops-700">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
