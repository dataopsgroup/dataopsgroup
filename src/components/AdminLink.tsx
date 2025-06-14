import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';
interface AdminLinkProps {
  className?: string;
}
const AdminLink: React.FC<AdminLinkProps> = ({
  className = ''
}) => {
  // In a real app, you would check for admin status
  // This is a simple check that could be replaced with proper authentication
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    // Check for admin status - this is just a simple example
    // In production, use a proper authentication system
    const checkAdminStatus = () => {
      // For demo purposes - allows enabling admin mode with localStorage
      const adminMode = localStorage.getItem('adminMode');
      setIsAdmin(adminMode === 'enabled');
    };
    checkAdminStatus();

    // Listen for storage changes (in case admin mode is toggled in another tab)
    window.addEventListener('storage', checkAdminStatus);
    return () => {
      window.removeEventListener('storage', checkAdminStatus);
    };
  }, []);

  // Admin mode toggle - only visible in development
  const toggleAdminMode = () => {
    const newStatus = localStorage.getItem('adminMode') === 'enabled' ? 'disabled' : 'enabled';
    localStorage.setItem('adminMode', newStatus);
    setIsAdmin(newStatus === 'enabled');
  };
  if (!isAdmin && process.env.NODE_ENV !== 'development') {
    return null;
  }
  return;
};
export default AdminLink;