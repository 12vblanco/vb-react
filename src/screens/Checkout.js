import React from "react";
import Stripe from "stripe";
import styled from "styled-components";

const stripe = Stripe(
  "pk_test_51HqgwdGKpDMhyEuL11A63hDc42CNdjZbMH93xDPIumVyYlgGe5byVF9rXhgW0rs64r0uaDjQUqlwOUDXrbTZy9nx00cyCIwiBm"
);

const callApi = () => {
  fetch("/api/stripe", {
    method: "POST",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (session) {
      return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then(function (result) {
      if (result.error) {
        alert(result.error.message);
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
};

const Checkout = () => {
  return (
    <div>
      <form action="/create-checkout-session" method="POST">
        <ChkButton type="submit" onClick={callApi}>
          Checkout
        </ChkButton>
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
