
import React, { lazy } from 'react';

const Index = lazy(() => import('../pages/Index'));
const ContactPage = lazy(() => import('../pages/Contact'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ApproachPage = lazy(() => import('../pages/ApproachPage'));
const BookLandingPage = lazy(() => import('../pages/BookLandingPage'));
const HubSpotExpertGuidePage = lazy(() => import('../pages/HubSpotExpertGuidePage'));
const NotFound = lazy(() => import('../pages/NotFound'));

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
  },
  {
    path: "/how-to-hire-a-hubspot-expert-in-2025",
    element: <HubSpotExpertGuidePage />,
    errorElement: <NotFound />,
  }
];
