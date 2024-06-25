import { NAV_HEIGHT } from '@/constants';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const AuthContainer: React.FC<Props> = ({ children }) => {
  return <section className={`flex flex-col justify-center h-[calc(100vh-${NAV_HEIGHT}px)]`}> {children}</section>;
};

export default AuthContainer;
