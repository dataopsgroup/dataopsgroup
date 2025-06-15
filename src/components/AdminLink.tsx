
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';

// SECURITY WARNING: This component uses localStorage for admin authentication
// This is NOT secure for production use and should be replaced with proper authentication
// TODO: Replace with Supabase auth or other secure authentication system

interface AdminLinkProps {
  className?: string;
}

const AdminLink: React.FC<AdminLinkProps> = ({
  className = ''
}) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // SECURITY WARNING: This is a demo implementation only
    // In production, use proper authentication with secure session management
    const checkAdminStatus = () => {
      // Check for admin status with security logging
      const adminMode = localStorage.getItem('adminMode');
      const isAdminUser = adminMode === 'enabled';
      
      // Log security event for monitoring
      if (isAdminUser && window.location.hostname !== 'localhost') {
        console.warn('Admin mode accessed in production environment');
      }
      
      setIsAdmin(isAdminUser);
    };
    
    checkAdminStatus();

    // Listen for storage changes (in case admin mode is toggled in another tab)
    window.addEventListener('storage', checkAdminStatus);
    return () => {
      window.removeEventListener('storage', checkAdminStatus);
    };
  }, []);

  // Enhanced admin mode toggle with security warnings
  const toggleAdminMode = () => {
    const currentStatus = localStorage.getItem('adminMode');
    const newStatus = currentStatus === 'enabled' ? 'disabled' : 'enabled';
    
    // Security warning for production
    if (newStatus === 'enabled' && window.location.hostname !== 'localhost') {
      console.warn('SECURITY WARNING: Admin mode enabled in production');
    }
    
    localStorage.setItem('adminMode', newStatus);
    setIsAdmin(newStatus === 'enabled');
  };

  // Hide admin link in production unless explicitly enabled
  if (!isAdmin && process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className={className}>
      {process.env.NODE_ENV === 'development' && (
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
