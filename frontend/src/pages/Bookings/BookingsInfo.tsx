import React from 'react';
import { RectangleButton } from '../../components';
import { useAppDispatch } from '@/hooks';
import { deleteBooking } from '@/state/bookings/bookingsThunks';
interface Props {
  start_date: string;
  end_date: string;
  total_price: number;
  booking_id: number;
}
const BookingsInfo = ({ ...props }: Props) => {
  const { start_date, end_date, total_price, booking_id } = props;
  const start = new Date(start_date).toLocaleDateString('en-US');
  const end = new Date(end_date).toLocaleDateString('en-US');

  const dispatch = useAppDispatch();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(deleteBooking(booking_id));
  };
  return (
    <div className='mt-4'>
      <div className='flex justify-between  text-xs mb-2'>
        <div className=' flex gap-2 '>
          <div className=''>
            <h2 className='font-bold  text-black'>CHECK-IN:</h2>
            <span className=''>{start}</span>
          </div>
          <div>
            <h2 className='font-bold  text-black'>CHECK-OUT:</h2>
            <span className=''>{end}</span>
          </div>
        </div>
        <div>
          <h2 className='font-bold text-black'>TOTAL COST</h2>
          <span className=' text-end block'>{`$${total_price}`}</span>
        </div>
      </div>
      <RectangleButton onClick={handleDelete} label='Cancel' />
    </div>
  );
};

export default BookingsInfo;
