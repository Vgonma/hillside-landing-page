import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import Carousel from './carousel';

import NosotrosTitle from '../assets/images/titles/NOSOTROS.svg';
import girl from '../assets/images/photos/nosotros.jpg';



function Nosotros() {
  const band = useRef();
  function handleHoverEnter(e) {
    e.target.classList.add('bg-yellow');
    e.target.classList.remove('bg-green');
    band.current.classList.remove('bg-green');
    band.current.classList.add('bg-yellow');
  }

  function handleHoverLeave(e) {
    e.target.classList.remove('bg-yellow');
    e.target.classList.add('bg-green');
    band.current.classList.remove('bg-yellow');
    band.current.classList.add('bg-green');
  }

  return (
    <>
      <section className='nosotros-hero' id='hero'>
        <div className='nosotros-hero-left'>
          <div className='nosotros-hero-left-text'>
            <img src={NosotrosTitle} alt='Nosotros' className='' />
            <p className='text-justify'>
              Hillside School fue fundado hace 26 años por Martha Sáenz
              Castillo, educadora y maestra en Estados Unidos y México, quien al
              estudiar el método Constructivista decidió abrir su propio kinder
              100% bilingüe y proponer una nueva manera de enseñanza en México.
              Con el paso de los años su filosofía educativa fue evolucionando
              hasta convertirse en lo que es hoy, un programa que consta de la
              fusión de los mejores métodos de aprendizaje, tales como Waldorf,
              Montessori Constructivista y Tradicional.
            </p>

            <Link
              to='/contacto'
              className='band-button bg-green'
              onMouseEnter={(e) => handleHoverEnter(e)}
              onMouseLeave={(e) => handleHoverLeave(e)}>
              <span>AGENDA UNA VISITA!</span>
            </Link>
          </div>
        </div>
        <div className='band-button bg-green z-1' ref={band}></div>
        <div className='nosotros-hero-right'>
          <div className='hero-image-container left-squiggly'>
            <img src={girl} alt='Niña sonriendo' />
          </div>
        </div>
      </section>
      <Carousel/>
      <div className="footer-spacer" />
      <Footer />
    </>
  );
}

export default Nosotros;
