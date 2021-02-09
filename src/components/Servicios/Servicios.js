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
      <h1>Nuestros Servicios</h1>
      <CardConteiner>
        <Card>
          <CardIcon>
            <img
              src="https://image.flaticon.com/icons/png/512/1018/1018259.png"
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
              src="https://image.flaticon.com/icons/png/512/1018/1018259.png"
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
              src="https://image.flaticon.com/icons/png/512/1018/1018259.png"
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
