import React from "react";
import { Container } from "../Nosotros/NosotrosElements";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CardConteiner } from "../Servicios/ServiciosElements";
import { Link } from "react-router-dom";
import { Icon, Phone } from "./ContactoElements";

const Contacto = () => {
  return (
    <Container>
      <h1>Contacto</h1>
      <CardConteiner>
        <Icon>
          <Link>
            <FaFacebookF color="white" size="50px" />
          </Link>
        </Icon>
        <Icon>
          <Link>
            <FaInstagram color="white" size="50px" />
          </Link>
        </Icon>
        <Icon>
          <Link>
            <SiGmail color="white" size="50px" />
          </Link>
        </Icon>
        <Phone>
          <span>
            <FaPhoneAlt color="white" size="50px" />
          </span>
        </Phone>
        <Phone>3764-618003</Phone>
      </CardConteiner>
    </Container>
  );
};

export default Contacto;
