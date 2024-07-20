import { RootState } from '@/types';

export const selectProperties = (state: RootState) => state.properties.properties;
export const selectPropertiesStatus = (state: RootState) => state.properties.status;
