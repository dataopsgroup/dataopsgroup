
import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import BookCTA from '@/components/BookCTA';

const Index: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Approach />
      <BookCTA />
    </>
  );
};

export default Index;
