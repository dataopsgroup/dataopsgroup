
import React from 'react';
import { RouteObject } from 'react-router-dom';
import ApiContent from '../pages/ApiContent';
import XmlContent from '../pages/XmlContent';

export const apiRoutes: RouteObject[] = [
  {
    path: "/api/content.json",
    Component: ApiContent,
  },
  {
    path: "/sitemap.xml",
    Component: XmlContent,
  }
];
