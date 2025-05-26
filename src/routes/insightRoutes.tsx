
import React from 'react';
import { RouteObject } from 'react-router-dom';
import BlogList from '../pages/BlogList';
import BlogPost from '../pages/BlogPost';
import CaseStudiesPage from '../pages/CaseStudies';
import FAQs from '../pages/FAQs';
import NotFound from '../pages/NotFound';

export const insightRoutes: RouteObject[] = [
  {
    path: "/insights",
    Component: BlogList,
    errorElement: React.createElement(NotFound),
  },
  {
    path: "/insights/:postId",
    Component: BlogPost,
    errorElement: React.createElement(NotFound),
  },
  {
    path: "/case-studies",
    Component: CaseStudiesPage,
    errorElement: React.createElement(NotFound),
  },
  {
    path: "/faqs",
    Component: FAQs,
    errorElement: React.createElement(NotFound),
  }
];
