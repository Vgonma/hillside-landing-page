import React from 'react';
import { Link } from 'react-router-dom';
import NosotrosTitle from '../assets/images/titles/NOSOTROS.svg';
import personal from '../assets/images/titles/NUESTRO-PERSONAL.svg';
import star from '../assets/images/bg-icons/estrella_full.svg';
import girl from '../assets/images/photos/nosotros.jpg';
import teachers from '../assets/images/photos/personal.jpg';
import nuestroPrograma from '../assets/images/titles/NUESTRO-PROGRAMA.svg';
import sistemaImage from '../assets/images/photos/sistema.jpg';
import listStar from '../assets/images/bg-icons/doodles-07.svg';

function Nosotros() {
  return (
    <>
      <section className='home-section nosotros-hero' id='hero'>
        <div className='nosotros-hero-left'>
          <div className='nosotros-hero-left-text'>
            <img src={NosotrosTitle} alt='Nosotros' className='title-img' />
            <p>
              Hillside School fue fundado hace 26 años por Martha Sáenz
              Castillo, educadora y maestra en Estados Unidos y México, quien al
              estudiar el método Constructivista decidió abrir su propio kinder
              100% bilingüe y proponer una nueva manera de enseñanza en México.
              Con el paso de los años su filosofía educativa fue evolucionando
              hasta convertirse en lo que es hoy, un programa que consta de la
              fusión de los mejores métodos de aprendizaje, tales como Waldorf,
              Montessori Constructivista y Tradicional.
            </p>

            <Link to='/contacto' className='band-button bg-green'>
              <span>AGENDA UNA VISITA!</span>
            </Link>
          </div>
        </div>
        <div className='band-button bg-green z-1'></div>
        <div className='nosotros-hero-right'>
          <div className='hero-image-container left-squiggly'>
            <img src={girl} alt='Niña sonriendo' />
          </div>
        </div>
      </section>

      <section className='home-section nuestro-sistema' id='sistema'>
        <div className='sistema-1'>
          <img src={nuestroPrograma} alt='Nuestro Sistema' className='title-img-2line' />
          <h3>Multi - Track</h3>
          <h4>SKILLS FOR LIFE</h4>
          <p className='text-center'>
            El Hillside fomenta habilidades para toda la vida.
          </p>
        </div>
        <div className='sistema-2 border-yellow'>
          <ul className='border-yellow'>
            <img src={listStar} alt='star' className='svg-yellow between-star' />
            <li className='d-flex align-center'>Aptitudes para convertirse en personas más capaces y felices.</li>
            <img src={listStar} alt='star' className='svg-yellow between-star' />
            <li>Autorregulación emocional.</li>
            <img src={listStar} alt='star' className='svg-yellow between-star' />
            <li>Construcción de relaciones sanas y resolución de conflictos</li>
            <img src={listStar} alt='star' className='svg-yellow between-star' />
            <li>
              Desarrollo de una buena autoestima a medida que van tomando sus
              propias decisiones.
            </li>
            <img src={listStar} alt='star' className='svg-yellow between-star' />
            <li>
              Explorar, identificar, tomar riesgos y crear conciencia de su
              entorno
            </li>
            <img src={listStar} alt='star' className='svg-yellow between-star' />
            <li>Desarrollo del lenguaje y comunicación.</li>
            <img src={listStar} alt='star' className='svg-yellow between-star' />
            <li>Adaptación escolar y aprendizaje académico.</li>
            <img src={listStar} alt='star' className='svg-yellow between-star' />
          </ul>
        </div>
        <div className='sistema-3'>
          <img
            src={sistemaImage}
            alt='Foto de Nuestro sistema'
            className='left-squiggly'
          />
        </div>
      </section>
    </>
  );
}

export default Nosotros;
