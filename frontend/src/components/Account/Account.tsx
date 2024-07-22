import { FC, ReactNode } from 'react';
import { AccountNavList } from '@/components';

interface Props {
  children: ReactNode;
}
export const Account: FC<Props> = ({ children }: Props) => {
  return (
    <section className='max-width-container py-8  flex flex-col md:flex-row '>
      <AccountNavList />
      {children}
    </section>
  );
};
