import { RootState } from '@/types';

export const selectProperty = (state: RootState) => state.property.property;
export const selectPropertyStatus = (state: RootState) => state.property.status;
