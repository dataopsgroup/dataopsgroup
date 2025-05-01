
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CalendarIcon, UserIcon, ClockIcon } from 'lucide-react';

// Sample blog post data - replace with your actual data
const blogPosts = [
  {
    id: '1',
    title: 'Maximizing ROI with DataOps Implementation',
    excerpt: 'Learn how our DataOps implementation strategy helped a Fortune 500 company increase their data processing efficiency by 300%.',
    author: 'John Smith',
    date: 'April 15, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
    category: 'DataOps',
  },
  {
    id: '2',
    title: 'The Future of Data Architecture in 2025',
    excerpt: 'Explore emerging trends in data architecture and how they will shape business intelligence in the coming years.',
    author: 'Sarah Johnson',
    date: 'March 28, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000',
    category: 'Data Architecture',
  },
  {
    id: '3',
    title: 'Best Practices for Data Governance',
    excerpt: 'Discover the key components of an effective data governance framework and how to implement them in your organization.',
    author: 'Michael Lee',
    date: 'March 10, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000',
    category: 'Data Governance',
  }
];

const BlogList = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights from <span className="gradient-text">DataOps Group</span>
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Expert perspectives on data operations, architecture, and analytics
            </p>
            
            <div className="space-y-12">
              {blogPosts.map((post) => (
                <article key={post.id} className="border-b border-gray-200 pb-12 last:border-0">
                  <Link to={`/blog/${post.id}`} className="group">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-dataops-50 text-dataops-600 text-sm font-medium mb-3">
                          {post.category}
                        </span>
                        <h2 className="text-2xl font-bold group-hover:text-dataops-600 mb-3 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 gap-4">
                          <div className="flex items-center gap-1">
                            <UserIcon size={16} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CalendarIcon size={16} />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ClockIcon size={16} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;
