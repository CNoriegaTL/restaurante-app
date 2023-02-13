import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservas from './components/Reservas';
import Nosotros from './pages/Nosotros';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/reservas' element={<Reservas />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
