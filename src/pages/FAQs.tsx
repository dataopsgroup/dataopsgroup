
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CTABanner from '@/components/CTABanner';
import { HelpCircle, FolderOpen, Book } from 'lucide-react';

const FAQsPage = () => {
  const faqItems = [
    {
      question: "What services does DataOps Group offer for HubSpot users?",
      answer: `DataOps Group specializes in HubSpot optimization for small to medium-sized businesses. Our core services include:

- HubSpot portal repair and optimization for operations with issues due to incorrect setup or long-term mismanagement
- On-demand HubSpot expertise as an embedded team member
- Strategic advisory services for rapidly changing environments
- Sales and marketing alignment through establishing common goals and service level agreements
- Data quality assessment and improvement
- Custom reporting and dashboard development

We work as your strategic partner rather than just another agency, bringing over 10 years of HubSpot experience to help transform your raw data into strategic insights that fuel growth.`,
      relatedLink: {
        text: "View our services",
        url: "/services",
        ariaLabel: "Learn more about DataOps Group's HubSpot optimization services"
      }
    },
    {
      question: "How does poor data quality in HubSpot affect our marketing ROI?",
      answer: `Poor data quality in HubSpot significantly impacts your marketing ROI in several critical ways:

First, it leads to wasted budget on campaigns targeting the wrong contacts or invalid emails. When your data is messy, you're essentially marketing to ghosts – contacts who may no longer exist, duplicate records, or incorrectly categorized prospects.

Second, it creates unreliable reporting, making it impossible to accurately measure campaign effectiveness. Without clean data, you can't trust the metrics you're using to make decisions, leading to continued investment in underperforming tactics.

Third, it creates friction between sales and marketing teams. When sales doesn't trust the quality of marketing-provided leads, the organizational divide widens, further reducing overall conversion rates.`,
      relatedLink: {
        text: "Download our free data cost guide",
        url: "/guide",
        ariaLabel: "Download our guide to the hidden costs of bad data"
      }
    },
    {
      question: "What is the difference between being 'data-driven' and just having data in HubSpot?",
      answer: `There's a significant difference between being truly data-driven and simply having data in HubSpot.

Merely having data means you've collected information in your HubSpot instance - you have contact records, email statistics, and website analytics. However, this data often exists in silos, may be of questionable quality, and doesn't necessarily inform strategic decisions.

Being data-driven means systematically using that data to acquire knowledge and make better business decisions. It involves having clean, reliable data, understanding which metrics actually matter (signal vs. noise), and creating processes that use data insights to guide marketing and sales activities.

At DataOps Group, we help transform organizations from simply having HubSpot data to becoming truly data-driven by implementing statistical process control principles that distinguish meaningful changes from normal variations, creating reliable reporting frameworks, and building a culture of data-informed decision making.`,
      relatedLink: {
        text: "Learn about our approach",
        url: "/approach",
        ariaLabel: "Discover how we transform organizations to be truly data-driven"
      }
    },
    {
      question: "How quickly can you fix our messy HubSpot portal?",
      answer: `The timeline for fixing a messy HubSpot portal depends on several factors including the severity of the issues, the size of your database, complexity of your current setup, and your specific goals.

Typically, our HubSpot repair projects follow these phases:

1. Initial assessment and audit (1-2 weeks): We thoroughly evaluate your current HubSpot implementation, identifying critical issues and prioritizing them.

2. Critical repairs (2-4 weeks): We address the most severe pain points first, working on resolving foundational data and structural problems.

3. Optimization and training (2-3 weeks): We implement best practices, establish proper workflows, and train your team to maintain the improved system.

From start to finish, most clients see significant improvements within 4-8 weeks, with the most critical issues resolved even sooner. Throughout the process, we provide clear communication about progress and expected timelines specific to your situation.`,
      relatedLink: {
        text: "Book a consultation",
        url: "/contact",
        ariaLabel: "Schedule a consultation to discuss your HubSpot repair needs"
      }
    },
    {
      question: "How does DataOps Group help align our marketing and sales teams?",
      answer: `DataOps Group helps align your marketing and sales teams through a comprehensive approach that addresses both data and organizational challenges:

1. Creating a single source of truth: We implement dashboards that provide both teams with consistent, accurate data they can trust, eliminating debates about lead quality or campaign effectiveness.

2. Establishing clear Service Level Agreements (SLAs): We help define specific commitments between marketing and sales regarding lead quantity, quality, and follow-up timeframes.

3. Setting up shared goals and metrics: We create unified reporting that focuses both teams on revenue outcomes rather than siloed metrics that can create misaligned incentives.

4. Building effective handoff processes: We optimize your HubSpot implementation to ensure smooth transition of leads between marketing and sales, with clear tracking and accountability.

5. Automating regular reporting: We implement weekly or monthly reviews that foster collaborative discussion rather than finger-pointing, creating a culture of continuous improvement.`,
      relatedLink: {
        text: "Learn about our alignment services",
        url: "/services/alignment",
        ariaLabel: "Discover our services for aligning marketing and sales teams"
      }
    },
    {
      question: "What makes DataOps Group different from other HubSpot consultants?",
      answer: `DataOps Group stands apart from typical HubSpot consultants in several key ways:

1. Data-First Approach: While most consultants focus primarily on marketing tactics or basic implementation, we prioritize data quality and governance as the foundation for everything else.

2. Statistical Process Control: We apply proven operational excellence methodologies used by companies like Amazon, bringing enterprise-grade data analysis techniques to SMBs in an accessible way.

3. Business Outcome Focus: Rather than just setting up tools, we help you extract meaningful insights that directly connect to revenue generation and business growth.

4. Both Strategic and Tactical: We combine high-level strategic guidance with hands-on implementation, serving as both advisors and execution partners.

5. Long-term Partnership: Instead of one-off projects, we establish ongoing relationships that help you continuously improve your data operations over time.

6. Teaching Approach: We don't just fix problems for you—we teach your team how to maintain best practices and become more self-sufficient with your HubSpot instance.`,
      relatedLink: {
        text: "Read our client testimonials",
        url: "/testimonials",
        ariaLabel: "See what our clients say about working with DataOps Group"
      }
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
        <meta name="description" content="Find answers to common questions about HubSpot optimization, data quality, marketing ROI, and how DataOps Group can help transform your data operations." />
        <meta name="keywords" content="HubSpot FAQs, HubSpot consultant, data quality, marketing ROI, sales and marketing alignment, HubSpot optimization" />
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
                Find answers to common questions about our HubSpot optimization services and implementation approach
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <FolderOpen className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center">
                    HubSpot Support & Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqItems.slice(0, 3).map((item, index) => (
                      <AccordionItem 
                        key={`item-${index + 1}`} 
                        value={`item-${index + 1}`} 
                        className="bg-white rounded-lg shadow-md border"
                      >
                        <AccordionTrigger className="px-6 py-4 text-sm">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          {item.answer.split('\n\n').map((paragraph, i) => (
                            <p key={i} className="mb-3 whitespace-pre-line">{paragraph}</p>
                          ))}
                          {item.relatedLink && (
                            <p className="mt-4">
                              <Link 
                                to={item.relatedLink.url} 
                                className="text-dataops-600 hover:underline font-medium" 
                                aria-label={item.relatedLink.ariaLabel}
                              >
                                {item.relatedLink.text}
                              </Link>
                            </p>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <Book className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center">
                    Our Approach & Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqItems.slice(3).map((item, index) => (
                      <AccordionItem 
                        key={`item-${index + 4}`} 
                        value={`item-${index + 4}`} 
                        className="bg-white rounded-lg shadow-md border"
                      >
                        <AccordionTrigger className="px-6 py-4 text-sm">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          {item.answer.split('\n\n').map((paragraph, i) => (
                            <p key={i} className="mb-3 whitespace-pre-line">{paragraph}</p>
                          ))}
                          {item.relatedLink && (
                            <p className="mt-4">
                              <Link 
                                to={item.relatedLink.url} 
                                className="text-dataops-600 hover:underline font-medium" 
                                aria-label={item.relatedLink.ariaLabel}
                              >
                                {item.relatedLink.text}
                              </Link>
                            </p>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-dataops-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Have more questions?</h2>
                    <p className="mb-4 text-gray-700">
                      We're here to help with any questions about HubSpot optimization, data operations, or how our services can benefit your organization.
                    </p>
                    <Link to="/contact" className="text-dataops-600 hover:underline font-medium inline-flex items-center" aria-label="Contact us for personalized answers to your HubSpot questions">
                      Contact us for personalized answers
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default FAQsPage;
