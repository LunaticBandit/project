import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./StylesRoutes.css"
import"./PublicacionesStyles.css"

export default function Publicaciones() {
  return (
    <main className="main-publicaciones">
      {/*importamos el elemento Navbar para colocar la
      barra de navegación de la página*/}
      <Navbar/>
      <div className="titulo">
      <h1>Página de Publicaciones</h1>
      </div>
      {/*importamos el elemento Footer para colocar el footer
       de la página*/}
       <img src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
       alt=""/>
       <div>
        <ol>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
       </div>
      <Footer/>
    </main>
    
  )
}
