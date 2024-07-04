import { Route, Routes } from 'react-router-dom';
import { Nav, Property } from '@/components';
import { Home, Login, Register, Bookings, AddListing, Listings, NotFound } from '@/pages';
import './App.css';
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<Property />} />
        <Route path='/account/:userId' element={<Listings />} />
        <Route path='/account/bookings' element={<Bookings />} />
        <Route path='/account/add-listing' element={<AddListing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
