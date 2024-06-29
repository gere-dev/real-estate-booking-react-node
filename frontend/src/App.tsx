import { Nav, Property } from '@/components';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, Register } from '@/pages';
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<Property />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
