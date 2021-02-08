import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  heigth: 100%;
  pading: 5px;
  border-bottom: 1px solid black;

  h1 {
    font-size: 150px;
    margin: 0 auto;
  }

  p {
    margin-bottom: 25px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    heigth: 100%;
    pading: 5px;
    border-bottom: 1px solid black;

    h1 {
      font-size: 8vh;
    }
  }
`;
