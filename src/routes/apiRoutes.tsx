
import React from 'react';
import ApiContent from '../pages/ApiContent';
import XmlContent from '../pages/XmlContent';

export const apiRoutes = [
  {
    path: "/api/content.json",
    element: <ApiContent />,
  },
  {
    path: "/sitemap.xml",
    element: <XmlContent />,
  }
];
