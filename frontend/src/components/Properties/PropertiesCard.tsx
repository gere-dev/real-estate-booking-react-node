import { BASE_URL } from '@/api';
import BookingsInfo from '@/pages/Bookings/BookingsInfo';
import { Booking, Property } from '@/types';
import React, { FC } from 'react';
import { MdOutlineBed, MdOutlineLocationOn } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  property: Property | Booking;
  children?: React.ReactNode;
}
export const PropertiesCard: FC<Props> = ({ property, children }) => {
  const location = useLocation();
  const isBookingsPage = location.pathname.includes('/bookings');

  return (
    <li key={property.property_id} className='flex flex-col gap-2 text-gray-600'>
      <Link className='w-full relative overflow-hidden rounded-lg' to={`/property/${property.property_id}`}>
        <img className='aspect-square object-cover w-full h-full' src={`${BASE_URL}/uploads/${property?.images[0]}`} alt='property image' />
        <span className='absolute bottom-2 left-1 rounded text-white z-10 font-bold text-lg'>
          ${property?.price_per_night}
          <span className='text-sm font-normal'>/night</span>
        </span>
        <div className='absolute top-0 left-0 h-full w-full  bg-gradient-to-b from-transparent to-gray-700 opacity-60'></div>
      </Link>

      <div>
        <h3 className='font-semibold text-xl capitalize leading-1 mb-1'>{property.title}</h3>
        <div className='text-gray-500 flex flex-col gap-0 text-xs'>
          <div className='flex gap-1 items-end '>
            <MdOutlineLocationOn className='inline' />
            <span className='text-gray-600 '>{`${property.city}, ${property.state}`}</span>{' '}
          </div>
          <div className='flex gap-1 items-end'>
            <MdOutlineBed className='inline ' />
            <span className='text-gray-600 '>{property.bed}</span>
          </div>
        </div>
        {isBookingsPage && (
          <BookingsInfo
            end_date={(property as Booking).end_date}
            start_date={(property as Booking).start_date}
            total_price={(property as Booking).total_price}
            booking_id={(property as Booking).booking_id}
          />
        )}
      </div>
    </li>
  );
};
