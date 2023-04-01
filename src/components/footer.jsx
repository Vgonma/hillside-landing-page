import React from 'react';
import { NavLink } from 'react-router-dom';
import instagram from '../assets/images/icons/instagram_icono.svg'
import facebook from '../assets/images/icons/facebook_icono.svg'
import logo from '../assets/images/logos/logo-blanco.svg'

function Footer() {
  return (
    <footer className='footer '>
      <button className='sun'>
        Agenda una visita!
      </button>
      <div className='grass top-squiggly-wide bg-green'>
        <div className='footer-info-container'>
          <ul className='info1'>
            <li>
              <NavLink to='nosotros'>Nosotros</NavLink>
            </li>
            <li>
              <NavLink to='programa'>Programa</NavLink>
            </li>
            <li>
              <NavLink to='instalaciones'>Instalaciones</NavLink>
            </li>
          </ul>

          <ul className='info2'>
            <li>
              <NavLink to='personal'>Personal</NavLink>
            </li>
            <li>
              <NavLink to='contacto'>Contacto</NavLink>
            </li>
          </ul>
          <div className="info3">
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
          </div>
          <div className="info4">
            <a href="#">
              <img src={logo} alt="Hillside Logo" />
            </a>
          </div>


        </div>
      </div>
    </footer>
  );
}

export default Footer;
