import React from 'react';

interface Props {
  children: React.ReactNode;
}
const AuthContainer: React.FC<Props> = ({ children }) => {
  return <section className='flex flex-col'>{children}</section>;
};

export default AuthContainer;
