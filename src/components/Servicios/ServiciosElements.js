import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffff;

  h1 {
    font-size: 60px;
    color: #597088;
    padding: 15px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px;

    h1 {
      font-size: 6vh;
    }
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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    heigth: auto;
    margin: 15px;
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
  padding: 10px;
  background-color: #294866;
  border: 1px solid 96ac96;
  border-radius: 8px;
  box-shadow: -3px 1px 16px 0px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: -3px 1px 16px 0px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: -3px 1px 16px 0px rgba(0, 0, 0, 0.31);

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70%;
    heigth: auto;
    padding: 20px;
    margin-left: -20px;
  }
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;

  img {
    width: 200px;
    heigth: 200px;
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
  color: #ffff;

  h3 {
    margin: 0 auto;
  }

  ul li {
    justify-content: flex-start;
    margin: 10px;
  }
`;
