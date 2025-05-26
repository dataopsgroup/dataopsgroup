
import React from 'react';
import BlogList from '../pages/BlogList';
import BlogPost from '../pages/BlogPost';
import CaseStudiesPage from '../pages/CaseStudies';
import Whitepapers from '../pages/Whitepapers';
import FAQs from '../pages/FAQs';
import NotFound from '../pages/NotFound';

export const insightRoutes = [
  {
    path: "/insights",
    element: <BlogList />,
    errorElement: <NotFound />,
  },
  {
    path: "/insights/:postId",
    element: <BlogPost />,
    errorElement: <NotFound />,
  },
  {
    path: "/case-studies",
    element: <CaseStudiesPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/whitepapers",
    element: <Whitepapers />,
    errorElement: <NotFound />,
  },
  {
    path: "/faqs",
    element: <FAQs />,
    errorElement: <NotFound />,
  }
];
