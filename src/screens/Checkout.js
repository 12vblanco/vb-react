import React from "react";
// import styled from "styled-components";
import MainContainer from "./MainContainer";

const Checkout = (props) => {
  return (
    <MainContainer>
      <form action="/create-checkout-session" method="POST">
        <button type="submit">Checkout</button>
      </form>
    </MainContainer>
  );
};

export default Checkout;
