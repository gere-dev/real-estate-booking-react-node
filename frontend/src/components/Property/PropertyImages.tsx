import React from 'react';
import { apiUrl } from '@/api/agent';
import { Slides } from '@/components';
interface Props {
  images?: [string];
}
export const PropertyImages: React.FC<Props> = ({ images }) => {
  const [isSlideOpen, setIsSlideOpen] = React.useState(false);

  const closeSlide = () => {
    setIsSlideOpen(false);
  };
  const determineImageClasses = (index: number) => {
    const baseClasses = 'flex overflow-hidden';
    if (index === 0) {
      return `${baseClasses} first:rounded-t-2xl md:first:rounded-tr-none md:first:rounded-l-2xl row-span-2`;
    } else if (index === 1) {
      return `${baseClasses} md:rounded-tr-2xl row-span-1`;
    } else {
      return `${baseClasses} last:rounded-b-2xl md:last:rounded-b-none md:last:rounded-br-2xl row-span-1`;
    }
  };

  return (
    <ul className='grid gap-2 sm:grid-cols-[2fr_1fr] mt-2 '>
      {images?.slice(0, 3).map((image, index) => (
        <li key={index} className={determineImageClasses(index)}>
          <img
            onClick={() => setIsSlideOpen(true)}
            className={`hover:cursor-pointer aspect-square object-cover`}
            src={`${apiUrl}/uploads/${image}`}
            alt='property image'
          />
        </li>
      ))}
      <Slides images={images} closeSlide={closeSlide} isSlideOpen={isSlideOpen} />
    </ul>
  );
};
