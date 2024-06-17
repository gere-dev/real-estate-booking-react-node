import { Nav } from '@/components';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login, Home } from 'pages';
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
