import React from 'react';
import "./WrapperSimpleCards.scss"

export default function WrapperSimpleCards({array}) {
  console.log(array);
  
  return (
    <div className='row g-5 mt-5 px-5 wrapper-simple-cards'>
      {array &&
        array.map(item=>(
        <div className='col'>
          <div className='wrapper'>
            <div className='img'>
              <img src={item.icon} alt="" />
              <img src={item.iconHover} alt="" />
            </div>
            {item.title &&
              <p className='title'>{item.title}</p>
            }
            <p>{item.text}</p>
          </div>
        </div>
        ))
      }
    </div>
  )
}
