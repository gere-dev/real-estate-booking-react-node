import { ComponentProps, useState } from 'react';
import { FieldContainer } from './FieldContainer';
import { BiDollar } from 'react-icons/bi';
import { Slider } from '@mui/material';

export const PriceRangeField = ({ ...props }: ComponentProps<'input'>) => {
  const [value, setValue] = useState<number[]>([20, 100]);

  const minDistance = 20;

  const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) return;

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <FieldContainer Icon={BiDollar} htmlFor='price' label='Price Range'>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        disableSwap
        sx={{ color: ' #ff385c ' }}
      />
    </FieldContainer>
  );
};
