import React from 'react';
import "./Mision.scss";
import WrapperSimpleCards from '../WrapperSimpleCards';

export default function Mision() {
  let array=[
  {
    icon: "/icons/quality-of-life.png",
    iconHover: "/icons/quality-of-life-hover.png",
    text: "Vivir una vida en plenitud, en libertad y en armonía con quienes son y lo que la Vida quiere para ellos."
  },
  {
    icon: "/icons/plant.png",
    iconHover: "/icons/plant-hover.png",
    text: "Encontrar en mis servicios una oportunidad de crecimiento y mejora en la calidad de sus vidas."
  },
  {
    icon: "/icons/empathetic.png",
    iconHover: "/icons/empathetic-hover.png",
    text: "Vincularse con los otros y con la vida de una forma segura y confiada."
  }
]
  return (
    <div className='mision' id='mision'>
      <p className='section-subtitle'>Guía hacia plenitud, vitalidad y armonía personal</p>
      <h2 className='section-title'>Mi Misión</h2>
      <WrapperSimpleCards array={array} />
    </div>
  )
}
