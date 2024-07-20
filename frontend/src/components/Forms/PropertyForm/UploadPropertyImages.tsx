import { BASE_URL } from '@/api';
import { ErrorMessage } from '@/components/ErrorMessage';
import React from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';

interface Props {
  images: (string | File)[];

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  onRemove: (index: number) => void;
  error?: string;
}
export const UploadPropertyImages = ({ images, onChange, onRemove, ...props }: Props) => {
  return (
    <div className='flex gap-4 flex-wrap flex-shrink-0'>
      <label className='hover:cursor-pointer text-gray-500 h-28 border w-fit px-4 py-2 rounded flex items-center gap-2' htmlFor='upload'>
        <MdCloudUpload size={24} /> Upload
        <input name='images' multiple onChange={onChange} className='hidden ' type='file' id='upload' />
      </label>
      {images?.length > 0 &&
        images.map((image, index) => {
          const imageUrl = typeof image === 'string' ? `${BASE_URL}/uploads/${image}` : URL.createObjectURL(image as File);

          return (
            <figure key={index} className='relative'>
              <img className='h-28 w-28  border-gray-500  object-cover rounded outline-none' src={imageUrl} alt='Property Image' />
              <button
                type='button'
                onClick={() => onRemove(index)}
                className='text-gray-500 bg-opacity-80 bg-gray-200 p-2 h-10 w-10 absolute rounded-full flex items-center justify-center -bottom-4 -left-4'
              >
                <MdDelete />
              </button>
            </figure>
          );
        })}
      <ErrorMessage error={props.error} />
    </div>
  );
};
