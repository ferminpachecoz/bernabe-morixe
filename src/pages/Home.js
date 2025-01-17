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
    img: "imagen2.jpg",
    content:"Soy psicólogo clínico (MN: 48.987 - USAL) y tengo más de 15 años de experiencia en el tratamiento de adolescentes, jóvenes y adultos. Tengo experiencia dando talleres para trabajo personal de padres, así como espacios terapéuticos grupales. Este último tiempo me especializo en la aplicación, investigación y estudios de tratamientos cuánticos.<br>Nací en Buenos Aires, Argentina. Me crié y crecí en Zona Norte. Hoy día vivo en Tandil, Actualmente soy padre de familia, estoy casado, y tengo 3 hijos. Me encanta pasar tiempo con mi familia, hacer campings, jugar al fútbol los domingos y subir montañas con amigos. Me gusta la música, y soy un apasionado de aprender y estudiar."
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
