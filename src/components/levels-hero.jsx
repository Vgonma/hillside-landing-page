import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NivelesT from '../assets/images/titles/NIVELES.svg';
import star from '../assets/images/bg-icons/doodles-07-white.svg';
import photo1 from '../assets/images/photos/chocolate-egg.jpg';
import photo2 from '../assets/images/photos/crayons.png';
import nuestro_sistema from '../assets/images/titles/NUESTRO-SISTEMA.svg';
import shootingStar from '../assets/images/bg-icons/doodles-08-text-colored.svg';

function LevelsHero() {
  const [photoNum, setPhotoNum] = useState(0);

  function hovering(event, num) {
    event.target.classList.add('hovering');
    setPhotoNum(num);
  }

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

  function stopHovering(event) {
    event.target.classList.remove('hovering');
  }

  function renderPhoto() {
    switch (photoNum) {
      case 1:
        return <img src={photo1} alt='playground' />;
      default:
        return <img src={photo2} alt='playground' />;
    }
  }

  return (
    <>
      <div className='home-section hero'>
        <div className='levels-title-container'>
          <img src={NivelesT} alt='Niveles' />
          <ul className='levels-ul'>
            <li
              className='levels-li'
              onMouseEnter={(e) => hovering(e, 1)}
              onMouseLeave={(e) => stopHovering(e)}
              onClick={() => setPhotoNum(1)}>
              <img src={star} alt='star' />
              <p> Early Learning </p>
              <img src={star} alt='star' />
            </li>
            <li
              className='levels-li'
              onMouseEnter={(e) => hovering(e, 2)}
              onMouseLeave={(e) => stopHovering(e)}
              onClick={() => setPhotoNum(2)}>
              <img src={star} alt='star' />
              <p> pre-Kinder </p>
              <img src={star} alt='star' />
            </li>
            <li
              className='levels-li'
              onMouseEnter={(e) => hovering(e, 3)}
              onMouseLeave={(e) => stopHovering(e)}
              onClick={() => setPhotoNum(3)}>
              <img src={star} alt='star' />
              <p> Kinder I </p>
              <img src={star} alt='star' />
            </li>
            <li
              className='levels-li'
              onMouseEnter={(e) => hovering(e, 4)}
              onMouseLeave={(e) => stopHovering(e)}
              onClick={() => setPhotoNum(4)}>
              <img src={star} alt='star' />
              <p> Kinder II </p>
              <img src={star} alt='star' />
            </li>
          </ul>
        </div>
        <div className='hero-image-container left-squiggly'>
          {renderPhoto()}
        </div>
      </div>

      <div className='home-section nuestro-sistema'>
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
            src={photo1}
            alt='Foto de Nuestro sistema'
            className='left-squiggly'
          />
        </div>

        <section className='carousel-container'>
          <div
            className='carousel-section bg-green hovering'
            onMouseEnter={(e) => carouselHovering(e)}>
            <div>
              <img
                className='svg-green'
                src={shootingStar}
                alt='Shooting Star'
              />
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
                Buscamos que el alumno se sienta aceptado y querido como en
                casa, para el excelente desarrollo de su autoestima.
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
              <img
                className='svg-blue'
                src={shootingStar}
                alt='Shooting Star'
              />
              <p className='text-blue'>
                Promovemos el orden, la estructura y los límites en todas
                nuestras actividades, para lograr aprender sin esfuerzo y de
                manera divertida.
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
              <img
                className='svg-green'
                src={shootingStar}
                alt='Shooting Star'
              />
              <p className='text-green'>
                Desarrollo de la socialización en actividades dinámicas,
                promoviendo el respeto y la generosidad.
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
              <img
                className='svg-blue'
                src={shootingStar}
                alt='Shooting Star'
              />
              <p className='text-blue'>
                El 100% de nuestros alumnos son admitidos en los colegios de su
                elección.
              </p>
            </div>
            <Link to='/contacto' className='bg-blue  hidden'>
              AGENDA UNA VISITA!
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default LevelsHero;
