import { IconType } from 'react-icons';
import { IconContainer } from './IconContainer';
interface Props {
  children: React.ReactNode;
  Icon: IconType;
  label: string;
  htmlFor: string;
}
export const FieldContainer = ({ children, Icon, label, htmlFor }: Props) => (
  <span className='border-b lg:border-b-0 lg:border-r lg:pr-2 w-full flex gap-3 items-center py-3 '>
    <IconContainer Icon={Icon} />
    <span className='w-full'>
      {children}
      <label className='hidden lg:block text-gray-600 mt-3' htmlFor={htmlFor}>
        {label}
      </label>
    </span>
  </span>
);
