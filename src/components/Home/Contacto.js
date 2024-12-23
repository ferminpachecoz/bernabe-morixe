import React from 'react';
import "./Contacto.scss";

export default function Contacto() {
  return (
    <div className='contacto' id='contacto'>
      <p className='section-subtitle'>Contactar conmigo</p>
      <h2 className='section-title'>Contacto</h2>
      <div className='row g-5 mt-5'>
        <div className='col-5'>
          <div className='wrapper'>
            <img src="imagen5.jpg" alt="" />
            <p className='title'>Bernabé Morixe</p>
            <p>Psicólogo Clínico</p>
            <p>I am available for freelance work. Connect with me via and call in to my account.</p>
            <p>Phone: +01234567890</p>
            <p>Email: admin@example.com</p>
          </div>
        </div>
        <div className='col-7'>
          <div className='wraperr'>
            <form className="contact-form">
              <div className='row g-3 mb-4'>
                <div className='col-6 d-flex flex-column'>
                  <label className='mb-3'>Tu nombre</label>
                  <input type="text" />
                </div>
                <div className='col-6  d-flex flex-column'>
                  <label className='mb-3'>Teléfono</label>
                  <input type="text" />
                </div>
              </div>
              <div className='col-12 mb-4 d-flex flex-column'>
                <label className='mb-3'>Email</label>
                <input type="text" />
              </div>
              <div className='col-12 mb-4 d-flex flex-column'>
                <label className='mb-3'>Tu mensaje</label>
                <textarea cols="30" rows="10"></textarea>
              </div>
              <button>Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
