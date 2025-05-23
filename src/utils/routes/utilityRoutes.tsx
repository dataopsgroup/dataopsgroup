
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sitemap from '@/pages/Sitemap';

const UtilityRoutes = () => {
  return (
    <Routes>
      <Route path="/sitemap" element={<Sitemap />} />
    </Routes>
  );
};

export default UtilityRoutes;
