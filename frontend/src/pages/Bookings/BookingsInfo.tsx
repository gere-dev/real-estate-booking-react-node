import React from 'react';
import { RectangleButton } from '../../components';

const BookingsInfo = () => {
  return (
    <div className='mt-4'>
      <div className='flex justify-between  text-xs mb-2'>
        <div className=' flex gap-2 '>
          <div className=''>
            <h2 className='font-bold  text-black'>CHECK-IN:</h2>
            <span className=''>2023-04-13</span>
          </div>
          <div>
            <h2 className='font-bold  text-black'>CHECK-OUT:</h2>
            <span className=''>2023-04-13</span>
          </div>
        </div>
        <div>
          <h2 className='font-bold text-black'>TOTAL COST</h2>
          <span className=' text-end block'>$232</span>
        </div>
      </div>
      <RectangleButton label='Cancel' />
    </div>
  );
};

export default BookingsInfo;
