import { Nav } from '@/components';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<div>Home</div>} />
      </Routes>
    </>
  );
}

export default App;
