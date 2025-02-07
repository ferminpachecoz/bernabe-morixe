import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageText from '../components/ImageText'
import WrapperSimpleCards from '../components/WrapperSimpleCards'
import Banner from '../components/Service/Banner'

export default function Sanacion() {
  let array=[
    {
      title: "1) Energía 24/7",
      text: "Las vibraciones trabajan en tu campo energético de día y de noche durante el periodo seleccionado.",
      icon: "/icons/energy.png",
      iconHover: "/icons/energy-hover.png",
    },
    {
      title: "2) D.I.V.",
      text: "Ingresamos tus datos de identificación vibracional en nuestro equipo Quantec.",
      icon: "/icons/data.png",
      iconHover: "/icons/data-hover.png",
    },
    {
      title: "3) Detección",
      text: "El Quantec detecta los desórdenes vibracionales en tu campo energético.",
      icon: "/icons/vibration.png",
      iconHover: "/icons/vibration-hover.png",
    },
    {
      title: "4) Programación",
      text: "Programamos nuestro equipo y activamos las vibraciones específicas para armonizar tu campo energético.",
      icon: "/icons/program.png",
      iconHover: "/icons/program-hover.png",
    },
  ]
  let array1=[
    {
      title: "A distancia",
      text: "Recibe el tratamiento desde cualquier lugar del mundo, sin necesidad de desplazarte ni comprar dispositivos adicionales.",
      icon: "/icons/distance.png",
      iconHover: "/icons/distance-hover.png"
    },
    {
      title: "Día y noche",
      text: "Las vibraciones se activan continuamente, tanto de día como de noche, favoreciendo un tratamiento constante.",
      icon: "/icons/day-and-night.png",
      iconHover: "/icons/day-and-night-hover.png"
    },
    {
      title: "Ondulación vibracional",
      text: "Es 100% vibracional y no requiere medicación extra ni intervenciones invasivas.",
      icon: "/icons/vibration.png",
      iconHover: "/icons/vibration-hover.png"
    },
  ]
  let array2=[
    {
      title:"1) Ondulaciones Cuánticas",
      text:"A través de esta avanzada tecnología, se emiten frecuencias específicas que actúan sobre tu campo vibracional. Estas ondas están diseñadas para equilibrar y revitalizar tu energía, promoviendo un estado de bienestar y plenitud.",
      icon:"/icons/day-and-night.png"
    },
    {
      title:"2) Trabajo de transformación personal",
      text:"Si lo quisieras, podes potenciar el trabajo ondulatorio recibido, alienado tu Ser y tu voluntad a través de <strong>una guía diseñada específicamente para este proceso.</strong>",
      icon:"/icons/vibration.png"
    },
  ]
  let array3=[
    {
      title:"Secuencia de Meditaciones",
      text:"Como parte del proceso, recibirás una serie de meditaciones guiadas que complementan las sesiones. Estas prácticas están diseñadas para <strong>facilitar tu conexión interna, reducir el estrés y potenciar los efectos del tratamiento</strong>.",
      icon:"/icons/day-and-night.png"
    },
    {
      title:"Cuadernillo de Actividades",
      text:"Para profundizar en tu experiencia, se te proporcionará un <strong>cuadernillo con actividades prácticas y reflexivas</strong>. Estas herramientas te ayudarán a integrar lo trabajado en el Quantec y a <strong>cultivar hábitos que apoyen tu bienestar a largo plazo</strong>.",
      icon:"/icons/vibration.png"
    },
  ]
  return (
    <>
      <Header />
      <Banner title="Armonización de campo energético a distancia con tecnología Cuántica." />
      <ImageText
        img={"/services/service-6.jpg"}
        title={"¿Qué ofrece?"}
        content={"<strong>Recupera tu equilibrio energético desde cualquier lugar del mundo, sin medicación ni desplazamientos</strong>. Nuestro tratamiento de sanación vibracional armoniza y equilibra tus cuerpos energéticos (físico, vital, emocional, mental y espiritual) usando la avanzada tecnología Quantec."}
        order1="order-lg-1"
        order2="order-lg-2"
      />
      <ImageText
        img={"/services/service-7.png"}
        title={"¿Qué es la armonización de campo energético a distancia?"}
        content={"La armonización de campo energético a distancia es un <strong>tratamiento enfocado en armonizar y equilibrar tus cuerpos energéticos</strong> a través de la tecnología cuántica. El Quantec es un equipo capaz de <strong>detectar desórdenes en tu campo energético y enviar las vibraciones necesarias para reestablecer tu bienestar</strong>, todo de manera remota."}
        order1="order-lg-2"
        order2="order-lg-1"
      />
      <ImageText
        img={"/services/service-8.jpg"}
        title={"¿Cómo se aplica la tecnología cuántica en la sanación?"}
        content={"El Quantec opera bajo los principios de la física cuántica, que sostiene que todo en el universo es energía. <strong>Cada persona tiene un campo energético único, y cuando ese campo se desequilibra, puede dar lugar a síntomas físicos, emocionales o mentales</strong>. Utilizando frecuencias específicas, <strong>el Quantec corrige estos desórdenes, permitiendo que el cuerpo vuelva a un estado de equilibrio natural</strong>."}
        order1="order-lg-1"
        order2="order-lg-2"
      />
      <div className='pad1'>
        <p className='section-title' style={{textAlign:"center"}}>¿Cómo funciona?</p>
        <WrapperSimpleCards array={array}/>
      </div>
      <div className='pad1'>
        <p className='section-title' style={{textAlign:"center"}}>Ventajas</p>
        <WrapperSimpleCards array={array1}/>
      </div>
      <div className='pad1'>
        <p className='section-subtitle' style={{textAlign:"center"}}>El tratamiento vibracional cuántico se basa en la armonización integral de cuerpo, mente y energía. Puede realizarse de 2 maneras:</p>
        <p className='section-title' style={{textAlign:"center"}}>Descripción del Tratamiento Vibracional Cuántico</p>
        <WrapperSimpleCards array={array2}/>
      </div>
      <div className='pad1'>
        <p className='section-title' style={{textAlign:"center"}}>¿En qué consiste la guía?</p>
        <WrapperSimpleCards array={array3} />
      </div>
      <p className='section-title' style={{textAlign:"center"}}>¿Por qué un tratamiento basado en la física cuántica puede ayudarnos a nuestra mejora personal?</p>
      <ImageText
        img={"/services/service-9.png"}
        title={"1) El campo cuántico: La energía que sana y equilibra"}
        content={"Los últimos descubrimientos de la física Cuántica (a diferencia del modelo Newtoneano), han demostrado que a nivel molecular, la materia no es sólida, sino que se sostiene en un campo energético. Este campo, lleno de energía potencial infinita, es la matriz de la creación, donde todas las posibilidades existen antes de manifestarse en la realidad. Al comprender que <strong>esta energía y sus posibilidades están presente en todo momento, podemos abrirnos a ella para restaurar el equilibrio y sanar nuestros cuerpos energéticos</strong>."}
        order1="order-lg-1"
        order2="order-lg-2"
      />
      <ImageText
        img={"/services/service-10.jpg"}
        title={"2) La capacidad de crear y diseñar una forma de vida desde una intencionalidad clara e integrada a nuestro Ser"}
        content={"La física cuántica nos enseña que <strong>el observador influye en la realidad: donde ponemos nuestra atención e intención, generamos cambios</strong>. Al alinear nuestro Ser con nuestra intención  (nuestros valores, propósito y esencia), <strong>podemos diseñar una vida que refleja nuestras aspiraciones más profundas</strong>.<p>Esto implica:</p><ul><li>Tomar decisiones conscientes que resuenen con nuestro bienestar.</li><li>Ser creativos en la forma en que abordamos nuestras metas, sabiendo que tenemos el poder de transformar nuestra realidad.</li><li>Vivir con propósito, dejando que nuestras intenciones claras guíen nuestra vida hacia un estado de plenitud.</li></ul>"}
        order1="order-lg-2"
        order2="order-lg-1"
      />
      <ImageText
        img={"/services/service-10.jpg"}
        title={"3) La interconexión de todo lo que es y las oportunidades de transformación (el campo y las sincronías)"}
        content={"El <strong>principio de entrelazamiento cuántico demuestra que todo en el universo está conectado</strong>. Esta interconexión nos recuerda que nuestras acciones, pensamientos y emociones afectan no solo nuestra experiencia personal, sino también la de quienes nos rodean y nuestro entorno.<p><strong>Reconocer esta conexión nos permite:</strong></p><ul><li>Ser más conscientes de las energías que emitimos y recibimos.</li><li>Abrirnos a oportunidades inesperadas de crecimiento y transformación al estar en sintonía con el flujo universal.</li><li>Colaborar con otros desde un lugar de empatía y unidad, sabiendo que nuestras relaciones son un reflejo de nuestra energía interna.</li></ul>"}
        order1="order-lg-1"
        order2="order-lg-2"
      />
      <hr style={{width:"80%", margin:"auto"}}/>
      <p className='section-title' style={{textAlign:"center", marginbottom:"15px"}}>INTEGRANDO TECNOLOGÍA E INTENCIONALIDAD TENEMOS LA POSIBILIDAD DE TRANSFORMARNOS Y VIVIR UNA VIDA EN PLENITUD, LLENA DE SENTIDO Y VITALIDAD.</p>
      <hr style={{width:"80%", margin:"auto"}} />
      <ImageText
        img={"/services/service-1.png"}
        title={"Casos de uso"}
        content={`<ul>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">Pacientes en internación hospitalaria que buscan complementar su recuperación.</li>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">Personas que atraviesan tratamientos oncológicos (cirugías, quimioterapia, radiación).</li>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">Aquellos con dificultades para conciliar el sueño, que sufren de estrés o ansiedad.</li>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">Pacientes con sistemas inmunológicos debilitados o condiciones crónicas de dolor.</li>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">Personas que quieran transformar su estado de ser, y desde ahí, ser testigo de cómo la realidad se transforma y cobra un nuevo sentido.</li>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">Personas de cualquier edad, cualquier condición.</li>
        </ul>`}
        order1="order-lg-1"
        order2="order-lg-2"
      />
      <ImageText 
        img={"/services/service-1.png"}
        title={"Resultados esperados"}
        content={`<ul>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
          Recuperación energética y bienestar.
          </li>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">Reducción del estrés y la ansiedad.</li>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">Apoyo en tratamientos médicos convencionales, mejorando su eficacia.</li>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">Mejoras en el sueño y en el estado emocional.</li>
        </ul>`}
        order1={"order-lg-2"}
        order2={"order-lg-1"}
      />
      <Footer />
    </>
  )
}
