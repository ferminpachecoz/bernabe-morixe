import React, { useState } from 'react';
import "./Header.scss";
import { HashLink } from 'react-router-hash-link';


export default function Header() {
  const [display,setDisplay] = useState(false)

  return (
    <div className='header row g-0 align-items-center'>
      <div className='col-6 col-lg-5 image'>
        <HashLink>
          <img src="/foto-perfil-round.png" alt="Foto de perfil" />
        </HashLink>
      </div>
      <div className='burger-icon col-6'>
        <img onClick={()=>setDisplay(!display)} src="/menu.png" alt="Burger Icon" />
      </div>
      <div className={`col-6 col-lg-7 navigation ${display?"display":""}`}>
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
