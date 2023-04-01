import React from 'react';

function Activities() {
  return (
    <div className='home-section'>
      <div className='activities-grid-container'>
        <div className='activities-grid'>
          <div className='grid-el small'>
            <h2 className='text-blue'>AfTerScHoOl</h2>
            <ul className='border-green'>
              <li>Futbol</li>
              <li>Regularización</li>
              <li>Inglés</li>
              <li>Karate</li>
            </ul>
          
            <h2 className='text-yellow'>EXtrAs</h2>
            <ul className='border-blue'>
              <li>Programa de arte- Adaptado al método Doman</li>
              <li>programam tiendita de logros interpersonal</li>
              <li>Programa del cuento con sentido</li>
              <li>Curso de verano</li>
            </ul>
          </div>
          <div className='grid-el large'>
            <h2 className='text-green'>ActiViDadEs</h2>
            <ul className='border-yellow'>
              <li>Día de independencia</li>
              <li>Halloween</li>
              <li>Día de muertos</li>
              <li>Pastorela</li>
              <li>San Valentín</li>
              <li>Pascua</li>
              <li>Fiesta del día del niño</li>
              <li>Festival del día de las madres</li>
              <li>Evento del día del padre</li>
              <li>Graduación</li>
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
              <li>Música (Music & Me)</li>
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
