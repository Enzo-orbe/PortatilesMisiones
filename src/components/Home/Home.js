import React from "react";
import { Container } from "./HomeElements";
import Nosotros from "../Nosotros/Nosotros";
import Servicios from "../Servicios/Servicios";

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
    </>
  );
};

export default Home;
