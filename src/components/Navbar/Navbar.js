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

import Logo from "../../assets/images/laptop.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img style={{ height: "75px" }} src={Logo} alt="Logo" />
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
