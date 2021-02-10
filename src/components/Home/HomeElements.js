import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &::before {
    content: "";
    background-image: url("https://i.ibb.co/zh1cgm8/Dise-o-sin-t-tulo-1.png");
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.75;
  }

  h1 {
    position: relative;
    color: #ffffff;
    font-size: 10rem;
    line-height: 0.9;
    text-align: center;
  }

  p {
    position: relative;
    color: #ffffff;
    font-size: 3rem;
    line-height: 0.9;
    text-align: center;
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
