import React from 'react';
import "./Contacto.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Contacto() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='contacto' id='contacto'>
      <p className='section-subtitle'>Contactar conmigo</p>
      <h2 className='section-title'>Contacto</h2>
      <div className='row g-5 mt-5'>
        <div className='col-12 col-lg-5' data-aos="fade-right" data-aos-duration="1500" data-aos-anchor-placement="top-center">
          <div className='wrapper'>
            <img src="foto-perfil-horizontal.jpg" alt="" />
            <p className='title'>Bernabé Morixe</p>
            <p>Psicólogo Clínico</p>
            <p>Atencion On Line: San Isidro, Bs As, Argentina / Tandil, Bs As, Argentina</p>
            <p>WhatsApp: +54 9 11 6353-9111</p>
          </div>
        </div>
        <div className='col-12 col-lg-7' data-aos="fade-left" data-aos-duration="1500" data-aos-anchor-placement="top-center">
          <div className='wraperr'>
            <form className="contact-form">
              <div className='row g-3 mb-4'>
                <div className='col-12 col-lg-6 d-flex flex-column'>
                  <label className='mb-3'>Tu nombre</label>
                  <input type="text" />
                </div>
                <div className='col-12 col-lg-6  d-flex flex-column'>
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
