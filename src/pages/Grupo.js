import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageText from '../components/ImageText'
import WrapperSimpleCards from '../components/WrapperSimpleCards'
import Banner from '../components/Service/Banner'

export default function Grupo() {
  let array=[
      {
        text: "Talleres de crecimiento personal (Perspectiva Sistémica - Constelaciones Familiares).",
        icon: "/icons/plant.png",
        iconHover: "/icons/plant-hover.png"
      },
      {
        text: "Talleres de orientación a padres.",
        icon: "/icons/parenting.png",
        iconHover: "/icons/parenting-hover.png"
      },
      {
        text: "Espacio grupal terapéutico para jóvenes.",
        icon: "/icons/users.png",
        iconHover: "/icons/users-hover.png"
      },
      {
        text: "Intervenciones y talleres en comunidades vulnerables.",
        icon: "/icons/network.png",
        iconHover: "/icons/network-hover.png"
      },
      {
        text: "Talleres de Educación Sexual y Educación para el Amor.",
        icon: "/icons/love.png",
        iconHover: "/icons/love-hover.png"
      },
  ]
  return (
    <>
      <Header />
      <Banner title="Talleres y Espacio Grupales"/>
      <ImageText 
        img={"/services/service-4.png"}
        title={"¿Qué son?"}
        subtitle={"Dinámicas participativas para el aprendizaje, apoyo mutuo y crecimiento colectivo."}
        content={"Los talleres y espacios grupales proponen una oportunidad única para explorar temas relevantes, <strong>aprender herramientas prácticas</strong> y <strong>nutrirnos de las experiencias compartidas</strong> con otros. La dinámica grupal no solo facilita el aprendizaje, sino que también fomenta la <strong>empatía</strong>, el <strong>apoyo</strong> mutuo y la posibilidad de crecer de la diversidad de <strong>miradas y perspectivas</strong>."}
        order1="order-lg-1"
        order2="order-lg-2"
      />
      <div>
        <p className='section-title' style={{textAlign:"center"}}>Experiencia en diversas temáticas como:</p>
        <WrapperSimpleCards array={array} />
      </div>
      <ImageText 
        img={"/services/service-7.png"}
        title={"¿Cómo funciona?"}
        content={"Cada encuentro se diseña con un enfoque <strong>participativo y reflexivo</strong>, adaptado a las necesidades del grupo, con el objetivo de facilitar un espacio de <strong>crecimiento personal y colectivo</strong>."}
        order1="order-lg-2"
        order2="order-lg-1"
      />
      <Footer />
    </>
  )
}
