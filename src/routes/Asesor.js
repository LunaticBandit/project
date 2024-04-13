import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CarouselCarta from "../components/CarouselCarta"
import "./StylesRoutes.css"


export default function Asesor() {
  
  const carta = [
    {
      img: "https://via.placeholder.com/150",
      title: "Card title 1",
    },

    {
      img: "https://via.placeholder.com/150",
      title: "Card title 2",
    },

    {
      img: "https://via.placeholder.com/150",
      title: "Card title 3",
    }
  ]


  return (
  
    <main className="main-asesor">
      <Navbar/>
      <div className="titulo">
      <h1>Página Consejo Asesor</h1>
      </div>
      <CarouselCarta cardData={carta}/>
      <Footer/>
    </main>
    
  )
}

