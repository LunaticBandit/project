import React from "react"
import { SocialIcon } from "react-social-icons"
import "./Footer.css"
import logo from "../assets/logoAMIAC.png"

export default function Footer() {
  return (
    
    <main id="main-footer">
        <div className="footer-contacto">
    
          <div className="description-footer">
          
            <span className="contenedor-imagen">
              <img src={logo} className="logo-footer" 
              alt="logoAMIAC"/>
            </span>

            <h2 className="titulo-contacto">Contacto</h2>
            <p style={{paddingLeft:"150px"}}> La comunidad de la AMIAC está creciendo día con día.
              Nos interesa mucho recibir tus comentarios y opiniones. 
              Por favor escríbenos a contacto@ambi.org
            </p>
          </div>

            <ul className="footer-redes">
                <h2>Redes sociales</h2>
                <li><SocialIcon bgColor="none" fgColor="black"
                network="facebook" 
                url="https://www.facebook.com/AMIACoficial/"/> Academia Mexicana de Informática</li>
                <li><SocialIcon bgColor="none" fgColor="black"
                network="instagram" 
                url="https://www.instagram.com/facebook/"/> amiac_oficial</li>
                <li><SocialIcon bgColor="none" fgColor="black"
                netrwork="twitter" 
                url="https://twitter.com/AMIAC_mx"/> Academia Mexicana de Informática</li>
                <li><SocialIcon bgColor="none" fgColor="black"
                network="linkedin" 
                url="https://www.linkedin.com/company/amiac-oficial/"/> AMIAC</li>
            </ul>
        </div>
    </main>
    
  )
}