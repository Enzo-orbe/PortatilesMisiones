import React from "react";
import { Container } from "./HomeElements";
import Nosotros from "../Nosotros/Nosotros";

const Home = () => {
  return (
    <>
      <Container>
        <h1>Portatiles</h1>
        <h1>Misiones</h1>
        <p>Mas de 20 años de experiencia</p>
      </Container>
      <Nosotros />
    </>
  );
};

export default Home;
