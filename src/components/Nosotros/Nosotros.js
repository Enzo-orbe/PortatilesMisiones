import React from "react";
import Fade from "react-reveal/Fade";
import { Container, ConText } from "./NosotrosElements";

const Nosotros = () => {
  return (
    <Container>
      <Fade left>
        <h1>Nosotros: </h1>
        <ConText>
          <p>
            "Nacimos en el año 1998 realizando nuestras primeras reparaciones,
            luego de mucho sacrificio y trabajos realizados tanto como para
            clientes particulares y grandes empresas, podemos decir que contamos
            con más de 20 años de experiencia, siempre teniendo la mision de
            garantizar la calidad de nuestros servicios"
          </p>
        </ConText>
      </Fade>
    </Container>
  );
};

export default Nosotros;
