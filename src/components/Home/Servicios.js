import React from 'react';
import "./Servicios.scss";
import { Link } from 'react-router-dom';

export default function Servicios() {
  return (
    <div className='servicios' id='servicios'>
      <p className='section-subtitle'>Explora caminos hacia el equilibrio y la plenitud</p>
      <h2 className='section-title'>Servicios que brindo</h2>
      <div className='row g-3 p-5'>
        <div className='col'>
          <Link to="/service/1">
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
        <div className='col'>
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
        <div className='col'>
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
