import React from 'react';
import "./MainBanner.scss";

export default function MainBanner() {
  return (
    <div className='main-banner' id='inicio'>
      <img loading='eager' src="banner-img.png" alt="Imagen del Main Banner" />
      <div className='wrapper'>
        <h1 className='title'>Bernabé Morixe</h1>
        <h2 className='subtitle'>Psicólogo especializado en psicoterapia</h2>
      </div>
    </div>
  )
}
/* https://hostiko.com/layout91/wp-content/uploads/2024/05/domain-sec-bg.png
 */