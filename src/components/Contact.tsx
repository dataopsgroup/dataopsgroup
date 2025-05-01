
import React, { memo } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

// Use memo to prevent unnecessary re-renders
const ContactCard = memo(({ children }: { children: React.ReactNode }) => (
  <Card>
    <CardContent className="pt-6">
      {children}
    </CardContent>
  </Card>
));

ContactCard.displayName = 'ContactCard';

// Form input component for reusability and better performance
const FormField = memo(({ 
  id, 
  label, 
  placeholder, 
  type = 'text', 
  className = '',
  isTextarea = false
}: { 
  id: string; 
  label: string; 
  placeholder: string; 
  type?: string;
  className?: string;
  isTextarea?: boolean;
}) => (
  <div className={className}>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    {isTextarea ? (
      <Textarea
        id={id}
        placeholder={placeholder}
        className="min-h-[120px] w-full"
      />
    ) : (
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full"
      />
    )}
  </div>
));

FormField.displayName = 'FormField';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-6">
            <ContactCard>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-dataops-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-gray-600">+1 479 844 2052</p>
                  <p className="text-gray-600">Mon-Thu, 9am-5pm CT</p>
                </div>
              </div>
            </ContactCard>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <ContactCard>
              <form>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <FormField
                    id="firstName"
                    label="First Name"
                    placeholder="John"
                  />
                  <FormField
                    id="lastName"
                    label="Last Name"
                    placeholder="Doe"
                  />
                </div>
                
                <FormField
                  id="email"
                  label="Email Address"
                  placeholder="john.doe@example.com"
                  type="email"
                  className="mb-6"
                />
                
                <FormField
                  id="company"
                  label="Company"
                  placeholder="Your Company, Inc."
                  className="mb-6"
                />
                
                <FormField
                  id="message"
                  label="Message"
                  placeholder="Tell us about your project or inquiry..."
                  isTextarea={true}
                  className="mb-6"
                />
                
                <Button type="submit" className="w-full bg-dataops-600 hover:bg-dataops-700">
                  Send Message
                </Button>
              </form>
            </ContactCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
