import React, { useState } from 'react';
import NivelesT from '../assets/images/titles/NIVELES.svg';
import star from '../assets/images/bg-icons/doodles-07.svg';
import earlyLearning from '../assets/images/photos/early_learning_nivel.jpg';
import preKinder from '../assets/images/photos/pre_kinder.jpg';
import kinder1 from '../assets/images/photos/kinder_1.jpg';
import kinder2 from '../assets/images/photos/kinder_2.jpg';
import instalaciones from '../assets/images/titles/INSTALACIONES.svg';


// Instalaciones image imports
import gym from '../assets/images/photos/gym.jpg';
import arte from '../assets/images/photos/art_class.jpeg';
import juegos from '../assets/images/photos/area_juegos.jpg';
import banos from '../assets/images/photos/kinder_bano.jpg';
import sensory from '../assets/images/photos/sensory.jpeg';
import earlyLearningCenter from '../assets/images/photos/early_learning_center.jpg';
import huerto from '../assets/images/photos/huerto.jpg';

function LevelsHero() {
  const [photoNum, setPhotoNum] = useState(0);
  const [instalacionesNum, setInstalacionesNum] = useState(0);

  function hovering(event, num) {
    Array.from(event.target.parentNode.children).forEach((el) =>
      el.classList.remove('hovering')
    );
    event.target.classList.add('hovering');
    setPhotoNum(num);
  }

  function roomsHovering(event, num) {
    Array.from(event.target.parentNode.children).forEach((el) => {
      el.classList.remove('hovering');
      el.children[0].classList.remove('svg-white');
    });
    event.target.classList.add('hovering');
    event.target.children[0].classList.add('svg-white');
    setInstalacionesNum(num);
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

  function renderPhoto() {
    switch (photoNum) {
      case 1:
        return <img src={earlyLearning} alt='Early Learning' />;
      case 2:
        return <img src={preKinder} alt='Pre Kinder' />;
      case 3:
        return <img src={kinder1} alt='Kinder I' />;
      case 4:
        return <img src={kinder2} alt='Kinder II' />;
      default:
        return <img src={earlyLearning} alt='Early Learning' />;
    }
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
        return <img src={banos} alt='Baños' />;
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
      <div className='home-section hero' id='hero'>
        <div className='levels-title-container'>
          <div className='d-flex justify-center'>
            <img src={NivelesT} alt='Niveles' className='title-img' />
          </div>
          <p className='px-5'>
            El material y actividades educativos están cuidadosamente
            seleccionados para impulsar el aprendizaje mediante el juego
            diverso, dándoles a los alumnos la oportunidad de manipular,
            cambiar, combinar y rediseñar de maneras infinitas.
          </p>
          <ul className='levels-ul'>
            <li
              className='levels-li hovering'
              onMouseEnter={(e) => hovering(e, 1)}
              onClick={() => setPhotoNum(1)}>
              <img className='levels-star svg-white' src={star} alt='star' />
              <p> Early Learning </p>
              <img className='levels-star svg-white' src={star} alt='star' />
            </li>
            <li
              className='levels-li'
              onMouseEnter={(e) => hovering(e, 2)}
              onClick={() => setPhotoNum(2)}>
              <img className='levels-star svg-white' src={star} alt='star' />
              <p> Pre-Kinder </p>
              <img className='levels-star svg-white' src={star} alt='star' />
            </li>
            <li
              className='levels-li'
              onMouseEnter={(e) => hovering(e, 3)}
              onClick={() => setPhotoNum(3)}>
              <img className='levels-star svg-white' src={star} alt='star' />
              <p> Kinder I </p>
              <img className='levels-star svg-white' src={star} alt='star' />
            </li>
            <li
              className='levels-li'
              onMouseEnter={(e) => hovering(e, 4)}
              onClick={() => setPhotoNum(4)}>
              <img className='levels-star svg-white' src={star} alt='star' />
              <p> Kinder II </p>
              <img className='levels-star svg-white' src={star} alt='star' />
            </li>
          </ul>
        </div>
        <div className='hero-image-container left-squiggly'>
          {renderPhoto()}
        </div>
      </div>

      <div className='home-section equipment hero' id='instalaciones'>
        <div className='hero-image-container right-squiggly'>
          {renderInstalaciones()}
        </div>
        <div className='levels-title-container rooms-title-container'>
          <div className='d-flex justify-center'>

          <img src={instalaciones} alt='Instalaciones' className='title-img' />
          </div>
          <p className='px-5'>
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
    </>
  );
}

export default LevelsHero;
