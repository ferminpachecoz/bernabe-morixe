import React from 'react';
import "./Servicios.scss";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Servicios() {
  useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div className='servicios' id='servicios'>
      <p className='section-subtitle'>Explora caminos hacia el equilibrio y la plenitud</p>
      <h2 className='section-title mb-5 mb-lg-0'>Servicios que brindo</h2>
      <div className='row g-3 row-cols-1 row-cols-lg-3 p-0 p-lg-5'>
        <div className='col' data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-center">
          <Link to="/service/1" >
            <div className='wrapper'>
              <div className='image'>
                <img src="imagen4.jpg" alt="" />
              </div>
              <div className='content'>
                <h3 className='title'>Clínica Individual</h3>
                <p className='desscription'>Espacio personal para superar desafíos emocionales y conectar con propósito y bienestar.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='col' data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-center">
          <Link to="/service/2">
            <div className='wrapper'>
              <div className='image'>
                <img src="imagen3.jpg" alt="" />
              </div>
              <div className='content'>
                <h3 className='title'>Talleres y Espacio Grupales</h3>
                <p className='desscription'>Dinámicas participativas para el aprendizaje, apoyo mutuo y crecimiento colectivo.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='col' data-aos="fade-up" data-aos-duration="2500" data-aos-anchor-placement="top-center">
          <Link to="/service/3">
            <div className='wrapper'>
              <div className='image'>
                <img src="services/service-7.png" alt="" />
              </div>
              <div className='content'>
                <h3 className='title'>Sanación vibracional a distancia con tecnología Cuántica.</h3>
                <p className='desscription'>Armonización energética a distancia mediante tecnología cuántica para recuperar bienestar.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
