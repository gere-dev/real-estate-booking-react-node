import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const AuthContainer: React.FC<Props> = ({ children }) => {
  return <section className={`max-width-container flex flex-col justify-center h-dynamic`}> {children}</section>;
};

export default AuthContainer;
