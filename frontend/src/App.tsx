import { Route, Routes } from 'react-router-dom';
import { Nav, Property } from '@/components';
import { Home, Login, Register, Bookings, AddNewListing, Listings } from '@/pages';
import './App.css';
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<Property />} />
        <Route path='/account' element={<Listings />} />
        <Route path='/account/bookings' element={<Bookings />} />
        <Route path='/account/add-new-listing' element={<AddNewListing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
