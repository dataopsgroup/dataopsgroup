import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { BlogPost } from '@/types/blog';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/optimized-image';
import DynamicThumbnail from '@/components/blog/DynamicThumbnail';
import { calculateReadingTime } from '@/utils/thumbnail-generator';

interface RelatedPostsProps {
  relatedPosts: BlogPost[];
  currentPostId: string;
}

const RelatedPosts = ({ relatedPosts, currentPostId }: RelatedPostsProps) => {
  // Sample blog posts to use as fallback when not enough related posts
  const samplePosts = [
    {
      id: "sample-1",
      title: "Maximizing HubSpot ROI: A Complete Guide",
      excerpt: "Learn how to get the most value from your HubSpot investment with these proven strategies.",
      date: "2025-04-15",
      author: "Geoff Tucker",
      category: "Strategy",
      coverImage: "/lovable-uploads/1253bf24-1a66-4b00-8820-9eef25ca0db1.png",
      content: ""
    },
    {
      id: "sample-2",
      title: "Data Migration Best Practices for HubSpot",
      excerpt: "Avoid common pitfalls when migrating your marketing data to HubSpot with these expert tips.",
      date: "2025-03-22",
      author: "Geoff Tucker",
      category: "Migration",
      coverImage: "/lovable-uploads/79716a8a-35d3-4966-a6e9-1d0f21b5f732.png",
      content: ""
    },
    {
      id: "sample-3",
      title: "Aligning Sales and Marketing with HubSpot Workflows",
      excerpt: "Create seamless handoffs between marketing and sales teams with automated HubSpot workflows.",
      date: "2025-02-10",
      author: "Geoff Tucker",
      category: "Automation",
      coverImage: "/lovable-uploads/1e7d023c-3afe-475d-9c49-0d57ecb025d9.png",
      content: ""
    }
  ];

  // Posts to display (use actual related posts if available, otherwise use sample posts)
  const postsToDisplay = relatedPosts.length > 0 ? relatedPosts : samplePosts;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Continue Reading</h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {postsToDisplay.map((post, index) => {
              // Special case for the post that has a specific image
              const coverImage = post.id === "hidden-cost-of-failed-hubspot-implementations" 
                ? "/lovable-uploads/dc1dbbad-be41-4dbb-8dd8-381cc59a869c.png"
                : post.coverImage;
                
              const hasCoverImage = !!coverImage;
              const readingTime = calculateReadingTime(post.content);
                
              return (
                <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <Link to={`/insights/${post.id}`} className="flex flex-col h-full">
                      <CardHeader className="pb-4">
                        {hasCoverImage ? (
                          <div className="w-full h-40 rounded-t-lg overflow-hidden">
                            <OptimizedImage 
                              src={coverImage} 
                              alt={post.title} 
                              width={320}
                              height={160}
                              className="w-full h-full"
                              aspectRatio={2/1}
                              objectFit="cover"
                              loading={index === 0 ? "eager" : "lazy"}
                              placeholder="/placeholder.svg"
                            />
                          </div>
                        ) : (
                          <DynamicThumbnail
                            title={post.title}
                            category={post.category}
                            readingTime={readingTime}
                            className="w-full h-40 rounded-t-lg"
                          />
                        )}
                        <CardTitle className="text-base font-semibold hover:text-dataops-600 transition-colors mt-4">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <CardDescription className="text-gray-700 text-sm">
                          {post.excerpt.length > 100 
                            ? `${post.excerpt.substring(0, 100)}...` 
                            : post.excerpt}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center pt-2 border-t border-gray-100">
                        <div className="text-xs text-gray-500">
                          {format(new Date(post.date), 'MMMM d, yyyy')} · {post.author}
                        </div>
                        <span className="text-dataops-600 hover:text-dataops-800 font-medium text-sm">
                          Read More
                        </span>
                      </CardFooter>
                    </Link>
                  </Card>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="-left-4 lg:-left-12 bg-white" />
          <CarouselNext className="-right-4 lg:-right-12 bg-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default RelatedPosts;
