import React from "react";
import styled from "styled-components";

const PlusMinus = () => {
  return (
    <>
      <ButtonP>+</ButtonP>
      <Counter>1</Counter>
      <ButtonM>-</ButtonM>
    </>
  );
};

const Counter = styled.div`
  position: absolute;
  bottom: 60px;
  left: 147px;
  background: white;
  color: #a52a2a;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.6rem;
  z-index: 10;
  border: 0.2rem solid black;
  outline: none;
`;

const ButtonP = styled.button`
  position: absolute;
  bottom: 6.4rem;
  left: 190px;
  width: 3.2rem;
  height: 2.6rem;
  z-index: 10;
  font-size: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 1.2rem 1.2rem 0;
  border: 0.2rem solid black;
  outline: none;
  cursor: pointer;
`;
const ButtonM = styled.button`
  position: absolute;
  bottom: 6.4rem;
  left: 11rem;
  width: 3.2rem;
  height: 2.6rem;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.8rem;
  border-radius: 1.2rem 0 0 1.2rem;
  border: 0.2rem solid black;
  outline: none;
  padding-bottom: 3px;
  cursor: pointer;
`;

export default PlusMinus;
