
import React from 'react';
import { Download } from 'lucide-react';
import SampleChapterForm from './SampleChapterForm';

const BookSampleChapterSection = () => {
  return (
    <section id="sample-chapter-form" className="form-gradient py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full mb-6">
              <Download className="h-4 w-4 mr-2" />
              <span className="font-semibold">Free Sample Chapter</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Download Your Free Sample</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get the introduction and first chapter of "The CMO's Data Playbook" delivered to your inbox instantly. 
              See exactly how this framework can transform your marketing data strategy.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">What You'll Get:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Complete Introduction</strong>
                      <p className="text-gray-600 text-sm">Understanding the data transformation challenge</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Chapter 1: Data Origins</strong>
                      <p className="text-gray-600 text-sm">How to identify and audit your current data sources</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <SampleChapterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSampleChapterSection;
