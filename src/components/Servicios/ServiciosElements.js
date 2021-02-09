import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  heigth: 100%;

  h1 {
    margin-bottom: 25px;
  }
`;

export const CardConteiner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0px;
  align-items: center;
  width: 100%;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    heigth: auto;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 30px;
  margin-bottom: 15px;
  margin-top: 15px;
  width: 300px;
  heigth: auto;
  border: 1px solid white;
  border-radius: 8px;
  box-shadow: -3px 1px 16px 0px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: -3px 1px 16px 0px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: -3px 1px 16px 0px rgba(0, 0, 0, 0.31);
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;

  img {
    width: 200px;
    heigth: 50px;
    border-radius: 50%;
  }
`;

export const CardText = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  paddin: 10px;
  margin: 10px;
  width: 100%;
  height: 180px;

  h3 {
    margin: 0 auto;
  }

  ul {
    justify-content: flex-start;
    margin: 15px;
  }
`;
