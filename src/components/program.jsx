import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import photo from '../assets/images/photos/photo_43.jpg';
import programa from '../assets/images/titles/NUESTRO-PROGRAMA.svg';
import moreBtn from '../assets/images/icons/more_1.png';
import moreBtnHover from '../assets/images/icons/more_2.png';

function Program() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div id='programa' className='home-section three-panels'>
      <div className='layer2 extend'>
        <img className='section-image' src={photo} alt='' />
      </div>
      <div className='layer1'>
        <div className='program-panel info-panel panel right-squiggly'>
          <div className='title-img-container'>
            <img src={programa} alt='Nosotros' />
          </div>
          <h3>Multi - Track</h3>
          <h4>(múltiples vías de aprendizaje)</h4>
          <p>
            Con 26 años de experiencia y habiendo trabajado con distintos
            modelos educativos, fomentamos el aprendizaje natural e
            independiente por medio del juego, los sentidos, el pensamiento
            crítico, la conciencia del entorno, el trabajo en equipo y la
            autorregulación de las emociones. Sabemos que el desarrollo de los
            niños es óptimo al integrar diferentes métodos de aprendizaje
            (Constructivista, Tradicional, Montessori, Waldorf).
          </p>
          <HashLink
            to='/nosotros#sistema'
            className='more'
            type='button'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}>
            <img src={isHovering ? moreBtnHover : moreBtn} alt='More' />
          </HashLink>
        </div>
        <Link
          to='contacto'
          className='visit-panel left-squiggly hover-panel-green'>
          <h6>
            AGENDA UNA
            <br />
            VISITA!
          </h6>
        </Link>
      </div>
    </div>
  );
}

export default Program;
