
import React from 'react';
import { Link } from 'react-router-dom';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Database, FileText, Target, Users } from 'lucide-react';

const AnalyticsBI = () => {
  const benefits = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Real-time Dashboards",
      description: "Get instant visibility into your key metrics with automated reporting that updates in real-time."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Predictive Analytics",
      description: "Identify trends and patterns before they impact your business with advanced analytics capabilities."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Integration",
      description: "Connect all your data sources into a unified view for comprehensive business intelligence."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Custom Reports",
      description: "Build tailored reports that answer your specific business questions and support decision-making."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "KPI Tracking",
      description: "Monitor your most important metrics and get alerts when performance deviates from targets."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Share insights across your organization with role-based access and collaborative features."
    }
  ];

  return (
    <SemanticLayout>
      <MetaHead
        title="Analytics & BI Services - Data-Driven Business Intelligence Solutions | DataOps Group"
        description="Transform your data into actionable insights with our analytics and business intelligence services. Custom dashboards, reporting, and data visualization solutions."
        keywords="analytics services, business intelligence, data visualization, custom dashboards, reporting solutions, data analytics consulting"
        canonicalPath="/services/analytics-bi"
        ogTitle="Analytics & BI Services - Business Intelligence Solutions"
        ogDescription="Expert analytics and BI services to transform your data into actionable insights. Custom dashboards, reporting, and data visualization."
      />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Analytics & Business Intelligence Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your data into actionable insights with custom analytics solutions that drive business growth and informed decision-making.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Analytics & BI Matter</h2>
              <p className="text-gray-600 mb-6">
                Without proper analytics and business intelligence, companies operate blindly, missing critical insights that could drive growth. 
                Our analytics solutions help you understand your data, identify opportunities, and make data-driven decisions with confidence.
              </p>
              <p className="text-gray-600 mb-6">
                Many organizations struggle with data quality issues that undermine their analytics efforts. That's why we start with 
                <Link to="/insights/crm-cleanup-plan" className="text-dataops-600 hover:text-dataops-800 font-medium">
                  comprehensive data cleanup
                </Link>
                and implement 
                <Link to="/insights/data-enrichment-strategy" className="text-dataops-600 hover:text-dataops-800 font-medium">
                  proven data enrichment strategies
                </Link>
                before building your analytics infrastructure.
              </p>
              <div className="bg-dataops-50 p-6 rounded-lg">
                <p className="text-dataops-800">
                  <strong>Real Results:</strong> Our analytics implementations have helped companies like the 
                  <Link to="/insights/audio-visual-equipment-wholesaler" className="text-dataops-600 hover:text-dataops-800 underline">
                    audio visual equipment wholesaler
                  </Link>
                  achieve 10% pipeline growth in 6 months through data-driven insights and reporting.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-dataops-100 p-3 rounded-lg mr-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-dataops-50 to-saffron-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Analytics Approach</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-dataops-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Data Quality Assessment</h3>
                    <p className="text-gray-600">
                      We start by evaluating your current data quality using our proven 
                      <Link to="/data-operation-assessment" className="text-dataops-600 hover:text-dataops-800 font-medium">
                        DataOps maturity assessment
                      </Link>
                      to identify gaps and improvement opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-dataops-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Requirements Analysis</h3>
                    <p className="text-gray-600">
                      We work with your team to understand your specific analytics needs, KPIs, and reporting requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-dataops-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Solution Design & Implementation</h3>
                    <p className="text-gray-600">
                      Custom analytics solutions built on platforms like HubSpot, integrated with your existing systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-dataops-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Training & Support</h3>
                    <p className="text-gray-600">
                      Comprehensive training to ensure your team can effectively use and maintain the analytics solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Analytics Challenges We Solve</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fragmented Data Sources</h3>
                  <p className="text-gray-600">
                    Many companies struggle with data scattered across multiple systems. We integrate your data sources to create a 
                    unified view, similar to how we helped solve 
                    <Link to="/insights/customer-segmentation-mistake" className="text-dataops-600 hover:text-dataops-800 font-medium">
                      customer segmentation challenges
                    </Link>
                    for our clients.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Inaccurate Reporting</h3>
                  <p className="text-gray-600">
                    Poor data quality leads to unreliable reports. We implement 
                    <Link to="/insights/data-truth-gap" className="text-dataops-600 hover:text-dataops-800 font-medium">
                      data validation processes
                    </Link>
                    that ensure your analytics are based on accurate, trustworthy data.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Limited Visibility into Customer Behavior</h3>
                  <p className="text-gray-600">
                    Understanding customer patterns is crucial for growth. Our analytics solutions help you identify 
                    <Link to="/insights/customer-churn-blindspot" className="text-dataops-600 hover:text-dataops-800 font-medium">
                      churn risks
                    </Link>
                    and optimize customer lifecycle management.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Data into Insights?</h2>
              <p className="text-gray-600 mb-8">
                Let's discuss how our analytics and BI services can help you make better data-driven decisions. 
                Start with our 
                <Link to="/data-operation-assessment" className="text-dataops-600 hover:text-dataops-800 font-medium">
                  free assessment
                </Link>
                or explore our other 
                <Link to="/services" className="text-dataops-600 hover:text-dataops-800 font-medium">
                  consulting services
                </Link>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-dataops-600 hover:bg-dataops-700">
                  <Link to="/book">Schedule a Consultation</Link>
                </Button>
                <Button variant="outline" asChild className="border-dataops-600 text-dataops-600 hover:bg-dataops-50">
                  <Link to="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SemanticLayout>
  );
};

export default AnalyticsBI;
