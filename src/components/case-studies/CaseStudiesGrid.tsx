
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blog';
import OptimizedImage from '@/components/ui/optimized-image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

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
      postId: post.id
    })) : 
    [
      // Add actual case studies from the blog posts
      ...caseStudyPosts.map(post => ({
        industry: post.category,
        title: post.title,
        description: post.excerpt,
        image: post.coverImage,
        postId: post.id
      })),
      // Fill remaining spots with "More coming soon" placeholders
      ...Array(4 - caseStudyPosts.length).fill(null).map((_, i) => ({
        industry: 'Coming Soon',
        title: 'More Case Studies Coming Soon!',
        description: 'We are constantly working with new clients across various industries. Check back soon for more detailed case studies.',
        image: '/lovable-uploads/38a717bc-5952-4682-b390-57a9de301649.png', // Using a default image
        postId: null
      }))
    ];

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {caseStudies.map((caseStudy, index) => (
          <Card key={index} className="overflow-hidden flex flex-col h-full">
            {/* Fixed height image container to ensure consistency */}
            <div className="h-48 w-full relative overflow-hidden">
              <OptimizedImage 
                src={caseStudy.image} 
                alt={`${caseStudy.title} illustration`}
                width={600}
                height={300}
                className="w-full h-full object-cover"
                loading={index < 2 ? "eager" : "lazy"}
                aspectRatio={2/1}
              />
            </div>
            
            {/* Content section with clear separation from image */}
            <div className="flex flex-col flex-grow">
              <CardHeader className="pt-6 pb-2">
                <span className="inline-block px-3 py-1 rounded-full bg-dataops-50 text-dataops-600 text-sm font-medium mb-2">
                  {caseStudy.industry}
                </span>
                <h2 className="text-xl font-semibold">{caseStudy.title}</h2>
              </CardHeader>
              
              <CardContent className="pb-2">
                <p className="text-gray-600 line-clamp-3">
                  {caseStudy.description}
                </p>
              </CardContent>
              
              <CardFooter className="pt-4 mt-auto">
                {caseStudy.postId ? (
                  <Link to={`/insights/${caseStudy.postId}`}>
                    <Button>Read Case Study</Button>
                  </Link>
                ) : (
                  <Button disabled>Coming Soon</Button>
                )}
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
