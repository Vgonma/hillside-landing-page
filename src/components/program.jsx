import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import photo from '../assets/images/photos/IMG_0043.jpg';
import programa from '../assets/images/titles/NUESTRO-PROGRAMA.svg'
import moreBtn from '../assets/images/icons/more_1.png';
import moreBtnHover from '../assets/images/icons/more_2.png';

function Program() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className='home-section three-panels'>
      <div className='layer2 extend'>
        <img className='section-image' src={photo} alt='' />
      </div>
      <div className='layer1'>
        <div className='program-panel info-panel panel right-squiggly'>
          <div className='title-img-container'>
            <img src={programa} alt='Nosotros' />
          </div>
          <h3>Multi-Track</h3>
          <h4>múltiples vías de aprendizaje</h4>
          <p>
            Una gran educación comienza con un gran programa académico; es por
            eso que promovemos la curiosidad intelectual para lograr el amor por
            aprender.<br/><br/> Basamos el programa en el desarrollo individual de cada
            alumno para lograr conseguir sus metas
          </p>
          <Link
            to='/programa'
            className='more'
            type='button'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}  
          >
            <img src={isHovering ? moreBtnHover : moreBtn} alt='More' />
          </Link>
        </div>
        <Link to='contacto' className='visit-panel left-squiggly hover-panel-green'>
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
