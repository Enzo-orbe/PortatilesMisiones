import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  heigth: 100%;
  padding: 25px;
  background-color: #294866;

  h1 {
    font-size: 60px;
    color: #ffff;
    padding: 15px;
  }

  p {
    color: #ffff;
    font-size: 30px;
    font-style: italic;
    padding: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    heigth: 100%;
    padding: 5px;
    border-bottom: 1px solid 96ac96;

    h1 {
      font-size: 6vh;
    }

    p {
      font-size: 3vh;
    }
  }
`;

export const ConText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: auto;
  padding: 10px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    heigth: auto;
  }
`;
