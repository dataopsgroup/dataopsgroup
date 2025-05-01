
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '@/data/blogPosts';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import CTABanner from '@/components/CTABanner';
import { format } from 'date-fns';

const BlogList = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Insights | DataOps Group</title>
        <meta 
          name="description" 
          content="Insights on HubSpot data management, marketing analytics, and revenue generation from DataOps Group." 
        />
      </Helmet>
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-white to-dataops-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Insights</span> & Resources
              </h1>
              <p className="text-lg text-gray-700">
                Expert advice on transforming your HubSpot ordeal into a revenue-generating machine
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                  <Link to={`/insights/${post.id}`} className="flex flex-col h-full">
                    <CardHeader className="pb-4">
                      <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-full h-48 object-cover rounded-t-lg mb-4" 
                      />
                      <CardTitle className="text-xl font-semibold hover:text-dataops-600 transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-gray-700">
                        {post.excerpt}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="text-sm text-gray-500">
                        {format(new Date(post.date), 'MMMM dd, yyyy')} · {post.author}
                      </div>
                      <span className="text-dataops-600 hover:text-dataops-800 font-medium text-sm">
                        Read More
                      </span>
                    </CardFooter>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;
