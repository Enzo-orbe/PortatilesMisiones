import React from "react";
import { Container } from "./HomeElements";
import Nosotros from "../Nosotros/Nosotros";
import Servicios from "../Servicios/Servicios";
import Contacto from "../Contacto/Contacto";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Container>
        <h1>Portatiles</h1>
        <h1>Misiones</h1>
        <p>Mas de 20 años de experiencia</p>
      </Container>
      <Nosotros />
      <Servicios />
      <Contacto />
      <Footer />
    </>
  );
};

export default Home;
