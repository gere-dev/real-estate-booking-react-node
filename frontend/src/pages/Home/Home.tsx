import React, { useEffect } from 'react';
import { FilterForm } from '@/components';
import { HeroSection } from './HeroSection';
import { useAppDispatch, useAppSelector } from '@/state/hook';
import { fetchProperties } from '@/state/properties/propertiesSlice';

export const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  const properties = useAppSelector((state) => state.properties.properties);
  console.log(properties);
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
