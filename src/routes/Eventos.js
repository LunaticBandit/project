import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./StylesRoutes.css"
import CarouselTriple from "../components/CarouselTriple"
import "./EventosStyles.css"

export default function Eventos() {

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
    <main className="main-eventos">
      <Navbar/>
      <div className="titulo">
      <h1>Página de Eventos y Noticias</h1>
      </div>
      <CarouselTriple items={itemsArray}/>
      {/* <div>
        <iframe width="300px"
        height="300px"
        title="linkedin"
        src="https://www.linkedin.com/company/amiac-oficial/posts/?feedView=all" 
        ></iframe>
        <iframe width="300px"
        height="300px"
        title="facebook"
        src="https://www.facebook.com/AMIACoficial" 
        ></iframe>
      </div>
  */}
      <Footer/>
    </main>
    
  )
}

