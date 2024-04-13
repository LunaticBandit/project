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
    },
   
    {
      img: ImgVicepresidenta,
      title: "Vicepresidenta",
      nombre: "Alejandra Herrera",
    }, 
    
    {
      img: ImgSecretario,
      title: "Secretario",
      nombre: "José Carlos Morales",

    },
    
    {
      img: ImgSecrVinculacion,
      title: "Secretaria de Vinculación",
      nombre: "Julieta Palma Anda",
    },

    {
      img: ImgTesorera,
      title: "Tesorera",
      nombre: "Alejandra Pineda",
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

