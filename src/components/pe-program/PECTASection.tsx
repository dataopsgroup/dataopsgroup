
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Shield, CheckCircle } from 'lucide-react';
const PECTASection = () => {
  const guaranteePoints = ["Battle-tested methodology proven across dozens of portfolio companies", "Industry-specific expertise that identifies opportunities others miss", "Systematic approach that reduces implementation risk to near zero"];
  return <section className="py-16 md:py-24 bg-dataops-950 text-white">
      <div className="container mx-auto px-4">
        {/* Urgency Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Clock className="h-8 w-8 text-saffron-500 mr-3" />
            <h2 className="text-2xl font-bold">Limited Availability - Strategic Client Selection</h2>
          </div>
          
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            We deliberately limit our portfolio company engagements to ensure each transformation receives the focused attention required for exceptional results.
          </p>
          
          <div className="bg-dataops-600 p-6 rounded-lg max-w-2xl mx-auto mb-8">
            <p className="text-xl font-bold text-saffron-500 mb-2">
              Current Availability: Accepting 3 new engagements for Q3 2025
            </p>
            <div className="text-left space-y-2 mt-4">
              <p className="text-blue-100"><strong>Why We Limit Capacity:</strong></p>
              <ul className="space-y-3 text-blue-100 list-none">
                <li className="flex">
                  <span className="text-saffron-500 mr-3 flex-shrink-0">•</span>
                  <span>Dedicated team assignments ensure continuity and deep knowledge transfer</span>
                </li>
                <li className="flex">
                  <span className="text-saffron-500 mr-3 flex-shrink-0">•</span>
                  <span>Quality outcomes require focused attention, not rushed implementations</span>
                </li>
                <li className="flex">
                  <span className="text-saffron-500 mr-3 flex-shrink-0">•</span>
                  <span>Our methodology works because we don't cut corners or over-commit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Portfolio Company Operations?
          </h2>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="space-y-4 text-left bg-dataops-600 p-6 rounded-lg">
              <p className="text-blue-100"><strong>Step 1:</strong> Schedule your complimentary Portfolio Assessment</p>
              <p className="text-blue-100"><strong>Step 2:</strong> Receive your custom 100-Day Roadmap and ROI projections</p>
              <p className="text-blue-100"><strong>Step 3:</strong> Begin transformation with immediate operational improvements</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/contact">
              
            </Link>
            <Link to="/contact">
              
            </Link>
          </div>
          
          <p className="text-blue-100">
            <em>30-minute consultation to discuss your specific portfolio company challenges</em>
          </p>
        </div>

        {/* Guarantee Section */}
        <div className="bg-dataops-600 p-8 rounded-lg max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-8 w-8 text-saffron-500 mr-3" />
            <h3 className="text-2xl font-bold">Our Confidence Guarantee</h3>
          </div>
          
          <h4 className="text-xl font-bold text-center mb-6 text-saffron-500">
            100% Confidence in Our Methodology
          </h4>
          
          <p className="text-lg text-center mb-8 text-blue-100">
            If we don't identify at least $1M in operational improvement opportunities within the first 30 days, we'll refund your investment and provide a complete operational assessment at no charge.
          </p>
          
          <div>
            <p className="font-semibold mb-4 text-blue-100">Why We Can Make This Promise:</p>
            <div className="space-y-3">
              {guaranteePoints.map((point, index) => <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-blue-100">{point}</p>
                </div>)}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Transform Operational Chaos Into Value Creation</h3>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Every day you wait, your portfolio company falls further behind operational excellence standards. Your competitors are building unified, data-driven operations that accelerate growth and increase exit valuations.
          </p>
          
          <Link to="/contact">
            <Button className="bg-saffron-500 hover:bg-saffron-600 text-dataops-950 font-bold px-10 py-4 text-xl">
              Get Started Today - Schedule Assessment
            </Button>
          </Link>
          
          <p className="text-sm text-blue-100 mt-4">
            <em>Limited availability - Currently accepting 3 new transformations for Q3 2025</em>
          </p>
        </div>
      </div>
    </section>;
};
export default PECTASection;
