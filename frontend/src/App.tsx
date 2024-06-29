import { Route, Routes } from 'react-router-dom';
import { Nav, Property } from '@/components';
import { Home, Login, Register, Account } from '@/pages';
import './App.css';
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<Property />} />
        <Route path='/account' element={<Account />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
