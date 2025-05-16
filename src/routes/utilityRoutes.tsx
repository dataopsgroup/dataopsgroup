
import React from 'react';
import { Navigate } from 'react-router-dom';
import Leadership from '../pages/Leadership';
import Privacy from '../pages/Privacy';
import Sitemap from '../pages/Sitemap';
import GetStartedPage from '../pages/GetStartedPage';
import ThankYouPage from '../pages/ThankYouPage';
import NotFound from '../pages/NotFound';

export const utilityRoutes = [
  {
    path: "/leadership",
    element: <Leadership />,
    errorElement: <NotFound />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
    errorElement: <NotFound />,
  },
  {
    path: "/sitemap",
    element: <Sitemap />,
    errorElement: <NotFound />,
  },
  {
    path: "/get-started",
    element: <GetStartedPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/thank-you",
    element: <ThankYouPage />,
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
];
