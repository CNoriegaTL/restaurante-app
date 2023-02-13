import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TACO Y BURRITOS<i className='fa-solid fa-pepper-hot'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Nosotros
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>
                Menú
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/reservas'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Reservas
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>REGISTRATE</Button>} */}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
