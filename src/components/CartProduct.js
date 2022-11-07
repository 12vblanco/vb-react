import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../aux/CartContext";
import { getProductData } from "../products/Products";

const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <RowDiv style={{ marginTop: "28px" }}>
        <Img alt="A print of the rings of a tree" src={productData.img} />
        <ColumnDiv>
          <Name>{productData.name}</Name>
          <Qty>
            {quantity > 1 ? (
              <Qty>
                {quantity}
                <span> units</span>
              </Qty>
            ) : (
              <Qty>
                {quantity}
                <span> unit</span>
              </Qty>
            )}
          </Qty>
          <Price>Price: £ {(quantity * productData.price).toFixed(2)}</Price>

          <RowDiv>
            <Minus onClick={() => cart.removeOneFromCart(id)}>-</Minus>
            <RemoveButton onClick={() => cart.deleteFromCart(id)}>
              Remove
            </RemoveButton>
            <Plus onClick={() => cart.addOneToCart(id)}>+</Plus>
          </RowDiv>
        </ColumnDiv>
      </RowDiv>
      <hr style={{ marginTop: "3.2rem" }}></hr>
    </>
  );
};

const RemoveButton = styled.button`
  color: rgba(165, 42, 42, 0.9);
  background: #fff;
  padding: 10px 16px;
  border-radius: 1.2rem;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  z-index: 110;
  border: 0.2rem solid rgba(165, 42, 42, 0.9);
  margin: 1rem 0 -0.4rem 0;
`;

const Name = styled.p`
  letter-spacing: -0.03rem;
  font-size: 20px;
  font-style: italic;
  font-weight: 500;
`;
const Qty = styled.h3`
  color: #a52a2a;
  font-size: 18px;
  font-weight: 300;

  span {
    color: #333;
    font-size: 18px;
  }
`;
const Price = styled.h3`
  color: #333;
  font-size: 16px;
  font-weight: 500;
`;

const Img = styled.img`
  max-width: 120px;
  border-radius: 18px;
  padding: 4px;
`;

const RowDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1.2rem;
`;

const Plus = styled.span`
  font-size: 4.2rem;
  margin: -0.4rem 1rem -2rem 0.8rem;
`;
const Minus = styled.span`
  font-size: 4.2rem;
  color: #000;
  margin: -0.4rem 1rem -2rem 0px;
`;

export default CartProduct;
