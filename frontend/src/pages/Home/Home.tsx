import React from 'react';
import { FilterForm } from '@/components';
import { HeroSection } from './HeroSection';

export const Home = () => {
  return (
    <Container>
      <FilterForm />
      <HeroSection />
    </Container>
  );
};

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className='max-width-container px-3 flex flex-col gap-12 md:flex-col-reverse md:mt-10 lg:h-[calc(100vh-58.6px)] lg:justify-center'>
      {children}
    </section>
  );
};
