import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//Reducers
import { propertiesSlice, propertySlice, authSlice, listingsSlice, filterPropertiesSlice, bookingsSlice } from '@/state';

const rootReducer = combineReducers({
  properties: propertiesSlice.reducer,
  property: propertySlice.reducer,
  auth: authSlice.reducer,
  listings: listingsSlice.reducer,
  filteredProperties: filterPropertiesSlice.reducer,
  bookings: bookingsSlice,
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
