import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


export default function Mision() {
  return (

    <section className="main">
      {/*importamos el elemento Navbar para colocar la
      barra de navegación de la página*/}
      <Navbar/>
    <div className="mision">
      <p style={{color: "black"}}>
      ​La AMIAC es una Asociación autosustentable de expertos interesados 
      en impulsar la informática en nuestro País, cuya razón de ser es impulsar la cultura, 
      el conocimiento y la aplicación de la informática en todas las esferas de la vida cotidiana y productiva 
      de la sociedad mexicana: educación, salud, desarrollo económico, cultura, recreación y política. 
      Por su naturaleza de Asociación Civil, los miembros de la AMIAC no representan a ninguna otra organización, 
      por lo que pueden pertenecer a cualquier sector académico, empresarial y/o gubernamental.  
      </p>
    </div>

    <div className="vision">
        <p style={{color: "black"}}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
         dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
         ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
         mollit anim id est laborum."
        </p>
    </div>
      {/*importamos el elemento Footer para colocar el footer
       de la página*/}
      <Footer/>
    </section>

  
  )
}

