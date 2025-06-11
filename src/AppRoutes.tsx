
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '@/routes/Index';
import { SemanticLayout } from '@/components/layout/SemanticLayout';

const AppRoutes: React.FC = () => {
  return (
    <SemanticLayout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </SemanticLayout>
  );
};

export default AppRoutes;
