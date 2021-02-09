import React from "react";
import {
  Container,
  Card,
  CardConteiner,
  CardIcon,
  CardText,
} from "./ServiciosElements";

const Servicios = () => {
  return (
    <Container>
      <h1>Nuestros Servicios:</h1>
      <CardConteiner>
        <Card>
          <CardIcon>
            <img
              src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_960_720.png"
              alt="prueba"
            />
          </CardIcon>
          <CardText>
            <h3>Venta de:</h3>
            <ul>
              <li>Repuestos</li>
              <li>Equipos nuevos y usados</li>
            </ul>
          </CardText>
        </Card>
        <Card>
          <CardIcon>
            <img
              src="https://cdn.pixabay.com/photo/2013/07/12/12/01/screwdriver-145111_960_720.png"
              alt="prueba"
            />
          </CardIcon>
          <CardText>
            <h3>Reparacion de:</h3>
            <ul>
              <li>Notebooks</li>
              <li>Pc</li>
              <li>Tablets</li>
              <li>Netbooks</li>
            </ul>
          </CardText>
        </Card>
        <Card>
          <CardIcon>
            <img
              src="https://cdn.pixabay.com/photo/2014/04/03/11/54/laptop-312499_960_720.png"
              alt="prueba"
            />
          </CardIcon>
          <CardText>
            <h3>Servicios de:</h3>
            <ul>
              <li>Mantenimiento de los equipos de tu empresa</li>
              <li>Instalaciones y extensiones de red</li>
              <li>Mantenimiento de tu equipo a domicilio o remoto</li>
            </ul>
          </CardText>
        </Card>
      </CardConteiner>
    </Container>
  );
};

export default Servicios;
