
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
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/optimized-image';
import DynamicThumbnail from '@/components/blog/DynamicThumbnail';
import { calculateReadingTime } from '@/utils/thumbnail-generator';

interface RelatedPostsProps {
  relatedPosts: BlogPost[];
  currentPostId: string;
}

const RelatedPosts = ({ relatedPosts, currentPostId }: RelatedPostsProps) => {
  // Enhanced sample blog posts with better variety and topics
  const samplePosts = [
    {
      id: "customer-segmentation-mistake-icp",
      title: "The \"Ideal Customer Profile\" Myth That's Killing Your Growth",
      excerpt: "Your ICP is likely not who you think it is. Luckily, there is a systematic way to find out who it really is.",
      date: "2025-04-07",
      author: "Geoff Tucker",
      category: "Strategy",
      coverImage: "/lovable-uploads/501d08c7-58a5-430c-8110-a93ff790b027.png",
      content: ""
    },
    {
      id: "customer-churn-blindspot",
      title: "The Customer Churn Blindspot 83% of Companies Miss",
      excerpt: "Most companies only track logo churn, missing revenue impact of downgrades and scope reductions. Learn the five dimensions that reveal your true retention picture.",
      date: "2025-04-16",
      author: "Geoff Tucker",
      category: "Analytics",
      coverImage: "/lovable-uploads/ff953630-432d-46db-998e-cc20409e46d1.png",
      content: ""
    },
    {
      id: "crm-cleanup-plan",
      title: "Your CRM Is a Mess: Here's Your 90-Day Cleanup Plan",
      excerpt: "90-day CRM cleanup plan to boost accuracy, reduce costs, and enhance productivity. Learn how to audit, implement, and optimize for a data-driven approach.",
      date: "2025-04-05",
      author: "Geoff Tucker",
      category: "Operations",
      coverImage: "/lovable-uploads/5128a660-4319-43f7-8be9-8dae9c2576e1.png",
      content: ""
    },
    {
      id: "customer-acquisition-cost",
      title: "The Customer Acquisition Cost Calculation That Could Save Your Company",
      excerpt: "If you spend more to acquire customers than you earn from them, your doors will close. Learn CAC.",
      date: "2025-03-24",
      author: "Geoff Tucker",
      category: "Finance",
      coverImage: "/lovable-uploads/2ea19d63-b482-4702-ace9-64b05202fd26.png",
      content: ""
    },
    {
      id: "data-enrichment-strategy",
      title: "Why Your Data Enrichment Strategy Isn't Working",
      excerpt: "Improve your data enrichment strategy by fixing validation, maintenance, & quality checks. Avoid wasted budgets and boost lead quality with proven tactics.",
      date: "2025-03-10",
      author: "Geoff Tucker",
      category: "Data Quality",
      coverImage: "/lovable-uploads/252fb89b-1bcd-41b0-83eb-ce0f35b6784b.png",
      content: ""
    },
    {
      id: "marketing-operations-isnt-it",
      title: "Marketing Operations Isn't IT: Defining Clear Boundaries",
      excerpt: "Marketing Ops gets confused with IT roles. Learn the key differences in focus, metrics, tools, and skills to establish clear organizational boundaries.",
      date: "2025-02-04",
      author: "Geoff Tucker",
      category: "Strategy",
      coverImage: "/lovable-uploads/51575736-affb-4097-ab47-c87b40af3b1b.png",
      content: ""
    }
  ];

  // Combine actual related posts with sample posts, removing current post
  const allPosts = [...relatedPosts, ...samplePosts]
    .filter(post => post.id !== currentPostId)
    .slice(0, 6); // Show 6 related posts instead of 3

  // Posts to display
  const postsToDisplay = allPosts.length > 0 ? allPosts : samplePosts.filter(post => post.id !== currentPostId).slice(0, 6);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Continue Reading</h2>
        
        <Carousel className="w-full max-w-6xl mx-auto">
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
                        <h3 className="!text-base font-semibold hover:text-dataops-600 transition-colors mt-4 leading-tight">
                          {post.title}
                        </h3>
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
                          {format(new Date(post.date), 'MMMM d, yyyy')}
                        </div>
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

        {/* Additional internal links section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Explore more insights on <Link to="/insights" className="text-dataops-600 hover:text-dataops-800 font-medium">our blog</Link> or 
            learn about our <Link to="/services" className="text-dataops-600 hover:text-dataops-800 font-medium">HubSpot consulting services</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
