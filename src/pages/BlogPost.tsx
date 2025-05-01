import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '@/data/blogPosts';
import CTABanner from '@/components/CTABanner';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { BlogPost } from '@/types/blog';
import { format } from 'date-fns';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const BlogPostPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === postId);
    
    if (foundPost) {
      setPost(foundPost);
      // Get other posts (excluding current one) for the slider
      const otherPosts = blogPosts.filter(p => p.id !== postId);
      setRelatedPosts(otherPosts.slice(0, 3)); // Take up to 3 posts
    } else {
      toast({
        title: "Post not found",
        description: "We couldn't find the blog post you're looking for.",
        variant: "destructive"
      });
    }
  }, [postId, toast]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the blog post you're looking for.</p>
            <Button asChild>
              <Link to="/insights">Return to Insights</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{post.title} | DataOps Group</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <Navbar />
      <main className="flex-1">
        <article className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center text-gray-600 mb-6">
                  <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg" 
                />
              </header>

              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
              
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Ready to Fix Your HubSpot Ordeal?</h3>
                <p className="mb-6">
                  Stop throwing money at new leads when your existing contacts could be paying customers. 
                  Schedule a consultation to see how we can convert your HubSpot portal into a revenue engine.
                </p>
                <Button asChild className="bg-dataops-600 hover:bg-dataops-700">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts Slider */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Continue Reading</h2>
            
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {relatedPosts.length > 0 ? (
                  relatedPosts.map((relatedPost) => (
                    <CarouselItem key={relatedPost.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <Link to={`/insights/${relatedPost.id}`} className="flex flex-col h-full">
                          <CardHeader className="pb-4">
                            <img 
                              src={relatedPost.coverImage} 
                              alt={relatedPost.title} 
                              className="w-full h-40 object-cover rounded-t-lg mb-4" 
                            />
                            <CardTitle className="text-lg font-semibold hover:text-dataops-600 transition-colors">
                              {relatedPost.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <CardDescription className="text-gray-700 text-sm">
                              {relatedPost.excerpt.length > 100 
                                ? `${relatedPost.excerpt.substring(0, 100)}...` 
                                : relatedPost.excerpt}
                            </CardDescription>
                          </CardContent>
                          <CardFooter className="flex justify-between items-center pt-2 border-t border-gray-100">
                            <div className="text-xs text-gray-500">
                              {format(new Date(relatedPost.date), 'MMMM dd, yyyy')} · {relatedPost.author}
                            </div>
                            <span className="text-dataops-600 hover:text-dataops-800 font-medium text-sm">
                              Read More
                            </span>
                          </CardFooter>
                        </Link>
                      </Card>
                    </CarouselItem>
                  ))
                ) : (
                  // Fallback sample blog posts if we don't have enough real posts in the data
                  [
                    {
                      id: "sample-1",
                      title: "Maximizing HubSpot ROI: A Complete Guide",
                      excerpt: "Learn how to get the most value from your HubSpot investment with these proven strategies.",
                      date: "2025-04-15",
                      author: "Geoff Tucker",
                      category: "Strategy",
                      coverImage: "/lovable-uploads/1253bf24-1a66-4b00-8820-9eef25ca0db1.png"
                    },
                    {
                      id: "sample-2",
                      title: "Data Migration Best Practices for HubSpot",
                      excerpt: "Avoid common pitfalls when migrating your marketing data to HubSpot with these expert tips.",
                      date: "2025-03-22",
                      author: "Geoff Tucker",
                      category: "Migration",
                      coverImage: "/lovable-uploads/79716a8a-35d3-4966-a6e9-1d0f21b5f732.png"
                    },
                    {
                      id: "sample-3",
                      title: "Aligning Sales and Marketing with HubSpot Workflows",
                      excerpt: "Create seamless handoffs between marketing and sales teams with automated HubSpot workflows.",
                      date: "2025-02-10",
                      author: "Geoff Tucker",
                      category: "Automation",
                      coverImage: "/lovable-uploads/1e7d023c-3afe-475d-9c49-0d57ecb025d9.png"
                    }
                  ].map(samplePost => (
                    <CarouselItem key={samplePost.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <Link to={`/insights/${post?.id || ''}`} className="flex flex-col h-full">
                          <CardHeader className="pb-4">
                            <img 
                              src={samplePost.coverImage} 
                              alt={samplePost.title} 
                              className="w-full h-40 object-cover rounded-t-lg mb-4" 
                            />
                            <CardTitle className="text-lg font-semibold hover:text-dataops-600 transition-colors">
                              {samplePost.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <CardDescription className="text-gray-700 text-sm">
                              {samplePost.excerpt}
                            </CardDescription>
                          </CardContent>
                          <CardFooter className="flex justify-between items-center pt-2 border-t border-gray-100">
                            <div className="text-xs text-gray-500">
                              {format(new Date(samplePost.date), 'MMMM dd, yyyy')} · {samplePost.author}
                            </div>
                            <span className="text-dataops-600 hover:text-dataops-800 font-medium text-sm">
                              Read More
                            </span>
                          </CardFooter>
                        </Link>
                      </Card>
                    </CarouselItem>
                  ))
                )}
              </CarouselContent>
              <CarouselPrevious className="-left-4 lg:-left-12 bg-white" />
              <CarouselNext className="-right-4 lg:-right-12 bg-white" />
            </Carousel>
          </div>
        </section>
        
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
