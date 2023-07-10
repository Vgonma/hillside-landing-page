import React, { useState } from 'react';
// Component imports
import Footer from './footer';

// Assets imports
import star from '../assets/images/bg-icons/doodles-07.svg';
import instalaciones from '../assets/images/titles/INSTALACIONES.svg';
import gym from '../assets/images/photos/gym.jpg';
import arte from '../assets/images/photos/art_class.jpeg';
import juegos from '../assets/images/photos/area_juegos.jpg';
import musica from '../assets/images/photos/musica.jpg';
import sensory from '../assets/images/photos/sensory.jpeg';
import earlyLearningCenter from '../assets/images/photos/early_learning_center.jpg';
import huerto from '../assets/images/photos/huerto.jpg';

function Instalaciones() {
  const [instalacionesNum, setInstalacionesNum] = useState(0);

  function roomsHovering(event, num) {
    Array.from(event.target.parentNode.children).forEach((el) => {
      el.classList.remove('hovering');
      el.children[0].classList.remove('svg-white');
    });
    event.target.classList.add('hovering');
    event.target.children[0].classList.add('svg-white');
    setInstalacionesNum(num);
  }

  function renderInstalaciones() {
    switch (instalacionesNum) {
      case 1:
        return <img src={gym} alt='Gym' />;
      case 2:
        return <img src={arte} alt='playground' />;
      case 3:
        return <img src={juegos} alt='Area de Juegos' />;
      case 4:
        return <img src={musica} alt='Baños' />;
      case 5:
        return <img src={sensory} alt='Sensory Room' />;
      case 6:
        return <img src={earlyLearningCenter} alt='Early Learning Center' />;
      case 7:
        return <img src={huerto} alt='Huerto' />;
      default:
        return <img src={gym} alt='Gym' />;
    }
  }

  return (
    <>
      <div className='home-section equipment hero' id='instalaciones'>
        <div className='hero-image-container right-squiggly'>
          {renderInstalaciones()}
        </div>
        <div className='levels-title-container rooms-title-container'>
          <div className='d-flex justify-center'>
            <img
              src={instalaciones}
              alt='Instalaciones'
              className='title-img'
            />
          </div>
          <p className='px-5 text-justify'>
            Las instalaciones ofrecen salones diseñados para pequeños grupos,
            creando así, un ambiente de aprendizaje individual e integral.
            Cuenta con un amplio jardín que es una extensión de las clases,
            donde los alumnos pasan gran parte de su día y crean comunidad.
          </p>
          <ul className='levels-ul rooms-ul'>
            <li
              className='levels-li rooms-li hovering'
              onMouseEnter={(e) => roomsHovering(e, 1)}>
              <img src={star} alt='star' className='svg-yellow svg-white' />
              <p> Gym al aire libre </p>
            </li>
            <li
              className='levels-li rooms-li'
              onMouseEnter={(e) => roomsHovering(e, 2)}>
              <img src={star} alt='star' className='svg-yellow' />
              <p> Arte al aire libre </p>
            </li>
            <li
              className='levels-li rooms-li'
              onMouseEnter={(e) => roomsHovering(e, 3)}>
              <img src={star} alt='star' className='svg-yellow' />
              <p> Ludoteca </p>
            </li>
            <li
              className='levels-li rooms-li'
              onMouseEnter={(e) => roomsHovering(e, 4)}>
              <img src={star} alt='star' className='svg-yellow' />
              <p> Salón de música </p>
            </li>
            <li
              className='levels-li rooms-li'
              onMouseEnter={(e) => roomsHovering(e, 5)}>
              <img src={star} alt='star' className='svg-yellow' />
              <p> Sensory Room </p>
            </li>
            <li
              className='levels-li rooms-li'
              onMouseEnter={(e) => roomsHovering(e, 6)}>
              <img src={star} alt='star' className='svg-yellow' />
              <p> Early Learning Center </p>
            </li>
            <li
              className='levels-li rooms-li'
              onMouseEnter={(e) => roomsHovering(e, 7)}>
              <img src={star} alt='star' className='svg-yellow' />
              <p> Huerto </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-spacer' />
      <Footer />
    </>
  );
}

export default Instalaciones;
