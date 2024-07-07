import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//Reducers
import propertiesSlice from './properties/propertiesSlice';
import propertySlice from './property/propertySlice';
import authSlice from './auth/authSlice';
import listingsSlice from './listings/listingsSlice';

const rootReducer = combineReducers({
  properties: propertiesSlice,
  property: propertySlice,
  auth: authSlice,
  listings: listingsSlice,
});
// Persistor
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
