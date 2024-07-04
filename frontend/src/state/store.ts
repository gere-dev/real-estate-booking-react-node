import propertiesSlice from './properties/propertiesSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import propertySlice from './property/propertySlice';
import authSlice from './auth/authSlice';
import ListingsSlice from './Listings/ListingsSlice';

const rootReducer = combineReducers({
  properties: propertiesSlice,
  property: propertySlice,
  auth: authSlice,
  listings: ListingsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
