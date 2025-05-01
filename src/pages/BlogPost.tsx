
import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CalendarIcon, UserIcon, ClockIcon, ArrowLeft, Tag as TagIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Sample blog post data - replace with your actual blog posts
const blogPosts = {
  '1': {
    id: '1',
    title: 'Maximizing ROI with DataOps Implementation',
    content: `
      <p>In today's data-driven business landscape, organizations are constantly seeking ways to maximize their return on investment (ROI) from data initiatives. DataOps implementation has emerged as a key strategy for achieving this goal.</p>
      
      <h2>What is DataOps?</h2>
      <p>DataOps is a collaborative data management practice focused on improving communication, integration, and automation of data flows between data managers and data consumers across an organization.</p>
      
      <p>By implementing DataOps principles, organizations can:</p>
      <ul>
        <li>Reduce time to insight by automating data pipelines</li>
        <li>Improve data quality through continuous testing and monitoring</li>
        <li>Enhance collaboration between data teams and business stakeholders</li>
        <li>Accelerate data-driven decision making across the enterprise</li>
      </ul>
      
      <h2>Case Study: Fortune 500 Implementation</h2>
      <p>One of our Fortune 500 clients was struggling with slow, manual data processing that limited their ability to make timely business decisions. After implementing our DataOps framework, they experienced:</p>
      
      <ul>
        <li>300% increase in data processing efficiency</li>
        <li>75% reduction in data errors</li>
        <li>85% faster time to market for new data products</li>
        <li>$4.2M annual cost savings from operational efficiencies</li>
      </ul>
      
      <p>The key to their success was a combination of cultural transformation, process optimization, and strategic technology implementation.</p>
      
      <h2>Best Practices for Implementation</h2>
      <p>Based on our experience with successful DataOps implementations, we recommend the following best practices:</p>
      
      <ol>
        <li>Start with a clear assessment of current data workflows and pain points</li>
        <li>Develop a DataOps strategy aligned with business objectives</li>
        <li>Implement automation incrementally, focusing on high-value use cases first</li>
        <li>Establish metrics to measure success and ROI</li>
        <li>Foster a culture of collaboration between data teams and business units</li>
      </ol>
      
      <p>By following these practices, organizations can maximize their ROI on DataOps implementation and drive significant business value.</p>
    `,
    author: 'John Smith',
    date: 'April 15, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
    category: 'DataOps',
    tags: ['DataOps', 'ROI', 'Implementation', 'Case Study'],
  },
  '2': {
    id: '2',
    title: 'The Future of Data Architecture in 2025',
    content: `
      <p>As organizations continue to navigate the ever-evolving data landscape, staying ahead of emerging trends in data architecture becomes crucial for maintaining competitive advantage.</p>
      
      <h2>Key Trends Shaping Data Architecture</h2>
      <p>Several transformative trends are reshaping how enterprises design and implement their data architectures:</p>
      
      <h3>1. Decentralized Data Mesh Architectures</h3>
      <p>The shift from monolithic data platforms to domain-oriented, distributed data ownership models is accelerating. Data mesh architectures treat data as a product, with domain teams taking full responsibility for their data pipelines, quality, and governance.</p>
      
      <h3>2. Real-time Data Processing at Scale</h3>
      <p>The demand for real-time insights is driving adoption of event-driven architectures and stream processing technologies. Organizations are increasingly implementing change data capture (CDC) and stream processing frameworks to enable instantaneous data analysis.</p>
      
      <h3>3. AI-Driven Data Management</h3>
      <p>Artificial intelligence is revolutionizing data architecture through automated data classification, anomaly detection, and predictive quality management. Self-healing data pipelines that can detect and resolve issues autonomously are becoming the new standard.</p>
      
      <h2>Implications for Business Intelligence</h2>
      <p>These architectural shifts are profoundly impacting business intelligence capabilities:</p>
      
      <ul>
        <li>Democratization of data access across the organization</li>
        <li>Reduced time-to-insight through automated processing</li>
        <li>Enhanced data quality and reliability</li>
        <li>More agile response to changing business requirements</li>
      </ul>
      
      <h2>Preparing for the Future</h2>
      <p>To position your organization for success in this evolving landscape, consider these strategic actions:</p>
      
      <ol>
        <li>Invest in data literacy programs to upskill teams across the enterprise</li>
        <li>Implement data governance frameworks that balance centralized standards with domain autonomy</li>
        <li>Evaluate your technology stack against emerging requirements for speed, scale, and flexibility</li>
        <li>Foster collaboration between data engineering, analytics, and business teams</li>
      </ol>
      
      <p>Organizations that embrace these architectural shifts will be well-positioned to leverage their data assets for competitive advantage in the coming years.</p>
    `,
    author: 'Sarah Johnson',
    date: 'March 28, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000',
    category: 'Data Architecture',
    tags: ['Data Architecture', 'Trends', 'Business Intelligence'],
  },
  '3': {
    id: '3',
    title: 'Best Practices for Data Governance',
    content: `
      <p>Effective data governance is the foundation of any successful data strategy. Organizations that implement robust governance frameworks can ensure data quality, compliance, and security while maximizing the value of their data assets.</p>
      
      <h2>Core Components of Data Governance</h2>
      <p>A comprehensive data governance program should include the following key components:</p>
      
      <h3>1. Data Ownership and Stewardship</h3>
      <p>Clearly defined roles and responsibilities for data ownership are essential. Data stewards should be empowered to oversee data quality, usage, and compliance within their domains.</p>
      
      <h3>2. Data Quality Management</h3>
      <p>Implementing processes and tools for measuring, monitoring, and improving data quality ensures that business decisions are based on reliable information.</p>
      
      <h3>3. Metadata Management</h3>
      <p>A robust metadata repository provides context for data assets, enabling users to understand the meaning, origin, and usage of data across the organization.</p>
      
      <h3>4. Data Security and Privacy</h3>
      <p>Protecting sensitive data through access controls, encryption, and anonymization techniques is critical for regulatory compliance and risk management.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Successfully implementing data governance requires a balanced approach:</p>
      
      <ul>
        <li>Start small with high-value use cases to demonstrate quick wins</li>
        <li>Align governance initiatives with business objectives</li>
        <li>Foster a data-centric culture through education and communication</li>
        <li>Leverage automation to reduce the governance burden</li>
        <li>Regularly measure and communicate governance outcomes</li>
      </ul>
      
      <h2>Common Pitfalls to Avoid</h2>
      <p>Many organizations encounter challenges when implementing data governance:</p>
      
      <ol>
        <li>Focusing too heavily on tools rather than people and processes</li>
        <li>Creating overly rigid governance structures that impede innovation</li>
        <li>Failing to secure executive sponsorship and stakeholder buy-in</li>
        <li>Not aligning governance with business value creation</li>
        <li>Treating governance as a one-time project rather than an ongoing program</li>
      </ol>
      
      <p>By avoiding these pitfalls and following best practices, organizations can establish effective data governance frameworks that enable responsible data usage while driving business value.</p>
    `,
    author: 'Michael Lee',
    date: 'March 10, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000',
    category: 'Data Governance',
    tags: ['Data Governance', 'Best Practices', 'Implementation'],
  }
};

const BlogPost = () => {
  const { postId } = useParams();
  
  // If post doesn't exist, redirect to blog list
  if (!postId || !blogPosts[postId as keyof typeof blogPosts]) {
    return <Navigate to="/blog" replace />;
  }
  
  const post = blogPosts[postId as keyof typeof blogPosts];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <article className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-dataops-600 hover:text-dataops-700 mb-6 gap-1 group">
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              <span>Back to all posts</span>
            </Link>
            
            <header className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-dataops-50 text-dataops-600 text-sm font-medium mb-3">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-4">
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
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="flex items-center gap-1 text-gray-700">
                    <TagIcon size={16} />
                    <span>Tags:</span>
                  </div>
                  {post.tags.map(tag => (
                    <Link to={`/blog?tag=${tag}`} key={tag}>
                      <Badge variant="outline" className="bg-gray-50 hover:bg-gray-100 cursor-pointer">
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}
              
              <div className="aspect-[21/9] overflow-hidden rounded-lg mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </header>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
