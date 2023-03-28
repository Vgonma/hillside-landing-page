import React from 'react';
import painting from '../assets/images/painting.jpeg';

function Program() {
  return (
    <div className='home-section three-panels'>
      <div className='layer2'>
        <img className='section-image' src={painting} alt='' />
      </div>
      <div className='layer1'>
        <div className='info-panel right-squiggly'>
          <div className='title-img-container'>
            <img src='#' alt='Nosotros' />
          </div>
          <h3>Multi-Track</h3>
          <h4>múltiples vías de aprendizaje</h4>
          <p>
            Una gran educación comienza con un gran programa académico; es por
            eso que promovemos la curiosidad intelectual para lograr el amor por
            aprender.<br/><br/> Basamos el programa en el desarrollo individual de cada
            alumno para lograr conseguir sus metas
          </p>
          <button className='more' type='button'>
            More
          </button>
        </div>
        <div className='visit-panel bg-green left-squiggly'>
          <h3>
            AGENDA UNA
            <br />
            VISITA!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Program;
