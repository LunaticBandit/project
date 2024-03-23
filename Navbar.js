import React, {useState} from 'react'
import "./NavbarStyles.css"
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';

function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
    <nav className="navbar-items">
      <div className="navbar-logo">
        <img src="" alt="" />
      </div>
     
      <section class="profile-link">

        <ul className="nav-menu"> 

        {MenuItems.map((item,index) => {
                if(index === 1) {
                    return (
                        <div className="nav-menu-2" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                            <li className="dropdown-button">¿Quiénes somos?</li>
                            {isOpen &&(
                            <ul>
                              <li className="menu-drop"><a href="/historia">Historia</a></li>
                              <li className="menu-drop"><a href="/mision">Misión y Visión</a></li>
                              <li className="menu-drop"><a href="/estatutos">Histórico Estatutos</a></li>
                            </ul>
                                )}
                            </div>
                    );
                } else {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <i>{item.title}</i>
                            </Link>
                        </li>
                    );
                }
            })}
        </ul>
      </section>        
    </nav>
    </>
  );
}

export default Navbar;