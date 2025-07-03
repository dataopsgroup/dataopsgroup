
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
import { Badge } from '@/components/ui/badge';
import OptimizedImage from '@/components/ui/optimized-image';
import DynamicThumbnail from '@/components/blog/DynamicThumbnail';
import { calculateReadingTime } from '@/utils/thumbnail-generator';

interface RelatedPostsProps {
  relatedPosts: BlogPost[];
  currentPostId: string;
}

const RelatedPosts = ({ relatedPosts, currentPostId }: RelatedPostsProps) => {
  // Enhanced sample blog posts with ALL orphaned posts for better cross-linking
  const samplePosts = [
    {
      id: "hiring-and-working-with-a-hubspot-consultant",
      title: "Hiring and Working with a HubSpot Consultant",
      excerpt: "Complete guide to finding, vetting, and working effectively with HubSpot consultants to ensure project success.",
      date: "2025-01-15",
      author: "Geoff Tucker", 
      category: "HubSpot Consulting",
      coverImage: "/lovable-uploads/377d96ba-a218-4a91-a0f5-446f6b5dc23b.png",
      content: ""
    },
    {
      id: "create-pro-level-hubspot-lead-score-model",
      title: "Create a Pro-Level HubSpot Lead Score Model",
      excerpt: "Build sophisticated lead scoring models that actually predict sales success using HubSpot's advanced features.",
      date: "2025-01-10",
      author: "Geoff Tucker",
      category: "Lead Management",
      coverImage: "/lovable-uploads/434400a1-30b5-4562-ae95-9a7ef18306ee.png", 
      content: ""
    },
    {
      id: "stop-buying-contact-lists",
      title: "Stop Buying Contact Lists: Here's Why It Always Fails",
      excerpt: "Purchased contact lists damage your reputation and deliver poor results. Learn sustainable lead generation alternatives.",
      date: "2025-01-05",
      author: "Geoff Tucker",
      category: "Lead Generation",
      coverImage: "/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.png",
      content: ""
    },
    {
      id: "silent-sales-marketing-divide",
      title: "The Silent Sales and Marketing Divide",
      excerpt: "How misaligned sales and marketing teams cost companies millions in lost revenue and missed opportunities.",
      date: "2024-12-20",
      author: "Geoff Tucker",
      category: "Revenue Operations",
      coverImage: "/lovable-uploads/72e7f6ab-b186-48c5-990f-fa0d94659fc6.png",
      content: ""
    },
    {
      id: "marketing-dashboards-fail",
      title: "Why Most Marketing Dashboards Fail",
      excerpt: "Common dashboard mistakes that lead to poor decisions and how to build dashboards that actually drive results.",
      date: "2024-12-15",
      author: "Geoff Tucker",
      category: "Analytics",
      coverImage: "/lovable-uploads/269cf082-a0cd-445e-8738-c2aee0f60336.png",
      content: ""
    },
    {
      id: "marketing-leaders-data-quality-crisis",
      title: "Marketing Leaders at Risk: The Data Quality Crisis",
      excerpt: "Poor data quality is putting marketing leaders' careers at risk. Learn how to identify and fix critical data issues.",
      date: "2024-12-10",
      author: "Geoff Tucker",
      category: "Data Quality",
      coverImage: "/lovable-uploads/38a717bc-5952-4682-b390-57a9de301649.png",
      content: ""
    },
    {
      id: "customer-segmentation-mistake-icp",
      title: "The \"Ideal Customer Profile\" Myth That's Killing Your Growth",
      excerpt: "Your ICP is likely not who you think it is. Luckily, there is a systematic way to find out who it really is.",
      date: "2025-04-07",
      author: "Geoff Tucker",
      category: "Data Strategy",
      coverImage: "/lovable-uploads/501d08c7-58a5-430c-8110-a93ff790b027.png",
      content: ""
    },
    {
      id: "customer-churn-blindspot",
      title: "The Customer Churn Blindspot 83% of Companies Miss",
      excerpt: "Most companies only track logo churn, missing revenue impact of downgrades and scope reductions. Learn the five dimensions that reveal your true retention picture.",
      date: "2025-04-16",
      author: "Geoff Tucker",
      category: "Revenue Operations",
      coverImage: "/lovable-uploads/ff953630-432d-46db-998e-cc20409e46d1.png",
      content: ""
    },
    {
      id: "crm-cleanup-plan",
      title: "Your CRM Is a Mess: Here's Your 90-Day Cleanup Plan",
      excerpt: "90-day CRM cleanup plan to boost accuracy, reduce costs, and enhance productivity. Learn how to audit, implement, and optimize for a data-driven approach.",
      date: "2025-04-05",
      author: "Geoff Tucker",
      category: "CRM Management",
      coverImage: "/lovable-uploads/5128a660-4319-43f7-8be9-8dae9c2576e1.png",
      content: ""
    },
    {
      id: "customer-acquisition-cost",
      title: "The Customer Acquisition Cost Calculation That Could Save Your Company",
      excerpt: "If you spend more to acquire customers than you earn from them, your doors will close. Learn CAC.",
      date: "2025-03-24",
      author: "Geoff Tucker",
      category: "Marketing Finance",
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
      category: "Marketing Operations",
      coverImage: "/lovable-uploads/51575736-affb-4097-ab47-c87b40af3b1b.png",
      content: ""
    }
  ];

  // Enhanced post selection with topic-based relevance
  const getTopicBasedPosts = (currentPost: string) => {
    // Define topic clusters for better cross-linking
    const topicClusters: Record<string, string[]> = {
      'hubspot': ['hiring-and-working-with-a-hubspot-consultant', 'create-pro-level-hubspot-lead-score-model', 'stop-buying-contact-lists'],
      'data-quality': ['data-enrichment-strategy', 'marketing-leaders-data-quality-crisis', 'crm-cleanup-plan'],
      'operations': ['marketing-operations-isnt-it', 'silent-sales-marketing-divide', 'customer-churn-blindspot'],
      'analytics': ['marketing-dashboards-fail', 'customer-acquisition-cost', 'customer-segmentation-mistake-icp']
    };

    // Find which cluster the current post belongs to
    let relevantPosts: BlogPost[] = [];
    for (const [topic, posts] of Object.entries(topicClusters)) {
      if (posts.includes(currentPost)) {
        relevantPosts = samplePosts.filter(post => posts.includes(post.id) && post.id !== currentPost);
        break;
      }
    }

    // Fill remaining slots with other high-value posts
    const remainingPosts = samplePosts.filter(post => 
      !relevantPosts.some(rp => rp.id === post.id) && post.id !== currentPost
    );
    
    return [...relevantPosts.slice(0, 3), ...remainingPosts.slice(0, 3)].slice(0, 6);
  };

  // Combine related posts with strategically selected sample posts
  const strategicPosts = getTopicBasedPosts(currentPostId);
  const allPosts = [...relatedPosts, ...strategicPosts]
    .filter(post => post.id !== currentPostId)
    .slice(0, 6);

  // Posts to display - prioritize topic relevance
  const postsToDisplay = allPosts.length > 0 ? allPosts : strategicPosts;

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
              
              // Use consistent date format: "January 5, 2025" (no leading zero for single-digit days)
              const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');
                
              return (
                <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <Link to={`/insights/${post.id}`} className="flex flex-col h-full">
                      <CardHeader className="pb-4">
                        {hasCoverImage ? (
                          <div className="w-full h-40 rounded-t-lg overflow-hidden relative">
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
                            {/* Category tag overlay with color coding */}
                            <Badge 
                              category={post.category}
                              className="absolute top-3 left-3"
                            >
                              {post.category}
                            </Badge>
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
                          {formattedDate}
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
      </div>
    </section>
  );
};

export default RelatedPosts;
