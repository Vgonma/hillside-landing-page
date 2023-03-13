import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <NavLink className='nav-link' to='nosotros'>
        Nosotros
      </NavLink>
      <NavLink className='nav-link' to='programa'>
        Programa
      </NavLink>
      <NavLink className='nav-link' to='niveles'>
        Niveles
      </NavLink>
      <NavLink className='nav-link' to='personal'>
        Personal
      </NavLink>
      <NavLink className='nav-link' to='contacto'>
        Contacto
      </NavLink>
    </div>
  );
}

export default Navbar;
