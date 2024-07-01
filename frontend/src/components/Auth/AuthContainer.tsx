import { NAV_HEIGHT } from '@/constants';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const height = `calc(100vh-${NAV_HEIGHT})`;
export const AuthContainer: React.FC<Props> = ({ children }) => {
  return <section className={`max-width-container flex flex-col justify-center h-dynamic`}> {children}</section>;
};

export default AuthContainer;
