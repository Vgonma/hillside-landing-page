import React from 'react';
import crayonDrawing from '../assets/images/crayons.png';

function AboutUs() {
  return (
    <div className='home-section home-us'>
      <div className='layer1'>
        <div className='us-visit'>
          <h3>AGENDA UNA<br/>VISITA!</h3>
        </div>
        <div className='layer2'>
        <img src={ crayonDrawing } alt='' />
      </div>
        <div className='us-info'>
          <div className='title-img-container'>
            <img src='#' alt='Nosotros' />
          </div>
          <p>
            Hace 26 anost después de haber trabajado mucho tiempo cömo maestra,
            en Estados Unidos y México, Martha Såenz fundö Hillside School
            Iniciö con un método Constructivista, el cuål fue evolucionando
            hasta convertirse en 10 que es hoy; nuestro programa que consta de
            la fusiön de los mejores métodos de aprendizaje.
          </p>
          <button className='more' type='button'>
            More
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default AboutUs;
