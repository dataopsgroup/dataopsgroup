
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Helmet } from 'react-helmet-async';

const LeadershipPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Leadership Team - DataOps Group</title>
        <meta name="description" content="Meet the experienced leadership team at DataOps Group driving innovation in data operations and management." />
        <meta name="keywords" content="leadership, data experts, management team, dataops leadership" />
        <link rel="canonical" href="/leadership" />
      </Helmet>
      <Navbar />
      <main className="pt-28 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Our <span className="gradient-text">Leadership Team</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {/* Leadership profiles */}
            <div className="text-center">
              <Avatar className="h-40 w-40 mx-auto mb-4">
                <AvatarImage src="/placeholder.svg" alt="Jane Doe - CEO of DataOps Group" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">Jane Doe</h2>
              <p className="text-dataops-600 mb-2">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                15+ years of experience in data management and analytics leadership.
              </p>
            </div>
            <div className="text-center">
              <Avatar className="h-40 w-40 mx-auto mb-4">
                <AvatarImage src="/placeholder.svg" alt="John Smith - CTO of DataOps Group" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">John Smith</h2>
              <p className="text-dataops-600 mb-2">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                Former tech lead at major data companies with expertise in cloud architecture.
              </p>
            </div>
            <div className="text-center">
              <Avatar className="h-40 w-40 mx-auto mb-4">
                <AvatarImage src="/placeholder.svg" alt="Anna Lee - COO of DataOps Group" />
                <AvatarFallback>AL</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">Anna Lee</h2>
              <p className="text-dataops-600 mb-2">Chief Operations Officer</p>
              <p className="text-gray-600 text-sm">
                Specialized in optimizing organizational processes and data operations.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LeadershipPage;
