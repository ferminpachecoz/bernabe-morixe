import React from 'react';
import "./WrapperSimpleCards.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function WrapperSimpleCards({array}) {
  console.log(array);

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className='row row-cols-lg-3 row-cols-1 g-5 mt-5 px-lg-5 px-0 wrapper-simple-cards'>
      {array &&
        array.map((item, ix)=>(
        <div className='col'>
          <div className='wrapper' data-aos="zoom-in-up" data-aos-duration={ix*1000}>
            <div className='img'>
              <img src={item.icon} alt="" />
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
