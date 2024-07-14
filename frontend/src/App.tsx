import { Route, Routes } from 'react-router-dom';
import { Nav, PrivateRoute, Property } from '@/components';
import { Home, Login, Register, Bookings, AddListing, Listings, NotFound, EditListings } from '@/pages';
import './App.css';
import { FilteredProperties } from './pages/FilteredProperties/FilteredProperties';
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<Property />} />
        <Route path='/filtered-properties' element={<FilteredProperties />} />
        <Route element={<PrivateRoute />}>
          <Route path='/account/:userId' element={<Listings />} />
          <Route path='/account/bookings' element={<Bookings />} />
          <Route path='/account/add-listing' element={<AddListing />} />
          <Route path='/account/edit-listing/properties/:propertyId' element={<EditListings />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
