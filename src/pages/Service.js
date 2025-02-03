import React, { useEffect, useState } from 'react'
import "./Service.scss"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import db from "../database.js"
import Banner from '../components/Service/Banner.js'
import ImageText from '../components/ImageText.js'
import WrapperSimpleCards from '../components/WrapperSimpleCards.js'

export default function Service() {
  let { id } = useParams();
  const [data, setData] = useState()
  useEffect(()=>{
    let ab = db.find(item=>{
      return item.id == id;
    })
    setData(ab)
  },[id])  
  
  return (
    <>
      <Header />
      <Banner title={data?data.title:""} />
      <ImageText 
        img={data?data.images[0]:null} 
        title={data?data.paragraphs[0].title:null}
        subtitle={data?data.subtitle:""} 
        content={data?data.paragraphs[0].content:null}
        order1="order-1"
        order2="order-2" 
      />
      <div className={data && data.id==2?"pad1":"pad2"}>
        <p className='section-subtitle' style={{textAlign: "center"}}>{data?data.paragraphs[1].subtitle:null}</p>
        <p className='section-title' style={{textAlign: "center"}}>{data?data.paragraphs[1].title:null}</p>
        <WrapperSimpleCards array={data?data.paragraphs[1].list:null} />
      </div>
      <ImageText 
        img={data?data.images[1]:null}
        title={data?data.paragraphs[2].title:null}
        subtitle={data?data.paragraphs[2].subtitle:null}
        content={data?data.paragraphs[2].content:null}
        order1="order-2"
        order2="order-1"
      />
      {data && data.paragraphs[3]?
        <ImageText 
          img={data?data.images[2]:null}
          title={data?data.paragraphs[3].title:null}
          subtitle={data?data.paragraphs[3].subtitle:null}
          content={data?data.paragraphs[3].content:null}
          order1="order-1"
          order2="order-2"
        />
        :""
      }
      {data && data.paragraphs[4]?
      <div className={data && data.id==2?"pad1":"pad2"}>
        <p className='section-subtitle' style={{textAlign: "center"}}>{data?data.paragraphs[4].subtitle:null}</p>
        <p className='section-title' style={{textAlign: "center"}}>{data?data.paragraphs[4].title:null}</p>
        <WrapperSimpleCards array={data?data.paragraphs[4].list:null} />
      </div>
      :""
      }
      {data && data.paragraphs[5]?
        <ImageText 
          img={data?data.images[4]:null}
          title={data?data.paragraphs[5].title:null}
          subtitle={data?data.paragraphs[5].subtitle:null}
          content={data?data.paragraphs[5].content:null}
          order1="order-1"
          order2="order-2"
        />
        :""
      }
      {data && data.paragraphs[6]?
        <ImageText 
          img={data?data.images[5]:null}
          title={data?data.paragraphs[6].title:null}
          subtitle={data?data.paragraphs[6].subtitle:null}
          content={data?data.paragraphs[6].content:null}
          order1="order-2"
          order2="order-1"
        />
        :""
      }
        <Footer />
    </>
  )
}
