
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import { blogPosts } from '@/data/blog';

const CaseStudiesGrid = () => {
  // Filter blog posts that are categorized as case studies
  const caseStudyPosts = blogPosts.filter(post => 
    post.category?.toLowerCase() === 'case studies' || 
    post.category?.toLowerCase() === 'case study'
  );
  
  // Real case studies from blog posts with links to actual case study posts
  const caseStudies = caseStudyPosts.length >= 4 ? 
    caseStudyPosts.slice(0, 4).map(post => ({
      industry: post.category,
      title: post.title,
      description: post.excerpt,
      image: post.coverImage,
      postId: post.id,
      relatedLink: {
        text: 'Related insights',
        url: '/insights'
      }
    })) : 
    [
      // Add actual case studies from the blog posts
      ...caseStudyPosts.map(post => ({
        industry: post.category,
        title: post.title,
        description: post.excerpt,
        image: post.coverImage,
        postId: post.id,
        relatedLink: {
          text: 'Related insights',
          url: '/insights'
        }
      })),
      // Fill remaining spots with "More coming soon" placeholders
      ...Array(4 - caseStudyPosts.length).fill(null).map((_, i) => ({
        industry: 'Coming Soon',
        title: 'More Case Studies Coming Soon!',
        description: 'We are constantly working with new clients across various industries. Check back soon for more detailed case studies.',
        image: '/lovable-uploads/38a717bc-5952-4682-b390-57a9de301649.png', // Using a default image
        postId: null,
        relatedLink: {
          text: 'View all insights',
          url: '/insights'
        }
      }))
    ];

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {caseStudies.map((caseStudy, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 relative">
              <img 
                src={caseStudy.image} 
                alt={`${caseStudy.title} illustration`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 rounded-full bg-dataops-50 text-dataops-600 text-sm font-medium mb-3">
                {caseStudy.industry}
              </span>
              <h2 className="text-xl font-semibold mb-2">{caseStudy.title}</h2>
              <p className="text-gray-600 mb-4">
                {caseStudy.description}
              </p>
              <div className="flex justify-between items-center">
                {caseStudy.postId ? (
                  <Link to={`/insights/${caseStudy.postId}`}>
                    <Button>Read Case Study</Button>
                  </Link>
                ) : (
                  <Button disabled>Coming Soon</Button>
                )}
                <Link to={caseStudy.relatedLink.url} className="text-dataops-600 hover:underline flex items-center text-sm">
                  {caseStudy.relatedLink.text} <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
