import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer";
import "./StylesRoutes.css"
import CarouselTriple from "../components/CarouselTriple";

export default function inicio() {

  const itemsArray = [
    [
      { imageUrl: "https://via.placeholder.com/800x400" },
      { imageUrl: "https://via.placeholder.com/800x400" },
      // Añade más elementos según sea necesario
    ],
    [
      { imageUrl: "https://via.placeholder.com/400x400" },
      { imageUrl: "https://via.placeholder.com/400x400" },
      // Añade más elementos según sea necesario
    ],
    [
      { imageUrl: "https://via.placeholder.com/400x400" },
      { imageUrl: "https://via.placeholder.com/400x400" },
      // Añade más elementos según sea necesario
    ]
  ];


  return (
    <main className="main-inicio">
      <Navbar/>
      <div className="titulo">
      <h1>Página de inicio</h1>
      </div>
      <Hero/>
      <CarouselTriple items={itemsArray}/>
      <Footer/>
    </main>
  );
}


