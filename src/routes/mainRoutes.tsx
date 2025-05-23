
import React from 'react';
import Home from '../pages/Home';
import ContactPage from '../pages/Contact';
import AboutPage from '../pages/AboutPage';
import ApproachPage from '../pages/ApproachPage';
import BookLandingPage from '../pages/BookLandingPage';
import HubSpotAssessmentResultsPage from '../pages/HubSpotAssessmentResultsPage';
import NotFound from '../pages/NotFound';

// Define main routes for better organization
export const mainRoutes = [
  {
    path: "/",
    element: <Home />,
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
  },
  {
    path: "/hubspot-assessment-results",
    element: <HubSpotAssessmentResultsPage />,
    errorElement: <NotFound />,
  }
];
