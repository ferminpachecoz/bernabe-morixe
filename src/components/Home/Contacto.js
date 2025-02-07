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
      <div className='row justify-content-center g-5 mt-5'>
        <div className='col-12 col-lg-10' data-aos="fade-right" data-aos-duration="1500" data-aos-anchor-placement="top-center">
          <div className='wrapper row p-0'>
            <div className='col-lg-6 col-12'>
              <img src="foto-perfil-horizontal.jpg" alt="" />
            </div>
            <div className='col-lg-6 col-12 cont'>
              <p className='title'>Aníbal Bernabé Morixe</p>
              <p>Psicólogo Clínico</p>
              <div className='d-flex'>
                <p className='me-3'>Atención:</p>
                <ul>
                  <li>Online</li>
                  <li>Presencial: San Isidro, Bs As, Argentina</li>
                  <li>Presencial: Tandil, Bs As, Argentina</li>
                </ul>
              </div>
              <p>WhatsApp <img src="/icons/whatsapp.png" alt="WhatsApp Logo" className='logo-wp' />: +54 9 11 6353-9111</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
