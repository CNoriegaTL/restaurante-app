import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
// import Services from './pages/Services';
// import Products from './pages/Products';
// import SignUp from './pages/SignUp';
import Menu from './pages/Menu';
import Reservas from './pages/Reservas';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservas' element={<Reservas />} />
        {/* <Route path='/products' element={<Products />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/services' element={<Services />} /> */}
      </Routes>
    </div>
  );
}

export default App;
