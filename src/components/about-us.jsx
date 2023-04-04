import React from 'react';
import { Link } from 'react-router-dom'
import crayonDrawing from '../assets/images/photos/crayons.png';
import nosotros from '../assets/images/titles/NOSOTROS.svg'

function AboutUs() {
  return (
    <div className='home-section three-panels'>
      <div className='layer2'>
        <img className='section-image' src={crayonDrawing} alt='' />
      </div>
      <div className='layer1'>
        <Link to='contacto' className='visit-panel panel right-squiggly hover-panel'>
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
          <button className='more' type='button'>
            More
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default AboutUs;
