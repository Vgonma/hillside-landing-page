import React from 'react'

function Contact() {
  return (
    <section>
      <div className="contact-form-container">
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" name='nombre' />
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
