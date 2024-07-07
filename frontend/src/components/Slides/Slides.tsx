import React, { ComponentProps, useEffect, useState } from 'react';
import { apiUrl } from '@/api/agent';
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { IconType } from 'react-icons';

interface Props {
  images?: (string | File)[];
  closeSlide: () => void;
  isSlideOpen: boolean;
}

export const Slides: React.FC<Props> = ({ images, closeSlide, isSlideOpen }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const nextSlide = () => {
    if (!images || images.length === 0) return;

    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const prevSlide = () => {
    if (!images || images.length === 0) return;

    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'Escape') {
        closeSlide();
      }
    };

    // Add event listener when component mounts
    window.addEventListener('keydown', handleKeyDown);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentImage]);

  useEffect(() => {
    if (isSlideOpen) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isSlideOpen]);

  if (!images || images.length === 0) return <></>;

  return (
    <>
      {isSlideOpen && (
        <section className='absolute top-1/2 -translate-y-1/2 left-0 w-full h-screen my-auto bg-white flex justify-center items-center '>
          <figure className='relative'>
            <Button customClass='absolute top-5 right-5' Icon={CgClose} onClick={closeSlide} />
            <img
              className='p-4 rounded-lg aspect-[16/12] object-cover w-full max-h-[700px] '
              src={`${apiUrl}/uploads/${images[currentImage]}`}
              alt='slide'
            />
            <div className='absolute px-5 top-1/2 -translate-y-1/2 flex w-full justify-between text-primary'>
              <Button onClick={prevSlide} Icon={BiSolidLeftArrowAlt} />
              <Button onClick={nextSlide} Icon={BiSolidRightArrowAlt} />
            </div>
          </figure>
        </section>
      )}
    </>
  );
};

interface ButtonProps extends ComponentProps<'button'> {
  Icon: IconType;
  customClass?: string;
}
const Button = ({ Icon, customClass, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`bg-primary rounded-full text-white text-2xl p-1 ${customClass}`}>
      <Icon />
    </button>
  );
};
