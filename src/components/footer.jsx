import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import instagram from '../assets/images/icons/instagram_icono.svg'
import facebook from '../assets/images/icons/facebook_icono.svg'
import logo from '../assets/images/logos/logo-blanco.svg'

function Footer() {


  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <footer className='footer '>
      <Link to='contacto' className='sun'>
        Agenda una visita!
      </Link>
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
              <img className='footer-icon' src={instagram} alt="Instagram" />
            </a>
            <a href="#">
              <img className='footer-icon' src={facebook} alt="Facebook" />
            </a>
          </div>
          <div className="info4">
            <Link to='/' onClick={scrollToTop}>
              <img className='footer-logo' src={logo} alt="Hillside Logo" />
            </Link>
          </div>


        </div>
      </div>
    </footer>
  );
}

export default Footer;
