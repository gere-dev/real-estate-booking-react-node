import propertiesSlice from './properties/propertiesSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import propertySlice from './property/propertySlice';
import authSlice from './auth/authSlice';

const rootReducer = combineReducers({
  properties: propertiesSlice,
  property: propertySlice,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
