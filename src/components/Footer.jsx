import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Unete a nuestro newsletter y recibiras descuentos en nuestro Menú.
        </p>
        <p className='footer-subscription-text'>
          No te enviaremos spam, lo prometemos.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Tu Email'
            />
            <Button to='/' buttonStyle='btn--outline'>
              Suscribete
            </Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Nosotros</h2>
            <Link to='/menu'>Menú</Link>
            <Link to='/'>Acerca de nosotros</Link>
            <Link to='/'>Trabaja con nosotros</Link>
            <Link to='/'>Ingredientes</Link>
            <Link to='/'>Preguntas frecuentes</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contactanos</h2>
            <Link to='/'>Contacto</Link>
            <Link to='/'>Sugerencias</Link>
            <Link to='/'>Eventos</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Redes Sociales</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TACO Y BURRITOS
              <i class='fa-solid fa-pepper-hot' />
            </Link>
          </div>
          <small class='website-rights'>TACOS Y BURRITOS © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
