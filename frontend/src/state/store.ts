import propertySlice from './property/propertySlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  property: propertySlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
