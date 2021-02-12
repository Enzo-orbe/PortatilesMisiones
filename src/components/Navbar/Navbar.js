import React, { useState } from "react";
import {
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavMenu,
  Bars,
  Close,
} from "./NavbarElements";

import Logo from "../../assets/images/ordenador-portatil.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <p
            style={{
              fontSize: "50px",
              marginTop: "15px",
              color: "white",
              fontWeight: "bold",
            }}
            src={Logo}
            alt="Logo"
          >
            PM
          </p>
        </NavLink>
        {open ? (
          <Close onClick={() => setOpen(!open)} />
        ) : (
          <Bars onClick={() => setOpen(!open)} />
        )}

        <NavMenu open={open}>
          <NavLink to="/About" activeStyle>
            {" "}
            Nosotros{" "}
          </NavLink>
          <NavLink to="/Servicios" activeStyle>
            {" "}
            Servicios{" "}
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
