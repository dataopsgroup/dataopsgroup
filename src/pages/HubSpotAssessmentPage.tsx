
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import { Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

// Use memo to prevent unnecessary re-renders
const ContactCard = React.memo(({ children }: { children: React.ReactNode }) => (
  <Card>
    <CardContent className="pt-6">
      {children}
    </CardContent>
  </Card>
));

ContactCard.displayName = 'ContactCard';

const HubSpotAssessmentPage = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const formLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    // Create HubSpot script with the new form ID
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/21794360.js';
    script.defer = true;
    document.body.appendChild(script);

    // Add onload handler to initialize form
    script.onload = () => {
      if (window.hbspt && !formLoadedRef.current) {
        formLoadedRef.current = true;
        window.hbspt.forms.create({
          portalId: "21794360",
          formId: "5fa0be50-a566-4e8c-a5e6-79486ef220ee",
          region: "na1",
          target: "#hubspot-assessment-form-container",
          redirectUrl: `${window.location.origin}/hubspot-assessment-results`,
          onFormSubmit: () => {
            // Track form submission in Google Analytics
            if (window.gtag) {
              window.gtag('event', 'form_submission', {
                'event_category': 'Assessment',
                'event_label': 'HubSpot Assessment Form',
                'value': 1,
                'conversion': true
              });
              
              // Conversion tracking
              window.gtag('event', 'conversion', {
                'send_to': 'AW-16996265146/assessment_form_submission',
                'value': 1.0,
                'currency': 'USD'
              });
            }
            
            // Show success toast
            toast.success("Assessment submitted successfully! We'll send your results shortly.", {
              duration: 5000,
            });
          },
          onFormReady: () => {
            // Form is ready
            const formElement = formContainerRef.current?.querySelector('form');
            if (formElement) {
              formElement.setAttribute('data-testid', 'assessment-form');
              formElement.setAttribute('aria-label', 'HubSpot Assessment Form');
              
              // Make the form accessible
              const inputs = formElement.querySelectorAll('input, select, textarea');
              inputs.forEach((input: Element) => {
                if (input instanceof HTMLElement && !input.getAttribute('aria-label')) {
                  const label = input.getAttribute('placeholder') || '';
                  input.setAttribute('aria-label', label);
                }
              });
              
              // Add form interaction tracking
              const trackFieldInteraction = (fieldName: string, action: string) => {
                if (window.gtag) {
                  window.gtag('event', 'form_field_interaction', {
                    'event_category': 'Assessment Form',
                    'event_label': fieldName,
                    'action': action
                  });
                }
              };
              
              inputs.forEach((input: Element) => {
                if (input instanceof HTMLElement) {
                  const fieldName = input.getAttribute('name') || input.id || 'unknown';
                  
                  input.addEventListener('focus', () => {
                    trackFieldInteraction(fieldName, 'focus');
                  });
                  
                  input.addEventListener('blur', () => {
                    trackFieldInteraction(fieldName, 'complete');
                  });
                }
              });
            }
          }
        });
      }
    };

    return () => {
      // Clean up
      const scriptToRemove = document.querySelector('script[src="https://js.hsforms.net/forms/embed/21794360.js"]');
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
      // Remove any HubSpot form elements that might have been created
      const formContainer = document.getElementById('hubspot-assessment-form-container');
      if (formContainer) {
        while (formContainer.firstChild) {
          formContainer.removeChild(formContainer.firstChild);
        }
      }
      formLoadedRef.current = false;
    };
  }, []);

  return (
    <SemanticLayout>
      <Helmet>
        <title>Free HubSpot Assessment | DataOps Group</title>
        <meta 
          name="description" 
          content="Get a free comprehensive assessment of your HubSpot setup. Identify gaps, optimization opportunities, and get expert recommendations to maximize your ROI." 
        />
        <meta name="keywords" content="hubspot assessment, free hubspot audit, crm evaluation, marketing automation review" />
        <link rel="canonical" href="https://dataopsgroup.com/hubspot-assessment" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Free HubSpot Assessment | DataOps Group" />
        <meta property="og:description" content="Get a free comprehensive assessment of your HubSpot setup. Identify gaps, optimization opportunities, and get expert recommendations to maximize your ROI." />
        <meta property="og:url" content="https://dataopsgroup.com/hubspot-assessment" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Free HubSpot Assessment | DataOps Group" />
        <meta name="twitter:description" content="Get a free comprehensive assessment of your HubSpot setup. Identify gaps, optimization opportunities, and get expert recommendations to maximize your ROI." />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "HubSpot Assessment",
              "description": "Get a free comprehensive assessment of your HubSpot setup. Identify gaps, optimization opportunities, and get expert recommendations to maximize your ROI.",
              "url": "${window.location.origin}/hubspot-assessment",
              "publisher": {
                "@type": "Organization",
                "name": "DataOps Group",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${window.location.origin}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
                }
              }
            }
          `}
        </script>
      </Helmet>
      
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "HubSpot Assessment", url: "/hubspot-assessment" }
        ]} 
      />
      
      <section className="flex-grow pt-32 px-[5%]" aria-labelledby="assessment-heading">
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h1 id="assessment-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Free HubSpot <span className="gradient-text">Assessment</span>
          </h1>
          <p className="text-lg text-gray-600">
            Get a comprehensive evaluation of your HubSpot setup and discover opportunities to maximize your ROI with expert recommendations.
          </p>
        </header>
        
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-6">
              <ContactCard>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-dataops-600 mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-medium mb-1 text-xl">Call Us</h3>
                    <p className="text-gray-600">
                      <a href="tel:+14798442052" className="hover:text-dataops-600 transition-colors">
                        +1 479 844 2052
                      </a>
                    </p>
                    <p className="text-gray-600">Mon-Thu, 9am-5pm CT</p>
                  </div>
                </div>
              </ContactCard>
            </div>
            
            {/* HubSpot Assessment Form */}
            <div className="md:col-span-2">
              <ContactCard>
                <div id="hubspot-assessment-form-container" ref={formContainerRef} className="min-h-[400px]" aria-live="polite">
                  <div className="flex justify-center items-center h-20">
                    <p className="text-gray-500">Loading assessment form...</p>
                  </div>
                </div>
              </ContactCard>
            </div>
          </div>
        </div>
      </section>
    </SemanticLayout>
  );
};

// Add HubSpot form typing to window object
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: any) => void;
      };
    };
  }
}

export default HubSpotAssessmentPage;
