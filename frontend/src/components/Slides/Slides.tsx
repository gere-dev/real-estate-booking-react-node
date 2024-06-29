import { ComponentProps } from 'react';
import { IconType } from 'react-icons';
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';

interface Props {
  images?: [string];
}
export const Slides: React.FC<Props> = ({ images }) => {
  if (!images) return <></>;
  return (
    <section className='absolute top-0 left-0 w-full h-full bg-white flex justify-center items-center'>
      <figure className='relative'>
        <Button customClass='absolute top-5 right-5' Icon={CgClose} />
        <img
          src='https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='slide'
        />
        <div className='absolute px-5 top-1/2 -translate-y-1/2  flex w-full justify-between text-primary '>
          <Button Icon={BiSolidLeftArrowAlt} />
          <Button Icon={BiSolidRightArrowAlt} />
        </div>
      </figure>
    </section>
  );
};

interface ButtonProps extends ComponentProps<'button'> {
  Icon: IconType;
  customClass?: string;
}
const Button = ({ Icon, customClass, ...props }: ButtonProps) => {
  return (
    <button className={`bg-primary rounded-full text-white text-2xl p-1 ${customClass}`}>
      <Icon />
    </button>
  );
};
