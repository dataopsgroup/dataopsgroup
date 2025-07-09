
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Clock, Target, Zap, BarChart3 } from 'lucide-react';

const CompleteHubSpotGuideHero = () => {
  return (
    <section className="relative pt-24 pb-20 bg-gradient-to-br from-dataops-950 to-dataops-900 text-white overflow-hidden">
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
            Turn Operations Into Value Creation Engines
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            The definitive playbook for PE firms to leverage HubSpot as their portfolio optimization platform, driving measurable IRR improvements across all investments
          </p>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-saffron-500 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">$2.5T</div>
              <div className="text-sm text-gray-300">PE Assets Under Management</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-saffron-500/20 backdrop-blur-sm rounded-lg p-6 hover:bg-saffron-500/25 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">65%</div>
              <div className="text-sm text-gray-300">Portfolio Companies Using Outdated Systems</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-saffron-500 p-3 rounded-full">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">23%</div>
              <div className="text-sm text-gray-300">Average IRR Improvement with Better Data</div>
            </div>

            {/* Stat 4 */}
            <div className="bg-saffron-500/20 backdrop-blur-sm rounded-lg p-6 hover:bg-saffron-500/25 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">100 Days</div>
              <div className="text-sm text-gray-300">Typical Investment Period Lost to Poor Ops</div>
            </div>

            {/* Stat 5 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-saffron-500 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">40%</div>
              <div className="text-sm text-gray-300">Time Savings with Proper CRM Integration</div>
            </div>

            {/* Stat 6 */}
            <div className="bg-saffron-500/20 backdrop-blur-sm rounded-lg p-6 hover:bg-saffron-500/25 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Target className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">3.2x</div>
              <div className="text-sm text-gray-300">Revenue Growth Multiplier with HubSpot</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompleteHubSpotGuideHero;
