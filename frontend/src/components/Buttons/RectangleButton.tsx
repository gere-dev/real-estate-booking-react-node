import React from 'react';
interface Props extends React.ComponentProps<'button'> {
  label: string;
  className?: string;
}
export const RectangleButton: React.FC<Props> = ({ label, className = 'text-white bg-primary', ...props }) => {
  return (
    <button {...props} className={`w-full py-2 rounded   ${className}`}>
      {label}
    </button>
  );
};
