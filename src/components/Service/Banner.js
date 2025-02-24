import React from 'react';
import "./Banner.scss";

export default function Banner({title}) {
  return (
    <div className='banner' >
      <h1>{title}</h1>
    </div>
  )
}
