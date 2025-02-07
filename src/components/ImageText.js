import React from 'react';
import "./ImageText.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function ImageText({img, subtitle, title, content, order1, order2, idx}) {
  useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className='image-text row' id={idx}>
      <div className={`image ${order1} order-2 col-12 col-lg-4`}>
        <img src={img} alt={subtitle} />
      </div>
      <div className={`text ${order2} order-1 col-12 col-lg-8`}>
        <p className='section-subtitle'>{subtitle}</p>
        <h2 className='section-title' style={{fontSize: "40px"}}>{title}</h2>
        <p className='content' dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}
