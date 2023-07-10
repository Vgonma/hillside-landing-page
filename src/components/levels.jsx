import React, { useState } from 'react';
// Component imports
import Footer from './footer';

// Assets imports
import NivelesT from '../assets/images/titles/NIVELES.svg';
import star from '../assets/images/bg-icons/doodles-07.svg';
import earlyLearning from '../assets/images/photos/early_learning_nivel.jpg';
import preKinder from '../assets/images/photos/pre_kinder.jpg';
import kinder1 from '../assets/images/photos/kinder_1.jpg';
import kinder2 from '../assets/images/photos/kinder_2.jpg';


function LevelsHero() {
  const [photoNum, setPhotoNum] = useState(0);
  

  function hovering(event, num) {
    Array.from(event.target.parentNode.children).forEach((el) =>
      el.classList.remove('hovering')
    );
    event.target.classList.add('hovering');
    setPhotoNum(num);
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

  return (
    <>
      <div className='home-section hero' id='hero'>
        <div className='levels-title-container'>
          <div className='d-flex justify-center'>
            <img src={NivelesT} alt='Niveles' className='title-img' />
          </div>
          <p className='px-5 text-justify'>
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
      <Footer />
    </>
  );
}

export default LevelsHero;
