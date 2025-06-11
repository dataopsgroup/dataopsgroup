
import React from 'react';
import { Navigate } from 'react-router-dom';

export const contentRedirects = [
  // Whitepapers redirect
  {
    path: "/whitepapers",
    element: <Navigate to="/insights" replace />,
  },
  
  // New redirects for cleaned URLs
  {
    path: "/book-page",
    element: <Navigate to="/book" replace />,
  },
  
  // FAQ URL cleanups - redirect duplicate variants to canonical URLs
  {
    path: "/faqs/services-5",
    element: <Navigate to="/faqs/services" replace />,
  },
  {
    path: "/faqs/hubspot-services",
    element: <Navigate to="/faqs/services" replace />,
  },
  {
    path: "/faqs/hubspot-experts",
    element: <Navigate to="/faqs/experts" replace />,
  },
  {
    path: "/faqs/our-approach",
    element: <Navigate to="/faqs/approach" replace />,
  },
  {
    path: "/faqs/hubspot-modules",
    element: <Navigate to="/faqs/modules" replace />,
  },
  
  // Documentation redirect
  {
    path: "/documentation",
    element: <Navigate to="/" replace />,
  },
  
  // Old resources redirects
  {
    path: "/resources/checklist",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/resources/data-guide",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/resources/data-impact",
    element: <Navigate to="/insights" replace />,
  },
  
  // Old approach redirects
  {
    path: "/approach/data-driven",
    element: <Navigate to="/approach" replace />,
  },
  {
    path: "/methodology",
    element: <Navigate to="/approach" replace />,
  },
  {
    path: "/methodology/three-pillars",
    element: <Navigate to="/approach" replace />,
  },
  
  // Search page redirect
  {
    path: "/search",
    element: <Navigate to="/insights" replace />,
  }
];
