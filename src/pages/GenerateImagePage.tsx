//comment//
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import BlogImageGenerator from '@/components/blog/BlogImageGenerator';

const GenerateImagePage = () => {
  return (
    <SemanticLayout>
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Blog Image Generator
            </h1>
            <p className="text-lg text-gray-600">
              Generate professional blog cover images for your content
            </p>
          </div>
          <BlogImageGenerator />
        </div>
      </div>
    </SemanticLayout>
  );
};

export default GenerateImagePage;
