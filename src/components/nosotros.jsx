import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import NosotrosTitle from '../assets/images/titles/NOSOTROS.svg';
import girl from '../assets/images/photos/nosotros.jpg';
import nuestroPrograma from '../assets/images/titles/NUESTRO-PROGRAMA.svg';
import sistemaImage from '../assets/images/photos/sistema.jpg';
import listStar from '../assets/images/bg-icons/doodles-07.svg';

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
      <section className='home-section nosotros-hero' id='hero'>
        <div className='nosotros-hero-left'>
          <div className='nosotros-hero-left-text'>
            <img src={NosotrosTitle} alt='Nosotros' className='title-img' />
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

      <section className='home-section nuestro-sistema' id='sistema'>
        <div className='sistema-1'>
          <img
            src={nuestroPrograma}
            alt='Nuestro Sistema'
            className='title-img-2line'
          />
          <h3>Multi - Track</h3>
          <h4>SKILLS FOR LIFE</h4>
          <p className='text-justify'>
            Con 26 años de experiencia y habiendo trabajado con distintos
            modelos educativos, fomentamos el aprendizaje natural e
            independiente por medio del juego, los sentidos, el pensamiento
            crítico, la conciencia del entorno, el trabajo en equipo y la
            autorregulación de las emociones. Sabemos que el desarrollo de los
            niños es óptimo al integrar diferentes métodos de aprendizaje
            (Constructivista, Tradicional, Montessori, Waldorf).
          </p>
        </div>

        <div className='sistema-2 border-yellow'>
          <ul className='border-yellow'>
            <img
              src={listStar}
              alt='star'
              className='svg-yellow between-star'
            />
            <li className='d-flex align-center'>
              Aptitudes para convertirse en personas más capaces y felices.
            </li>
            <img
              src={listStar}
              alt='star'
              className='svg-yellow between-star'
            />
            <li>Autorregulación emocional.</li>
            <img
              src={listStar}
              alt='star'
              className='svg-yellow between-star'
            />
            <li>Construcción de relaciones sanas y resolución de conflictos</li>
            <img
              src={listStar}
              alt='star'
              className='svg-yellow between-star'
            />
            <li>
              Desarrollo de una buena autoestima a medida que van tomando sus
              propias decisiones.
            </li>
            <img
              src={listStar}
              alt='star'
              className='svg-yellow between-star'
            />
            <li>
              Explorar, identificar, tomar riesgos y crear conciencia de su
              entorno
            </li>
            <img
              src={listStar}
              alt='star'
              className='svg-yellow between-star'
            />
            <li>Desarrollo del lenguaje y comunicación.</li>
            <img
              src={listStar}
              alt='star'
              className='svg-yellow between-star'
            />
            <li>Adaptación escolar y aprendizaje académico.</li>
            <img
              src={listStar}
              alt='star'
              className='svg-yellow between-star'
            />
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
