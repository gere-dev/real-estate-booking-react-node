import { ACCOUNT_NAV } from '@/constants';
import { AccountNavCard } from './AccountNavCard';

export const AccountNavList = () => {
  return (
    <ul className='flex gap-4 md:flex-col mb-6 md:mr-6'>
      {ACCOUNT_NAV.map((nav, i) => (
        <AccountNavCard key={i} nav={nav} />
      ))}
    </ul>
  );
};
