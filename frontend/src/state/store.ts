import propertiesSlice from './properties/propertiesSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import propertySlice from './property/propertySlice';

const rootReducer = combineReducers({
  properties: propertiesSlice,
  property: propertySlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
