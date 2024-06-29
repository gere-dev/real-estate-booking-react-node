import { apiUrl } from '@/api/agent';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { fetchProperty } from '@/state/property/propertySlice';
import { selectProperty } from '@/state/selectors';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Property = () => {
  const { id } = useParams();

  const property = useAppSelector(selectProperty);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProperty(Number(id)));
  }, [id, dispatch]);
  const index = 0;

  const imageClass = `flex  overflow-hidden first:rounded-t-2xl last:rounded-b-lg md:first:rounded-tr-none md:first:rounded-l-2xl md:only:2 ${
    index === 0 ? 'row-span-2' : 'row-span-1'
  }`;

  const firstImage = 'first:rounded-t-2xl md:first:rounded-tr-none md:first:rounded-l-2xl row-span-2';
  const lastImage = 'last:rounded-b-2xl md:last:rounded-b-none md:last:rounded-br-2xl row-span-1';
  const secondImage = 'md:rounded-tr-2xl row-span-1';

  return (
    <section className='max-width-container mt-8'>
      <div>
        <h2 className='font-semibold text-xl text-gray-600 capitalize'>{property.title}</h2>
        <span className='text-sm capitalize underline font-semibold'>{`${property.city}, ${property.state}`}</span>
      </div>

      <ul className='grid gap-2 sm:grid-cols-[2fr_1fr]  mt-2 '>
        {property?.images?.slice(0, 3).map((image, index) => (
          <li
            key={index}
            className={index === 0 ? `${imageClass} ${firstImage}` : index === 1 ? `${imageClass} ${secondImage}` : `${imageClass} ${lastImage}`}
          >
            <img className={`hover:cursor-pointer aspect-square object-cover  `} src={`${apiUrl}/uploads/${image}`} alt='property image' />
          </li>
        ))}
      </ul>
      <div className='mt-4'>
        <h2 className='font-semibold text-xl text-gray-600 leading-0'>Description</h2>
        <p className='text-gray-600 '>{property.description}</p>
      </div>
    </section>
  );
};
