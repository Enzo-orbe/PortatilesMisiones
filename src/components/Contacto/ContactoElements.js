import styled from "styled-components";

export const Icon = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffff;
  text-decoration: none;
  font-size: 50px;
  border: 1px solid white;
  margin: 25px;
  border-radius: 8px;
  padding: 20px;
  transition: font-size 2s;
  box-shadow: -6px 10px 42px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -6px 10px 42px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -6px 10px 42px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    background-color: #7bb2c7;
    padding: 30px;
    cursor: pointer;
  }
`;

export const Phone = styled.p`
  border: 1px solid white;
  margin: 25px;
  border-radius: 8px;
  box-shadow: -6px 10px 42px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -6px 10px 42px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -6px 10px 42px 0px rgba(0, 0, 0, 0.75);
`;
