
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkIcon } from 'lucide-react';

interface SitemapLinkProps {
  to: string;
  label: string;
  external?: boolean;
}

const SitemapLink: React.FC<SitemapLinkProps> = ({ to, label, external = false }) => {
  const linkClasses = "text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link";
  const ariaLabel = `${label} Page`;
  
  return (
    <li>
      {external ? (
        <a 
          href={to} 
          className={linkClasses}
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
          <span className="mobile-text">{label}</span>
        </a>
      ) : (
        <Link 
          to={to} 
          className={linkClasses}
          aria-label={ariaLabel}
        >
          <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
          <span className="mobile-text">{label}</span>
        </Link>
      )}
    </li>
  );
};

export default SitemapLink;
