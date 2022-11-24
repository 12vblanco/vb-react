import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import { CartContext } from "../aux/CartContext";
import Checkout from "../screens/Checkout";
import CartProduct from "./CartProduct";

const Modal = ({ handleClose }) => {
  const cart = useContext(CartContext);

  // const checkout = async () => {
  //   alert("you are being redirected to stripe");
  //   await fetch("http://localhost:4000/checkout", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ items: cart.items }),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((response) => {
  //       if (response.url) {
  //         window.location.assign(response.url); // Forwarding user to Stripe
  //       }
  //     });
  // };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  function timer() {
    setTimeout(() => handleClose(), 2900);
  }

  return (
    <ModalWrapper>
      <ModalHeader
        style={
          productsCount > 0
            ? { borderBottom: "1px solid #333" }
            : { borderBottom: "none" }
        }
      >
        {productsCount > 0 ? <p>Your basket:</p> : ""}
        <Close>
          <IoMdClose onClick={handleClose} />
        </Close>
      </ModalHeader>
      <>
        {productsCount > 0 ? (
          <>
            {cart.items.map((currentProduct, i) => (
              <CartProduct
                key={i}
                id={currentProduct.id}
                quantity={currentProduct.quantity}
                name={currentProduct.name}
                img={currentProduct.img}
              />
            ))}
            <RowDiv>
              <p>
                Total:{" "}
                <span style={{ fontWeight: "500" }}>
                  £{cart.getTotalCost().toFixed(2)}
                </span>
              </p>
              <div
              // onClick={checkout}
              >
                <Checkout />
              </div>
            </RowDiv>
          </>
        ) : (
          <>
            <h5
              style={{
                textTransform: "sentence",
                fontWeight: "300",
                marginTop: "18px",
              }}
            >
              There are no products in your basket.
            </h5>
          </>
        )}
        {productsCount === 0 && timer()}
      </>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  top: 110px;
  right: 0;
  width: 420px;
  height: auto;
  max-height: 80vh;
  font-size: 25px;
  padding: 2rem;
  border: solid #333 0.2rem;
  border-right: none;
  background: #f4f7f8;
  z-index: 124;
  border-radius: 0.6rem 0 0 0.6rem;
  @media (max-width: 460px) {
    width: 340px;
    font-size: 20px;
    padding-top: 8px;
    top: 140px;
  }
`;

const ModalHeader = styled.header`
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  padding-bottom: 1rem;
  font-weight: 500;
`;

const Close = styled.div`
  font-size: 50px;
  cursor: pointer;
  position: absolute;
  border-radius: 1.2rem;
  right: 0.4rem;
  top: 0;
  @media (max-width: 460px) {
    font-size: 40px;
  }
`;

const RowDiv = styled.div`
  margin-top: 28px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export default Modal;
