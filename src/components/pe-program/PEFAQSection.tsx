import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const PEFAQSection = () => {
  const faqs = [{
    question: "How is this different from hiring McKinsey or other big consultants?",
    answer: "We deliver working systems in 100 days, not 200-page strategy decks. Our focus is operational execution that drives immediate value, with deep expertise in the specific tools and processes PE portfolio companies need."
  }, {
    question: "What if our portfolio company already has HubSpot?",
    answer: "Most of our clients have HubSpot—but it's not optimized for their business or PE requirements. We fix the implementation, clean the data, and build the reporting infrastructure your investment committee actually needs."
  }, {
    question: "Do you work with multiple portfolio companies from the same PE firm?",
    answer: "Yes, and this creates significant value through standardization and best practice sharing. Portfolio-wide implementations often achieve better outcomes at lower per-company costs."
  }, {
    question: "What happens after the 100 days?",
    answer: "Your team becomes 90% self-sufficient for ongoing management. We transition to a strategic partnership role, available for complex projects, optimization initiatives, and expansion into new portfolio companies."
  }, {
    question: "How do you ensure results given our aggressive timeline?",
    answer: "Our methodology is specifically designed for PE timelines. We focus on systematic execution over lengthy planning, use proven templates to reduce custom work, and maintain dedicated team assignments to eliminate context switching delays."
  }];
  return <section className="py-16 md:py-24 bg-zinc-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-dataops-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default PEFAQSection;