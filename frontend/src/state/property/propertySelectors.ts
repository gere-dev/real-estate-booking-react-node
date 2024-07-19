import { RootState } from '../hooks';

export const selectProperty = (state: RootState) => state.property.property;
export const selectPropertyStatus = (state: RootState) => state.property.status;
