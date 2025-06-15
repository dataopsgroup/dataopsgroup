
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { logger } from '@/utils/production-logger';

interface AdminLinkProps {
  className?: string;
}

const AdminLink: React.FC<AdminLinkProps> = ({
  className = ''
}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isLocalhost = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  useEffect(() => {
    // Only allow admin access in development or localhost
    if (!isDevelopment && !isLocalhost) {
      return;
    }

    const checkAdminStatus = () => {
      const adminMode = localStorage.getItem('adminMode');
      const isAdminUser = adminMode === 'enabled';
      
      // Security logging for production monitoring
      if (isAdminUser && !isDevelopment && !isLocalhost) {
        logger.warn('Admin mode accessed in production environment');
      }
      
      setIsAdmin(isAdminUser);
    };
    
    checkAdminStatus();

    // Listen for storage changes (in case admin mode is toggled in another tab)
    window.addEventListener('storage', checkAdminStatus);
    return () => {
      window.removeEventListener('storage', checkAdminStatus);
    };
  }, [isDevelopment, isLocalhost]);

  const toggleAdminMode = () => {
    // Prevent admin mode in production
    if (!isDevelopment && !isLocalhost) {
      logger.warn('Admin mode toggle attempted in production');
      return;
    }

    const currentStatus = localStorage.getItem('adminMode');
    const newStatus = currentStatus === 'enabled' ? 'disabled' : 'enabled';
    
    localStorage.setItem('adminMode', newStatus);
    setIsAdmin(newStatus === 'enabled');
  };

  // Hide completely in production unless explicitly enabled
  if (!isDevelopment && !isLocalhost && !isAdmin) {
    return null;
  }

  return (
    <div className={className}>
      {isDevelopment && (
        <button 
          onClick={toggleAdminMode}
          className="text-xs text-gray-400 hover:text-gray-300"
          title="Toggle admin mode (development only)"
        >
          {isAdmin ? 'Disable Admin' : 'Enable Admin'}
        </button>
      )}
      {isAdmin && (
        <Link 
          to="/admin" 
          className="inline-flex items-center text-xs text-gray-400 hover:text-gray-300 ml-2"
          title="Admin Dashboard"
        >
          <Settings className="h-3 w-3 mr-1" />
          Admin
        </Link>
      )}
    </div>
  );
};

export default AdminLink;
