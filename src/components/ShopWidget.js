import React, { useContext } from "react";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import styled from "styled-components";
import { CartContext } from "../aux/CartContext";

const ShopWidget = ({ id, price }) => {
  const cart = useContext(CartContext);

  const productQty = cart.getProductQty(id);

  return (
    <ShopWidgetWrapper>
      {" "}
      <Basket>
        {productQty > 0 ? (
          <>
            <BasketColumn>
              <Counter>{productQty}</Counter>
            </BasketColumn>
            <BasketColumn>
              <PlusMinus onClick={() => cart.addOneToCart(id)}>+</PlusMinus>
              <PlusMinus
                style={{ color: "#a52a2a" }}
                onClick={() => cart.removeOneFromCart(id)}
              >
                -
              </PlusMinus>
            </BasketColumn>
          </>
        ) : (
          <BasketColumn
            onClick={() => cart.addOneToCart(id)}
            style={{ width: "12rem", cursor: "pointer" }}
          >
            <BasketIcon />
            <H2>Add to basket</H2>
          </BasketColumn>
        )}
      </Basket>
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
          <TotalAmount>£{productQty * price}</TotalAmount>
        )}
      </Total>
      {productQty < 1 ? (
        <Checkout style={{ color: "#999", cursor: "default" }}>
          Checkout
        </Checkout>
      ) : (
        <CheckoutDiv>
          <CheckoutIcon />
          <Checkout>Checkout</Checkout>
        </CheckoutDiv>
      )}
    </ShopWidgetWrapper>
  );
};

const ShopWidgetWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 9rem;
  border: 0.3px solid rgba(54, 54, 54, 0.2);
  margin-bottom: 2.6rem;
  @media (max-width: 759px) {
    margin-bottom: 0.6rem;
  }
`;

const Basket = styled.div`
  display: flex;
  width: 12rem;
  flex-direction: row;
  width: fit-content;
  transition: all 0.4s ease-in-out;

  &:hover h2 {
    color: #a52a2a;
  }
`;

const BasketColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BasketIcon = styled(MdOutlineAddShoppingCart)`
  font-size: 5.2rem;
  margin: 0 1.6rem;
  @media (max-width: 759px) {
    font-size: 5.6rem;
  }
`;

const H2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: -0.4rem;
  @media (max-width: 759px) {
    font-size: 1.4rem;
  }
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.625rem;
  height: 100%;
  font-size: 4.6rem;
  font-weight: 500;
  @media (max-width: 759px) {
    font-size: 4.8rem;
  }
`;
const PlusMinus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.425rem;
  height: 4.425rem;
  font-size: 4.6rem;
  font-weight: 500;
  cursor: pointer;
  border: 0.3px solid rgba(54, 54, 54, 0.2);
`;

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
  @media (max-width: 759px) {
    font-size: 14px;
  }
`;
const TotalAmount = styled.p`
  font-size: 2.6rem;
  font-weight: 500;
  @media (max-width: 759px) {
    font-size: 3rem;
  }
`;

const Checkout = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333;
  text-transform: uppercase;
  padding: 1rem 1.2rem;
  border-radius: 9px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  z-index: 110;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #a52a2a;
  }
`;

const CheckoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #a52a2a;
  }
`;

const CheckoutIcon = styled(IoBagCheckOutline)`
  font-size: 3.4rem;
  margin-top: 1.4rem;
  @media (max-width: 759px) {
    font-size: 5.6rem;
  }
`;

export default ShopWidget;
