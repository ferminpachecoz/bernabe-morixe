import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Service/Banner'
import WrapperSimpleCards from '../components/WrapperSimpleCards'
import ImageText from '../components/ImageText'
import Footer from '../components/Footer'

export default function Clinica() {
  let array=[
    {
      title: "Ansiedad y estrés",
      icon: "/icons/anxiety.png",
      iconHover: "/icons/anxiety-hover.png"
    },
    {
      title: "Procesos de duelo y cambio",
      icon: "/icons/equilibrium.png",
      iconHover: "/icons/equilibrium-hover.png"
    },
    {
      title: "Relaciones interpersonales",
      icon: "/icons/empathetic.png",
      iconHover: "/icons/empathetic-hover.png"
    },
    {
      title: "Desarrollo personal",
      icon: "/icons/self-confidence.png",
      iconHover: "/icons/self-confidence-hover.png"
    },
    {
      title: "Vida con Sentido",
      icon: "/icons/compass.png",
      iconHover: "/icons/self-confidence-hover.png"
    },
  ]
  return (
    <>
      <Header />
      <Banner title={"Clínica Individual"} />
      <ImageText 
        img={"/services/service-1.jpg"} 
        title={"Psicología Clínica"}
        subtitle={"Espacio personal para superar desafíos emocionales y conectar con propósito y bienestar."} 
        content={"Te ofrezco un espacio de escucha, atención y trabajo personal. Mi <strong>objetivo</strong>: que puedas <strong>conocerte mejor</strong>, ganar claridad en cómo te ubicas en tus <strong>vínculos</strong> más significativos, reconectar con tu <strong>fuerza interna</strong> y acompañarte a vivir una vida en <strong>plenitud y con sentido</strong>."}
        order1="order-lg-1"
        order2="order-lg-2" 
      />
      <div>
        <p className='section-subtitle' style={{textAlign: "center"}}>
          Especialización
        </p>
        <p className='section-title' style={{textAlign: "center"}}>
          Mis áreas de acompañamiento incluyen:
        </p>
        <WrapperSimpleCards array={array}/>
      </div>
      <ImageText 
        img={"/services/service-2.jpg"}
        title={"Población con la que trabajo"}
        subtitle={"¿Con quién trabajo?"}
        content={"Ofrezco acompañamiento psicológico a <strong>adolescentes, jóvenes y adultos</strong> en diferentes etapas de sus vidas. También brindo <strong>orientación a padres</strong> que buscan fortalecer su rol y enfrentar desafíos en la crianza de sus hijos.<p>Trabajo tanto de manera <strong>presencial en Tandil y San Isidro</strong> como en <strong>modalidad online</strong>.</p>"}
        order1={"order-lg-1"}
        order2={"order-lg-2"}
      />
      <ImageText
        img={"/services/service-3.jpg"}
        title={"Enfoque y herramientas"}
        content={"Mi orientación psicológica combina el enfoque <strong>humanista-existencial</strong>, que pone en el centro la <strong>búsqueda de sentido de vida</strong> y el <strong>desarrollo de todo tu potencial</strong>, con una perspectiva sistémica que considera el impacto de los <strong>vínculos y las dinámicas familiares</strong> que nos atraviesan. <p><strong>Integro también herramientas del focusing, la terapia cognitiva, la neuropsicología, las constelaciones familiares y tratamientos cuánticos</strong>. A través de este enfoque, acompaño a mis pacientes a comprender cómo sus relaciones y experiencias dan forma a su historia personal, ayudándote a generar cambios significativos y alineados con su propósito.</p>"}
        order1="order-lg-2"
        order2="order-lg-1"
      />
      <Footer />
    </>
  )
}
