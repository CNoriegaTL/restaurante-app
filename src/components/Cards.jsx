import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Conoce nuestra oferta gastronomica</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/tacos-hero.jpeg'
              text='Prueba nuestros tacos con los ingredientes mas frescos'
              label='Tacos'
              path='/products'
            />
            <CardItem
              src='images/burrito-1.jpeg'
              text='Prueba nuestros burritos, no te arrepentiras'
              label='Burritos'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/nachos.jpeg'
              text='Disfruta con tus amigos los mejores nachos'
              label='Nachos'
              path='/products'
            />
            <CardItem
              src='images/trago.jpeg'
              text='Tenemos una amplia variedad de tragos'
              label='Bar'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
