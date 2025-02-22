import React from 'react';
import "./MainBanner.scss";

export default function MainBanner() {
  return (
    <div className='main-banner' id='inicio'>
      <picture>
        <source srcSet="banner-img-square.png" media="(max-width: 480px)" />
        <source srcSet="banner-img.png" media="(max-width: 1100px)" />
        <img src="banner-img.png" className='slide-image' alt="Prueba de banner" loading='eager'></img>
      </picture>
      <div className='wrapper'>
        <h1 className='title'>Anibal Bernabé Morixe</h1>
        <h2 className='subtitle'>Lic. En Psicología</h2>
        <h2 className='subtitle'>M.N.: 48.987 - Bs As. Argentina</h2>
      </div>
    </div>
  )
}
/* https://hostiko.com/layout91/wp-content/uploads/2024/05/domain-sec-bg.png
 */