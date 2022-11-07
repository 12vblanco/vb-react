import React from "react";
import styled from "styled-components";

const ProductBtn = ({ title }) => {
  return <StyledButton>{title}</StyledButton>;
};

const StyledButton = styled.button`
  /* position: absolute; */
  /* bottom: 1.6rem; */
  /* left: 50%;
  transform: translate(-50%); */
  background-color: rgba(165, 42, 42, 0.9);
  color: #fff;
  padding: 0.65rem 1.4rem;
  border-radius: 25px;
  font-size: 1.6rem;
  font-weight: 500;
  transition: all 0.4s;
  backface-visibility: hidden;
  cursor: pointer;
  z-index: 1410;
  border: 1px solid #333;
  margin: 0.6rem 0 1.2rem 0;

  &:hover {
    font-size: 2.05rem;
    padding: 0.8rem 1.85rem;
    transition: all 0.4s;
    width: 17.4rem;
  }
`;

export default ProductBtn;
