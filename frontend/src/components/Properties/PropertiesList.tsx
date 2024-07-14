import { apiUrl } from '@/api/agent';
import { Property } from '@/types';
import React, { FC } from 'react';
import { MdOutlineBed, MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface Props {
  property: Property;
}
export const PropertiesList: FC<Props> = ({ property }) => {
  return (
    <li key={property.property_id} className='flex flex-col gap-2 text-gray-600'>
      <Link className='w-full relative overflow-hidden rounded-lg' to={`/property/${property.property_id}`}>
        <img className='aspect-square object-cover w-full h-full' src={`${apiUrl}/uploads/${property?.images[0]}`} alt='property image' />
        <span className='absolute bottom-2 left-1 rounded text-white z-10 font-bold text-lg'>
          ${property.price_per_night}
          <span className='text-sm font-normal'>/night</span>
        </span>
        <div className='absolute top-0 left-0 h-full w-full  bg-gradient-to-b from-transparent to-gray-700 opacity-60'></div>
      </Link>

      <div>
        <h3 className='font-semibold text-xl capitalize leading-1 mb-1'>{property.title}</h3>
        <div className='text-gray-500 flex flex-col gap-0'>
          <div className='flex gap-2 items-end'>
            <MdOutlineLocationOn className='inline text-lg' />
            <span className='text-gray-600 text-sm'>{`${property.city}, ${property.state}`}</span>{' '}
          </div>
          <div className='flex gap-2 items-end'>
            <MdOutlineBed className='inline text-lg' />
            <span className='text-gray-600 text-sm'>{property.bed}</span>
          </div>
          <div> </div>
        </div>
      </div>
    </li>
  );
};
