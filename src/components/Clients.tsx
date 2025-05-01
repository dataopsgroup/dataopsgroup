
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Working with DataOps Group transformed our data management capabilities. Their expertise helped us implement a solution that increased analytics efficiency by 300%.",
    name: "Sarah Johnson",
    title: "CTO, Enterprise Solutions Inc.",
    rating: 5
  },
  {
    quote: "The DataOps team provided invaluable guidance as we modernized our data architecture. Their approach was pragmatic, focused, and delivered exactly what we needed.",
    name: "Michael Chen",
    title: "VP of Data, Global Finance Group",
    rating: 5
  },
  {
    quote: "I was impressed by how quickly the team understood our unique challenges and delivered a customized solution that had immediate impact on our business operations.",
    name: "Jessica Rivera",
    title: "Director of Analytics, Retail Innovations",
    rating: 5
  }
];

const clients = [
  "Client Logo 1",
  "Client Logo 2",
  "Client Logo 3",
  "Client Logo 4",
  "Client Logo 5",
  "Client Logo 6"
];

const Clients = () => {
  return (
    <section id="clients" className="section-padding bg-dataops-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600">
            See what our clients have to say about working with DataOps Group
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Clients Logos */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold mb-2">Trusted by Industry Leaders</h3>
          <p className="text-gray-600">
            We partner with companies of all sizes across various industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="h-24 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400 font-semibold"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
