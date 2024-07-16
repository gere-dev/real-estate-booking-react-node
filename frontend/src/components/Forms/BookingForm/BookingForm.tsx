import React from 'react';
import { BookingDateInput, BookingPriceSummary, RectangleButton } from '@/components';

interface Props {
  price: number;
  propertyId: number;
  bed: number;
}
const BookingForm: React.FC<Props> = ({ price, propertyId, bed }) => {
  return (
    <div className=' shadow-lg p-3 rounded-lg'>
      <span className='font-bold text-lg'>
        ${price}
        <span className='text-xs text-gray-700 font-normal'>/night</span>
      </span>
      <form>
        <div className='border flex flex-col gap-2 mb-2 rounded-md'>
          <div className='flex  border-b'>
            <BookingDateInput label='CHECK-IN' htmlFor='checkin' onChange={() => null} className='border-r' />
            <BookingDateInput label='CHECK-OUT' htmlFor='checkout' onChange={() => null} />
          </div>
          <div className='flex flex-col  p-2'>
            <span className='font-semibold text-sm'>Number Of Guests</span>
            <input className='border py-1 outline-none px-2' type='number' min={1} max={bed} />
          </div>
        </div>
        <RectangleButton label='Reserve' />
      </form>
      <div className='my-4'>
        <BookingPriceSummary title='$100 X guest(s) X 0 night(s)' price={price} />
        <BookingPriceSummary title='Cleaning fee' price={price} />
        <BookingPriceSummary title='Service fee' price={price} />
        <BookingPriceSummary title='Taxes' price={price} />
      </div>
    </div>
  );
};

export default BookingForm;
