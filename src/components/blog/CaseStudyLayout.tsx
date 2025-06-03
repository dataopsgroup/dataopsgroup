
import React from 'react';
import { BlogPost } from '@/types/blog';
import CaseStudyPage from '@/components/case-study/CaseStudyPage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CaseStudyLayoutProps {
  post: BlogPost;
}

const CaseStudyLayout = ({ post }: CaseStudyLayoutProps) => {
  return (
    <>
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button 
            variant="outline" 
            className="bg-gray-700 text-white hover:bg-gray-800 hover:text-orange-500 transition-colors" 
            asChild
          >
            <Link to="/case-studies">Back to Case Studies</Link>
          </Button>
        </div>
      </div>
      <CaseStudyPage post={post} />
    </>
  );
};

export default CaseStudyLayout;
