import { BASE_URL } from '@/api/agent';
import { Property } from '@/types';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { MdOutlineSingleBed, MdOutlineWifi, MdEdit, MdDelete } from 'react-icons/md';
import { useAppDispatch } from '@/hooks';
import { deleteListings } from '@/state';
interface Props {
  property: Property;
}

export const ListingsList: React.FC<Props> = ({ property }) => {
  const navigate = useNavigate();
  const imageUrl = property?.images?.length > 0 ? `${BASE_URL}/uploads/${property.images[0]}` : 'https://picsum.photos/300';
  const dispatch = useAppDispatch();
  return (
    <li className='flex gap-4 shadow-lg shadow-zinc-200 p-3 rounded'>
      <figure className=''>
        <Link to={`/property/${property.property_id}`}>
          <img className='rounded-lg w-40 h-40 object-cover aspect-square' src={imageUrl} alt='Property Image' />
        </Link>
      </figure>

      <div className='flex justify-between  flex-1'>
        <div className='flex flex-col justify-between'>
          <div>
            <h2 className='capitalize font-semibold text-gray-700 text-lg'>{property?.title}</h2>
            <p className='capitalize text-sm'>{`${property?.city}, ${property.state}`}</p>
          </div>
          <div className='flex items-center gap-4 text-gray-500'>
            <span className='flex items-center gap-1'>
              <MdOutlineSingleBed className='text-lg' />
              <span className='text-xs'>{property?.bed}</span>
            </span>
            <span className='flex items-center gap-1'>
              <MdOutlineWifi className='text-sm' />
              <span className='text-xs'>{property?.wifi ? 'Yes' : 'No'}</span>
            </span>
          </div>
        </div>
        <div className='flex flex-col justify-between'>
          <button
            onClick={() => navigate(`/account/edit-listing/properties/${property.property_id}`)}
            className='p-2 bg-gray-200 text-gray-700 rounded shadow-md'
          >
            <MdEdit />
          </button>
          <button onClick={() => dispatch(deleteListings(property.property_id))} className='p-2 bg-gray-200 text-gray-700 rounded shadow-md'>
            <MdDelete />
          </button>
        </div>
      </div>
    </li>
  );
};
