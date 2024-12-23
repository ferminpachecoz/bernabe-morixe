import React from 'react';
import "./Header.scss";
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  return (
    <div className='header row g-0 align-items-center'>
      <div className='col-5 image'>
        <HashLink>
          <img src="https://rainbowit.net/html/inbio/assets/images/logo/logos-circle.png" alt="Foto de perfil" />
        </HashLink>
      </div>
      <div className='col-7 navigation'>
        <nav className='d-flex justify-content-end align-items-center'>
          <HashLink to="/#inicio" className='nav-link'>
            Inicio
          </HashLink>
          <HashLink to="/#mision" className='nav-link'>
            Mision
          </HashLink>
          <HashLink to="/#about-me" className='nav-link'>
            Sobre mi
          </HashLink>
          <HashLink to="/#servicios" className='nav-link'>
            Servicios
          </HashLink>
          <HashLink to="/#contacto" className='nav-link'>
            Contacto
          </HashLink>
        </nav>
      </div>
    </div>
  )
}
