import React, { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import styled from "styled-components";
import { CartContext } from "../aux/CartContext";

const Chart = ({ handleShow }) => {
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <>
      <ShoppingDiv onClick={handleShow}>
        <ShoppingCart />
        <Counter>{productsCount}</Counter>
      </ShoppingDiv>
    </>
  );
};

const ShoppingDiv = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 1rem;
`;

const ShoppingCart = styled(MdOutlineShoppingCart)`
  font-size: 46px;
  margin-top: 16px;
  width: 56px;
  margin-left: 3.6rem;
  position: relative;
  @media (max-width: 646px) {
    font-size: 44px;
    margin-top: 6px;
  }
`;

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  width: 24px;
  height: 24px;
  font-size: 20px;
  background: #a52a2a;
  padding: 1px;
  position: relative;
  top: 4px;
  right: 14px;
`;

export default Chart;
