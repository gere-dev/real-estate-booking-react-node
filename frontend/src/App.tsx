import { Nav } from '@/components';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login, Register } from '@/pages';
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
