import React from "react";
import {
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavMenu,
  Bars,
} from "./NavbarElements";

import Logo from "../../assets/images/laptop.png";

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/About" activeStyle>
            {" "}
            Nosotros{" "}
          </NavLink>
          <NavLink to="/Contact" activeStyle>
            {" "}
            Contacto{" "}
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/Sign-in">Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}
