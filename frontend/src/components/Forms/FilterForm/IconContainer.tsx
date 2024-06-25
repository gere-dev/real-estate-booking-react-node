import { IconType } from 'react-icons';

export const IconContainer = ({ Icon }: { Icon: IconType }) => (
  <span className='text-primary text-2xl'>
    <Icon />
  </span>
);
