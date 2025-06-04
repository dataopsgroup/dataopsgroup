
import React from 'react';
import { Calendar, Users, TrendingUp } from 'lucide-react';

const PECTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ready to Transform Your Portfolio Company?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Start your 100-day transformation program and see measurable results within the first quarter.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <a
              href="https://meetings.hubspot.com/dataopsgroup/gtclient"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-saffron text-white text-lg font-semibold px-8 py-4 rounded-lg hover:bg-orange-500 transition-colors duration-200"
            >
              Schedule Your Strategy Session
            </a>
          </div>

          {/* Availability Information - Three Boxes */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Current Availability</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-dataops-100 border border-dataops-200 rounded-lg p-6">
                <div className="flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-dataops-600" />
                </div>
                <p className="text-dataops-800 font-medium">
                  Only 2 new engagements available per quarter
                </p>
              </div>
              
              <div className="bg-brand-saffron/10 border border-brand-saffron/30 rounded-lg p-6">
                <div className="flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-orange-800 font-medium">
                  Deep, hands-on engagement requires dedicated resources
                </p>
              </div>
              
              <div className="bg-green-100 border border-green-200 rounded-lg p-6">
                <div className="flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-green-800 font-medium">
                  Portfolio companies see 23% faster value realization
                </p>
              </div>
            </div>
            
            <p className="text-gray-600 mt-6">
              Schedule your strategy session to secure your spot for Q2 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PECTASection;
