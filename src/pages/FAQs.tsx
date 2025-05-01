
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-28 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-16">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4">
                  What is DataOps and why is it important?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  DataOps is a collaborative data management practice focused on improving the communication, integration,
                  and automation of data flows between data managers and consumers across an organization. It's important
                  because it helps organizations deliver higher-quality data faster, enabling more agile and effective
                  data-driven decision making.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4">
                  How long does it take to implement a DataOps strategy?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  The implementation timeline varies depending on the organization's size, current data maturity,
                  and specific goals. A basic implementation can take 3-6 months, while a comprehensive enterprise-wide
                  transformation might take 12-18 months. Our approach is to implement in phases, delivering value at each
                  stage rather than waiting for a complete transformation.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4">
                  What industries do you typically work with?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  We work with organizations across various industries including finance, healthcare, retail,
                  manufacturing, and technology. DataOps principles are beneficial for any organization that relies on
                  data for decision-making, regardless of industry. Our team has specific expertise in regulatory
                  compliance for finance and healthcare.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4">
                  How do you measure the success of a DataOps implementation?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  We establish clear KPIs at the beginning of each engagement, tailored to your specific goals.
                  Common metrics include time-to-value for data products, reduction in data errors, increased
                  data utilization, and ultimately business outcomes like revenue growth or cost reduction
                  tied to improved data operations.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4">
                  What technologies do you typically recommend?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  We're technology-agnostic and tailor our recommendations to your specific needs and existing
                  infrastructure. We have expertise in major cloud platforms (AWS, Azure, GCP), data integration
                  tools, ETL/ELT solutions, data quality tools, and modern data stack components. We focus on
                  the right solution for your specific needs rather than pushing specific vendors.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQsPage;
