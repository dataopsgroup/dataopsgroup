
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { Card, CardContent } from '@/components/ui/card';
import CTABanner from '@/components/CTABanner';
import { HelpCircle } from 'lucide-react';

const FAQsPage = () => {
  const faqItems = [
    {
      question: "What is DataOps and why is it important?",
      answer: `DataOps is a collaborative data management practice focused on improving the communication, integration,
        and automation of data flows between data managers and consumers across an organization. It's important
        because it helps organizations deliver higher-quality data faster, enabling more agile and effective
        data-driven decision making.`
    },
    {
      question: "How long does it take to implement a DataOps strategy?",
      answer: `The implementation timeline varies depending on the organization's size, current data maturity,
        and specific goals. A basic implementation can take 3-6 months, while a comprehensive enterprise-wide
        transformation might take 12-18 months. Our approach is to implement in phases, delivering value at each
        stage rather than waiting for a complete transformation.`
    },
    {
      question: "What industries do you typically work with?",
      answer: `We work with organizations across various industries including finance, healthcare, retail,
        manufacturing, and technology. DataOps principles are beneficial for any organization that relies on
        data for decision-making, regardless of industry. Our team has specific expertise in regulatory
        compliance for finance and healthcare.`
    },
    {
      question: "How do you measure the success of a DataOps implementation?",
      answer: `We establish clear KPIs at the beginning of each engagement, tailored to your specific goals.
        Common metrics include time-to-value for data products, reduction in data errors, increased
        data utilization, and ultimately business outcomes like revenue growth or cost reduction
        tied to improved data operations.`
    },
    {
      question: "What technologies do you typically recommend?",
      answer: `We're technology-agnostic and tailor our recommendations to your specific needs and existing
        infrastructure. We have expertise in major cloud platforms (AWS, Azure, GCP), data integration
        tools, ETL/ELT solutions, data quality tools, and modern data stack components. We focus on
        the right solution for your specific needs rather than pushing specific vendors.`
    }
  ];

  // Define breadcrumbs for schema
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'FAQs', url: '/faqs' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Frequently Asked Questions - DataOps Group</title>
        <meta name="description" content="Find answers to common questions about DataOps, our services, implementation timelines, and measuring success in data operations." />
        <meta name="keywords" content="FAQs, data operations questions, dataops implementation, data management questions, data governance, data analytics" />
        <link rel="canonical" href={`${window.location.origin}/faqs`} />
        
        {/* FAQ schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>
      </Helmet>
      
      <BreadcrumbSchema items={breadcrumbs} />
      
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-white to-dataops-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-lg text-gray-700">
                Find answers to common questions about our DataOps services and implementation approach
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <Card className="mb-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqItems.map((item, index) => (
                      <AccordionItem 
                        key={`item-${index + 1}`} 
                        value={`item-${index + 1}`} 
                        className="bg-white rounded-lg shadow-md border"
                      >
                        <AccordionTrigger className="px-6 py-4 text-sm">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="mb-3">{item.answer}</p>
                          {index === 0 && (
                            <p>
                              Learn more about our <Link to="/services" className="text-dataops-600 hover:underline" aria-label="Explore our DataOps implementation services">DataOps implementation services</Link> and 
                              how we can help your organization improve data quality and efficiency.
                            </p>
                          )}
                          {index === 1 && (
                            <p>
                              View our <Link to="/case-studies" className="text-dataops-600 hover:underline" aria-label="Review our implementation case studies">implementation case studies</Link> to see typical timelines for different types of organizations.
                            </p>
                          )}
                          {index === 2 && (
                            <p>
                              Explore our <Link to="/services" className="text-dataops-600 hover:underline" aria-label="Learn about our industry-specific solutions">industry-specific solutions</Link> for more information.
                            </p>
                          )}
                          {index === 3 && (
                            <p>
                              Our <Link to="/documentation" className="text-dataops-600 hover:underline" aria-label="Learn more about our data quality monitoring framework">data quality monitoring framework</Link> helps track these metrics throughout the implementation process.
                            </p>
                          )}
                          {index === 4 && (
                            <p>
                              Read our <Link to="/blog" className="text-dataops-600 hover:underline" aria-label="Learn more about our technology selection guides">technology selection guides</Link> for more insights into our approach.
                            </p>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center">
                      <HelpCircle className="h-6 w-6 text-dataops-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Have more questions?</h2>
                      <p className="mb-4 text-gray-700">
                        We're here to help with any questions about <Link to="/services" className="text-dataops-600 hover:underline" aria-label="Learn about our data operations services">data operations</Link>, <Link to="/services" className="text-dataops-600 hover:underline" aria-label="Explore our analytics services">analytics</Link>, or how our services can benefit your organization.
                      </p>
                      <Link to="/contact" className="text-dataops-600 hover:underline font-medium inline-flex items-center" aria-label="Contact us for personalized answers to your questions">
                        Contact us for personalized answers
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default FAQsPage;
