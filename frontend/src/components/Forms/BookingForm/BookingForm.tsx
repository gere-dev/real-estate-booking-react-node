import React, { useMemo } from 'react';
import { BookingDateInput, BookingPriceSummary, RectangleButton } from '@/components';
import { CreateBooking } from '@/types';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { createBooking, selectIsAuth } from '@/state';

interface Props {
  price: number;
  propertyId: number;
  bed: number;
}
export const BookingForm: React.FC<Props> = ({ price, propertyId, bed }) => {
  const today = new Date().toISOString().split('T')[0];
  const [formData, setFormData] = React.useState<{ checkin: string; checkout: string; guests: string }>({
    checkin: today,
    checkout: '',
    guests: '1',
  });

  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { checkin, checkout, guests } = formData;

  const handleSummit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!checkin || !checkout || !guests) return;

    const body: CreateBooking = {
      start_date: checkin,
      end_date: checkout,
      total_price: price,
      property_id: propertyId,
      guests: Number(guests),
    };

    dispatch(createBooking(body));
  };

  const { days, cost_per_guest_night, cleaning_fee, service_fee, tax, total } = useMemo(() => {
    const days = checkin && checkout ? Math.max(((new Date(checkout).getTime() - new Date(checkin).getTime()) / (1000 * 60 * 60 * 24)) | 0, 0) : 0;
    const cost_per_guest_night = price * Number(guests) * days;
    const cleaning_fee = 0.1 * cost_per_guest_night;
    const service_fee = 0.05 * cost_per_guest_night;
    const tax = (cost_per_guest_night + cleaning_fee + service_fee) * 0.13;
    const total = cost_per_guest_night + cleaning_fee + service_fee + tax;

    return { days, cost_per_guest_night, cleaning_fee, service_fee, tax, total };
  }, [checkin, checkout, guests, price]);

  const disableReservation = !checkin || !checkout || Number(guests) <= 0 || Number(guests) > bed || days <= 0 || !isAuth;
  return (
    <div className=' shadow-lg p-3 rounded-lg'>
      <span className='font-bold text-lg'>
        ${price}
        <span className='text-xs text-gray-700 font-normal'>/night</span>
      </span>
      <form onSubmit={handleSummit}>
        <div className='border flex flex-col gap-2 mb-2 rounded-md'>
          <div className='flex  border-b'>
            <BookingDateInput
              min={new Date().toISOString().split('T')[0]}
              value={formData.checkin}
              label='CHECK-IN'
              htmlFor='checkin'
              onChange={handleChange}
              className='border-r'
            />
            <BookingDateInput min={formData.checkin} value={formData.checkout} label='CHECK-OUT' htmlFor='checkout' onChange={handleChange} />
          </div>
          <div className='flex flex-col  p-2'>
            <span className='font-semibold text-sm'>Number Of Guests</span>
            <input
              value={Number(formData.guests) <= bed ? formData.guests : bed}
              onChange={handleChange}
              name='guests'
              className='border py-1 outline-none px-2'
              type='number'
              min={1}
              max={bed}
            />
          </div>
        </div>
        <RectangleButton
          className={`${disableReservation ? 'bg-primary bg-opacity-25 text-white' : 'bg-primary bg-opacity-100 text-white'}`}
          disabled={disableReservation}
          label='Reserve'
        />
      </form>
      <div className='my-4'>
        <BookingPriceSummary title={`$100 X guest(s) X ${days} night(s)`} price={cost_per_guest_night} />
        <BookingPriceSummary title='Cleaning fee' price={cleaning_fee} />
        <BookingPriceSummary title='Service fee' price={service_fee} />
        <BookingPriceSummary title='Taxes' price={tax} />
        <hr />
        <BookingPriceSummary title='Total' price={total} />
      </div>
    </div>
  );
};
