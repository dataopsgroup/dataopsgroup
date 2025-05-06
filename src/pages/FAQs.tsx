
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
      
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "FAQs", url: "/faqs" }
        ]} 
      />
      
      <Navbar />
      <main className="pt-28 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-16">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-sm">
                  What is DataOps and why is it important?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="mb-3">
                    DataOps is a collaborative data management practice focused on improving the communication, integration,
                    and automation of data flows between data managers and consumers across an organization. It's important
                    because it helps organizations deliver higher-quality data faster, enabling more agile and effective
                    data-driven decision making.
                  </p>
                  <p>
                    Learn more about our <Link to="/services" className="text-dataops-600 hover:underline" aria-label="Explore our DataOps implementation services">DataOps implementation services</Link> and 
                    how we can help your organization improve data quality and efficiency.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-sm">
                  How long does it take to implement a DataOps strategy?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="mb-3">
                    The implementation timeline varies depending on the organization's size, current data maturity,
                    and specific goals. A basic implementation can take 3-6 months, while a comprehensive enterprise-wide
                    transformation might take 12-18 months. Our <Link to="/approach" className="text-dataops-600 hover:underline" aria-label="Learn about our implementation approach">approach</Link> is to implement in phases, delivering value at each
                    stage rather than waiting for a complete transformation.
                  </p>
                  <p>
                    View our <Link to="/case-studies" className="text-dataops-600 hover:underline" aria-label="Review our implementation case studies">implementation case studies</Link> to see typical timelines for different types of organizations.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-sm">
                  What industries do you typically work with?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="mb-3">
                    We work with organizations across various industries including finance, healthcare, retail,
                    manufacturing, and technology. DataOps principles are beneficial for any organization that relies on
                    data for decision-making, regardless of industry. Our team has specific expertise in regulatory
                    compliance for finance and healthcare.
                  </p>
                  <p>
                    Explore our <Link to="/services" className="text-dataops-600 hover:underline" aria-label="Learn about our industry-specific solutions">industry-specific solutions</Link> for more information.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-sm">
                  How do you measure the success of a DataOps implementation?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="mb-3">
                    We establish clear KPIs at the beginning of each engagement, tailored to your specific goals.
                    Common metrics include time-to-value for data products, reduction in data errors, increased
                    data utilization, and ultimately business outcomes like revenue growth or cost reduction
                    tied to improved data operations.
                  </p>
                  <p>
                    Our <Link to="/documentation" className="text-dataops-600 hover:underline" aria-label="Learn more about our data quality monitoring framework">data quality monitoring framework</Link> helps track these metrics throughout the implementation process.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-sm">
                  What technologies do you typically recommend?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="mb-3">
                    We're technology-agnostic and tailor our recommendations to your specific needs and existing
                    infrastructure. We have expertise in major cloud platforms (AWS, Azure, GCP), data integration
                    tools, ETL/ELT solutions, data quality tools, and modern data stack components. We focus on
                    the right solution for your specific needs rather than pushing specific vendors.
                  </p>
                  <p>
                    Read our <Link to="/blog" className="text-dataops-600 hover:underline" aria-label="Learn more about our technology selection guides">technology selection guides</Link> for more insights into our approach.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">Have more questions?</h2>
              <p className="mb-4">
                We're here to help with any questions about <Link to="/services" className="text-dataops-600 hover:underline" aria-label="Learn about our data operations services">data operations</Link>, <Link to="/services" className="text-dataops-600 hover:underline" aria-label="Explore our analytics services">analytics</Link>, or how our services can benefit your organization.
              </p>
              <Link to="/contact" className="text-dataops-600 hover:underline font-medium" aria-label="Contact us for personalized answers to your questions">
                Contact us for personalized answers
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQsPage;
