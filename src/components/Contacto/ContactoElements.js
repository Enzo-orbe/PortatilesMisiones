import styled from "styled-components";

export const ContactConteiner = styled.div`
  display: flex;
  justify-content: center;
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

export const Icon = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffff;
  text-decoration: none;
  font-size: "50px";
  border: 1px solid white;
  margin: 25px;
  border-radius: 8px;
  padding: 20px;
  box-shadow: -6px 10px 42px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -6px 10px 42px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -6px 10px 42px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    background-color: #7bb2c7;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffff;
    text-decoration: none;
    font-size: 30px;
    border: 1px solid white;
    margin: 5px;
    border-radius: 8px;
    padding: 20px;
  }
`;

export const Phone = styled.p`
  border: 1px solid white;
  margin: 25px;
  border-radius: 8px;
  box-shadow: -6px 10px 42px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -6px 10px 42px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -6px 10px 42px 0px rgba(0, 0, 0, 0.75);
  padding: 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffff;
    text-decoration: none;
    font-size: 50px;
    border: 1px solid white;
    margin: 2px;
    margin-bottom: 15px;
    border-radius: 8px;
    padding: 20px;
  }
`;
