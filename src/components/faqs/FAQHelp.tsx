
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone } from 'lucide-react';

const FAQHelp = () => {
  return (
    <div className="bg-gradient-to-br from-dataops-50 to-white border border-dataops-100 rounded-lg p-8">
      <h2 className="text-2xl font-semibold text-dataops-900 mb-4 text-center">
        Still Have Questions?
      </h2>
      <p className="text-gray-700 text-center mb-8">
        Can't find what you're looking for? We're here to help with personalized answers 
        about your specific situation.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <MessageCircle className="h-8 w-8 text-dataops-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get instant answers from our team
            </p>
            <Link 
              to="/contact" 
              className="text-dataops-600 hover:text-dataops-700 font-medium text-sm"
            >
              Start Chat →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Mail className="h-8 w-8 text-dataops-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-sm text-gray-600 mb-4">
              Detailed answers within 24 hours
            </p>
            <a 
              href="mailto:hello@dataopsgroup.com" 
              className="text-dataops-600 hover:text-dataops-700 font-medium text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Email →
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Phone className="h-8 w-8 text-dataops-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Schedule Call</h3>
            <p className="text-sm text-gray-600 mb-4">
              Free consultation with an expert
            </p>
            <Link 
              to="/contact" 
              className="text-dataops-600 hover:text-dataops-700 font-medium text-sm"
            >
              Book Call →
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Or browse our{' '}
          <Link to="/insights" className="text-dataops-600 hover:text-dataops-700 underline">
            latest insights
          </Link>{' '}
          and{' '}
          <Link to="/case-studies" className="text-dataops-600 hover:text-dataops-700 underline">
            case studies
          </Link>{' '}
          for more answers.
        </p>
      </div>
    </div>
  );
};

export default FAQHelp;
