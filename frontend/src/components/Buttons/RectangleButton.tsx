import React from 'react';
import classNames from 'classnames';
interface Props extends React.ComponentProps<'button'> {
  label: string;
  className?: string;
  variant?: string;
}
export const RectangleButton: React.FC<Props> = ({ label, className, variant, ...props }) => {
  const buttonClass = classNames(
    'w-full py-2 rounded capitalize',
    {
      'text-white bg-primary': variant === 'primary',
      'bg-white border border-gray-300 text-gray-500': variant === 'secondary',
    },
    className
  );

  return (
    <button {...props} className={buttonClass}>
      {label}
    </button>
  );
};
