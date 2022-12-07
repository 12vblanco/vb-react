import React from "react";
import Stripe from "stripe";
import styled from "styled-components";

const stripe = Stripe(
  "pk_test_51HqgwdGKpDMhyEuL11A63hDc42CNdjZbMH93xDPIumVyYlgGe5byVF9rXhgW0rs64r0uaDjQUqlwOUDXrbTZy9nx00cyCIwiBm"
);

const callApi = async (cart) => {
  alert("you are being redirected to stripe");
  await fetch("api/stripe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ items: cart.items }),
  })
    .then((response) => {
      return response.json();
    })
    .then((session) => {
      console.log(session); // Log the session object to the console
      return stripe.redirectToCheckout({ sessionId: session.id });
    });
};

const Checkout = () => {
  return (
    <div>
      <form
        onSubmit={callApi}
        // onSubmit={checkout}
      >
        <ChkButton>Checkout</ChkButton>
      </form>
    </div>
  );
};

const ChkButton = styled.button`
  background-color: #fff;
  color: #333;
  padding: 10px 16px;
  border-radius: 1.2rem;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  z-index: 110;
  border: 0.2rem solid #333;
`;

export default Checkout;
