import React from 'react';

function Activities() {
  return (
    <div>
      <div className='activities-grid-container'>
        <div className='activities-grid'>
          <div className='small grid-el'>
            <div className='afterschool'>
              <h2 className='text-blue'>AfTerScHoOl</h2>
              <ul className='border-green'>
                <li>Futbol</li>
                <li>Learn and Play</li>
                <li>Karate</li>
                <li>Danza</li>
                <li>Yoga</li>
                <li>Blink</li>
              </ul>
            </div>

          </div>
          <div className='grid-el large'>
            <h2 className='text-green'>EXtrAs</h2>
            <ul className='border-yellow'>
            <li>Programa de arte- Adaptado al método Doman</li>
                <li>Programa de tiendita de logros interpersonal</li>
                <li>Programa del cuento con sentido</li>
                <li>Curso de verano</li>
                <li>Cuarto sensorial</li>
                <li>Huerto</li>
            </ul>
          </div>
          <div className='grid-el large'>
            <h2 className='text-yellow'>Un POCo mAs</h2>
            <ul className='border-blue'>
              <li>Incorporación al la SEP</li>
              <li>100% inglés</li>
              <li>Grupos pequeños / atención uno a uno</li>
              <li>Arte</li>
              <li>Psicomotricidad fina y motora</li>
              <li>Música</li>
              <li>Supervisión del programa en cada salón de clases</li>
              <li>
                Libros seleccionados para completar el ciclo de aprendizaje
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
