import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import photo from '../assets/images/photos/photo_63.jpg';
import nosotros from '../assets/images/titles/NOSOTROS.svg';
import moreBtn from '../assets/images/icons/more_1.png';
import moreBtnHover from '../assets/images/icons/more_2.png';

function AboutUs() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className='home-section three-panels'>
      <div className='layer2'>
        <img className='section-image' src={photo} alt='' />
      </div>
      <div className='layer1'>
        <Link
          to='contacto'
          className='visit-panel panel right-squiggly hover-panel'>
          <h6>
            AGENDA UNA
            <br />
            VISITA!
          </h6>
        </Link>

        <div className='panel info-panel left-squiggly'>
          <div className='title-img-container'>
            <img src={nosotros} alt='Nosotros' />
          </div>
          <p>
            Hace 26 años después de haber trabajado mucho tiempo cömo maestra,
            en Estados Unidos y México, Martha Såenz fundö Hillside School
            Iniciö con un método Constructivista, el cuål fue evolucionando
            hasta convertirse en 10 que es hoy; nuestro programa que consta de
            la fusiön de los mejores métodos de aprendizaje.
          </p>
          <HashLink
            to='nosotros#hero'
            className='more'
            type='button'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}  
          >
            <img src={isHovering ? moreBtnHover : moreBtn} alt='More' />
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
