import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Menu from './pages/Menu';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
