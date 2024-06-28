import { RootState } from '../hooks';

export const selectProperties = (state: RootState) => state.properties.properties;
