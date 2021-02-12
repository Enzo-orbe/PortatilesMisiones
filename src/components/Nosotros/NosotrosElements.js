import styled from "styled-components";

export const Container = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #294866;

  h1 {
    font-size: 60px;
    color: #ffff;
    padding: 15px;
    margin-bottom: 30px;
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
      font-size: 4vh;
      margin: 20px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    heigth: auto;
    padding: 10px;
    margin: 10px;
  }
`;
