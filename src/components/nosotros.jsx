import React from 'react';
import { Link } from 'react-router-dom';
import NosotrosTitle from '../assets/images/titles/NOSOTROS.svg';
import personal from '../assets/images/titles/NUESTRO-PERSONAL.svg';
import star from '../assets/images/bg-icons/estrella_full.svg';
import girl from '../assets/images/photos/nosotros.jpg';
import teachers from '../assets/images/photos/personal.jpg';
import nuestro_sistema from '../assets/images/titles/NUESTRO-SISTEMA.svg';
import sistemaImage from '../assets/images/photos/sistema.jpg';


function Nosotros() {
  return (
    <>
      <section className='home-section nosotros-hero' id='hero'>
        <div className='nosotros-hero-left'>
          <div className='nosotros-hero-left-text'>
            <img src={NosotrosTitle} alt='Nosotros' className='' />
            <p>
              Hillside School fue fundado hace 26 años por Martha Saenz
              Castillo, educadora y maestra en Estados Unidos y México, quien al
              estudiar el método Constructivista decidió abrir su propio kinder
              100% bilingüe y proponer una nueva manera de enseñanza en México.
              Con el paso de los años su filosofía educativa fue evolucionando
              hasta convertirse en lo que es hoy, un programa que consta de la
              fusión de los mejores métodos de aprendizaje, tales como Waldorf,
              Montesori y Tradicional.
            </p>

            <p>
              En Hillside School proponemos un ambiente equilibrado entre el
              desarrollo de las habilidades académicas y el crecimiento
              socioemocional. Nuestra finalidad siempre ha sido darles a
              nuestros alumnos las herramientas necesarias para crecer felices,
              seguros y preparados para el futuro.
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
          <img src={nuestro_sistema} alt='Nuestro Sistema' />
          <strong>Sistema constructivista</strong>
          <p>alumno como elemento central</p>
        </div>
        <div className='sistema-2 border-yellow'>
          <p>
            Concibe al alumno como elemento central del proceso de aprendizaje.
            Se adapta a sus necesidades según el contexto, tomando en cuenta de
            manera integral sus diferencia individuales, intereses personales,
            actitudes, creencias y estilo de aprendizaje. Asegura aprendizajes
            significativos y perdurables, a través de la observación, que
            favorecen la autonomía y la resolución creativa de problemas
          </p>
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
