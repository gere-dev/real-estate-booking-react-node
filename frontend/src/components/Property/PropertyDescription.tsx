import { Property } from '@/types';

export const PropertyDescription = ({ property }: { property: Property }) => {
  return (
    <div className=''>
      <h2 className='font-semibold text-xl text-gray-600 leading-0'>Description</h2>
      <p className='text-gray-600 '>{property.description}</p>
    </div>
  );
};
