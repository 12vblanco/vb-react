import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import styled from "styled-components";

const stripe = loadStripe(
  "pk_test_51HqgwdGKpDMhyEuL11A63hDc42CNdjZbMH93xDPIumVyYlgGe5byVF9rXhgW0rs64r0uaDjQUqlwOUDXrbTZy9nx00cyCIwiBm"
);

const callApi = (e) => {
  e.preventDefault();
  fetch("/api/stripe", {
    method: "POST",
  })
    .then((response) => {
      console.log(response);

      return response.json();
    })
    .then((session) => {
      console.log(session);
      console.log(stripe);
      return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then((result) => {
      if (result.err) {
        return alert(result.err.message);
      }
    })
    .catch((err) => {
      return console.error("Error:", err);
    });
};

const Checkout = () => {
  return (
    <form onSubmit={callApi}>
      <ChkButton>Checkout</ChkButton>
    </form>
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
