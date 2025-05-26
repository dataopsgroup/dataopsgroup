
import React from 'react';
import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import ContactPage from '../pages/Contact';
import AboutPage from '../pages/AboutPage';
import ApproachPage from '../pages/ApproachPage';
import BookLandingPage from '../pages/BookLandingPage';
import HubSpotAssessmentResultsPage from '../pages/HubSpotAssessmentResultsPage';
import NotFound from '../pages/NotFound';

// Define main routes - use Component property for proper React context
export const mainRoutes: RouteObject[] = [
  {
    path: "/",
    Component: Home,
    errorElement: React.createElement(NotFound),
  },
  {
    path: "/contact",
    Component: ContactPage,
    errorElement: React.createElement(NotFound),
  },
  {
    path: "/about",
    Component: AboutPage,
    errorElement: React.createElement(NotFound),
  },
  {
    path: "/approach",
    Component: ApproachPage,
    errorElement: React.createElement(NotFound),
  },
  {
    path: "/book",
    Component: BookLandingPage,
    errorElement: React.createElement(NotFound),
  },
  {
    path: "/hubspot-assessment-results",
    Component: HubSpotAssessmentResultsPage,
    errorElement: React.createElement(NotFound),
  }
];
