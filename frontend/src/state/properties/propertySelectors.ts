import { RootState } from '../hooks';

export const selectProperties = (state: RootState) => state.properties.properties;
export const selectPropertiesStatus = (state: RootState) => state.property.status;
