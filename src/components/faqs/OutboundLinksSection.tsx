
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface OutboundLink {
  title: string;
  description: string;
  url: string;
  isExternal?: boolean;
}

interface OutboundLinksSectionProps {
  links: OutboundLink[];
  title?: string;
  className?: string;
}

const OutboundLinksSection = ({ 
  links, 
  title = "Related Resources", 
  className = "" 
}: OutboundLinksSectionProps) => {
  return (
    <div className={`bg-gray-50 rounded-lg p-6 mt-8 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
        {title}
        <ExternalLink className="ml-2 h-5 w-5 text-gray-600" />
      </h3>
      
      <div className="space-y-4">
        {links.map((link, index) => (
          <div key={index} className="border-l-4 border-dataops-500 bg-white p-4 rounded-r-lg shadow-sm">
            <a
              href={link.url}
              target={link.isExternal ? "_blank" : "_self"}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="group block hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 group-hover:text-dataops-600 transition-colors duration-200">
                    {link.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-dataops-600 transition-colors duration-200 ml-2 mt-1 flex-shrink-0" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutboundLinksSection;
