
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';

interface RelatedArticle {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  readTime?: string;
  isService?: boolean;
}

interface RelatedArticlesProps {
  currentPostId?: string;
  category?: string;
  className?: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ 
  currentPostId = '',
  category = '',
  className = ''
}) => {
  const allArticles: RelatedArticle[] = [
    {
      title: 'Customer Churn Blindspot 83% of Companies Miss',
      excerpt: 'Discover the five critical dimensions that reveal your true customer retention picture and impact revenue.',
      href: '/insights/customer-churn-blindspot',
      category: 'Analytics',
      readTime: '8 min'
    },
    {
      title: 'Your CRM Is a Mess: Here\'s Your 90-Day Cleanup Plan',
      excerpt: 'Transform your messy CRM into a revenue-driving machine with our proven 90-day cleanup methodology.',
      href: '/insights/crm-cleanup-plan',
      category: 'Operations',
      readTime: '12 min'
    },
    {
      title: 'Customer Acquisition Cost That Could Save Your Company',
      excerpt: 'Learn the comprehensive CAC calculation framework that prevents unprofitable growth.',
      href: '/insights/customer-acquisition-cost',
      category: 'Finance',
      readTime: '10 min'
    },
    {
      title: 'How to Hire a HubSpot Expert in 2025',
      excerpt: 'Complete guide to finding, evaluating, and hiring the right HubSpot consultant for your business.',
      href: '/guides/hubspot-expert',
      category: 'Guides',
      readTime: '15 min',
      isService: true
    },
    {
      title: 'Data Enrichment Strategy That Actually Works',
      excerpt: 'Fix validation, maintenance, and quality checks to dramatically boost lead quality and conversion.',
      href: '/insights/data-enrichment-strategy',
      category: 'Data Quality',
      readTime: '7 min'
    },
    {
      title: 'Marketing Operations Isn\'t IT: Defining Clear Boundaries',
      excerpt: 'Understand key differences to establish clear organizational boundaries and improve collaboration.',
      href: '/insights/marketing-operations-isnt-it',
      category: 'Strategy',
      readTime: '6 min'
    }
  ];

  // Filter out current post and prioritize same category
  const filteredArticles = allArticles.filter(article => 
    !article.href.includes(currentPostId)
  );

  // Sort to prioritize same category, then by service articles
  const sortedArticles = filteredArticles.sort((a, b) => {
    if (a.category === category && b.category !== category) return -1;
    if (b.category === category && a.category !== category) return 1;
    if (a.isService && !b.isService) return -1;
    if (b.isService && !a.isService) return 1;
    return 0;
  });

  // Show max 3 related articles
  const displayArticles = sortedArticles.slice(0, 3);

  if (displayArticles.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 bg-white border-t border-gray-200 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {displayArticles.map((article, index) => (
              <Link
                key={index}
                to={article.href}
                className="group block bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-md border border-gray-200 hover:border-dataops-300 transition-all duration-200"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-dataops-700 bg-dataops-100 rounded">
                    <Tag className="h-3 w-3 mr-1" />
                    {article.category}
                  </span>
                  {article.readTime && (
                    <span className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-dataops-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center text-dataops-600 font-medium text-sm group-hover:text-dataops-700">
                  <span>Read article</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/insights"
              className="inline-flex items-center text-dataops-600 hover:text-dataops-700 font-medium"
            >
              View all insights
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
