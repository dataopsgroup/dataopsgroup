
import React from 'react';
import Index from '../pages/Index';
import ContactPage from '../pages/Contact';
import AboutPage from '../pages/AboutPage';
import ApproachPage from '../pages/ApproachPage';
import BookLandingPage from '../pages/BookLandingPage';
import NotFound from '../pages/NotFound';

// Define main routes for better organization
export const mainRoutes = [
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/approach",
    element: <ApproachPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/book",
    element: <BookLandingPage />,
    errorElement: <NotFound />,
  }
];
