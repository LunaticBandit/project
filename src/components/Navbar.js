import React, {useState} from "react"
import "./NavbarStyles.css"
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import logo from "../assets/logoAMIAC.png"

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  function scrollToFooter() {
    const footer = document.getElementById("main-footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  return (
    <div>
    <nav className="navbar-items">
      <a href="/">
        <img src={logo} className="logo-navbar"
       alt="logo-AMIAC"/></a>
      <div class="profile-link">
        <ul className="nav-menu">
        {MenuItems.map((item,index) => {
                if(index === 1) {
                    return (
                        <div className="nav-menu-2" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                            <li className="nav-links">¿Quiénes somos?</li>
                            {isOpen &&(
                            <ul>
                              <li><a href="/Historia">Historia</a></li>
                              <li><a href="/Mision">Misión y Visión</a></li>
                              <li><a href="/Estatutos">Histórico Estatutos</a></li>
                            </ul>
                                )}
                            </div>
                    );
                } else { 
                    return(
                    <li key={index}>
                    <Link className={item.cName} to={item.url}>
                    {item.title}
                    </Link>
                    </li> 
                )}
            })}
            <li><Link className="nav-links" onClick={scrollToFooter}>Contacto</Link></li>
        </ul>
      </div>        
    </nav>
    </div>
  );
}
