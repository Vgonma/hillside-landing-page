import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import instagram from '../assets/images/icons/instagram_icono.svg';
import facebook from '../assets/images/icons/facebook_icono.svg';
import logo from '../assets/images/logos/logo-blanco.svg';

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
          <div className='info1'>
            <p>
              Horarios: <br />
              8:30 A.M. a 1:30 P.M.
            </p>
          </div>

          <div className='info3'>
            <a href='https://www.instagram.com/hillside.mx/' target='_blank'>
              <img className='footer-icon' src={instagram} alt='Instagram' />
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100063610312323'
              target='_blank'>
              <img className='footer-icon' src={facebook} alt='Facebook' />
            </a>
          </div>

          <div className='info4'>
            <Link to='/' onClick={scrollToTop}>
              <img className='footer-logo' src={logo} alt='Hillside Logo' />
            </Link>
          </div>

          <div className='info2'>
            <div>
              <p>
                Tel: 5813 6270 <br />
                <a href='mailto: info@hillside.com.mx'>info@hillside.com.mx</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
