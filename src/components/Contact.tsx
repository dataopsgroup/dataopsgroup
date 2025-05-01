
import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-dataops-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 479 844 2052</p>
                    <p className="text-gray-600">Mon-Thu, 9am-5pm CT</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <form>
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <Input
                      id="company"
                      placeholder="Your Company, Inc."
                      className="w-full"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or inquiry..."
                      className="min-h-[120px] w-full"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-dataops-600 hover:bg-dataops-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
