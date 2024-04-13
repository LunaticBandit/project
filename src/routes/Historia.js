import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


export default function Historia() {
  return (
  
   <main className="main-historia">
      <Navbar/>
    <div className="parrafo-1">
    <p> En septiembre de 1976 se fundó la Academia Mexicana de Informática, A.C. (AMIAC).
        Se decidió denominarla “Academia” con la visión de que sería una agrupación que buscara más la calidad de los agremiados, 
        que la cantidad de ellos, y generara un ambiente de discusión, compañerismo e intercambio de ideas, tanto para beneficio de los miembros, 
        como para promover el uso de la informática a favor de la sociedad.
        Uno de los proyectos principales que desarrolló la AMIAC en sus inicios, fue el Simposio Internacional de Informática, Victorio Sánchez, 
        el primer Presidente, consiguió el financiamiento para el evento, fue inaugurado por el Presidente de la República de aquel entonces, Miguel López Portillo.</p>
        <figure>
          <img src="" alt="img1" />
          <figcaption><i>Entrada a la Inauguración del Simposio Internacional de Informática</i></figcaption>
        </figure>
            
    </div>
    <div className="parrafo-2">
    <p> Destaca la participación que tuvieron miembros de la AMIAC en la elaboración del Programa Nacional de Desarrollo Informático que formó parte 
      Plan Nacional de Desarrollo 1994-2000 y en el Grupo Consultivo de Política Informática que creó el INEGI a principios de los 90s, También es relevante el apoyo que 
      la Academia dio al Consejo Nacional de Acreditación en Informática y Computación (CONAIC) a principios de la década pasada para revisar que los programas de 
      licenciatura de diversas instituciones de educación superior estuvieran alineados con los Modelos Curriculares elaborados por la 
      Asociación Nacional de Instituciones de Educación en Informática (ANIEI). </p>
        <figure>
          <img src="" alt="img2" />
          <figcaption><i>Noticia sobre la entrega del Premio al Mérito Informático al Ing. Enzo Molino Ravetto (22-26 julio 1996)</i></figcaption>
        </figure>
    </div>
    <div className="parrafo-3">
    <p> En 1996, la Academia fue invitada por el Comité Organizador del Seminario sobre “Tecnologías de la Información para el Desarrollo de la Administración Pública” (TIDAP)
       integrado por: la Secretaría de la Contraloría y Desarrollo Administrativo (SECODAM), la Secretaría de Comercio y Fomento Industrial (SECOFI), 
       el Instituto Nacional de Estadística, Geografía e Informática (INEGI) y el Instituto Nacional de Administración Pública, A.C. (INAP), para coordinar  
       la organización del TIDAP’96, 97 y 98, en carácter de administrador de los recursos financieros del evento y en el proceso de registro de los participantes.</p>
         <figure>
          <img src="" alt="img3" />
          <figcaption><i>Cambio de mesa directiva en 1999. De izquierda a derecha, Alejandro del Toro, Lauro López Sánchez, Jorge Hernández, Sergio Beltrán jr., 
            Erasmo Marín† (Presidente Saliente), Mario Fosado Peñaloza (Presidente Entrante), Christian Zempoaltécatl, José Antonio Soberón, Rosendo J. Sánchez Palma, 
            Sergio de Miguel Agüero, Rodrigo Aguirre, y Jorge Gil Mendieta</i></figcaption>
        </figure>
    </div>
      <Footer/>
   </main>
  )
}

