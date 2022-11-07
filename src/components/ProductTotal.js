import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../aux/CartContext";
import { products } from "../components/products/Products";

const id = products[0].id;

const ProductTotal = () => {
  const cart = useContext(CartContext);
  const productQty = cart.getProductQty(id);

  return (
    <Total>
      {productQty < 1 ? (
        <TotalText style={{ padding: "0 .8rem", fontWeight: "300" }}>
          This product is not in your basket yet
        </TotalText>
      ) : (
        <>
          {productQty < 2 ? (
            <TotalText>Total for this {productQty}:</TotalText>
          ) : (
            <TotalText>Total for these {productQty}:</TotalText>
          )}
        </>
      )}

      {productQty < 1 ? (
        <TotalAmount />
      ) : (
        <TotalAmount>£{productQty * products[0].price}</TotalAmount>
      )}
    </Total>
  );
};

const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65%;
  padding: 1.2rem 0px;
  border: 0.3px solid rgba(54, 54, 54, 0.2);
`;

const TotalText = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.6rem 0;
`;
const TotalAmount = styled.p`
  font-size: 2.6rem;
  font-weight: 500;
  /* color: #a52a2a; */
`;

export default ProductTotal;
