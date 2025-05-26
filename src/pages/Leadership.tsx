
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Helmet } from 'react-helmet-async';
import PersonSchema from '@/components/seo/PersonSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import SemanticLayout from '@/components/layout/SemanticLayout';

// Define leadership team data
const leadershipTeam = [
  {
    name: "Jane Doe",
    jobTitle: "Chief Executive Officer",
    description: "15+ years of experience in data management and analytics leadership.",
    avatarFallback: "JD",
    image: "/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.png",
    url: "/leadership/jane-doe",
    sameAs: [
      "https://www.linkedin.com/in/jane-doe",
      "https://twitter.com/janedoe"
    ],
    knowsAbout: [
      "HubSpot Implementation",
      "Data Operations",
      "Marketing Analytics"
    ]
  },
  {
    name: "John Smith",
    jobTitle: "Chief Technology Officer",
    description: "Former tech lead at major data companies with expertise in cloud architecture.",
    avatarFallback: "JS",
    image: "/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.png",
    url: "/leadership/john-smith",
    sameAs: [
      "https://www.linkedin.com/in/john-smith",
      "https://twitter.com/johnsmith"
    ],
    knowsAbout: [
      "CRM Setup",
      "Data Quality",
      "HubSpot Implementation"
    ]
  },
  {
    name: "Anna Lee",
    jobTitle: "Chief Operations Officer",
    description: "Specialized in optimizing organizational processes and data operations.",
    avatarFallback: "AL", 
    image: "/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.png",
    url: "/leadership/anna-lee",
    sameAs: [
      "https://www.linkedin.com/in/anna-lee",
      "https://twitter.com/annalee"
    ],
    knowsAbout: [
      "Marketing Operations",
      "HubSpot Implementation",
      "Data Analytics"
    ]
  }
];

const LeadershipPage = () => {
  return (
    <SemanticLayout>
      <Helmet>
        <title>Leadership Team - DataOps Group</title>
        <meta name="description" content="Meet the experienced leadership team at DataOps Group driving innovation in data operations and management." />
        <meta name="keywords" content="leadership, data experts, management team, dataops leadership" />
        <link rel="canonical" href="/leadership" />
      </Helmet>
      
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Leadership", url: "/leadership" }
        ]} 
      />
      
      {/* Add Person Schema for each team member */}
      {leadershipTeam.map((leader) => (
        <PersonSchema
          key={leader.name}
          name={leader.name}
          jobTitle={leader.jobTitle}
          description={leader.description}
          image={leader.image}
          url={leader.url}
          sameAs={leader.sameAs}
          knowsAbout={leader.knowsAbout}
        />
      ))}
      
      <main className="pt-28 flex-1">
        <div className="container mx-auto px-[5%]">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Our <span className="gradient-text">Leadership Team</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {/* Leadership profiles */}
            {leadershipTeam.map((leader) => (
              <div key={leader.name} className="text-center">
                <Avatar className="h-40 w-40 mx-auto mb-4">
                  <AvatarImage src={leader.image} alt={`${leader.name} - ${leader.jobTitle} at DataOps Group`} />
                  <AvatarFallback>{leader.avatarFallback}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold">{leader.name}</h2>
                <p className="text-dataops-600 mb-2">{leader.jobTitle}</p>
                <p className="text-gray-600 text-sm">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </SemanticLayout>
  );
};

export default LeadershipPage;
