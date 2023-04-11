import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/images/logos/logo_rectangular2.svg';

function Navbar() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className='navbar'>
      <Link to='/' onClick={scrollToTop} className='navbar-logo'>
        <img src={logo} alt='Hillside logo' />
      </Link>
      <ul>
        <NavLink className='nav-link' to='nosotros'>
          Nosotros
        </NavLink>
        <HashLink className='nav-link' to='/#programa'>
          Programa
        </HashLink>
        <NavLink className='nav-link' to='niveles'>
          Niveles
        </NavLink>
        <NavLink className='nav-link' to='personal'>
          Personal
        </NavLink>
        <NavLink className='nav-link' to='contacto'>
          Contacto
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
