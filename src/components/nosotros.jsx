import React from 'react';
import { Link } from 'react-router-dom';
import NosotrosTitle from '../assets/images/titles/NOSOTROS.svg';
import personal from '../assets/images/titles/NUESTRO-PERSONAL.svg';
import star from '../assets/images/bg-icons/estrella_full.svg';
import girl from '../assets/images/photos/nosotros.jpg';
import teachers from '../assets/images/photos/personal.jpg';

function Nosotros() {
  return (
    <>
      <section className='home-section nosotros-hero' id='hero'>
        <div className='nosotros-hero-left'>
          <div className='nosotros-hero-left-text'>
            <img src={NosotrosTitle} alt='Nosotros' className='' />
            <p>
              Hillside School fue fundado hace 26 años por Martha Saenz
              Castillo, educadora y maestra en Estados Unidos y México, quien al
              estudiar el método Constructivista decidió abrir su propio kinder
              100% bilingüe y proponer una nueva manera de enseñanza en México.
              Con el paso de los años su filosofía educativa fue evolucionando
              hasta convertirse en lo que es hoy, un programa que consta de la
              fusión de los mejores métodos de aprendizaje, tales como Waldorf,
              Montesori y Tradicional.
            </p>
            <p>
              Nuestro equipo cuenta con una gran experiencia educativa y es
              capacitado constantemente para estar siempre a la vanguardia.
              Nuestras instalaciones ofrecen salones diseñados para pequeños
              grupos, creando así, un ambiente de aprendizaje individual e
              integral. Contamos con un amplio jardín que es una extensión de
              las clases, donde los alumnos pasan gran parte de su día y crean
              comunidad. Nuestro material y actividades educativos están
              cuidadosamente seleccionados para impulsar el aprendizaje mediante
              el juego diverso, dándoles a los alumnos la oportunidad de
              manipular, cambiar, combinar y rediseñar de maneras infinitas.
              Nuestras generaciones siempre han tenido abiertas las puertas de
              los mejores colegios en México ya que están conformadas por
              alumnos integros, sociales y talentosos.
            </p>
            <p>
              En Hillside School proponemos un ambiente equilibrado entre el
              desarrollo de las habilidades académicas y el crecimiento
              socioemocional. Nuestra finalidad siempre ha sido darles a
              nuestros alumnos las herramientas necesarias para crecer felices,
              seguros y preparados para el futuro.
            </p>
            <Link to='/contacto' className='band-button bg-green'>
              <span>AGENDA UNA VISITA!</span>
            </Link>
          </div>
        </div>
        <div className='band-button bg-green z-1'></div>
        <div className='nosotros-hero-right'>
          <div className='hero-image-container left-squiggly'>
            <img src={girl} alt='Niña sonriendo' />
          </div>
        </div>
      </section>

      <section className='mision-vision'>
        <div className='mision-vision-side-container mision-vision-img-left'>
          <div className='color bg-blue'></div>
          <div className='mision-vision-info'>
            <h2 className='mision-vision-title'>MISIÓN</h2>
            <p>
              Aprovechar el interés, la curiosidad y la creatividad, ¬únicos en
              los niños, como la fuerza impulsora detrás de su aprendizaje
              intelectual. Simultáneamente enfocándonos en la autorregulación
              emocional, la perseverancia, el pensamiento crítico, el dominio de
              las habilidades interpersonales y el desarrollo del carácter a lo
              largo de sus primeros años
            </p>
          </div>
        </div>
        <div className='mision-vision-side-container mision-vision-img-right'>
          <div className='color bg-yellow'></div>
          <div className='mision-vision-info'>
            <h2 className='mision-vision-title'>VISIÓN</h2>
            <p>
              Brindar a nuestros alumnos, múltiples herramientas de aprendizaje
              que les proporcionen habilidades sociales, emocionales y
              académicas invaluables para el resto de su vida.
            </p>
          </div>
        </div>
      </section>

      <section id='personal'>
        <div className='nuestro-personal-container'>
          <div className='nuestro-personal-info'>
            <img src={star} alt='Star' className='svg-yellow' />
            <p>
              Contamos con personal altamente capacitado y titulado en el área
              de enseñanza infanti
            </p>
            <p>
              Realizamos evaluaciones individuales quincenales (internas) para
              observar y analizar cuidadosamente los avances de cada alumno
            </p>
            <p>
              Durante el ciclo escolar se llevan a cabo 3 entrevistas con padres
              de familia.
            </p>
            <p>
              Atendemos problemas de conducta, desarrollo, lenguaje, dificultad
              de aprendizaje y sociabilización
            </p>
            <p>
              En los grupos de Prekinder contamos con Maestra Titular y una
              ayudante
            </p>
            <p>
              Personal de Seguridad en la puerta principal que controla la
              entrada y salida en todo momento para garantizar la seguridad de
              los niños
            </p>
            <p>
              Las maestras recogen y entregan a los alumnos directamente en su
              vehículo
            </p>
            <p>
              Personal auxiliar (nanitas). Apoyo en entrenamiento de control de
              esfínteres.
            </p>
            <img src={star} alt='Star' className='svg-yellow' />
          </div>
          <div className='nuestro-personal-img'>
            <img
              src={teachers}
              alt='Halloween'
              className='nuestro-personal-title-image'
            />
            <div className='nuestro-personal-title-container bg-blue top-squiggly-wide'>
              <div className='nuestro-personal-img-container'>
                <img
                  src={personal}
                  alt='Nuestro Personal'
                  className=''
                />
              </div>
              <p>
                "Los maestros aprendemos de los alumnos<br/> y ellos de nosotros"
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nosotros;
