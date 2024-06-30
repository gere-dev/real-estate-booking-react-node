import { AccountNav } from './AccountNav';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export const AccountContainer: FC<Props> = ({ children }: Props) => {
  return (
    <section className='max-width-container py-8  flex flex-col md:flex-row '>
      <AccountNav />
      {children}
    </section>
  );
};
