import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  
  {
    path: "/Home",
    display: "Home",
  },
  
  {
    path: "/Research",
    display: "Research",
  },
  {
    path: "/Planning",
    display: "Planning",
  },
  {
    path: "/Designing",
    display: "Designing",
  },

  {
    path: "/Manufacture",
    display: "Manufacture",
  },
  {
    path: "/Sales",
    display: "Sales",
  }

];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      
      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div> 
            </div>   
            <div className="nav__right right">
             <h5 className="liz">LIZMOTOR</h5>
           </div> 
           
          </div>
          
        </Container>
      </div>
    </header>
  );
};

export default Header;
