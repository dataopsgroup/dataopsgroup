
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ApproachBenefits = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Why Our Approach Works</h2>
      <p className="text-lg text-gray-700">
        Our methodology is built on years of experience working with organizations of all sizes. We've 
        refined our approach to address the common challenges businesses face when implementing data 
        operations solutions. The result is a proven system that delivers consistent results.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="approach-benefit-heading">Data-Driven Decision Making</h3>
            <p className="text-sm text-gray-600">
              Our approach emphasizes using data analytics to drive all strategic decisions.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="approach-benefit-heading">Collaborative Implementation</h3>
            <p className="text-sm text-gray-600">
              We work closely with your team to ensure seamless integration of new data systems.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="approach-benefit-heading">Continuous Optimization</h3>
            <p className="text-sm text-gray-600">
              Our data governance framework ensures ongoing improvement of your data operations.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ApproachBenefits;
