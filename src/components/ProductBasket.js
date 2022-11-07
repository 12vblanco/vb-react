import React, { useContext } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import styled from "styled-components";
import { CartContext } from "../aux/CartContext";
import { products } from "../components/products/Products";

const ProductBasket = () => {
  const cart = useContext(CartContext);
  const id = products[0].id;

  const productQty = cart.getProductQty(id);

  return (
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
  );
};

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
`;

const H2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: -0.4rem;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76.25px;
  height: 100%;
  font-size: 4.6rem;
  font-weight: 500;
`;
const PlusMinus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44.25px;
  height: 44.45px;
  font-size: 4.6rem;
  font-weight: 500;
  cursor: pointer;
  border: 0.3px solid rgba(54, 54, 54, 0.2);
`;

export default ProductBasket;
