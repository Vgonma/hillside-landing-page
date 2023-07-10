import React from 'react';
import { Link } from 'react-router-dom';

import shootingStar from '../assets/images/bg-icons/doodles-08-text-colored.svg';

function Carousel() {
  function carouselHovering(event) {
    if (event.target.tagName.toLowerCase() != 'div') return;
    event.target.classList.add('hovering');
    event.target.children[1].classList.remove('hidden');
    const carouselList = document.querySelectorAll('.carousel-section');
    carouselList.forEach((el) => {
      if (el != event.target) {
        el.classList.remove('hovering');
        el.children[1].classList.add('hidden');
      }
    });
  }

  return (
    <>
      <section className='carousel-container'>
        <div
          className='carousel-section bg-green hovering'
          onMouseEnter={(e) => carouselHovering(e)}>
          <div>
            <img className='svg-green' src={shootingStar} alt='Shooting Star' />
            <p className='text-green'>
              Las clases están diseñadas para el Desarrollo del pensamiento
              lógico y matemático infantil, así como para el desarrollo del
              lenguaje y comunicación.
            </p>
          </div>
          <Link to='/contacto' className='bg-green'>
            <span>AGENDA UNA VISITA!</span>
          </Link>
        </div>
        <div
          className='carousel-section bg-yellow'
          onMouseEnter={(e) => carouselHovering(e)}>
          <div>
            <img
              className='svg-yellow'
              src={shootingStar}
              alt='Shooting Star'
            />
            <p className='text-yellow'>
              El Hillside propone un ambiente equilibrado entre el desarrollo de
              las habilidades académicas y el crecimiento socioemocional.
            </p>
          </div>
          <Link to='/contacto' className='bg-yellow hidden'>
            <span>AGENDA UNA VISITA!</span>
          </Link>
        </div>
        <div
          className='carousel-section bg-blue'
          onMouseEnter={(e) => carouselHovering(e)}>
          <div>
            <img className='svg-blue' src={shootingStar} alt='Shooting Star' />
            <p className='text-blue'>
              Promovemos el orden, la estructura y los límites en todas nuestras
              actividades, para lograr aprender sin esfuerzo y de manera
              divertida.
            </p>
          </div>
          <Link to='/contacto' className='bg-blue  hidden'>
            AGENDA UNA VISITA!
          </Link>
        </div>
        <div
          className='carousel-section bg-green'
          onMouseEnter={(e) => carouselHovering(e)}>
          <div>
            <img className='svg-green' src={shootingStar} alt='Shooting Star' />
            <p className='text-green'>
              Las generaciones graduadas de Hillside School, siempre han tenido
              abiertas las puertas de los mejores colegios en México ya que
              están conformadas por alumnos íntegros, sociales y talentosos.
            </p>
          </div>
          <Link to='/contacto' className='bg-green  hidden'>
            AGENDA UNA VISITA!
          </Link>
        </div>
        <div
          className='carousel-section bg-yellow'
          onMouseEnter={(e) => carouselHovering(e)}>
          <div>
            <img
              className='svg-yellow'
              src={shootingStar}
              alt='Shooting Star'
            />
            <p className='text-yellow'>
              Apoyo a padres de familia en situaciones especiales de manejo de
              conducta o emocionales.
            </p>
          </div>
          <Link to='/contacto' className='bg-yellow  hidden'>
            AGENDA UNA VISITA!
          </Link>
        </div>
        <div
          className='carousel-section bg-blue'
          onMouseEnter={(e) => carouselHovering(e)}>
          <div>
            <img className='svg-blue' src={shootingStar} alt='Shooting Star' />
            <p className='text-blue'>
              El equipo docente cuenta con una gran experiencia educativa y es
              capacitado constantemente para estar siempre a la vanguardia.
            </p>
          </div>
          <Link to='/contacto' className='bg-blue  hidden'>
            AGENDA UNA VISITA!
          </Link>
        </div>
      </section>
    </>
  );
}

export default Carousel;
