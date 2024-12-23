import React from 'react';
import MainBanner from "../components/Home/MainBanner"
import Header from '../components/Header';
import Mision from '../components/Home/Mision';
import Servicios from '../components/Home/Servicios';
import Contacto from '../components/Home/Contacto';
import Footer from '../components/Footer';
import ImageText from '../components/ImageText';

export default function Home() {
  let aboutMe={
    title: "Sobre mi",
    subtitle: "Visit my portfolio & Hire me",
    img: "imagen2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate accusantium voluptatibus quidem nam, reprehenderit, et necessitatibus adipisci labore sit veritatis vero tempore sequi at sed facere dolore. Quae obcaecati eius quasi doloribus illum minus fugit."
  }
  return (
    <>
      <Header />
      <MainBanner />
      <Mision />
      <ImageText 
        title={aboutMe.title} 
        subtitle={aboutMe.subtitle} 
        img={aboutMe.img} 
        content={aboutMe.content}
        order1="order-1"
        order2="order-2" 
      />
      <Servicios />
      <Contacto />
      <Footer />
    </>
  )
}
