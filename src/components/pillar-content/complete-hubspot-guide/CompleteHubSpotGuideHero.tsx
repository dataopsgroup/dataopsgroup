
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Users } from 'lucide-react';

const CompleteHubSpotGuideHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-dataops-950 to-dataops-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center space-x-2 text-sm text-gray-300 mb-8">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/guides" className="hover:text-white">Guides</Link>
            <span>/</span>
            <span className="text-white">Complete HubSpot Guide for Private Equity</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The Complete HubSpot Guide for{' '}
            <span className="text-saffron-500">Private Equity</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Beyond CRM to Portfolio Orchestration
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            How smart PE firms use HubSpot not just as a customer database, but as the central nervous system that drives portfolio value creation and IRR optimization
          </p>

          {/* Stats Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-saffron-500 p-3 rounded-full mb-3">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">$2.5T</div>
              <div className="text-sm text-gray-300">PE Assets Under Management</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-saffron-500 p-3 rounded-full mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">15-25%</div>
              <div className="text-sm text-gray-300">Value Left on Table</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-saffron-500 p-3 rounded-full mb-3">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">45 min</div>
              <div className="text-sm text-gray-300">Read Time</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/data-operations-assessment">
              <Button size="lg" className="bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-3">
                Get Your Portfolio Assessment
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dataops-950 px-8 py-3">
                Schedule Expert Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteHubSpotGuideHero;
