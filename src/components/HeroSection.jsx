import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <h1>DISFRUTA DE LOS MEJORES TACOS</h1>
      <p>Conoce nuestro menú y haz tu pedido</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          VER MENU
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
