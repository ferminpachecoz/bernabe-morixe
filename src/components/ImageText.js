import React from 'react';
import "./ImageText.scss";

export default function ImageText({img, subtitle, title, content, order1, order2}) {
  return (
    <div className='image-text row' id='about-me'>
      <div className={`image ${order1} col-5`}>
        <img src={img} alt={subtitle} />
      </div>
      <div className={`text ${order2} col-7`}>
        <p className='section-subtitle'>{subtitle}</p>
        <h2 className='section-title'>{title}</h2>
        <p className='content' dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}
