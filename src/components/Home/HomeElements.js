import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  heigth: 100vh;
  width: 100%;
  padding: 35px;
  border-bottom: 1px solid #6b866b;
  background-image: url("https://i.ibb.co/zh1cgm8/Dise-o-sin-t-tulo-1.png");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  h1 {
    font-size: 150px;
    margin: 0 auto;
    color: #ffff;
  }

  p {
    margin-bottom: 25px;
    color: #ffff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    heigth: 100%;
    padding: 10px;
    border-bottom: 1px solid #6b866b;
    background-size: cover;

    h1 {
      font-size: 8vh;
    }

    p {
      font-size: 2vh;
    }
  }
`;
