
import React from 'react';
import { LineChart, Settings, TrendingUp, Users } from 'lucide-react';

// Only include services with corresponding routes in App.tsx
export const services = [
  {
    id: "analytics-bi",
    icon: React.createElement(LineChart, { className: "h-10 w-10 text-white" }),
    title: 'Analytics & BI',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    id: "dataops-implementation",
    icon: React.createElement(Settings, { className: "h-10 w-10 text-white" }),
    title: 'DataOps Implementation',
    description: 'Streamline your data operations with automated workflows and processes.',
    gradient: 'from-green-500 to-green-600'
  },
  {
    id: "team-training",
    icon: React.createElement(Users, { className: "h-10 w-10 text-white" }),
    title: 'HubSpot Training & Implementation',
    description: 'Expert training and implementation to maximize your HubSpot investment.',
    gradient: 'from-amber-500 to-amber-600'
  },
  {
    id: "marketing-operations-revops",
    icon: React.createElement(TrendingUp, { className: "h-10 w-10 text-white" }),
    title: 'Marketing Operations & RevOps',
    description: 'Optimize your marketing and revenue operations for improved performance and ROI.',
    gradient: 'from-pink-500 to-rose-600'
  }
];
