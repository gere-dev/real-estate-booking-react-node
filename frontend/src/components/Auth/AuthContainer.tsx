import { NAV_HEIGHT } from '@/constants';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const AuthContainer: React.FC<Props> = ({ children }) => {
  return <section className={`max-width-container flex flex-col justify-center h-[calc(100vh-58.6px)]`}> {children}</section>;
};

export default AuthContainer;
