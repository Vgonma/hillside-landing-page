import React from 'react';
// Component imports
import Activities from './activities';
import Footer from './footer';
// Assets imports
import nuestroPrograma from '../assets/images/titles/NUESTRO-PROGRAMA.svg';
import sistemaImage from '../assets/images/photos/sistema.jpg';
import listStar from '../assets/images/bg-icons/doodles-07.svg';

function Program() {

  return (
    <>
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
      <Activities />
      <div className="footer-spacer" />
      <Footer />
    </>
  );
}

export default Program;
