import { ACCOUNT_NAV } from '@/constants';
import { AccountNavList } from './AccountNavList';

export const AccountNav = () => {
  return (
    <>
      <ul className='flex gap-4 md:flex-col mb-6 md:mr-6'>
        {ACCOUNT_NAV.map((nav, i) => (
          <AccountNavList key={i} nav={nav} />
        ))}
      </ul>
    </>
  );
};
