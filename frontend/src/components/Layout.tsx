import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '@/components';

export const Layout: React.FC = () => (
  <>
    <Nav />
    <main>
      <Outlet />
    </main>
  </>
);
