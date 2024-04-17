import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CarouselCarta from "../components/CarouselCarta"
import ImgPresidente from "../assets/imagesDirectivos/imgPresidente.png"
import ImgVicepresidenta from "../assets/imagesDirectivos/imgVicepresidenta.png"
import ImgSecretario from "../assets/imagesDirectivos/imgSecretario.png"
import ImgSecrVinculacion from "../assets/imagesDirectivos/imgSecrVinculacion.jpeg"
import ImgTesorera from "../assets/imagesDirectivos/imgTesorera.jpg"
import "./StylesRoutes.css"

export default function Directivos() {
  
  const carta = [
    {
      img: ImgPresidente,
      title: "Presidente",
      nombre: "Rafael Fernández Corro",
      info: `Rafael Fernández Corro es Ingeniero en Electrónica y Telecomunicaciones por la Universidad Iberoamericana, 
      con estudios de Dirección de empresas en el IPADE y en Wharton.
      Actualmente es VP Latinoamérica de BT (British Telecom),
      Rafael es Presidente de la Academia Mexicana de Informática, A.C. (AMIAC),
      adicionalmente es miembro del consejo de la Cámara Británica de Comercio en
      México, y presidente del grupo de Transformación digital de la misma Cámara.
      Se desempeñó como Presidente de la Asociación de egresados de su carrera en la
      Universidad Iberoamericana, de la que también fue profesor de la materia
      “Redes de computadoras” durante más de diez años.
      Ha sido el responsable para México y Latinoamérica de varias empresas de
      tecnologías de Información y Comunicaciones, como 3Com, Nortel, Avaya y
      ShoreTel, contribuyendo al desarrollo del sector en México.
      Es editor del portal www.vinculotic.com que se encarga de difundir
      experiencias, casos de éxito y tendencias de la industria TIC en los segmentos de
      Educación y Salud.`
    },
   
    {
      img: ImgVicepresidenta,
      title: "Vicepresidenta",
      nombre: "Alejandra Herrera",
      info: "2"
    }, 
    
    {
      img: ImgSecretario,
      title: "Secretario",
      nombre: "José Carlos Morales",
      info: "3"
    },
    
    {
      img: ImgSecrVinculacion,
      title: "Secretaria de Vinculación",
      nombre: "Julieta Palma Anda",
      info: "4"
    },

    {
      img: ImgTesorera,
      title: "Tesorera",
      nombre: "Alejandra Pineda",
      info: "5"
    },    
  ]

  return (
    
    <main className="main-directivos">
      <Navbar/>
      <div className="titulo">
      <h1>Consejo Directivo</h1>
      </div>
      <CarouselCarta cardData={carta}/>
      <Footer/>
    </main>
    
  );
}

