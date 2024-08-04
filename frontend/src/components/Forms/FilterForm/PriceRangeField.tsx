import { FieldContainer } from './FieldContainer';
import { BiDollar } from 'react-icons/bi';
import { Slider } from '@mui/material';
import { memo } from 'react';

interface Props {
  onChange: (event: Event, newValue: number | number[], activeThumb: number) => void;
  value: [number, number];
}
export const PriceRangeField = memo(({ onChange, value }: Props) => {
  return (
    <FieldContainer Icon={BiDollar} htmlFor='price' label='Price Range'>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={onChange}
        valueLabelDisplay='auto'
        disableSwap
        sx={{ color: ' #ff385c ' }}
        min={0}
        max={900}
        step={10}
      />
    </FieldContainer>
  );
});
