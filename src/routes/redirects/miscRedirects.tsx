
import React from 'react';
import { Navigate } from 'react-router-dom';

export const miscRedirects = [
  // Case studies and testimonials
  {
    path: "/testimonials",
    element: <Navigate to="/case-studies" replace />,
  },
  {
    path: "/hubspot-case-studies",
    element: <Navigate to="/case-studies" replace />,
  },
  
  // Contact and booking
  {
    path: "/book-meeting",
    element: <Navigate to="/contact" replace />,
  },
  
  // Leadership and terms
  {
    path: "/leadership/terms-fee",
    element: <Navigate to="/" replace />,
  },
  
  // Tech and company pages
  {
    path: "/our-tech-stack",
    element: <Navigate to="/" replace />,
  }
];
