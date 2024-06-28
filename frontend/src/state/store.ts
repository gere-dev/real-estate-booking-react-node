import propertySlice from './properties/propertiesSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  properties: propertySlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
