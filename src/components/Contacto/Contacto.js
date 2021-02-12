import React from "react";
import { Container } from "../Nosotros/NosotrosElements";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import Fade from "react-reveal";
import { Icon, Phone, ContactConteiner } from "./ContactoElements";

const Contacto = () => {
  return (
    <Container>
      <h1>Contacto</h1>
      <Fade bottom>
        <ContactConteiner>
          <Icon>
            <Link>
              <FaFacebookF color="white" size="35px" />
            </Link>
          </Icon>
          <Icon>
            <Link>
              <FaInstagram color="white" size="35px" />
            </Link>
          </Icon>
          <Icon>
            <Link>
              <SiGmail color="white" size="35px" />
            </Link>
          </Icon>

          <Phone>
            <span>
              <FaPhoneAlt color="white" size="35px" />
            </span>
          </Phone>
          <Phone>3764-618003</Phone>
        </ContactConteiner>
      </Fade>
    </Container>
  );
};

export default Contacto;
