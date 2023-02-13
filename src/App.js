import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
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
      </Routes>
    </div>
  );
}

export default App;
