
import React from 'react';
import { Route } from 'react-router-dom';
import HubSpotAssessment from '@/pages/HubSpotAssessment';
import HubSpotAssessmentResultsPage from '@/pages/HubSpotAssessmentResultsPage';
import GetStartedPage from '@/pages/GetStartedPage';
import ThankYouPage from '@/pages/ThankYouPage';
import ContactThankYouPage from '@/pages/ContactThankYouPage';
import SEODashboard from '@/pages/SEODashboard';
import Sitemap from '@/pages/Sitemap';
import GenerateImagePage from '@/pages/GenerateImagePage';

export const utilityRoutes = [
  <Route key="assessment" path="/assessment" element={<HubSpotAssessment />} />,
  <Route key="assessment-results" path="/assessment/results" element={<HubSpotAssessmentResultsPage />} />,
  <Route key="get-started" path="/get-started" element={<GetStartedPage />} />,
  <Route key="thank-you" path="/thank-you" element={<ThankYouPage />} />,
  <Route key="contact-thank-you" path="/contact/thank-you" element={<ContactThankYouPage />} />,
  <Route key="seo-dashboard" path="/admin/seo" element={<SEODashboard />} />,
  <Route key="sitemap-page" path="/sitemap" element={<Sitemap />} />,
  <Route key="generate-image" path="/generate-image" element={<GenerateImagePage />} />,
];
