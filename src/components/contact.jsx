import React, {useEffect} from 'react';
import emailjs from '@emailjs/browser';
import contact from '../assets/images/titles/CONTACTO.svg';
import doodle from '../assets/images/bg-icons/doodles-12.svg';

function Contact() {
  useEffect(() => {
    scrollTo(0,0);
  })
  
  function submitHandler(event) {
    event.preventDefault();
    const checkbox1 = document.getElementById('checkbox1');
    const checkbox2 = document.getElementById('checkbox2');

    const emailConfig = {
      serviceId: 'service_gymloy6',
      templateId: 'template_bc99fhn',
      formData: event.target,
      publicKey: 'YrJCcDHUnPYHlfgu5',
      templateParams: {
        nombre: event.target[0].value,
        email: event.target[1].value,
        info: checkbox1.checked
          ? 'Quiere información sobre horarios, salones, etc.'
          : '',
        visit: checkbox2.checked ? 'Le gustaria visitar el kinder.' : '',
      },
    };
    emailjs
      .send(
        emailConfig.serviceId,
        emailConfig.templateId,
        emailConfig.templateParams,
        emailConfig.publicKey
      )
      .then(
        () => {
          alert('Correo enviado correctamente!');
          event.target.reset;
        },
        (error) => {
          alert('Error al enviar correo. Favor de intentarlo de nuevo.');
        }
      );
  }

  return (
    <section className='contact-section'>
      <div className='contact-form-container bg-blue right-squiggly'>
        <div className='d-flex pos-relative'>
          <img src={contact} alt='Contacto' className='contacto-title' />
          <img
            src={doodle}
            alt='doodle'
            className='svg-white contact-shooting-star'
          />
        </div>
        <form method='post' onSubmit={(e) => submitHandler(e)}>
          <label className='text-input-label' htmlFor='nombre'>
            Nombre:
          </label>
          <input className='text-input' type='text' name='nombre' />
          <label className='text-input-label' htmlFor='email'>
            E-mail:
          </label>
          <input className='text-input' type='email' name='email' />
          <h4>¿Qué te gustaria recibir?</h4>
          <div>
            <input
              type='checkbox'
              name='info'
              id='checkbox1'
              className='checkbox'
            />
            <label htmlFor='checkbox1'>
              Información sobre horarios, salones, etc.
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              name='visit'
              id='checkbox2'
              className='checkbox'
            />
            <label htmlFor='checkbox2'>Me gustaria visitar el kinder</label>
          </div>
          <button className='submit-btn bg-yellow' type='submit'>
            Enviar
          </button>
        </form>
      </div>
      <div className='map-container'>
        <div>
          <iframe
            className='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.6905560775626!2d-99.28910830941635!3d19.356429782828403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20737fa22f493%3A0x431da45f3f0fad76!2sHillside%20School!5e0!3m2!1sen!2smx!4v1686177999143!5m2!1sen!2smx'
            width='800'
            height='600'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'></iframe>
          <div className='address-container'>
            <h3 className='address1 text-blue'>
              Cda. Antonio Noemi No. 21 Col. Memetla
            </h3>
            <h3 className='address2 text-blue'>Contadero, Cuajimalpa, 05330</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
