import { RootState } from './hooks';

export const selectProperty = (state: RootState) => state.property.property;
