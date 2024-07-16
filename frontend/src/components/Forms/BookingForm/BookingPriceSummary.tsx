import { FC } from 'react';

interface Props {
  title: string;
  price: number;
}
export const BookingPriceSummary: FC<Props> = ({ title, price }) => {
  return (
    <div className='flex justify-between'>
      <span>{title}</span>
      <span>${price.toFixed(2)}</span>
    </div>
  );
};
