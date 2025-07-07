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
      <div className={`col-12 col-lg-7 navigation ${display?"display":""}`}>
        <nav className='d-flex justify-content-end align-items-center'>
          <HashLink to="/#inicio" className='nav-link'>
            Inicio
          </HashLink>
          <HashLink to="/#mision" className='nav-link'>
            Mision
          </HashLink>
          {/* <HashLink to="/#servicios" className='nav-link switch-1'>
            Servicios
            <div className='servicios-header'>
              <HashLink to="/clinica-individual">Clínica Individual</HashLink>
              <HashLink to="/talleres-y-espacios-grupales">Talleres y Espacios Grupales</HashLink>
              <HashLink to="/armonización-de-campo-energético">Armonización de Campo Energético</HashLink>
            </div>
          </HashLink> */}
          <HashLink to="/#about-me" className='nav-link'>
            Sobre mi
          </HashLink>
          <HashLink to="/clinica-individual" className='nav-link switch-2'>
            Clínica Individual
          </HashLink>
          <HashLink to="/talleres-y-espacios-grupales" className='nav-link switch-2'>
            Talleres y Espacio Grupales
          </HashLink>
          <HashLink to="/armonización-de-campo-energético" className='nav-link switch-2'>
            Armonización De Campo Energético
          </HashLink>
          <HashLink to="/#contacto" className='nav-link'>
            Contacto
          </HashLink>
        </nav>
      </div>
    </div>
  )
}
